import { useCallback, useEffect, useMemo, useState } from 'react'
import type {
  ThemePack,
  FontPack,
  ColorPack,
  ButtonPack,
  FormPack,
  SiteThemesState,
  SectionThemeId,
  SectionTheme,
} from '../types/siteThemes'
import { SECTION_THEMES } from '../types/siteThemes'
import packs from '../config/packs'
import fonts from '../config/fonts'
import colors from '../config/colors'
import buttons from '../config/buttons'
import forms from '../config/forms'
import makeColorVariables from '../utils/makeColorVariables'
import emitSectionThemeCSS from '../utils/emitSectionThemeCSS'
import emitButtonPackCSS from '../utils/emitButtonPackCSS'
import { loadFontsForTheme } from '../utils/loadGoogleFont'

const SECTION_THEMES_STYLE_ID = 'section-themes-css'
const BUTTON_PACK_STYLE_ID = 'button-pack-css'

export default function useSiteThemes(): SiteThemesState {
  const [userTheme, setUserTheme] = useState<ThemePack>({ ...packs[0] })
  // Per-section theme assignments (in-memory). Keyed by the section's id so
  // consumers can map DOM `[data-sid]` or similar to a SectionThemeId.
  const [sectionAssignments, setSectionAssignments] = useState<Record<string, SectionThemeId>>({})

  const { themePacks, fontPacks, colorPacks, buttonPacks, formPacks } = useMemo(() => {
    const pack = userTheme.pack
    // Filter by the active pack family. If the filter returns nothing (as is
    // the case for the `'custom'` clarkson_pink theme, since no ColorPacks in
    // Adam's library are tagged 'custom'), fall back to the full unfiltered
    // list so the Recommended dialogs always have content to show.
    const filteredFonts = fonts.filter((font: FontPack) => font.packs.includes(pack))
    const filteredColors = colors.filter((color: ColorPack) => color.packs.includes(pack))
    const filteredButtons = buttons.filter((button: ButtonPack) => button.packs.includes(pack))
    const filteredForms = forms.filter((form: FormPack) => form.packs.includes(pack))
    return {
      themePacks: packs,
      fontPacks:   filteredFonts.length   > 0 ? filteredFonts   : fonts,
      colorPacks:  filteredColors.length  > 0 ? filteredColors  : colors,
      buttonPacks: filteredButtons.length > 0 ? filteredButtons : buttons,
      formPacks:   filteredForms.length   > 0 ? filteredForms   : forms,
    }
  }, [userTheme])

  const setPack = useCallback((pack: ThemePack) => {
    setUserTheme({ ...pack })
  }, [])

  // ── Section theme mutators ──

  const setSectionTheme = useCallback((sectionId: string, themeId: SectionThemeId) => {
    setSectionAssignments(prev => {
      if (prev[sectionId] === themeId) return prev
      return { ...prev, [sectionId]: themeId }
    })
  }, [])

  const removeSectionAssignment = useCallback((sectionId: string) => {
    setSectionAssignments(prev => {
      if (!(sectionId in prev)) return prev
      const next = { ...prev }
      delete next[sectionId]
      return next
    })
  }, [])

  const getSectionTheme = useCallback(
    (id: SectionThemeId): SectionTheme =>
      SECTION_THEMES.find(t => t.id === id) ?? SECTION_THEMES[0],
    [],
  )

  const getThemesInUse = useCallback((): SectionThemeId[] => {
    const used = new Set(Object.values(sectionAssignments))
    return SECTION_THEMES.filter(t => used.has(t.id)).map(t => t.id)
  }, [sectionAssignments])

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

  // ── Section themes CSS injection ──
  // Emit the palette role tokens + 10 `[data-section-theme="..."]` scoped
  // rules into a single <style> element in document.head. Any section tagged
  // with `data-section-theme="..."` inherits its colors automatically.
  useEffect(() => {
    const css = emitSectionThemeCSS(userTheme.color.palette, SECTION_THEMES)
    let el = document.getElementById(SECTION_THEMES_STYLE_ID) as HTMLStyleElement | null
    if (!el) {
      el = document.createElement('style')
      el.id = SECTION_THEMES_STYLE_ID
      document.head.appendChild(el)
    }
    if (el.textContent !== css) {
      el.textContent = css
    }
  }, [userTheme.color.palette])

  // ── Button pack CSS injection ──
  // Emit global `.button-primary` / `.button-secondary` / `.button-tertiary`
  // rules driven by the active ButtonPack. Structure comes from the pack;
  // color comes from the `--theme-button-*` custom properties defined by the
  // section theme effect above (see emitButtonPackCSS for sourcing rules).
  useEffect(() => {
    const css = emitButtonPackCSS(userTheme.buttons)
    let el = document.getElementById(BUTTON_PACK_STYLE_ID) as HTMLStyleElement | null
    if (!el) {
      el = document.createElement('style')
      el.id = BUTTON_PACK_STYLE_ID
      document.head.appendChild(el)
    }
    if (el.textContent !== css) {
      el.textContent = css
    }
  }, [userTheme.buttons])

  return useMemo(
    () => ({
      userTheme,
      setPack,
      themePacks,
      fontPacks,
      colorPacks,
      buttonPacks,
      formPacks,
      sectionThemes: SECTION_THEMES,
      sectionAssignments,
      setSectionTheme,
      removeSectionAssignment,
      getThemesInUse,
      getSectionTheme,
    }),
    [
      userTheme,
      setPack,
      themePacks,
      fontPacks,
      colorPacks,
      buttonPacks,
      formPacks,
      sectionAssignments,
      setSectionTheme,
      removeSectionAssignment,
      getThemesInUse,
      getSectionTheme,
    ],
  )
}
