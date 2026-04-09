import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react'

/**
 * ProUI scrub/step hook — port of ImAdamTM/site-themes useStepper.js.
 *
 * Drives three interactions:
 *  - Click + drag on the scrub area → emits step deltas based on mouse travel.
 *    `isHorizontalScrub` selects the axis (horizontal = drag left/right,
 *    vertical = drag up/down).
 *  - Mousedown on `upRef` → step up by +1 (held → auto-repeat after 500ms).
 *  - Mousedown on `downRef` → step down by -1 (same auto-repeat).
 *
 * The caller passes `onStep(delta, isFirst, isDrag)` and receives refs to
 * attach to the interactive elements. The hook tracks `isActive`,
 * `isDragging`, `isMax`, `isMin`, `activeDirection` for visual feedback.
 */

export type StepDirection = 'up' | 'down' | 'left' | 'right' | null

export interface UseStepperProps {
  onStep: (delta: number, isFirst: boolean, isDrag: boolean) => void
  onBlur?: () => void
  value: number
  min?: number
  max?: number
  isHorizontalScrub?: boolean
}

export interface UseStepperResult {
  // MutableRefObject allows `null` in `.current` during the mount phase but
  // satisfies the JSX `ref={...}` attribute typing in React 18.
  scrubRef: MutableRefObject<HTMLButtonElement | null>
  upRef: MutableRefObject<HTMLButtonElement | null>
  downRef: MutableRefObject<HTMLButtonElement | null>
  isActive: boolean
  isDragging: boolean
  isMax: boolean
  isMin: boolean
  activeDirection: StepDirection
}

const VIRTUAL_SLIDER_THRESHOLD = 2
const NOOP = () => {}

