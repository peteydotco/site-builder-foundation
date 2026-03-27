import { RefObject } from 'react';
interface DialogThemesProps {
    attachment: RefObject<HTMLElement | null>;
    undocked?: boolean;
    onClose?: () => void;
}
declare function DialogThemes({ attachment, undocked, onClose: _onClose }: DialogThemesProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof DialogThemes>;
export default _default;
