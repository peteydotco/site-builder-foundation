import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface PortaledAnnotationBarProps {
  blockRef: React.RefObject<HTMLElement | null>
  children: React.ReactNode
}

function PortaledAnnotationBar({
  blockRef,
  children,
}: PortaledAnnotationBarProps) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)

  useEffect(() => {
    const el = blockRef.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      setPos({ top: rect.top - 12, left: rect.left })
    }
    update()

    // Re-position on scroll/resize
    window.addEventListener('scroll', update, true)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update, true)
      window.removeEventListener('resize', update)
    }
  }, [blockRef])

  if (!pos) return null

  return createPortal(
    <div style={{
      position: 'fixed',
      top: pos.top,
      left: pos.left,
      transform: 'translateY(-100%)',
      zIndex: 10000,
      pointerEvents: 'auto',
    }}>
      {children}
    </div>,
    document.body,
  )
}

export default PortaledAnnotationBar
