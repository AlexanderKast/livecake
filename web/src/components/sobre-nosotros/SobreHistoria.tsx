"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";

const PARAGRAPHS = [
  "El live shopping lleva más de 5 años dominando el ecommerce en Asia. En China, el 30% de todas las ventas online ya se hacen a través de lives. En Brasil, Magalu genera más de USD 240 millones en un solo día de Black Friday con live commerce. En LATAM, la ola apenas está llegando — y cuando llega, llega rápido.",
  "LiveCake nació en abril de 2026 con una pregunta simple: ¿por qué las marcas medianas en Colombia, Ecuador, México y República Dominicana no tienen acceso al mismo sistema que usa Magalu? La respuesta era tecnología y ejecución. Nosotros resolvemos las dos.",
  "La tecnología es Pancake — el único partner oficial de Meta, TikTok y Google para live commerce en LATAM, con derechos exclusivos para América y Europa. La ejecución es el equipo: producción de lives, creadores capacitados, automatización de WhatsApp y gestión de órdenes en un solo sistema integrado.",
  "No somos una agencia de marketing que añadió live shopping a su portafolio. Somos un sistema construido desde cero para que el live sea tu canal de ventas más eficiente — uno que opera 24/7 sin que estés presente.",
];

export function SobreHistoria() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="historia"
      aria-labelledby="historia-title"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto narrativo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
              Nuestra historia
            </span>
            <h2
              id="historia-title"
              className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] text-neutral-900 tracking-tight uppercase mb-8"
            >
              Por qué existe{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #16a34a, #15803d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                LiveCake
              </span>
            </h2>

            <div className="flex flex-col gap-5">
              {PARAGRAPHS.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-sm sm:text-base text-neutral-600 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Dato visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col gap-4">
              <p
                className="font-display text-[clamp(4rem,10vw,7rem)] leading-none"
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                30%
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Conversión live shopping vs 3% en landing page convencional.
                El canal de ventas más eficiente del mundo digital, ahora
                disponible para marcas medianas en LATAM.
              </p>
              <p className="text-[10px] text-neutral-400 font-sans tracking-wide mt-2">
                McKinsey &amp; Company
              </p>
            </div>

            <div className="rounded-2xl border border-brand-green/20 bg-brand-green/[0.04] p-6 flex flex-col gap-2">
              <p className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none text-neutral-900">
                Abril 2026
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Fecha de fundación de LiveCake — la primera agencia de live
                shopping construida sobre Pancake en Colombia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
