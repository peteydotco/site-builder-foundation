import { useCallback, useEffect, useMemo, useState } from 'react'

export function useSiteThemesNavigation(
  ref: React.RefObject<HTMLDivElement | null>,
  isOpen: boolean,
) {
  const [route, setRoute] = useState(['site-styles'])
  const [depth, setDepth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')) {
        const href = target.getAttribute('href')!
        if (href.startsWith('/')) {
          const items = href.replace('/config/', '').split('/')
          setRoute(lastRoute => {
            const nextRoute = [...lastRoute]
            items.forEach((item, i) => { nextRoute[i] = item })
            return nextRoute
          })
          setDepth(items.length - 1)
          e.preventDefault()
        }
      }
    }
    el.addEventListener('click', handleClick)
    return () => el.removeEventListener('click', handleClick)
  }, [ref])

  const onBack = useCallback(() => {
    setDepth(d => Math.max(0, d - 1))
  }, [])

  useEffect(() => {
    if (isOpen) {
      setRoute(['site-styles'])
      setDepth(0)
    }
  }, [isOpen])

  return useMemo(() => ({ route, depth, onBack }), [route, depth, onBack])
}
