import { memo, useMemo } from 'react'
import styles from './ButtonPreview.module.css'
import TransitionSwap from '../utils/TransitionSwap'

/* ── Types ───────────────────────────────────────────────────────────────── */

interface ButtonPreviewProps {
  borderRadius?: [string, string, string, string]
  children?: React.ReactNode
  className?: string
  fill?: boolean
  fontWeight?: number
  invert?: boolean
  isHover?: boolean
  outline?: string
  padding?: { x: string; y: string }
  primaryColor?: string
  primaryColorNoFill?: string
  secondaryColor?: string
  secondaryColorNoFill?: string
  shape?: string
  textTransform?: string
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(' ')
}

const SHAPE_CLASS: Record<string, string | undefined> = {
  pill: styles.shapePill,
  oval: styles.shapeOval,
  square: styles.shapeSquare,
  underline: styles.shapeUnderline,
}

/* ── Component ───────────────────────────────────────────────────────────── */

function ButtonPreview(props: ButtonPreviewProps) {
  const {
    children,
    className,
    fill,
    invert,
    outline,
    shape,
    primaryColor,
    primaryColorNoFill,
    borderRadius = ['0', '0', '0', '0'],
    fontWeight = 500,
    secondaryColor,
    secondaryColorNoFill,
    textTransform = 'none',
    isHover = false,
    ...rest
  } = props

  const classNameOutput = useMemo(
    () =>
      cn(
        styles.container,
        fill && styles.fill,
        shape ? SHAPE_CLASS[shape] : undefined,
        isHover && styles.hover,
      ),
    [fill, shape, isHover],
  )

  const styleOutput = useMemo(
    () =>
      ({
        '--color-primary-hsl': fill
          ? invert
            ? secondaryColor
            : primaryColor
          : primaryColorNoFill,
        '--color-secondary-hsl': fill
          ? invert
            ? primaryColor
            : secondaryColor
          : secondaryColorNoFill,
        '--border-width': outline,
        '--border-radius': borderRadius.join(' '),
      }) as React.CSSProperties,
    [
      borderRadius,
      fill,
      invert,
      outline,
      primaryColor,
      primaryColorNoFill,
      secondaryColor,
      secondaryColorNoFill,
    ],
  )

  const swapKey = useMemo(
    () => `${className}_${textTransform}_${fontWeight}`,
    [className, textTransform, fontWeight],
  )

  return (
    <div
      className={classNameOutput}
      style={styleOutput}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.cardBackgroundMatch} />
      <TransitionSwap className={styles.outer} classNameContent={styles.inner}>
        <span
          key={swapKey}
          className={className}
          style={{
            textTransform: textTransform as React.CSSProperties['textTransform'],
            fontWeight,
          }}
        >
          {children}
        </span>
      </TransitionSwap>
    </div>
  )
}

export default memo(ButtonPreview)
