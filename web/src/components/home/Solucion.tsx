"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { TrendingUp, Clock, PackageCheck, ArrowRight } from "lucide-react";

type SolucionBloque = {
  icon: React.ElementType;
  dato: string;
  titulo: string;
  descripcion: string;
  fuente?: string;
};

const BLOQUES: SolucionBloque[] = [
  {
    icon: TrendingUp,
    dato: "30%",
    titulo: "Conversión promedio en live shopping",
    descripcion:
      "Un live convierte 10 veces más que una landing porque hay movimiento, comentarios, prueba social en tiempo real y urgencia genuina. El cerebro compra cuando ve evidencia viva.",
    fuente: "McKinsey & Company",
  },
  {
    icon: Clock,
    dato: "24/7",
    titulo: "El live corre solo, sin que estés presente",
    descripcion:
      "Un video pregrabado corre como transmisión en vivo sobre Pancake. Comentarios simulados con timing exacto. Chatbot de WhatsApp que captura y confirma pedidos. Tú no tocas nada.",
  },
  {
    icon: PackageCheck,
    dato: "−40%",
    titulo: "Reducción de devoluciones",
    descripcion:
      "El comprador que vio el producto en un live, que leyó los comentarios de otros compradores y que recibió respuesta a sus dudas en tiempo real, no devuelve. Compra con certeza.",
    fuente: "Coresight Research + Immerss",
  },
];

type FlujoStep = { label: string; sub: string; highlight?: boolean };

const FLUJO: FlujoStep[] = [
  { label: "Pancake WebCake", sub: "Live embebido en tu dominio" },
  { label: "LiveCake 24/7", sub: "Motor del falso live", highlight: true },
  { label: "Botcake WhatsApp", sub: "Pedidos automáticos" },
  { label: "Pedido confirmado", sub: "Sin fricción, sin staff" },
];

export function Solucion() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <section
      id="solucion"
      aria-labelledby="solucion-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24 bg-white overflow-hidden"
    >
      {/* Imagen editorial de fondo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
      >
        <Image
          src="/brand/home/solucion.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />
      </div>

      {/* Glow central verde */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(22,163,74,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/10 text-brand-green border border-brand-green/30">
            La solución
          </span>
          <h2
            id="solucion-title"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-neutral-900 tracking-tight"
          >
            La solución: un live que vende solo mientras tú escales
          </h2>
          <p className="mt-5 text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            LiveCake monta el sistema completo sobre Pancake — el único partner
            oficial de Meta, TikTok y Google para live commerce en LATAM.
          </p>
        </motion.div>

        {/* 3 bloques de solución */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {BLOQUES.map((bloque, i) => {
            const Icon = bloque.icon;
            return (
              <motion.div
                key={bloque.titulo}
                initial={{ opacity: 0, y: 36 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:border-brand-green/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(22,163,74,0.10)] flex flex-col"
              >
                {/* Corner glow on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 100% 0%, rgba(22,163,74,0.10), transparent 70%)",
                  }}
                />

                {/* Ícono */}
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-5 group-hover:bg-brand-green/20 group-hover:border-brand-green/40 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-brand-green" aria-hidden="true" />
                </div>

                {/* Dato grande */}
                <p
                  className="font-display text-[clamp(3rem,7vw,5rem)] leading-none mb-4"
                  style={{
                    background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {bloque.dato}
                </p>

                {/* Título */}
                <h3 className="font-sans font-semibold text-base sm:text-lg text-neutral-900 leading-tight mb-3">
                  {bloque.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-neutral-500 leading-relaxed flex-grow mb-4">
                  {bloque.descripcion}
                </p>

                {/* Fuente */}
                {bloque.fuente && (
                  <p className="text-[10px] text-neutral-400 font-sans tracking-wide pt-4 border-t border-neutral-100">
                    {bloque.fuente}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Diagrama del sistema — HTML/CSS puro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-center text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-neutral-400 mb-6">
            Cómo funciona el sistema
          </p>

          {/* Flujo: vertical en mobile, horizontal en sm+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {FLUJO.map((paso, i) => (
              <div key={paso.label} className="flex flex-col sm:flex-row items-center">
                {/* Nodo */}
                <div
                  className={[
                    "flex flex-col items-center justify-center text-center",
                    "rounded-xl border px-5 py-4 min-w-[140px] transition-all",
                    paso.highlight
                      ? "bg-brand-green border-brand-green text-white shadow-[0_4px_24px_rgba(22,163,74,0.30)]"
                      : "bg-white border-neutral-200 text-neutral-700",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "font-sans font-bold text-sm leading-tight",
                      paso.highlight ? "text-white" : "text-neutral-900",
                    ].join(" ")}
                  >
                    {paso.label}
                  </span>
                  <span
                    className={[
                      "text-[10px] mt-1 leading-snug",
                      paso.highlight ? "text-white/80" : "text-neutral-400",
                    ].join(" ")}
                  >
                    {paso.sub}
                  </span>
                </div>

                {/* Flecha (no después del último) */}
                {i < FLUJO.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="w-5 h-5 text-brand-green my-2 sm:my-0 sm:mx-2 rotate-90 sm:rotate-0 flex-shrink-0"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
