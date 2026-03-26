import { memo, ReactNode, useCallback, useMemo, useState } from 'react';
import styles from './Card.module.css';

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

interface CardProps {
  className?: string;
  children?: ReactNode;
  active?: boolean;
  shimmer?: boolean;
  wrap?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  delayShow?: number;
  animateReveal?: boolean;
}

function Card({
  className,
  children,
  active = false,
  shimmer = true,
  wrap = false,
  onClick,
  delayShow = 0,
  animateReveal = false,
  ...rest
}: CardProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  const [isHover, setIsHover] = useState(false);

  const classNameOutput = useMemo(
    () =>
      cx(
        className,
        styles.container,
        isHover && styles.hover,
        active && styles.active,
        animateReveal && styles.fadeup
      ),
    [className, isHover, active, animateReveal]
  );

  const handlePointerEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsHover(false);
    onClick?.(e);
  };

  return (
    <button
      className={classNameOutput}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onClick={handleClick}
      style={{ '--animation-delay': `${delayShow}s` } as React.CSSProperties}
      {...rest}
    >
      <div className={styles.content}>
        {wrap ? <div className={styles.wrap}>{children}</div> : children}
      </div>
      {shimmer && <div className={styles.shimmer} aria-hidden="true" />}
    </button>
  );
}

export default memo(Card);
