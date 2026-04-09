import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './SelectDropdown.module.css'

/**
 * ProUI SelectDropdown — portaled select for enum fields with 4+ options.
 *
 * The trigger is a ProUI Input-shaped button showing the current label;
 * clicking opens a popover (rendered into document.body via createPortal)
 * with a scrollable list of options. The popover uses `position: fixed`
 * computed from the trigger's bounding rect, so it escapes any
 * overflow: auto ancestors (e.g. the IDE panel scroll container).
 *
 * Dismiss: pointerdown outside the trigger/popover closes it. Scroll or
 * resize while open repositions the popover automatically.
 *
 * For enum fields with 2–3 options use `SegmentedControl` instead.
 */

export interface SelectDropdownProps {
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  /** Optional display-label override per option. */
  labels?: Record<string, string>
  'aria-label'?: string
  className?: string
}

function SelectDropdownComponent({
  value,
  options,
  onChange,
  labels,
  'aria-label': ariaLabel,
  className,
}: SelectDropdownProps) {
  const [open, setOpen] = useState(false)
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  // Recompute trigger rect on open + on scroll/resize while open.
  useLayoutEffect(() => {
    if (!open) return
    const update = () => {
      if (triggerRef.current) {
        setTriggerRect(triggerRef.current.getBoundingClientRect())
      }
    }
    update()
    window.addEventListener('scroll', update, true)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update, true)
      window.removeEventListener('resize', update)
    }
  }, [open])

  // Click outside to dismiss — pointerdown so selection inside the
  // popover still fires its click before we close.
  useEffect(() => {
    if (!open) return
    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (popoverRef.current?.contains(target)) return
      if (triggerRef.current?.contains(target)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [open])

  const handleSelect = useCallback(
    (opt: string) => () => {
      onChange(opt)
      setOpen(false)
    },
    [onChange],
  )

  const currentLabel = labels?.[value] ?? toTitleCase(value)

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className={`${styles.trigger}${open ? ' ' + styles.open : ''}${className ? ' ' + className : ''}`}
      >
        <span className={styles.label}>{currentLabel}</span>
        <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && triggerRect && createPortal(
        <div
          ref={popoverRef}
          role="listbox"
          aria-label={ariaLabel}
          className={styles.popover}
          style={{
            top: triggerRect.bottom + 6,
            left: triggerRect.left,
            width: triggerRect.width,
          }}
        >
          {options.map(opt => {
            const selected = opt === value
            const label = labels?.[opt] ?? toTitleCase(opt)
            return (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={handleSelect(opt)}
                className={`${styles.option}${selected ? ' ' + styles.selected : ''}`}
              >
                {label}
              </button>
            )
          })}
        </div>,
        document.body,
      )}
    </>
  )
}

function toTitleCase(s: string): string {
  if (!s) return s
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const SelectDropdown = memo(SelectDropdownComponent)
export default SelectDropdown
export { SelectDropdown }
