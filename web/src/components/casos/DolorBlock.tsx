"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CostMetric {
  value: string;
  description: string;
}

interface AvatarDolor {
  id: string;
  number: string;
  badge: string;
  headline: string;
  story: string[];
  costs: CostMetric[];
  sources: string;
  transition: string;
  ctaLabel: string;
  ctaHref: string;
  bg: "white" | "neutral-50" | "dark";
}

const DOLORES: AvatarDolor[] = [
  {
    id: "carlos-dropshipper",
    number: "01",
    badge: "Dropshipping · Ecommerce · Productos físicos",
    headline: "Tienes el producto. Tienes la pauta. Pero la landing no convierte.",
    story: [
      "Llevas meses con la misma landing page. El tráfico llega, la gente la ve y se va. El ROAS está en 1.5x cuando necesitas mínimo 2.5x para sobrevivir. Subes el presupuesto de pauta esperando que el volumen compense — y el ROAS baja más.",
      "El problema no es el producto. No es la pauta. Es que una imagen estática nunca va a generar la confianza que necesita un comprador que no te conoce para sacar la tarjeta.",
      "Y cuando sí compra — compra sin certeza. Por eso el 15–30% de tus pedidos vuelven. Cada devolución te come el envío de ida, el de vuelta y el tiempo de tu equipo respondiendo WhatsApps manualmente.",
    ],
    costs: [
      { value: "3%", description: "Tu tasa de conversión actual con landing page" },
      { value: "15–30%", description: "Tasa de devolución promedio en dropshipping LATAM" },
      { value: "$15–35K COP", description: "Costo promedio de cada devolución solo en logística" },
    ],
    sources: "Unbounce Q4 2025 · Talkyria 2026 · Coresight",
    transition:
      "Un live que convierte al 20% y reduce devoluciones un 40% no es una promesa — es lo que pasa cuando el comprador ve el producto en acción antes de pagar.",
    ctaLabel: "Ver cómo funciona para dropshippers",
    ctaHref: "/para/dropshippers",
    bg: "white",
  },
  {
    id: "valentina-infoproductora",
    number: "02",
    badge: "Cursos online · Mentorías · Coaches · Hotmart",
    headline: "Solo vendes cuando lanzas. Entre lanzamientos, silencio.",
    story: [
      "Construiste una comunidad. Tienes un curso validado. Hotmart te paga bien cuando lanzas. Pero los lanzamientos te agotan — semanas de contenido, webinars en vivo, emails diarios, historias cada hora. Y cuando termina, los ingresos se cortan en seco hasta el próximo.",
      "El webinar gratuito que antes llenabas ahora cuesta el doble de pauta y convierte la mitad. El mercado se saturó de gratuitos. La audiencia ya no confía en un webinar que sabe que termina en pitch.",
      "Necesitas un canal que venda todos los días — no solo cuando tienes energía para lanzar.",
    ],
    costs: [
      { value: "6.6%", description: "Tasa de conversión mediana de landing pages de cursos" },
      { value: "2–4 veces/año", description: "Frecuencia máxima sostenible de lanzamientos" },
      { value: "20 pts", description: "Caída en confianza digital LATAM entre 2022 y 2024" },
    ],
    sources: "Unbounce Q4 2025 · América's Market Intelligence 2024",
    transition:
      "Tu webinar más exitoso convertido en live evergreen — corriendo solo, todos los días, integrado con Hotmart, mientras tú creas tu próximo curso.",
    ctaLabel: "Ver cómo funciona para infoproductores",
    ctaHref: "/para/infoproductores",
    bg: "neutral-50",
  },
  {
    id: "rodrigo-marca-propia",
    number: "03",
    badge: "Marcas propias · Retail · Producto físico establecido",
    headline:
      "Mercado Libre te cobra el 20% de cada venta. Y encima te compite con sus propios productos.",
    story: [
      "Tienes marca. Tienes producto. Tienes clientes que te repiten. Pero el 20–25% de cada venta se va en comisión al marketplace. No tienes los datos de tus compradores. No controlas la experiencia. Y el marketplace te pone al lado de un competidor chino que vende lo mismo a la mitad de precio.",
      "Intentaste vender directo con tu tienda online. El tráfico orgánico no alcanza. La pauta lleva gente a una landing que no convierte. Y tu equipo de ventas no puede atender todos los WhatsApps que llegan.",
      "Cada mes que sigues en el marketplace es un mes que le estás pagando $6,000 USD o más a alguien que no te debe nada.",
    ],
    costs: [
      { value: "15–25%", description: "Comisión promedio de marketplaces LATAM" },
      { value: "0", description: "Datos de tus compradores que recibes del marketplace" },
      { value: "$6K+ USD/mes", description: "Lo que pagas en comisiones si vendes $30K/mes" },
    ],
    sources: "Statista 2025 · Mercado Libre reportes anuales",
    transition:
      "Un canal de venta directa 24/7. Sin comisión. Con los datos de cada comprador. Tu marca en vivo en tu propio dominio.",
    ctaLabel: "Ver cómo funciona para marcas",
    ctaHref: "/para/marcas",
    bg: "dark",
  },
];

