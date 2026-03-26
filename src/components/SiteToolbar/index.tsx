import React, { useState } from 'react'
import Tooltip, { useTooltip } from '../Tooltip'
import { UndoIcon, RedoIcon, DesktopIcon, MobileIcon, PlayIcon, ChevronDownIcon } from '../../icons'

/**
 * SiteToolbar — the top chrome shared across all three editor views.
 *
 * Layout (matches Figma frames 404-2527, 404-2785, 396-2257):
 *   Left:   SAVE (filled) | EXIT | Undo | Redo
 *   Center: "Home / Page · Published" page button
 *           (+ optional Component name overlay for docked mode)
 *   Right:  Desktop/Mobile segmented control | Preview
 */

interface SiteToolbarProps {
  onSave?: (e: React.MouseEvent) => void
  onExit?: () => void
  onUndo?: () => void
  onRedo?: () => void
  activeBreakpoint?: 'desktop' | 'mobile'
  onBreakpointChange?: (bp: 'desktop' | 'mobile') => void
  onRun?: (e: React.MouseEvent) => void
  onStyles?: () => void
  isSiteStylesOpen?: boolean
  /** When provided, shows the component dropdown overlay (docked mode) */
  componentName?: string
}

function PaintbrushIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}

export default function SiteToolbar({
  onSave,
  onExit,
  onUndo,
  onRedo,
  activeBreakpoint = 'desktop',
  onBreakpointChange,
  onRun,
  onStyles,
  isSiteStylesOpen,
  componentName,
}: SiteToolbarProps) {
  return (
    <header data-theme="light" style={{
      position: 'relative',
      height: 56,
      background: 'var(--rosetta-bg-base)',
      borderBottom: '1px solid var(--rosetta-bg-default)',
      flexShrink: 0,
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>

      {/* ── Left cluster ── */}
      <div style={{
        position: 'absolute',
        left: 11,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        <button onClick={onSave} style={saveBtn}>Save</button>
        <TextBtn onClick={onExit} label="Exit" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <IconBtn onClick={onUndo} title="Undo">
            <UndoIcon style={{ width: 18, height: 15 }} />
          </IconBtn>
          <IconBtn onClick={undefined} title="Redo" disabled>
            <RedoIcon style={{ width: 18, height: 15, opacity: 0.28 }} />
          </IconBtn>
        </div>
      </div>

      {/* ── Center — slot-machine text swap ── */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: 'translateX(-50%)',
        textAlign: 'center',
        overflow: 'hidden',
        height: 56,
      }}>
        <div style={{
          transform: componentName ? 'translateY(-56px)' : 'translateY(0)',
          transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        }}>
          {/* Slot 1: Page title (default) */}
          <PageTitleBtn title="Adrienne" subtitle="Page · Published" />

          {/* Slot 2: Component name (focused mode) */}
          <div style={{
            height: 56,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 0.25,
              color: 'var(--rosetta-fg-default)',
              lineHeight: '18px',
              transition: 'color 0.3s ease',
            }}>
              {componentName ?? 'Component'}
            </div>
            <div style={{
              fontSize: 12,
              fontWeight: 400,
              color: 'var(--rosetta-fg-muted)',
              lineHeight: '16px',
              transition: 'color 0.3s ease',
            }}>
              Editing global component
            </div>
          </div>
        </div>
      </div>

      {/* ── Right cluster ── */}
      <div style={{
        position: 'absolute',
        right: 11,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: 11,
      }}>
        {/* Desktop / Mobile segmented control */}
        <div style={{
          width: 96,
          height: 36,
          background: 'var(--rosetta-bg-default)',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          transition: 'background 0.3s ease, opacity 0.3s ease',
          opacity: componentName ? 0.35 : 1,
          pointerEvents: componentName ? 'none' : undefined,
        }}>
          {(['desktop', 'mobile'] as const).map((bp) => (
            <button
              key={bp}
              onClick={() => onBreakpointChange?.(bp)}
              title={bp}
              disabled={!!componentName}
              style={{
                flex: 1,
                height: 32,
                background: activeBreakpoint === bp ? 'var(--rosetta-bg-base)' : 'transparent',
                border: 'none',
                borderRadius: 4,
                cursor: componentName ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease',
              }}
            >
              {bp === 'desktop'
                ? <DesktopIcon style={{ width: 18, height: 17 }} />
                : <MobileIcon style={{ width: 12, height: 20 }} />
              }
            </button>
          ))}
        </div>

        <IconBtn onClick={onStyles} title="Site Styles" active={isSiteStylesOpen}>
          <PaintbrushIcon style={{ width: 18, height: 18 }} />
        </IconBtn>
      </div>
    </header>
  )
}

function IconBtn({
  children,
  onClick,
  title,
  disabled,
  active,
}: {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  title?: string
  disabled?: boolean
  active?: boolean
}) {
  const { ref, hovered, showTooltip, onMouseEnter, onMouseLeave } = useTooltip()
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      style={{
        position: 'relative',
        width: 36,
        height: 36,
        background: active ? 'var(--rosetta-bg-strong)' : 'var(--rosetta-bg-base)',
        color: active ? 'var(--rosetta-fg-onStrong)' : undefined,
        border: 'none',
        borderRadius: 4,
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        pointerEvents: disabled ? 'none' : undefined,
        transition: 'background 0.2s ease, color 0.2s ease',
      }}
    >
      {hovered && !disabled && !active && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--rosetta-bg-default)',
          borderRadius: 4,
        }} />
      )}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
      {title && <Tooltip text={title} anchorRef={ref} visible={showTooltip} />}
    </button>
  )
}

const saveBtn: React.CSSProperties = {
  height: 36,
  background: 'var(--rosetta-bg-strong)',
  color: 'var(--rosetta-fg-onStrong)',
  border: 'none',
  padding: '0 11px',
  borderRadius: 4,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  flexShrink: 0,
}

function TextBtn({ onClick, label }: { onClick?: () => void; label: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: 36,
        background: 'var(--rosetta-bg-base)',
        color: 'var(--rosetta-fg-default)',
        border: 'none',
        padding: '0 11px',
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--rosetta-bg-default)',
          borderRadius: 4,
        }} />
      )}
      <span style={{ position: 'relative', zIndex: 1 }}>{label}</span>
    </button>
  )
}

function PageTitleBtn({ title, subtitle }: { title: string; subtitle: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 11px',
        borderRadius: 4,
        textAlign: 'center',
        height: 56,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute',
          top: 8, bottom: 8, left: 0, right: 0,
          background: 'var(--rosetta-bg-default)',
          borderRadius: 4,
        }} />
      )}
      <div style={{
        position: 'relative', zIndex: 1,
        fontSize: 13, fontWeight: 500, letterSpacing: 0.25,
        color: 'var(--rosetta-fg-default)', lineHeight: '18px',
      }}>
        {title}
      </div>
      <div style={{
        position: 'relative', zIndex: 1,
        fontSize: 12, fontWeight: 400,
        color: 'var(--rosetta-fg-muted)', lineHeight: '16px',
      }}>
        {subtitle}
      </div>
    </button>
  )
}
