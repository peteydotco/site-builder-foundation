import type { SectionTheme } from '../types/siteThemes'
import { SECTION_THEMES, DEFAULT_SECTION_THEME } from '../types/siteThemes'
import makeColorVariables from './makeColorVariables'

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
export default function emitSectionThemeCSS(
  palette: string[],
  themes: readonly SectionTheme[] = SECTION_THEMES,
): string {
  if (palette.length < 5) {
    throw new Error(
      `emitSectionThemeCSS expects a palette with at least 5 colors, got ${palette.length}`,
    )
  }

  const [white, lightAccent, accent, darkAccent, black] = palette

  // Find the default theme for root defaults
  const defaultTheme = themes.find(t => t.id === DEFAULT_SECTION_THEME) ?? themes[0]

  // HSL aliases — generated from the same palette so any consumer that
  // references hsl(var(--accent-hsl)) etc. stays in sync with the live colors.
  const hslVars = makeColorVariables(palette)
  const hslLines = Object.entries(hslVars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n')

  const rootVars = `
:root {
  /* 5 palette role tokens — the source of truth for section themes */
  --palette-white:        ${white};
  --palette-light-accent: ${lightAccent};
  --palette-accent:       ${accent};
  --palette-dark-accent:  ${darkAccent};
  --palette-black:        ${black};

  /* HSL aliases — derived from the palette so consumers that use
     hsl(var(--accent-hsl)) etc. stay in sync with the live colors. */
${hslLines}

  /* Default section theme (${defaultTheme.name}) applied to the document root */
  --theme-bg:          ${palette[defaultTheme.roles.background]};
  --theme-text:        ${palette[defaultTheme.roles.text]};
  --theme-heading:     ${palette[defaultTheme.roles.heading]};
  --theme-accent:      ${palette[defaultTheme.roles.accent]};
  --theme-button-bg:   ${palette[defaultTheme.roles.buttonBg]};
  --theme-button-text: ${palette[defaultTheme.roles.buttonText]};
  --theme-border:      ${palette[defaultTheme.roles.border]};
  --theme-muted:       ${palette[defaultTheme.roles.muted]};
}`.trim()

  const themeRules = themes
    .map(theme => {
      const r = theme.roles
      return `[data-section-theme="${theme.id}"] {
  --theme-bg:          ${palette[r.background]};
  --theme-text:        ${palette[r.text]};
  --theme-heading:     ${palette[r.heading]};
  --theme-accent:      ${palette[r.accent]};
  --theme-button-bg:   ${palette[r.buttonBg]};
  --theme-button-text: ${palette[r.buttonText]};
  --theme-border:      ${palette[r.border]};
  --theme-muted:       ${palette[r.muted]};
}`
    })
    .join('\n')

  const baseRules = `
[data-section-theme] {
  background: var(--theme-bg);
  color: var(--theme-text);
}
[data-section-theme] h1,
[data-section-theme] h2,
[data-section-theme] h3,
[data-section-theme] h4,
[data-section-theme] h5,
[data-section-theme] h6 {
  color: var(--theme-heading);
}
[data-section-theme] a {
  color: var(--theme-accent);
}`.trim()

  return `${rootVars}\n\n${themeRules}\n\n${baseRules}\n`
}

/**
 * Wrap the emitted CSS in a `<style id="section-themes-css">` element for
 * direct injection into a document or iframe srcdoc string.
 */
export function emitSectionThemeStyleTag(
  palette: string[],
  themes: readonly SectionTheme[] = SECTION_THEMES,
): string {
  return `<style id="section-themes-css">\n${emitSectionThemeCSS(palette, themes)}\n</style>`
}
