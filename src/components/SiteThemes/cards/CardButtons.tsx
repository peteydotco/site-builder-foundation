import { memo, useMemo, useState } from 'react'
import type { ButtonPack, ColorPack, FontPack } from '../../../types/siteThemes'
import { COLOR_KEYS } from '../../../types/siteThemes'
import makeColorVariables from '../../../utils/makeColorVariables'
import useTemporaryActiveState from '../../../hooks/useTemporaryActiveState'
import TransitionSwap from '../utils/TransitionSwap'
import ScaledText from '../utils/ScaledText'
import ButtonPreview from './ButtonPreview'
import styles from './CardButtons.module.css'

/* ── Config ──────────────────────────────────────────────────────────────── */

const TRANSITION_DURATION = 0.2
const TRANSITION_DELAY = 1.5

/* ── Types ───────────────────────────────────────────────────────────────── */

interface CardButtonsProps {
  buttons: ButtonPack
  color: ColorPack
  fonts: FontPack
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(' ')
}

/* ── Component ───────────────────────────────────────────────────────────── */

function CardButtons(props: CardButtonsProps) {
  const { buttons, color, fonts } = props

  // Local hover state (replaces useButtonContext)
  const [isHoverIntent, setIsHoverIntent] = useState(false)

  const isInteractive = useTemporaryActiveState(
    isHoverIntent,
    TRANSITION_DURATION + TRANSITION_DELAY,
  )

  const swapKey = useMemo(
    () => JSON.stringify({ ...buttons, fonts }),
    [buttons, fonts],
  )

  const classNameOutput = useMemo(
    () => cn(styles.container, isInteractive && styles.interactive),
    [isInteractive],
  )

  const styleOutput = useMemo(
    () => makeColorVariables(color.palette) as React.CSSProperties,
    [color.palette],
  )

  const buttonsOutput = useMemo(() => {
    const labelPrimary = isInteractive ? 'Primary' : 'Button'
    const getColor = (preview: number[] | undefined, index: number) =>
      `var(--${COLOR_KEYS[(preview || color.buttons)[index]]})`

    const buttonColorConfig = {
      primaryColor: getColor(color.buttonsPreview, 0),
      secondaryColor: getColor(color.buttonsPreview, 1),
      primaryColorNoFill: getColor(color.buttonsNoFillPreview, 0),
      secondaryColorNoFill: getColor(color.buttonsNoFillPreview, 1),
    }

    return (
      <>
        <ScaledText className={cn(styles.button, styles.tertiary)}>
          <ButtonPreview
            className={fonts.paragraphFont.className}
            {...buttons.tertiary}
            {...buttonColorConfig}
          >
            Tertiary
          </ButtonPreview>
        </ScaledText>
        <ScaledText className={cn(styles.button, styles.secondary)}>
          <ButtonPreview
            className={fonts.paragraphFont.className}
            {...buttons.secondary}
            {...buttonColorConfig}
          >
            Secondary
          </ButtonPreview>
        </ScaledText>
        <ScaledText className={cn(styles.button, styles.primary)}>
          <ButtonPreview
            className={fonts.paragraphFont.className}
            {...buttons.primary}
            {...buttonColorConfig}
          >
            {labelPrimary}
          </ButtonPreview>
        </ScaledText>
      </>
    )
  }, [buttons, color, fonts.paragraphFont.className, isInteractive])

  return (
    <div
      className={classNameOutput}
      style={styleOutput}
      onMouseEnter={() => setIsHoverIntent(true)}
      onMouseLeave={() => setIsHoverIntent(false)}
    >
      <TransitionSwap>
        <div key={swapKey} className={styles.buttons}>
          {buttonsOutput}
        </div>
      </TransitionSwap>
    </div>
  )
}

export default memo(CardButtons)
