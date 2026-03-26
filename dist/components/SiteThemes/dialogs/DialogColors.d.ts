import { RefObject } from 'react';
interface DialogColorsProps {
    attachment: RefObject<HTMLElement | null>;
    undocked?: boolean;
    onClose?: () => void;
}
declare function DialogColors({ attachment, undocked, onClose: _onClose }: DialogColorsProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof DialogColors>;
export default _default;
