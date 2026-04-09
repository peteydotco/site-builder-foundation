// ── Site Themes Type Definitions ────────────────────────────────────────

export interface FontDef {
  name: string
  style: {
    fontFamily: string
    fontWeight: number
    fontStyle: string
  }
  className: string
  /** Google Fonts URL query param value, e.g. "Shrikhand:wght@400" */
  googleFontsQuery?: string
}

export interface ColorPack {
  packs: string[]
  palette: string[]
  background: number
  headings: number
  body?: number
  buttons: number[]
  buttonsNoFill?: number[]
  buttonsPreview?: number[]
  buttonsNoFillPreview?: number[]
  form: number[]
}

export interface FontPack {
  packs: string[]
  headingFont: FontDef
  paragraphFont: FontDef
  headerFont?: FontDef
}

export interface ButtonStyleConfig {
  fill: boolean
  invert?: boolean
  shape: 'pill' | 'square' | 'custom' | 'underline' | 'oval'
  borderRadius: [string, string, string, string]
  padding: { x: string; y: string }
  outline: string
  textTransform?: string
  fontWeight?: number
}

export interface ButtonPack {
  packs: string[]
  primary: ButtonStyleConfig
  secondary: ButtonStyleConfig
  tertiary: ButtonStyleConfig
}

export interface FormElementConfig {
  fill: boolean
  inverted?: boolean
  shape: 'pill' | 'square' | 'custom' | 'underline' | 'circle'
  outline: string
  borderRadius: [string, string, string, string]
}

export interface FormOptionConfig extends FormElementConfig {
  button: boolean
}

export interface FormPack {
  packs: string[]
  input: FormElementConfig
  option: FormOptionConfig
}

export interface ThemePack {
  pack: string
  name: string
  color: ColorPack
  fonts: FontPack
  buttons: ButtonPack
  form: FormPack
}

export interface SiteThemesState {
  userTheme: ThemePack
  setPack: (pack: ThemePack) => void
  themePacks: ThemePack[]
  fontPacks: FontPack[]
  colorPacks: ColorPack[]
  buttonPacks: ButtonPack[]
  formPacks: FormPack[]
  // ── Section color themes (Squarespace 7.1 model) ──
  /** The 10 canonical section color themes derived from the 5 palette roles. */
  sectionThemes: readonly SectionTheme[]
  /** In-memory map of section id → assigned section theme. */
  sectionAssignments: Record<string, SectionThemeId>
  /** Assign a section theme to a given section id. */
  setSectionTheme: (sectionId: string, themeId: SectionThemeId) => void
  /** Clear a section's assignment. */
  removeSectionAssignment: (sectionId: string) => void
  /** Returns the ordered list of section themes currently in use on the page. */
  getThemesInUse: () => SectionThemeId[]
  /** Look up a section theme by id. */
  getSectionTheme: (id: SectionThemeId) => SectionTheme
}

export const COLOR_KEYS = [
  'white-hsl',
  'lightaccent-hsl',
  'accent-hsl',
  'darkaccent-hsl',
  'black-hsl',
] as const

// ── Section Color Themes ────────────────────────────────────────────────────
//
// Squarespace 7.1 model: the site's 5-color palette drives 10 named section
// themes. Each section theme maps 8 semantic roles (background, text, heading,
// accent, buttonBg, buttonText, border, muted) to one of the 5 palette slots
// via a numeric index (0=white, 1=lightAccent, 2=accent, 3=darkAccent, 4=black).
//
// Sections are tagged with `data-section-theme="..."` and inherit their colors
// from scoped CSS rules emitted by the ThemeProvider effect in useSiteThemes.

/** Palette role index — matches the 5 positions in `ColorPack.palette`. */
export type PaletteIndex = 0 | 1 | 2 | 3 | 4

export const PALETTE_INDEX = {
  white: 0,
  lightAccent: 1,
  accent: 2,
  darkAccent: 3,
  black: 4,
} as const satisfies Record<string, PaletteIndex>

export type SectionThemeId =
  | 'lightest-1'
  | 'lightest-2'
  | 'light-1'
  | 'light-2'
  | 'bright-1'
  | 'bright-2'
  | 'dark-1'
  | 'dark-2'
  | 'darkest-1'
  | 'darkest-2'

export type SectionThemeGroup = 'lightest' | 'light' | 'bright' | 'dark' | 'darkest'

export interface SectionThemeRoles {
  /** Section background color */
  background: PaletteIndex
  /** Body text color */
  text: PaletteIndex
  /** Headings color */
  heading: PaletteIndex
  /** Links, highlights, small accents */
  accent: PaletteIndex
  /** Primary button background */
  buttonBg: PaletteIndex
  /** Primary button text */
  buttonText: PaletteIndex
  /** Borders, rules, outlines */
  border: PaletteIndex
  /** Muted text (captions, labels) */
  muted: PaletteIndex
}

