import type { SectionTheme, ColorPack } from '../../../types/siteThemes';
interface SectionThemeCardProps {
    theme: SectionTheme;
    /** The active site ColorPack — used to resolve palette indices to hex values. */
    color: ColorPack;
    active?: boolean;
    onClick?: (theme: SectionTheme) => void;
}
/**
 * Preview card for a single section color theme. Shows "Aa" at the heading
 * color over the theme's background, with the theme name in the body text
 * color. Clicking fires `onClick(theme)`.
 *
 * Card colors resolve against the live ColorPack palette, so they update
 * automatically when the site palette changes.
 */
declare function SectionThemeCard({ theme, color, active, onClick }: SectionThemeCardProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof SectionThemeCard>;
export default _default;