const BG_CLASS: Record<AvatarDolor["bg"], string> = {
  white: "bg-white",
  "neutral-50": "bg-neutral-50",
  dark: "bg-neutral-900",
};

function AvatarBlock({ block }: { block: AvatarDolor }) {
  const isDark = block.bg === "dark";

  return (
    <div
      id={block.id}
      className={cn(
        "relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 border-b last:border-b-0",
        BG_CLASS[block.bg],
        isDark ? "border-white/10" : "border-neutral-200",
      )}
    >
      <div className="max-w-5xl mx-auto">
        {/* Número + badge + headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-4 mb-5">
            <span
              className={cn(
                "font-mono text-[clamp(4rem,12vw,9rem)] font-bold leading-none select-none",
                isDark ? "text-white/8" : "text-neutral-100",
              )}
              aria-hidden
            >
              {block.number}
            </span>
            <span
              className={cn(
                "text-[11px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border",
                isDark
                  ? "bg-brand-green/15 text-brand-green border-brand-green/30"
                  : "bg-brand-green/10 text-brand-green border-brand-green/20",
              )}
            >
              {block.badge}
            </span>
          </div>
          <h2
            className={cn(
              "font-display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-[1.05] tracking-tight",
              isDark ? "text-white" : "text-neutral-900",
            )}
          >
            {block.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Izquierda: historia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {block.story.map((paragraph, i) => (
              <p
                key={i}
                className={cn(
                  "text-base sm:text-lg leading-relaxed",
                  isDark ? "text-neutral-400" : "text-neutral-600",
                )}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Derecha: costo de no actuar + transición + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Costo de no actuar */}
            <div
              className={cn(
                "rounded-2xl p-6 sm:p-8",
                isDark
                  ? "bg-white/8 border border-white/12"
                  : "bg-neutral-900",
              )}
            >
              <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-neutral-400 mb-5">
                Costo de no actuar
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {block.costs.map((cost) => (
                  <div key={cost.value} className="flex flex-col gap-2">
                    <span className="font-display text-[clamp(1.4rem,4vw,2.5rem)] leading-none text-white">
                      {cost.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-neutral-400 leading-snug">
                      {cost.description}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[10px] text-neutral-600 font-sans">
                {block.sources}
              </p>
            </div>

            {/* Transición */}
            <div
              className={cn(
                "border-l-4 border-brand-green pl-4",
              )}
            >
              <p
                className={cn(
                  "text-base sm:text-lg font-sans font-bold leading-snug",
                  isDark ? "text-white" : "text-neutral-900",
                )}
              >
                {block.transition}
              </p>
            </div>

            {/* CTA de segmento */}
            <Link
              href={block.ctaHref}
              className="inline-flex items-center gap-2 text-brand-green font-sans font-semibold text-sm sm:text-base hover:gap-3 transition-all duration-200 group"
            >
              {block.ctaLabel}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function DoloresList() {
  return (
    <section aria-label="Dolores por avatar" className="relative">
      {DOLORES.map((block) => (
        <AvatarBlock key={block.id} block={block} />
      ))}
    </section>
  );
}
