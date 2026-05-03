"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShoppingCart, BookOpen, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAudit } from "@/components/lead-audit/AuditContext";
import { cn } from "@/lib/utils";

const SEGMENTS = [
  {
    id: "dropshippers",
    icon: ShoppingCart,
    label: "Soy dropshipper o ecommerce",
    description: "Dropshipping · Ecommerce · Productos físicos",
    href: "/para/dropshippers",
  },
  {
    id: "infoproductores",
    icon: BookOpen,
    label: "Vendo cursos o mentorías",
    description: "Cursos online · Mentorías · Coaches · Hotmart",
    href: "/para/infoproductores",
  },
  {
    id: "marcas",
    icon: Store,
    label: "Tengo una marca con producto propio",
    description: "Marcas propias · Retail · Producto establecido",
    href: "/para/marcas",
  },
];

export function CasosCTAFinal() {
  const { openAudit } = useAudit();

  return (
    <section
      id="contacto"
      aria-labelledby="casos-cta-heading"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-6 bg-brand-green/15 text-brand-green border border-brand-green/40">
            Siguiente paso
          </span>
          <h2
            id="casos-cta-heading"
            className="font-display text-neutral-900 text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight mb-5"
          >
            ¿Cuál de estos dolores es el tuyo?
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-500 text-base sm:text-lg leading-relaxed">
            En 20 minutos te mostramos exactamente cómo quedaría el sistema de
            live para tu negocio — antes de que tomes cualquier decisión.
          </p>
        </motion.div>

        {/* Cards de segmento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {SEGMENTS.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={seg.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={seg.href}
                  className={cn(
                    "group flex flex-col gap-4 p-6 sm:p-7 rounded-2xl",
                    "bg-white border border-neutral-200",
                    "hover:border-brand-green/50 hover:shadow-[0_8px_32px_-8px_rgba(22,163,74,0.2)]",
                    "transition-all duration-300 h-full",
                  )}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/15 transition-colors">
                    <Icon className="h-5 w-5 text-brand-green" aria-hidden />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <p className="text-base font-sans font-bold text-neutral-900 leading-snug group-hover:text-brand-green transition-colors">
                      {seg.label}
                    </p>
                    <p className="text-xs text-neutral-400 font-sans">
                      {seg.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-brand-green font-semibold mt-auto">
                    Ver más
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divisor */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="flex-1 h-px bg-neutral-200" />
          <span className="text-xs text-neutral-400 font-sans tracking-wide">
            O agenda el diagnóstico gratuito directamente
          </span>
          <span className="flex-1 h-px bg-neutral-200" />
        </motion.div>

        {/* CTA unificado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Button
            size="lg"
            className="min-h-[56px] px-8 font-bold tracking-wide text-base shadow-[0_0_32px_rgba(22,163,74,0.35)] hover:shadow-[0_0_48px_rgba(22,163,74,0.55)]"
            onClick={() => openAudit("casos_cta_final")}
          >
            Agendar diagnóstico de 20 min →
          </Button>
          <p className="text-xs text-neutral-400 font-sans tracking-wide">
            Sin compromiso · Sin costo · Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
