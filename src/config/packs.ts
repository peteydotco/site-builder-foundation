import type { ThemePack } from '../types/siteThemes'
import { getButtonPack } from './buttons'
import { getColorPack } from './colors'
import { getFontPack } from './fonts'
import { getFormPack } from './forms'

/**
 * Expand a color group into one ThemePack per palette index. Button/font/form
 * indices cycle through the group's available entries so we don't run out of
 * bounds when a group has fewer of those than colors.
 */
function expandGroup(
  name: string,
  counts: { colors: number; buttons: number; fonts: number; forms: number },
): ThemePack[] {
  return Array.from({ length: counts.colors }, (_, i) => ({
    pack: name,
    name: `${name}_${String(i + 1).padStart(2, '0')}`,
    color:   getColorPack(name, i),
    buttons: getButtonPack(name, i % counts.buttons),
    form:    getFormPack(name, i % counts.forms),
    fonts:   getFontPack(name, i % counts.fonts),
  }))
}

const packs: ThemePack[] = [
  // Default: matches the current Clarkson/pink site design.
  // Updated to match the prod vendor output: filled square primary buttons,
  // uppercase text transform, preview indices for filled/unfilled state swaps.
  {
    pack: 'custom',
    name: 'clarkson_pink',
    color: {
      packs: ['custom'],
      palette: ['#FFFFFF', '#e8b4b3', '#c48988', '#8b5e5d', '#000000'],
      background: 2,
      headings: 0,
      buttons: [0, 2],
      buttonsNoFill: [0, 3],
      buttonsPreview: [2, 0],
      buttonsNoFillPreview: [0, 3],
      form: [0, 4, 0, 4],
    },
    fonts: {
      packs: ['custom'],
      headingFont: {
        name: 'Clarkson',
        style: { fontFamily: "'Clarkson', Helvetica, sans-serif", fontWeight: 500, fontStyle: 'normal' },
        className: 'clarkson',
      },
      paragraphFont: {
        name: 'Clarkson',
        style: { fontFamily: "'Clarkson', Helvetica, sans-serif", fontWeight: 400, fontStyle: 'normal' },
        className: 'clarkson',
      },
    },
    buttons: {
      packs: ['custom'],
      primary:   { fill: true,  shape: 'square',     borderRadius: ['0em', '0em', '0em', '0em'], padding: { x: '1.5em', y: '1em' }, outline: '0px', textTransform: 'uppercase', fontWeight: 400 },
      secondary: { fill: false, shape: 'square',     borderRadius: ['0em', '0em', '0em', '0em'], padding: { x: '1.5em', y: '1em' }, outline: '1px', textTransform: 'uppercase', fontWeight: 400 },
      tertiary:  { fill: false, shape: 'underline', borderRadius: ['0em', '0em', '0em', '0em'], padding: { x: '1.5em', y: '1em' }, outline: '0px', textTransform: 'uppercase', fontWeight: 400 },
    },
    form: {
      packs: ['custom'],
      input:  { fill: false, shape: 'underline', outline: '1px', borderRadius: ['0em', '0em', '0em', '0em'] },
      option: { button: false, fill: false, shape: 'square', outline: '1px', borderRadius: ['0em', '0em', '0em', '0em'] },
    },
  },
  // Recommended color packs — one ThemePack per palette in each group of
  // Adam Hartwig's Site Themes library. The DialogThemes popover renders
  // every entry in this array, so expanding the groups here is how we expose
  // the full palette library to users.
  ...expandGroup('minimal',     { colors: 8,  buttons: 8, fonts: 8,  forms: 6 }),
  ...expandGroup('vibrant',     { colors: 11, buttons: 9, fonts: 13, forms: 7 }),
  ...expandGroup('neutral',     { colors: 8,  buttons: 8, fonts: 8,  forms: 6 }),
  ...expandGroup('modern',      { colors: 2,  buttons: 8, fonts: 4,  forms: 6 }),
  ...expandGroup('adventurous', { colors: 8,  buttons: 2, fonts: 8,  forms: 6 }),
]

export default packs
