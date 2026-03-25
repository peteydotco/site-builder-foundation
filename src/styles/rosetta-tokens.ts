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
  default:  string
  muted:    string
  disabled: string
  accent:   string
  success:  string
  warning:  string
  danger:   string
  onStrong: string
}

interface BgTokens {
  base:            string
  default:         string
  inset:           string
  muted:           string
  strong:          string
  accentDefault:   string
  accentStrong:    string
  successDefault:  string
  successStrong:   string
  warningDefault:  string
  warningStrong:   string
  dangerDefault:   string
  dangerStrong:    string
}

interface RosettaTheme {
  fg: FgTokens
  bg: BgTokens
}

export const rosettaLight: RosettaTheme = {
  fg: {
    default:  '#0E0E0E',
    muted:    '#666666',
    disabled: '#B7B7B7',
    accent:   '#0862D1',
    success:  '#1B754F',
    warning:  '#925B20',
    danger:   '#C32D38',
    onStrong: '#FFFFFF',
  },
  bg: {
    base:            '#FFFFFF',
    default:         '#F2F2F2',
    inset:           '#F9F9F9',
    muted:           '#E7E7E7',
    strong:          '#0E0E0E',
    accentDefault:   '#F4F5FD',
    accentStrong:    '#0072F0',
    successDefault:  '#EDF8F2',
    successStrong:   '#15865B',
    warningDefault:  '#FEF5D3',
    warningStrong:   '#AB6500',
    dangerDefault:   '#FEF3F2',
    dangerStrong:    '#DB3642',
  },
}

export const rosettaDark: RosettaTheme = {
  fg: {
    default:  '#FFFFFF',
    muted:    '#9B9B9B',
    disabled: '#4A4A4A',
    accent:   '#4389EC',
    success:  '#439A71',
    warning:  '#B97F1F',
    danger:   '#DD6363',
    onStrong: '#0E0E0E',
  },
  bg: {
    base:            '#0E0E0E',
    default:         '#202020',
    inset:           '#171717',
    muted:           '#3A3A3A',
    strong:          '#FFFFFF',
    accentDefault:   '#131B30',
    accentStrong:    '#287AE7',
    successDefault:  '#041E11',
    successStrong:   '#208C60',
    warningDefault:  '#281803',
    warningStrong:   '#A87012',
    dangerDefault:   '#321112',
    dangerStrong:    '#D8484D',
  },
}

/** Resolve the active theme based on system preference */
export function getRosettaTheme(): RosettaTheme {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return rosettaDark
  }
  return rosettaLight
}

// Convenience alias — defaults to light, use getRosettaTheme() for dynamic resolution
export const rosetta = rosettaLight

/** Strip leading '#' for Monaco theme rules (they expect bare hex) */
export function hex(color: string): string {
  return color.replace('#', '')
}
