import { memo, useMemo } from 'react'
import { useSiteThemesContext } from './index'
import TransitionSwap from './utils/TransitionSwap'
import styles from './NavBar.module.css'

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function ChevronIcon() {
  return (
    <svg viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function capitalize(str: string): string {
  return str
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/* ── Component ───────────────────────────────────────────────────────────── */

function NavBar() {
  const { route, depth, onBack } = useSiteThemesContext()

  const output = useMemo(() => {
    if (depth === 0) return null

    const label = capitalize(route[depth] ?? 'Back')

    return (
      <button key="back" className={styles.backButton} onClick={onBack}>
        <ChevronIcon />
        {label}
      </button>
    )
  }, [route, depth, onBack])

  return (
    <div className={styles.container}>
      <TransitionSwap directionIn="left" directionOut="left">
        {output}
      </TransitionSwap>
    </div>
  )
}

export default memo(NavBar)