export function useStepper({
  onStep,
  onBlur = NOOP,
  value,
  min,
  max,
  isHorizontalScrub = false,
}: UseStepperProps): UseStepperResult {
  const [isActive, setIsActive] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isMax, setIsMax] = useState(false)
  const [isMin, setIsMin] = useState(false)
  const [activeDirection, setActiveDirection] = useState<StepDirection>(null)

  const scrubRef = useRef<HTMLButtonElement>(null)
  const upRef = useRef<HTMLButtonElement>(null)
  const downRef = useRef<HTMLButtonElement>(null)

  const onStepRef = useRef(onStep)
  const onBlurRef = useRef(onBlur)
  useEffect(() => {
    onStepRef.current = onStep
    onBlurRef.current = onBlur
  }, [onStep, onBlur])

  // Track max/min state + document cursor while dragging.
  useEffect(() => {
    if (typeof value !== 'number') return

    const atMax = typeof max === 'number' && value >= max
    const atMin = typeof min === 'number' && value <= min
    setIsMax(atMax)
    setIsMin(atMin)

    if (!isDragging) {
      document.documentElement.dataset.handleResize = ''
      return
    }

    const cursorMax = isHorizontalScrub ? 'wResize' : 'sResize'
    const cursorMin = isHorizontalScrub ? 'eResize' : 'nResize'
    const cursorAll = isHorizontalScrub ? 'ewResize' : 'nsResize'

    if (atMax) document.documentElement.dataset.handleResize = cursorMax
    else if (atMin) document.documentElement.dataset.handleResize = cursorMin
    else document.documentElement.dataset.handleResize = cursorAll
  }, [isDragging, value, min, max, isHorizontalScrub])

  // Mount event listeners on the refs. Reattaches when scrub direction flips.
  useEffect(() => {
    let isStepping = false
    let autoStepTimeout: ReturnType<typeof setTimeout> | null = null
    let stepInterval: ReturnType<typeof setInterval> | null = null

    const upEl = upRef.current
    const downEl = downRef.current
    const scrubEl = scrubRef.current

    const slidingData = {
      lastSteps: 0,
      trackedSteps: 0,
      hasDragged: false,
      isFirst: false,
      startCoord: 0,
    }

    const onStepEnd = () => {
      document.removeEventListener('mouseup', onStepEnd)
      document.removeEventListener('mousemove', handleMouseMove)
      slidingData.hasDragged = false
      isStepping = false
      if (autoStepTimeout) clearTimeout(autoStepTimeout)
      if (stepInterval) clearInterval(stepInterval)
      onBlurRef.current()
      scrubEl?.blur()
      upEl?.blur()
      downEl?.blur()
      setIsActive(false)
      setIsDragging(false)
      setActiveDirection(null)
    }

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const nextCoord = isHorizontalScrub ? moveEvent.clientX : moveEvent.clientY
      let delta = nextCoord - slidingData.startCoord
      if (isHorizontalScrub) delta *= -1

      if (!slidingData.hasDragged && Math.abs(delta) < VIRTUAL_SLIDER_THRESHOLD) {
        return
      }

      if (!slidingData.hasDragged) {
        setIsDragging(true)
        delta = delta ? 1 : -1
        slidingData.hasDragged = true
        if (autoStepTimeout) clearTimeout(autoStepTimeout)
        if (stepInterval) clearInterval(stepInterval)
      }

      const nextSteps = delta - slidingData.lastSteps
      slidingData.lastSteps = delta
      if (!nextSteps) return

      const direction: StepDirection = isHorizontalScrub
        ? nextSteps < 0
          ? 'left'
          : 'right'
        : nextSteps < 0
          ? 'up'
          : 'down'

      setActiveDirection(direction)
      slidingData.trackedSteps += nextSteps

      onStepRef.current(-slidingData.trackedSteps, slidingData.isFirst, true)
      slidingData.isFirst = false
    }

    const onStepStart = (
      e: MouseEvent,
      delta: number | null,
      shouldStepImmediately: boolean,
    ) => {
      if (isStepping) return
      isStepping = true
      slidingData.trackedSteps = 0
      slidingData.lastSteps = 0
      slidingData.startCoord = isHorizontalScrub ? e.clientX : e.clientY
      slidingData.isFirst = true
      setIsActive(true)

      if (shouldStepImmediately && typeof delta === 'number') {
        onStepRef.current(delta, true, false)
      }

      autoStepTimeout = setTimeout(() => {
        stepInterval = setInterval(() => {
          if (typeof delta === 'number') {
            onStepRef.current(delta, true, false)
          }
        }, 50)
      }, 500)

      document.addEventListener('mouseup', onStepEnd)
      document.addEventListener('mousemove', handleMouseMove)
    }

    const makeHandler = (
      direction: StepDirection,
      delta: number | null,
      shouldStepImmediately: boolean,
    ) => (e: MouseEvent) => {
      if (e.button !== 0) return
      setActiveDirection(direction)
      onStepStart(e, delta, shouldStepImmediately)
    }

    const handleStepUp = makeHandler('up', 1, true)
    const handleStepDown = makeHandler('down', -1, true)
    const handleScrub = makeHandler(null, null, false)

    upEl?.addEventListener('mousedown', handleStepUp)
    downEl?.addEventListener('mousedown', handleStepDown)
    scrubEl?.addEventListener('mousedown', handleScrub)

    return () => {
      if (stepInterval) clearInterval(stepInterval)
      if (autoStepTimeout) clearTimeout(autoStepTimeout)
      document.removeEventListener('mouseup', onStepEnd)
      document.removeEventListener('mousemove', handleMouseMove)
      upEl?.removeEventListener('mousedown', handleStepUp)
      downEl?.removeEventListener('mousedown', handleStepDown)
      scrubEl?.removeEventListener('mousedown', handleScrub)
    }
  }, [isHorizontalScrub])

  return useMemo(
    () => ({
      scrubRef,
      upRef,
      downRef,
      isActive,
      isDragging,
      isMax,
      isMin,
      activeDirection,
    }),
    [isActive, isDragging, isMax, isMin, activeDirection],
  )
}

export default useStepper
