"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useAudit } from "@/components/lead-audit/AuditContext";
import { ParticlesBg } from "@/components/home/ParticlesBg";
import { ApplicationCard } from "@/components/marketing/ApplicationCard";
import { trackOfferApply } from "@/lib/tracking/events";
import { useOfferCountdown } from "@/hooks/use-offer-countdown";
import { OPEN_SLOTS, OFFER_COPY } from "@/lib/offer-config";

const STAGGER_DELAY = 0.12;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: { duration: 0.3 },
  }),
};

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { openAudit } = useAudit();
  const countdown = useOfferCountdown();

  const handleApply = (source: string) => {
    trackOfferApply(source, {
      hoursLeft: countdown.hoursLeft,
      slotsLeft: OPEN_SLOTS,
    });
    openAudit(source);
  };

  useEffect(() => setMounted(true), []);

  const variants = shouldReduceMotion ? fadeUpReduced : fadeUp;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero — Live Cake"
      className="relative min-h-[90vh] lg:min-h-[820px] flex items-center justify-center overflow-hidden bg-white pt-16"
    >
      {/* Imagen de fondo editorial */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          src="/brand/home/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      {/* Partículas */}
      <ParticlesBg />

      {/* Grid SVG pattern con radial mask */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,214,79,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,214,79,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Radial glow central verde */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,214,79,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24 lg:py-28">
        {mounted && (
          <>
            {/* Application card: cupos + countdown + descuento */}
            <motion.div
              custom={0}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mb-6 flex justify-center"
            >
              <ApplicationCard source="hero_home_apply" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="font-display leading-none mb-6"
            >
              <span className="block text-brand-black text-[clamp(2.4rem,8vw,8rem)] leading-[0.92]">
                TRANSMISIONES LIVE
              </span>
              <span
                className="block text-[clamp(1.6rem,5.5vw,5.2rem)] leading-[0.95] mt-2"
                style={{
                  background:
                    "linear-gradient(90deg, #00d64f 0%, #00a83d 50%, #00d64f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                QUE VENDEN 24/7.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="max-w-md sm:max-w-xl lg:max-w-2xl mx-auto text-brand-graphite text-sm sm:text-base lg:text-lg leading-relaxed mb-10"
            >
              Live Shopping + falsos lives 24/7 sobre{" "}
              <span className="text-brand-black font-semibold">Pancake</span> —
              partner oficial Meta + TikTok + Google. Llevamos tráfico de tus
              ads al live embebido en tu dominio. No en TikTok Live nativo.
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
                onClick={() => handleApply("hero_home")}
                className="w-full sm:w-auto text-sm sm:text-base font-bold tracking-wide min-h-[52px] shadow-[0_0_28px_rgba(0,214,79,0.35)] hover:shadow-[0_0_40px_rgba(0,214,79,0.55)] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Aplicar ahora a Live Cake"
              >
                APLICA AHORA →
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("muestras")}
                className="w-full sm:w-auto text-sm sm:text-base min-h-[52px] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Ver muestras de lives"
              >
                VER MUESTRAS DE LIVES
              </Button>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.p
              custom={4}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mt-5 text-xs text-brand-graphite tracking-wide"
            >
              {OFFER_COPY.application_note}
            </motion.p>

            {/* Stat ribbon */}
            <motion.div
              custom={5}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            >
              {[
                { value: "30% vs 3%", label: "conversión live vs ecom" },
                { value: "CAGR 27.2%", label: "mercado LATAM 2024-2033" },
                { value: "Meta+TikTok+Google", label: "Pancake — partner oficial" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span
                    className="font-display text-xl sm:text-2xl"
                    style={{
                      background: "linear-gradient(135deg, #00d64f 0%, #00a83d 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-brand-graphite">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </div>

      {/* Gradient bottom fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8))",
        }}
      />
    </section>
  );
}
