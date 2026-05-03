"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";

const MARKET_STATS = [
  {
    stat: "USD 240M+",
    context:
      "Magalu generó en un solo día de Black Friday usando live shopping — sin un solo vendedor humano atendiendo en tiempo real.",
    source: "Magalu · Black Friday 2024",
  },
  {
    stat: "USD 6B+",
    context:
      "Whatnot cerró 2025 con más de 6 mil millones de dólares en ventas generadas exclusivamente a través de lives de compra en vivo.",
    source: "Whatnot · Annual Report 2025",
  },
  {
    stat: "27.2%",
    context:
      "El mercado de live commerce en LATAM crece a esta tasa anual — de USD 3.87B en 2024 a USD 32.08B proyectados para 2033.",
    source: "Grand View Research · 2024",
  },
];

export function PreciosTestimonial() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      ref={ref}
      id="mercado"
      aria-labelledby="mercado-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(22,163,74,0.05), transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            Lo que está pasando en el mercado
          </span>
          <h2
            id="mercado-title"
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-neutral-900 tracking-tight uppercase"
          >
            El live commerce no es{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #15803d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              el futuro — es ahora.
            </span>
          </h2>
        </motion.div>

        {/* 3 bloques de datos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {MARKET_STATS.map((item, i) => (
            <motion.div
              key={item.stat}
              initial={{ opacity: 0, y: 24 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col gap-4 shadow-sm"
            >
              <p
                className="font-display text-[clamp(2rem,5vw,3rem)] leading-none"
                style={{
                  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.stat}
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed flex-1">
                {item.context}
              </p>
              <p className="text-[10px] text-neutral-400 font-sans tracking-wide">
                {item.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contexto LiveCake */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl bg-neutral-900 p-6 sm:p-8 text-center"
        >
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            LiveCake trae esta tecnología a marcas medianas en LATAM — sin los
            recursos de Magalu ni el equipo de Whatnot.{" "}
            <span className="text-white font-semibold">
              Solo el sistema, la tecnología Pancake y 10 días de implementación.
            </span>
          </p>
        </motion.div>

        {/* Placeholder testimonios propios */}
        {/* TESTIMONIOS PROPIOS — Reemplazar cuando estén disponibles los casos de los clientes piloto */}
      </div>
    </section>
  );
}
