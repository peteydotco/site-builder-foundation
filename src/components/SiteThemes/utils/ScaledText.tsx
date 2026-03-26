import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styles from './ScaledText.module.css'

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(' ')
}

/* ── Types ───────────────────────────────────────────────────────────────── */

interface ScaledTextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  className?: string
  Tag?: React.ElementType
  /** If provided, the hidden measurement element renders `input` instead of `children`. */
  input?: React.ReactNode
  children?: React.ReactNode
  /** Allow scaling above 1 (larger than natural size). Default: false. */
  upscale?: boolean
  /** Fit within both width AND height (not just width). Default: false. */
  contain?: boolean
  style?: React.CSSProperties
}

/**
 * Utility to fit text inside its parent container by adjusting `font-size`.
 *
 * Children must be sized with em-based units for scaling to propagate correctly.
 * Internally, a visually-hidden copy of the content is measured against the
 * container to compute the correct scale factor.
 */
function ScaledText(props: ScaledTextProps) {
  const {
    className,
    Tag = 'div',
    input,
    children,
    upscale = false,
    contain = false,
    style = {},
    ...rest
  } = props

  const classNameOutput = useMemo(() => cn(className, styles.container), [className])

  const ref = useRef<HTMLElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const virtualRef = useRef<HTMLDivElement>(null)
  const [maxScale, setMaxScale] = useState(1)
  const [scale, setScale] = useState(1)

  const handleResize = useCallback(() => {
    if (!measureRef.current || !virtualRef.current || !containerRef.current) {
      return
    }

    const scaleX = measureRef.current.clientWidth / virtualRef.current.clientWidth
    const scaleY = Number(
      (containerRef.current.clientHeight / virtualRef.current.clientHeight).toFixed(3),
    )

    const newScale = contain ? Math.min(scaleX, scaleY) : scaleX

    setMaxScale(contain ? 1 + Math.max(0, scaleX - newScale) : scaleX)

    if (!upscale && newScale >= 1) {
      setScale(1)
    } else {
      setScale(Math.max(0.1, newScale))
    }
  }, [contain, upscale])

  useLayoutEffect(() => {
    if (!containerRef.current || !measureRef.current || !virtualRef.current) {
      return
    }

    const observer = new ResizeObserver(handleResize)
    observer.observe(containerRef.current)
    observer.observe(measureRef.current)
    observer.observe(virtualRef.current)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    if (ref.current?.parentNode) {
      ;(ref.current.parentNode as HTMLElement).style.setProperty('--max-scale', String(maxScale))
    }
  }, [maxScale])

  return (
    <Tag
      ref={ref}
      className={classNameOutput}
      style={
        {
          '--scale': scale,
          '--max-scale': maxScale,
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <div ref={measureRef} className={styles.measure}>
        <div ref={containerRef} className={styles.wrapper}>
          <div ref={virtualRef} className={styles.virtual}>
            {input || children}
          </div>
        </div>
        <div className={styles.scale}>{children}</div>
      </div>
    </Tag>
  )
}

export default memo(ScaledText)
