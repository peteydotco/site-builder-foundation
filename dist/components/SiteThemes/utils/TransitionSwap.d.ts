import React from 'react';
interface TransitionSwapContextValue {
    isHidden: boolean;
}
export declare const useTransitionSwapContext: () => TransitionSwapContextValue;
interface TransitionSwapProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
    Tag?: React.ElementType;
    animateFirst?: boolean;
    children?: React.ReactNode;
    className?: string;
    classNameContent?: string;
    delayHide?: number;
    duration?: number;
    delayShow?: number;
    distance?: number;
    directionIn?: string;
    directionOut?: string;
    useOpacity?: boolean;
}
/**
 * Animated content swapping based on observing the `key` of a given child.
 * When children change (by key), the old content animates out and the new
 * content animates in using configurable direction and timing.
 */
declare function TransitionSwap(props: TransitionSwapProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof TransitionSwap>;
export default _default;
