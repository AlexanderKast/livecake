"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAudit } from "@/components/lead-audit/AuditContext";

const TRUST_ITEMS = [
  "Sin comisión sobre ventas",
  "Suite Pancake completa incluida",
  "Listo en 10 días",
];

const STAGGER = 0.12;

export function ServiciosHero() {
  const reduced = useReducedMotion();
  const { openAudit } = useAudit();

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
      aria-label="Servicios LiveCake"
      className="relative min-h-[72vh] flex items-center justify-center overflow-hidden bg-white pt-24"
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
      {/* Glow verde */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 65%, rgba(22,163,74,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
        {/* Eyebrow */}
        <motion.span
          {...anim(0)}
          className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-6 bg-brand-green/15 text-brand-green border border-brand-green/40"
        >
          Sistema LiveCake
        </motion.span>

        {/* H1 */}
        <motion.h1
          {...anim(1)}
          className="font-display text-neutral-900 text-[clamp(2.2rem,6.5vw,5.5rem)] leading-[0.92] tracking-tight mb-6"
        >
          Todo lo que montamos para que tu live{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #16a34a 0%, #15803d 60%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            venda solo
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          {...anim(2)}
          className="max-w-2xl mx-auto text-neutral-500 text-base sm:text-lg leading-relaxed mb-10"
        >
          Un solo proveedor. Un sistema completo integrado sobre Pancake —{" "}
          <span className="text-neutral-900 font-semibold">
            el único partner oficial de Meta, TikTok y Google para live commerce
            en LATAM.
          </span>{" "}
          Listo en 10 días.
        </motion.p>

        {/* Trust bar */}
        <motion.div
          {...anim(3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10"
        >
          {TRUST_ITEMS.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-sm text-neutral-600 font-sans"
            >
              <Check
                className="h-4 w-4 text-brand-green flex-shrink-0"
                aria-hidden
              />
              {item}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...anim(4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto font-bold tracking-wide min-h-[52px] shadow-[0_0_28px_rgba(22,163,74,0.35)] hover:shadow-[0_0_40px_rgba(22,163,74,0.55)]"
            onClick={() => openAudit("servicios_hero")}
          >
            Agendar diagnóstico →
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-h-[52px]"
          >
            <Link href="/precios">Ver planes</Link>
          </Button>
        </motion.div>

        <motion.p
          {...anim(5)}
          className="mt-5 text-xs text-neutral-400 tracking-wide"
        >
          20 min · Gratis · Sin compromiso
        </motion.p>
      </div>
    </section>
  );
}
