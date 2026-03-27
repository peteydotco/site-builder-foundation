import type { FormElementConfig, FormOptionConfig } from '../../../types/siteThemes';
interface FormPreviewProps {
    className?: string;
    input: FormElementConfig;
    option: FormOptionConfig;
    isInteractive?: boolean;
    size?: 'standard' | 'small';
    primaryColor?: string;
    secondaryColor?: string;
    buttonPrimaryColor?: string;
    buttonSecondaryColor?: string;
}
declare function FormPreview(props: FormPreviewProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof FormPreview>;
export default _default;
