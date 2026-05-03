"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useAudit } from "@/components/lead-audit/AuditContext";

const STAGGER = 0.12;
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};
const fadeUpReduced = {
  hidden: { opacity: 0 },
  visible: () => ({ opacity: 1, transition: { duration: 0.3 } }),
};

const TRUST_BAR = [
  "Partner oficial Pancake — Meta + TikTok + Google",
  "Medellín, Colombia · Operamos en toda LATAM",
  "Tecnología validada en Vietnam, Brasil, Europa y EE.UU.",
  "Sistema listo en 10 días",
];

export function SobreHero() {
  const reduced = useReducedMotion();
  const variants = reduced ? fadeUpReduced : fadeUp;
  const { openAudit } = useAudit();

  return (
    <section
      aria-label="Sobre LiveCake — Primera agencia de live shopping en Colombia"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white pt-24"
    >
      {/* Imagen editorial de fondo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/brand/sobre-nosotros/equipo-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
      </div>

      {/* Grid SVG pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(61,61,60,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(61,61,60,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {/* Radial glow verde */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(22,163,74,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mb-6 flex justify-center"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase bg-brand-green/15 text-brand-green border border-brand-green/40">
            Fundada en Medellín · Operamos en toda LATAM
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          custom={1}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="font-display leading-none mb-6"
        >
          <span className="block text-neutral-900 text-[clamp(2rem,6.5vw,5.5rem)] leading-[0.92]">
            La primera agencia de
          </span>
          <span
            className="block text-[clamp(2rem,6.5vw,5.5rem)] leading-[0.95] mt-2"
            style={{
              background:
                "linear-gradient(90deg, #16a34a 0%, #15803d 50%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            live shopping en Colombia.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          custom={2}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-neutral-500 text-base sm:text-lg leading-relaxed mb-10"
        >
          Construida sobre la única tecnología con respaldo oficial de Meta,
          TikTok y Google para live commerce en LATAM. Tres fundadores. Una
          misión:{" "}
          <span className="text-neutral-900 font-semibold">
            que tu negocio venda solo, 24/7.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-2 sm:px-0"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base font-bold tracking-wide min-h-[52px] shadow-[0_0_28px_rgba(22,163,74,0.35)] hover:shadow-[0_0_40px_rgba(22,163,74,0.55)]"
            onClick={() => openAudit("sobre_hero_apply")}
          >
            AGENDAR DIAGNÓSTICO GRATUITO →
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-sm sm:text-base min-h-[52px]"
          >
            <a href="#fundadores">CONOCER EL EQUIPO ↓</a>
          </Button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          custom={4}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {TRUST_BAR.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center flex-shrink-0">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M1.5 4L3.5 6L6.5 2"
                    stroke="#16a34a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs sm:text-sm text-neutral-600">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
