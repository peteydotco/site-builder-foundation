import React from 'react';
interface PortaledAnnotationBarProps {
    blockRef: React.RefObject<HTMLElement | null>;
    children: React.ReactNode;
}
declare function PortaledAnnotationBar({ blockRef, children, }: PortaledAnnotationBarProps): React.ReactPortal | null;
export default PortaledAnnotationBar;
