import { type RefObject, type MutableRefObject } from 'react';
interface UsePanelDragOptions {
    panelRef: RefObject<HTMLDivElement | null>;
    containerSize: {
        w: number;
        h: number;
    };
    panelState: 'floating' | 'snapped-left' | 'snapped-right';
    basePosition: MutableRefObject<{
        x: number;
        y: number;
    }>;
    onSnap: (side: 'left' | 'right') => void;
    onUnsnap: () => void;
    enabled?: boolean;
    /** Width of the panel being dragged, in pixels. Affects drag clamping,
     *  snap-bar normalization, and snap-corner hover zones. Defaults to 575px
     *  (Canvas view). Narrower values (e.g. 320 for Schema view) widen the
     *  effective hover zones proportionally. */
    panelWidth?: number;
}
interface UsePanelDragReturn {
    position: {
        x: number;
        y: number;
    };
    isDragging: boolean;
    isUnsnapping: boolean;
    snapHint: 'left' | 'right' | null;
    isExpanded: boolean;
    snapBarPosition: number;
    dragRegionProps: {
        onMouseDown: (e: React.MouseEvent) => void;
    };
    hoverZoneProps: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onMouseMove: (e: React.MouseEvent) => void;
    };
}
export declare function usePanelDrag({ panelRef, containerSize, panelState, basePosition, onSnap, onUnsnap, enabled, panelWidth, }: UsePanelDragOptions): UsePanelDragReturn;
export {};
