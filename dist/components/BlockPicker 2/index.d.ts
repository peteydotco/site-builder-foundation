import React from 'react';
interface BlockPickerProps {
    onSelect: (blockName: string) => void;
    onClose: () => void;
    blockIconBasePath?: string;
}
export default function BlockPicker({ onSelect, onClose, blockIconBasePath }: BlockPickerProps): import("react/jsx-runtime").JSX.Element;
interface AddBlockToolbarProps {
    onAddBlock: () => void;
}
export declare function AddBlockToolbar({ onAddBlock }: AddBlockToolbarProps): import("react/jsx-runtime").JSX.Element;
export declare function EditHeaderButton({ onClick }: {
    onClick: (e: React.MouseEvent) => void;
}): import("react/jsx-runtime").JSX.Element;
export {};
