import type React from 'react'

export const HANDLE_POSITIONS: { key: string; style: React.CSSProperties }[] = [
  { key: 'tl', style: { top: -4, left: -4 } },
  { key: 'tc', style: { top: -5, left: 'calc(50% - 5px)' } },
  { key: 'tr', style: { top: -4, right: -4 } },
  { key: 'ml', style: { top: 'calc(50% - 5px)', left: -5 } },
  { key: 'mr', style: { top: 'calc(50% - 5px)', right: -5 } },
  { key: 'bl', style: { bottom: -4, left: -4 } },
  { key: 'bc', style: { bottom: -5, left: 'calc(50% - 5px)' } },
  { key: 'br', style: { bottom: -4, right: -4 } },
]
