import React from 'react';
/**
 * SiteToolbar — the top chrome shared across all three editor views.
 *
 * Layout (matches Figma frames 404-2527, 404-2785, 396-2257):
 *   Left:   SAVE (filled) | EXIT | Undo | Redo
 *   Center: "Home / Page · Published" page button
 *           (+ optional Component name overlay for docked mode)
 *   Right:  Desktop/Mobile segmented control | Preview
 */
interface SiteToolbarProps {
    onSave?: (e: React.MouseEvent) => void;
    onExit?: () => void;
    onUndo?: () => void;
    onRedo?: () => void;
    activeBreakpoint?: 'desktop' | 'mobile';
    onBreakpointChange?: (bp: 'desktop' | 'mobile') => void;
    onRun?: (e: React.MouseEvent) => void;
    /** When provided, shows the component dropdown overlay (docked mode) */
    componentName?: string;
}
export default function SiteToolbar({ onSave, onExit, onUndo, onRedo, activeBreakpoint, onBreakpointChange, onRun, componentName, }: SiteToolbarProps): import("react/jsx-runtime").JSX.Element;
export {};
