import { memo, useMemo, useState } from 'react'
import type { ColorPack } from '../../../types/siteThemes'
import TransitionSwap from '../utils/TransitionSwap'
import Swatch from './Swatch'
import styles from './CardColors.module.css'

/* ── Types ───────────────────────────────────────────────────────────────── */

interface CardColorsProps {
  color: ColorPack
}

/* ── Component ───────────────────────────────────────────────────────────── */

function CardColors(props: CardColorsProps) {
  const { color } = props
  const { palette } = color

  // Local hover state (replaces useButtonContext)
  const [isHoverIntent, setIsHoverIntent] = useState(false)

  const swapKey = useMemo(() => JSON.stringify(palette), [palette])

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHoverIntent(true)}
      onMouseLeave={() => setIsHoverIntent(false)}
    >
      <TransitionSwap>
        <Swatch key={swapKey} colors={palette} isInteractive={isHoverIntent} />
      </TransitionSwap>
    </div>
  )
}

export default memo(CardColors)
