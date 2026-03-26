import { memo, RefObject, useCallback, useMemo } from 'react'
import { useSiteThemesContext } from '../index'
import Dialog from '../primitives/Dialog'
import Card from '../primitives/Card'
import ListOverflow from '../primitives/ListOverflow'
import CardForms from '../cards/CardForms'
import type { FormPack } from '../../../types/siteThemes'

/* ── Constants ───────────────────────────────────────────────────────────── */

const NUM_COLUMNS = 2
const STAGGER_DELAY = 0.04

/* ── Types ───────────────────────────────────────────────────────────────── */

interface DialogFormsProps {
  attachment: RefObject<HTMLElement | null>
  undocked?: boolean
  onClose?: () => void
}

/* ── Component ───────────────────────────────────────────────────────────── */

function DialogForms({ attachment, undocked, onClose: _onClose }: DialogFormsProps) {
  const { userTheme, formPacks, setPack } = useSiteThemesContext()

  const serializedUserTheme = useMemo(
    () => JSON.stringify(userTheme.form),
    [userTheme],
  )

  const getCard = useCallback(
    (config: FormPack, index: number) => {
      const serialized = JSON.stringify(config)
      const nextPack = {
        ...userTheme,
        form: { ...config },
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
          <CardForms
            form={config}
            color={nextPack.color}
            fonts={nextPack.fonts}
            previewSize="small"
          />
        </Card>
      )
    },
    [serializedUserTheme, userTheme, setPack],
  )

  return (
    <Dialog attachment={attachment} undocked={undocked}>
      <Dialog.Panel>
        <Dialog.Header>Recommended Form Packs</Dialog.Header>
        <Dialog.Body padding>
          <ListOverflow
            items={formPacks}
            getItem={getCard}
            columns={NUM_COLUMNS}
            max={8}
          />
        </Dialog.Body>
      </Dialog.Panel>
    </Dialog>
  )
}

export default memo(DialogForms)
