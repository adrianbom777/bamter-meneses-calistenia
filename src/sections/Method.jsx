import { motion, useReducedMotion } from 'motion/react'

const STEPS = [
  {
    num: '01',
    title: 'EVALUACIÓN',
    text: 'Empezamos con una llamada. Qué nivel tenés, qué querés lograr, y qué está frenando tu progreso ahora mismo — físico y mental.',
  },
  {
    num: '02',
    title: 'PLAN PERSONALIZADO',
    text: 'Un programa diseñado para vos, no una plantilla copiada. Con progresión semana a semana y métricas claras de avance.',
  },
  {
    num: '03',
    title: 'ENTRENAMIENTO Y AJUSTES',
    text: 'Seguís el plan y mandás videos de tus movimientos. Corrijo la técnica y ajusto el programa según cómo respondés.',
  },
  {
    num: '04',
    title: 'RESULTADOS MEDIBLES',
    text: 'Cada 4 semanas evaluamos el progreso. Los números no mienten: más peso, más reps, nuevos skills desbloqueados.',
  },
]

export default function Method() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="metodo"
      style={{
        position: 'relative', zIndex: 2,
        padding: '6rem 1.25rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(17,17,19,0.6) 30%, rgba(17,17,19,0.6) 70%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem', maxWidth: '36rem' }}
        >
          <p style={{
            fontSize: '0.68rem', letterSpacing: '0.22em',
            color: 'var(--accent)', fontWeight: 600,
            textTransform: 'uppercase', marginBottom: '0.75rem',
          }}>
            CÓMO FUNCIONA
          </p>
          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            margin: 0, color: 'var(--text)', letterSpacing: '0.01em',
          }}>
            EL PROCESO
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {STEPS.map(({ num, title, text }, i) => (
            <motion.div
              key={num}
              initial={reducedMotion ? false : { opacity: 0, x: -24 }}
              whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.48, ease: 'easeOut', delay: i * 0.08 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '3rem 1fr',
                gap: '1.5rem 2rem',
                padding: '2rem 0',
                borderBottom: i < STEPS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                alignItems: 'start',
              }}
            >
              {/* Number + vertical line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.1rem' }}>
                <span style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '2.2rem', lineHeight: 1,
                  color: i === 0 ? 'var(--accent)' : 'var(--border-subtle)',
                  transition: 'color 0.2s',
                }}>
                  {num}
                </span>
                {i < STEPS.length - 1 && (
                  <span style={{
                    width: '1px', height: '100%', minHeight: '2rem',
                    background: 'var(--border-subtle)', marginTop: '0.5rem', flex: 1,
                  }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: '0.5rem' }}>
                <h3 style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '1.45rem', letterSpacing: '0.05em',
                  color: 'var(--text)', margin: '0 0 0.6rem',
                }}>
                  {title}
                </h3>
                <p style={{
                  color: 'var(--muted)', lineHeight: 1.7,
                  fontSize: '0.92rem', maxWidth: '44rem',
                }}>
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
