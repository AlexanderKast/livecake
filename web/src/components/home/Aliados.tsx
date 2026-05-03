"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { ShieldCheck } from "lucide-react";

type Partner = {
  id: string;
  name: string;
  logo: string | null;
  tagline: string;
};

const PARTNERS: Partner[] = [
  {
    id: "pancake",
    name: "Pancake",
    logo: "/brand/logos/pancake/pancake-logo-official.webp",
    tagline: "Partner exclusivo LATAM · Live commerce certificado",
  },
  {
    id: "meta",
    name: "Meta",
    logo: null,
    tagline: "Conversion API oficial · Facebook + Instagram",
  },
  {
    id: "tiktok",
    name: "TikTok",
    logo: null,
    tagline: "Partner certificado · TikTok Ads + Commerce",
  },
  {
    id: "google",
    name: "Google",
    logo: null,
    tagline: "Partner oficial · Google Ads + Analytics",
  },
];

const PLATAFORMAS = ["Hotmart", "Dropi", "Hoco", "Gintracom", "WhatsApp Business"];

export function Aliados() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.08,
    once: true,
  });

  return (
    <section
      aria-labelledby="aliados-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Divisor superior */}
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-neutral-100 mb-16 sm:mb-20" />
      </div>

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/10 text-brand-green border border-brand-green/30">
            Partners oficiales
          </span>
          <h2
            id="aliados-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-neutral-900 tracking-tight"
          >
            Tecnología con respaldo oficial
          </h2>
          <p className="mt-5 text-neutral-500 max-w-2xl mx-auto text-base leading-relaxed">
            Pancake es el único partner oficial de Meta, TikTok y Google para
            live commerce en LATAM. LiveCake construye sobre esa exclusividad.
          </p>
        </motion.div>

        {/* 4 partner cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-2xl border border-neutral-200 bg-neutral-50 p-6 flex flex-col items-center text-center hover:border-brand-green/30 hover:bg-white hover:shadow-[0_8px_24px_-8px_rgba(22,163,74,0.12)] transition-all duration-300"
            >
              {/* Logo o badge de texto */}
              <div className="h-12 flex items-center justify-center mb-4">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="font-display text-2xl text-neutral-800 tracking-tight leading-none">
                    {partner.name}
                  </span>
                )}
              </div>

              {/* Badge oficial */}
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-sans font-bold tracking-wider uppercase mb-3">
                <ShieldCheck className="w-3 h-3 flex-shrink-0" aria-hidden />
                Oficial
              </span>

              {/* Tagline */}
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                {partner.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Segunda fila — plataformas integradas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 flex-wrap justify-center mb-10 p-5 rounded-2xl border border-neutral-100 bg-neutral-50"
        >
          <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-neutral-400 whitespace-nowrap">
            Plataformas integradas nativamente:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PLATAFORMAS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-neutral-600 text-xs font-sans font-medium hover:border-brand-green/30 hover:text-brand-green transition-colors duration-200"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Nota de contexto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed max-w-2xl mx-auto"
        >
          Los lives de LiveCake corren sobre Pancake embebidos en tu dominio —
          no en TikTok Live ni Facebook Live nativos. Esto es lo que nos permite
          operar 24/7 con respaldo oficial de las plataformas.
        </motion.p>
      </div>
    </section>
  );
}
