import { motion, useReducedMotion } from 'motion/react'
import { WA_URL_WITH_MSG } from '../constants'

const PROGRAMS = [
  {
    level: 'PARA PRINCIPIANTES',
    name: 'CALISTENIA BASE',
    description:
      'Empezás desde cero. Aprendés la base técnica correcta: dominadas, fondos, sentadillas, planchas. Progresión semanal estructurada, sin saltar pasos.',
    features: [
      'Evaluación inicial de tu nivel',
      'Plan de 12 semanas',
      'Técnica y forma antes que carga',
      'Seguimiento semanal por WhatsApp',
    ],
    badge: null,
  },
  {
    level: 'NIVEL INTERMEDIO',
    name: 'HABILIDADES + FUERZA',
    description:
      'Ya entrenás pero querés progresar en skills: muscle-up, front lever, planche. Trabajo de fuerza específico para destrabar los movimientos que te están frenando.',
    features: [
      'Diagnóstico de tus limitaciones actuales',
      'Progresiones específicas por skill',
      'Fuerza complementaria al movimiento',
      'Ajustes semanales según tu respuesta',
    ],
    badge: 'MÁS SOLICITADO',
  },
  {
    level: 'ALTO RENDIMIENTO',
    name: 'ÉLITE',
    description:
      'Para quien ya domina los skills básicos y quiere escalar. Competencia, estética, o romper tu propio techo. Intensidad controlada, periodización real.',
    features: [
      'Plan periodizado completo',
      'Análisis de video de tu técnica',
      'Programación para competencia si aplica',
      'Acceso directo a Victor',
    ],
    badge: null,
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Programs() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="programas"
      style={{ position: 'relative', zIndex: 2, padding: '6rem 1.25rem' }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p style={{
            fontSize: '0.68rem', letterSpacing: '0.22em',
            color: 'var(--accent)', fontWeight: 600,
            textTransform: 'uppercase', marginBottom: '0.75rem',
          }}>
            PROGRAMAS
          </p>
          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            margin: 0, color: 'var(--text)',
            letterSpacing: '0.01em', lineHeight: 1.05,
          }}>
            ELIGE TU PUNTO DE PARTIDA
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reducedMotion ? {} : {
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 21rem), 1fr))',
            gap: '1px',
          }}
        >
          {PROGRAMS.map(({ level, name, description, features, badge }) => (
            <motion.div
              key={name}
              variants={reducedMotion ? {} : cardVariant}
              style={{
                background: badge ? 'var(--surface-2)' : 'var(--surface)',
                border: `1px solid ${badge ? 'var(--accent-dim)' : 'var(--border-subtle)'}`,
                borderRadius: 'var(--radius)',
                padding: '2.25rem',
                display: 'flex', flexDirection: 'column',
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
              whileHover={reducedMotion ? {} : { y: -3 }}
              transition={{ duration: 0.18 }}
              onMouseEnter={e => e.currentTarget.style.borderColor = badge ? 'rgba(212,255,0,0.35)' : 'var(--border)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = badge ? 'var(--accent-dim)' : 'var(--border-subtle)'}
            >
              {/* Accent line top */}
              {badge && (
                <span style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '2px', background: 'var(--accent)',
                }} />
              )}

              {badge && (
                <span style={{
                  display: 'inline-block', alignSelf: 'flex-start',
                  fontSize: '0.6rem', letterSpacing: '0.18em', fontWeight: 700,
                  background: 'var(--accent)', color: '#000',
                  padding: '0.2rem 0.6rem', borderRadius: '2px',
                  textTransform: 'uppercase', marginBottom: '1.25rem',
                }}>
                  {badge}
                </span>
              )}

              <p style={{
                fontSize: '0.65rem', letterSpacing: '0.2em',
                color: 'var(--muted)', textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}>
                {level}
              </p>

              <h3 style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '1.9rem', letterSpacing: '0.04em',
                color: 'var(--text)', margin: '0 0 1rem', lineHeight: 1,
              }}>
                {name}
              </h3>

              <p style={{
                color: 'var(--muted)', fontSize: '0.9rem',
                lineHeight: 1.65, marginBottom: '1.5rem', flexGrow: 1,
              }}>
                {description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {features.map((f) => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                    fontSize: '0.83rem', color: 'var(--text)',
                  }}>
                    <span style={{
                      color: 'var(--accent)', fontSize: '0.7rem',
                      marginTop: '0.2rem', flexShrink: 0,
                    }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WA_URL_WITH_MSG}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center',
                  border: `1px solid ${badge ? 'var(--accent)' : 'var(--border)'}`,
                  color: badge ? '#000' : 'var(--text)',
                  background: badge ? 'var(--accent)' : 'transparent',
                  padding: '0.7rem', borderRadius: 'var(--radius)',
                  fontSize: '0.78rem', fontWeight: 600,
                  letterSpacing: '0.1em', textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  if (!badge) { e.currentTarget.style.background = 'var(--border-subtle)' }
                  else { e.currentTarget.style.background = 'var(--accent-hover)' }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = badge ? 'var(--accent)' : 'transparent'
                }}
              >
                Consultar
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
