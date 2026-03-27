import { RefObject } from 'react';
interface DialogFontsProps {
    attachment: RefObject<HTMLElement | null>;
    undocked?: boolean;
    onClose?: () => void;
}
declare function DialogFonts({ attachment, undocked, onClose: _onClose }: DialogFontsProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof DialogFonts>;
export default _default;
