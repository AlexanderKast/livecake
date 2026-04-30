# Live Cake

**Transmisiones live que venden.** Agencia especializada en producción de live shopping y contenido formato live pre-grabado para ads en Meta y TikTok.

---

## Web (`/web`)

Next.js 15 App Router + TypeScript + Tailwind 4, desplegado en Vercel (`livecake.com`).

### Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Runtime**: Node 24+
- **UI**: React 19, Tailwind 4, Radix UI, motion
- **Backend**: Supabase (Postgres + Auth + Edge Functions)
- **Pagos**: Stripe
- **Email**: Resend
- **Booking**: Cal.com
- **Analytics**: GTM + GA4 + Meta Pixel + TikTok Pixel

### Comandos

```bash
cd web
npm install
npm run dev       # http://localhost:3000 (Turbopack)
npm run build
npm run type-check
npm run lint
npm run test
```

### Variables de entorno

Copiar `web/.env.example` a `web/.env.local` y poblar:

- `NEXT_PUBLIC_SITE_URL` — `https://livecake.com`
- `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`, `STRIPE_PRICE_*` — price IDs de los paquetes Live Cake
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL` — remitente verificado (`hola@livecake.com`)
- `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`

### Estructura

```
web/
├── src/
│   ├── app/                 # Rutas Next.js App Router
│   │   ├── (public)         # /, /precios, /casos, /legal/*, /agendar
│   │   ├── admin/           # Panel interno (/admin)
│   │   ├── checkout/[plan]  # Stripe checkout dinámico
│   │   ├── forge/           # Lead gen tool
│   │   ├── diagnostico/     # Diagnóstico de marca
│   │   └── api/             # API routes (Supabase, webhooks, cron)
│   ├── components/          # UI por sección (home/, precios/, admin/, ui/)
│   └── lib/                 # brand/tokens, pricing, stripe, seo, tracking
└── public/brand/            # Logos, favicons, imágenes editoriales
```

---

## Identidad de marca

- **Nombre**: Live Cake (wordmark: `LiveCake`)
- **Dominio**: livecake.com
- **Paleta**:
  - Live Green `#00D64F` (primary / signature)
  - Live Green Dark `#00B043` (hover)
  - Live Red `#FF0033` (accent "on air" / badge LIVE)
  - Black `#0A0A0A` / White `#FFFFFF`
- **Tipografía**: Manrope (display) + Inter (body)
- **Fuente de verdad**: `web/src/lib/brand/tokens.ts`

---

## Rebrand UGC Colombia → Live Cake

Este repo era originalmente el sitio de **UGC Colombia** (agencia UGC LATAM). A partir de abril 2026 se pivotó 100% a **Live Cake**, con enfoque exclusivo en transmisiones live / live shopping para ads.

**Cambios aplicados** (ver `docs/` y commit log):
- Nueva paleta (verde/rojo/negro) y tipografía (Manrope).
- Logo y OG image rebrandeados.
- Eliminadas rutas `/servicios` y `/garantia`.
- Placeholders `TBD` en los 3 paquetes de `pricing-plans.ts` (en espera de definición final).
- Eliminado contenido legacy UGC (packs virales, brand guidelines antiguas, scripts de referentes).

**Pendientes** para completar el rebrand:
- [ ] Definir precios, features y nombre final de los 3 paquetes Live Cake.
- [ ] Entregar variantes de logo: isotipo cuadrado, logo blanco, favicon 32×32, apple-touch-icon 180×180, og-image 1200×630.
- [ ] Configurar DNS de `livecake.com` en Vercel.
- [ ] Crear propiedades nuevas en GTM, GA4, Meta Pixel, TikTok Pixel.
- [ ] Verificar dominio `livecake.com` en Resend.
- [ ] Crear productos/prices en Stripe y poblar `STRIPE_PRICE_*`.
- [ ] Configurar Cal.com con el nuevo handle.
- [ ] Reescribir copy de Problema, Solución, Servicios del home hacia live shopping.
- [ ] Limpiar archivos legacy del repo raíz (ver sección siguiente).

### Limpieza de archivos legacy (manual)

Tras el rebrand quedan en el repo archivos obsoletos de UGC Colombia que el equipo debe eliminar manualmente:

```bash
git rm -r content/ brand/ pdfs/ drafts/ n8n/ \
  00-INDICE-GENERAL.md 01-PACK-ALEXANDER-CEO.md 02-PACK-DIANA-CREATORS.md \
  03-PACK-BRIAN-FINANCE.md 04-PACK-TANYA-COMMUNITY.md 05-PACK-SAMUEL-TECH.md \
  05-documento-maestro-alexander.md 06-PACK-VALENTINA-EDITOR.md \
  EXECUTIVE-SUMMARY.md web/content/
git commit -m "chore: purge UGC Colombia legacy content post-rebrand"
```

También revisar `supabase/`, `remotion/` y `scripts/` antes de eliminar (pueden contener lógica reutilizable).

---

## Licencia

Propietario. Todos los derechos reservados © 2026 Live Cake.
