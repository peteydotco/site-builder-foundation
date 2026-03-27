import React from 'react';
export default function Tooltip({ text, anchorRef, visible, }: {
    text: string;
    anchorRef: React.RefObject<HTMLElement | null>;
    visible: boolean;
}): React.ReactPortal | null;
/**
 * Hook to manage tooltip delay logic.
 * Returns { hovered, showTooltip, onMouseEnter, onMouseLeave, ref }
 */
export declare function useTooltip(delay?: number): {
    ref: React.MutableRefObject<HTMLElement | null>;
    hovered: boolean;
    showTooltip: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};
