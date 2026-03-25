import { useRef, useState, useCallback, useEffect } from 'react'
import {
  feBrickWidth,
  feBrickHeight,
  feSnapTop,
  feSnapLeft,
  FE_COL_GAP,
  FE_ROW_GAP,
  FE_MARGIN,
} from '../components/FluidEngineGrid'

/**
 * useBlockDrag — SQSP 7.1 Fluid Engine drag behavior.
 *
 * Two-layer interaction:
 *   1. Block content follows mouse naturally (smooth)
 *   2. Blue container snaps to grid bricks discretely
 *
 * When the natural position crosses the 50% mark of the next brick,
 * the snapped container jumps. On release, the content springs into
 * the snapped position.
 */

interface BlockDragOptions {
  /** Current absolute left of the block (px) */
  initialLeft: number
  /** Current absolute top of the block (px) */
  initialTop: number
  /** Block width (px) */
  width: number
  /** Block height (px) */
  height: number
  /** Container (section) width for grid math */
  containerWidth: number
  /** Height of the origin section — constrains drag so at least one brick stays inside */
  sectionHeight?: number
  /** Whether dragging is enabled */
  enabled?: boolean
  /** Called with final snapped position on drop */
  onDrop?: (left: number, top: number) => void
}

interface BlockDragResult {
  /** Is the user actively dragging? */
  isDragging: boolean
  /** Natural mouse-following offset from initial position */
  naturalOffset: { x: number; y: number }
  /** Snapped grid position (absolute px) */
  snappedPosition: { left: number; top: number }
  /** Is the block settling (spring animation after release)? */
  isSettling: boolean
  /** Props to spread on the drag handle element */
  dragHandleProps: {
    onMouseDown: (e: React.MouseEvent) => void
  }
}

export function useBlockDrag({
  initialLeft,
  initialTop,
  width,
  height,
  containerWidth,
  sectionHeight,
  enabled = true,
  onDrop,
}: BlockDragOptions): BlockDragResult {
  const [isDragging, setIsDragging] = useState(false)
  const [isSettling, setIsSettling] = useState(false)
  const [naturalOffset, setNaturalOffset] = useState({ x: 0, y: 0 })
  const [snappedPosition, setSnappedPosition] = useState({ left: initialLeft, top: initialTop })

  const startCursor = useRef({ x: 0, y: 0 })
  const startPos = useRef({ left: initialLeft, top: initialTop })
  const latestNatural = useRef({ x: 0, y: 0 })
  const latestSnapped = useRef({ left: initialLeft, top: initialTop })

  // Keep snapped position in sync when not dragging
  useEffect(() => {
    if (!isDragging && !isSettling) {
      setSnappedPosition({ left: initialLeft, top: initialTop })
    }
  }, [initialLeft, initialTop, isDragging, isSettling])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!enabled || e.button !== 0) return
    e.preventDefault()

    startCursor.current = { x: e.clientX, y: e.clientY }
    startPos.current = { left: initialLeft, top: initialTop }
    latestNatural.current = { x: 0, y: 0 }
    latestSnapped.current = { left: initialLeft, top: initialTop }

    let hasDragged = false
    const DRAG_THRESHOLD = 4

    const handleMouseMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startCursor.current.x
      const dy = ev.clientY - startCursor.current.y

      if (!hasDragged) {
        if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return
        hasDragged = true
        setIsDragging(true)
        setIsSettling(false)
        setNaturalOffset({ x: 0, y: 0 })
        setSnappedPosition({ left: initialLeft, top: initialTop })
      }

      // Clamp vertical so at least one brick row stays inside the origin section
      let clampedDy = dy
      if (sectionHeight != null && containerWidth > 0) {
        const brickH = feBrickHeight(containerWidth)
        const minTop = 0  // block cannot bleed above the section (into header)
        const maxTop = sectionHeight - brickH // block can go down until only one brick row remains
        const candidateTop = startPos.current.top + dy
        if (candidateTop < minTop) clampedDy = minTop - startPos.current.top
        if (candidateTop > maxTop) clampedDy = maxTop - startPos.current.top
      }

      latestNatural.current = { x: dx, y: clampedDy }
      setNaturalOffset({ x: dx, y: clampedDy })

      const naturalLeft = startPos.current.left + dx
      const naturalTop = startPos.current.top + clampedDy

      const snappedLeft = feSnapLeft(naturalLeft, containerWidth)
      const snappedTop = feSnapTop(naturalTop, containerWidth)

      latestSnapped.current = { left: snappedLeft, top: snappedTop }
      setSnappedPosition({ left: snappedLeft, top: snappedTop })
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)

      if (!hasDragged) return // Was just a click, not a drag

      const finalSnap = latestSnapped.current
      onDrop?.(finalSnap.left, finalSnap.top)

      setIsDragging(false)
      setIsSettling(true)
      setNaturalOffset({ x: 0, y: 0 })

      setTimeout(() => {
        setIsSettling(false)
      }, 300)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [enabled, initialLeft, initialTop, width, height, containerWidth, sectionHeight, onDrop])

  return {
    isDragging,
    naturalOffset,
    snappedPosition,
    isSettling,
    dragHandleProps: { onMouseDown },
  }
}
