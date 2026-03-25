import React from 'react'
import Tooltip, { useTooltip } from '../Tooltip'
import { CodeIcon, EditIcon, PinIcon, AlignTopIcon, DuplicateIcon } from '../../icons'

/**
 * Block Annotation Bar
 *
 * Two white pill shapes floating above a selected code block.
 *   [</>]   [✏  |  📌  ↑  ↕  ↕  |  ⧉  🗑]
 *
 * Pill radius: 16px. Hover shape radius: 8px.
 * Trash icon is red (#e02020).
 * Animates in via .annotation-enter CSS class.
 */

const PILL_STYLE: React.CSSProperties = {
  background: 'var(--rosetta-bg-base)',
  borderRadius: 11,
  height: 44,
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px',
  boxShadow: 'var(--shadows-200)',
}

interface BlockAnnotationBarProps {
  onOpenIDE: () => void
  onOpenDesignPanel?: (e: React.MouseEvent) => void
  onDelete?: (e: React.MouseEvent) => void
  isExiting?: boolean
}

export default function BlockAnnotationBar({
  onOpenIDE,
  onOpenDesignPanel,
  onDelete,
  isExiting,
}: BlockAnnotationBarProps) {
  return (
    <div className={isExiting ? 'annotation-exit' : 'annotation-enter'} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

      {/* Code pill */}
      <div style={PILL_STYLE}>
        <ABtn onClick={onOpenIDE} title="Open code editor">
          <CodeIcon style={{ width: 22, height: 18 }} />
        </ABtn>
      </div>

      {/* Main annotation bar */}
      <div style={{ ...PILL_STYLE, gap: 4 }}>
        <ABtn onClick={onOpenDesignPanel} title="Edit">
          <EditIcon style={{ width: 18.5, height: 18.5 }} />
        </ABtn>

        <ADivider />

        <ABtn title="Pin">
          <PinIcon style={{ width: 17.7, height: 17.7 }} />
        </ABtn>
        <ABtn title="Align top">
          <AlignTopIcon style={{ width: 18, height: 14 }} />
        </ABtn>
        <ABtn title="Move forward">
          <MoveForwardIcon />
        </ABtn>
        <ABtn title="Move backward">
          <MoveBackwardIcon />
        </ABtn>

        <ADivider />

        <ABtn title="Duplicate">
          <DuplicateIcon style={{ width: 18, height: 18 }} />
        </ABtn>
        <ABtn onClick={onDelete} title="Delete" danger>
          <TrashIcon />
        </ABtn>
      </div>
    </div>
  )
}

// ── Sub-components ───────────────────────────────────────────────────────

function ABtn({
  children,
  onClick,
  title,
  danger,
}: {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  title?: string
  danger?: boolean
}) {
  const { ref, hovered, showTooltip, onMouseEnter, onMouseLeave } = useTooltip()
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'relative',
        width: 36,
        height: 44,
        background: 'transparent',
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: danger ? 'var(--rosetta-fg-danger)' : 'var(--rosetta-fg-default)',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute',
          top: 4,
          left: 0,
          width: 36,
          height: 36,
          background: danger ? 'var(--rosetta-bg-danger-default)' : 'var(--rosetta-bg-default)',
          borderRadius: 6,
        }} />
      )}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
      {title && <Tooltip text={title} anchorRef={ref} visible={showTooltip} />}
    </button>
  )
}

function ADivider() {
  return (
    <div style={{ width: 1, height: 20, background: 'var(--rosetta-border-default)', flexShrink: 0 }} />
  )
}

/** Bring Forward — solid front rect (top-left) over dashed back rect (bottom-right). */
function MoveForwardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="7" y="7" width="13" height="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <rect x="2" y="2" width="13" height="13" fill="var(--rosetta-bg-base, white)" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

/** Send Backward — solid back rect (bottom-right) behind dashed front rect (top-left). */
function MoveBackwardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="7" y="7" width="13" height="13" fill="var(--rosetta-bg-base, white)" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="2" width="13" height="13" fill="var(--rosetta-bg-base, white)" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  )
}

/** Red trash icon matching Figma annotation bar. */
function TrashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h12" />
      <path d="M7 5V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5" />
      <path d="M4.5 5l.5 9.5a1 1 0 0 0 1 .5h6a1 1 0 0 0 1-.5L14 5" />
      <path d="M7.5 8v4.5" />
      <path d="M10.5 8v4.5" />
    </svg>
  )
}
