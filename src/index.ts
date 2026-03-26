// ── CSS side-effect imports (bundled into dist/style.css) ────────────────────
import './styles/rosetta-tokens.css'
import './styles/animations.css'
import './styles/fonts.css'
import './components/SiteThemes/variables.css'
import './components/SiteThemes/animations.css'

// ── Components ───────────────────────────────────────────────────────────────
export { default as SectionWrapper, HeaderSectionWrapper } from './components/SectionWrapper'
export { default as BlockPicker, AddBlockToolbar, EditHeaderButton } from './components/BlockPicker'
export { default as BlockAnnotationBar } from './components/BlockAnnotationBar'
export {
  default as FluidEngineGrid,
  FE_COLUMNS,
  FE_COL_GAP,
  FE_ROW_GAP,
  FE_MARGIN,
  feBrickWidth,
  feBrickHeight,
  feRowsHeight,
  feSnapHeight,
  feSnapTop,
  feSnapLeft,
} from './components/FluidEngineGrid'
export { default as SiteToolbar } from './components/SiteToolbar'
export { default as ThemeProvider } from './components/ThemeProvider'
export { default as Tooltip, useTooltip } from './components/Tooltip'
export { default as AnimatedSearchIcon } from './components/AnimatedSearchIcon'
export { default as BlockHover } from './components/BlockHover'
export { default as PortaledAnnotationBar } from './components/PortaledAnnotationBar'
export { default as AddSectionDivider } from './components/AddSectionDivider'
export { default as GridOverlay } from './components/GridOverlay'

// ── Hooks ────────────────────────────────────────────────────────────────────
export { useBlockDrag } from './hooks/useBlockDrag'
export { usePanelDrag } from './hooks/useDrag'

// ── Types ────────────────────────────────────────────────────────────────────
export type {
  SchemaFieldBase,
  StringField,
  NumberField,
  ColorField,
  BooleanField,
  SchemaField,
  ComponentSchema,
  ComponentFile,
  ComponentState,
  ThemeTokens,
} from './types/schema'

// ── Tokens ───────────────────────────────────────────────────────────────────
export { rosettaLight, rosettaDark, getRosettaTheme, rosetta, hex } from './styles/rosetta-tokens'

// ── Constants ────────────────────────────────────────────────────────────────
export { HANDLE_POSITIONS } from './constants/handlePositions'

// ── Icons ────────────────────────────────────────────────────────────────────
export {
  CodeIcon,
  EditIcon,
  PinIcon,
  AlignTopIcon,
  DuplicateIcon,
  UndoIcon,
  RedoIcon,
  DesktopIcon,
  MobileIcon,
  PlayIcon,
  ChevronDownIcon,
  GlobalContentGlyphIcon,
  PlusIcon,
  SearchGlyphIcon,
} from './icons'

// ── Site Themes ─────────────────────────────────────────────────────────
export { default as SiteThemes, useSiteThemesContext, SiteThemesContext } from './components/SiteThemes'
export { default as useSiteThemes } from './hooks/useSiteThemes'
export { default as makeColorVariables } from './utils/makeColorVariables'
export { default as loadGoogleFont, loadFontsForTheme } from './utils/loadGoogleFont'
export { default as useDelayedActiveState } from './hooks/useDelayedActiveState'
export { default as useTemporaryActiveState } from './hooks/useTemporaryActiveState'

// ── Site Themes Config ──────────────────────────────────────────────────
export { default as themePacks } from './config/packs'
export { default as themeColors, getColorPack } from './config/colors'
export { default as themeFonts, getFontPack } from './config/fonts'
export { default as themeButtons, getButtonPack } from './config/buttons'
export { default as themeForms, getFormPack } from './config/forms'
export { default as googleFonts } from './config/googleFonts'

// ── Site Themes Types ───────────────────────────────────────────────────
export type {
  ThemePack,
  ColorPack,
  FontPack,
  FontDef,
  ButtonPack,
  ButtonStyleConfig,
  FormPack,
  FormElementConfig,
  FormOptionConfig,
  SiteThemesState,
} from './types/siteThemes'
export { COLOR_KEYS } from './types/siteThemes'
