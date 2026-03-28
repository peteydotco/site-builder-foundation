import React from 'react';
interface AddSectionDividerProps {
    onClick?: (e: React.MouseEvent) => void;
    onPromptSubmit?: (prompt: string) => void;
    aiStatesPath?: string;
    /** Optional React node rendered behind the gap background when expanded */
    expandEffect?: React.ReactNode;
    keepExpandedAfterSubmit?: boolean;
    generationContent?: React.ReactNode;
    generationHeight?: number;
}
declare function AddSectionDivider({ onClick, onPromptSubmit, aiStatesPath, expandEffect, keepExpandedAfterSubmit, generationContent, generationHeight }: AddSectionDividerProps): import("react/jsx-runtime").JSX.Element;
export default AddSectionDivider;
