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
    } else {
      // Reset explicitly when the trigger goes false, otherwise cards that
      // temporarily activate on hover (Fonts/Buttons/Themes) stay stuck in
      // the activated visual state after the first interaction because the
      // timeout-based cleanup only clears the pending reset, never fires it.
      setState(false)
    }
  }, [trigger, duration])

  return state
}
