import { memo, useMemo, useState } from 'react'
import type { ColorPack, FontPack, ButtonPack } from '../../../types/siteThemes'
import { COLOR_KEYS } from '../../../types/siteThemes'
import makeColorVariables from '../../../utils/makeColorVariables'
import useDelayedActiveState from '../../../hooks/useDelayedActiveState'
import useTemporaryActiveState from '../../../hooks/useTemporaryActiveState'
import ScaledText from '../utils/ScaledText'
import TransitionSwap from '../utils/TransitionSwap'
import Swatch from './Swatch'
import ButtonPreview from './ButtonPreview'
import styles from './CardThemes.module.css'

/* ── Config ──────────────────────────────────────────────────────────────── */

const BUTTON_HOVER_DELAY = 1.15
const BUTTON_HOVER_DURATION = 1.2
const SWAP_STAGGER_DELAY = 0.04

/* ── Types ───────────────────────────────────────────────────────────────── */

interface CardThemesProps {
  color: ColorPack
  fonts: FontPack
  buttons: ButtonPack
}

/* ── Component ───────────────────────────────────────────────────────────── */

function CardThemes(props: CardThemesProps) {
  const { color, fonts, buttons } = props

  // Local hover state (replaces useButtonContext)
  const [isHoverIntent, setIsHoverIntent] = useState(false)

  const isButtonHoverActive = useDelayedActiveState(isHoverIntent, BUTTON_HOVER_DELAY)
  const isButtonHover = useTemporaryActiveState(isButtonHoverActive, BUTTON_HOVER_DURATION)

  const buttonColorConfig = useMemo(() => {
    const getColor = (preview: number[] | undefined, index: number) =>
      `var(--${COLOR_KEYS[(preview || color.buttons)[index]]})`

    return {
      primaryColor: getColor(color.buttons, 0),
      secondaryColor: getColor(color.buttons, 1),
      ...(color.buttonsNoFill
        ? {
            primaryColorNoFill: getColor(color.buttonsNoFill, 0),
            secondaryColorNoFill: getColor(color.buttonsNoFill, 1),
          }
        : {
            primaryColorNoFill: getColor(color.buttons, 1),
            secondaryColorNoFill: getColor(color.buttons, 0),
          }),
    }
  }, [color])

  const styleOutput = useMemo(
    () =>
      ({
        '--color-background': color.palette[color.background],
        '--color-heading': color.palette[color.headings],
      }) as React.CSSProperties,
    [color],
  )

  const styleOutputButton = useMemo(
    () => makeColorVariables(color.palette) as React.CSSProperties,
    [color],
  )

  const swapKeys = useMemo(
    () => ({
      heading: fonts.headingFont.className,
      swatch: JSON.stringify(color.palette),
      button: JSON.stringify({ ...buttons.primary, fonts }),
    }),
    [color.palette, buttons.primary, fonts],
  )

  return (
    <div
      className={styles.container}
      style={styleOutput}
      onMouseEnter={() => setIsHoverIntent(true)}
      onMouseLeave={() => setIsHoverIntent(false)}
    >
      <div className={styles.heading}>
        <ScaledText>
          <TransitionSwap classNameContent={styles.text}>
            <div key={swapKeys.heading} className={fonts.headingFont.className}>
              Aa
            </div>
          </TransitionSwap>
        </ScaledText>
      </div>

      <div className={styles.swatch}>
        <TransitionSwap className={styles.swap} delayHide={SWAP_STAGGER_DELAY}>
          <Swatch
            key={swapKeys.swatch}
            colors={color.palette}
            isInteractive={isHoverIntent}
          />
        </TransitionSwap>
      </div>

      <div className={styles.button} style={styleOutputButton}>
        <TransitionSwap
          className={styles.swap}
          delayHide={SWAP_STAGGER_DELAY * 2}
        >
          <ScaledText key={swapKeys.button}>
            <ButtonPreview
              className={fonts.paragraphFont.className}
              {...buttons.primary}
              {...buttonColorConfig}
              isHover={isButtonHover}
            >
              Button
            </ButtonPreview>
          </ScaledText>
        </TransitionSwap>
      </div>
    </div>
  )
}

export default memo(CardThemes)
