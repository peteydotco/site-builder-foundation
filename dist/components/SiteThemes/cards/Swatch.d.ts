interface SwatchProps {
    colors?: string[];
    isInteractive?: boolean;
    /**
     * Layout variant.
     *  - 'equal' (default): all 5 swatches are 20% width — used when the
     *    palette is the headline element on a card or in a popover.
     *  - 'compact': the first swatch is wider (40%) and the rest are 15%
     *    each — used inside the Themes card where the palette is part of a
     *    larger lockup with the Aa glyph and button preview.
     */
    variant?: 'equal' | 'compact';
}
declare function Swatch(props: SwatchProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof Swatch>;
export default _default;
