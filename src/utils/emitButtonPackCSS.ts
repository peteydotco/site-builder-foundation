import type { ButtonPack, ButtonStyleConfig } from '../types/siteThemes'

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
export default function emitButtonPackCSS(buttonPack: ButtonPack): string {
  // NOTE ON SPECIFICITY: emitSectionThemeCSS emits a base
  // `[data-section-theme] a { color: var(--theme-accent) }` rule at
  // specificity (0,0,1,1). Bare `.button-primary` etc. are (0,0,1,0) and
  // LOSE that tie, which re-creates the exact "invisible button" bug this
  // file exists to fix — in themes like bright-1 where --theme-accent
  // collapses to the same palette index as --theme-button-bg, anchors
  // tagged with .button-primary end up rose-on-rose. We use the
  // double-class trick (.button-primary.button-primary) to raise
  // specificity to (0,0,2,0), unconditionally beating any single-type
  // element selector. Ugly selector, correct behavior, works everywhere.
  const primary = emitTierRule('.button-primary.button-primary', buttonPack.primary)
  const secondary = emitTierRule('.button-secondary.button-secondary', buttonPack.secondary)
  const tertiary = emitTierRule('.button-tertiary.button-tertiary', buttonPack.tertiary)

  const focusRule = `
.button-primary.button-primary:focus-visible,
.button-secondary.button-secondary:focus-visible,
.button-tertiary.button-tertiary:focus-visible {
  outline: 2px solid var(--theme-button-bg);
  outline-offset: 2px;
}`.trim()

  return `${primary}\n\n${secondary}\n\n${tertiary}\n\n${focusRule}\n`
}

/**
 * Emit a single tier's CSS rule. Branches on `shape === 'underline'` because
 * underline buttons are structurally a different shape (no border box, just a
 * bottom rule) and merging them into the base rule would duplicate
 * declarations and risk specificity surprises.
 */
function emitTierRule(selector: string, config: ButtonStyleConfig): string {
  if (config.shape === 'underline') {
    return emitUnderlineTier(selector, config)
  }
  return emitBoxedTier(selector, config)
}

/**
 * Emit a pill / oval / square / custom tier — a "boxed" button that has a
 * background, border, and border-radius. Color sourced from section-theme
 * tokens per the sourcing rules in the file header.
 */
function emitBoxedTier(selector: string, config: ButtonStyleConfig): string {
  const { fill, padding, outline, fontWeight, textTransform } = config

  const borderRadius = resolveBorderRadius(config)
  const border = resolveBorder(outline)

  // Color sourcing — see header comment.
  // Filled: bg + text roles. Unfilled: bg role as accent, transparent bg.
  const colorBlock = fill
    ? `  background: var(--theme-button-bg);
  color: var(--theme-button-text);
  border-color: var(--theme-button-bg);`
    : `  background: transparent;
  color: var(--theme-button-bg);
  border-color: var(--theme-button-bg);`

  return `${selector} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  transition: background 180ms, color 180ms, border-color 180ms;
  padding: ${padding.y} ${padding.x};
  border-radius: ${borderRadius};
  ${border}
  font-weight: ${fontWeight ?? 'inherit'};
  text-transform: ${textTransform ?? 'none'};
${colorBlock}
}`
}

/**
 * Emit an underline tier — a text button with a bottom rule, transparent bg,
 * no border box, and no horizontal padding.
 */
function emitUnderlineTier(selector: string, config: ButtonStyleConfig): string {
  const { padding, outline, fontWeight, textTransform } = config
  const borderWidth = normalizeBorderWidth(outline)

  return `${selector} {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  background: transparent;
  color: var(--theme-button-bg);
  border: none;
  border-bottom: ${borderWidth} solid currentColor;
  border-radius: 0;
  padding: ${padding.y} 0;
  font-weight: ${fontWeight ?? 'inherit'};
  text-transform: ${textTransform ?? 'none'};
  text-decoration: none;
  transition: color 180ms, border-color 180ms;
}`
}

/**
 * Resolve the `border-radius` declaration for a boxed tier.
 *
 *   pill   → 9999px (pill capsule)
 *   oval   → 9999px (v1: true oval via `50% / 100%` distorts on text labels,
 *            revisit once we see real usage)
 *   square → 0
 *   custom → joined borderRadius tuple
 */
function resolveBorderRadius(config: ButtonStyleConfig): string {
  switch (config.shape) {
    case 'pill':
    case 'oval':
      return '9999px'
    case 'square':
      return '0'
    case 'custom':
      return config.borderRadius.join(' ') || '0'
    default:
      return '0'
  }
}

/**
 * Resolve the `border: …` declaration for a boxed tier. Zero-width outlines
 * emit `border: none` rather than `border: 0 solid …` because some renderers
 * still reserve layout space for zero-width borders.
 */
function resolveBorder(outline: string): string {
  const width = normalizeBorderWidth(outline)
  if (width === '0' || width === '0px' || width === '') {
    return 'border: none;'
  }
  return `border: ${width} solid currentColor;`
}

/**
 * Normalize outline width to a CSS-usable value. Empty strings collapse to
 * '0' so the caller can short-circuit to `border: none`.
 */
function normalizeBorderWidth(outline: string): string {
  const trimmed = outline.trim()
  return trimmed === '' ? '0' : trimmed
}

/**
 * Wrap the emitted CSS in a `<style id="button-pack-css">` element for
 * direct injection into a document or iframe srcdoc string. Pairs with
 * `emitSectionThemeStyleTag` — both should be injected together for any
 * scope that renders LLM-generated sections, because `.button-*` classes
 * depend on the `--theme-button-*` custom properties defined by the
 * section theme CSS.
 */
export function emitButtonPackStyleTag(buttonPack: ButtonPack): string {
  return `<style id="button-pack-css">\n${emitButtonPackCSS(buttonPack)}\n</style>`
}
