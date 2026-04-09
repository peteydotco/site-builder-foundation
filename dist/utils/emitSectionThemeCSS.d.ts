import type { SectionTheme } from '../types/siteThemes';
/**
 * Emit the CSS that implements the Squarespace 7.1 section-theme model.
 *
 * Given a 5-color palette (the active ThemePack's `color.palette` array) and
 * the list of section themes, produces a CSS string that:
 *
 *   1. Defines the 5 palette role tokens on `:root`:
 *        --palette-white, --palette-light-accent, --palette-accent,
 *        --palette-dark-accent, --palette-black
 *
 *   2. Sets default `--theme-*` custom properties on `:root` to the default
 *      section theme (Lightest 1), so any element with no explicit
 *      `data-section-theme` still has usable theme values.
 *
 *   3. Emits one scoped rule per section theme:
 *        [data-section-theme="lightest-1"] { --theme-bg: ...; --theme-text: ...; ... }
 *      These override the root defaults for the scoped subtree.
 *
 *   4. Emits baseline styles that make `[data-section-theme]` elements
 *      automatically pick up their theme colors:
 *        [data-section-theme] { background: var(--theme-bg); color: var(--theme-text); }
 *
 * The function is pure — same inputs produce the same output — so it can be
 * memoized by callers and used to generate CSS for both the parent document
 * and any iframe scope (e.g. section previews).
 *
 * @param palette Array of 5 hex strings (white, lightAccent, accent, darkAccent, black)
 * @param themes  Array of section themes to emit scoped rules for (defaults to SECTION_THEMES)
 * @returns A CSS string (no `<style>` wrapper)
 */
export default function emitSectionThemeCSS(palette: string[], themes?: readonly SectionTheme[]): string;
/**
 * Wrap the emitted CSS in a `<style id="section-themes-css">` element for
 * direct injection into a document or iframe srcdoc string.
 */
export declare function emitSectionThemeStyleTag(palette: string[], themes?: readonly SectionTheme[]): string;
