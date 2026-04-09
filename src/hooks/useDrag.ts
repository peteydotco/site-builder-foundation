import { useState, useRef, useCallback, useEffect, type RefObject, type MutableRefObject } from 'react'

interface UsePanelDragOptions {
  panelRef: RefObject<HTMLDivElement | null>
  containerSize: { w: number; h: number }
  panelState: 'floating' | 'snapped-left' | 'snapped-right'
  basePosition: MutableRefObject<{ x: number; y: number }>
  onSnap: (side: 'left' | 'right') => void
  onUnsnap: () => void
  enabled?: boolean
  /** Width of the panel being dragged, in pixels. Affects drag clamping,
   *  snap-bar normalization, and snap-corner hover zones. Defaults to 575px
   *  (Canvas view). Narrower values (e.g. 320 for Schema view) widen the
   *  effective hover zones proportionally. */
  panelWidth?: number
}

interface UsePanelDragReturn {
  position: { x: number; y: number }
  isDragging: boolean
  isUnsnapping: boolean
  snapHint: 'left' | 'right' | null
  isExpanded: boolean
  snapBarPosition: number
  dragRegionProps: {
    onMouseDown: (e: React.MouseEvent) => void
  }
  hoverZoneProps: {
    onMouseEnter: () => void
    onMouseLeave: () => void
    onMouseMove: (e: React.MouseEvent) => void
  }
}

const DRAG_THRESHOLD = 2
const SNAP_EDGE_ZONE = 0.15
const PANEL_MARGIN = 11
// Fraction of panel width at left/right edges that triggers snap hint on hover.
// 0.12 = 38px at the 320px Schema view — the minimum usable hover target.
// At 7% (22px) the snap zone was too narrow to trigger reliably.
const SNAP_CORNER_FRACTION = 0.12

