import { memo, RefObject, useCallback, useMemo } from 'react'
import { useSiteThemesContext } from '../index'
import Dialog from '../primitives/Dialog'
import Card from '../primitives/Card'
import ListOverflow from '../primitives/ListOverflow'
import CardFonts from '../cards/CardFonts'
import type { FontPack } from '../../../types/siteThemes'

/* ── Constants ───────────────────────────────────────────────────────────── */

const NUM_COLUMNS = 2
const STAGGER_DELAY = 0.04

/* ── Types ───────────────────────────────────────────────────────────────── */

interface DialogFontsProps {
  attachment: RefObject<HTMLElement | null>
  undocked?: boolean
  onClose?: () => void
}

/* ── Component ───────────────────────────────────────────────────────────── */

function DialogFonts({ attachment, undocked, onClose: _onClose }: DialogFontsProps) {
  const { userTheme, fontPacks, setPack } = useSiteThemesContext()

  const serializedUserTheme = useMemo(
    () =>
      `${userTheme.fonts.headingFont.name}_${userTheme.fonts.paragraphFont.name}`,
    [userTheme],
  )

  const getCard = useCallback(
    (config: FontPack, index: number) => {
      const serialized = `${config.headingFont.name}_${config.paragraphFont.name}`
      const nextPack = {
        ...userTheme,
        fonts: { ...config },
      }
      const row = Math.floor(index / NUM_COLUMNS)

      return (
        <Card
          key={`${serialized}_${index}`}
          active={serializedUserTheme === serialized}
          onClick={() => setPack(nextPack)}
          delayShow={(row + 1) * STAGGER_DELAY}
          animateReveal
        >
          <CardFonts color={nextPack.color} fonts={config} />
        </Card>
      )
    },
    [serializedUserTheme, userTheme, setPack],
  )

  return (
    <Dialog attachment={attachment} undocked={undocked}>
      <Dialog.Panel>
        <Dialog.Header>Recommended Font Packs</Dialog.Header>
        <Dialog.Body padding>
          <ListOverflow
            items={fontPacks}
            getItem={getCard}
            columns={NUM_COLUMNS}
            max={8}
          />
        </Dialog.Body>
      </Dialog.Panel>
    </Dialog>
  )
}

export default memo(DialogFonts)
