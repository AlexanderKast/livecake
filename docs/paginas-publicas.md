# Páginas públicas — Live Cake
> Mapa de secciones por página, en orden de aparición. Útil como referencia para rediseño.

---

## 1. Home `/`

**Componente:** `web/src/app/page.tsx`
**Descripción:** Página principal. Cubre todo el funnel desde awareness hasta conversión.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `home/Hero` | Headline principal, subhéadline, CTA primario (diagnóstico o agendar) |
| 2 | **Social Proof Bar** | `home/SocialProofBar` | Barra de logos de clientes o métricas de credibilidad |
| 3 | **Marcas** | `home/Marcas` | Logo bar o grid de marcas con las que se ha trabajado |
| 4 | **Problema** | `home/Problema` | Identificación del dolor: por qué el ecommerce tradicional falla |
| 5 | **Solución** | `home/Solucion` | Propuesta de valor: el falso live 24/7 sobre Pancake como respuesta |
| 6 | **Servicios** | `home/Servicios` | Vista rápida de las líneas de servicio |
| 7 | **Video Samples** | `home/VideoSamples` | Galería de ejemplos de lives producidos (carga con Suspense/skeleton) |
| 8 | **Casos** | `home/Casos` | Casos de éxito en formato condensado (avatares o resultados) |
| 9 | **Aliados** | `home/Aliados` | Logos de partners tecnológicos (Pancake, Meta, TikTok, Google) |
| 10 | **Pricing** | `home/Pricing` | Resumen de planes con precios y CTAs |
| 11 | **Video Testimonios** | `home/VideoTestimonios` | Testimonios en video de clientes |
| 12 | **FAQ** | `home/FAQ` | Preguntas frecuentes (datos desde `lib/data/home-faq.ts`) |
| 13 | **CTA Final** | `home/CTAFinal` | Bloque de cierre con CTA de diagnóstico o llamada |

---

## 2. Servicios `/servicios`

**Componente:** `web/src/app/servicios/page.tsx`
**Descripción:** Página de servicios detallada. Tres secciones lineales.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `servicios/ServiciosHero` | Titular de la página, intro a las líneas de servicio |
| 2 | **Detalle** | `servicios/ServiciosDetalle` | Desglose completo de cada servicio ofrecido (9 líneas: UGC, estrategia, audiovisual premium, consultoría, creadores, IA + dev, contenido generativo, diseño web, landing pages) |
| 3 | **FAQ** | `servicios/ServiciosFAQ` | Preguntas frecuentes sobre servicios (datos desde `lib/data/servicios-faq.ts`) |

---

## 3. Precios `/precios`

**Componente:** `web/src/app/precios/page.tsx`
**Descripción:** Página de precios completa con 8 secciones de soporte a la decisión.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `precios/PreciosHero` | Titular de precios, propuesta de valor resumida |
| 2 | **Plans** | `precios/PreciosPlans` | Cards de los 4 planes: Starter $599, Growth $999, Pro $1,699, Elite $2,799 (con switcher de moneda) |
| 3 | **Guarantee Section** | `precios/GuaranteeSection` | Bloque que comunica la garantía de performance incluida en todos los planes |
| 4 | **Comparison** | `precios/PreciosComparison` | Tabla comparativa entre planes (features por plan) |
| 5 | **Calculator** | `precios/PreciosCalculator` | Calculadora de ROI o comparación de costo vs. comisión de marketplace |
| 6 | **Testimonial** | `precios/PreciosTestimonial` | Testimonio de cliente reforzando la decisión de compra |
| 7 | **FAQ** | `precios/PreciosFAQ` | Preguntas frecuentes sobre precios, ciclos de pago, garantía (datos desde `lib/data/precios-faq.ts`) |
| 8 | **CTA Final** | `precios/PreciosCTA` | Bloque de cierre con CTA a diagnóstico o checkout |

---

## 4. Casos `/casos`

