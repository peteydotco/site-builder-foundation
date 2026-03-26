import tinycolor from 'tinycolor2'
import { COLOR_KEYS } from '../types/siteThemes'

export default function makeColorVariables(colors: string[]): Record<string, string> {
  return colors.reduce<Record<string, string>>((res, color, i) => {
    const hslColor = tinycolor(color).toHsl()
    const hslValues = `${hslColor.h}deg, ${Math.round(hslColor.s * 100)}%, ${Math.round(hslColor.l * 100)}%`
    res[`--${COLOR_KEYS[i] || 'default'}`] = hslValues
    return res
  }, {})
}
