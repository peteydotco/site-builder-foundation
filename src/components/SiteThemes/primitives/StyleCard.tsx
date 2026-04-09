import { memo, ReactNode, useCallback, useMemo, useState } from 'react';
import styles from './StyleCard.module.css';

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

interface StyleCardProps {
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  disclosure?: string;
  wrap?: boolean;
  label?: string;
  delayShow?: number;
  animateReveal?: boolean;
  isShown?: boolean;
}

/**
 * Inline ButtonBox — a clickable card container with active/hover states.
 * Replaces the external ButtonBox + ButtonContext dependency.
 */
function ButtonBox({
  active = false,
  children,
  className,
  onClick,
  tag: Tag = 'button',
  ...rest
}: {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  tag?: 'button' | 'a';
} & Record<string, unknown>) {
  const [isHover, setIsHover] = useState(false);

  const classNameOutput = useMemo(
    () => cx(className, styles.buttonBox, isHover && 'hover', active && styles.active),
    [className, isHover, active]
  );

  const handlePointerEnter = useCallback(() => setIsHover(true), []);
  const handlePointerLeave = useCallback(() => setIsHover(false), []);
  const handleClick = (e: React.MouseEvent) => {
    setIsHover(false);
    onClick?.(e);
  };

  return (
    <Tag
      className={classNameOutput}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onClick={handleClick}
      tabIndex={0}
      {...(rest as React.HTMLAttributes<HTMLElement>)}
    >
      {children}
    </Tag>
  );
}

/**
 * Chevron SVG for the disclosure arrow. Filled angular glyph matching the
 * rest of the app's icon language (filled gray, not stroked blue).
 */
function Chevron() {
  return (
    <svg viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.44 12L5.44 7L0.44 2H2.561L7.561 7L2.561 12H0.44Z" fill="currentColor" />
    </svg>
  );
}

function StyleCard({
  active = false,
  onClick,
  children,
  disclosure,
  wrap = false,
  label,
  delayShow = 0,
  animateReveal = false,
  isShown = true,
}: StyleCardProps) {
  const classNameOutput = useMemo(
    () =>
      cx(
        styles.container,
        wrap && styles.wrap,
        animateReveal && isShown && styles.fadeup,
        animateReveal && !isShown && styles.fadeoutdown
      ),
    [wrap, isShown, animateReveal]
  );

  return (
    <div
      className={classNameOutput}
      style={{ '--animation-delay': `${delayShow}s` } as React.CSSProperties}
    >
      <ButtonBox active={active} onClick={onClick}>
        <div className={styles.label}>{label}</div>
        <div className={styles.content}>{children}</div>
      </ButtonBox>
      {disclosure && (
        <div className={styles.disclosureWrapper}>
          <ButtonBox
            tag="a"
            className={cx(styles.buttonBox, styles.disclosure)}
            href={disclosure}
          >
            <Chevron />
          </ButtonBox>
        </div>
      )}
    </div>
  );
}

export default memo(StyleCard);
