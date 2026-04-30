"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Target, Users, Film, BarChart3 } from "lucide-react";

const PASOS = [
  {
    icon: Target,
    step: "01",
    title: "Setup del sistema Pancake",
    description:
      "Configuramos tu stack completo: WebCake (live embebido en tu dominio), LiveCake (motor del live), Botcake (WhatsApp automático) y Postcake (CRM post-live). Todo antes de tu primer live.",
  },
  {
    icon: Users,
    step: "02",
    title: "Presentadores entrenados para live LATAM",
    description:
      "Seleccionamos presentadores de nuestra red verificada entrenados en técnicas de live shopping para formato Pancake. Latinos reales, pitch de venta probado, sin improvisación.",
  },
  {
    icon: Film,
    step: "03",
    title: "Producción de lives y falsos lives 24/7",
    description:
      "Grabamos el live, lo cargamos en Pancake embebido en tu dominio y lo dejamos corriendo 24/7. Tus ads en Meta/TikTok/Google llevan tráfico al live — no al live nativo de TikTok.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Optimización con datos reales",
    description:
      "Medimos conversión, retención y ticket promedio de cada live. Los ángulos que convierten más se escalan, los que no se reemplazan. Tu inversión siempre corriendo con el mejor live.",
  },
] as const;

export function Solucion() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <section
      id="solucion"
      aria-labelledby="solucion-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24"
      style={{
        background: "#ffffff",
      }}
    >
      {/* Imagen editorial de workspace */}
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

      {/* Glow central */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(22,163,74,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/10 text-brand-green border border-brand-green/30">
            Nuestro proceso
          </span>
          <h2
            id="solucion-title"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-neutral-900 tracking-tight"
          >
            Tu live en marcha en 10 días.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            De 30% de conversión, +60% de retención y -40% de devoluciones —
            cuatro pasos que lo hacen posible.
          </p>
        </motion.div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PASOS.map((paso, i) => {
            const Icon = paso.icon;
            return (
              <motion.div
                key={paso.step}
                initial={{ opacity: 0, y: 36 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 lg:p-8 overflow-hidden transition-all duration-300 hover:border-brand-green/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(22,163,74,0.08)]"
              >
                {/* Corner glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 100% 0%, rgba(22,163,74,0.10), transparent 70%)",
                  }}
                />

                {/* Icon box */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center group-hover:bg-brand-green/20 group-hover:border-brand-green/40 transition-colors duration-300">
                    <Icon
                      className="h-5 w-5 text-brand-green"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="font-display text-brand-graphite text-3xl leading-none">
                    {paso.step}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-neutral-900 mb-3">
                  {paso.title}
                </h3>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                  {paso.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
