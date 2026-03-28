import React from 'react';
interface SectionWrapperProps {
    /** Unique section id */
    sectionId: string;
    /** Label shown under the ADD BLOCK button (e.g. "TEXT", "HEADER") */
    sectionLabel: string;
    /** Section content */
    children: React.ReactNode;
    /** Called when a block is picked from the catalog */
    onBlockPicked: (sectionId: string, blockName: string) => void;
    /** Whether section interactions are disabled (e.g. during focused canvas mode) */
    disabled?: boolean;
    /** Additional inline styles for the outer wrapper */
    style?: React.CSSProperties;
}
export default function SectionWrapper({ sectionId, sectionLabel, children, onBlockPicked, disabled, style, }: SectionWrapperProps): import("react/jsx-runtime").JSX.Element;
interface HeaderSectionWrapperProps {
    children: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
}
export declare function HeaderSectionWrapper({ children, disabled, style, }: HeaderSectionWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};
