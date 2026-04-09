import { memo, useCallback, useMemo } from 'react'
import Field from '../primitives/Field'
import Input from '../primitives/Input'
import TransformOriginInput, { type AnchorValue } from '../primitives/TransformOriginInput'
import {
  OpacityIcon,
  RotateIcon,
  ScaleIcon,
  SkewXIcon,
  SkewYIcon,
  OffsetXIcon,
  OffsetYIcon,
} from '../icons'

/**
 * ProUI TransformsLayout2 — scoped port of ImAdamTM/site-themes
 * BlockDialog/panels/shared/TransformsLayout2.js.
 *
 * The 2D transforms cell group matching the screenshot: Opacity (0–100%),
 * Rotate (degrees), Scale (0–200%), Skew (X/Y degrees), Offset (X/Y
 * pixels), Anchor (3×3 picker). Each property is its own Field row with
 * an icon and ProUI Input.
 *
 * Controlled component: parent owns `value` and receives updates via
 * `onChange`. The onChange is called with a partial update so the parent
 * can merge incrementally.
 *
 * Adam's version supports FoldableList expansion for advanced properties
 * and a [2D | 3D] mode toggle. Those are deferred — this cell renders all
 * 2D properties in a flat list.
 */

export interface TransformsValue {
  opacity: number     // 0–100 (%)
  rotate: number      // degrees
  scale: number       // 0–200 (%)
  skewX: number       // degrees
  skewY: number       // degrees
  offsetX: number     // pixels
  offsetY: number     // pixels
  anchor: AnchorValue // { x: 0–100, y: 0–100 }
}

export interface TransformsLayout2Props {
  value: TransformsValue
  onChange: (partial: Partial<TransformsValue>) => void
}

function TransformsLayout2Component({ value, onChange }: TransformsLayout2Props) {
  // Unit specs for each field. All single-unit for the scoped port.
  const opacityUnits = useMemo(() => [{ unit: '%', min: 0, max: 100, step: 1, precision: 0 }], [])
  const rotateUnits = useMemo(() => [{ unit: '°', min: -360, max: 360, step: 1, precision: 0 }], [])
  const scaleUnits = useMemo(() => [{ unit: '%', min: 0, max: 500, step: 1, precision: 0 }], [])
  const skewUnits = useMemo(() => [{ unit: '°', min: -180, max: 180, step: 1, precision: 0 }], [])
  const offsetUnits = useMemo(() => [{ unit: 'px', min: -500, max: 500, step: 1, precision: 0 }], [])

  const make = useCallback(
    <K extends keyof TransformsValue>(key: K) =>
      ({ value: next }: { value: number }) => onChange({ [key]: next } as Partial<TransformsValue>),
    [onChange],
  )

  const handleAnchorChange = useCallback(
    (nextAnchor: AnchorValue) => onChange({ anchor: nextAnchor }),
    [onChange],
  )

  return (
    <>
      {/* Section header */}
      <Field>
        <Field.Object column="1 / span 6">
          <Field.Label primary>Transforms</Field.Label>
        </Field.Object>
      </Field>

      {/* Opacity */}
      <Field>
        <Field.Object column="1 / span 2">
          <Field.Label htmlFor="opacity">Opacity</Field.Label>
        </Field.Object>
        <Field.Object column="3 / -1">
          <Input
            id="opacity"
            value={value.opacity}
            units={opacityUnits}
            icon={<OpacityIcon />}
            onChange={make('opacity')}
          />
        </Field.Object>
      </Field>

      {/* Rotate */}
      <Field>
        <Field.Object column="1 / span 2">
          <Field.Label htmlFor="rotate">Rotate</Field.Label>
        </Field.Object>
        <Field.Object column="3 / -1">
          <Input
            id="rotate"
            value={value.rotate}
            units={rotateUnits}
            icon={<RotateIcon />}
            onChange={make('rotate')}
          />
        </Field.Object>
      </Field>

      {/* Scale */}
      <Field>
        <Field.Object column="1 / span 2">
          <Field.Label htmlFor="scale">Scale</Field.Label>
        </Field.Object>
        <Field.Object column="3 / -1">
          <Input
            id="scale"
            value={value.scale}
            units={scaleUnits}
            icon={<ScaleIcon />}
            onChange={make('scale')}
          />
        </Field.Object>
      </Field>

      {/* Skew X / Y */}
      <Field>
        <Field.Object column="1 / span 2">
          <Field.Label htmlFor="skew-x">Skew</Field.Label>
        </Field.Object>
        <Field.Object column="3 / span 2">
          <Input
            id="skew-x"
            value={value.skewX}
            units={skewUnits}
            icon={<SkewXIcon />}
            onChange={make('skewX')}
          />
        </Field.Object>
        <Field.Object column="5 / span 2">
          <Input
            id="skew-y"
            value={value.skewY}
            units={skewUnits}
            icon={<SkewYIcon />}
            onChange={make('skewY')}
          />
        </Field.Object>
      </Field>

      {/* Offset X / Y */}
      <Field>
        <Field.Object column="1 / span 2">
          <Field.Label htmlFor="offset-x">Offset</Field.Label>
        </Field.Object>
        <Field.Object column="3 / span 2">
          <Input
            id="offset-x"
            value={value.offsetX}
            units={offsetUnits}
            icon={<OffsetXIcon />}
            onChange={make('offsetX')}
          />
        </Field.Object>
        <Field.Object column="5 / span 2">
          <Input
            id="offset-y"
            value={value.offsetY}
            units={offsetUnits}
            icon={<OffsetYIcon />}
            onChange={make('offsetY')}
          />
        </Field.Object>
      </Field>

      {/* Anchor */}
      <Field>
        <Field.Object column="1 / span 2">
          <Field.Label>Anchor</Field.Label>
        </Field.Object>
        <Field.Object column="3 / -1">
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TransformOriginInput value={value.anchor} onChange={handleAnchorChange} />
          </div>
        </Field.Object>
      </Field>
    </>
  )
}

const TransformsLayout2 = memo(TransformsLayout2Component)
export default TransformsLayout2
export { TransformsLayout2 }
