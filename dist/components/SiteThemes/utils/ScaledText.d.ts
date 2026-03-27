import React from 'react';
interface ScaledTextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
    className?: string;
    Tag?: React.ElementType;
    /** If provided, the hidden measurement element renders `input` instead of `children`. */
    input?: React.ReactNode;
    children?: React.ReactNode;
    /** Allow scaling above 1 (larger than natural size). Default: false. */
    upscale?: boolean;
    /** Fit within both width AND height (not just width). Default: false. */
    contain?: boolean;
    style?: React.CSSProperties;
}
/**
 * Utility to fit text inside its parent container by adjusting `font-size`.
 *
 * Children must be sized with em-based units for scaling to propagate correctly.
 * Internally, a visually-hidden copy of the content is measured against the
 * container to compute the correct scale factor.
 */
declare function ScaledText(props: ScaledTextProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ScaledText>;
export default _default;
