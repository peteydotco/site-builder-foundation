import { useEffect, useState } from 'react'

export default function useDelayedActiveState(
  isActive: boolean,
  delayIn: number = 0,
  delayOut: number = 0,
): boolean {
  const [state, setState] = useState(isActive)

  useEffect(() => {
    const delay = isActive ? delayIn : delayOut
    if (delay <= 0) {
      setState(isActive)
      return
    }
    const timeout = setTimeout(() => setState(isActive), delay * 1000)
    return () => clearTimeout(timeout)
  }, [isActive, delayIn, delayOut])

  return state
}
