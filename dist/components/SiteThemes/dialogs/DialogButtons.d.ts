import { RefObject } from 'react';
interface DialogButtonsProps {
    attachment: RefObject<HTMLElement | null>;
    undocked?: boolean;
    onClose?: () => void;
}
declare function DialogButtons({ attachment, undocked, onClose: _onClose }: DialogButtonsProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof DialogButtons>;
export default _default;
