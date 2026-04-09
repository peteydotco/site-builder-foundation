import { memo, useCallback, useRef } from 'react'
import { LinkIcon, UnlinkIcon } from '../icons'

/**
 * ProUI UnlinkToggle — scoped port of ImAdamTM/site-themes UnlinkToggle.
 *
 * A small icon button that toggles between "linked" and "unlinked" states,
 * used by paired-input cells like PaddingField to decide whether the 4
 * directional values move together or independently. Icon swaps visually,
 * title attribute surfaces the next-action label for tooltips.
 *
 * Adam's version wraps in a Rosetta Tooltip; we use `title` here for a
 * dependency-free minimum. A richer tooltip can be layered later.
 */

export interface UnlinkToggleProps {
  linked: boolean
  onToggle: () => void
  className?: string
}

function UnlinkToggleComponent({ linked, onToggle, className }: UnlinkToggleProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleClick = useCallback(() => {
    ref.current?.blur?.()
    onToggle()
  }, [onToggle])

  const label = linked ? 'Unlink' : 'Link'
  const Icon = linked ? LinkIcon : UnlinkIcon

  return (
    <button
      ref={ref}
      type="button"
      className={className}
      onClick={handleClick}
      title={label}
      aria-label={label}
      aria-pressed={!linked}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        padding: 0,
        background: 'transparent',
        border: 'none',
        color: 'var(--rosetta-fg-muted, #666666)',
        cursor: 'pointer',
        borderRadius: 4,
        transition: 'color 0.15s ease, background 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--rosetta-fg-default, #0E0E0E)'
        e.currentTarget.style.background = 'var(--rosetta-bg-default, #F2F2F2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--rosetta-fg-muted, #666666)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <Icon width={14} height={14} />
    </button>
  )
}

const UnlinkToggle = memo(UnlinkToggleComponent)
export default UnlinkToggle
export { UnlinkToggle }
