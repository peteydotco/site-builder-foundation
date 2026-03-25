import React from 'react'

function GridOverlay() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 9999,
      padding: '0 33px',
      display: 'flex',
      gap: 33,
    }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{
          flex: 1,
          background: 'rgba(255, 0, 0, 0.05)',
          borderLeft: '1px solid rgba(255, 0, 0, 0.15)',
          borderRight: '1px solid rgba(255, 0, 0, 0.15)',
        }} />
      ))}
    </div>
  )
}

export default GridOverlay
