import type { ColorPack, FontPack, ButtonPack } from '../../../types/siteThemes';
interface CardThemesProps {
    color: ColorPack;
    fonts: FontPack;
    buttons: ButtonPack;
}
declare function CardThemes(props: CardThemesProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof CardThemes>;
export default _default;
