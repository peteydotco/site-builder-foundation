/**
 * Rosetta Design Tokens — JS mirror
 *
 * These match the CSS custom properties in rosetta-tokens.css.
 * Monaco's defineTheme requires raw hex values, so this module
 * provides them as importable constants.
 *
 * Keep in sync with rosetta-tokens.css. When Rosetta ships as a
 * package, replace both files with the real token import.
 */
interface FgTokens {
    default: string;
    muted: string;
    disabled: string;
    accent: string;
    success: string;
    warning: string;
    danger: string;
    onStrong: string;
}
interface BgTokens {
    base: string;
    default: string;
    inset: string;
    muted: string;
    strong: string;
    accentDefault: string;
    accentStrong: string;
    successDefault: string;
    successStrong: string;
    warningDefault: string;
    warningStrong: string;
    dangerDefault: string;
    dangerStrong: string;
}
interface RosettaTheme {
    fg: FgTokens;
    bg: BgTokens;
}
export declare const rosettaLight: RosettaTheme;
export declare const rosettaDark: RosettaTheme;
/** Resolve the active theme based on system preference */
export declare function getRosettaTheme(): RosettaTheme;
export declare const rosetta: RosettaTheme;
/** Strip leading '#' for Monaco theme rules (they expect bare hex) */
export declare function hex(color: string): string;
export {};
