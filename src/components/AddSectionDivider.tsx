import React, { useState, useRef, useEffect, useCallback } from 'react'
import PlusIcon from '../icons/PlusIcon'
import FlashGlyphIcon from '../icons/FlashGlyphIcon'
import ArrowUpGlyphIcon from '../icons/ArrowUpGlyphIcon'
import BeaconBgIcon from '../icons/BeaconBgIcon'

// ── Aurora gradient backgrounds ──────────────────────────────────────────────

// Add Section pill: dark base, subtle aurora
const AURORA_PILL = [
  'radial-gradient(ellipse at -4% 68%, rgba(61,48,65,0.22) 0%, transparent 60%)',
  'radial-gradient(ellipse at 67% 97%, rgba(92,71,99,0.20) 0%, transparent 55%)',
  'radial-gradient(ellipse at 97% 34%, rgba(74,143,159,0.21) 0%, transparent 60%)',
  'radial-gradient(ellipse at 34% 16%, rgba(125,113,148,0.22) 0%, transparent 50%)',
  'linear-gradient(90deg, #0E0E0E 0%, #0E0E0E 100%)',
].join(', ')

// ── Shared styles ────────────────────────────────────────────────────────────

const PROMPT_SHADOW = '0px 6px 14px rgba(176,103,222,0.22)'

const BLOB_SPRING = '0.8s cubic-bezier(0.22, 1, 0.36, 1)'
const BLOB_RETRACT = '0.45s cubic-bezier(0.4, 0, 1, 1)'

// ── SVG Gooey filter (always on, no toggling = no snap) ──────────────────────

