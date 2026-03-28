import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useBlockDrag } from '../../hooks/useBlockDrag'
import { GlobalContentGlyphIcon } from '../../icons'

interface BlockHoverProps {
  label: string
  disabled?: boolean
  children: React.ReactNode
  style?: React.CSSProperties
  canvasWidth?: number
  sectionHeight?: number
  blockId?: string
  draggedPosition?: { left: number; top: number }
  onBlockDrop?: (id: string, left: number, top: number) => void
  onDragStateChange?: (dragging: boolean) => void
}

function BlockHover({
  label,
  disabled = false,
  children,
  style,
  canvasWidth,
  sectionHeight,
  blockId,
  draggedPosition,
  onBlockDrop,
  onDragStateChange,
}: BlockHoverProps) {
  const [hovered, setHovered] = useState(false)
  const blockRef = useRef<HTMLDivElement>(null)
  const prevDragging = useRef(false)
  const [resolvedPos, setResolvedPos] = useState<{ left: number; top: number; width: number; height: number } | null>(null)

  // Resolve pixel position from the DOM for drag calculations
  useEffect(() => {
    const el = blockRef.current
    if (!el || !el.offsetParent) return
    const update = () => {
      const parent = el.offsetParent as HTMLElement
      if (!parent) return
      setResolvedPos({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      })
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [style, canvasWidth, draggedPosition])

  const cw = canvasWidth ?? 0
  const draggable = !disabled && cw > 0 && resolvedPos !== null

  const handleDrop = useCallback((left: number, top: number) => {
    if (blockId && onBlockDrop) onBlockDrop(blockId, left, top)
  }, [blockId, onBlockDrop])

  const {
    isDragging,
    naturalOffset,
    snappedPosition,
    isSettling,
    dragHandleProps,
  } = useBlockDrag({
    initialLeft: resolvedPos?.left ?? 0,
    initialTop: resolvedPos?.top ?? 0,
    width: resolvedPos?.width ?? 0,
    height: resolvedPos?.height ?? 0,
    containerWidth: cw,
    sectionHeight,
    enabled: draggable,
    onDrop: handleDrop,
  })

  // Notify parent of drag state changes
  useEffect(() => {
    if (isDragging !== prevDragging.current) {
      prevDragging.current = isDragging
      onDragStateChange?.(isDragging)
    }
  }, [isDragging, onDragStateChange])

  const show = (hovered || isDragging) && !disabled
  const showLabel = show && !isDragging

  // Build base style: apply dragged position override if available
  const baseStyle: React.CSSProperties = draggedPosition
    ? { ...style, left: draggedPosition.left, top: draggedPosition.top }
    : { ...style }

  // During drag: position block at snapped grid position
  // Content gets extra transform for natural mouse offset
  const outerStyle: React.CSSProperties = isDragging
    ? {
        ...baseStyle,
        position: 'absolute' as const,
        left: snappedPosition.left,
        top: snappedPosition.top,
        width: resolvedPos?.width,
        height: style?.height ?? resolvedPos?.height,
        zIndex: 1000,
        cursor: 'grabbing',
        right: undefined,
        bottom: undefined,
      }
    : { position: 'relative' as const, cursor: draggable ? 'grab' : 'default', zIndex: 2, ...baseStyle }

  // Content transform: follows mouse naturally during drag, springs back on release
  const contentTransform = isDragging
    ? `translate(${naturalOffset.x - (snappedPosition.left - (resolvedPos?.left ?? 0))}px, ${naturalOffset.y - (snappedPosition.top - (resolvedPos?.top ?? 0))}px)`
    : undefined

  const contentTransition = isSettling
    ? 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
    : isDragging
      ? 'none'
      : undefined

  return (
    <div
      ref={blockRef}
      onMouseEnter={() => { if (!disabled) setHovered(true) }}
      onMouseLeave={() => { if (!isDragging) setHovered(false) }}
      {...(draggable ? dragHandleProps : {})}
      style={outerStyle}
    >
      {/* Content wrapper — follows mouse naturally during drag */}
      <div style={{
        transform: contentTransform,
        transition: contentTransition,
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        overflow: style?.overflow,
        display: style?.display,
        flexDirection: style?.flexDirection as any,
        alignItems: style?.alignItems,
        justifyContent: style?.justifyContent,
      }}>
        {children}
      </div>

      {/* Blue outline — always at snapped/container position */}
      {show && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            border: '2px solid #0072f0', zIndex: 2, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: -1,
            border: '1px solid #6ca4f4', zIndex: 2, pointerEvents: 'none',
          }} />
          {showLabel && <div style={{
            position: 'absolute', left: 0, top: -22,
            zIndex: 100, pointerEvents: 'none',
          }}>
            <div style={{
              background: '#0072f0', borderRadius: 9999, color: '#fff',
              display: 'flex', alignItems: 'center', gap: 3,
              height: 16, padding: '0.25px 6px 0.75px',
            }}>
              {label !== 'Text' && (
                <GlobalContentGlyphIcon style={{ width: 10, height: 10 }} />
              )}
              <span style={{
                fontSize: 9.75, fontWeight: 500,
                fontFamily: 'Clarkson, Helvetica, sans-serif',
                textTransform: 'uppercase', letterSpacing: 0.75,
                lineHeight: '16px', color: '#fff', whiteSpace: 'nowrap',
              }}>
                {label}
              </span>
            </div>
          </div>}
        </>
      )}
    </div>
  )
}

export default BlockHover
