import { memo, RefObject, useCallback, useMemo } from 'react'
import { useSiteThemesContext } from '../index'
import Dialog from '../primitives/Dialog'
import Card from '../primitives/Card'
import ListOverflow from '../primitives/ListOverflow'
import CardThemes from '../cards/CardThemes'
import type { ThemePack } from '../../../types/siteThemes'

/* ── Constants ───────────────────────────────────────────────────────────── */

const NUM_COLUMNS = 1
const STAGGER_DELAY = 0.04

/* ── Types ───────────────────────────────────────────────────────────────── */

interface DialogThemesProps {
  attachment: RefObject<HTMLElement | null>
  undocked?: boolean
  onClose?: () => void
}

/* ── Component ───────────────────────────────────────────────────────────── */

function DialogThemes({ attachment, undocked, onClose: _onClose }: DialogThemesProps) {
  const { userTheme, themePacks, setPack } = useSiteThemesContext()
  const serializedUserTheme = useMemo(() => userTheme.name, [userTheme])

  const getCard = useCallback(
    (config: ThemePack, index: number) => {
      const serialized = config.name
      const row = Math.floor(index / NUM_COLUMNS)

      return (
        <Card
          key={`${serialized}_${index}`}
          active={serializedUserTheme === serialized}
          onClick={() => setPack(config)}
          wrap
          delayShow={(row + 1) * STAGGER_DELAY}
          animateReveal
        >
          <CardThemes
            color={config.color}
            fonts={config.fonts}
            buttons={config.buttons}
          />
        </Card>
      )
    },
    [serializedUserTheme, setPack],
  )

  return (
    <Dialog attachment={attachment} undocked={undocked}>
      <Dialog.Panel>
        <Dialog.Header>Themes</Dialog.Header>
        <Dialog.Body padding>
          <ListOverflow
            items={themePacks}
            getItem={getCard}
            columns={NUM_COLUMNS}
            max={8}
          />
        </Dialog.Body>
      </Dialog.Panel>
    </Dialog>
  )
}

export default memo(DialogThemes)