export interface SectionTheme {
  id: SectionThemeId
  /** Display name, e.g. "Lightest 1" */
  name: string
  /** Which of the 5 groups this theme belongs to */
  group: SectionThemeGroup
  roles: SectionThemeRoles
}

/** The 10 canonical section themes. Role indices have been tuned for WCAG
 *  AA contrast against a typical light-to-dark palette. */
export const SECTION_THEMES: readonly SectionTheme[] = [
  {
    id: 'lightest-1',
    name: 'Lightest 1',
    group: 'lightest',
    roles: {
      background: 0,  // white
      text:       4,  // black
      heading:    4,  // black
      accent:     2,  // accent
      buttonBg:   4,  // black
      buttonText: 0,  // white
      border:     3,  // darkAccent
      muted:      3,  // darkAccent
    },
  },
  {
    id: 'lightest-2',
    name: 'Lightest 2',
    group: 'lightest',
    roles: {
      background: 0,  // white
      text:       3,  // darkAccent
      heading:    3,  // darkAccent
      accent:     2,  // accent
      buttonBg:   2,  // accent
      buttonText: 0,  // white
      border:     1,  // lightAccent
      muted:      2,  // accent
    },
  },
  {
    id: 'light-1',
    name: 'Light 1',
    group: 'light',
    roles: {
      background: 1,  // lightAccent
      text:       4,  // black
      heading:    4,  // black
      accent:     2,  // accent
      buttonBg:   4,  // black
      buttonText: 1,  // lightAccent
      border:     3,  // darkAccent
      muted:      3,  // darkAccent
    },
  },
  {
    id: 'light-2',
    name: 'Light 2',
    group: 'light',
    roles: {
      background: 1,  // lightAccent
      text:       3,  // darkAccent
      heading:    3,  // darkAccent
      accent:     2,  // accent
      buttonBg:   2,  // accent
      buttonText: 0,  // white
      border:     3,  // darkAccent
      muted:      3,  // darkAccent
    },
  },
  {
    id: 'bright-1',
    name: 'Bright 1',
    group: 'bright',
    roles: {
      background: 4,  // black
      text:       2,  // accent
      heading:    2,  // accent
      accent:     2,  // accent
      buttonBg:   2,  // accent
      buttonText: 4,  // black
      border:     2,  // accent
      muted:      2,  // accent
    },
  },
  {
    id: 'bright-2',
    name: 'Bright 2',
    group: 'bright',
    roles: {
      background: 2,  // accent
      text:       4,  // black
      heading:    4,  // black
      accent:     0,  // white
      buttonBg:   4,  // black
      buttonText: 2,  // accent
      border:     4,  // black
      muted:      3,  // darkAccent
    },
  },
  {
    id: 'dark-1',
    name: 'Dark 1',
    group: 'dark',
    roles: {
      background: 3,  // darkAccent
      text:       1,  // lightAccent
      heading:    1,  // lightAccent
      accent:     2,  // accent
      buttonBg:   0,  // white
      buttonText: 3,  // darkAccent
      border:     1,  // lightAccent
      muted:      1,  // lightAccent
    },
  },
  {
    id: 'dark-2',
    name: 'Dark 2',
    group: 'dark',
    roles: {
      background: 3,  // darkAccent
      text:       1,  // lightAccent
      heading:    1,  // lightAccent
      accent:     2,  // accent
      buttonBg:   2,  // accent
      buttonText: 3,  // darkAccent
      border:     2,  // accent
      muted:      2,  // accent
    },
  },
  {
    id: 'darkest-1',
    name: 'Darkest 1',
    group: 'darkest',
    roles: {
      background: 4,  // black
      text:       0,  // white
      heading:    0,  // white
      accent:     2,  // accent
      buttonBg:   0,  // white
      buttonText: 4,  // black
      border:     3,  // darkAccent
      muted:      1,  // lightAccent
    },
  },
  {
    id: 'darkest-2',
    name: 'Darkest 2',
    group: 'darkest',
    roles: {
      background: 4,  // black
      text:       2,  // accent
      heading:    2,  // accent
      accent:     0,  // white
      buttonBg:   2,  // accent
      buttonText: 4,  // black
      border:     2,  // accent
      muted:      1,  // lightAccent
    },
  },
] as const

/** Default theme for sections with no explicit assignment. */
export const DEFAULT_SECTION_THEME: SectionThemeId = 'lightest-1'

/** Round-robin sequence used to seed default themes for generated sections. */
export const DEFAULT_SECTION_THEME_SEQUENCE: readonly SectionThemeId[] = [
  'lightest-1',
  'darkest-1',
  'light-1',
  'dark-1',
  'bright-2',
] as const

const SECTION_THEME_IDS: ReadonlySet<string> = new Set(SECTION_THEMES.map(t => t.id))

/** Type guard — narrows a string to SectionThemeId if valid. */
export function isSectionThemeId(id: string | null | undefined): id is SectionThemeId {
  return !!id && SECTION_THEME_IDS.has(id)
}
