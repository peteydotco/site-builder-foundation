import { memo, useMemo } from 'react'
import type { SectionTheme, ColorPack } from '../../../types/siteThemes'
import styles from './SectionThemeCard.module.css'

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')

interface SectionThemeCardProps {
  theme: SectionTheme
  /** The active site ColorPack — used to resolve palette indices to hex values. */
  color: ColorPack
  active?: boolean
  onClick?: (theme: SectionTheme) => void
}

/**
 * Preview card for a single section color theme. Shows "Aa" at the heading
 * color over the theme's background, with the theme name in the body text
 * color. Clicking fires `onClick(theme)`.
 *
 * Card colors resolve against the live ColorPack palette, so they update
 * automatically when the site palette changes.
 */
function SectionThemeCard({ theme, color, active = false, onClick }: SectionThemeCardProps) {
  const style = useMemo(
    () =>
      ({
        '--stc-bg':      color.palette[theme.roles.background],
        '--stc-text':    color.palette[theme.roles.text],
        '--stc-heading': color.palette[theme.roles.heading],
      }) as React.CSSProperties,
    [color, theme],
  )

  return (
    <button
      type="button"
      className={cx(styles.container, active && styles.active)}
      style={style}
      onClick={() => onClick?.(theme)}
    >
      <span className={styles.heading}>Aa</span>
      <span className={styles.label}>{theme.name}</span>
      <span className={styles.spacer} />
    </button>
  )
}

export default memo(SectionThemeCard)
