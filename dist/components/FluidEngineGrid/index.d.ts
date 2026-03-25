export declare const FE_COLUMNS = 12;
export declare const FE_COL_GAP = 33;
export declare const FE_ROW_GAP = 16;
export declare const FE_MARGIN = 33;
/** Compute brick width for a given container width */
export declare function feBrickWidth(containerWidth: number): number;
/** Brick height = half the brick width (2 rows per column width) */
export declare function feBrickHeight(containerWidth: number): number;
/** Section height that fits exactly N rows, flush top and bottom */
export declare function feRowsHeight(rows: number, containerWidth: number): number;
/** Snap a pixel height up to the nearest whole number of rows */
export declare function feSnapHeight(px: number, containerWidth: number): number;
/** Snap a pixel position to the nearest row boundary */
export declare function feSnapTop(px: number, containerWidth: number): number;
/** Snap a pixel left position to the nearest column boundary */
export declare function feSnapLeft(px: number, containerWidth: number): number;
/**
 * Fluid Engine Grid — bricks scale with viewport, gaps stay fixed.
 * First row is flush with section top, last row flush with bottom.
 */
export default function FluidEngineGrid({ fadeIn }: {
    fadeIn?: boolean;
}): import("react/jsx-runtime").JSX.Element;
