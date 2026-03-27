import { memo, ReactNode, RefObject } from 'react';
interface DialogProps {
    children?: ReactNode;
    /** Element ref the dialog should position itself relative to */
    attachment?: RefObject<HTMLElement | null>;
    /** When true, the dialog floats next to the panel instead of docking */
    undocked?: boolean;
    /** Force-hide the dialog */
    isHidden?: boolean;
    /** Visual mode */
    mode?: 'light' | 'dark';
}
interface DialogPanelProps {
    children?: ReactNode;
}
interface DialogHeaderProps {
    children?: ReactNode;
}
interface DialogBodyProps {
    children?: ReactNode;
    padding?: boolean;
    padTop?: boolean;
    padBottom?: boolean;
}
declare function DialogPanel({ children }: DialogPanelProps): import("react").JSX.Element;
declare function DialogHeader({ children }: DialogHeaderProps): import("react").JSX.Element;
declare function DialogBody({ children, padding, padTop, padBottom, }: DialogBodyProps): import("react").JSX.Element;
declare function DialogComponent({ children, attachment, undocked, isHidden, mode, }: DialogProps): import("react").ReactPortal;
declare const Dialog: ReturnType<typeof memo<typeof DialogComponent>> & {
    Panel: typeof DialogPanel;
    Header: typeof DialogHeader;
    Body: typeof DialogBody;
};
export default Dialog;
