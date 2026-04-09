import { memo, useEffect, useMemo, useRef } from 'react'
import styles from './Swatch.module.css'

/* ── Config ──────────────────────────────────────────────────────────────── */

const TRANSITION_DURATION = 0.2

/* ── Types ───────────────────────────────────────────────────────────────── */

interface SwatchProps {
  colors?: string[]
  isInteractive?: boolean
  /**
   * Layout variant.
   *  - 'equal' (default): all 5 swatches are 20% width — used when the
   *    palette is the headline element on a card or in a popover.
   *  - 'compact': the first swatch is wider (40%) and the rest are 15%
   *    each — used inside the Themes card where the palette is part of a
   *    larger lockup with the Aa glyph and button preview.
   */
  variant?: 'equal' | 'compact'
}

/* ── Component ───────────────────────────────────────────────────────────── */

function Swatch(props: SwatchProps) {
  const { colors = [], isInteractive = false, variant = 'equal' } = props
  const ref = useRef<HTMLDivElement>(null)

  const colorOutput = useMemo(
    () => (
      <>
        {colors.map((color, i) => (
          <div
            key={i}
            style={{ '--color': color, zIndex: -i } as React.CSSProperties}
          />
        ))}
      </>
    ),
    [colors],
  )

  useEffect(() => {
    const elements = ref.current ? Array.from(ref.current.children) as HTMLElement[] : []
    let interval: ReturnType<typeof setInterval> | null = null

    const reset = () => {
      elements.forEach((element) => {
        element.classList.remove(styles.active)
        element.classList.remove(styles.contracted)
      })
    }

    reset()

    if (isInteractive) {
      // Run the animation sequence (skip the first)
      let index = 1

      const update = () => {
        elements.forEach((element, elementIndex) => {
          element.classList.toggle(styles.active, elementIndex === index)
          element.classList.toggle(styles.contracted, elementIndex < index)
        })

        if (index >= elements.length) {
          if (interval) clearInterval(interval)
          reset()
        } else {
          index += 1
        }
      }

      update()
      interval = setInterval(update, TRANSITION_DURATION * 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isInteractive, colors.length])

  const className = variant === 'compact'
    ? `${styles.container} ${styles.compact}`
    : styles.container

  return (
    <div ref={ref} className={className}>
      {colorOutput}
    </div>
  )
}

export default memo(Swatch)
