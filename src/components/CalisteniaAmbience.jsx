import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const BARS = [
  { left: '8%',  width: '22%', dur: 28, delay: 0,    opacity: 0.18 },
  { left: '35%', width: '14%', dur: 34, delay: 6,    opacity: 0.12 },
  { left: '62%', width: '28%', dur: 24, delay: 12,   opacity: 0.16 },
  { left: '18%', width: '10%', dur: 40, delay: 3,    opacity: 0.10 },
  { left: '78%', width: '16%', dur: 30, delay: 18,   opacity: 0.14 },
  { left: '50%', width: '8%',  dur: 22, delay: 8,    opacity: 0.09 },
  { left: '4%',  width: '32%', dur: 46, delay: 22,   opacity: 0.08 },
  { left: '70%', width: '12%', dur: 26, delay: 15,   opacity: 0.11 },
]

const MAX_MARKERS = 14
const THROTTLE_MS = 90

export default function CalisteniaAmbience() {
  const reducedMotion = useReducedMotion()
  const [markers, setMarkers] = useState([])
  const lastSpawn = useRef(0)
  const idRef = useRef(0)

  useEffect(() => {
    if (reducedMotion) return
    const onMove = (e) => {
      const now = Date.now()
      if (now - lastSpawn.current < THROTTLE_MS) return
      lastSpawn.current = now
      const id = idRef.current++
      setMarkers(prev => {
        const next = [...prev, { id, x: e.clientX, y: e.clientY }]
        return next.length > MAX_MARKERS ? next.slice(next.length - MAX_MARKERS) : next
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reducedMotion])

  const removeMarker = (id) =>
    setMarkers(prev => prev.filter(m => m.id !== id))

  if (reducedMotion) return null

  return (
    <>
      {/* Ambient layer — CSS only, floating bar silhouettes */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}
      >
        {BARS.map((bar, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              bottom: 0,
              left: bar.left,
              width: bar.width,
              height: '1px',
              background: `rgba(212, 255, 0, ${bar.opacity})`,
              animation: `bar-rise ${bar.dur}s linear ${bar.delay}s infinite`,
              borderRadius: '0.5px',
            }}
          />
        ))}
      </div>

      {/* Cursor layer — crosshair position markers */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}
      >
        <AnimatePresence>
          {markers.map(({ id, x, y }) => (
            <motion.span
              key={id}
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 1.8 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              onAnimationComplete={() => removeMarker(id)}
              style={{
                position: 'fixed',
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
                width: 10,
                height: 10,
                pointerEvents: 'none',
              }}
            >
              {/* "+" crosshair */}
              <span style={{
                position: 'absolute',
                top: '50%', left: 0,
                width: '100%', height: '1px',
                background: 'rgba(212,255,0,0.5)',
                transform: 'translateY(-50%)',
              }} />
              <span style={{
                position: 'absolute',
                left: '50%', top: 0,
                width: '1px', height: '100%',
                background: 'rgba(212,255,0,0.5)',
                transform: 'translateX(-50%)',
              }} />
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
