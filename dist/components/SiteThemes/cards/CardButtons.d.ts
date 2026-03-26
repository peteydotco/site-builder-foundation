import type { ButtonPack, ColorPack, FontPack } from '../../../types/siteThemes';
interface CardButtonsProps {
    buttons: ButtonPack;
    color: ColorPack;
    fonts: FontPack;
}
declare function CardButtons(props: CardButtonsProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof CardButtons>;
export default _default;
