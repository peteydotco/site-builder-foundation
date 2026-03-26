import { createContext, memo, useContext, useMemo, useRef } from 'react'
import type { SiteThemesState } from '../../types/siteThemes'
import useDelayedActiveState from '../../hooks/useDelayedActiveState'
import { useSiteThemesNavigation } from './useNavigation'
import PanelStyles from './PanelStyles'
import NavBar from './NavBar'
import styles from './SiteThemes.module.css'

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ')

/* ── Context ─────────────────────────────────────────────────────────────── */

interface SiteThemesContextValue extends SiteThemesState {
  route: string[]
  depth: number
  onBack: () => void
}

export const SiteThemesContext = createContext<SiteThemesContextValue>(
  {} as SiteThemesContextValue,
)

export const useSiteThemesContext = () => useContext(SiteThemesContext)

/* ── Component ───────────────────────────────────────────────────────────── */

interface SiteThemesProps {
  isOpen: boolean
  themeState: SiteThemesState
  className?: string
  onClose?: () => void
}

function SiteThemes({ isOpen, themeState, className, onClose }: SiteThemesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isRendered = useDelayedActiveState(isOpen, 0.01, 0.5)
  const { route, depth, onBack } = useSiteThemesNavigation(ref, isOpen)

  const classNameOutput = useMemo(
    () => cx(className, styles.container, isOpen && styles.open),
    [className, isOpen],
  )

  const ctx = useMemo<SiteThemesContextValue>(
    () => ({
      ...themeState,
      route,
      depth,
      onBack,
    }),
    [themeState, route, depth, onBack],
  )

  const panels = useMemo(() => {
    return route.map((_key, i) => (
      <PanelStyles key={i} depth={i} isActive={depth === i && isOpen} />
    ))
  }, [route, depth, isOpen])

  return (
    <SiteThemesContext.Provider value={ctx}>
      <div ref={ref} className={classNameOutput}>
        {isRendered && (
          <>
            <div className={styles.header}>
              <div className={styles.bar}>
                {onClose && (
                  <button
                    onClick={onClose}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0 4px',
                      fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: '22px',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      color: 'var(--rosetta-fg-muted)',
                    }}
                  >
                    Close
                  </button>
                )}
                <NavBar />
              </div>
            </div>
            <div className={styles.body}>
              <div
                className={styles.panels}
                style={{ '--depth': depth } as React.CSSProperties}
              >
                {panels}
              </div>
            </div>
          </>
        )}
      </div>
    </SiteThemesContext.Provider>
  )
}

export default memo(SiteThemes)
