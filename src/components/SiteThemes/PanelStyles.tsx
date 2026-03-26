import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSiteThemesContext } from './index'
import Panel from './primitives/Panel'
import StyleCard from './primitives/StyleCard'
import Disclosure from './primitives/Disclosure'
import TransitionSwap from './utils/TransitionSwap'
import CardThemes from './cards/CardThemes'
import CardFonts from './cards/CardFonts'
import CardColors from './cards/CardColors'
import CardButtons from './cards/CardButtons'
import CardForms from './cards/CardForms'
import DialogThemes from './dialogs/DialogThemes'
import DialogFonts from './dialogs/DialogFonts'
import DialogColors from './dialogs/DialogColors'
import DialogButtons from './dialogs/DialogButtons'
import DialogForms from './dialogs/DialogForms'
import panelStyles from './PanelStyles.module.css'

/* ── Hardcoded animation defaults ────────────────────────────────────────── */

const ANIMATE_REVEAL = true
const POPUP_ANIMATION_SPEED = 0.35
const POPUP_ANIMATION_CROSS_FADE_DELAY = 0.04

/* ── Types ───────────────────────────────────────────────────────────────── */

type DialogName = 'themes' | 'fonts' | 'colors' | 'buttons' | 'forms'

interface PanelStylesProps {
  depth?: number
  isActive?: boolean
}

/* ── Component ───────────────────────────────────────────────────────────── */

function PanelStyles({ depth = 0, isActive = false }: PanelStylesProps) {
  const { userTheme } = useSiteThemesContext()
  const [dialogAttachment, setDialogAttachment] = useState<React.RefObject<HTMLElement | null> | null>(null)
  const [dialog, setDialog] = useState<DialogName | null>(null)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const lastDialog = useRef<DialogName | null>(null)

  const handleClickPanel = useCallback(
    (e: React.MouseEvent, name: DialogName) => {
      e.preventDefault()
      e.stopPropagation()
      const target = e.currentTarget as HTMLElement
      // Wrap the raw element in a ref-like object for Dialog positioning
      const ref = { current: target } as React.RefObject<HTMLElement>
      setDialogAttachment(ref)
      setDialog(last => {
        clearTimeout(timeout.current)
        lastDialog.current = last === name ? null : name
        return lastDialog.current
      })
      clearTimeout(timeout.current)
    },
    [],
  )

  useEffect(() => {
    if (!isActive) {
      setDialog(null)
      setDialogAttachment(null)
    }
  }, [isActive])

  const getDelay = useCallback(
    (index: number, len: number) =>
      isActive ? index * 0.04 : (len - index) * 0.04,
    [isActive],
  )

  const handleCloseDialog = useCallback((currentDialog: DialogName) => {
    timeout.current = setTimeout(() => {
      if (lastDialog.current !== currentDialog) {
        return
      }
      setDialog(null)
    }, 0)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [])

  const dialogOutput = useMemo(() => {
    if (!dialogAttachment) return null

    if (dialog === 'themes') {
      return (
        <DialogThemes
          key="themes"
          attachment={dialogAttachment}
          undocked
          onClose={() => handleCloseDialog('themes')}
        />
      )
    }

    if (dialog === 'fonts') {
      return (
        <DialogFonts
          key="fonts"
          attachment={dialogAttachment}
          undocked
          onClose={() => handleCloseDialog('fonts')}
        />
      )
    }

    if (dialog === 'colors') {
      return (
        <DialogColors
          key="colors"
          attachment={dialogAttachment}
          undocked
          onClose={() => handleCloseDialog('colors')}
        />
      )
    }

    if (dialog === 'buttons') {
      return (
        <DialogButtons
          key="buttons"
          attachment={dialogAttachment}
          undocked
          onClose={() => handleCloseDialog('buttons')}
        />
      )
    }

    if (dialog === 'forms') {
      return (
        <DialogForms
          key="forms"
          attachment={dialogAttachment}
          undocked
          onClose={() => handleCloseDialog('forms')}
        />
      )
    }

    return null
  }, [dialog, dialogAttachment, handleCloseDialog])

  return (
    <Panel title="Styles" depth={depth} isActive={isActive}>
      <StyleCard
        label="Themes"
        isShown={isActive}
        onClick={e => handleClickPanel(e, 'themes')}
        active={dialog === 'themes'}
        wrap
        delayShow={getDelay(0, 5)}
        animateReveal={ANIMATE_REVEAL}
      >
        <CardThemes
          color={userTheme.color}
          fonts={userTheme.fonts}
          buttons={userTheme.buttons}
        />
      </StyleCard>
      <StyleCard
        disclosure="/config/site-styles/fonts"
        label="Fonts"
        isShown={isActive}
        onClick={e => handleClickPanel(e, 'fonts')}
        active={dialog === 'fonts'}
        delayShow={getDelay(1, 5)}
        animateReveal={ANIMATE_REVEAL}
      >
        <CardFonts color={userTheme.color} fonts={userTheme.fonts} />
      </StyleCard>
      <StyleCard
        disclosure="/config/site-styles/colors"
        label="Colors"
        isShown={isActive}
        onClick={e => handleClickPanel(e, 'colors')}
        active={dialog === 'colors'}
        delayShow={getDelay(2, 5)}
        animateReveal={ANIMATE_REVEAL}
      >
        <CardColors color={userTheme.color} />
      </StyleCard>
      <StyleCard
        disclosure="/config/site-styles/buttons"
        label="Buttons"
        isShown={isActive}
        onClick={e => handleClickPanel(e, 'buttons')}
        active={dialog === 'buttons'}
        delayShow={getDelay(3, 5)}
        animateReveal={ANIMATE_REVEAL}
      >
        <CardButtons
          buttons={userTheme.buttons}
          color={userTheme.color}
          fonts={userTheme.fonts}
        />
      </StyleCard>
      <StyleCard
        disclosure="/config/site-styles/forms"
        label="Forms"
        isShown={isActive}
        onClick={e => handleClickPanel(e, 'forms')}
        active={dialog === 'forms'}
        delayShow={getDelay(4, 5)}
        animateReveal={ANIMATE_REVEAL}
      >
        <CardForms
          form={userTheme.form}
          color={userTheme.color}
          fonts={userTheme.fonts}
        />
      </StyleCard>
      <div
        className={
          ANIMATE_REVEAL
            ? isActive
              ? panelStyles.fadeup
              : panelStyles.fadeoutdown
            : undefined
        }
        style={
          { '--animation-delay': `${getDelay(4, 5)}s` } as React.CSSProperties
        }
      >
        <Disclosure label="Animations" href="/config/site-styles/animations" />
        <Disclosure label="Spacing" href="/config/site-styles/spacing" />
      </div>
      <TransitionSwap
        animateFirst
        directionOut="down"
        delayShow={POPUP_ANIMATION_CROSS_FADE_DELAY}
        distance={0}
        duration={POPUP_ANIMATION_SPEED}
        useOpacity={false}
      >
        {dialogOutput}
      </TransitionSwap>
    </Panel>
  )
}

export default memo(PanelStyles)
