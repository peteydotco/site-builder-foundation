import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import styles from './Input.module.css'
import { useStepper } from '../hooks/useStepper'
import {
  formatNumber,
  resolveUnit,
  sanitizeText,
  stepValue,
  type UnitSpec,
} from './util'

/**
 * ProUI Input — scoped port of ImAdamTM/site-themes Input.js.
 *
 * Numeric input with scrub-to-change, stepper buttons, and icon slot.
 * Single-unit only for now — multi-unit switching, range slider, and
 * auto mode are deferred (the API accepts `units` as an array so those
 * upgrades are additive).
 *
 * Controlled component: parent owns `value` and receives updates via
 * `onChange`. The internal `displayText` state tracks the in-flight text
 * during typing/scrubbing; it commits back to the parent on blur or on
 * each scrub step.
 *
 * Usage:
 *   <Input
 *     id="opacity"
 *     type="number"
 *     value={opacity}
 *     units={[{ unit: '%', min: 0, max: 100, step: 1, precision: 0 }]}
 *     onChange={({ value }) => setOpacity(value)}
 *     icon={<OpacityIcon />}
 *   />
 */

export interface InputChangePayload {
  /** The committed numeric value. */
  value: number
  /** The committed unit (from the resolved unit config). */
  unit: string
  /** Pre-formatted string (e.g. "100%", "15deg") for display. */
  formatted: string
}

export interface InputProps {
  id?: string
  /** Controlled value. For type="number" this is a `number`. */
  value: number
  /** Fires on each commit (scrub step, stepper click, blur after typing). */
  onChange: (payload: InputChangePayload) => void
  /** Optional units spec. Single-unit recommended for now. */
  units?: readonly UnitSpec[]
  /** Override min (takes precedence over unit config). */
  min?: number
  /** Override max (takes precedence over unit config). */
  max?: number
  /** Override step (takes precedence over unit config). */
  step?: number
  /** Override precision (takes precedence over unit config). */
  precision?: number
  /** Icon rendered inside the input (left slot by default). */
  icon?: ReactNode
  /** Place the stepper buttons on the left instead of the right. */
  stepperSide?: 'left' | 'right'
  /** Scrub direction. Defaults to vertical (drag up/down). */
  scrubDirection?: 'horizontal' | 'vertical'
  /** Disable stepper buttons (scrub still works). */
  stepper?: boolean
  /** Called when drag/scrub starts — parent can use for interaction gating. */
  onInteractionStart?: () => void
  /** Called when drag/scrub ends. */
  onInteractionEnd?: () => void
}

