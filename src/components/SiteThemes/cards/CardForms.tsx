import { memo, useMemo, useState } from 'react'
import type { FormPack, ColorPack, FontPack } from '../../../types/siteThemes'
import { COLOR_KEYS } from '../../../types/siteThemes'
import makeColorVariables from '../../../utils/makeColorVariables'
import TransitionSwap from '../utils/TransitionSwap'
import FormPreview from './FormPreview'
import styles from './CardForms.module.css'

/* ── Types ───────────────────────────────────────────────────────────────── */

interface CardFormsProps {
  form: FormPack
  color: ColorPack
  fonts: FontPack
  previewSize?: 'standard' | 'small'
}

/* ── Component ───────────────────────────────────────────────────────────── */

function CardForms(props: CardFormsProps) {
  const { form, color, fonts, previewSize = 'standard' } = props

  // Local hover state (replaces useButtonContext)
  const [isHoverIntent, setIsHoverIntent] = useState(false)

  const swapKey = useMemo(
    () => JSON.stringify({ ...form, fonts }),
    [form, fonts],
  )

  const styleOutput = useMemo(
    () => makeColorVariables(color.palette) as React.CSSProperties,
    [color.palette],
  )

  const formOutput = useMemo(
    () => (
      <FormPreview
        className={fonts.paragraphFont.className}
        {...form}
        size={previewSize}
        primaryColor={`var(--${COLOR_KEYS[color.form[0]]})`}
        secondaryColor={`var(--${COLOR_KEYS[color.form[1]]})`}
        buttonPrimaryColor={`var(--${COLOR_KEYS[color.form[2]]})`}
        buttonSecondaryColor={`var(--${COLOR_KEYS[color.form[3]]})`}
        isInteractive={isHoverIntent}
      />
    ),
    [isHoverIntent, color.form, fonts.paragraphFont.className, form, previewSize],
  )

  return (
    <div
      className={styles.container}
      style={styleOutput}
      onMouseEnter={() => setIsHoverIntent(true)}
      onMouseLeave={() => setIsHoverIntent(false)}
    >
      <TransitionSwap className={styles.swap}>
        <div key={swapKey} className={styles.form}>
          {formOutput}
        </div>
      </TransitionSwap>
    </div>
  )
}

export default memo(CardForms)
