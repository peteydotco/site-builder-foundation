/**
 * ProUI PaddingField — scoped port of ImAdamTM/site-themes PaddingField.
 *
 * A ProUI row that exposes 4-direction padding with a linked/unlinked
 * affordance. When linked, the cell shows a Vertical + Horizontal pair
 * (top=bottom, left=right, controlled by two inputs). When unlinked,
 * four independent inputs surface for top, right, bottom, left.
 *
 * Controlled component: parent owns `value` as `{ top, right, bottom,
 * left }` numbers. The `linked` flag can be parent-controlled (pass
 * `linked` + `onLinkChange`) or cell-managed (omit both — the cell
 * infers linked state from whether top===bottom && left===right).
 *
 * Adam's version supports per-direction units (px/rem/%); the scoped
 * port fixes the unit to px. Upgrade is additive — swap the `units`
 * prop to an array later.
 */
export interface PaddingValue {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface PaddingFieldProps {
    value: PaddingValue;
    onChange: (next: PaddingValue) => void;
    /** Optional: parent-controlled link state. Omit for cell-managed. */
    linked?: boolean;
    onLinkChange?: (linked: boolean) => void;
    /** Minimum value for all directions. Default 0. */
    min?: number;
    /** Maximum value for all directions. Default 200. */
    max?: number;
    /** Step size. Default 1. */
    step?: number;
}
declare function PaddingFieldComponent({ value, onChange, linked: linkedProp, onLinkChange, min, max, step, }: PaddingFieldProps): import("react/jsx-runtime").JSX.Element;
declare const PaddingField: import("react").MemoExoticComponent<typeof PaddingFieldComponent>;
export default PaddingField;
export { PaddingField };
