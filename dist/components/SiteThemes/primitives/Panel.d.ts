import { ReactNode } from 'react';
interface PanelProps {
    children?: ReactNode;
    title?: ReactNode;
    description?: ReactNode;
    depth?: number;
    isActive?: boolean;
}
declare function Panel({ children, title, description, depth, isActive: isPanelActive }: PanelProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof Panel>;
export default _default;
