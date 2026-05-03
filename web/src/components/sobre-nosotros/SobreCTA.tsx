"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Check } from "lucide-react";
import { useAudit } from "@/components/lead-audit/AuditContext";

const REASSURANCE = [
  "Sin compromiso de compra",
  "Te mostramos el sistema en vivo",
  "Respuesta en menos de 24 horas",
];

export function SobreCTA() {
  const { openAudit } = useAudit();

  return (
    <section
      id="cta-sobre"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden"
      aria-labelledby="cta-sobre-title"
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
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,163,74,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-6 bg-brand-green/15 text-brand-green border border-brand-green/40">
          Diagnóstico gratuito
        </span>

        <h2
          id="cta-sobre-title"
          className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] text-neutral-900 tracking-tight uppercase mb-6"
        >
          ¿Listo para ver el{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #16a34a, #15803d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            sistema funcionando?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl mx-auto">
          En 20 minutos te mostramos exactamente cómo quedaría LiveCake para tu
          negocio — sin compromiso y sin costo.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8">
          <Button
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base font-bold tracking-wide min-h-[52px] shadow-[0_0_28px_rgba(22,163,74,0.35)] hover:shadow-[0_0_40px_rgba(22,163,74,0.55)]"
            onClick={() => openAudit("sobre_cta_final")}
          >
            <CalendarDays className="h-5 w-5 mr-2" aria-hidden />
            Agendar diagnóstico gratuito →
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-sm sm:text-base min-h-[52px]"
          >
            <a href="/precios">Ver planes y precios →</a>
          </Button>
        </div>

        {/* Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {REASSURANCE.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check
                className="h-4 w-4 text-brand-green flex-shrink-0"
                aria-hidden
              />
              <span className="text-sm text-neutral-600">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
