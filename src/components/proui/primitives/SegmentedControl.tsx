import { memo, useCallback } from 'react'
import styles from './SegmentedControl.module.css'

/**
 * ProUI SegmentedControl — pill button group for enum/select fields with
 * a small number of options (≤3). All options are visible at once.
 *
 * Controlled component: parent passes the current `value` and receives
 * updates via `onChange`. Option values are strings (matching the LLM
 * schema-contract's `type: 'select', options: string[]`).
 *
 * For larger option sets (4+), use `SelectDropdown` instead — a portaled
 * popover matching the ColorThemeControl pattern.
 */

export interface SegmentedControlProps {
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  /** Optional display-label override per option. Keys are option values,
   *  values are the user-facing label. Missing keys fall back to the
   *  option value itself (title-cased). */
  labels?: Record<string, string>
  'aria-label'?: string
  className?: string
}

function SegmentedControlComponent({
  value,
  options,
  onChange,
  labels,
  'aria-label': ariaLabel,
  className,
}: SegmentedControlProps) {
  const handleClick = useCallback(
    (opt: string) => () => {
      if (opt !== value) onChange(opt)
    },
    [value, onChange],
  )

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={`${styles.container}${className ? ' ' + className : ''}`}
    >
      {options.map(opt => {
        const selected = opt === value
        const label = labels?.[opt] ?? toTitleCase(opt)
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={handleClick(opt)}
            className={`${styles.option}${selected ? ' ' + styles.selected : ''}`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function toTitleCase(s: string): string {
  if (!s) return s
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const SegmentedControl = memo(SegmentedControlComponent)
export default SegmentedControl
export { SegmentedControl }
