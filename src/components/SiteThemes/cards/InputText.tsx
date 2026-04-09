import { memo, useState, useEffect } from 'react'

/* ── Config ──────────────────────────────────────────────────────────────── */

const LABEL = 'Input field'

/* ── Types ───────────────────────────────────────────────────────────────── */

interface InputTextProps {
  isInteractive?: boolean
  inputRate?: number
}

/* ── Component ───────────────────────────────────────────────────────────── */

/**
 * Animates the input of text (incl. caret).
 */
function InputText(props: InputTextProps) {
  const { isInteractive, inputRate = 100 } = props
  const [output, setOutput] = useState('')
  const [showCaret, setShowCaret] = useState(false)

  useEffect(() => {
    if (isInteractive) {
      const text = LABEL
      let index = 0
      const intervalId = setInterval(() => {
        if (index <= text.length) {
          setOutput(text.substring(0, index))
          setShowCaret(true)
          index++
        } else {
          setShowCaret(false)
          clearInterval(intervalId)
        }
      }, inputRate)
      return () => clearInterval(intervalId)
    } else {
      setOutput(LABEL)
      setShowCaret(false)
    }
  }, [isInteractive, inputRate])

  return (
    <span>
      {output}
      {showCaret && '|'}
    </span>
  )
}

export default memo(InputText)
