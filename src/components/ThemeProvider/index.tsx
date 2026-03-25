import React from 'react'

/**
 * Theme Provider — injects site theme tokens into the preview context.
 *
 * In the full-screen dev view, the preview pane renders the component
 * within the active section's theme. This provider applies CSS custom
 * properties so that component code can reference them:
 *
 *   background: hsl(var(--accent-hsl));
 *   font-family: var(--heading-font-family);
 *
 * The ThemeProvider wraps the preview container with a style block
 * setting these properties on its root element.
 */

interface ThemeProviderProps {
  cssString: string
  children: React.ReactNode
}

export default function ThemeProvider({ cssString, children }: ThemeProviderProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
      // Apply theme tokens as inline CSS custom properties
      ref={(el) => {
        if (el) {
          // Parse the cssString and apply each property
          cssString.split(';').forEach(rule => {
            const [prop, val] = rule.split(':').map(s => s.trim())
            if (prop && val && prop.startsWith('--')) {
              el.style.setProperty(prop, val)
            }
          })
        }
      }}
    >
      {children}
    </div>
  )
}
