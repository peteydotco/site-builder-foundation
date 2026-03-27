import React from 'react';
interface BlockAnnotationBarProps {
    onOpenIDE: () => void;
    onOpenDesignPanel?: (e: React.MouseEvent) => void;
    onDelete?: (e: React.MouseEvent) => void;
    isExiting?: boolean;
}
export default function BlockAnnotationBar({ onOpenIDE, onOpenDesignPanel, onDelete, isExiting, }: BlockAnnotationBarProps): React.JSX.Element;
export {};
