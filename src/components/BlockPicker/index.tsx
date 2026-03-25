import React, { useState, useRef, useEffect } from 'react'
import AnimatedSearchIcon from '../AnimatedSearchIcon'
import { PlusIcon, EditIcon } from '../../icons'

// ── Rosetta spacing ──────────────────────────────────────────────────────────

const SP2 = 11

// ── Rosetta text styles (from Figma) ─────────────────────────────────────────
//
// Desktop/Body (medium): Clarkson Medium, 14px, 500, lineHeight 22px
// Desktop/Body (Book):   Clarkson BookProduct, 14px, 400, lineHeight 22px

const TEXT_BODY_MEDIUM: React.CSSProperties = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '22px',
}

const TEXT_BODY_BOOK: React.CSSProperties = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '22px',
}

const TEXT_CAPTION: React.CSSProperties = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '16px',
}

// Desktop/Action: Clarkson Medium, 12px, 500, lineHeight 22px, letterSpacing 0.5px
const TEXT_ACTION: React.CSSProperties = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: '22px',
  letterSpacing: 0.5,
}

// ── Block catalog (icon paths from Figma MCP asset exports) ──────────────────

interface BlockDef {
  name: string
  icon: string // icon filename (without extension) in the block-icons directory
}

interface Category {
  label: string
  blocks: BlockDef[]
}

// Default base path for block catalog icon assets
const DEFAULT_BLOCK_ICON_BASE_PATH = '/assets/block-icons'

// Categories & ordering from the SQSP spec (sqsp-add-block-ux-spec.md)
const BLOCK_CATALOG: Category[] = [
  {
    label: 'Essentials',
    blocks: [
      { name: 'Text',      icon: 'text' },
      { name: 'Image',     icon: 'image' },
      { name: 'Button',    icon: 'button' },
      { name: 'Gallery',   icon: 'gallery' },
      { name: 'Video',     icon: 'video' },
      { name: 'Form',      icon: 'form' },
      { name: 'Accordion', icon: 'accordion' },
      { name: 'Shape',     icon: 'shape' },
      { name: 'Scrolling', icon: 'scrolling' },
      { name: 'Line',      icon: 'line' },
    ],
  },
  {
    label: 'Sell',
    blocks: [
      { name: 'Product',      icon: 'product' },
      { name: 'Pricing Plan', icon: 'pricing' },
      { name: 'Donation',     icon: 'donation' },
      { name: 'Scheduling',   icon: 'scheduling' },
    ],
  },
  {
    label: 'Display',
    blocks: [
      { name: 'Summary',    icon: 'summary' },
      { name: 'Newsletter', icon: 'newsletter' },
      { name: 'Quote',      icon: 'quote' },
      { name: 'Audio',      icon: 'audio' },
      { name: 'Calendar',   icon: 'calendar' },
      { name: 'Map',        icon: 'map' },
      { name: 'Menu',       icon: 'menu' },
      { name: 'Chart',      icon: 'chart' },
    ],
  },
  {
    label: 'Code',
    blocks: [
      { name: 'Code',     icon: 'code' },
      { name: 'Markdown', icon: 'markdown' },
      { name: 'Embed',    icon: 'embed' },
    ],
  },
  {
    label: 'Links',
    blocks: [
      { name: 'Social Links',  icon: 'social-links' },
      { name: 'Search Field',  icon: 'search' },
      { name: 'Page Link',     icon: 'link' },
      { name: 'Tag Cloud',     icon: 'tag-cloud' },
      { name: 'RSS',           icon: 'rss' },
      { name: 'Archive',       icon: 'archive' },
      { name: 'Instagram',     icon: 'instagram' },
      { name: 'Tock',          icon: 'tock' },
      { name: 'SoundCloud',    icon: 'soundcloud' },
      { name: 'Flickr',        icon: 'flickr' },
      { name: 'OpenTable',     icon: 'opentable' },
      { name: 'Zola',          icon: 'zola' },
      { name: 'Bandsintown',   icon: 'bandsintown' },
    ],
  },
]


// ── BlockPicker ──────────────────────────────────────────────────────────────

interface BlockPickerProps {
  onSelect: (blockName: string) => void
  onClose: () => void
  blockIconBasePath?: string
}

