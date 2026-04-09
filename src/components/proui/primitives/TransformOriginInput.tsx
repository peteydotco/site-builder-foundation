import { memo, useCallback } from 'react'
import styles from './TransformOriginInput.module.css'

/**
 * ProUI TransformOriginInput — 3×3 anchor/origin picker.
 *
 * Scoped port of ImAdamTM/site-themes TransformOriginInput. Inline
 * click-to-select: 9 positions representing (0,0) top-left through
 * (100,100) bottom-right in 50% increments. The full drag-to-position
 * popup control from Adam's repo is deferred.
 *
 * Value shape matches Adam's: `{ x: number, y: number }` where each is
 * 0–100 (percentage). Default center = { x: 50, y: 50 }.
 *
 * Usage:
 *   <TransformOriginInput
 *     value={origin}
 *     onChange={setOrigin}
 *   />
 */

export interface AnchorValue {
  x: number
  y: number
}

export interface TransformOriginInputProps {
  value: AnchorValue
  onChange: (value: AnchorValue) => void
  'aria-label'?: string
}

const POSITIONS: Array<[number, number]> = [
  [0, 0], [50, 0], [100, 0],
  [0, 50], [50, 50], [100, 50],
  [0, 100], [50, 100], [100, 100],
]

function TransformOriginInputComponent({
  value,
  onChange,
  'aria-label': ariaLabel = 'Transform origin',
}: TransformOriginInputProps) {
  const handleSelect = useCallback(
    (x: number, y: number) => () => onChange({ x, y }),
    [onChange],
  )

  return (
    <div className={styles.container} role="group" aria-label={ariaLabel}>
      {POSITIONS.map(([x, y]) => {
        const active = value.x === x && value.y === y
        return (
          <button
            key={`${x}-${y}`}
            type="button"
            className={`${styles.dot}${active ? ' ' + styles.active : ''}`}
            onClick={handleSelect(x, y)}
            aria-label={`Anchor ${x}% ${y}%`}
            aria-pressed={active}
          />
        )
      })}
    </div>
  )
}

const TransformOriginInput = memo(TransformOriginInputComponent)
export default TransformOriginInput
export { TransformOriginInput }
