import type { SVGProps } from 'react'

/**
 * ProUI icon set — ports of the SVG assets from ImAdamTM/site-themes
 * src/svg/stack-padding-*.svg, more.svg, reset.svg, unlinked.svg, etc.
 *
 * Each icon is a single-color React component that inherits `currentColor`,
 * so the parent cell can drive color via CSS. All icons are 22×22 viewBox
 * unless otherwise noted — Adam's standard for block-editor iconography.
 */

type IconProps = SVGProps<SVGSVGElement>

const base22: IconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 22 22',
  xmlns: 'http://www.w3.org/2000/svg',
}

// ── Padding icons ─────────────────────────────────────────────────────────

export function PaddingVerticalIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path fill="currentColor" d="M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" />
      <rect fill="currentColor" x="2" y="18" width="18" height="2" />
      <rect fill="currentColor" x="2" y="2" width="18" height="2" />
    </svg>
  )
}

export function PaddingHorizontalIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <rect fill="currentColor" x="2" y="3" width="2" height="16" />
      <rect fill="currentColor" x="18" y="3" width="2" height="16" />
      <path fill="currentColor" d="M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" />
    </svg>
  )
}

export function PaddingTopIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path fill="currentColor" d="M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" />
      <rect fill="currentColor" x="2" y="2" width="18" height="2" />
    </svg>
  )
}

export function PaddingBottomIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path fill="currentColor" d="M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" />
      <rect fill="currentColor" x="2" y="18" width="18" height="2" />
    </svg>
  )
}

export function PaddingLeftIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path fill="currentColor" d="M16,6v10H6V6h10ZM14,14v-6h-6v6h6Z" />
      <rect fill="currentColor" x="-6" y="10" width="18" height="2" transform="translate(-8 14) rotate(-90)" />
    </svg>
  )
}

export function PaddingRightIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path fill="currentColor" d="M16,6v10H6V6h10ZM14,14v-6h-6v6h6Z" />
      <rect fill="currentColor" x="10" y="10" width="18" height="2" transform="translate(8 30) rotate(-90)" />
    </svg>
  )
}

// ── Transform icons (inline designs — reasonable defaults, can replace later) ──

export function OpacityIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path
        fill="currentColor"
        d="M11 3l5 7a6 6 0 1 1-10 0l5-7Zm0 3L7.5 11A4.5 4.5 0 1 0 14.5 11L11 6Z"
      />
    </svg>
  )
}

export function RotateIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="11" y1="11" x2="11" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="11" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <rect x="5" y="5" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SkewXIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path d="M7 5h10l-2 12H5l2-12Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function SkewYIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path d="M6 4v14l10-3V7L6 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function OffsetXIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path
        d="M6 11h10m-3-3 3 3-3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function OffsetYIcon(props: IconProps) {
  return (
    <svg {...base22} {...props}>
      <path
        d="M11 6v10m-3-3 3 3 3-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Control affordances ──────────────────────────────────────────────────

export function MoreIcon(props: IconProps) {
  return (
    <svg {...base22} {...props} fill="none">
      <circle cx="5" cy="11" r="1.3" fill="currentColor" />
      <circle cx="11" cy="11" r="1.3" fill="currentColor" />
      <circle cx="17" cy="11" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function ResetIcon(props: IconProps) {
  return (
    <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L7 7" stroke="currentColor" strokeWidth={2} />
      <path d="M7 1L1 7" stroke="currentColor" strokeWidth={2} />
    </svg>
  )
}

export function LinkIcon(props: IconProps) {
  return (
    <svg {...base22} {...props} fill="none">
      <path
        d="M10 7h-3a4 4 0 0 0 0 8h3m2-8h3a4 4 0 0 1 0 8h-3m-3-4h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function UnlinkIcon(props: IconProps) {
  return (
    <svg {...base22} {...props} fill="none">
      <path
        d="M10 7h-3a4 4 0 0 0 0 8h3m2-8h3a4 4 0 0 1 0 8h-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M8 4 L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 3L5 6L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
