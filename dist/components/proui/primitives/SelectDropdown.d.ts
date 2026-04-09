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
    value: string;
    options: readonly string[];
    onChange: (value: string) => void;
    /** Optional display-label override per option. */
    labels?: Record<string, string>;
    'aria-label'?: string;
    className?: string;
}
declare function SelectDropdownComponent({ value, options, onChange, labels, 'aria-label': ariaLabel, className, }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
declare const SelectDropdown: import("react").MemoExoticComponent<typeof SelectDropdownComponent>;
export default SelectDropdown;
export { SelectDropdown };
