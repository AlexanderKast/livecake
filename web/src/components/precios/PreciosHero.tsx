"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useAudit } from "@/components/lead-audit/AuditContext";
import { ClientLogoBar } from "./ClientLogoBar";
import { ApplicationCard } from "@/components/marketing/ApplicationCard";
import { trackOfferApply } from "@/lib/tracking/events";
import { useOfferCountdown } from "@/hooks/use-offer-countdown";
import { OPEN_SLOTS, OFFER_COPY } from "@/lib/offer-config";

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
  "Listo en 10 días",
  "Sin comisión sobre ventas",
  "Pancake partner oficial Meta + TikTok + Google",
  "Setup único — sin costos ocultos",
];

export function PreciosHero() {
  const reduced = useReducedMotion();
  const variants = reduced ? fadeUpReduced : fadeUp;
  const { openAudit } = useAudit();
  const countdown = useOfferCountdown();

  const handleApply = () => {
    trackOfferApply("precios_hero_apply", {
      hoursLeft: countdown.hoursLeft,
      slotsLeft: OPEN_SLOTS,
    });
    openAudit("precios_hero_apply");
  };

  return (
    <section
      aria-label="Precios — Live Cake"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white pt-24"
    >
      {/* Imagen editorial de fondo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/brand/precios/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/65 to-white" />
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
        {/* Application card: cupos + countdown + descuento */}
        <motion.div
          custom={0}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mb-6 flex justify-center"
        >
          <ApplicationCard source="precios_hero_apply" />
        </motion.div>

        {/* Título */}
        <motion.h1
          custom={1}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="font-display leading-none mb-6"
        >
          <span className="block text-neutral-900 text-[clamp(2.4rem,7vw,6rem)] leading-[0.92]">
            Elige cuántos lives
          </span>
          <span
            className="block text-[clamp(2rem,5.5vw,5rem)] leading-[0.95] mt-2"
            style={{
              background:
                "linear-gradient(90deg, #16a34a 0%, #15803d 50%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            quieres por mes.
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
          Sin comisión sobre tus ventas. Recurrencia mensual fija.{" "}
          <span className="text-neutral-900 font-semibold">
            Suite Pancake completa incluida en todos los planes desde el día 1.
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
            asChild
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base font-bold tracking-wide min-h-[52px] shadow-[0_0_28px_rgba(22,163,74,0.35)] hover:shadow-[0_0_40px_rgba(22,163,74,0.55)]"
          >
            <a href="#planes">VER LOS 4 PLANES →</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-sm sm:text-base min-h-[52px]"
            onClick={handleApply}
          >
            AGENDAR LLAMADA →
          </Button>
        </motion.div>

        <motion.p
          custom={4}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-5 text-xs text-neutral-400 tracking-wide"
        >
          {OFFER_COPY.application_note}
        </motion.p>

        {/* Trust bar */}
        <motion.div
          custom={5}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {TRUST_BAR.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                  <path d="M1.5 4L3.5 6L6.5 2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-xs sm:text-sm text-neutral-600">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          custom={5}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-3 text-[11px] text-neutral-400 tracking-wide"
        >
          El setup cubre la implementación completa del sistema. La recurrencia mensual es lo único que pagas después.
        </motion.p>

        {/* Logo bar clientes */}
        <motion.div
          custom={6}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <ClientLogoBar />
        </motion.div>
      </div>
    </section>
  );
}
