import React, { useState, useRef, useEffect, useCallback } from 'react'
import PlusIcon from '../icons/PlusIcon'
import FlashGlyphIcon from '../icons/FlashGlyphIcon'
import ArrowUpGlyphIcon from '../icons/ArrowUpGlyphIcon'
import BeaconBgIcon from '../icons/BeaconBgIcon'

// ── Cubic-bezier evaluator (matches CSS transition curve exactly) ─────────────

function cubicBezier(p1x: number, p1y: number, p2x: number, p2y: number) {
  return function (x: number) {
    let t = x
    for (let i = 0; i < 8; i++) {
      const ct = 3 * p1x * (1 - t) * (1 - t) * t + 3 * p2x * (1 - t) * t * t + t * t * t - x
      const dt = 3 * p1x * (1 - 2 * t + t * t) + 6 * (p2x - p1x) * t * (1 - t) + 3 * (1 - p2x) * t * t
      if (Math.abs(dt) < 1e-6) break
      t -= ct / (dt || 1e-6)
    }
    t = Math.max(0, Math.min(1, t))
    return 3 * p1y * (1 - t) * (1 - t) * t + 3 * p2y * (1 - t) * t * t + t * t * t
  }
}

const SPLIT_EASE = cubicBezier(0.25, 0.1, 0.25, 1)

const PILL_SHADOW = '0px 0px 1px 0px rgba(0,0,0,0.08), 0px 4px 16px 0px rgba(0,0,0,0.12)'

// ── Warp dithering shader (WebGL2) ───────────────────────────────────────────

const VERT = `#version 300 es
precision mediump float;
layout(location=0) in vec2 a_pos;
void main(){ gl_Position=vec4(a_pos,0,1); }
`

const FRAG = `#version 300 es
precision mediump float;
uniform float u_t;
uniform vec2 u_res;
uniform vec4 u_bg;
uniform vec4 u_fg;
uniform float u_px;
out vec4 o;

const int B[64]=int[64](
  0,32,8,40,2,34,10,42,48,16,56,24,50,18,58,26,
  12,44,4,36,14,46,6,38,60,28,52,20,62,30,54,22,
  3,35,11,43,1,33,9,41,51,19,59,27,49,17,57,25,
  15,47,7,39,13,45,5,37,63,31,55,23,61,29,53,21
);

void main(){
  float t=.5*u_t;
  vec2 puv=floor((gl_FragCoord.xy-.5*u_res)/u_px);
  vec2 suv=puv*u_px/u_res;
  suv*=.003;

  // Warp: iterative sine/cosine distortion
  for(float i=1.;i<6.;i++){
    suv.x+=.6/i*cos(i*2.5*suv.y+t);
    suv.y+=.6/i*cos(i*1.5*suv.x+t);
  }
  float shape=.15/abs(sin(t-suv.y-suv.x));
  shape=smoothstep(.02,1.,shape);

  // 8x8 Bayer dithering
  ivec2 bp=ivec2(mod(puv,8.));
  float d=float(B[bp.y*8+bp.x])/64.-.5;
  float r=step(.5,shape+d);

  vec3 c=u_fg.rgb*r+u_bg.rgb*(1.-r);
  float a=u_fg.a*r+u_bg.a*(1.-r);
  o=vec4(c,a);
}
`

