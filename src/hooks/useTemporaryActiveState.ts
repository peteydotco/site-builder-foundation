import { useEffect, useState } from 'react'

export default function useTemporaryActiveState(
  trigger: boolean,
  duration: number = 1,
): boolean {
  const [state, setState] = useState(false)

  useEffect(() => {
    if (trigger) {
      setState(true)
      const timeout = setTimeout(() => setState(false), duration * 1000)
      return () => clearTimeout(timeout)
    }
  }, [trigger, duration])

  return state
}
