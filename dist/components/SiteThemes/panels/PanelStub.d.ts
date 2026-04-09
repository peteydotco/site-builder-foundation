interface PanelStubProps {
    title: string;
    depth?: number;
    isActive?: boolean;
}
/**
 * Placeholder drill-in panel for sections that don't yet have a dedicated
 * view (Fonts, Buttons, Forms, Animations, Spacing). Renders the Panel
 * primitive with a "Coming soon" message so the back-nav chrome still works.
 */
declare function PanelStub({ title, depth, isActive }: PanelStubProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof PanelStub>;
export default _default;
