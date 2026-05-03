# LiveCake — Ultraplan de reposicionamiento (live shopping + falsos lives)

**Fecha:** 30 abril 2026
**Owner:** Alexander Cast
**Estado:** En ejecución (F0 → F5)

---

## Encuadre central

Live Cake monta sistemas de **live shopping + falsos lives 24/7** sobre **Pancake**, el único partner oficial de **Meta + TikTok + Google** para live commerce en LATAM.

- Los lives **no se publican nativos en TikTok Live ni Meta Live**.
- Corren sobre Pancake, embebidos en el dominio del cliente vía WebCake.
- Los ads en Meta/TikTok llevan tráfico al live de Pancake.
- El partnership oficial es el **moat defensible** vs cualquier agencia tradicional o creador freelance.

---

## 1. Investigación de mercado — datos citables (al 30 abr 2026)

Persistidos en `web/src/data/market-stats.json`. 22 cifras categorizadas en `market-size`, `performance`, `platform`, `latam`, `case-study`, `ads`, `compliance`. Fuentes: McKinsey, FMI, Grand View Research, Coresight, Immerss, eMarketer, The Information, ECDB, 36Kr, Marketmaze, m2ecloud, yavendio, VTEX, Bunker DB, Consolidación Digital.

**Top-of-mind para landing:**
- Mercado LATAM **USD 3.87B → USD 32.08B en 2033** (CAGR **27.2%**) — Grand View
- Conversión **30% live vs 3% ecom** — McKinsey
- Retención **≥60% en 10 min** — Immerss
- Devoluciones **-40%** vs ecom — Coresight + Immerss
- TikTok Shop GMV global 2025: **USD 66B** → 2026 USD 112.2B
- Whatnot 2025: **USD 6B+ en ventas**, ~USD 1B revenue
- Magalu BF 2024: **USD 240M+ en un día**

---

## 2. Sitemap final

| Ruta | Estado | Rol funnel |
|---|---|---|
| `/` (Home) | Refactor mayor | TOFU+MOFU |
| `/que-es-falso-live` | **CREAR** | TOFU. Pieza-faro educativa |
| `/diagnostico` | Refresh copy | MOFU. Lead capture |
| `/precios` | Refactor mayor | BOFU |
| `/casos` | Refactor mayor | MOFU |
| `/agendar` | Mantener | BOFU |
| `/checkout` + `/gracias-pago` + `/garantia` | Mantener | Transaccional |
| `/para/dropshippers` | **CREAR** | Avatar Carlos |
| `/para/infoproductores` | **CREAR** | Avatar Valentina |
| `/para/marcas` | **CREAR** | Avatar Rodrigo |
| `/forge`, `/coming-soon/*` | Legacy / desindex | Deuda |

---

## 3. Home reestructurado — secciones en orden

1. **Hero** — mantener headline `"TRANSMISIONES LIVE QUE VENDEN 24/7"`. Añadir micro-trust bar: `Mercado LATAM +27% CAGR` · `30% conversión vs 3%` · `Pancake — Partner oficial Meta + TikTok + Google`.
2. **Qué es un falso live (NUEVA)** — 3 cards: Grabamos un live · Corre en Pancake embebido en tu dominio (no en TikTok Live nativo) · Llevamos tráfico desde Meta/TikTok/Google.
3. **El problema del e-commerce hoy** — landing 3% · dwell <60s · devoluciones 20-30%.
4. **La solución LiveCake** — 30% conv · +60% retención · -40% devoluciones.
5. **Mercado en cifras** — grid con 6 datapoints LATAM con fuente clickable.
6. **Servicios incluidos** — reescribir 8 servicios actuales en términos de qué hacen por el live.
7. **Para quién es** — 3 cards (Dropshipper / Infoproductor / Marca) que linkean a `/para/*`.
8. **Casos / prueba social** — Magalu, Whatnot, VTEX clients hasta tener pilotos propios.
9. **Cómo funciona en 10 días** — onboarding → setup → live → optimización.
10. **Precios resumidos** — Starter / Growth / Elite con CTA a `/precios`.
11. **FAQ** — incluir: ¿Qué es Pancake?, ¿Corre en TikTok o Meta?, Diferencia con Bambuser/CommentSold, ¿Cuenta de Pancake aparte?
12. **CTA final** — diagnóstico gratuito 20 min.

---

## 4. Página `/que-es-falso-live` (pieza-faro)

Long-form 1500-2000 palabras con anchors:
1. Hero: *"Tu landing convierte al 3%. Un live convierte al 30%. ¿Y si tu live nunca parara?"*
2. Definición técnica: video pregrabado + chat simulado + checkout, **corre en Pancake**.
3. Diferencia con un live real (5 puntos).
4. Por qué es legítimo: Pancake es partner oficial Meta + TikTok + Google. Conversion API y SDKs aprobados. **Única vía partner-aprobada para correr live commerce 24/7 en LATAM**.
5. Diferencia con TikTok Live nativo: TikTok Live es para creadores en directo; Pancake es para marcas con conversión continua. Complementarios, no sustitutos.
6. Anatomía de un falso live LiveCake (componentes: video YouTube oculto, comentarios simulados con timing por minuto, Botcake WhatsApp, Postcake CRM, Conversion API).
7. Casos por avatar (mini-resúmenes que linkean a `/para/*`).
8. CTA → diagnóstico.