export default function BlockPicker({ onSelect, onClose, blockIconBasePath = DEFAULT_BLOCK_ICON_BASE_PATH }: BlockPickerProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 50)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  // Filter by search query
  const filteredCatalog = query
    ? BLOCK_CATALOG.map(cat => ({
        ...cat,
        blocks: cat.blocks.filter(b => b.name.toLowerCase().includes(query.toLowerCase())),
      })).filter(cat => cat.blocks.length > 0)
    : BLOCK_CATALOG

  return (
    <div
      ref={panelRef}
      className="block-picker-enter"
      style={{
        width: 320,
        background: 'var(--rosetta-bg-base)',
        borderRadius: SP2,
        boxShadow: 'var(--shadows-200)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={e => e.stopPropagation()}
    >
      {/* Search bar — 50px total height to match code editor's search bar */}
      <div style={{
        height: 50,
        display: 'flex',
        alignItems: 'center',
        gap: SP2,
        padding: '0 12px',
        borderBottom: '1px solid var(--rosetta-border-default)',
        flexShrink: 0,
      }}>
        <div style={{ width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <AnimatedSearchIcon expanded size={16} color="var(--rosetta-fg-muted)" />
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search blocks"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => { if (e.key === 'Escape') onClose() }}
          style={{
            ...TEXT_BODY_BOOK,
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            padding: 0,
            color: query ? 'var(--rosetta-fg-default)' : '#6E6E6E',
            minWidth: 0,
          }}
        />
      </div>

      {/* Block catalog — scrollable, internal spacing per spec */}
      <div style={{
        overflow: 'auto',
        maxHeight: 'min(480px, calc(100vh - 200px))',
        padding: `${SP2}px`,
      }}>
        {filteredCatalog.length === 0 && (
          <p style={{
            ...TEXT_BODY_BOOK,
            color: 'var(--rosetta-fg-muted)',
            padding: `${SP2}px 0`,
            textAlign: 'center',
          }}>
            No blocks matching "{query}"
          </p>
        )}

        {filteredCatalog.map((category, ci) => (
          <div key={category.label} style={{ marginTop: ci > 0 ? 16 : 0 }}>
            {/* Category header — Desktop/Body (medium) */}
            <p style={{
              ...TEXT_BODY_MEDIUM,
              color: 'var(--rosetta-fg-default)',
              marginBottom: 6,
            }}>
              {category.label}
            </p>

            {/* Block items — flex-wrap grid, 2 per row, 6px gap (spec) */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
            }}>
              {category.blocks.map(block => (
                <BlockItem key={block.name} block={block} onSelect={onSelect} blockIconBasePath={blockIconBasePath} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Block item row ───────────────────────────────────────────────────────────

function BlockItem({ block, onSelect, blockIconBasePath }: { block: BlockDef; onSelect: (name: string) => void; blockIconBasePath: string }) {
  return (
    <button
      onClick={() => onSelect(block.name)}
      style={{
        // Spec: 146px wide, 44px tall, #F9F9F9 bg, 6px radius
        width: 'calc(50% - 3px)',
        height: 44,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 11px',
        gap: SP2,
        background: 'var(--rosetta-bg-inset)',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        overflow: 'hidden',
        textAlign: 'left',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'var(--rosetta-bg-default)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--rosetta-bg-inset)')}
    >
      {/* Icon — 16×16 container (proportionally scaled from 22×22) */}
      <div style={{
        width: 16, height: 16, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'visible',
      }}>
        <img
          src={`${blockIconBasePath}/${block.icon}.svg`}
          alt=""
          style={{
            maxWidth: 16, maxHeight: 16,
            display: 'block',
          }}
        />
      </div>
      {/* Label — Desktop/Caption */}
      <span style={{
        ...TEXT_CAPTION,
        color: 'var(--rosetta-fg-default)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {block.name}
      </span>
    </button>
  )
}

// ── AddBlockToolbar — exported for SectionWrapper ────────────────────────────

interface AddBlockToolbarProps {
  onAddBlock: () => void
}

export function AddBlockToolbar({ onAddBlock }: AddBlockToolbarProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 6,
    }}>
      <button
        onClick={onAddBlock}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: SP2,
          padding: '11px 22px 11px 16px',
          background: 'var(--rosetta-bg-base)',
          border: 'none',
          borderRadius: 8,
          boxShadow: 'var(--shadows-100)',
          cursor: 'pointer',
        }}
      >
        {/* Inset hover shade — full lockup */}
        {hovered && (
          <div style={{
            position: 'absolute',
            inset: 4,
            background: 'var(--rosetta-bg-default)',
            borderRadius: 6,
          }} />
        )}
        <div style={{
          width: 22, height: 22, flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <PlusIcon style={{ width: 16, height: 16, display: 'block' }} />
        </div>
        <span style={{
          ...TEXT_ACTION,
          textTransform: 'uppercase',
          color: 'var(--rosetta-fg-default)',
          whiteSpace: 'nowrap',
          position: 'relative',
          top: 1,
          zIndex: 1,
        }}>
          Add Block
        </span>
      </button>
    </div>
  )
}

// ── Edit Site Header button — same action btn styling ────────────────────────

export function EditHeaderButton({ onClick }: { onClick: (e: React.MouseEvent) => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SP2,
        padding: '11px 22px 11px 16px',
        background: 'var(--rosetta-bg-base)',
        border: 'none',
        borderRadius: 8,
        boxShadow: 'var(--shadows-100)',
        cursor: 'pointer',
      }}
    >
      {/* Inset hover shade — full lockup */}
      {hovered && (
        <div style={{
          position: 'absolute',
          inset: 4,
          background: 'var(--rosetta-bg-default)',
          borderRadius: 6,
        }} />
      )}
      <div style={{
        width: 22, height: 22, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <EditIcon style={{ width: 16, height: 16, display: 'block' }} />
      </div>
      <span style={{
        ...TEXT_ACTION,
        textTransform: 'uppercase',
        color: 'var(--rosetta-fg-default)',
        whiteSpace: 'nowrap',
        position: 'relative',
        top: 1,
        zIndex: 1,
      }}>
        Edit Site Header
      </span>
    </button>
  )
}
