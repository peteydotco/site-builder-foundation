import React from 'react';
interface BlockHoverProps {
    label: string;
    disabled?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
    canvasWidth?: number;
    sectionHeight?: number;
    blockId?: string;
    draggedPosition?: {
        left: number;
        top: number;
    };
    onBlockDrop?: (id: string, left: number, top: number) => void;
    onDragStateChange?: (dragging: boolean) => void;
}
declare function BlockHover({ label, disabled, children, style, canvasWidth, sectionHeight, blockId, draggedPosition, onBlockDrop, onDragStateChange, }: BlockHoverProps): React.JSX.Element;
export default BlockHover;
