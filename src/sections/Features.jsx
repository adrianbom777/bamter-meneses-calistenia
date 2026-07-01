import { motion, useReducedMotion } from 'motion/react'

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="5" />
        <path d="M3 21v-1a9 9 0 0 1 18 0v1" />
      </svg>
    ),
    title: 'SIN MÁQUINAS',
    text: 'Tu cuerpo es el peso. Un parque o una barra son suficientes para desarrollar más fuerza y control que cualquier máquina de gimnasio.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'FUERZA FUNCIONAL',
    text: 'No entrenás un músculo aislado. Entrenás patrones de movimiento completos. La fuerza que construís la usás en la vida real.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: 'MENTALIDAD INTEGRADA',
    text: 'Cuando Victor dice "calistenia y mentalidad" no es marketing. Cada ciclo de entrenamiento trabaja los dos lados: el cuerpo y la cabeza.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'PROGRESIÓN INFINITA',
    text: 'Desde la primera dominada hasta el planche de un brazo. Siempre hay un nivel más. El progreso no termina — solo cambian los objetivos.',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
}

export default function Features() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="porqueCaliste"
      style={{ position: 'relative', zIndex: 2, padding: '6rem 1.25rem' }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem', maxWidth: '36rem' }}
        >
          <p style={{
            fontSize: '0.68rem', letterSpacing: '0.22em',
            color: 'var(--accent)', fontWeight: 600,
            textTransform: 'uppercase', marginBottom: '0.75rem',
          }}>
            POR QUÉ CALISTENIA
          </p>
          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            margin: 0, color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.05,
          }}>
            FUERZA REAL.<br />SIN DEPENDER DE NADA.
          </h2>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reducedMotion ? {} : {
            hidden: {},
            visible: { transition: { staggerChildren: 0.11 } },
          }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 17rem), 1fr))',
            gap: '1px',
          }}
        >
          {FEATURES.map(({ icon, title, text }) => (
            <motion.div
              key={title}
              variants={reducedMotion ? {} : cardVariant}
              style={{
                padding: '2rem',
                background: 'var(--surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--surface-2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.background = 'var(--surface)'
              }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                {icon}
              </div>
              <h3 style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.25rem', letterSpacing: '0.06em',
                color: 'var(--text)', margin: '0 0 0.6rem',
              }}>
                {title}
              </h3>
              <p style={{
                color: 'var(--muted)', fontSize: '0.88rem',
                lineHeight: 1.65, margin: 0,
              }}>
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
