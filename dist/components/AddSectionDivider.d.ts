import React from 'react';
interface AddSectionDividerProps {
    onClick?: (e: React.MouseEvent) => void;
    onPromptSubmit?: (prompt: string) => void;
    aiStatesPath?: string;
    /** Optional React node rendered behind the gap background when expanded */
    expandEffect?: React.ReactNode;
}
declare function AddSectionDivider({ onClick, onPromptSubmit, aiStatesPath, expandEffect }: AddSectionDividerProps): import("react/jsx-runtime").JSX.Element;
export default AddSectionDivider;
