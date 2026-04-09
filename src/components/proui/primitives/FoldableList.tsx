import React, { memo, useCallback, useMemo, useState, type ReactNode } from 'react'

/**
 * ProUI FoldableList — scoped port of ImAdamTM/site-themes FoldableList.
 *
 * A group container that renders its children stacked, with an optional
 * "show more / less" toggle when a `defaultVisibleCount` is set. Adam's
 * full version supports staggered TransitionSwap animations and a
 * FoldableListContext; we strip to the functional essentials since the
 * cells use it mainly as a grouping container with per-item visibility
 * toggles.
 *
 * Usage:
 *   <FoldableList>
 *     <FoldableList.Item><Field>...</Field></FoldableList.Item>
 *     <FoldableList.Item><Field>...</Field></FoldableList.Item>
 *   </FoldableList>
 */

export interface FoldableListItemProps {
  children?: ReactNode
  /** If false, hide this item (used by Adam's pattern for add-property
   *  toggles — an item can be "inactive" and not show until activated). */
  expanded?: boolean
}

function ItemComponent({ children, expanded = true }: FoldableListItemProps) {
  if (!expanded) return null
  return <div style={{ display: 'contents' }}>{children}</div>
}
const Item = memo(ItemComponent)

export interface FoldableListProps {
  children?: ReactNode
  className?: string
  /** Show only the first N items initially, with a "More" toggle to
   *  expand the rest. Omit for "always show all". */
  defaultVisibleCount?: number
  labelExpand?: string
  labelCollapse?: string
}

function FoldableListComponent({
  children,
  className,
  defaultVisibleCount,
  labelExpand = 'More',
  labelCollapse = 'Less',
}: FoldableListProps) {
  const [expanded, setExpanded] = useState(false)
  const toggle = useCallback(() => setExpanded(e => !e), [])

  const childArray = useMemo(
    () => React.Children.toArray(children).filter(Boolean),
    [children],
  )

  const hasMore = typeof defaultVisibleCount === 'number' && childArray.length > defaultVisibleCount
  const visibleChildren = hasMore && !expanded
    ? childArray.slice(0, defaultVisibleCount!)
    : childArray

  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'column', gap: 'var(--proui-field-gap, 8px)' }}
    >
      {visibleChildren}
      {hasMore && (
        <button
          type="button"
          onClick={toggle}
          style={{
            alignSelf: 'flex-end',
            background: 'transparent',
            border: 'none',
            color: 'var(--rosetta-fg-muted, #666666)',
            font: 'inherit',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            padding: '4px 0',
          }}
        >
          {expanded ? labelCollapse : labelExpand}
        </button>
      )}
    </div>
  )
}

interface FoldableListWithStatics extends React.MemoExoticComponent<typeof FoldableListComponent> {
  Item: typeof Item
}

const FoldableList = memo(FoldableListComponent) as FoldableListWithStatics
FoldableList.Item = Item

export default FoldableList
export { Item as FoldableListItem }