**Componente:** `web/src/app/casos/page.tsx`
**Descripción:** Página narrativa de casos de uso. Usa 3 avatares reales (Carlos, Valentina, Rodrigo) para mostrar dolores específicos.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `casos/CasosHero` | Titular, intro al enfoque por avatares de cliente |
| 2 | **Dolores** | `casos/DolorBlock` | Lista de los dolores específicos de cada avatar (devoluciones, ingresos estacionales, comisiones de marketplace) |
| 3 | **Por Eso Existimos** | `casos/PorEsoExistimos` | Conexión entre los dolores y la propuesta de valor de Live Cake |
| 4 | **CTA Final** | `casos/CasosCTAFinal` | CTA de cierre hacia diagnóstico o contacto |

---

## 5. ¿Qué es un falso live? `/que-es-falso-live`

**Componente:** `web/src/app/que-es-falso-live/page.tsx`
**Descripción:** Artículo educativo de largo aliento. La página más informativa del sitio. Indexada como Article + FAQPage.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `que-es-falso-live/Hero` | Titular del artículo, definición en 1 oración, CTA a diagnóstico |
| 2 | **Mercado y Cifras** | `que-es-falso-live/MercadoCifras` | Datos del mercado live commerce (McKinsey: 30% vs 3% de conversión) |
| 3 | **Definición** | `que-es-falso-live/Definicion` | Qué es exactamente un falso live, cómo funciona técnicamente |
| 4 | **Diferencias** | `que-es-falso-live/Diferencias` | Diferencias clave entre falso live vs. live nativo vs. ecommerce tradicional |
| 5 | **Por Qué Es Legítimo** | `que-es-falso-live/PorQueLegitimo` | Explica por qué no viola TOS de Meta/TikTok (Pancake = partner oficial) |
| 6 | **Vs. TikTok Live** | `que-es-falso-live/VsTikTokLive` | Comparación directa con TikTok Live nativo, son complementarios |
| 7 | **Anatomía** | `que-es-falso-live/Anatomia` | Desglose visual de los componentes de un falso live (presentador, CTAs, comentarios) |
| 8 | **Casos por Avatar** | `que-es-falso-live/CasosPorAvatar` | Casos de uso según tipo de negocio (marca, dropshipper, infoproductor) |
| 9 | **CTA Final** | `que-es-falso-live/CTAFinalPage` | CTA de cierre hacia diagnóstico o agendar |

---

## 6. Garantía `/garantia`

**Componente:** `web/src/app/garantia/page.tsx`
**Descripción:** Página legal-comercial de la política de garantía. Sin PageShell, usa Navbar + Footer directamente.

| # | Sección | Notas |
|---|---------|-------|
| 1 | **Hero** | Badge "Garantía de performance" + H1 "Si no rinde, te lo reemplazamos" + párrafo intro |
| 2 | **Cards de métricas** | 3 tarjetas: CTR mínimo ≥ X%, Hook Rate ≥ X%, Reemplazos hasta 30% del paquete |
| 3 | **Cobertura por plan** | Tabla con todos los planes recurrentes (datos desde `lib/pricing-plans.ts`) + fila "A la medida" |
| 4 | **Reglas del juego** | Lista numerada de condiciones de aplicación de la garantía (datos desde `lib/guarantee-policy.ts`) |
| 5 | **Ejemplo práctico** | Bloque verde con ejemplo concreto: Plan Crecimiento, 10 videos, qué pasa si 5 fallan |
| 6 | **CTA final** | Botón "Ver planes con garantía" → `/precios` + nota WhatsApp |

---

## 7. Regalos `/regalos`

**Componente:** `web/src/app/regalos/page.tsx`
**Descripción:** Directorio de proyectos open-source liberados por UGC Colombia × Kreoon. Sin PageShell.

| # | Sección | Notas |
|---|---------|-------|
| 1 | **Hero** | Badge "OPEN SOURCE · MIT" + H1 "Regalos para la comunidad" + descripción |
| 2 | **Proyectos destacados** | Grid 2 columnas de proyectos con `featured: true` del catálogo (`ProjectCard`) |
| 3 | **Todos los proyectos** | Grid 3 columnas del resto del catálogo + contador total |
| 4 | **CTA comunidad** | "No te pierdas los próximos" + `SocialLinks` + mailto para sugerencias |

