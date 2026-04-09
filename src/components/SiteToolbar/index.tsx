import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
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
  apiKey?: string
  onApiKeySave?: (key: string) => void
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

function ClaudeIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.64445 2.55279C8.39746 2.05881 7.79679 1.85859 7.30281 2.10558C6.80883 2.35257 6.60861 2.95324 6.8556 3.44722L9.68128 9.09859L5.06655 5.92596C4.61145 5.61308 3.98887 5.72837 3.67598 6.18348C3.3631 6.63858 3.47839 7.26116 3.9335 7.57405L9.40503 11.3357L3.05258 11.0014C2.50106 10.9724 2.03043 11.3959 2.00141 11.9474C1.97238 12.499 2.39594 12.9696 2.94747 12.9986L8.74187 13.3036L4.44532 16.168C3.9858 16.4743 3.86162 17.0952 4.16797 17.5547C4.47433 18.0142 5.0952 18.1384 5.55473 17.8321L9.19687 15.404L6.68629 18.9188C6.36528 19.3682 6.46937 19.9927 6.91879 20.3137C7.3682 20.6347 7.99275 20.5307 8.31376 20.0812L11.3471 15.8345L10.5136 20.8356C10.4228 21.3804 10.7909 21.8956 11.3356 21.9864C11.8804 22.0772 12.3956 21.7092 12.4864 21.1644L13.2883 16.3532L15.6588 20.0408C15.9575 20.5053 16.5762 20.6398 17.0408 20.3412C17.5054 20.0425 17.6399 19.4238 17.3412 18.9592L15.5553 16.1812L18.3217 18.7348C18.7276 19.1094 19.3602 19.0841 19.7348 18.6783C20.1094 18.2725 20.0841 17.6398 19.6783 17.2652L16.6427 14.4631L20.876 14.9923C21.424 15.0608 21.9238 14.6721 21.9923 14.124C22.0608 13.576 21.6721 13.0762 21.1241 13.0077L16.9342 12.484L21.2291 11.4734C21.7667 11.3469 22.0999 10.8086 21.9734 10.271C21.8469 9.73336 21.3086 9.40009 20.771 9.52659L15.1819 10.8417L19.2863 5.61783C19.6276 5.18356 19.5521 4.5549 19.1178 4.21369C18.6836 3.87247 18.0549 3.94791 17.7137 4.38218L13.8574 9.29015L14.738 3.65438C14.8233 3.10872 14.4501 2.59725 13.9044 2.51199C13.3587 2.42673 12.8473 2.79996 12.762 3.34563L11.876 9.01594L8.64445 2.55279Z" />
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
  apiKey,
  onApiKeySave,
  componentName,
}: SiteToolbarProps) {
  const [aiOpen, setAiOpen] = useState(false)
  const aiBtnRef = useRef<HTMLDivElement>(null)

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

        {onApiKeySave && (
          <>
            <div ref={aiBtnRef} style={{ position: 'relative' }}>
              <IconBtn onClick={() => setAiOpen(prev => !prev)} title="AI" active={aiOpen}>
                <ClaudeIcon style={{ width: 20, height: 20 }} />
              </IconBtn>
              {!!apiKey && (
                <div style={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#22c55e',
                  pointerEvents: 'none',
                }} />
              )}
            </div>
            <ApiKeyDropdown
              open={aiOpen}
              anchorRef={aiBtnRef}
              apiKey={apiKey}
              onSave={(key) => { onApiKeySave?.(key); setAiOpen(false) }}
              onClose={() => setAiOpen(false)}
            />
          </>
        )}

        <IconBtn onClick={onStyles} title="Site Styles" active={isSiteStylesOpen}>
          <PlayIcon style={{ width: 20, height: 20 }} />
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
        background: active ? 'var(--rosetta-bg-default)' : 'var(--rosetta-bg-base)',
        color: undefined,
        border: 'none',
        borderRadius: 6,
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

// ── API Key Dropdown ──────────────────────────────────────────────────────────

function ApiKeyDropdown({
  open,
  anchorRef,
  apiKey,
  onSave,
  onClose,
}: {
  open: boolean
  anchorRef: React.RefObject<HTMLElement | null>
  apiKey?: string
  onSave: (key: string) => void
  onClose: () => void
}) {
  const [value, setValue] = useState(apiKey ?? '')
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Sync external apiKey into local value when dropdown opens
  useEffect(() => {
    if (open) setValue(apiKey ?? '')
  }, [open, apiKey])

  // Position below anchor, right-aligned
  useEffect(() => {
    if (!open || !anchorRef.current) { setPos(null); return }
    const rect = anchorRef.current.getBoundingClientRect()
    setPos({ top: rect.bottom + 6, right: window.innerWidth - rect.right })
    const t = setTimeout(() => inputRef.current?.focus(), 60)
    return () => clearTimeout(t)
  }, [open, anchorRef])

  // Click outside to close
  useEffect(() => {
    if (!open) return
    function handleDown(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node) &&
          anchorRef.current && !anchorRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleDown)
    document.addEventListener('keydown', handleKey)
    return () => { document.removeEventListener('mousedown', handleDown); document.removeEventListener('keydown', handleKey) }
  }, [open, onClose, anchorRef])

  if (!open || !pos) return null

  const masked = apiKey ? apiKey.slice(0, 7) + '...' + apiKey.slice(-4) : ''
  const isValid = value.trim().startsWith('sk-')

  return createPortal(
    <div
      ref={panelRef}
      style={{
        position: 'fixed',
        top: pos.top,
        right: pos.right,
        width: 280,
        background: 'var(--rosetta-bg-base, #fff)',
        border: '1px solid var(--rosetta-border-default, rgba(0,0,0,0.08))',
        borderRadius: 8,
        boxShadow: '0px 16px 64px rgba(0,0,0,0.12), 0px 0px 1px rgba(0,0,0,0.08)',
        zIndex: 10000,
        fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
        animation: 'siteToolbarDropdownIn 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      <style>{`
        @keyframes siteToolbarDropdownIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ padding: '14px 14px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', color: 'var(--rosetta-fg-muted, #666)', marginBottom: 10 }}>
          Anthropic API Key
        </div>

        {apiKey && (
          <div style={{
            fontSize: 12,
            color: '#22c55e',
            marginBottom: 10,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
            Connected &middot; {masked}
          </div>
        )}

        <input
          ref={inputRef}
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && isValid) onSave(value.trim()) }}
          placeholder="sk-ant-..."
          style={{
            width: '100%',
            height: 36,
            border: '1px solid var(--rosetta-border-default, rgba(0,0,0,0.12))',
            borderRadius: 4,
            background: 'var(--rosetta-bg-default, #f5f5f5)',
            padding: '0 10px',
            fontSize: 13,
            fontFamily: 'inherit',
            color: 'var(--rosetta-fg-default, #0e0e0e)',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div style={{ padding: '12px 14px 14px', display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => isValid && onSave(value.trim())}
          disabled={!isValid}
          style={{
            height: 32,
            padding: '0 14px',
            background: isValid ? '#0E0E0E' : 'rgba(14,14,14,0.08)',
            color: isValid ? '#fff' : 'rgba(14,14,14,0.32)',
            border: 'none',
            borderRadius: 4,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: 0.4,
            textTransform: 'uppercase',
            cursor: isValid ? 'pointer' : 'default',
            fontFamily: 'inherit',
          }}
        >
          {apiKey ? 'Update' : 'Save'}
        </button>
      </div>
    </div>,
    document.body,
  )
}
