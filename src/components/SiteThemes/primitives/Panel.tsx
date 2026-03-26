import { memo, ReactNode, useMemo } from 'react';
import styles from './Panel.module.css';

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

interface PanelProps {
  children?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  depth?: number;
  isActive?: boolean;
}

function Panel({ children, title, description, depth = 0, isActive: isPanelActive = false }: PanelProps) {
  const className = useMemo(
    () => cx(styles.container, isPanelActive && styles.active, isPanelActive && styles.current),
    [isPanelActive]
  );

  return (
    <div className={className} style={{ '--depth': depth } as React.CSSProperties}>
      {isPanelActive && (
        <>
          {(title || description) && (
            <div className={styles.header}>
              {title && <h1>{title}</h1>}
              {description && <h2>{description}</h2>}
            </div>
          )}
          {children}
        </>
      )}
    </div>
  );
}

export default memo(Panel);