> **Datos desde:** `web/src/components/shared/projects-catalog.ts`

---

## 8. Para Marcas `/para/marcas`

**Componente:** `web/src/app/para/marcas/page.tsx`
**Descripción:** Landing de segmento para marcas con producto propio. Posicionamiento: salir del marketplace y tener canal propio 24/7.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `para/marcas/HeroMarcas` | Titular segmentado para marcas, dolor de las comisiones 15–25% de marketplace |
| 2 | **Mercado** | `para/marcas/MercadoMarcas` | Cifras del mercado relevantes para marcas (DTC, live commerce) |
| 3 | **Dolores** | `para/marcas/DoloresMarcas` | Dolores específicos: dependencia de Mercado Libre/Amazon, comisiones, datos del cliente |
| 4 | **Solución** | `para/marcas/SolucionMarcas` | Cómo Live Cake resuelve estos dolores (canal propio, Pancake en su dominio) |
| 5 | **Mini Stack** | `para/marcas/MiniStackMarcas` | Stack técnico resumido: Pancake + CRM propio + analytics |
| 6 | **Caso** | `para/marcas/CasoMarcas` | Caso de éxito específico de una marca |
| 7 | **CTA Final** | `para/_shared/AvatarCTAFinal` | CTA de cierre compartido entre todos los segmentos |

---

## 9. Para Dropshippers `/para/dropshippers`

**Componente:** `web/src/app/para/dropshippers/page.tsx`
**Descripción:** Landing de segmento para dropshippers. Posicionamiento: Pancake integrado con Dropi, Hoco y Gintracom.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `para/dropshippers/HeroDropshippers` | Titular para dropshippers, conversión 30% vs 3% del landing |
| 2 | **Mercado** | `para/dropshippers/MercadoDropshippers` | Cifras del mercado dropshipping en LATAM |
| 3 | **Dolores** | `para/dropshippers/DoloresDropshippers` | Dolores: dependencia de un solo producto, margen bajo, competencia de precio |
| 4 | **Solución** | `para/dropshippers/SolucionDropshippers` | Live 24/7 mientras escala el siguiente producto, integrado con Dropi/Hoco/Gintracom |
| 5 | **Mini Stack** | `para/dropshippers/MiniStackDropshippers` | Integraciones con proveedores: Dropi, Hoco, Gintracom |
| 6 | **Caso** | `para/dropshippers/CasoDropshippers` | Caso de éxito de un dropshipper |
| 7 | **CTA Final** | `para/_shared/AvatarCTAFinal` | CTA de cierre compartido |

---

## 10. Para Infoproductores `/para/infoproductores`

**Componente:** `web/src/app/para/infoproductores/page.tsx`
**Descripción:** Landing de segmento para coaches y creadores con curso en Hotmart. Posicionamiento: webinar evergreen 24/7 sin lanzamientos.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `para/infoproductores/HeroInfoproductores` | Titular para infoproductores, "tu curso vendiendo mientras duermes" |
| 2 | **Mercado** | `para/infoproductores/MercadoInfoproductores` | Cifras del mercado de cursos online en LATAM |
| 3 | **Dolores** | `para/infoproductores/DoloresInfoproductores` | Dolores: ingresos solo en lanzamiento, agotamiento del creador, costo de ads en picos |
| 4 | **Solución** | `para/infoproductores/SolucionInfoproductores` | Live del webinar corriendo todos los días, integrado con Hotmart |
| 5 | **Mini Stack** | `para/infoproductores/MiniStackInfoproductores` | Integración Pancake + Hotmart |
| 6 | **Caso** | `para/infoproductores/CasoInfoproductores` | Caso de éxito de un infoproductor |
| 7 | **CTA Final** | `para/_shared/AvatarCTAFinal` | CTA de cierre compartido |

