"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { TrendingUp, Sparkles, ShoppingBag, Layers } from "lucide-react";

type Metrica = { label: string; value: string; desc: string };
type Caso = {
  id: string;
  tag: string;
  icon: typeof TrendingUp;
  image: string;
  imageAlt: string;
  title: React.ReactNode;
  desc: string;
  metricas: readonly Metrica[];
  sourceLabel?: string;
  sourceUrl?: string;
};

/**
 * Casos de live commerce LATAM citables del market-stats.json.
 * Fuentes: magalu-bf-2024, vtex-live-uplift, beauty-retailer-conversion.
 */
const CASOS: readonly Caso[] = [
  {
    id: "magalu",
    tag: "LIVE COMMERCE · BRASIL",
    icon: TrendingUp,
    image: "/brand/casos/caso-skincare.png",
    imageAlt: "Live commerce a escala en LATAM",
    title: (
      <>
        Magalu Black Friday:{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #16a34a, #15803d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          USD 240M+ en un día.
        </span>
      </>
    ),
    desc: "Magazine Luiza opera Magalu Live desde 2020. En Black Friday 2024 generó más de USD 240M en ventas en un solo día de transmisión en vivo. El live commerce ya no es experimento — es el canal principal de revenue.",
    metricas: [
      { label: "VENTAS", value: "$240M+", desc: "USD en un solo día (BF 2024)" },
      { label: "CANAL", value: "Live", desc: "Magalu Live desde 2020" },
      { label: "MERCADO", value: "BR", desc: "Tercer país LATAM en live" },
    ],
    sourceLabel: "ecommerceupdate.org",
    sourceUrl: "https://www.ecommerceupdate.org/en/highlight/americanas-e-magalu-anunciam-parceria-estrategica-para-e-commerce/",
  },
  {
    id: "vtex",
    tag: "E-COMMERCE · LATAM",
    icon: ShoppingBag,
    image: "/brand/casos/caso-moda.png",
    imageAlt: "Plataforma live commerce para retailers LATAM",
    title: (
      <>
        VTEX clients:{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #16a34a, #15803d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          +40% de órdenes.
        </span>
      </>
    ),
    desc: "Clientes de VTEX en LATAM registraron +40% de órdenes completadas durante eventos live vs períodos equivalentes sin live. El canal amplifica directamente las ventas sin cambiar el producto.",
    metricas: [
      { label: "ÓRDENES", value: "+40%", desc: "durante eventos live" },
      { label: "REGIÓN", value: "LATAM", desc: "múltiples países" },
      { label: "PLATAFORMA", value: "VTEX", desc: "via yavendio" },
    ],
    sourceLabel: "VTEX / yavendio",
    sourceUrl: "https://www.yavendio.com/en/blog/live-commerce-latam-estadisticas",
  },
  {
    id: "beauty",
    tag: "BELLEZA · BRASIL",
    icon: Layers,
    image: "/brand/casos/caso-saas.png",
    imageAlt: "Retailer de belleza con live shopping de alta conversión",
    title: (
      <>
        Retailer de belleza:{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #16a34a, #15803d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          30% de conversión.
        </span>
      </>
    ),
    desc: "Retailer brasileño de belleza logró 30% de conversión viewer→purchase en live — aproximadamente 10 veces su ecommerce estándar. La demostración de producto en vivo elimina la duda de compra.",
    metricas: [
      { label: "CONV.", value: "30%", desc: "viewer → purchase" },
      { label: "VS ECOM", value: "~10×", desc: "vs ecommerce estándar" },
      { label: "VERTICAL", value: "Belleza", desc: "Brasil 2025" },
    ],
    sourceLabel: "yavendio",
    sourceUrl: "https://www.yavendio.com/en/blog/live-commerce-latam-estadisticas",
  },
] as const;

export function Casos() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });

  const [destacado, ...resto] = CASOS;
  const IconoDestacado = destacado.icon;

  return (
    <section
      id="casos"
      aria-labelledby="casos-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-5"
        >
          <p className="sr-only">Casos de live commerce en LATAM</p>
          <h2
            id="casos-title"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-neutral-900 tracking-tight"
          >
            El live commerce ya funciona en LATAM.
          </h2>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-neutral-500 text-sm sm:text-base font-sans max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed"
        >
          Datos citables de mercado 2024-2025. Hasta tener nuestros propios pilotos
          publicados, aquí están los referentes del sector que validan{" "}
          <span className="text-neutral-900 font-semibold">por qué el live convierte más</span>.
        </motion.p>

        {/* Caso destacado */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden border border-brand-green/25 bg-gradient-to-br from-brand-green/4 to-transparent mb-5"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 100% 0%, rgba(22,163,74,0.12), transparent 65%)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-neutral-100">
              <Image
                src={destacado.image}
                alt={destacado.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/60"
              />
              <div
                aria-hidden="true"
                className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(22,163,74,0.25), rgba(22,163,74,0.1))",
                  border: "1px solid rgba(22,163,74,0.35)",
                }}
              >
                <IconoDestacado
                  className="h-5 w-5 text-brand-green"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-flex self-start items-center mb-5 text-xs font-sans font-bold tracking-widest uppercase bg-brand-green/10 text-brand-green border border-brand-green/25 px-3 py-1.5 rounded-full">
                {destacado.tag}
              </span>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-tight mb-3">
                {destacado.title}
              </h3>

              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-7">
                {destacado.desc}
              </p>

              {destacado.sourceLabel && destacado.sourceUrl && (
                <p className="text-[11px] text-neutral-400 mb-4">
                  Fuente:{" "}
                  <a
                    href={destacado.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-brand-green transition-colors"
                  >
                    {destacado.sourceLabel}
                  </a>
                </p>
              )}

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {destacado.metricas.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-neutral-50 border border-brand-green/15 p-3 sm:p-4 text-center"
                  >
                    <p
                      className="font-display text-lg sm:text-2xl leading-tight mb-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, #16a34a, #15803d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {m.value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-neutral-500 font-sans leading-tight">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Casos secundarios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {resto.map((caso, i) => {
            const Icono = caso.icon;
            return (
              <motion.article
                key={caso.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-2xl border border-brand-green/20 bg-neutral-900 overflow-hidden flex flex-col min-h-[380px]"
              >
                <Image
                  src={caso.image}
                  alt={caso.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover opacity-55"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/85 to-brand-black/40"
                />
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 100% 0%, rgba(22,163,74,0.12), transparent 70%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(22,163,74,0.18), rgba(22,163,74,0.08))",
                        border: "1px solid rgba(22,163,74,0.25)",
                      }}
                    >
                      <Icono
                        className="h-5 w-5 text-brand-green"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase text-brand-green">
                      {caso.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-white leading-tight mb-2">
                    {caso.title}
                  </h3>

                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed mb-3">
                    {caso.desc}
                  </p>

                  {caso.sourceLabel && caso.sourceUrl && (
                    <p className="text-[10px] text-brand-gray/50 mb-4">
                      Fuente:{" "}
                      <a
                        href={caso.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-brand-green transition-colors"
                      >
                        {caso.sourceLabel}
                      </a>
                    </p>
                  )}

                  <div className="grid grid-cols-3 gap-2 mt-auto">
                    {caso.metricas.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg bg-white/[0.08] border border-brand-green/20 p-2.5 text-center"
                      >
                        <p
                          className="font-display text-base sm:text-lg leading-tight mb-0.5"
                          style={{
                            background:
                              "linear-gradient(135deg, #22c55e, #16a34a)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {m.value}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-brand-gray font-sans leading-tight">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Disclaimer metodológico */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[11px] sm:text-xs text-neutral-400 font-sans max-w-3xl mx-auto mt-10 leading-relaxed"
        >
          Datos de mercado 2024-2025 con fuentes públicas verificables (Grand View Research, McKinsey, VTEX, yavendio, ecommerceupdate.org).
          Los resultados propios de clientes Live Cake se publicarán cuando los pilotos estén completados.
        </motion.p>
      </div>
    </section>
  );
}
