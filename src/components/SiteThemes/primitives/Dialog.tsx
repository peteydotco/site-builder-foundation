import { memo, ReactNode, RefObject, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
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

  // Position relative to the attachment element
  useEffect(() => {
    if (!attachment?.current || !dialogRef.current) return;

    const position = () => {
      const el = attachment.current;
      const dialog = dialogRef.current;
      if (!el || !dialog) return;

      const rect = el.getBoundingClientRect();
      dialog.style.transform = `translate3d(${Math.round(rect.right + 8)}px, ${Math.round(rect.top)}px, 0)`;
    };

    position();

    // Re-position on scroll/resize
    window.addEventListener('resize', position);
    window.addEventListener('scroll', position, true);

    return () => {
      window.removeEventListener('resize', position);
      window.removeEventListener('scroll', position, true);
    };
  }, [attachment]);

  const className = useMemo(
    () =>
      cx(
        styles.container,
        undocked && styles.undocked,
        isHidden && styles.hidden,
        styles[`mode-${mode}` as keyof typeof styles]
      ),
    [undocked, isHidden, mode]
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
