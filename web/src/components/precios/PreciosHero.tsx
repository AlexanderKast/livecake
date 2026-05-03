"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

// Stats de live shopping citables
const FALLBACK_STATS = [
  { value: "30%", label: "Conversión live vs 3% ecom" },
  { value: "+10-30%", label: "Ticket promedio más alto" },
  { value: "34%", label: "Compras post-live (cola larga)" },
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

  const [stats] = useState(FALLBACK_STATS);

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
            VENDE EN VIVO.
          </span>
          <span
            className="block text-[clamp(1.6rem,5vw,4.5rem)] leading-[0.95] mt-2"
            style={{
              background:
                "linear-gradient(90deg, #16a34a 0%, #15803d 50%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            COBRA CADA MES.
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
          Cuatro planes de live shopping con la suite completa de Pancake
          incluida. Precios claros, sin comisión sobre ventas y con{" "}
          <span className="text-neutral-900 font-semibold">
            setup técnico desde el día uno
          </span>
          . Escoge la frecuencia de lives que calce con tu negocio hoy.
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

        {/* Stat ribbon — datos de mercado live shopping */}
        <motion.div
          custom={5}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {stats.map((stat: { value: string; label: string }, i: number) => (
            <div key={i} className="flex items-baseline gap-2">
              <span
                className="font-display text-2xl sm:text-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

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
