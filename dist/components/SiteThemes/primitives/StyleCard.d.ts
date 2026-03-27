import { ReactNode } from 'react';
interface StyleCardProps {
    active?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    children?: ReactNode;
    disclosure?: string;
    wrap?: boolean;
    label?: string;
    delayShow?: number;
    animateReveal?: boolean;
    isShown?: boolean;
}
declare function StyleCard({ active, onClick, children, disclosure, wrap, label, delayShow, animateReveal, isShown, }: StyleCardProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof StyleCard>;
export default _default;
