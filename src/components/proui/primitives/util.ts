/**
 * ProUI Input utilities — port of a subset of ImAdamTM/site-themes
 * src/components/form/Input/util.js.
 *
 * Scoped port: single-unit fields only. Multi-unit switching, auto mode,
 * and baseline-relative stepping are deferred to a future pass (the API
 * accepts `units` as an array so the upgrade is additive).
 */

export interface UnitConfig {
  unit: string
  min?: number
  max?: number
  step?: number
  shiftStep?: number
  precision?: number
  defaultValue?: number
}

export type UnitSpec = string | UnitConfig

export interface UnitConstraints {
  unit: string
  min: number
  max: number
  step: number
  shiftStep: number
  precision: number
  defaultValue: number
}

/**
 * Parse "10px" or "10.5°" or "-5rem" → { numStr, unit }.
 */
export function parseInput(text: string): { numStr: string; unit: string } {
  const match = text.match(/^(-?\d*\.?\d*)\s*([\u00C0-\u00FFa-zA-Z%°]*)$/)
  if (!match) return { numStr: text, unit: '' }
  const [, numStr, unit] = match
  return { numStr, unit }
}

/**
 * Resolve the unit config from a specs array. For the scoped port we
 * accept both the string form ('px') and the object form ({ unit: 'px',
 * min: 0, max: 100, ... }). Falls back to the first unit if the candidate
 * isn't in the list.
 */
export function resolveUnit(
  candidate: string | undefined,
  units: readonly UnitSpec[],
  defaults: Partial<UnitConstraints> = {},
): UnitConstraints {
  if (!units.length) {
    return {
      unit: '',
      min: defaults.min ?? -Infinity,
      max: defaults.max ?? Infinity,
      step: defaults.step ?? 1,
      shiftStep: defaults.shiftStep ?? 10,
      precision: defaults.precision ?? 0,
      defaultValue: defaults.defaultValue ?? 0,
    }
  }

  const entries = units.map(u => (typeof u === 'string' ? { unit: u } : u))
  const found = entries.find(e => e.unit === candidate) ?? entries[0]

  return {
    unit: found.unit,
    min: found.min ?? defaults.min ?? -Infinity,
    max: found.max ?? defaults.max ?? Infinity,
    step: found.step ?? defaults.step ?? 1,
    shiftStep: found.shiftStep ?? defaults.shiftStep ?? (found.step ?? 1) * 10,
    precision: found.precision ?? defaults.precision ?? 0,
    defaultValue: found.defaultValue ?? defaults.defaultValue ?? 0,
  }
}

/**
 * Clamp a number to [min, max].
 */
export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n))
}

/**
 * Round to a given precision (decimal places).
 */
export function roundTo(n: number, precision: number): number {
  if (!Number.isFinite(precision) || precision < 0) return n
  const factor = Math.pow(10, precision)
  return Math.round(n * factor) / factor
}

/**
 * Format a number for display with precision-aware trailing zeros.
 */
export function formatNumber(n: number, precision: number): string {
  if (!Number.isFinite(n)) return '0'
  if (precision <= 0) return String(Math.round(n))
  return n.toFixed(precision).replace(/\.?0+$/, '')
}

/**
 * Compute the next value after a step in the given direction, respecting
 * shift-step, clamping, and precision.
 */
export function stepValue(
  current: number,
  direction: number,
  constraints: UnitConstraints,
  isShift: boolean,
): number {
  const stepSize = isShift ? constraints.shiftStep : constraints.step
  let next = current + direction * stepSize
  next = clamp(next, constraints.min, constraints.max)
  next = roundTo(next, constraints.precision)
  return next
}

/**
 * Parse a user-typed string into a clean numeric value + unit + formatted
 * display string. Used on blur to commit text edits.
 */
export function sanitizeText(
  text: string,
  units: readonly UnitSpec[],
  defaults: Partial<UnitConstraints> = {},
  { clamp: shouldClamp = true }: { clamp?: boolean } = {},
): { value: number; unit: string; formatted: string } {
  const { numStr, unit: typedUnit } = parseInput(text)
  const constraints = resolveUnit(typedUnit, units, defaults)
  let value = parseFloat(numStr)
  if (Number.isNaN(value)) value = constraints.defaultValue

  if (shouldClamp) {
    value = clamp(value, constraints.min, constraints.max)
  }
  value = roundTo(value, constraints.precision)

  return {
    value,
    unit: constraints.unit,
    formatted: formatNumber(value, constraints.precision) + constraints.unit,
  }
}
