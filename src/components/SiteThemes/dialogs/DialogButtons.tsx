import { memo, RefObject, useCallback, useMemo } from 'react'
import { useSiteThemesContext } from '../index'
import Dialog from '../primitives/Dialog'
import Card from '../primitives/Card'
import ListOverflow from '../primitives/ListOverflow'
import CardButtons from '../cards/CardButtons'
import type { ButtonPack } from '../../../types/siteThemes'

/* ── Constants ───────────────────────────────────────────────────────────── */

const NUM_COLUMNS = 2
const STAGGER_DELAY = 0.04

/* ── Types ───────────────────────────────────────────────────────────────── */

interface DialogButtonsProps {
  attachment: RefObject<HTMLElement | null>
  undocked?: boolean
  onClose?: () => void
}

/* ── Component ───────────────────────────────────────────────────────────── */

function DialogButtons({ attachment, undocked, onClose: _onClose }: DialogButtonsProps) {
  const { userTheme, buttonPacks, setPack } = useSiteThemesContext()

  const serializedUserTheme = useMemo(
    () => JSON.stringify(userTheme.buttons),
    [userTheme],
  )

  const getCard = useCallback(
    (config: ButtonPack, index: number) => {
      const serialized = JSON.stringify(config)
      const nextPack = {
        ...userTheme,
        buttons: { ...config },
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
          <CardButtons
            buttons={config}
            color={nextPack.color}
            fonts={nextPack.fonts}
          />
        </Card>
      )
    },
    [serializedUserTheme, userTheme, setPack],
  )

  return (
    <Dialog attachment={attachment} undocked={undocked}>
      <Dialog.Panel>
        <Dialog.Header>Recommended Button Packs</Dialog.Header>
        <Dialog.Body padding>
          <ListOverflow
            items={buttonPacks}
            getItem={getCard}
            columns={NUM_COLUMNS}
            max={8}
          />
        </Dialog.Body>
      </Dialog.Panel>
    </Dialog>
  )
}

export default memo(DialogButtons)
