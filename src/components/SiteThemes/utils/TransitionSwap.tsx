import React, {
  Children,
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import styles from './TransitionSwap.module.css'

/* ── Helpers ─────────────────────────────────────────────────────────────── */

function cn(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(' ')
}

/* ── Direction → CSS-module class lookup ─────────────────────────────────── */

const DIRECTION_IN_CLASS: Record<string, string | undefined> = {
  up: styles.directionInUp,
  down: styles.directionInDown,
  left: styles.directionInLeft,
  right: styles.directionInRight,
}

const DIRECTION_OUT_CLASS: Record<string, string | undefined> = {
  up: styles.directionOutUp,
  down: styles.directionOutDown,
  left: styles.directionOutLeft,
  right: styles.directionOutRight,
}

/* ── Context (exposed for consumers that need to know hide state) ────────── */

interface TransitionSwapContextValue {
  isHidden: boolean
}

const TransitionSwapContext = createContext<TransitionSwapContextValue>({
  isHidden: false,
})

export const useTransitionSwapContext = (): TransitionSwapContextValue => {
  return useContext(TransitionSwapContext)
}

/* ── Item (internal sub-component) ───────────────────────────────────────── */

interface ItemProps {
  animateIn?: boolean
  child: React.ReactNode
  className?: string
  delayHide?: number
  delayShow?: number
  duration?: number
  distance?: number
  directionIn?: string
  directionOut?: string
  isShown: boolean
  onRemoved: () => void
  useOpacity?: boolean
}

const Item = memo(function Item(props: ItemProps) {
  const {
    child,
    className,
    delayHide = 0,
    delayShow = 0,
    duration = 0.25,
    distance = 0.25,
    animateIn = true,
    directionIn = 'up',
    directionOut = 'up',
    useOpacity = true,
    isShown,
    onRemoved,
  } = props

  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>()
  const showTimeout = useRef<ReturnType<typeof setTimeout>>()
  const wasShown = useRef(false)
  const wasHidden = useRef(false)

  const show = useCallback(() => {
    clearTimeout(hideTimeout.current)
    clearTimeout(showTimeout.current)

    if (!animateIn) {
      setIsVisible(true)
      return
    }

    showTimeout.current = setTimeout(() => {
      setIsHidden(false)
      setIsVisible(true)
    }, 30 + (delayHide + delayShow) * 1000)
  }, [animateIn, delayHide, delayShow])

  const hide = useCallback(() => {
    clearTimeout(hideTimeout.current)
    clearTimeout(showTimeout.current)
    setIsHidden(true)
    hideTimeout.current = setTimeout(() => {
      onRemoved()
    }, (delayHide + duration) * 1000)
  }, [onRemoved, delayHide, duration])

  useEffect(() => {
    if (isShown) {
      if (wasShown.current) {
        return
      }

      wasHidden.current = false
      wasShown.current = true

      show()
      return
    }

    if (wasHidden.current) {
      return
    }

    wasShown.current = false
    wasHidden.current = true

    hide()
  }, [isShown, show, hide])

  const classNameOutput = useMemo(
    () =>
      cn(
        className,
        styles.item,
        isVisible && styles.visible,
        isHidden && styles.hidden,
        useOpacity && styles.useOpacity,
        animateIn && styles.animateIn,
        DIRECTION_IN_CLASS[directionIn],
        DIRECTION_OUT_CLASS[directionOut],
      ),
    [className, isVisible, isHidden, directionIn, directionOut, animateIn, useOpacity],
  )

  const style = useMemo(
    () =>
      ({
        '--swap-duration': `${duration}s`,
        '--swap-distance': `${distance}rem`,
      }) as React.CSSProperties,
    [duration, distance],
  )

  const ctx = useMemo(
    () => ({
      isHidden: !isVisible || isHidden,
    }),
    [isVisible, isHidden],
  )

  return (
    <TransitionSwapContext.Provider value={ctx}>
      <div ref={ref} style={style} className={classNameOutput}>
        {child}
      </div>
    </TransitionSwapContext.Provider>
  )
})

/* ── Internal item state ─────────────────────────────────────────────────── */

interface ItemState {
  child: React.ReactElement
  key: string
  animateIn: boolean
  isShown: boolean
  delayShow: number
  directionIn: string
  directionOut: string
}

/* ── TransitionSwap ──────────────────────────────────────────────────────── */

interface TransitionSwapProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  Tag?: React.ElementType
  animateFirst?: boolean
  children?: React.ReactNode
  className?: string
  classNameContent?: string
  delayHide?: number
  duration?: number
  delayShow?: number
  distance?: number
  directionIn?: string
  directionOut?: string
  useOpacity?: boolean
}

/**
 * Animated content swapping based on observing the `key` of a given child.
 * When children change (by key), the old content animates out and the new
 * content animates in using configurable direction and timing.
 */
function TransitionSwap(props: TransitionSwapProps) {
  const {
    Tag = 'div',
    animateFirst = false,
    children,
    className,
    classNameContent,
    delayHide = 0,
    duration = 0.35,
    delayShow = 0.2,
    distance = 0.25,
    directionIn = 'up',
    directionOut = 'up',
    useOpacity = true,
    ...rest
  } = props

  const isFirst = useRef(true)
  const [items, setItems] = useState<ItemState[]>([])

  const handleRemove = useCallback((child: React.ReactElement) => {
    setItems((current) => current.filter((item) => item.child !== child))
  }, [])

  useEffect(() => {
    isFirst.current = true
  }, [])

  useEffect(() => {
    if (!children) {
      setItems((previousItems) =>
        previousItems.map((item) => ({
          ...item,
          isShown: false,
          animateIn: false,
        })),
      )

      return
    }

    const animateIn = !animateFirst ? !isFirst.current : true

    setItems((previousItems) => {
      const newItems = Children.map(children, (child, index) => ({
        child: child as React.ReactElement,
        key: (child as React.ReactElement).key || index.toString(),
        animateIn,
        isShown: true,
        delayShow,
        directionIn,
        directionOut,
      })) as ItemState[]

      // Filter out previous items whose keys no longer exist in new items
      const redundantItems = previousItems
        .filter((prevItem) => newItems.every((newItem) => newItem.key !== prevItem.key))
        .map((item) => ({
          ...item,
          isShown: false,
          delayShow,
          animateIn: false,
        }))

      return [...redundantItems, ...newItems]
    })

    isFirst.current = false
  }, [animateFirst, children, directionIn, directionOut, delayShow])

  return (
    <Tag className={cn(className, styles.container)} {...rest}>
      {items.map(({ animateIn: itemAnimateIn, child, isShown, delayShow: itemDelayShow }) => (
        <Item
          key={child.key || 'defaultKey'}
          className={classNameContent}
          child={child}
          animateIn={itemAnimateIn}
          isShown={isShown}
          directionIn={directionIn}
          directionOut={directionOut}
          duration={duration}
          distance={distance}
          onRemoved={() => handleRemove(child)}
          delayShow={itemDelayShow}
          delayHide={delayHide}
          useOpacity={useOpacity}
        />
      ))}
    </Tag>
  )
}

export default memo(TransitionSwap)
