import React, { type ReactNode } from 'react';
import { type UnitSpec } from './util';
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
    value: number;
    /** The committed unit (from the resolved unit config). */
    unit: string;
    /** Pre-formatted string (e.g. "100%", "15deg") for display. */
    formatted: string;
}
export interface InputProps {
    id?: string;
    /** Controlled value. For type="number" this is a `number`. */
    value: number;
    /** Fires on each commit (scrub step, stepper click, blur after typing). */
    onChange: (payload: InputChangePayload) => void;
    /** Optional units spec. Single-unit recommended for now. */
    units?: readonly UnitSpec[];
    /** Override min (takes precedence over unit config). */
    min?: number;
    /** Override max (takes precedence over unit config). */
    max?: number;
    /** Override step (takes precedence over unit config). */
    step?: number;
    /** Override precision (takes precedence over unit config). */
    precision?: number;
    /** Icon rendered inside the input (left slot by default). */
    icon?: ReactNode;
    /** Place the stepper buttons on the left instead of the right. */
    stepperSide?: 'left' | 'right';
    /** Scrub direction. Defaults to vertical (drag up/down). */
    scrubDirection?: 'horizontal' | 'vertical';
    /** Disable stepper buttons (scrub still works). */
    stepper?: boolean;
    /** Called when drag/scrub starts — parent can use for interaction gating. */
    onInteractionStart?: () => void;
    /** Called when drag/scrub ends. */
    onInteractionEnd?: () => void;
}
declare function InputComponent({ id, value, onChange, units, min, max, step, precision, icon, stepperSide, scrubDirection, stepper, onInteractionStart, onInteractionEnd, }: InputProps): import("react/jsx-runtime").JSX.Element;
declare const Input: React.MemoExoticComponent<typeof InputComponent>;
export default Input;
export { Input };
