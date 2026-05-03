"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { ShieldCheck, Zap, RefreshCcw, XCircle } from "lucide-react";

const GUARANTEES = [
  {
    icon: Zap,
    title: "Sistema funcionando en 10 días",
    description:
      "Si en 10 días hábiles el sistema no está completamente operativo — live corriendo, Botcake activo, CRM conectado, videos entregados — te devolvemos el setup.",
  },
  {
    icon: RefreshCcw,
    title: "Optimizaciones incluidas sin costo extra",
    description:
      "Cada optimización mensual incluida en tu plan es sin costo adicional. Si necesitamos más iteraciones para que el sistema rinda, las hacemos dentro del plan.",
  },
  {
    icon: XCircle,
    title: "Sin permanencia mínima",
    description:
      "No hay contrato de permanencia. Si en el primer mes el sistema no es lo que esperabas, cancelas. Solo pierdes el setup — la recurrencia no se cobra si cancelas antes del siguiente ciclo.",
  },
];

export function GuaranteeSection() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <section
      id="garantia"
      aria-labelledby="garantia-title"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #050a07 50%, #000000 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 35%, rgba(22,163,74,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden />
            Garantía del sistema
          </span>
          <h2
            id="garantia-title"
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-white tracking-tight uppercase"
          >
            ¿Qué pasa si el sistema{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #15803d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              no funciona?
            </span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-brand-gray leading-relaxed">
            Nos comprometemos con los resultados del sistema — no con los
            resultados de tu negocio (eso depende de tu producto, tu precio y
            tu pauta). Pero si el sistema técnico falla, lo resolvemos.
          </p>
        </motion.div>

        {/* 3 bloques de garantía */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {GUARANTEES.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-brand-green/20 bg-brand-green/[0.04] p-6 sm:p-7 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-green" aria-hidden />
                </div>
                <div>
                  <p className="text-white font-sans font-bold text-sm sm:text-base leading-snug mb-2">
                    {g.title}
                  </p>
                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota legal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[11px] text-brand-gray/50 max-w-2xl mx-auto leading-relaxed"
        >
          La garantía aplica sobre el funcionamiento técnico del sistema. Los
          resultados de conversión y ventas dependen de factores externos a
          LiveCake: calidad del producto, precio, inversión en pauta y mercado
          objetivo.
        </motion.p>
      </div>
    </section>
  );
}
