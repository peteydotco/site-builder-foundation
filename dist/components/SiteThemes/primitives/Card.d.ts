import { ReactNode } from 'react';
interface CardProps {
    className?: string;
    children?: ReactNode;
    active?: boolean;
    shimmer?: boolean;
    wrap?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    delayShow?: number;
    animateReveal?: boolean;
}
declare function Card({ className, children, active, shimmer, wrap, onClick, delayShow, animateReveal, ...rest }: CardProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof Card>;
export default _default;
