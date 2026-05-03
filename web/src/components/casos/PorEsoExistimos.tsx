"use client";

import { motion } from "motion/react";
import { X, Check } from "lucide-react";

const CONTRASTS = [
  {
    sin: "Landing page estática que convierte al 3%",
    con: "Live 24/7 que convierte al 20–30% (McKinsey)",
  },
  {
    sin: "WhatsApp manual que no da abasto",
    con: "Botcake que captura y confirma pedidos solo",
  },
  {
    sin: "Devoluciones del 15–30% por compra sin certeza",
    con: "−40% devoluciones porque el comprador vio el producto en vivo",
  },
  {
    sin: "Solo vendes cuando lanzas o cuando tienes energía",
    con: "El sistema vende mientras tú escales el siguiente producto",
  },
];

export function PorEsoExistimos() {
  return (
    <section
      aria-labelledby="por-eso-heading"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Glow sutil */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(22,163,74,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-6 bg-brand-green/15 text-brand-green border border-brand-green/40">
            La diferencia
          </span>
          <h2
            id="por-eso-heading"
            className="font-display text-neutral-900 text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight mb-5"
          >
            Por eso existe LiveCake
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-500 text-base sm:text-lg leading-relaxed">
            No somos una agencia de marketing más. Somos el sistema que convierte
            el canal de live shopping en tu mejor vendedor — uno que nunca se cansa,
            nunca pide vacaciones y opera 24 horas los 7 días de la semana.
          </p>
        </motion.div>

        {/* Grid de contraste: header de columnas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3">
            <div className="bg-neutral-100 rounded-xl px-4 sm:px-6 py-3 border border-neutral-200">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 font-sans">
                <X className="h-3.5 w-3.5 text-red-400" aria-hidden />
                Sin LiveCake
              </span>
            </div>
            <div className="bg-brand-green/10 rounded-xl px-4 sm:px-6 py-3 border border-brand-green/25">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green font-sans">
                <Check className="h-3.5 w-3.5" aria-hidden />
                Con LiveCake
              </span>
            </div>
          </div>

          {/* Filas de contraste */}
          <div className="flex flex-col gap-2 sm:gap-3">
            {CONTRASTS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                {/* SIN */}
                <div className="flex items-start gap-3 bg-neutral-50 border border-neutral-200 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
                  <X
                    className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5"
                    aria-hidden
                    strokeWidth={2.5}
                  />
                  <p className="text-sm sm:text-base text-neutral-600 leading-snug">
                    {row.sin}
                  </p>
                </div>
                {/* CON */}
                <div className="flex items-start gap-3 bg-brand-green/5 border border-brand-green/20 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
                  <Check
                    className="h-4 w-4 text-brand-green flex-shrink-0 mt-0.5"
                    aria-hidden
                    strokeWidth={2.5}
                  />
                  <p className="text-sm sm:text-base text-neutral-700 font-medium leading-snug">
                    {row.con}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contexto tecnológico: Pancake */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 bg-neutral-900 rounded-2xl p-6 sm:p-8 lg:p-10"
        >
          <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-brand-green mb-4">
            ¿Por qué Pancake y no otro sistema?
          </p>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Pancake es el único partner oficial de Meta, TikTok y Google para live
            commerce en LATAM. Los lives de LiveCake no corren en TikTok Live ni
            Facebook Live nativos — corren sobre Pancake, embebidos en tu dominio.
            Eso es lo que permite operar 24/7 con respaldo oficial de las
            plataformas.{" "}
            <span className="text-white font-semibold">
              Es el único sistema aprobado para live commerce continuo en la región.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
