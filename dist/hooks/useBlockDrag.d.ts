/**
 * useBlockDrag — SQSP 7.1 Fluid Engine drag behavior.
 *
 * Two-layer interaction:
 *   1. Block content follows mouse naturally (smooth)
 *   2. Blue container snaps to grid bricks discretely
 *
 * When the natural position crosses the 50% mark of the next brick,
 * the snapped container jumps. On release, the content springs into
 * the snapped position.
 */
interface BlockDragOptions {
    /** Current absolute left of the block (px) */
    initialLeft: number;
    /** Current absolute top of the block (px) */
    initialTop: number;
    /** Block width (px) */
    width: number;
    /** Block height (px) */
    height: number;
    /** Container (section) width for grid math */
    containerWidth: number;
    /** Height of the origin section — constrains drag so at least one brick stays inside */
    sectionHeight?: number;
    /** Whether dragging is enabled */
    enabled?: boolean;
    /** Called with final snapped position on drop */
    onDrop?: (left: number, top: number) => void;
}
interface BlockDragResult {
    /** Is the user actively dragging? */
    isDragging: boolean;
    /** Natural mouse-following offset from initial position */
    naturalOffset: {
        x: number;
        y: number;
    };
    /** Snapped grid position (absolute px) */
    snappedPosition: {
        left: number;
        top: number;
    };
    /** Is the block settling (spring animation after release)? */
    isSettling: boolean;
    /** Props to spread on the drag handle element */
    dragHandleProps: {
        onMouseDown: (e: React.MouseEvent) => void;
    };
}
export declare function useBlockDrag({ initialLeft, initialTop, width, height, containerWidth, sectionHeight, enabled, onDrop, }: BlockDragOptions): BlockDragResult;
export {};
