"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

const STAGGER = 0.12;

export function CasosHero() {
  const reduced = useReducedMotion();

  function anim(i: number) {
    return {
      initial: { opacity: 0, y: reduced ? 0 : 28 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: i * STAGGER,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    };
  }

  return (
    <section
      aria-label="Por qué LiveCake"
      className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-white pt-24"
    >
      {/* Grid de fondo */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(61,61,60,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(61,61,60,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 65%, rgba(22,163,74,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        <motion.span
          {...anim(0)}
          className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-6 bg-brand-green/15 text-brand-green border border-brand-green/40"
        >
          Por qué el live shopping
        </motion.span>

        <motion.h1
          {...anim(1)}
          className="font-display text-neutral-900 text-[clamp(2.2rem,6.5vw,5.5rem)] leading-[0.92] tracking-tight mb-6"
        >
          ¿Te suena familiar alguno de{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #16a34a 0%, #15803d 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            estos dolores?
          </span>
        </motion.h1>

        <motion.p
          {...anim(2)}
          className="max-w-2xl mx-auto text-neutral-500 text-base sm:text-lg leading-relaxed mb-6"
        >
          Antes de mostrarte la solución, necesitamos que veas el problema exacto
          que LiveCake resuelve — en números reales, no en promesas.
        </motion.p>

        <motion.p
          {...anim(3)}
          className="text-sm text-neutral-400 font-sans tracking-wide"
        >
          Tres tipos de negocio. Tres dolores distintos. Un mismo sistema que los
          resuelve.
        </motion.p>

        <motion.div {...anim(4)} className="mt-12 flex justify-center">
          <ChevronDown
            className="h-6 w-6 text-neutral-300 animate-bounce"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
