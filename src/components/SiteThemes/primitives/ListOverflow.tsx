import { memo, ReactNode, useCallback, useMemo, useState } from 'react';

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

interface ListOverflowProps<T = unknown> {
  items: T[];
  getItem: (item: T, index: number) => ReactNode;
  columns?: number;
  max?: number;
}

/* Inline styles since the CSS is minimal enough to not need a module */

const containerStyle: React.CSSProperties = {
  display: 'grid',
  gap: '11px',
};

const moreButtonStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  height: '55px',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'center',
  padding: '16.5px 22px',
  border: 'solid 1px var(--c-border)',
  borderRadius: '4px',
  background: 'var(--c-bg)',
  cursor: 'pointer',
  fontSize: 'var(--s-font-sm)',
  fontWeight: 500,
  letterSpacing: '0.5px',
  lineHeight: '22px',
  textTransform: 'uppercase' as const,
};

function ListOverflow<T = unknown>({
  items,
  getItem,
  columns = 1,
  max = 8,
}: ListOverflowProps<T>) {
  const [isOverflowShown, setShowOverflow] = useState(false);

  const initial = useMemo(
    () => items.slice(0, max).map((config, i) => getItem(config, i)),
    [items, getItem, max]
  );

  const overflow = useMemo(
    () => items.slice(max).map((config, i) => getItem(config, i + max)),
    [items, getItem, max]
  );

  const hasOverflow = overflow.length > 0;

  const handleToggle = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setShowOverflow(prev => !prev);
    },
    []
  );

  const listStyle: React.CSSProperties = useMemo(
    () => ({
      display: 'grid',
      gap: 'inherit',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
    }),
    [columns]
  );

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        {initial}
        {isOverflowShown && overflow}
      </div>
      {hasOverflow && (
        <button style={moreButtonStyle} onClick={handleToggle}>
          {isOverflowShown ? 'Show Less' : 'Show All'}
        </button>
      )}
    </div>
  );
}

export default memo(ListOverflow) as typeof ListOverflow;