---

## 5. `/precios` — estructura final

| Plan | Lives A/B/mes | Optimizaciones | Mensual | Setup |
|---|---|---|---|---|
| Starter | 2 | 2 | $599 | $1,400 |
| Growth ⭐ | 8 (2/sem) | 4 | $999 | $1,800 |
| Pro | 16 (día por medio) | 8 | $1,699 | $2,200 |
| Elite | 31 (diario) | Ilimitadas | $2,799 | $3,000 |

Todos incluyen suite Pancake completa: WebCake + LiveCake + Botcake + CRM + Postcake + Conversion API + 1 integración (Hotmart/Dropi/Hoco/Gintracom según plan, ilimitadas en Pro/Elite).

Calculadora payback: input ticket promedio + ventas extra/mes → break-even.

---

## 6. `/casos` — refactor

Sustituir "dolores genéricos UGC" en `web/src/components/casos/dolores-data.ts` por 3 avatares LATAM:

| Avatar | Dolores cuantificados | Mensaje gancho |
|---|---|---|
| **Carlos · Dropshipper** | Devoluciones 15-30%, ROAS 1.5x, WhatsApp manual | "Tu landing convierte al 3%. Un live al 20%. ¿Cuántas ventas pierdes al día?" |
| **Valentina · Infoproductora** | Webinars saturados, ingresos solo en lanzamiento | "Tu curso vendiendo mientras tú duermes." |
| **Rodrigo · Marca** | Comisiones marketplaces 15-25%, sin canal propio | "Tu marca en vivo sin pagar comisión." |

---

## 7. `/para/{dropshippers,infoproductores,marcas}` — 3 landings

Estructura por página:
- Hero con dolor específico del avatar
- 3 dolores cuantificados con cifra
- Cómo LiveCake lo resuelve (3 pasos)
- Mini-stack visual del sistema (WebCake + LiveCake + Botcake + Postcake)
- Testimonio o caso (placeholder hasta pilotos)
- CTA a diagnóstico

---

## 8. Plan de migración — 5 fases

| # | Fase | Esfuerzo | Bloqueante |
|---|---|---|---|
| F0 | Persistir ultraplan + data file | 0.5d | — |
| F1 | Limpieza UGC residual (35 menciones) | 1d | — |
| F2 | Refactor Home con secciones nuevas | 2d | F1 + F0 |
| F3 | `/que-es-falso-live` pieza-faro | 1d | F0 |
| F4 | `/precios` + `/casos` refactor | 2d | F1 |
| F5 | 3 landings de avatar `/para/*` | 2d | F3 |

**Total:** ~8 días-persona.

---

## 9. Decisiones tomadas (vs ultraplan v1)

| # | Decisión | Resolución |
|---|---|---|
| R1 | Encuadre del falso live | **Pancake-only.** Partner oficial Meta + TikTok + Google. NO se replica en TikTok Live ni Meta Live nativos. Esto es el ángulo central de venta. |
| R2 | Mostrar precios USD públicos | **Sí.** Reduce fricción y filtra leads no-fit. |
| R3 | Pieza-faro antes o después de caso propio | **Antes.** El que educa primero gana SEO en LATAM. |
| R4 | Datos hardcoded vs JSON | **JSON** en `web/src/data/market-stats.json`. |
| R5 | `/forge` y `/coming-soon/*` | **Mover a legacy + noindex**, no borrar. |
| R6 | Brand voice serio (Playfair) vs actual (verde tech) | **Mantener actual** (Inter + brand-green). Subir peso con datos reales. |
| R7 | Brasil/PT-BR | **Solo ES-CO ahora.** PT-BR es proyecto separado mes 2-3. |

---

## 10. Fuera de alcance

- Live embebido real en home (dogfooding) — requiere cuenta Pancake activa.
- Rediseño visual de tokens — sistema actual está bien.
- SEO técnico avanzado (schema, sitemap, hreflang) — fase aparte después de F5.
- Email marketing / nurture sequences — aparte.
- Tracking GA4/Meta CAPI — auditoría aparte (asume `lib/tracking/` ya en producción).
- Streaming a TikTok Live o Facebook Live nativo — fuera del producto core.

---

## 11. Riesgos abiertos

| Riesgo | Mitigación |
|---|---|
| Datos del JSON quedan obsoletos | Field `lastUpdated` + revisión trimestral. Una sola fuente de verdad. |
| Casos propios no llegan en 60 días | Plan B: usar casos LATAM publicados (Magalu, VTEX clients) con el disclaimer "powered by live commerce". |
| TikTok cambia política de Conversion API | Pancake como partner oficial recibe cambios antes que el mercado. |
| Volumen de búsqueda "falso live" en Google es bajo | Pieza-faro orientada a "live shopping Colombia" + "automatizar ventas WhatsApp" + "agencia live shopping LATAM" — keywords con volumen + alta intención. |
