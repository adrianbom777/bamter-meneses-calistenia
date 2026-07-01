# Meneses Calistenia

Sitio web para Victor Meneses (@menesescalistenia), entrenador personal en calistenia y mentalidad. Lima, Perú.

**URL:** menesescalistenia.bamter.com

## Stack

- Vite 8 + React 19
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Motion (`motion/react`)
- Google Fonts: Bebas Neue + DM Sans
- Cloudflare Workers (static assets)

## Comandos

```bash
npm run dev       # Desarrollo local
npm run build     # Build de producción
npm run preview   # Preview del build
npm run lint      # Linter (oxlint)
```

## Estructura

```
src/
  components/
    Header.jsx             — Navegación sticky + menú mobile
    CalisteniaAmbience.jsx — Barras flotantes CSS + marcadores de cursor
    WhatsAppFAB.jsx        — Botón flotante WhatsApp
  sections/
    Hero.jsx               — Hero con CTA principal
    About.jsx              — Sobre Victor y el método
    Programs.jsx           — Tres programas de entrenamiento
    Method.jsx             — Proceso en 4 pasos
    Features.jsx           — Por qué calistenia
    FinalCTA.jsx           — CTA final + footer
  constants.js             — URLs de contacto centralizadas
  index.css                — Design tokens + Tailwind
  App.jsx                  — Composición
public/
  favicon.svg              — Favicon con "M" en lime
  og-image.svg             — OG image (exportar a PNG 1200x630 para mejor compatibilidad social)
  _headers                 — Headers de seguridad Cloudflare
  robots.txt
  sitemap.xml
wrangler.jsonc             — Config Cloudflare Workers
```

## Deploy

Repo conectado a Cloudflare Workers Builds. Cada push a `main` dispara deploy automático.

## Identidad visual

- Acento: `#d4ff00` (Electric Lime)
- Fondo: `#0a0a0a`
- Display: Bebas Neue
- Body: DM Sans
- WhatsApp: +51 939 984 700
- Instagram: @menesescalistenia
