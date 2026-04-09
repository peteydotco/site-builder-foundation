/**
 * ProUI Input utilities — port of a subset of ImAdamTM/site-themes
 * src/components/form/Input/util.js.
 *
 * Scoped port: single-unit fields only. Multi-unit switching, auto mode,
 * and baseline-relative stepping are deferred to a future pass (the API
 * accepts `units` as an array so the upgrade is additive).
 */
export interface UnitConfig {
    unit: string;
    min?: number;
    max?: number;
    step?: number;
    shiftStep?: number;
    precision?: number;
    defaultValue?: number;
}
export type UnitSpec = string | UnitConfig;
export interface UnitConstraints {
    unit: string;
    min: number;
    max: number;
    step: number;
    shiftStep: number;
    precision: number;
    defaultValue: number;
}
/**
 * Parse "10px" or "10.5°" or "-5rem" → { numStr, unit }.
 */
export declare function parseInput(text: string): {
    numStr: string;
    unit: string;
};
/**
 * Resolve the unit config from a specs array. For the scoped port we
 * accept both the string form ('px') and the object form ({ unit: 'px',
 * min: 0, max: 100, ... }). Falls back to the first unit if the candidate
 * isn't in the list.
 */
export declare function resolveUnit(candidate: string | undefined, units: readonly UnitSpec[], defaults?: Partial<UnitConstraints>): UnitConstraints;
/**
 * Clamp a number to [min, max].
 */
export declare function clamp(n: number, min: number, max: number): number;
/**
 * Round to a given precision (decimal places).
 */
export declare function roundTo(n: number, precision: number): number;
/**
 * Format a number for display with precision-aware trailing zeros.
 */
export declare function formatNumber(n: number, precision: number): string;
/**
 * Compute the next value after a step in the given direction, respecting
 * shift-step, clamping, and precision.
 */
export declare function stepValue(current: number, direction: number, constraints: UnitConstraints, isShift: boolean): number;
/**
 * Parse a user-typed string into a clean numeric value + unit + formatted
 * display string. Used on blur to commit text edits.
 */
export declare function sanitizeText(text: string, units: readonly UnitSpec[], defaults?: Partial<UnitConstraints>, { clamp: shouldClamp }?: {
    clamp?: boolean;
}): {
    value: number;
    unit: string;
    formatted: string;
};
