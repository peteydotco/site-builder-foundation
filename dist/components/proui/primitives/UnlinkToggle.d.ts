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
    linked: boolean;
    onToggle: () => void;
    className?: string;
}
declare function UnlinkToggleComponent({ linked, onToggle, className }: UnlinkToggleProps): import("react/jsx-runtime").JSX.Element;
declare const UnlinkToggle: import("react").MemoExoticComponent<typeof UnlinkToggleComponent>;
export default UnlinkToggle;
export { UnlinkToggle };
