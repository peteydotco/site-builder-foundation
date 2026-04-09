import { memo, useMemo } from 'react'
import { useSiteThemesContext } from '../index'
import Panel from '../primitives/Panel'
import Disclosure from '../primitives/Disclosure'
import SectionThemeCard from '../cards/SectionThemeCard'
import type { SectionTheme } from '../../../types/siteThemes'
import styles from './PanelColors.module.css'

/* ── Info icon ───────────────────────────────────────────────────────────── */

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 6V10M7 4V4.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/* ── Component ───────────────────────────────────────────────────────────── */

interface PanelColorsProps {
  depth?: number
  isActive?: boolean
}

/**
 * Colors drill-in panel — reached by clicking the chevron on the Colors card
 * on the Styles root. Matches the Squarespace 7.1 "Colors" screen:
 *
 *   • 5-swatch palette preview (click opens the Themes popover on root)
 *   • "Edit Palette >" row (stub — opens palette editor, TBD)
 *   • "Section color themes" header with info icon
 *   • Themes in use on this page, then the rest
 *
 * Theme selection is currently read-only at the panel level. The per-section
 * assignment flow lives in the consumer app (clicking a theme here is a
 * no-op / previews only). Future work: clicking a theme here could cycle
 * through sections currently on the page.
 */
function PanelColors({ depth = 0, isActive = false }: PanelColorsProps) {
  const { userTheme, sectionThemes, getThemesInUse } = useSiteThemesContext()

  const themesInUse = useMemo(() => {
    if (typeof getThemesInUse !== 'function') return []
    return getThemesInUse()
  }, [getThemesInUse])

  const inUseSet = useMemo(() => new Set(themesInUse), [themesInUse])

  const { onPage, other } = useMemo(() => {
    const onPage: SectionTheme[] = []
    const other: SectionTheme[] = []
    for (const t of sectionThemes) {
      if (inUseSet.has(t.id)) onPage.push(t)
      else other.push(t)
    }
    return { onPage, other }
  }, [sectionThemes, inUseSet])

  return (
    <Panel title="Colors" depth={depth} isActive={isActive}>
      {/* Palette preview — tapping it opens the Themes popover on the root.
          We render it as an <a> that goes back to the root route so the nav
          closes the drill-in; the root panel's Themes card is then the next
          thing a user naturally taps. */}
      <a href="/config/site-styles" className={styles.paletteCard}>
        <div className={styles.paletteStrip}>
          {userTheme.color.palette.slice(0, 5).map((hex, i) => (
            <div key={i} style={{ background: hex }} />
          ))}
        </div>
      </a>

      <Disclosure label="Edit Palette" href="/config/site-styles/colors/edit" />

      <div className={styles.sectionHeader}>
        Section color themes
        <InfoIcon />
      </div>

      {onPage.length > 0 && (
        <>
          <div className={styles.label}>Color themes on this page</div>
          <div className={styles.themeList}>
            {onPage.map(theme => (
              <SectionThemeCard key={theme.id} theme={theme} color={userTheme.color} />
            ))}
          </div>
        </>
      )}

      {other.length > 0 && (
        <>
          <div className={styles.label}>
            {onPage.length > 0 ? 'Other color themes' : 'All color themes'}
          </div>
          <div className={styles.themeList}>
            {other.map(theme => (
              <SectionThemeCard key={theme.id} theme={theme} color={userTheme.color} />
            ))}
          </div>
        </>
      )}
    </Panel>
  )
}

export default memo(PanelColors)
