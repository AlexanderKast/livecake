"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { X, Check } from "lucide-react";

const NO_SOMOS = [
  "No somos una agencia de marketing que añadió lives",
  "No gestionamos tu pauta ni tus pedidos",
  "No cobramos comisión sobre tus ventas",
];

const SI_SOMOS = [
  "El sistema técnico completo de live shopping sobre Pancake",
  "El equipo que produce, configura y optimiza tus lives",
  "El único acceso agenciado a Pancake en Colombia",
];

export function SobreMision() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="mision"
      aria-labelledby="mision-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #050a07 50%, #000000 100%)",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(22,163,74,0.06) 0%, transparent 65%)",
        }}
      />

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Misión */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            Misión
          </span>
          <h2
            id="mision-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-white tracking-tight uppercase mb-6"
          >
            Misión
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed max-w-3xl">
            Democratizar el live shopping en LATAM. Que una marca mediana en
            Medellín, Guayaquil o Ciudad de México tenga acceso al mismo sistema
            de ventas en vivo que usan las empresas más grandes del mundo —{" "}
            <span className="text-white font-semibold">
              sin el equipo, sin el presupuesto, sin la complejidad técnica.
            </span>
          </p>
        </motion.div>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isIntersecting ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-px bg-brand-graphite/60 mb-12 sm:mb-16 origin-left"
        />

        {/* Grid dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Lo que NO somos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none text-white uppercase mb-6">
              Lo que no somos
            </h3>
            <ul className="flex flex-col gap-4">
              {NO_SOMOS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mt-0.5">
                    <X
                      className="h-3.5 w-3.5 text-red-400"
                      aria-hidden
                    />
                  </span>
                  <span className="text-sm sm:text-base text-brand-gray leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Lo que SÍ somos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none text-white uppercase mb-6">
              Lo que sí somos
            </h3>
            <ul className="flex flex-col gap-4">
              {SI_SOMOS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center mt-0.5">
                    <Check
                      className="h-3.5 w-3.5 text-brand-green"
                      aria-hidden
                    />
                  </span>
                  <span className="text-sm sm:text-base text-brand-gray leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Separador inferior */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isIntersecting ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px bg-brand-graphite/60 mt-12 sm:mt-16 origin-left"
        />
      </div>
    </section>
  );
}
