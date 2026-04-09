import React, { memo, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode, type LabelHTMLAttributes } from 'react'
import styles from './Field.module.css'

/**
 * ProUI Field grammar — port of ImAdamTM/site-themes Field primitive.
 *
 * 6-column grid row. Pair `Field.Object` children with `column="X / span Y"`
 * or `column="X / -1"` to position the label and control cells inside the
 * grid. The hover-reveal of `.options` is handled via CSS pseudo-classes
 * in Field.module.css — inline styles alone can't drive it.
 *
 * Usage:
 *   <Field>
 *     <Field.Object column="1 / span 2">
 *       <Field.Label htmlFor="opacity">Opacity</Field.Label>
 *     </Field.Object>
 *     <Field.Object column="3 / -1">
 *       <Input id="opacity" ... />
 *     </Field.Object>
 *   </Field>
 */

// ── Utility: join classNames, dropping falsy values ───────────────────────

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

// ── Field ─────────────────────────────────────────────────────────────────

interface FieldProps {
  children?: ReactNode
  className?: string
  /** Add horizontal padding via --proui-dialog-padding. Default: true. */
  padding?: boolean
  /** Remove vertical gap between rows (for tight stacks). Default: false. */
  stack?: boolean
}

function FieldComponent({
  children,
  className,
  padding = true,
  stack = false,
}: FieldProps) {
  const classNameOutput = useMemo(
    () => cx(styles.field, className, padding && styles.padding, stack && styles.stack),
    [className, padding, stack],
  )
  return <div className={classNameOutput}>{children}</div>
}

// ── Label ─────────────────────────────────────────────────────────────────

interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
  children?: ReactNode
  /** Bold label for section headers. */
  primary?: boolean
  /** Indented / muted label for sub-fields. */
  indent?: boolean
  /** Uppercase small-caps label for section dividers. */
  mini?: boolean
  /** Right-aligned options slot (reset buttons, unlink toggles, etc.). */
  options?: ReactNode
}

function LabelComponent({
  children,
  primary = false,
  indent = false,
  mini = false,
  options = null,
  ...rest
}: LabelProps) {
  const classNameOutput = useMemo(
    () => cx(
      styles.label,
      primary && styles.labelPrimary,
      indent && styles.indent,
      mini && styles.mini,
    ),
    [primary, indent, mini],
  )

  return (
    <div className={classNameOutput}>
      <label {...rest} onClick={(e) => e.stopPropagation()}>{children}</label>
      <div className={styles.options}>{options}</div>
    </div>
  )
}

// ── Object (grid cell) ────────────────────────────────────────────────────

interface ObjectProps {
  children?: ReactNode
  /** Use flex layout instead of subgrid (for multi-control rows with gap). */
  flexColumn?: boolean
  /** CSS grid-column value. Default `'auto / span 2'`. */
  column?: string
}

function ObjectComponent({
  children,
  flexColumn = false,
  column = 'auto / span 2',
}: ObjectProps) {
  const classNameOutput = useMemo(
    () => cx(styles.object, flexColumn && styles.objectFlex),
    [flexColumn],
  )

  const styleOutput = useMemo<CSSProperties>(
    () => ({ gridColumn: column }),
    [column],
  )

  return (
    <div className={classNameOutput} style={styleOutput}>
      {children}
    </div>
  )
}

// ── Collapsible ───────────────────────────────────────────────────────────

const TRANSITION_DURATION = 350

interface CollapsibleProps {
  children?: ReactNode
  collapsed?: boolean
}

function CollapsibleComponent({ children, collapsed = false }: CollapsibleProps) {
  const expanded = !collapsed
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const heightStateRef = useRef<number | 'auto'>(expanded ? 'auto' : 0)

  const classNameOutput = useMemo(
    () => cx(styles.collapsibleWrapper, expanded && styles.open),
    [expanded],
  )

  const styleOutput = useMemo<CSSProperties>(
    () => ({
      // Cast via Record to satisfy CSSProperties typing for custom properties.
      ...(expanded ? {} : {}),
      ['--height' as string]: expanded ? 'auto' : 0,
      ['--duration' as string]: `${TRANSITION_DURATION}ms`,
    }),
    [expanded],
  )

  useEffect(() => {
    const el = ref.current
    const contentEl = contentRef.current
    if (!el || !contentEl) return

    if (expanded) {
      const height = contentEl.scrollHeight
      heightStateRef.current = height
      el.style.setProperty('--height', `${height}px`)

      const timer = setTimeout(() => {
        heightStateRef.current = 'auto'
        el.style.setProperty('--height', 'auto')
      }, TRANSITION_DURATION)

      return () => clearTimeout(timer)
    } else {
      if (heightStateRef.current === 'auto') {
        const height = contentEl.scrollHeight
        el.style.setProperty('--height', `${height}px`)
        // Force reflow so the transition picks up the starting height.
        void contentEl.offsetHeight
      }
      el.style.setProperty('--height', '0')
      heightStateRef.current = 0
      return undefined
    }
  }, [expanded])

  return (
    <div ref={ref} className={classNameOutput} style={styleOutput}>
      <div ref={contentRef} className={styles.collapsible}>
        {children}
      </div>
    </div>
  )
}

// ── Exports ───────────────────────────────────────────────────────────────

interface FieldComponentWithStatics extends React.MemoExoticComponent<typeof FieldComponent> {
  Label: typeof LabelMemo
  Object: typeof ObjectMemo
  Collapsible: typeof CollapsibleMemo
}

const LabelMemo = memo(LabelComponent)
const ObjectMemo = memo(ObjectComponent)
const CollapsibleMemo = memo(CollapsibleComponent)

const Field = memo(FieldComponent) as FieldComponentWithStatics
Field.Label = LabelMemo
Field.Object = ObjectMemo
Field.Collapsible = CollapsibleMemo

export default Field
export { LabelMemo as Label, ObjectMemo as FieldObject, CollapsibleMemo as Collapsible }
export type { FieldProps, LabelProps, ObjectProps, CollapsibleProps }
