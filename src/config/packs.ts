import type { ThemePack } from '../types/siteThemes'
import { getButtonPack } from './buttons'
import { getColorPack } from './colors'
import { getFontPack } from './fonts'
import { getFormPack } from './forms'

const packs: ThemePack[] = [
  // Default: matches the current Clarkson/pink site design
  {
    pack: 'custom',
    name: 'clarkson_pink',
    color: {
      packs: ['custom'],
      palette: ['#FFFFFF', '#e8b4b3', '#c48988', '#8b5e5d', '#000000'],
      background: 2,
      headings: 0,
      buttons: [0, 2],
      buttonsNoFill: [0, 2],
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
      primary: { fill: false, shape: 'pill', borderRadius: ['1em', '1em', '1em', '1em'], padding: { x: '1.5em', y: '1em' }, outline: '1px' },
      secondary: { fill: false, shape: 'pill', borderRadius: ['1em', '1em', '1em', '1em'], padding: { x: '1.5em', y: '1em' }, outline: '1px' },
      tertiary: { fill: false, shape: 'underline', borderRadius: ['0em', '0em', '0em', '0em'], padding: { x: '1.5em', y: '1em' }, outline: '1px' },
    },
    form: {
      packs: ['custom'],
      input: { fill: false, shape: 'underline', outline: '1px', borderRadius: ['0em', '0em', '0em', '0em'] },
      option: { button: false, fill: false, shape: 'circle', outline: '1px', borderRadius: ['1em', '1em', '1em', '1em'] },
    },
  },
  {
    pack: 'vibrant',
    name: 'vibrant_04',
    color: getColorPack('vibrant', 9),
    buttons: getButtonPack('vibrant', 8),
    form: getFormPack('vibrant', 6),
    fonts: getFontPack('vibrant', 11),
  },
  {
    pack: 'vibrant',
    name: 'vibrant_04',
    color: getColorPack('vibrant', 10),
    buttons: getButtonPack('vibrant', 8),
    form: getFormPack('vibrant', 6),
    fonts: getFontPack('vibrant', 12),
  },
  {
    pack: 'vibrant',
    name: 'vibrant_03',
    color: getColorPack('vibrant', 8),
    buttons: getButtonPack('vibrant', 8),
    form: getFormPack('vibrant', 6),
    fonts: getFontPack('vibrant', 10),
  },
  {
    pack: 'vibrant',
    name: 'vibrant_01',
    color: getColorPack('vibrant', 0),
    buttons: getButtonPack('vibrant', 0),
    form: getFormPack('vibrant', 0),
    fonts: getFontPack('vibrant', 0),
  },
  {
    pack: 'vibrant',
    name: 'vibrant_02',
    color: getColorPack('vibrant', 1),
    buttons: getButtonPack('vibrant', 1),
    form: getFormPack('vibrant', 4),
    fonts: getFontPack('vibrant', 2),
  },
  {
    pack: 'neutral',
    name: 'neutral_01',
    color: getColorPack('neutral', 0),
    buttons: getButtonPack('neutral', 0),
    form: getFormPack('neutral', 0),
    fonts: getFontPack('neutral', 0),
  },
  {
    pack: 'neutral',
    name: 'neutral_02',
    color: getColorPack('neutral', 1),
    buttons: getButtonPack('neutral', 1),
    form: getFormPack('neutral', 3),
    fonts: getFontPack('neutral', 2),
  },
  {
    pack: 'modern',
    name: 'modern_01',
    color: getColorPack('modern', 0),
    buttons: getButtonPack('modern', 0),
    form: getFormPack('modern', 0),
    fonts: getFontPack('modern', 0),
  },
  {
    pack: 'modern',
    name: 'modern_02',
    color: getColorPack('modern', 1),
    buttons: getButtonPack('modern', 1),
    form: getFormPack('modern', 3),
    fonts: getFontPack('modern', 2),
  },
  {
    pack: 'minimal',
    name: 'minimal_01',
    color: getColorPack('minimal', 0),
    buttons: getButtonPack('minimal', 0),
    form: getFormPack('minimal', 0),
    fonts: getFontPack('minimal', 0),
  },
  {
    pack: 'minimal',
    name: 'minimal_01',
    color: getColorPack('minimal', 2),
    buttons: getButtonPack('minimal', 0),
    form: getFormPack('minimal', 4),
    fonts: getFontPack('minimal', 2),
  },
  {
    pack: 'adventurous',
    name: 'adventurous_01',
    color: getColorPack('adventurous', 0),
    buttons: getButtonPack('adventurous', 0),
    form: getFormPack('adventurous', 0),
    fonts: getFontPack('adventurous', 0),
  },
  {
    pack: 'adventurous',
    name: 'adventurous_02',
    color: getColorPack('adventurous', 3),
    buttons: getButtonPack('adventurous', 1),
    form: getFormPack('adventurous', 3),
    fonts: getFontPack('adventurous', 4),
  },
]

export default packs