function GooeyFilter({ id }: { id: string }) {
  return (
    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
      <defs>
        <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 8 -4"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

interface AddSectionDividerProps {
  onClick?: (e: React.MouseEvent) => void
  onPromptSubmit?: (prompt: string) => void
  aiStatesPath?: string
}

let instanceCounter = 0

function AddSectionDivider({ onClick, onPromptSubmit, aiStatesPath = '/assets/ai-states' }: AddSectionDividerProps) {
  const [iconHovered, setIconHovered] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [blobReady, setBlobReady] = useState(false)
  const [promptValue, setPromptValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const filterId = useRef(`goo-section-${++instanceCounter}`).current

  const visible = hovered || expanded

  // Delay blob until pill is fully opaque
  useEffect(() => {
    if (visible && !expanded) {
      const t = setTimeout(() => setBlobReady(true), 150)
      return () => clearTimeout(t)
    }
    setBlobReady(false)
  }, [visible, expanded])

  useEffect(() => {
    if (expanded) {
      const t = setTimeout(() => inputRef.current?.focus(), 80)
      return () => clearTimeout(t)
    }
  }, [expanded])

  useEffect(() => {
    if (!expanded) return
    function handleMouseDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setExpanded(false)
        setPromptValue('')
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setExpanded(false)
        setPromptValue('')
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [expanded])

  const handleExpand = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setExpanded(true)
  }, [])

  const handleSubmit = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (onPromptSubmit) {
      onPromptSubmit(promptValue)
    } else {
      onClick?.(e)
    }
    setExpanded(false)
    setPromptValue('')
  }, [onClick, onPromptSubmit, promptValue])

  const handleInputKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && promptValue.trim()) {
      e.preventDefault()
      if (onPromptSubmit) {
        onPromptSubmit(promptValue)
      }
      setExpanded(false)
      setPromptValue('')
    }
  }, [onPromptSubmit, promptValue])

  const blobOut = blobReady && !expanded

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: 0,
        zIndex: 10,
      }}
    >
      <GooeyFilter id={filterId} />

      {/* Hit area */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: -24,
        bottom: -24,
      }} />

      {/* Centering anchor */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <div
          ref={wrapperRef}
          style={{
            opacity: visible ? 1 : 0,
            pointerEvents: visible ? 'auto' : 'none',
            transition: 'opacity 0.15s ease',
          }}
        >
          {/* ── Collapsed state ── */}
          {!expanded && (
            <div
              className={visible ? 'section-divider-enter' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                filter: `url(#${filterId})`,
              }}
            >
              {/* Add Section pill */}
              <button
                onClick={(e) => { e.stopPropagation(); onClick?.(e) }}
                style={{
                  position: 'relative',
                  width: 132,
                  height: 40,
                  borderRadius: 88,
                  background: '#0E0E0E',
                  backgroundImage: AURORA_PILL,
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{
                  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: '22px',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  mixBlendMode: 'difference',
                  whiteSpace: 'nowrap',
                }}>
                  Add Section
                </span>
              </button>

              {/* AI circle — emerges from pill */}
              <div
                onClick={handleExpand}
                onMouseEnter={() => setIconHovered(true)}
                onMouseLeave={() => setIconHovered(false)}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 30,
                  background: '#0E0E0E',
                  flexShrink: 0,
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  marginLeft: blobOut ? 11 : -30,
                  transform: blobOut ? 'scale(1)' : 'scale(0.857)',
                  transition: blobOut
                    ? `margin-left ${BLOB_SPRING}, transform ${BLOB_SPRING}`
                    : `margin-left ${BLOB_RETRACT}, transform ${BLOB_RETRACT}`,
                }}
              >
                {/* Beacon background — dissolves in during travel */}
                <div style={{
                  position: 'absolute',
                  width: 54,
                  height: 54,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  opacity: blobOut ? 1 : 0,
                  transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}>
                  <BeaconBgIcon />
                </div>
                {/* Animated beacon icon — visible during travel */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mixBlendMode: 'difference',
                  opacity: blobOut ? 1 : 0,
                  transition: 'opacity 0.15s ease',
                }}>
                  <div style={{
                    width: 27,
                    height: 27,
                    borderRadius: 34,
                    background: 'transparent',
                    overflow: 'hidden',
                    transform: 'rotate(45deg)',
                    position: 'relative',
                    marginTop: -1,
                  }}>
                    <video
                      key={iconHovered ? 'error' : 'awake'}
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={`${aiStatesPath}/${iconHovered ? 'big_error' : 'big_awake'}.mp4`}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: '#fff',
                      mixBlendMode: 'difference',
                      pointerEvents: 'none',
                    }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Expanded prompt ── */}
          {expanded && (
            <div style={{
              width: 330,
              height: 45,
              borderRadius: 33,
              background: 'linear-gradient(0deg, rgba(250,250,250,0.88) 0%, rgba(250,250,250,0.88) 100%), radial-gradient(54.96% 47.34% at 97.34% 33.88%, rgba(74,143,159,0.85) 0%, rgba(74,143,159,0) 100%)',
              border: '1px solid #7D7194',
              boxShadow: PROMPT_SHADOW,
              overflow: 'hidden',
              animation: 'sectionDividerEnter 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 6px 6px 11px',
                height: '100%',
              }}>
                <button
                  onClick={(e) => { e.stopPropagation(); onClick?.(e) }}
                  style={{
                    width: 33, height: 33, borderRadius: '50%', border: 'none',
                    background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', flexShrink: 0, padding: 0, color: '#666',
                  }}
                >
                  <div style={{ width: 12, height: 12 }}><PlusIcon /></div>
                </button>

                <input
                  ref={inputRef}
                  type="text"
                  value={promptValue}
                  onChange={(e) => setPromptValue(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Make it real"
                  style={{
                    flex: 1, border: 'none', background: 'transparent', outline: 'none',
                    fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontWeight: 400, fontSize: 13, lineHeight: '18px', color: '#0E0E0E', minWidth: 0,
                  }}
                />

                <button
                  onClick={(e) => { e.stopPropagation(); onClick?.(e) }}
                  style={{
                    width: 33, height: 33, borderRadius: '50%', border: 'none',
                    background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', flexShrink: 0, padding: 0, color: '#666',
                  }}
                >
                  <div style={{ width: 9, height: 16 }}><FlashGlyphIcon /></div>
                </button>

                <button
                  onClick={handleSubmit}
                  style={{
                    width: 33, height: 33, borderRadius: '50%', border: 'none',
                    background: 'transparent', padding: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', flexShrink: 0, position: 'relative', overflow: 'hidden',
                  }}
                >
                  <div style={{
                    position: 'absolute', width: 39, height: 39,
                    left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none',
                  }}>
                    <BeaconBgIcon />
                  </div>
                  <div style={{ position: 'relative', zIndex: 1, mixBlendMode: 'difference', color: '#fff', width: 10, height: 13 }}>
                    <ArrowUpGlyphIcon />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddSectionDivider
