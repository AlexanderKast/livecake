"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { useCountUp } from "@/hooks/use-count-up";

export function SobreNumeros() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });

  const v1 = useCountUp({ end: 32, trigger: isIntersecting });
  const v2 = useCountUp({ end: 27.2, decimals: 1, trigger: isIntersecting });
  const v3 = useCountUp({ end: 30, trigger: isIntersecting });
  const v4 = useCountUp({ end: 40, trigger: isIntersecting });
  const v5 = useCountUp({ end: 112, trigger: isIntersecting });

  const STATS = [
    {
      display: `USD ${v1}B`,
      description: "Proyección mercado live commerce LATAM 2033",
      source: "Grand View Research",
    },
    {
      display: `${v2}%`,
      description: "Tasa de crecimiento anual del mercado LATAM",
      source: "Grand View Research · 2024",
    },
    {
      display: `${v3}%`,
      description: "Conversión promedio en live shopping",
      source: "McKinsey & Company",
    },
    {
      display: `−${v4}%`,
      description: "Reducción de devoluciones vs ecommerce tradicional",
      source: "Coresight Research · Immerss",
    },
    {
      display: `USD ${v5}B`,
      description: "GMV proyectado TikTok Shop global 2026",
      source: "The Information · 2025",
    },
    {
      display: "10 días",
      description: "De contrato a sistema funcionando en vivo",
      source: "Proceso LiveCake",
    },
  ];

  return (
    <section
      id="numeros"
      aria-labelledby="numeros-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(22,163,74,0.04), transparent 70%)",
        }}
      />

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            El mercado
          </span>
          <h2
            id="numeros-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-neutral-900 tracking-tight uppercase mb-4"
          >
            El mercado que estamos{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #15803d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              liderando
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 leading-relaxed">
            No inventamos el live shopping. Lo trajimos a donde el mercado aún
            no llegó — y llegamos primero.
          </p>
        </motion.div>

        {/* Grid de datos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STATS.map((item, i) => (
            <motion.div
              key={item.description}
              initial={{ opacity: 0, y: 24 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-brand-green/20 transition-all duration-300"
            >
              <p
                className="font-display text-[clamp(2rem,5vw,3rem)] leading-none tabular-nums"
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.display}
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed flex-1">
                {item.description}
              </p>
              <p className="text-[10px] text-neutral-400 font-sans tracking-wide">
                {item.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
