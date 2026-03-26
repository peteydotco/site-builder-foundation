import { memo, useMemo } from 'react'
import type { FormElementConfig, FormOptionConfig } from '../../../types/siteThemes'
import styles from './FormPreview.module.css'
import InputText from './InputText'
import useTemporaryActiveState from '../../../hooks/useTemporaryActiveState'
import useDelayedActiveState from '../../../hooks/useDelayedActiveState'

/* ── Config ──────────────────────────────────────────────────────────────── */

const HOVER_DURATION = 1

/* ── Types ───────────────────────────────────────────────────────────────── */

interface FormPreviewProps {
  className?: string
  input: FormElementConfig
  option: FormOptionConfig
  isInteractive?: boolean
  size?: 'standard' | 'small'
  primaryColor?: string
  secondaryColor?: string
  buttonPrimaryColor?: string
  buttonSecondaryColor?: string
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(' ')
}

const INPUT_SHAPE_CLASS: Record<string, string | undefined> = {
  pill: styles.inputShapePill,
  square: styles.inputShapeSquare,
  underline: styles.inputShapeUnderline,
}

const OPTION_SHAPE_CLASS: Record<string, string | undefined> = {
  pill: styles.optionShapePill,
  square: styles.optionShapeSquare,
  circle: styles.optionShapeCircle,
}

/* ── Inline check SVG ────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  )
}

/* ── Component ───────────────────────────────────────────────────────────── */

function FormPreview(props: FormPreviewProps) {
  const {
    className,
    input,
    option,
    isInteractive = false,
    size = 'standard',
    primaryColor,
    secondaryColor,
    buttonPrimaryColor,
    buttonSecondaryColor,
  } = props

  const isHoverOptionActive = useDelayedActiveState(isInteractive, HOVER_DURATION)
  const isHoverInput = useTemporaryActiveState(isInteractive, HOVER_DURATION)
  const isHoverOption = useTemporaryActiveState(isHoverOptionActive, HOVER_DURATION)

  const classNameOutput = useMemo(
    () =>
      cn(
        className,
        styles.container,
        input.fill && styles.inputFill,
        isHoverInput && styles.hoverInput,
        isHoverOption && styles.hoverOption,
        option.button && styles.optionButton,
        option.fill && styles.optionFill,
        option.inverted && styles.optionInvert,
        INPUT_SHAPE_CLASS[input.shape],
        OPTION_SHAPE_CLASS[option.shape],
        size === 'small' && styles.sizeSmall,
      ),
    [className, input, option, size, isHoverInput, isHoverOption],
  )

  const optionClassNameOutput = useMemo(
    () => cn(styles.option, option.button && styles.label),
    [option.button],
  )

  const styleOutput = useMemo(
    () =>
      ({
        '--input-border-width': input.outline,
        '--input-border-radius': input.borderRadius.join(' '),
        '--option-border-width': option.outline,
        '--option-border-radius': option.borderRadius.join(' '),
      }) as React.CSSProperties,
    [input.borderRadius, input.outline, option.borderRadius, option.outline],
  )

  const inputStyleOutput = useMemo(
    () =>
      ({
        '--color-primary-hsl': primaryColor,
        '--color-secondary-hsl': secondaryColor,
      }) as React.CSSProperties,
    [primaryColor, secondaryColor],
  )

  const optionStyleOutput = useMemo(
    () =>
      ({
        '--color-primary-hsl': buttonPrimaryColor,
        '--color-secondary-hsl': buttonSecondaryColor,
      }) as React.CSSProperties,
    [buttonPrimaryColor, buttonSecondaryColor],
  )

  return (
    <div className={classNameOutput} style={styleOutput}>
      <div className={styles.input} style={inputStyleOutput}>
        <InputText isInteractive={isInteractive} />
      </div>
      <div className={optionClassNameOutput} style={optionStyleOutput}>
        {option.button ? 'Option' : <CheckIcon />}
      </div>
    </div>
  )
}

export default memo(FormPreview)
