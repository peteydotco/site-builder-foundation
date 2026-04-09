import { memo, ReactNode, RefObject, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTransitionSwapContext } from '../utils/TransitionSwap';
import styles from './Dialog.module.css';

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

/* ─── Types ────────────────────────────────────────────────────────── */

interface DialogProps {
  children?: ReactNode;
  /** Element ref the dialog should position itself relative to */
  attachment?: RefObject<HTMLElement | null>;
  /** When true, the dialog floats next to the panel instead of docking */
  undocked?: boolean;
  /** Force-hide the dialog */
  isHidden?: boolean;
  /** Visual mode */
  mode?: 'light' | 'dark';
}

interface DialogPanelProps {
  children?: ReactNode;
}

interface DialogHeaderProps {
  children?: ReactNode;
}

interface DialogBodyProps {
  children?: ReactNode;
  padding?: boolean;
  padTop?: boolean;
  padBottom?: boolean;
}

/* ─── Sub-components ───────────────────────────────────────────────── */

function DialogPanel({ children }: DialogPanelProps) {
  return <div className={styles.panel}>{children}</div>;
}

function DialogHeader({ children }: DialogHeaderProps) {
  return <div className={styles.header}>{children}</div>;
}

function DialogBody({
  children,
  padding = false,
  padTop = false,
  padBottom = true,
}: DialogBodyProps) {
  const className = useMemo(
    () =>
      cx(
        styles.body,
        padding && styles.padding,
        padTop && styles.padTop,
        padBottom && styles.padBottom
      ),
    [padding, padTop, padBottom]
  );

  return <div className={className}>{children}</div>;
}

/* ─── Main Dialog ──────────────────────────────────────────────────── */

function DialogComponent({
  children,
  attachment,
  undocked = false,
  isHidden = false,
  mode = 'light',
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Merge the `isHidden` prop with any TransitionSwap parent's hidden state.
  // React Context propagates through portals, so even though the <dialog>
  // portals out to document.body, it still receives the parent TransitionSwap's
  // context. This is how the dialog picks up the appear/dismiss animation
  // from the PanelStyles wrapper.
  const { isHidden: ctxIsHidden } = useTransitionSwapContext();
  const effectiveIsHidden = isHidden || ctxIsHidden;

  // Position relative to the attachment element.
  //
  // Strategy: the Styles panel lives at the right edge of the viewport, so
  // positioning the dialog to the right of the attachment card (the previous
  // behaviour) pushes it off-screen. We flip sides based on available space:
  //
  //   1. Measure the dialog's own width (it's typically 320px via CSS var)
  //   2. Compute both left-side and right-side candidate x positions
  //   3. Prefer the side with more room, clamped to a small viewport margin
  //   4. Clamp y to keep the dialog in view vertically as well
  useEffect(() => {
    if (!attachment?.current || !dialogRef.current) return;

    const MARGIN = 8;

    const position = () => {
      const el = attachment.current;
      const dialog = dialogRef.current;
      if (!el || !dialog) return;

      const rect = el.getBoundingClientRect();
      const dialogRect = dialog.getBoundingClientRect();
      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;

      // Fall back to the CSS custom-prop width if the dialog hasn't been
      // measured yet (e.g. first render before layout settles).
      const dialogW = dialogRect.width > 0 ? dialogRect.width : 320;
      const dialogH = dialogRect.height > 0 ? dialogRect.height : 0;

      // Candidate positions — to the right of the card, or to the left.
      const rightX = rect.right + MARGIN;
      const leftX = rect.left - dialogW - MARGIN;

      const rightFits = rightX + dialogW <= viewportW - MARGIN;
      const leftFits = leftX >= MARGIN;

      let x: number;
      if (rightFits) {
        x = rightX;
      } else if (leftFits) {
        x = leftX;
      } else {
        // Neither side fits cleanly — pick whichever has more room.
        const rightRoom = viewportW - rect.right;
        const leftRoom = rect.left;
        x = rightRoom >= leftRoom ? rightX : leftX;
      }

      // Final horizontal clamp to keep the dialog in view.
      if (x + dialogW > viewportW - MARGIN) x = viewportW - dialogW - MARGIN;
      if (x < MARGIN) x = MARGIN;

      // Vertical clamp — align top with the card, but keep the bottom visible.
      let y = rect.top;
      if (dialogH > 0) {
        if (y + dialogH > viewportH - MARGIN) {
          y = Math.max(MARGIN, viewportH - dialogH - MARGIN);
        }
        if (y < MARGIN) y = MARGIN;
      }

      dialog.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
    };

    // Initial positioning — run twice because the first measurement is
    // sometimes zero before the browser has painted the dialog.
    position();
    const raf = requestAnimationFrame(position);

    // Re-position on scroll/resize
    window.addEventListener('resize', position);
    window.addEventListener('scroll', position, true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', position);
      window.removeEventListener('scroll', position, true);
    };
  }, [attachment]);

  const className = useMemo(
    () =>
      cx(
        styles.container,
        undocked && styles.undocked,
        effectiveIsHidden && styles.hidden,
        styles[`mode-${mode}` as keyof typeof styles]
      ),
    [undocked, effectiveIsHidden, mode]
  );

  const dialog = (
    <dialog ref={dialogRef} className={className} open>
      <div className={styles.wrapper}>
        <div className={styles.background}>
          <div className={styles.backgroundBox} />
        </div>
        <div className={styles.box}>{children}</div>
      </div>
    </dialog>
  );

  return createPortal(dialog, document.body);
}

/* ─── Compound export ──────────────────────────────────────────────── */

const Dialog = memo(DialogComponent) as ReturnType<typeof memo<typeof DialogComponent>> & {
  Panel: typeof DialogPanel;
  Header: typeof DialogHeader;
  Body: typeof DialogBody;
};

Dialog.Panel = memo(DialogPanel) as unknown as typeof DialogPanel;
Dialog.Header = memo(DialogHeader) as unknown as typeof DialogHeader;
Dialog.Body = memo(DialogBody) as unknown as typeof DialogBody;

export default Dialog;
