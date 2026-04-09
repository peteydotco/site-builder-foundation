import { createContext, memo, useContext, useMemo, useRef } from 'react'
import type { SiteThemesState } from '../../types/siteThemes'
import useDelayedActiveState from '../../hooks/useDelayedActiveState'
import { useSiteThemesNavigation } from './useNavigation'
import PanelStyles from './PanelStyles'
import PanelColors from './panels/PanelColors'
import PanelStub from './panels/PanelStub'
import NavBar from './NavBar'
import styles from './SiteThemes.module.css'

function capitalize(str: string): string {
  return str
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

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
    return route.map((key, i) => {
      const panelIsActive = depth === i && isOpen
      // Depth 0 is always the Styles root with all cards
      if (i === 0) {
        return <PanelStyles key={i} depth={i} isActive={panelIsActive} />
      }
      // Depth 1+ — route key determines which panel to render.
      // Only 'colors' has a real drill-in; the rest fall back to a stub.
      if (key === 'colors') {
        return <PanelColors key={i} depth={i} isActive={panelIsActive} />
      }
      return (
        <PanelStub
          key={i}
          title={capitalize(key ?? '')}
          depth={i}
          isActive={panelIsActive}
        />
      )
    })
  }, [route, depth, isOpen])

  return (
    <SiteThemesContext.Provider value={ctx}>
      <div ref={ref} className={classNameOutput}>
        {isRendered && (
          <>
            <div className={styles.header}>
              <div className={styles.bar} style={{ justifyContent: 'flex-start' }}>
                {onClose ? (
                  <button
                    onClick={onClose}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
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
                ) : <span />}
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
