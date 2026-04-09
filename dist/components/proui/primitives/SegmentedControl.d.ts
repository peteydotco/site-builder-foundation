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
    value: string;
    options: readonly string[];
    onChange: (value: string) => void;
    /** Optional display-label override per option. Keys are option values,
     *  values are the user-facing label. Missing keys fall back to the
     *  option value itself (title-cased). */
    labels?: Record<string, string>;
    'aria-label'?: string;
    className?: string;
}
declare function SegmentedControlComponent({ value, options, onChange, labels, 'aria-label': ariaLabel, className, }: SegmentedControlProps): import("react/jsx-runtime").JSX.Element;
declare const SegmentedControl: import("react").MemoExoticComponent<typeof SegmentedControlComponent>;
export default SegmentedControl;
export { SegmentedControl };
