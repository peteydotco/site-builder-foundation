import { memo, RefObject, useCallback, useMemo } from 'react'
import { useSiteThemesContext } from '../index'
import Dialog from '../primitives/Dialog'
import Card from '../primitives/Card'
import ListOverflow from '../primitives/ListOverflow'
import CardColors from '../cards/CardColors'
import type { ColorPack } from '../../../types/siteThemes'

/* ── Constants ───────────────────────────────────────────────────────────── */

const NUM_COLUMNS = 2
const STAGGER_DELAY = 0.04

/* ── Types ───────────────────────────────────────────────────────────────── */

interface DialogColorsProps {
  attachment: RefObject<HTMLElement | null>
  undocked?: boolean
  onClose?: () => void
}

/* ── Component ───────────────────────────────────────────────────────────── */

function DialogColors({ attachment, undocked, onClose: _onClose }: DialogColorsProps) {
  const { userTheme, colorPacks, setPack } = useSiteThemesContext()

  const serializedUserTheme = useMemo(
    () => JSON.stringify(userTheme.color),
    [userTheme],
  )

  const getCard = useCallback(
    (config: ColorPack, index: number) => {
      const serialized = JSON.stringify(config)
      const nextPack = {
        ...userTheme,
        color: { ...config },
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
          <CardColors color={config} />
        </Card>
      )
    },
    [serializedUserTheme, userTheme, setPack],
  )

  return (
    <Dialog attachment={attachment} undocked={undocked}>
      <Dialog.Panel>
        <Dialog.Header>Recommended Color Packs</Dialog.Header>
        <Dialog.Body padding>
          <ListOverflow
            items={colorPacks}
            getItem={getCard}
            columns={NUM_COLUMNS}
            max={8}
          />
        </Dialog.Body>
      </Dialog.Panel>
    </Dialog>
  )
}

export default memo(DialogColors)
