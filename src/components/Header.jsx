import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { WA_URL_WITH_MSG } from '../constants'

const NAV_LINKS = [
  { label: 'Programas', href: '#programas' },
  { label: 'Método',    href: '#metodo' },
  { label: 'Por qué',   href: '#porqueCaliste' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem',
        height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a
          href="/"
          aria-label="Meneses Calistenia — inicio"
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}
        >
          <span style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '1.6rem',
            color: 'var(--text)',
            letterSpacing: '0.04em',
          }}>
            MENESES
          </span>
          <span style={{
            fontSize: '0.55rem',
            letterSpacing: '0.22em',
            color: 'var(--accent)',
            fontWeight: 500,
            textTransform: 'uppercase',
            marginTop: '-2px',
          }}>
            CALISTENIA
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleNav(href) }}
              style={{
                color: 'var(--muted)', textDecoration: 'none',
                fontSize: '0.8rem', letterSpacing: '0.12em',
                fontWeight: 500, textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {label}
            </a>
          ))}
          <a
            href={WA_URL_WITH_MSG}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Victor Meneses por WhatsApp"
            style={{
              background: 'var(--accent)', color: '#000',
              padding: '0.45rem 1.1rem', borderRadius: 'var(--radius)',
              fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em',
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            Contactar
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px', display: 'flex', flexDirection: 'column',
            gap: '5px', alignItems: 'flex-end',
          }}
        >
          <span style={{
            display: 'block', height: '1px', background: 'var(--text)',
            width: open ? '22px' : '22px',
            transition: 'transform 0.2s, opacity 0.2s',
            transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', height: '1px', background: 'var(--text)',
            width: '15px', opacity: open ? 0 : 1, transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block', height: '1px', background: 'var(--text)',
            width: '22px', transition: 'transform 0.2s',
            transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            aria-label="Menú móvil"
            style={{
              overflow: 'hidden',
              background: 'rgba(10,10,10,0.97)',
              borderTop: '1px solid var(--border)',
            }}
          >
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNav(href) }}
                  style={{
                    color: 'var(--text)', textDecoration: 'none',
                    fontSize: '0.9rem', fontWeight: 500,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}
                >
                  {label}
                </a>
              ))}
              <a
                href={WA_URL_WITH_MSG}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--accent)', color: '#000',
                  padding: '0.75rem 1.25rem', borderRadius: 'var(--radius)',
                  fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em',
                  textDecoration: 'none', textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Escribir a Victor
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
