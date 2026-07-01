import { motion, useReducedMotion } from 'motion/react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const STATS = [
  { value: 'PLAN 1:1',           label: 'Seguimiento directo contigo' },
  { value: 'ONLINE + PRESENCIAL', label: 'Entrenable desde cualquier lugar' },
  { value: 'CERO MÁQUINAS',      label: 'Solo tu peso y una barra' },
]

export default function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="sobre"
      style={{ position: 'relative', zIndex: 2, padding: '6rem 1.25rem' }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Text side */}
          <motion.div
            initial={reducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reducedMotion ? {} : {
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.p
              variants={reducedMotion ? {} : fadeUp}
              style={{
                fontSize: '0.68rem', letterSpacing: '0.22em',
                color: 'var(--accent)', fontWeight: 600,
                textTransform: 'uppercase', marginBottom: '1.25rem',
              }}
            >
              SOBRE EL MÉTODO
            </motion.p>

            <motion.h2
              variants={reducedMotion ? {} : fadeUp}
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(2.2rem, 5.5vw, 3.5rem)',
                lineHeight: 1.0, margin: '0 0 1.5rem',
                color: 'var(--text)', letterSpacing: '0.01em',
              }}
            >
              NO ES SOLO<br />
              <span style={{ color: 'var(--accent)' }}>ENTRENAMIENTO.</span><br />
              ES REPROGRAMAR<br />
              LA CABEZA.
            </motion.h2>

            <motion.p
              variants={reducedMotion ? {} : fadeUp}
              style={{
                color: 'var(--muted)', lineHeight: 1.75,
                fontSize: '1rem', maxWidth: '34rem',
              }}
            >
              Victor lleva años trabajando con personas que quieren progresar en
              calistenia pero chocan contra el mismo techo: no es la fuerza física
              lo que los limita — es la cabeza.
            </motion.p>
            <motion.p
              variants={reducedMotion ? {} : fadeUp}
              style={{
                color: 'var(--muted)', lineHeight: 1.75,
                fontSize: '1rem', maxWidth: '34rem', marginTop: '1rem',
              }}
            >
              Su método integra progresión de movimiento corporal con trabajo mental
              concreto: foco, tolerancia a la incomodidad, y consistencia que no
              depende de estar motivado.
            </motion.p>
          </motion.div>

          {/* Stats side */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 32 }}
            whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}
          >
            {STATS.map(({ value, label }, i) => (
              <div
                key={i}
                style={{
                  padding: '1.75rem 2rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: i === 0 ? '4px 4px 0 0' : i === STATS.length - 1 ? '0 0 4px 4px' : '0',
                  background: 'var(--surface)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--surface-2)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--surface)'
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                }}
              >
                <p style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.4rem', letterSpacing: '0.06em',
                  color: 'var(--accent)', margin: '0 0 0.3rem',
                }}>
                  {value}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