function WarpShader({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl2', { alpha: true })
    if (!gl) return

    const mk = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, mk(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

    const uT = gl.getUniformLocation(prog, 'u_t')
    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uBg = gl.getUniformLocation(prog, 'u_bg')
    const uFg = gl.getUniformLocation(prog, 'u_fg')
    const uPx = gl.getUniformLocation(prog, 'u_px')

    const resize = () => {
      const r = canvas.parentElement?.getBoundingClientRect()
      if (!r) return
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = r.width * dpr
      canvas.height = r.height * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)

    const t0 = performance.now()
    const draw = () => {
      gl.useProgram(prog)
      gl.uniform1f(uT, (performance.now() - t0) * 0.001)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform4f(uBg, 0.906, 0.906, 0.906, 1) // #E7E7E7
      gl.uniform4f(uFg, 0.824, 0.824, 0.824, 1) // #D2D2D2
      gl.uniform1f(uPx, 4.0)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      gl.deleteProgram(prog)
    }
  }, [active])

  if (!active) return null
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

// ── Component ────────────────────────────────────────────────────────────────

interface AddSectionDividerProps {
  onClick?: (e: React.MouseEvent) => void
  onPromptSubmit?: (prompt: string) => void
  aiStatesPath?: string
  /** Optional React node rendered behind the gap background when expanded */
  expandEffect?: React.ReactNode
}

function AddSectionDivider({ onClick, onPromptSubmit, aiStatesPath = '/assets/ai-states', expandEffect }: AddSectionDividerProps) {
  const [iconHovered, setIconHovered] = useState(false)
  const [buttonHovered, setButtonHovered] = useState(false)
  const [submitHovered, setSubmitHovered] = useState(false)
  const [plusHovered, setPlusHovered] = useState(false)
  const [hovered, setHovered] = useState(false)
  const lockupRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [closing, setClosing] = useState(false)
  const [dismissing, setDismissing] = useState(false)
  const [promptValue, setPromptValue] = useState('')
  const [composerHeight, setComposerHeight] = useState(54)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)

  const visible = hovered || expanded

  useEffect(() => {
    if (expanded) {
      const t = setTimeout(() => inputRef.current?.focus(), 80)
      return () => clearTimeout(t)
    }
  }, [expanded])

  // Scroll parent by half the gap so the split expands from center
  const lastScrollAdjust = useRef(0)
  useEffect(() => {
    if (!dividerRef.current) return
    const el = dividerRef.current
    let scrollParent: HTMLElement | null = el.parentElement
    while (scrollParent) {
      const { overflow, overflowY } = getComputedStyle(scrollParent)
      if (overflow === 'auto' || overflow === 'scroll' || overflowY === 'auto' || overflowY === 'scroll') break
      scrollParent = scrollParent.parentElement
    }
    if (!scrollParent) return
    const totalHeight = expanded ? (composerHeight + 184) : 0
    const targetAdjust = totalHeight / 2
    const distance = targetAdjust - lastScrollAdjust.current
    lastScrollAdjust.current = targetAdjust
    const duration = 400
    const start = scrollParent.scrollTop
    const startTime = performance.now()
    function step(now: number) {
      const elapsed = Math.min((now - startTime) / duration, 1)
      scrollParent!.scrollTop = start + distance * SPLIT_EASE(elapsed)
      if (elapsed < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [expanded, composerHeight])

  const handleDismiss = useCallback(() => {
    setClosing(true)
    setTimeout(() => {
      setClosing(false)
      setDismissing(true)
      setExpanded(false)
      setHovered(false)
      setPromptValue('')
      setComposerHeight(54)
      requestAnimationFrame(() => setDismissing(false))
    }, 200)
  }, [])

  const handleExpand = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setClosing(false)
    setExpanded(true)
  }, [])

  useEffect(() => {
    if (!expanded) return
    function handleMouseDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        handleDismiss()
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleDismiss()
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [expanded, handleDismiss])

  // Cursor-follow: document-level listener when lockup/prompt is visible
  useEffect(() => {
    if (!visible) {
      const el = wrapperRef.current
      if (el) el.style.transform = ''
      return
    }
    const onMove = (e: MouseEvent) => {
      const el = wrapperRef.current
      if (!el) return
      const normalized = ((e.clientX / window.innerWidth) - 0.5) * 2
      el.style.transform = `translateX(${normalized * (onPromptSubmit ? 6 : 3)}px)`
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [visible])

  const handleSubmit = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    if (onPromptSubmit) {
      onPromptSubmit(promptValue)
    } else {
      onClick?.(e)
    }
    setExpanded(false)
    setPromptValue('')
    setComposerHeight(54)
  }, [onClick, onPromptSubmit, promptValue])

  const handleInputKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && promptValue.trim()) {
      e.preventDefault()
      if (onPromptSubmit) {
        onPromptSubmit(promptValue)
      }
      setExpanded(false)
      setPromptValue('')
      setComposerHeight(54)
    }
  }, [onPromptSubmit, promptValue])

  return (
    <>
    {/* Gradient seam line — independent of divider height */}
    <div style={{
      position: 'relative',
      height: 0,
      zIndex: 9,
      overflow: 'visible',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute',
        top: -1,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(to right, #0072f0 0%, #0072f0 40%, #182224 50%, #0072f0 60%, #0072f0 100%)',
        opacity: (visible && !expanded) ? 1 : 0,
        transition: 'opacity 0.15s ease',
      }} />
      {/* Inner white stroke — inside upper section's bottom edge */}
      <div style={{
        position: 'absolute',
        top: -1,
        left: 0,
        right: 0,
        height: 1,
        background: 'rgba(255,255,255,0.18)',
        opacity: expanded ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />
    </div>

    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false) }}
      ref={dividerRef}
      style={{
        position: 'relative',
        height: expanded ? (composerHeight + 184) : 0,
        zIndex: 10,
        background: expanded ? '#E7E7E7' : 'transparent',
        transition: 'height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.3s ease',
      }}
    >
      {/* Optional expand effect — clipped to divider gap */}
      {expanded && expandEffect && (
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}>
          {expandEffect}
        </div>
      )}

      {/* Bottom stroke — faint white for light direction / depth */}
      <div style={{
        position: 'absolute',
        bottom: -1,
        left: 0,
        right: 0,
        height: 1,
        background: 'rgba(255,255,255,0.11)',
        pointerEvents: 'none',
        opacity: expanded ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Top shadow — upper section casts down onto the gray layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.06) 30%, transparent 100%)',
        pointerEvents: 'none',
        opacity: expanded ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Bottom shadow — lower section casts up onto the gray layer */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        background: 'linear-gradient(to top, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.04) 30%, transparent 100%)',
        pointerEvents: 'none',
        opacity: expanded ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Hit area */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: -24,
        bottom: -24,
      }} />

      {/* Centering anchor */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, calc(-50% - 5px))',
      }}>
        <div
          ref={wrapperRef}
          style={{
            opacity: (visible && !dismissing) ? 1 : 0,
            pointerEvents: (visible && !dismissing) ? 'auto' : 'none',
            transition: dismissing ? 'none' : 'opacity 0.15s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* ── Collapsed state — pill + standalone AI circle ── */}
          {!expanded && (
            <>
            <style>{`
              @keyframes aiIconEntrance {
                from { transform: scale(0.92); opacity: 0; }
                to   { transform: scale(1); opacity: 1; }
              }
            `}</style>
            <div
              ref={lockupRef}
              className={visible ? 'section-divider-enter' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {/* Add Section pill */}
              <button
                onClick={(e) => { e.stopPropagation(); onClick?.(e) }}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                style={{
                  position: 'relative',
                  height: 40,
                  borderRadius: 11,
                  background: '#FAFAFA',
                  border: '1px solid #E7E7E7',
                  boxShadow: PILL_SHADOW,
                  cursor: 'pointer',
                  padding: '0 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 3,
                  borderRadius: 8,
                  background: 'rgba(0,0,0,0.05)',
                  opacity: buttonHovered ? 1 : 0,
                  transition: 'opacity 0.15s ease',
                  pointerEvents: 'none',
                }} />
                <div style={{ position: 'relative', width: 14, height: 14, marginRight: 10, color: '#0E0E0E' }}><PlusIcon /></div>
                <span style={{
                  position: 'relative',
                  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: '22px',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  color: '#0E0E0E',
                  whiteSpace: 'nowrap',
                }}>
                  Add Section
                </span>
              </button>

              {/* AI circle — only shown when onPromptSubmit is provided */}
              {onPromptSubmit && (
                <div style={{
                  flexShrink: 0,
                  transform: visible ? 'scale(1) rotate(0deg)' : 'scale(0.92) rotate(-45deg)',
                  opacity: visible ? 1 : 0,
                  transition: visible
                    ? 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.15s'
                    : 'transform 0.15s ease, opacity 0.15s ease',
                }}>
                <div
                  onClick={handleExpand}
                  onMouseEnter={() => setIconHovered(true)}
                  onMouseLeave={() => setIconHovered(false)}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 30,
                    background: '#0E0E0E',
                    border: '1px solid #000',
                    boxShadow: PILL_SHADOW,
                    position: 'relative',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    transform: iconHovered ? 'scale(1.048)' : 'scale(1)',
                    transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    width: 49,
                    height: 49,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                  }}>
                    <BeaconBgIcon />
                  </div>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mixBlendMode: 'difference',
                  }}>
                    <div style={{
                      width: 27,
                      height: 27,
                      borderRadius: 34,
                      overflow: 'hidden',
                      transform: 'rotate(45deg)',
                      position: 'relative',
                    }}>
                      <video
                        key={iconHovered ? 'error' : 'awake'}
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={`${aiStatesPath}/${iconHovered ? 'big_error' : 'big_awake'}.mp4`}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: '#fff',
                        mixBlendMode: 'difference',
                        pointerEvents: 'none',
                      }} />
                    </div>
                  </div>
                </div>
                </div>
              )}
            </div>
          </>
          )}

          {/* ── Expanded prompt ── */}
          {expanded && (
            <div className="chat-glow-wrap" style={{
              position: 'relative',
              width: 560,
              minHeight: 54,
              animation: closing
                ? 'promptCollapse 200ms cubic-bezier(0.55, 0, 1, 0.45) forwards'
                : 'promptUnfurl 500ms cubic-bezier(0.22, 1.15, 0.36, 1) forwards',
            }}>
              <style>{`
                @property --glow-hue {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }
                @property --glow-rotate {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }
                @property --glow-bg-x {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }
                @property --glow-bg-y {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }

                @keyframes chat-hue { 0% { --glow-hue: 0; } 100% { --glow-hue: 360; } }
                @keyframes chat-rotate-bg {
                  0%   { --glow-bg-x: 0;   --glow-bg-y: 0; }
                  25%  { --glow-bg-x: 100; --glow-bg-y: 0; }
                  50%  { --glow-bg-x: 100; --glow-bg-y: 100; }
                  75%  { --glow-bg-x: 0;   --glow-bg-y: 100; }
                  100% { --glow-bg-x: 0;   --glow-bg-y: 0; }
                }
                @keyframes chat-glow-orbit {
                  from { --glow-rotate: -70; }
                  to   { --glow-rotate: 290; }
                }

                .chat-glow-border {
                  animation: chat-rotate-bg 4s linear infinite;
                  background: conic-gradient(
                    from 0deg,
                    hsl(0deg 0% 92%) 0deg,
                    hsl(0deg 0% 100%) 30deg,
                    hsl(0deg 0% 92%) 60deg,
                    hsl(0deg 0% 72%) 120deg,
                    hsl(0deg 0% 92%) 150deg,
                    hsl(0deg 0% 100%) 210deg,
                    hsl(0deg 0% 92%) 240deg,
                    hsl(0deg 0% 72%) 300deg,
                    hsl(0deg 0% 92%) 360deg
                  );
                }
                .chat-glow-border::before {
                  content: '';
                  display: block;
                  position: absolute;
                  inset: 0;
                  border-radius: inherit;
                  background: inherit;
                  filter: blur(6px);
                  opacity: 0.5;
                }

                .chat-glow-orb, .chat-glow-orb-2 {
                  position: absolute;
                  width: 100px;
                  height: 100px;
                  border-radius: 50%;
                  transform-origin: center;
                }
                .chat-glow-orb {
                  left: calc(50% - 50px);
                  top: calc(50% - 50px);
                  animation: chat-glow-orbit 4s linear infinite;
                  transform: rotateZ(calc(var(--glow-rotate) * 1deg));
                }
                .chat-glow-orb::after {
                  content: '';
                  display: block;
                  position: relative;
                  width: 180%;
                  height: 180%;
                  left: -40%;
                  top: -40%;
                  filter: blur(20px);
                  border-radius: 50%;
                  background: white;
                  transform: scaleX(1.6) scaleY(1) translateY(-55%);
                  opacity: 0.8;
                }
                .chat-glow-orb-2 {
                  left: calc(50% - 50px);
                  top: calc(50% - 50px);
                  animation: chat-glow-orbit 4s linear infinite;
                  transform: rotateZ(calc(calc(var(--glow-rotate) + 180) * 1deg));
                }
                .chat-glow-orb-2::after {
                  content: '';
                  display: block;
                  position: relative;
                  width: 180%;
                  height: 180%;
                  left: -40%;
                  top: -40%;
                  filter: blur(20px);
                  border-radius: 50%;
                  background: white;
                  transform: scaleX(1.6) scaleY(1) translateY(-55%);
                  opacity: 0.8;
                }
              `}</style>
              {/* Glow — orbiting light + gradient border */}
              <div className="chat-glow-border" style={{
                position: 'absolute',
                inset: -1,
                borderRadius: composerHeight > 54 ? 25 : 34,
                zIndex: 0,
                overflow: 'hidden',
              }}>
                <span className="chat-glow-orb" />
                <span className="chat-glow-orb-2" />
              </div>
              {/* Card */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                minHeight: 54,
                borderRadius: composerHeight > 54 ? 24 : 33,
                background: '#FAFAFA',
                border: 'none',
                boxShadow: '0px 227px 64px 0px rgba(0,0,0,0), 0px 145px 58px 0px rgba(0,0,0,0.01), 0px 82px 49px 0px rgba(0,0,0,0.02), 0px 36px 36px 0px rgba(0,0,0,0.04), 0px 9px 20px 0px rgba(0,0,0,0.05)',
                transition: 'border-radius 0.25s ease',
              }}>
              <style>{`
                @keyframes promptUnfurl {
                  from { width: 54px; opacity: 0; }
                  15%  { opacity: 1; }
                  to   { width: 560px; opacity: 1; }
                }
                @keyframes promptCollapse {
                  from { width: 560px; opacity: 1; }
                  85%  { opacity: 0; }
                  to   { width: 54px; opacity: 0; }
                }
              `}</style>
              <div style={{
                display: 'flex',
                flexDirection: composerHeight > 54 ? 'column' : 'row',
                alignItems: composerHeight > 54 ? 'stretch' : 'center',
                padding: composerHeight > 54 ? '16px 16px 8px' : '6px',
                gap: composerHeight > 54 ? 0 : 6,
              }}>
                {/* Plus button — inline left when single line, bottom-left when multiline */}
                {composerHeight <= 54 && (
                  <button
                    onClick={(e) => { e.stopPropagation(); onClick?.(e) }}
                    onMouseEnter={() => setPlusHovered(true)}
                    onMouseLeave={() => setPlusHovered(false)}
                    style={{
                      width: 42, height: 42, borderRadius: '50%', border: 'none',
                      background: plusHovered ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', flexShrink: 0, padding: 0, color: '#666',
                      transform: plusHovered ? 'scale(1.048)' : 'scale(0.9)',
                      transition: 'background 0.25s cubic-bezier(0.22, 1, 0.36, 1), transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div style={{ width: 12, height: 12 }}><PlusIcon /></div>
                  </button>
                )}

                <textarea
                  ref={inputRef}
                  value={promptValue}
                  onChange={(e) => {
                    setPromptValue(e.target.value)
                    const el = e.target
                    el.style.height = 'auto'
                    const scrollH = el.scrollHeight
                    const isMultiline = scrollH > 22
                    el.style.height = isMultiline ? scrollH + 'px' : ''
                    setComposerHeight(isMultiline ? scrollH + 76 : 54)
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Make it real"
                  rows={1}
                  style={{
                    flex: composerHeight > 54 ? undefined : 1,
                    width: composerHeight > 54 ? '100%' : undefined,
                    border: 'none', background: 'transparent', outline: 'none', resize: 'none',
                    fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontWeight: 400, fontSize: 15, lineHeight: '20px', color: '#0E0E0E',
                    overflow: 'visible',
                    padding: composerHeight > 54 ? '0 0 16px' : 0,
                    margin: 0,
                    boxSizing: 'border-box',
                  }}
                />

                {/* Bottom row — only when multiline */}
                {composerHeight > 54 ? (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); onClick?.(e) }}
                    onMouseEnter={() => setPlusHovered(true)}
                    onMouseLeave={() => setPlusHovered(false)}
                    style={{
                      width: 42, height: 42, borderRadius: '50%', border: 'none',
                      background: plusHovered ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', flexShrink: 0, padding: 0, color: '#666',
                      transform: plusHovered ? 'scale(1.048)' : 'scale(0.9)',
                      transition: 'background 0.25s cubic-bezier(0.22, 1, 0.36, 1), transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div style={{ width: 12, height: 12 }}><PlusIcon /></div>
                  </button>

                  <button
                    onClick={handleSubmit}
                    onMouseEnter={() => setSubmitHovered(true)}
                    onMouseLeave={() => setSubmitHovered(false)}
                    style={{
                      width: 42, height: 42, borderRadius: '50%', border: 'none',
                      background: 'transparent', padding: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', flexShrink: 0, position: 'relative', overflow: 'hidden',
                      transform: submitHovered ? 'scale(1.048)' : 'scale(1)',
                      transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div style={{
                      position: 'absolute', width: 48, height: 48,
                      left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none',
                    }}>
                      <BeaconBgIcon />
                    </div>
                    <div style={{ position: 'relative', zIndex: 1, color: 'var(--rosetta-fg-onStrong, #fff)', width: 10, height: 13 }}>
                      <ArrowUpGlyphIcon />
                    </div>
                  </button>
                </div>
                ) : (
                  /* Submit button inline — single line mode */
                  <button
                    onClick={handleSubmit}
                    onMouseEnter={() => setSubmitHovered(true)}
                    onMouseLeave={() => setSubmitHovered(false)}
                    style={{
                      width: 42, height: 42, borderRadius: '50%', border: 'none',
                      background: 'transparent', padding: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', flexShrink: 0, position: 'relative', overflow: 'hidden',
                      transform: submitHovered ? 'scale(1.048)' : 'scale(1)',
                      transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div style={{
                      position: 'absolute', width: 48, height: 48,
                      left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none',
                    }}>
                      <BeaconBgIcon />
                    </div>
                    <div style={{ position: 'relative', zIndex: 1, color: 'var(--rosetta-fg-onStrong, #fff)', width: 10, height: 13 }}>
                      <ArrowUpGlyphIcon />
                    </div>
                  </button>
                )}
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default AddSectionDivider
