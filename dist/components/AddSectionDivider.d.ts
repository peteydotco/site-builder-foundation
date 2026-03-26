import React from 'react';
interface AddSectionDividerProps {
    onClick?: (e: React.MouseEvent) => void;
    onPromptSubmit?: (prompt: string) => void;
    aiStatesPath?: string;
}
declare function AddSectionDivider({ onClick, onPromptSubmit, aiStatesPath }: AddSectionDividerProps): import("react/jsx-runtime").JSX.Element;
export default AddSectionDivider;
