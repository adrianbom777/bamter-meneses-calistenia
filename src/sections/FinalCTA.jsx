import { motion, useReducedMotion } from 'motion/react'
import { WA_URL_WITH_MSG, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants'

export default function FinalCTA() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="contacto"
      style={{ position: 'relative', zIndex: 2, padding: '8rem 1.25rem' }}
    >
      {/* Background glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,255,0,0.04) 0%, transparent 70%)',
      }} />

      {/* Top border accent line */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 'min(32rem, 80vw)', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
      }} />

      <div style={{ maxWidth: '44rem', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p style={{
            fontSize: '0.68rem', letterSpacing: '0.22em',
            color: 'var(--accent)', fontWeight: 600,
            textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>
            PRIMER PASO
          </p>

          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
            lineHeight: 0.95, margin: '0 0 1.75rem',
            color: 'var(--text)', letterSpacing: '0.01em',
          }}>
            EL PRIMER PASO<br />
            <span style={{ color: 'var(--accent)' }}>ES ESCRIBIRME.</span>
          </h2>

          <p style={{
            color: 'var(--muted)', lineHeight: 1.75,
            fontSize: '1rem', marginBottom: '2.5rem',
          }}>
            Sin compromiso. Contame tu situación actual, qué querés lograr,
            y te doy una respuesta honesta sobre si puedo ayudarte.
          </p>

          <motion.a
            href={WA_URL_WITH_MSG}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={reducedMotion ? {} : { scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
              background: 'var(--accent)', color: '#000',
              padding: '1rem 2.5rem', borderRadius: 'var(--radius)',
              fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.12em',
              textDecoration: 'none', textTransform: 'uppercase',
            }}
          >
            {/* WhatsApp icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir a Victor
          </motion.a>

          {/* Instagram link */}
          <p style={{
            marginTop: '2rem', fontSize: '0.82rem', color: 'var(--muted)',
          }}>
            O seguime en Instagram:{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text)', textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '1px', transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              {INSTAGRAM_HANDLE}
            </a>
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <p style={{
        textAlign: 'center', marginTop: '5rem',
        fontSize: '0.72rem', letterSpacing: '0.1em',
        color: 'var(--border)', textTransform: 'uppercase',
      }}>
        © {new Date().getFullYear()} Meneses Calistenia — Victor Meneses Diaz · Lima, Perú
      </p>
    </section>
  )
}
