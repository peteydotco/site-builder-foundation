import { memo, useMemo, useState } from 'react'
import type { ColorPack, FontPack } from '../../../types/siteThemes'
import useTemporaryActiveState from '../../../hooks/useTemporaryActiveState'
import useDelayedActiveState from '../../../hooks/useDelayedActiveState'
import ScaledText from '../utils/ScaledText'
import TransitionSwap from '../utils/TransitionSwap'
import styles from './CardFonts.module.css'

/* ── Config ──────────────────────────────────────────────────────────────── */

const TRANSITION_DURATION = 0.2
const TRANSITION_DELAY = 0.75
const TRANSITION_TOTAL = TRANSITION_DURATION + TRANSITION_DELAY

/* ── Types ───────────────────────────────────────────────────────────────── */

interface CardFontsProps {
  color: ColorPack
  fonts: FontPack
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(' ')
}

/* ── Component ───────────────────────────────────────────────────────────── */

function CardFonts(props: CardFontsProps) {
  const { color, fonts } = props

  // Local hover state (replaces useButtonContext)
  const [isHoverIntent, setIsHoverIntent] = useState(false)

  const isHoverParagraphActive = useDelayedActiveState(isHoverIntent, TRANSITION_TOTAL)
  const isHoverHeading = useTemporaryActiveState(isHoverIntent, TRANSITION_TOTAL)
  const isHoverParagraph = useTemporaryActiveState(isHoverParagraphActive, TRANSITION_TOTAL)

  const classNameOutput = useMemo(
    () =>
      cn(
        styles.container,
        isHoverHeading && styles.hoverHeading,
        isHoverParagraph && styles.hoverParagraph,
      ),
    [isHoverHeading, isHoverParagraph],
  )

  const styleOutput = useMemo(
    () =>
      ({
        '--color': color.palette[4],
      }) as React.CSSProperties,
    [color.palette],
  )

  const [classNameHeading, classNameParagraph] = useMemo(
    () => [
      cn(fonts.headingFont.className, styles.text),
      cn(fonts.paragraphFont.className, styles.text),
    ],
    [fonts.headingFont.className, fonts.paragraphFont.className],
  )

  const swapKey = useMemo(
    () => `${classNameHeading}_${classNameParagraph}`,
    [classNameHeading, classNameParagraph],
  )

  return (
    <TransitionSwap
      className={classNameOutput}
      style={styleOutput}
      onMouseEnter={() => setIsHoverIntent(true)}
      onMouseLeave={() => setIsHoverIntent(false)}
    >
      <div key={swapKey} className={styles.swap}>
        <div className={styles.heading}>
          <ScaledText upscale contain>
            <div className={classNameHeading}>Heading</div>
          </ScaledText>
        </div>
        <div className={styles.paragraph}>
          <ScaledText>
            <div className={classNameParagraph}>This is your paragraph.</div>
          </ScaledText>
        </div>
      </div>
    </TransitionSwap>
  )
}

export default memo(CardFonts)
