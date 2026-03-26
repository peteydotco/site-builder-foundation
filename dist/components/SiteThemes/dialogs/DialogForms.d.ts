import { RefObject } from 'react';
interface DialogFormsProps {
    attachment: RefObject<HTMLElement | null>;
    undocked?: boolean;
    onClose?: () => void;
}
declare function DialogForms({ attachment, undocked, onClose: _onClose }: DialogFormsProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof DialogForms>;
export default _default;
