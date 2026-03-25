import React, { useState, useRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * Rosetta-style tooltip — renders via portal to escape overflow clipping.
 * Shows after a 600ms hover delay, positioned below the anchor element.
 */
const EDGE_PAD = 8 // min distance from viewport edge

export default function Tooltip({
  text,
  anchorRef,
  visible,
}: {
  text: string
  anchorRef: React.RefObject<HTMLElement | null>
  visible: boolean
}) {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)

  useEffect(() => {
    if (!visible || !anchorRef.current) {
      setPos(null)
      return
    }

    // Position initially off-screen so we can measure without flash
    setPos({ top: -9999, left: -9999 })

    // Measure after render
    const rafId = requestAnimationFrame(() => {
      if (!anchorRef.current || !tooltipRef.current) return
      const anchor = anchorRef.current.getBoundingClientRect()
      const tip = tooltipRef.current.getBoundingClientRect()
      const vw = window.innerWidth

      let left = anchor.left + anchor.width / 2 - tip.width / 2
      const vh = window.innerHeight

      // Prefer below anchor; flip above if clipped at bottom
      let top = anchor.bottom + 6
      if (top + tip.height > vh - EDGE_PAD) {
        top = anchor.top - tip.height - 6
      }

      // Clamp horizontal to viewport edges
      if (left < EDGE_PAD) left = EDGE_PAD
      if (left + tip.width > vw - EDGE_PAD) left = vw - EDGE_PAD - tip.width

      setPos({ top, left })
    })

    return () => cancelAnimationFrame(rafId)
  }, [visible, anchorRef])

  if (!visible) return null

  return createPortal(
    <div
      ref={tooltipRef}
      style={{
        position: 'fixed',
        top: pos?.top ?? -9999,
        left: pos?.left ?? -9999,
        background: '#0E0E0E',
        color: '#fff',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Clarkson, Helvetica, sans-serif',
        lineHeight: '22px',
        padding: '6px 11px',
        borderRadius: 0,
        whiteSpace: 'nowrap',
        boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.08), 0px 8px 32px 0px rgba(0,0,0,0.12)',
        zIndex: 10000,
        pointerEvents: 'none',
      }}
    >
      {text}
    </div>,
    document.body,
  )
}

/**
 * Hook to manage tooltip delay logic.
 * Returns { hovered, showTooltip, onMouseEnter, onMouseLeave, ref }
 */
export function useTooltip(delay = 600) {
  const ref = useRef<HTMLElement | null>(null)
  const [hovered, setHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onMouseEnter = useCallback(() => {
    setHovered(true)
    timer.current = setTimeout(() => setShowTooltip(true), delay)
  }, [delay])

  const onMouseLeave = useCallback(() => {
    setHovered(false)
    setShowTooltip(false)
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }, [])

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  return { ref, hovered, showTooltip, onMouseEnter, onMouseLeave }
}
