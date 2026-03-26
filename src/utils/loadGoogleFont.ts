const loadedFonts = new Set<string>()

export default function loadGoogleFont(query: string): void {
  if (!query || loadedFonts.has(query)) return
  loadedFonts.add(query)

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${query}&display=swap`
  document.head.appendChild(link)
}

export function loadFontsForTheme(fonts: { googleFontsQuery?: string }[]): void {
  fonts.forEach(font => {
    if (font.googleFontsQuery) {
      loadGoogleFont(font.googleFontsQuery)
    }
  })
}