function InputComponent({
  id,
  value,
  onChange,
  units = ['px'],
  min,
  max,
  step,
  precision,
  icon,
  stepperSide = 'right',
  scrubDirection = 'vertical',
  stepper = true,
  onInteractionStart,
  onInteractionEnd,
}: InputProps) {
  const isHorizontalScrub = scrubDirection === 'horizontal'

  // Resolve the unit constraints from the first unit spec, with per-prop
  // overrides. For the scoped port we assume a single unit — the first
  // entry in the units array.
  const constraints = useMemo(
    () => resolveUnit(
      typeof units[0] === 'string' ? units[0] : units[0]?.unit,
      units,
      {
        min,
        max,
        step,
        precision,
        defaultValue: value,
      },
    ),
    [units, min, max, step, precision, value],
  )

  // Display text — what the user sees in the input. During scrub/stepping
  // this is driven by the committed value. During text editing it tracks
  // what the user is typing and commits on blur.
  const [displayText, setDisplayText] = useState(
    () => formatNumber(value, constraints.precision) + constraints.unit,
  )
  const [focused, setFocused] = useState(false)

  // Sync displayText from value when value changes externally (e.g. scrub
  // commit, parent reset). Skip if the user is actively typing.
  useEffect(() => {
    if (focused) return
    setDisplayText(formatNumber(value, constraints.precision) + constraints.unit)
  }, [value, constraints.precision, constraints.unit, focused])

  // Track latest value in a ref so the step callback sees the live number
  // without needing to rebuild useStepper's listeners on every change.
  const valueRef = useRef(value)
  valueRef.current = value

  const handleStep = useCallback(
    (delta: number, isFirst: boolean, isDrag: boolean) => {
      if (isFirst && !isDrag) onInteractionStart?.()

      const next = stepValue(
        valueRef.current,
        delta,
        constraints,
        /* isShift */ false,
      )
      if (next === valueRef.current) return
      valueRef.current = next
      onChange({
        value: next,
        unit: constraints.unit,
        formatted: formatNumber(next, constraints.precision) + constraints.unit,
      })
    },
    [constraints, onChange, onInteractionStart],
  )

  const handleStepBlur = useCallback(() => {
    onInteractionEnd?.()
  }, [onInteractionEnd])

  const {
    scrubRef,
    upRef,
    downRef,
    isActive,
    isDragging,
    isMax,
    isMin,
  } = useStepper({
    onStep: handleStep,
    onBlur: handleStepBlur,
    value,
    min: constraints.min,
    max: constraints.max,
    isHorizontalScrub,
  })

  // ── Text input handlers ────────────────────────────────────────────────

  const handleFocus = useCallback(() => setFocused(true), [])

  const handleBlur = useCallback(() => {
    setFocused(false)
    const sanitized = sanitizeText(displayText, units, {
      min: constraints.min,
      max: constraints.max,
      step: constraints.step,
      precision: constraints.precision,
      defaultValue: constraints.defaultValue,
    })
    if (sanitized.value !== value) {
      onChange(sanitized)
    } else {
      // Reset display to canonical form in case user typed "010" etc.
      setDisplayText(sanitized.formatted)
    }
  }, [displayText, units, constraints, value, onChange])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDisplayText(e.target.value)
    },
    [],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        ;(e.target as HTMLInputElement).blur()
      } else if (e.key === 'Escape') {
        setDisplayText(formatNumber(value, constraints.precision) + constraints.unit)
        ;(e.target as HTMLInputElement).blur()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        handleStep(e.shiftKey ? 10 : 1, true, false)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        handleStep(e.shiftKey ? -10 : -1, true, false)
      }
    },
    [value, constraints.precision, constraints.unit, handleStep],
  )

  // ── Classes ────────────────────────────────────────────────────────────

  const containerClass = [
    styles.container,
    focused && styles.focused,
    (isActive || isDragging) && styles.scrubbing,
    isHorizontalScrub && styles.horizontalScrub,
    stepperSide === 'left' && styles.stepperLeft,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClass}>
      {/* Scrub area covers the whole container — clicking anywhere except
          the input or stepper buttons initiates a scrub drag. */}
      <button
        ref={scrubRef}
        className={styles.scrubArea}
        tabIndex={-1}
        aria-label="Scrub to change value"
        type="button"
      />

      {icon && <div className={styles.iconSlot}>{icon}</div>}

      <input
        id={id}
        className={styles.inputEl}
        type="text"
        inputMode="decimal"
        value={displayText}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />

      {stepper && (
        <div className={styles.stepper}>
          <button
            ref={upRef}
            type="button"
            className={`${styles.stepperBtn} ${styles.top}`}
            tabIndex={-1}
            disabled={isMax}
            aria-label="Step up"
          >
            <Chevron />
          </button>
          <button
            ref={downRef}
            type="button"
            className={`${styles.stepperBtn} ${styles.bottom}`}
            tabIndex={-1}
            disabled={isMin}
            aria-label="Step down"
          >
            <Chevron />
          </button>
        </div>
      )}
    </div>
  )
}

function Chevron() {
  return (
    <svg viewBox="0 0 10 10" fill="none">
      <path d="M2 7L5 4L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const Input = memo(InputComponent)
export default Input
export { Input }