export function usePanelDrag({
  panelRef,
  containerSize,
  panelState,
  basePosition,
  onSnap,
  onUnsnap,
  enabled = true,
  panelWidth = 575,
}: UsePanelDragOptions): UsePanelDragReturn {
  const [isDragging, setIsDragging] = useState(false)
  const [isUnsnapping, setIsUnsnapping] = useState(false)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [snapHint, setSnapHint] = useState<'left' | 'right' | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [snapBarPosition, setSnapBarPosition] = useState(0)

  // Mutable refs to avoid stale closures in document-level listeners
  const startCursor = useRef<{ x: number; y: number } | null>(null)
  const startBase = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const hasDragged = useRef(false)
  const isMouseDown = useRef(false)
  const wasSnapped = useRef(false)

  // Keep callbacks fresh
  const onSnapRef = useRef(onSnap)
  onSnapRef.current = onSnap
  const onUnsnapRef = useRef(onUnsnap)
  onUnsnapRef.current = onUnsnap
  const panelStateRef = useRef(panelState)
  panelStateRef.current = panelState
  const containerSizeRef = useRef(containerSize)
  containerSizeRef.current = containerSize
  const basePositionRef = useRef(basePosition)
  basePositionRef.current = basePosition

  // Stable handler refs
  const handleMouseMoveRef = useRef<(e: MouseEvent) => void>(() => {})
  const handleMouseUpRef = useRef<(e: MouseEvent) => void>(() => {})

  handleMouseMoveRef.current = (e: MouseEvent) => {
    if (!startCursor.current) return

    const dx = e.clientX - startCursor.current.x
    const dy = e.clientY - startCursor.current.y

    // Threshold check
    if (!hasDragged.current) {
      if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return
      hasDragged.current = true
      setIsDragging(true)
      // Clear hover-based snap hint once dragging starts
      setSnapHint(null)

      // If was snapped, compute pixel position and unsnap with transition
      if (wasSnapped.current) {
        const state = panelStateRef.current
        const cw = containerSizeRef.current.w
        let snapX: number, snapY: number
        if (state === 'snapped-left') {
          snapX = PANEL_MARGIN
          snapY = PANEL_MARGIN
        } else {
          snapX = cw - panelWidth - PANEL_MARGIN
          snapY = PANEL_MARGIN
        }
        startBase.current = { x: snapX, y: snapY }
        basePositionRef.current.current = { x: snapX, y: snapY }
        setIsUnsnapping(true)
        onUnsnapRef.current()
        // Clear unsnapping after transition completes
        setTimeout(() => setIsUnsnapping(false), 450)
      }
    }

    const newX = startBase.current.x + dx
    const newY = startBase.current.y + dy

    // Clamp within container
    const cw = containerSizeRef.current.w
    const ch = containerSizeRef.current.h
    const clampedX = Math.max(0, Math.min(cw - panelWidth, newX))
    const clampedY = Math.max(0, Math.min(ch - 100, newY)) // keep at least 100px visible

    setPosition({ x: clampedX, y: clampedY })

    // Snap hint during drag: cursor in container edge zones
    const containerEl = panelRef.current?.parentElement
    const containerLeft = containerEl?.getBoundingClientRect().left ?? 0
    const cursorInContainer = e.clientX - containerLeft
    if (cursorInContainer < cw * SNAP_EDGE_ZONE) {
      setSnapHint('left')
    } else if (cursorInContainer > cw * (1 - SNAP_EDGE_ZONE)) {
      setSnapHint('right')
    } else {
      setSnapHint(null)
    }

    // Snap bar position: normalized -1 to 1
    const panelCenterX = clampedX + panelWidth / 2
    const normalized = Math.max(-1, Math.min(1, (cursorInContainer - panelCenterX) / (panelWidth / 2)))
    setSnapBarPosition(normalized)
  }

  handleMouseUpRef.current = (e: MouseEvent) => {
    isMouseDown.current = false
    document.removeEventListener('mousemove', stableMouseMove)
    document.removeEventListener('mouseup', stableMouseUp)

    if (hasDragged.current) {
      const containerEl = panelRef.current?.parentElement
      const containerLeft = containerEl?.getBoundingClientRect().left ?? 0
      const cursorInContainer = e.clientX - containerLeft
      const cw = containerSizeRef.current.w
      const edgeZone = cw * SNAP_EDGE_ZONE

      if (cursorInContainer < edgeZone) {
        onSnapRef.current('left')
      } else if (cursorInContainer > cw - edgeZone) {
        onSnapRef.current('right')
      } else {
        // Dropped in middle — update basePosition to current position
        const dx = e.clientX - (startCursor.current?.x ?? e.clientX)
        const dy = e.clientY - (startCursor.current?.y ?? e.clientY)
        const newX = startBase.current.x + dx
        const newY = startBase.current.y + dy
        const clamped = {
          x: Math.max(0, Math.min(cw - panelWidth, newX)),
          y: Math.max(0, Math.min(containerSizeRef.current.h - 100, newY)),
        }
        basePositionRef.current.current = clamped
        setPosition(clamped)
      }
    }

    setIsDragging(false)
    setSnapHint(null)
    startCursor.current = null
    hasDragged.current = false
    wasSnapped.current = false
  }

  // Stable function refs
  const stableMouseMove = useRef((e: MouseEvent) => handleMouseMoveRef.current(e)).current
  const stableMouseUp = useRef((e: MouseEvent) => handleMouseUpRef.current(e)).current

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!enabled || !panelRef.current) return
    e.preventDefault()
    e.stopPropagation()

    isMouseDown.current = true
    startCursor.current = { x: e.clientX, y: e.clientY }
    startBase.current = { ...basePositionRef.current.current }
    hasDragged.current = false
    wasSnapped.current = panelStateRef.current !== 'floating'

    document.addEventListener('mousemove', stableMouseMove)
    document.addEventListener('mouseup', stableMouseUp)
  }, [enabled, panelRef, stableMouseMove, stableMouseUp])

  // ── Hover zone handlers (expanded top area of panel) ──
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onHoverEnter = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current)
      leaveTimer.current = null
    }
    if (enabled) setIsExpanded(true)
  }, [enabled])

  const onHoverLeave = useCallback(() => {
    if (!isMouseDown.current) {
      // Small delay to allow mouse to move between drag region and header
      // without flickering the expanded state
      leaveTimer.current = setTimeout(() => {
        setIsExpanded(false)
        setSnapHint(null)
        setSnapBarPosition(0)
        leaveTimer.current = null
      }, 50)
    }
  }, [])

  // Track mouse position within expanded area for corner-based snap hints
  // Only responds when cursor is within the HandleArea's own vertical bounds
  const onHoverMove = useCallback((e: React.MouseEvent) => {
    if (!enabled || isDragging) return
    const panelEl = panelRef.current
    if (!panelEl) return

    // Ignore if cursor is below the HandleArea (e.g. in the header/address bar)
    const handleRect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    if (e.clientY > handleRect.bottom) return

    const rect = panelEl.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const cornerZone = panelWidth * SNAP_CORNER_FRACTION

    // Normalized position: -1 (left edge) to 1 (right edge)
    const normalized = Math.max(-1, Math.min(1, (relX - panelWidth / 2) / (panelWidth / 2)))
    setSnapBarPosition(normalized)

    const state = panelStateRef.current
    if (relX < cornerZone && state !== 'snapped-left') {
      setSnapHint('left')
    } else if (relX > panelWidth - cornerZone && state !== 'snapped-right') {
      setSnapHint('right')
    } else {
      setSnapHint(null)
    }
  }, [enabled, isDragging, panelRef, panelWidth])

  // Sync position when not dragging (e.g. on container resize or state change)
  useEffect(() => {
    if (!isDragging) {
      setPosition(basePosition.current)
    }
  }, [basePosition.current.x, basePosition.current.y, isDragging])

  // Cleanup
  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', stableMouseMove)
      document.removeEventListener('mouseup', stableMouseUp)
    }
  }, [stableMouseMove, stableMouseUp])

  // Reset when disabled
  useEffect(() => {
    if (!enabled) {
      setIsDragging(false)
      setSnapHint(null)
      setIsExpanded(false)
      setSnapBarPosition(0)
    }
  }, [enabled])

  return {
    position,
    isDragging,
    isUnsnapping,
    snapHint,
    isExpanded,
    snapBarPosition,
    dragRegionProps: { onMouseDown },
    hoverZoneProps: {
      onMouseEnter: onHoverEnter,
      onMouseLeave: onHoverLeave,
      onMouseMove: onHoverMove,
    },
  }
}
