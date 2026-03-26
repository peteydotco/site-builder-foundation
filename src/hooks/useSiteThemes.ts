import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ThemePack, FontPack, ColorPack, ButtonPack, FormPack, SiteThemesState } from '../types/siteThemes'
import packs from '../config/packs'
import fonts from '../config/fonts'
import colors from '../config/colors'
import buttons from '../config/buttons'
import forms from '../config/forms'
import makeColorVariables from '../utils/makeColorVariables'
import { loadFontsForTheme } from '../utils/loadGoogleFont'

export default function useSiteThemes(): SiteThemesState {
  const [userTheme, setUserTheme] = useState<ThemePack>({ ...packs[0] })

  const { themePacks, fontPacks, colorPacks, buttonPacks, formPacks } = useMemo(() => {
    const pack = userTheme.pack
    return {
      themePacks: packs,
      fontPacks: fonts.filter((font: FontPack) => font.packs.includes(pack)),
      colorPacks: colors.filter((color: ColorPack) => color.packs.includes(pack)),
      buttonPacks: buttons.filter((button: ButtonPack) => button.packs.includes(pack)),
      formPacks: forms.filter((form: FormPack) => form.packs.includes(pack)),
    }
  }, [userTheme])

  const setPack = useCallback((pack: ThemePack) => {
    setUserTheme({ ...pack })
  }, [])

  // Apply theme CSS custom properties to document.body
  useEffect(() => {
    const { color, fonts: themeFonts } = userTheme
    const body = document.body

    body.style.setProperty('--background-color', color.palette[color.background])
    body.style.setProperty('--color-heading', color.palette[color.headings])
    body.style.setProperty(
      '--color-paragraph',
      color.palette[color.body !== undefined ? color.body : color.headings],
    )
    body.style.setProperty('--font-family-heading', themeFonts.headingFont.style.fontFamily)
    body.style.setProperty('--font-family-body', themeFonts.paragraphFont.style.fontFamily)
    body.style.setProperty(
      '--font-family-header',
      themeFonts.headerFont
        ? themeFonts.headerFont.style.fontFamily
        : themeFonts.paragraphFont.style.fontFamily,
    )

    // Set HSL palette variables
    const palette = makeColorVariables(color.palette)
    Object.entries(palette).forEach(([key, value]) => {
      body.style.setProperty(key, value)
    })

    // Load Google Fonts for the active theme
    const fontsToLoad = [themeFonts.headingFont, themeFonts.paragraphFont]
    if (themeFonts.headerFont) fontsToLoad.push(themeFonts.headerFont)
    loadFontsForTheme(fontsToLoad)
  }, [userTheme])

  return useMemo(
    () => ({
      userTheme,
      setPack,
      themePacks,
      fontPacks,
      colorPacks,
      buttonPacks,
      formPacks,
    }),
    [userTheme, setPack, themePacks, fontPacks, colorPacks, buttonPacks, formPacks],
  )
}
