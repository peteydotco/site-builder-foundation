import React, { useRef, useState, useEffect, useMemo } from 'react'

// ── Grid constants ──────────────────────────────────────────────────────────
// Gaps are FIXED and do not scale with the viewport.
// Bricks scale uniformly to fill remaining space.

export const FE_COLUMNS = 12
export const FE_COL_GAP = 33   // fixed horizontal gap between bricks (px)
export const FE_ROW_GAP = 16   // fixed vertical gap between bricks (px)
export const FE_MARGIN = 33    // matches layout column margins
const CELL_RADIUS = 3

// ── Derived helpers ─────────────────────────────────────────────────────────

/** Compute brick width for a given container width */
export function feBrickWidth(containerWidth: number): number {
  return (containerWidth - FE_MARGIN * 2 - FE_COL_GAP * (FE_COLUMNS - 1)) / FE_COLUMNS
}

/** Brick height = half the brick width (2 rows per column width) */
export function feBrickHeight(containerWidth: number): number {
  return feBrickWidth(containerWidth) / 2
}

/** Section height that fits exactly N rows, flush top and bottom */
export function feRowsHeight(rows: number, containerWidth: number): number {
  const h = feBrickHeight(containerWidth)
  return rows * h + (rows - 1) * FE_ROW_GAP
}

/** Snap a pixel height up to the nearest whole number of rows */
export function feSnapHeight(px: number, containerWidth: number): number {
  const h = feBrickHeight(containerWidth)
  const step = h + FE_ROW_GAP
  const rows = Math.ceil((px + FE_ROW_GAP) / step)
  return feRowsHeight(rows, containerWidth)
}

/** Snap a pixel position to the nearest row boundary */
export function feSnapTop(px: number, containerWidth: number): number {
  const h = feBrickHeight(containerWidth)
  const step = h + FE_ROW_GAP
  return Math.round(px / step) * step
}

/** Snap a pixel left position to the nearest column boundary */
export function feSnapLeft(px: number, containerWidth: number): number {
  const w = feBrickWidth(containerWidth)
  const step = w + FE_COL_GAP
  return FE_MARGIN + Math.round((px - FE_MARGIN) / step) * step
}

// ── Component ───────────────────────────────────────────────────────────────

/**
 * Fluid Engine Grid — bricks scale with viewport, gaps stay fixed.
 * First row is flush with section top, last row flush with bottom.
 */
export default function FluidEngineGrid({ fadeIn = false }: { fadeIn?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const brickW = size.width > 0 ? feBrickWidth(size.width) : 0
  const brickH = brickW / 2

  // Row count: fill section height exactly
  const rowCount = brickH > 0
    ? Math.round((size.height + FE_ROW_GAP) / (brickH + FE_ROW_GAP))
    : 0

  const totalCells = FE_COLUMNS * rowCount

  const cells = useMemo(() => {
    if (totalCells <= 0) return null
    return Array.from({ length: totalCells }, (_, i) => (
      <div
        key={i}
        style={{
          borderRadius: CELL_RADIUS,
          background: 'rgba(242, 242, 242, 0.3)',
          border: '1px solid var(--rosetta-border-default)',
        }}
      />
    ))
  }, [totalCells])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
        opacity: fadeIn ? 1 : undefined,
        transition: fadeIn ? 'opacity 0.15s ease' : undefined,
      }}
    >
      {brickW > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${FE_COLUMNS}, 1fr)`,
            gridTemplateRows: `repeat(${rowCount}, 1fr)`,
            columnGap: FE_COL_GAP,
            rowGap: FE_ROW_GAP,
            padding: `0 ${FE_MARGIN}px`,
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          {cells}
        </div>
      )}
    </div>
  )
}
