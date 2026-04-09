import type { ButtonPack } from '../types/siteThemes';
/**
 * Emit the CSS that implements the Squarespace 7.1 button-tier model as
 * global `.button-primary` / `.button-secondary` / `.button-tertiary` classes.
 *
 * In 7.1, ButtonPack owns the *structural* side of buttons (shape, padding,
 * border-radius, outline width, font weight, text transform, fill) and
 * SectionTheme owns the *color* side via `--theme-button-bg` and
 * `--theme-button-text`. This emitter is the composition point: it writes
 * structural rules that reach into the section theme's CSS custom properties
 * for color, so a single `.button-primary` class automatically recolors when
 * it's placed inside any `[data-section-theme="…"]` subtree.
 *
 * Color sourcing rules:
 *
 *   - `fill: true` tiers use `--theme-button-bg` / `--theme-button-text` —
 *     the one role pair in `SECTION_THEMES` specifically tuned to contrast
 *     against each other in every theme.
 *
 *   - `fill: false` tiers (outlined) also pull their accent from
 *     `--theme-button-bg`, NOT `--theme-accent`. This is deliberate: in
 *     themes like `bright-1`, `--theme-accent`, `--theme-text`, and several
 *     other role tokens all collapse to the same palette index, so sourcing
 *     unfilled buttons from `--theme-accent` would produce invisible borders
 *     on those themes. `--theme-button-bg` is the only role guaranteed to
 *     contrast against `--theme-bg` in every section theme.
 *
 * The `invert` flag on `ButtonStyleConfig` is intentionally NOT honored in
 * the global emitter: it's a preview-only swap between ColorPack.buttons[0]
 * and [1] in `ButtonPreview.tsx`. The global runtime path uses SectionTheme
 * role tokens, which are already pre-paired for contrast and do not need an
 * inversion step.
 *
 * The function is pure — same inputs produce the same output — so it can be
 * memoized by callers and used to generate CSS for both the parent document
 * and any iframe scope (e.g. carousel previews).
 *
 * @param buttonPack The active ThemePack.buttons ButtonPack
 * @returns A CSS string (no `<style>` wrapper)
 */
export default function emitButtonPackCSS(buttonPack: ButtonPack): string;
/**
 * Wrap the emitted CSS in a `<style id="button-pack-css">` element for
 * direct injection into a document or iframe srcdoc string. Pairs with
 * `emitSectionThemeStyleTag` — both should be injected together for any
 * scope that renders LLM-generated sections, because `.button-*` classes
 * depend on the `--theme-button-*` custom properties defined by the
 * section theme CSS.
 */
export declare function emitButtonPackStyleTag(buttonPack: ButtonPack): string;
