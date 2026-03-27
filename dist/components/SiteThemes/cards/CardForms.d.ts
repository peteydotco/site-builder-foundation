import type { FormPack, ColorPack, FontPack } from '../../../types/siteThemes';
interface CardFormsProps {
    form: FormPack;
    color: ColorPack;
    fonts: FontPack;
    previewSize?: 'standard' | 'small';
}
declare function CardForms(props: CardFormsProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof CardForms>;
export default _default;
