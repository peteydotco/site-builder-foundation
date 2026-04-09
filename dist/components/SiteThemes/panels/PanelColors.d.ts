interface PanelColorsProps {
    depth?: number;
    isActive?: boolean;
}
/**
 * Colors drill-in panel — reached by clicking the chevron on the Colors card
 * on the Styles root. Matches the Squarespace 7.1 "Colors" screen:
 *
 *   • 5-swatch palette preview (click opens the Themes popover on root)
 *   • "Edit Palette >" row (stub — opens palette editor, TBD)
 *   • "Section color themes" header with info icon
 *   • Themes in use on this page, then the rest
 *
 * Theme selection is currently read-only at the panel level. The per-section
 * assignment flow lives in the consumer app (clicking a theme here is a
 * no-op / previews only). Future work: clicking a theme here could cycle
 * through sections currently on the page.
 */
declare function PanelColors({ depth, isActive }: PanelColorsProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof PanelColors>;
export default _default;
