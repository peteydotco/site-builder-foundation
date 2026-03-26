import type { ThemePack } from '../types/siteThemes'
import { getButtonPack } from './buttons'
import { getColorPack } from './colors'
import { getFontPack } from './fonts'
import { getFormPack } from './forms'

const packs: ThemePack[] = [
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
