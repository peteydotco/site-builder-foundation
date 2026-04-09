import { memo } from 'react'
import Panel from '../primitives/Panel'

interface PanelStubProps {
  title: string
  depth?: number
  isActive?: boolean
}

/**
 * Placeholder drill-in panel for sections that don't yet have a dedicated
 * view (Fonts, Buttons, Forms, Animations, Spacing). Renders the Panel
 * primitive with a "Coming soon" message so the back-nav chrome still works.
 */
function PanelStub({ title, depth = 0, isActive = false }: PanelStubProps) {
  return (
    <Panel title={title} depth={depth} isActive={isActive}>
      <div
        style={{
          padding: '48px 24px',
          textAlign: 'center',
          color: 'var(--rosetta-fg-muted, #888)',
          fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        Coming soon.
      </div>
    </Panel>
  )
}

export default memo(PanelStub)
