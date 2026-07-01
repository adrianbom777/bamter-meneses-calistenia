import { motion, useReducedMotion } from 'motion/react'
import { WA_URL_WITH_MSG } from '../constants'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const anim = reducedMotion ? {} : { variants: fadeUp }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100svh', position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '0 1.25rem 5rem',
      }}
    >
      {/* Subtle glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '25%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(600px, 90vw)', height: 'min(600px, 90vw)',
        background: 'radial-gradient(circle, rgba(212,255,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
          variants={stagger}
        >
          {/* Label */}
          <motion.p {...anim} style={{
            fontSize: '0.7rem', letterSpacing: '0.25em',
            color: 'var(--muted)', fontWeight: 500, textTransform: 'uppercase',
            marginBottom: '2rem',
          }}>
            ENTRENADOR PERSONAL · LIMA, PERÚ
          </motion.p>

          {/* Main headline */}
          <motion.h1 {...anim} style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(4rem, 14vw, 11rem)',
            lineHeight: 0.9,
            margin: '0 0 0.15em',
            letterSpacing: '-0.01em',
          }}>
            <span style={{ display: 'block', color: 'var(--text)' }}>CALISTENIA</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>Y MENTALIDAD</span>
          </motion.h1>

          {/* Descriptor */}
          <motion.p {...anim} style={{
            fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
            color: 'var(--muted)', lineHeight: 1.65,
            maxWidth: '42rem', marginTop: '1.75rem',
          }}>
            Victor Meneses trabaja los dos lados que importan: el cuerpo que se mueve
            y la cabeza que lo dirige. Sin gimnasio ni excusas.
          </motion.p>

          {/* CTAs */}
          <motion.div {...anim} style={{
            display: 'flex', flexWrap: 'wrap', gap: '1rem',
            marginTop: '2.5rem', alignItems: 'center',
          }}>
            <a
              href={WA_URL_WITH_MSG}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--accent)', color: '#000',
                padding: '0.85rem 2.25rem', borderRadius: 'var(--radius)',
                fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.12em',
                textDecoration: 'none', textTransform: 'uppercase',
                transition: 'background 0.2s, transform 0.15s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none' }}
            >
              Comenzar ahora
            </a>
            <a
              href="#programas"
              onClick={(e) => { e.preventDefault(); document.querySelector('#programas')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                border: '1px solid var(--border)', color: 'var(--muted)',
                padding: '0.85rem 2.25rem', borderRadius: 'var(--radius)',
                fontWeight: 500, fontSize: '0.85rem', letterSpacing: '0.12em',
                textDecoration: 'none', textTransform: 'uppercase',
                transition: 'color 0.2s, border-color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'rgba(212,255,0,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              Ver programas
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '2rem', right: '1.5rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}
      >
        <span style={{
          writingMode: 'vertical-rl', fontSize: '0.6rem', letterSpacing: '0.2em',
          color: 'var(--muted)', textTransform: 'uppercase',
        }}>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 28, background: 'var(--border)' }}
        />
      </motion.div>
    </section>
  )
}
