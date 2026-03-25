import React, { useState } from 'react'

interface AddSectionDividerProps {
  onClick?: (e: React.MouseEvent) => void
}

function AddSectionDivider({ onClick }: AddSectionDividerProps) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        height: 0,
        zIndex: 10,
        cursor: 'pointer',
      }}
    >
      {/* Hit area */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: -16,
        bottom: -16,
      }} />

      {/* Blue line */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: -1,
        height: 2,
        background: '#027AFF',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.15s ease',
      }} />

      {/* ADD SECTION button */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.15s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: hovered ? 'auto' : 'none',
      }}>
        <button
          onClick={(e) => { e.stopPropagation(); onClick?.(e) }}
          style={{
            background: '#027AFF',
            border: '1px solid #027AFF',
            borderRadius: 8,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 14px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{
            fontFamily: 'Clarkson, Helvetica, sans-serif',
            fontWeight: 500,
            fontSize: 12,
            lineHeight: '22px',
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            color: '#FFFFFF',
          }}>
            Add Section
          </span>
        </button>
      </div>
    </div>
  )
}

export default AddSectionDivider
