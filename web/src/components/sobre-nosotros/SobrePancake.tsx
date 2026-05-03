"use client";

import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { ShieldCheck, Code2, Globe, Lock } from "lucide-react";

const CAPABILITIES = [
  {
    icon: ShieldCheck,
    title: "Partner oficial · No es genérico",
    description:
      "Pancake es partner certificado de Meta, TikTok y Google. Accede a APIs y SDKs que no están disponibles para el mercado general.",
  },
  {
    icon: Code2,
    title: "700 programadores disponibles",
    description:
      "El equipo de desarrollo de Pancake puede construir integraciones custom para clientes que necesiten conexiones fuera del stack estándar.",
  },
  {
    icon: Globe,
    title: "Validado en los mercados más avanzados",
    description:
      "La tecnología ya opera en Vietnam, Brasil, Estados Unidos y Europa. LiveCake la trae a Colombia y LATAM con soporte local.",
  },
  {
    icon: Lock,
    title: "Exclusividad para América y Europa",
    description:
      "Mauricio Cuevas tiene los derechos exclusivos de distribución de Pancake para América y Europa. LiveCake es el único acceso agenciado en Colombia.",
  },
];

export function SobrePancake() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="pancake"
      aria-labelledby="pancake-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-900 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #050a07 50%, #000000 100%)",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(22,163,74,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
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

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            La tecnología
          </span>
          <h2
            id="pancake-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-white tracking-tight uppercase mb-5"
          >
            La tecnología detrás de{" "}
            <span className="text-brand-green">LiveCake</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-gray leading-relaxed mb-8">
            Pancake no es solo una herramienta. Es el moat competitivo que
            ninguna agencia tradicional puede replicar.
          </p>

          {/* Descripción */}
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
              Pancake tiene derechos exclusivos para operar live commerce en
              América y Europa como partner oficial de Meta, TikTok y Google.
              Eso significa que los lives de LiveCake no son un hack ni una zona
              gris — son la única vía aprobada oficialmente para correr live
              shopping 24/7 en LATAM.
            </p>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
              Los falsos lives de LiveCake corren sobre Pancake, embebidos en el
              dominio del cliente vía WebCake. No en TikTok Live nativo. No en
              Facebook Live.{" "}
              <span className="text-white font-semibold">
                En tu dominio, bajo tu marca, con tus datos.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Grid de capacidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CAPABILITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-brand-graphite/60 bg-white/[0.03] p-6 hover:border-brand-green/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center">
                    <Icon
                      className="h-5 w-5 text-brand-green"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
