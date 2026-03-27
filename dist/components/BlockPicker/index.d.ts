import React from 'react';
interface BlockPickerProps {
    onSelect: (blockName: string) => void;
    onClose: () => void;
    blockIconBasePath?: string;
}
export default function BlockPicker({ onSelect, onClose, blockIconBasePath }: BlockPickerProps): React.JSX.Element;
interface AddBlockToolbarProps {
    onAddBlock: () => void;
}
export declare function AddBlockToolbar({ onAddBlock }: AddBlockToolbarProps): React.JSX.Element;
export declare function EditHeaderButton({ onClick }: {
    onClick: (e: React.MouseEvent) => void;
}): React.JSX.Element;
export {};
