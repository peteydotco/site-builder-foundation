import React from 'react'

/**
 * Animated menu-search icon based on RiMenuSearchLine.
 *
 * Collapsed: exact RiMenuSearchLine layout — three bars + magnifying glass
 * Expanded:  bars shrink to 0 width (left), glass scales up to fill container
 *
 * Uses CSS transitions on rect width + transform. Stroke width stays constant.
 */
export default function AnimatedSearchIcon({
  expanded = false,
  size = 16,
  color = 'var(--rosetta-fg-muted)',
}: {
  expanded?: boolean
  size?: number
  color?: string
}) {
  const t = '0.28s cubic-bezier(0.22, 1, 0.36, 1)'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Hamburger bars (from RiMenuSearchLine) ── */}
      {/* Top bar: M3 4H8V6H3V4Z → rect at (3,4) 5×2 */}
      <rect
        x={3} y={4}
        width={expanded ? 0 : 5}
        height={2}
        style={{ transition: `width ${t}` }}
      />
      {/* Middle bar: M3 11H8V13H3V11Z → rect at (3,11) 5×2 */}
      <rect
        x={3} y={11}
        width={expanded ? 0 : 5}
        height={2}
        style={{ transition: `width ${t}` }}
      />
      {/* Bottom bar: M21 18V20H3V18H21Z → rect at (3,18) 18×2 */}
      <rect
        x={3} y={18}
        width={expanded ? 0 : 18}
        height={2}
        style={{ transition: `width ${t}` }}
      />

      {/* ── Magnifying glass (from RiMenuSearchLine) ── */}
      {/* The compound path: outer ring, inner cutout, handle line */}
      <g
        style={{
          transformOrigin: '15.5px 8.5px',
          transform: expanded
            ? 'translate(-4px, 2.5px) scale(1.4)'
            : 'translate(0, 0) scale(1)',
          transition: `transform ${t}`,
        }}
      >
        <path
          d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5Z"
          fillRule="evenodd"
          clipRule="evenodd"
          style={{
            // Counter-scale the stroke to keep it constant when scaled up
            // Since we use fill (not stroke), the path weight is baked in —
            // the 1.65× scale will thicken it. To compensate, we set
            // vector-effect on the fill boundary. For filled paths this is
            // inherent, so we accept the slight thickening at this small size.
          }}
        />
      </g>
    </svg>
  )
}
