"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import {
  TrendingDown,
  Repeat,
  PackageX,
  Sparkles,
  Compass,
  Globe2,
  Timer,
  DollarSign,
} from "lucide-react";

type Problema = {
  num: string;
  icon: React.ElementType;
  title: string;
  text: string;
};

/**
 * Dolores reales del mercado DTC/ecommerce con live shopping en 2026.
 * Datos de market-stats.json: conversion-live-vs-ecom (30% vs 3%), returns-reduction (-40%).
 */
const PROBLEMAS: Problema[] = [
  {
    num: "01",
    icon: TrendingDown,
    title: "Tu landing convierte al 3%",
    text: "El ecommerce tradicional promedia 3% de conversión. Un live bien ejecutado convierte al 30% — hasta 10 veces más. Tu tráfico pagado merece mejor destino. (Fuente: McKinsey)",
  },
  {
    num: "02",
    icon: Timer,
    title: "El dwell time cae antes de los 60 segundos",
    text: "Un visitante típico de ecom toma menos de 60 segundos para decidir si se queda o se va. Un live retiene al 60%+ de la audiencia hasta los 10 minutos. (Fuente: Immerss)",
  },
  {
    num: "03",
    icon: PackageX,
    title: "Las devoluciones se comen tu margen",
    text: "Los compradores en ecom devuelven entre 20-30% de los pedidos. En live shopping esa tasa baja al 10-15% porque el cliente vio el producto en uso real antes de comprar. (Fuente: Coresight + Immerss)",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "TikTok Live nativo no es una opción viable",
    text: "Correr un live 24/7 en TikTok Live nativo con video pre-grabado viola sus políticas. Pancake es el único partner oficial que lo hace legal y aprobado por Meta, TikTok y Google.",
  },
  {
    num: "05",
    icon: Compass,
    title: "Tu competencia ya llegó al live commerce",
    text: "Magalu facturó USD 240M+ en un solo día de Black Friday con live. VTEX registró +40% de órdenes durante eventos live en LATAM. El canal ya existe — ¿tu marca está en él?",
  },
  {
    num: "06",
    icon: Globe2,
    title: "El mercado LATAM crece al 27.2% anual",
    text: "El live commerce en LATAM pasará de USD 3.87B en 2024 a USD 32.08B en 2033 (CAGR 27.2%). Las marcas que entren hoy capturan posición de mercado antes del pico. (Fuente: Grand View Research)",
  },
  {
    num: "07",
    icon: Repeat,
    title: "El 34% de las compras pasan después del live",
    text: "El live no solo vende durante la transmisión. El 34% de las compras se concretan horas o días después, cuando el viewer revisita la grabación o el link del producto. (Fuente: Immerss)",
  },
  {
    num: "08",
    icon: DollarSign,
    title: "El ticket promedio sube 10-30% en live",
    text: "El bundling y el upselling en vivo — 'agrega este producto y te queda mejor' — elevan el ticket promedio entre 10% y 30% vs el mismo producto en ecom estático. (Fuente: Immerss)",
  },
];

export function Problema() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Noise texture overlay sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Red glow sutil de fondo para contexto emocional */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(220,38,38,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Imagen editorial de fondo */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-full lg:w-1/2 h-[50%] lg:h-full pointer-events-none opacity-[0.18]"
      >
        <Image
          src="/brand/home/problema.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-neutral-50/60 to-neutral-50" />
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/10 text-brand-green border border-brand-green/30">
            ¿Te suena familiar?
          </span>
          <h2
            id="problema-title"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-neutral-900 tracking-tight"
          >
            ¿Por qué el ecommerce ya no alcanza?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-500 leading-relaxed">
            Los 8 problemas que el live shopping resuelve directamente, con datos
            reales del mercado LATAM 2024-2026. Si al menos 3 te resuenan, estás
            en el lugar correcto.
          </p>
        </motion.div>

        {/* Grid de 8 dolores: 1 col mobile / 2 tablet / 4 desktop (2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROBLEMAS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 32 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:p-7 overflow-hidden transition-all duration-300 hover:border-brand-green/40 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(22,163,74,0.20)] flex flex-col h-full"
              >
                {/* Gradient border on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    padding: "1px",
                    background:
                      "linear-gradient(135deg, rgba(22,163,74,0.4), rgba(22,163,74,0.12), transparent 60%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Header: número + icono */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-display text-3xl sm:text-4xl leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(22,163,74,0.9) 0%, rgba(22,163,74,0.4) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center group-hover:bg-brand-green/10 group-hover:border-brand-green/40 transition-colors">
                    <Icon
                      className="h-4 w-4 text-neutral-400 group-hover:text-brand-green transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-neutral-900 text-base sm:text-lg leading-tight font-sans font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Texto descriptivo */}
                <p className="text-sm text-neutral-500 leading-relaxed flex-grow">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar — datos reales del mercado (market-stats.json) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 sm:mt-12 rounded-2xl border border-brand-green/20 bg-gradient-to-br from-brand-green/5 via-white to-white overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(22,163,74,0.08), transparent 70%)",
            }}
          />
          <div className="relative p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <p
                className="font-display text-4xl sm:text-5xl leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a, #15803d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                30%
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                conversión live shopping vs 3% ecommerce tradicional
              </p>
            </div>
            <div>
              <p
                className="font-display text-4xl sm:text-5xl leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a, #15803d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                60%+
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                retención de audiencia a los 10 minutos de live
              </p>
            </div>
            <div>
              <p
                className="font-display text-4xl sm:text-5xl leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a, #15803d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                -40%
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                devoluciones vs ecommerce estático (10-15% vs 20-30%)
              </p>
            </div>
            <div>
              <p
                className="font-display text-4xl sm:text-5xl leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a, #15803d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                34%
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 leading-snug">
                de compras ocurren después del live — efecto cola larga
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
