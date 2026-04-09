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
    /** The 10 canonical section color themes derived from the 5 palette roles. */
    sectionThemes: readonly SectionTheme[];
    /** In-memory map of section id → assigned section theme. */
    sectionAssignments: Record<string, SectionThemeId>;
    /** Assign a section theme to a given section id. */
    setSectionTheme: (sectionId: string, themeId: SectionThemeId) => void;
    /** Clear a section's assignment. */
    removeSectionAssignment: (sectionId: string) => void;
    /** Returns the ordered list of section themes currently in use on the page. */
    getThemesInUse: () => SectionThemeId[];
    /** Look up a section theme by id. */
    getSectionTheme: (id: SectionThemeId) => SectionTheme;
}
export declare const COLOR_KEYS: readonly ["white-hsl", "lightaccent-hsl", "accent-hsl", "darkaccent-hsl", "black-hsl"];
/** Palette role index — matches the 5 positions in `ColorPack.palette`. */
export type PaletteIndex = 0 | 1 | 2 | 3 | 4;
export declare const PALETTE_INDEX: {
    readonly white: 0;
    readonly lightAccent: 1;
    readonly accent: 2;
    readonly darkAccent: 3;
    readonly black: 4;
};
export type SectionThemeId = 'lightest-1' | 'lightest-2' | 'light-1' | 'light-2' | 'bright-1' | 'bright-2' | 'dark-1' | 'dark-2' | 'darkest-1' | 'darkest-2';
export type SectionThemeGroup = 'lightest' | 'light' | 'bright' | 'dark' | 'darkest';
export interface SectionThemeRoles {
    /** Section background color */
    background: PaletteIndex;
    /** Body text color */
    text: PaletteIndex;
    /** Headings color */
    heading: PaletteIndex;
    /** Links, highlights, small accents */
    accent: PaletteIndex;
    /** Primary button background */
    buttonBg: PaletteIndex;
    /** Primary button text */
    buttonText: PaletteIndex;
    /** Borders, rules, outlines */
    border: PaletteIndex;
    /** Muted text (captions, labels) */
    muted: PaletteIndex;
}
export interface SectionTheme {
    id: SectionThemeId;
    /** Display name, e.g. "Lightest 1" */
    name: string;
    /** Which of the 5 groups this theme belongs to */
    group: SectionThemeGroup;
    roles: SectionThemeRoles;
}
/** The 10 canonical section themes. Role indices have been tuned for WCAG
 *  AA contrast against a typical light-to-dark palette. */
export declare const SECTION_THEMES: readonly SectionTheme[];
/** Default theme for sections with no explicit assignment. */
export declare const DEFAULT_SECTION_THEME: SectionThemeId;
/** Round-robin sequence used to seed default themes for generated sections. */
export declare const DEFAULT_SECTION_THEME_SEQUENCE: readonly SectionThemeId[];
/** Type guard — narrows a string to SectionThemeId if valid. */
export declare function isSectionThemeId(id: string | null | undefined): id is SectionThemeId;
