"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";

type DolorBloque = {
  dato: string;
  titulo: string;
  descripcion: string;
  fuente: string;
};

const BLOQUES: DolorBloque[] = [
  {
    dato: "3%",
    titulo: "Conversión de una landing page",
    descripcion:
      "El visitante llega, ve una imagen estática, duda y se va. No hay interacción. No hay confianza. No hay venta.",
    fuente: "Mediana global · Unbounce Q4 2025 · 464M visitas analizadas",
  },
  {
    dato: "< 60 seg",
    titulo: "Tiempo promedio en una landing page",
    descripcion:
      "El usuario moderno de LATAM llega con más escepticismo que nunca. La confianza digital cayó 20 puntos entre 2022 y 2024.",
    fuente: "América's Market Intelligence · 2024",
  },
  {
    dato: "15–30%",
    titulo: "Tasa de devolución en dropshipping LATAM",
    descripcion:
      "El cliente compra por impulso sin certeza del producto. El live shopping reduce las devoluciones hasta un 40% porque el comprador ya vio el producto en acción.",
    fuente: "Talkyria · Coresight Research · 2025",
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

      {/* Red glow sutil de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(220,38,38,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Imagen hero editorial de fondo */}
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
            El ecommerce tradicional tiene un problema de conversión
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-500 leading-relaxed">
            Cada día que usas una landing page estás dejando el 27% de tus
            ventas potenciales sobre la mesa.
          </p>
        </motion.div>

        {/* 3 bloques de dolor */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {BLOQUES.map((bloque, i) => (
            <motion.div
              key={bloque.titulo}
              initial={{ opacity: 0, y: 32 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.08 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:border-brand-green/40 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(22,163,74,0.20)] flex flex-col"
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

              {/* Dato grande */}
              <p
                className="font-display text-[clamp(3rem,7vw,5rem)] leading-none mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.9) 0%, rgba(220,38,38,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {bloque.dato}
              </p>

              {/* Título */}
              <h3 className="text-neutral-900 text-base sm:text-lg font-sans font-semibold leading-tight mb-3">
                {bloque.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-neutral-500 leading-relaxed flex-grow mb-5">
                {bloque.descripcion}
              </p>

              {/* Fuente */}
              <p className="text-[10px] text-neutral-400 font-sans tracking-wide pt-4 border-t border-neutral-100">
                {bloque.fuente}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
