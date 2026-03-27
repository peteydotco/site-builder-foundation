import React, { useState, useRef, useCallback, useEffect } from 'react'
import BlockPicker, { AddBlockToolbar, EditHeaderButton } from '../BlockPicker'

// ── Constants ────────────────────────────────────────────────────────────────

const SECTION_OUTLINE_COLOR = '#0072f0'
const SECTION_OUTLINE_WIDTH = 3
const TOOLBAR_INSET = 11 // distance from section border to toolbar

// ── SectionWrapper ───────────────────────────────────────────────────────────

interface SectionWrapperProps {
  /** Unique section id */
  sectionId: string
  /** Label shown under the ADD BLOCK button (e.g. "TEXT", "HEADER") */
  sectionLabel: string
  /** Section content */
  children: React.ReactNode
  /** Called when a block is picked from the catalog */
  onBlockPicked: (sectionId: string, blockName: string) => void
  /** Whether section interactions are disabled (e.g. during focused canvas mode) */
  disabled?: boolean
  /** Additional inline styles for the outer wrapper */
  style?: React.CSSProperties
}

export default function SectionWrapper({
  sectionId,
  sectionLabel,
  children,
  onBlockPicked,
  disabled = false,
  style,
}: SectionWrapperProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [isReturning, setIsReturning] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback(() => {
    if (!disabled) {
      setIsHovered(true)
      setIsReturning(false)
    }
  }, [disabled])

  const handleMouseLeave = useCallback(() => {
    if (!isPickerOpen) {
      setIsHovered(false)
      setIsReturning(false)
    }
  }, [isPickerOpen])

  const handleOpenPicker = useCallback(() => {
    setIsPickerOpen(true)
    setIsReturning(false)
  }, [])

  const handleClosePicker = useCallback(() => {
    setIsPickerOpen(false)
    setIsReturning(true)
    // Check if mouse is still over the section
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect()
      const mousePos = lastMouseRef.current
      if (mousePos && (mousePos.x < rect.left || mousePos.x > rect.right || mousePos.y < rect.top || mousePos.y > rect.bottom)) {
        setIsHovered(false)
      }
    }
  }, [])

  const handleBlockSelect = useCallback((blockName: string) => {
    setIsPickerOpen(false)
    setIsHovered(false)
    onBlockPicked(sectionId, blockName)
  }, [sectionId, onBlockPicked])

  // Track mouse position for hover restoration after picker close
  const lastMouseRef = useRef<{ x: number; y: number } | null>(null)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    lastMouseRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  const showOutline = (isHovered || isPickerOpen) && !disabled

  // Fade Add Block button in the last 10% of section height
  const toolbarFadeRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!showOutline) return
    const section = wrapperRef.current
    const toolbar = toolbarFadeRef.current
    if (!section || !toolbar) return

    // Find the scroll parent
    let scrollParent: HTMLElement | null = section.parentElement
    while (scrollParent) {
      const { overflow, overflowY } = getComputedStyle(scrollParent)
      if (overflow === 'auto' || overflow === 'scroll' || overflowY === 'auto' || overflowY === 'scroll') break
      scrollParent = scrollParent.parentElement
    }
    const scroller = scrollParent || window

    const update = () => {
      const rect = section.getBoundingClientRect()
      const sectionH = rect.height
      const fadeZone = sectionH * 0.1
      const distFromBottom = rect.bottom - 16 - 40 // 16px sticky top + ~40px button height
      if (distFromBottom < fadeZone) {
        toolbar.style.opacity = `${Math.max(0, distFromBottom / fadeZone)}`
      } else {
        toolbar.style.opacity = '1'
      }
    }
    scroller.addEventListener('scroll', update, { passive: true })
    update()
    return () => scroller.removeEventListener('scroll', update)
  }, [showOutline])

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {/* Section content */}
      {children}

      {/* Blue section outline — pointer-events: none */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderStyle: 'solid',
          borderColor: showOutline ? SECTION_OUTLINE_COLOR : 'transparent',
          borderWidth: showOutline ? SECTION_OUTLINE_WIDTH : 0,
          zIndex: 101,
          pointerEvents: 'none',
          transition: 'border-color 0.15s ease, border-width 0.15s ease',
        }}
      />

      {/* Floating toolbar — top-left, inside the outline */}
      {showOutline && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: SECTION_OUTLINE_WIDTH + TOOLBAR_INSET,
            bottom: 0,
            zIndex: 102,
            pointerEvents: 'none',
            paddingTop: SECTION_OUTLINE_WIDTH + TOOLBAR_INSET,
          }}
        >
         <div
          ref={toolbarFadeRef}
          style={{
            position: 'sticky',
            top: 16,
            pointerEvents: 'auto',
            transition: 'opacity 0.15s ease',
          }}
        >
          {/* Add Block button — crossfades with picker */}
          <div
            className={isReturning ? 'add-block-return' : (isPickerOpen ? '' : 'add-block-enter')}
            style={{
              opacity: isPickerOpen ? 0 : 1,
              pointerEvents: isPickerOpen ? 'none' : 'auto',
              transition: 'opacity 200ms ease',
              position: isPickerOpen ? 'absolute' : 'relative',
            }}
          >
            <AddBlockToolbar
              onAddBlock={handleOpenPicker}
            />
          </div>

          {/* Block picker — appears at same position */}
          {isPickerOpen && (
            <BlockPicker
              onSelect={handleBlockSelect}
              onClose={handleClosePicker}
            />
          )}
        </div>
        </div>
      )}
    </div>
  )
}

// ── Header Section — scrim + centered "Edit Site Header" button ──────────────

interface HeaderSectionWrapperProps {
  children: React.ReactNode
  disabled?: boolean
  style?: React.CSSProperties
}

export function HeaderSectionWrapper({
  children,
  disabled = false,
  style,
}: HeaderSectionWrapperProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => {
    if (!disabled) setIsHovered(true)
  }, [disabled])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const showOverlay = isHovered && !disabled

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {children}

      {/* Scrim overlay — dissolves in */}
      {showOverlay && (
        <div
          className="header-scrim-enter"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 101,
          }}
        >
          {/* Edit Site Header button — slides up from below */}
          <div className="header-btn-enter">
            <EditHeaderButton onClick={(e: React.MouseEvent) => {
              const x = e.clientX, y = e.clientY
              for (let i = 0; i < 14; i++) {
                const el = document.createElement('div')
                el.style.cssText = `position:fixed;width:6px;height:6px;pointer-events:none;z-index:99999;background:#0E0E0E;left:${x}px;top:${y}px;`
                const a = Math.random() * Math.PI * 2, v = 60 + Math.random() * 100
                el.animate([
                  { transform: 'translate(0,0) scale(1)', opacity: 1 },
                  { transform: `translate(${Math.cos(a)*v}px,${Math.sin(a)*v}px) scale(0)`, opacity: 0 },
                ], { duration: 500 + Math.random() * 300, easing: 'cubic-bezier(0,0.5,0.5,1)', fill: 'forwards' })
                document.body.appendChild(el)
                setTimeout(() => el.remove(), 900)
              }
            }} />
          </div>
        </div>
      )}
    </div>
  )
}