---

## 11. Diagnóstico `/diagnostico` *(funnel)*

**Componente:** `web/src/app/diagnostico/DiagnosticoClient.tsx`
**Descripción:** Quiz AI de diagnóstico de marca. **No indexado** (`robots: noindex`). Entrada al funnel de conversión.

| # | Sección | Notas |
|---|---------|-------|
| 1 | **Quiz interactivo** | Motor de preguntas adaptativas (`lib/quiz-engine.ts`) — determina el perfil del lead |
| 2 | **Análisis AI** | Llama a `/api/quiz-predict` para generar resultado personalizado |
| 3 | **Resultado** | Muestra diagnóstico + CTA a agendar llamada o checkout |

> El resultado personalizado vive en `/diagnostico/[handle]` (DiagnosisPageClient).

---

## 12. Agendar `/agendar` *(funnel)*

**Componente:** `web/src/app/agendar/AgendarClient.tsx`
**Descripción:** Página de agendamiento de llamada. **No indexada por defecto.** Integración con Cal.com o Google Calendar vía API.

| # | Sección | Notas |
|---|---------|-------|
| 1 | **Calendario** | Vista de disponibilidad con slots (conecta con `lib/google-calendar.ts` o `NEXT_PUBLIC_CALCOM_LINK`) |
| 2 | **Formulario** | Datos del lead (nombre, empresa, email, WhatsApp) antes de confirmar slot |
| 3 | **Confirmación** | Redirige a `/gracias` tras agendar |

---

## 13. Forge `/forge` *(lead magnet)*

**Componente:** `web/src/app/forge/page.tsx`
**Descripción:** Landing del producto open-source Content Forge. Sin PageShell, layout propio. Lead magnet de UGC Colombia.

| # | Sección | Componente | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `forge/ForgeHero` | Titular "Un estudio editorial en tu terminal", badge MIT open-source |
| 2 | **Features** | `forge/ForgeFeatures` | Características del pipeline: carruseles, reels, consistencia de personaje, voz configurable |
| 3 | **Proof Gallery** | `forge/ForgeProofGallery` | Galería de ejemplos de contenido generado con Forge |
| 4 | **Who Am I** | `forge/ForgeWhoAmI` | Presentación del equipo UGC Colombia que lo construyó |
| 5 | **FAQ** | `forge/ForgeFAQ` | Preguntas frecuentes sobre Forge |
| 6 | **CTA + Form** | `forge/ForgeLeadForm` (variant `cta`) | Formulario "Déjanos tus datos y empieza hoy" → envía a `/api/lead-forge` |
| 7 | **Footer redes** | `shared/SocialLinks` | Links a redes sociales de UGC Colombia |

---

## Resumen visual del flujo

```
Home → Servicios / Precios / Casos / Que es Falso Live
     ↓
     Para [Marcas / Dropshippers / Infoproductores]
     ↓
     Diagnóstico (quiz AI)  →  /diagnostico/[handle]
     ↓
     Agendar  →  /gracias
                 /gracias-pago

Regalos → Forge (lead magnet) → /forge/gracias
```

## Notas para el rediseño

- **`PageShell`** envuelve la mayoría de páginas (provee Navbar, Footer, breadcrumbs, JSON-LD). Excepciones: `/garantia`, `/regalos`, `/forge` usan su propio layout.
- **Multi-moneda activo** — `CurrencyProvider` detecta el país por geolocalización (`lib/geo/`) y ajusta precios en `/precios`.
- **Todas las páginas `/para/*`** comparten la misma estructura de 7 secciones y el mismo `AvatarCTAFinal`. Son buenas candidatas a un layout compartido.
- **SEO:** Cada página pública tiene `createMetadata()` + JSON-LD. `/que-es-falso-live` tiene 3 schemas: `Article`, `FAQPage` y `BreadcrumbList`.
- **Tracking:** `TrackingScripts` carga GTM, GA4, Meta Pixel, TikTok Pixel, Hotjar, LinkedIn Insight y Bing UET.
