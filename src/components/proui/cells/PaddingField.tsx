import { memo, useCallback, useMemo, useRef, useState } from 'react'
import Field from '../primitives/Field'
import Input from '../primitives/Input'
import UnlinkToggle from '../primitives/UnlinkToggle'
import {
  PaddingVerticalIcon,
  PaddingHorizontalIcon,
  PaddingTopIcon,
  PaddingRightIcon,
  PaddingBottomIcon,
  PaddingLeftIcon,
} from '../icons'

/**
 * ProUI PaddingField — scoped port of ImAdamTM/site-themes PaddingField.
 *
 * A ProUI row that exposes 4-direction padding with a linked/unlinked
 * affordance. When linked, the cell shows a Vertical + Horizontal pair
 * (top=bottom, left=right, controlled by two inputs). When unlinked,
 * four independent inputs surface for top, right, bottom, left.
 *
 * Controlled component: parent owns `value` as `{ top, right, bottom,
 * left }` numbers. The `linked` flag can be parent-controlled (pass
 * `linked` + `onLinkChange`) or cell-managed (omit both — the cell
 * infers linked state from whether top===bottom && left===right).
 *
 * Adam's version supports per-direction units (px/rem/%); the scoped
 * port fixes the unit to px. Upgrade is additive — swap the `units`
 * prop to an array later.
 */

export interface PaddingValue {
  top: number
  right: number
  bottom: number
  left: number
}

export interface PaddingFieldProps {
  value: PaddingValue
  onChange: (next: PaddingValue) => void
  /** Optional: parent-controlled link state. Omit for cell-managed. */
  linked?: boolean
  onLinkChange?: (linked: boolean) => void
  /** Minimum value for all directions. Default 0. */
  min?: number
  /** Maximum value for all directions. Default 200. */
  max?: number
  /** Step size. Default 1. */
  step?: number
}

function PaddingFieldComponent({
  value,
  onChange,
  linked: linkedProp,
  onLinkChange,
  min = 0,
  max = 200,
  step = 1,
}: PaddingFieldProps) {
  // Infer initial linked state from value shape when uncontrolled.
  const initialLinked = useMemo(
    () => value.top === value.bottom && value.left === value.right,
    // Intentionally only read on mount — subsequent value changes from
    // stepping shouldn't re-flip the link state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  const [linkedState, setLinkedState] = useState(initialLinked)
  const isLinked = linkedProp ?? linkedState

  // Cache the last unlinked values so toggling link off restores them.
  const cachedUnlinkedY = useRef<{ top: number; bottom: number } | null>(null)
  const cachedUnlinkedX = useRef<{ left: number; right: number } | null>(null)

  const units = useMemo(() => [{ unit: 'px', min, max, step, precision: 0 }], [min, max, step])

  const handleToggleLink = useCallback(() => {
    if (isLinked) {
      // Switching TO unlinked — restore cached unlinked values if any.
      if (cachedUnlinkedY.current) {
        onChange({
          top: value.top,
          bottom: cachedUnlinkedY.current.bottom,
          left: cachedUnlinkedX.current?.left ?? value.left,
          right: cachedUnlinkedX.current?.right ?? value.right,
        })
      }
    } else {
      // Switching TO linked — cache current unlinked values, then
      // collapse pairs so top=bottom and left=right.
      cachedUnlinkedY.current = { top: value.top, bottom: value.bottom }
      cachedUnlinkedX.current = { left: value.left, right: value.right }
      onChange({
        top: value.top,
        bottom: value.top,
        left: value.left,
        right: value.left,
      })
    }

    if (onLinkChange) {
      onLinkChange(!isLinked)
    } else {
      setLinkedState(prev => !prev)
    }
  }, [isLinked, value, onChange, onLinkChange])

  // Linked-mode handlers: one input drives a pair.
  const handleVerticalChange = useCallback(
    ({ value: next }: { value: number }) => {
      onChange({ ...value, top: next, bottom: next })
    },
    [value, onChange],
  )

  const handleHorizontalChange = useCallback(
    ({ value: next }: { value: number }) => {
      onChange({ ...value, left: next, right: next })
    },
    [value, onChange],
  )

  // Unlinked-mode handlers: each direction independent.
  const handleDirectionChange = useCallback(
    (direction: keyof PaddingValue) => ({ value: next }: { value: number }) => {
      onChange({ ...value, [direction]: next })
    },
    [value, onChange],
  )

  return (
    <>
      <Field>
        <Field.Object column="1 / span 2">
          <Field.Label
            htmlFor="padding-top"
            options={<UnlinkToggle linked={isLinked} onToggle={handleToggleLink} />}
          >
            Padding
          </Field.Label>
        </Field.Object>
        {isLinked ? (
          <>
            <Field.Object column="3 / span 2">
              <Input
                id="padding-top"
                value={value.top}
                units={units}
                icon={<PaddingVerticalIcon />}
                onChange={handleVerticalChange}
              />
            </Field.Object>
            <Field.Object column="5 / span 2">
              <Input
                id="padding-left"
                value={value.left}
                units={units}
                icon={<PaddingHorizontalIcon />}
                onChange={handleHorizontalChange}
              />
            </Field.Object>
          </>
        ) : (
          <>
            <Field.Object column="3 / span 2">
              <Input
                id="padding-top"
                value={value.top}
                units={units}
                icon={<PaddingTopIcon />}
                onChange={handleDirectionChange('top')}
              />
            </Field.Object>
            <Field.Object column="5 / span 2">
              <Input
                id="padding-right"
                value={value.right}
                units={units}
                icon={<PaddingRightIcon />}
                onChange={handleDirectionChange('right')}
              />
            </Field.Object>
          </>
        )}
      </Field>
      {!isLinked && (
        <Field>
          <Field.Object column="3 / span 2">
            <Input
              id="padding-bottom"
              value={value.bottom}
              units={units}
              icon={<PaddingBottomIcon />}
              onChange={handleDirectionChange('bottom')}
            />
          </Field.Object>
          <Field.Object column="5 / span 2">
            <Input
              id="padding-left"
              value={value.left}
              units={units}
              icon={<PaddingLeftIcon />}
              onChange={handleDirectionChange('left')}
            />
          </Field.Object>
        </Field>
      )}
    </>
  )
}

const PaddingField = memo(PaddingFieldComponent)
export default PaddingField
export { PaddingField }
