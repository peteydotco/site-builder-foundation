export interface FontDef {
    name: string;
    style: {
        fontFamily: string;
        fontWeight: number;
        fontStyle: string;
    };
    className: string;
    /** Google Fonts URL query param value, e.g. "Shrikhand:wght@400" */
    googleFontsQuery?: string;
}
export interface ColorPack {
    packs: string[];
    palette: string[];
    background: number;
    headings: number;
    body?: number;
    buttons: number[];
    buttonsNoFill?: number[];
    buttonsPreview?: number[];
    buttonsNoFillPreview?: number[];
    form: number[];
}
export interface FontPack {
    packs: string[];
    headingFont: FontDef;
    paragraphFont: FontDef;
    headerFont?: FontDef;
}
export interface ButtonStyleConfig {
    fill: boolean;
    invert?: boolean;
    shape: 'pill' | 'square' | 'custom' | 'underline' | 'oval';
    borderRadius: [string, string, string, string];
    padding: {
        x: string;
        y: string;
    };
    outline: string;
    textTransform?: string;
    fontWeight?: number;
}
export interface ButtonPack {
    packs: string[];
    primary: ButtonStyleConfig;
    secondary: ButtonStyleConfig;
    tertiary: ButtonStyleConfig;
}
export interface FormElementConfig {
    fill: boolean;
    inverted?: boolean;
    shape: 'pill' | 'square' | 'custom' | 'underline' | 'circle';
    outline: string;
    borderRadius: [string, string, string, string];
}
export interface FormOptionConfig extends FormElementConfig {
    button: boolean;
}
export interface FormPack {
    packs: string[];
    input: FormElementConfig;
    option: FormOptionConfig;
}
export interface ThemePack {
    pack: string;
    name: string;
    color: ColorPack;
    fonts: FontPack;
    buttons: ButtonPack;
    form: FormPack;
}
export interface SiteThemesState {
    userTheme: ThemePack;
    setPack: (pack: ThemePack) => void;
    themePacks: ThemePack[];
    fontPacks: FontPack[];
    colorPacks: ColorPack[];
    buttonPacks: ButtonPack[];
    formPacks: FormPack[];
}
export declare const COLOR_KEYS: readonly ["white-hsl", "lightaccent-hsl", "accent-hsl", "darkaccent-hsl", "black-hsl"];
