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

type Integracion = {
  id: string;
  name: string;
  logo: string;
  scale?: number;
};

const INTEGRACIONES: Integracion[] = [
  {
    id: "gintracom",
    name: "Gintracom",
    logo: "/brand/logos/integraciones/gintracom.png",
    scale: 1.6,
  },
  {
    id: "mercadopago",
    name: "Mercado Pago",
    logo: "/brand/logos/integraciones/mercadopago.png",
    scale: 1.5,
  },
  {
    id: "dropi",
    name: "Dropi",
    logo: "/brand/logos/integraciones/dropi.png",
    scale: 1.8,
  },
  {
    id: "hoko",
    name: "Hoko",
    logo: "/brand/logos/integraciones/hoko.png",
  },
  {
    id: "droplatam",
    name: "DropLatam",
    logo: "/brand/logos/integraciones/droplatam.png",
  },
  {
    id: "adma",
    name: "Adma",
    logo: "/brand/logos/integraciones/adma.png",
  },
];

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
            Ecosistema LiveCake
          </span>
          <h2
            id="aliados-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-neutral-900 tracking-tight"
          >
            Integrado con las plataformas
            <br className="hidden sm:block" /> que ya usas
          </h2>
          <p className="mt-5 text-neutral-500 max-w-2xl mx-auto text-base leading-relaxed">
            Partners tecnológicos y plataformas integradas — todo el ecosistema
            que necesitas para vender 24/7.
          </p>

          {/* Logo strip — una sola vez */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-3">
            {INTEGRACIONES.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center"
              >
                <div className="w-28 h-14 flex items-center justify-center overflow-hidden rounded-xl bg-white border border-neutral-100 shadow-sm px-2">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={112}
                    height={56}
                    className="w-full h-full object-contain"
                    style={item.scale ? { transform: `scale(${item.scale})` } : undefined}
                  />
                </div>
                {i < INTEGRACIONES.length - 1 && (
                  <span className="mx-1 text-neutral-200 text-lg select-none">·</span>
                )}
              </motion.div>
            ))}
          </div>
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
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-sans font-bold tracking-wider uppercase mb-3">
                <ShieldCheck className="w-3 h-3 flex-shrink-0" aria-hidden />
                Oficial
              </span>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                {partner.tagline}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pancake Partners — dark card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 rounded-2xl overflow-hidden bg-neutral-900"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 pt-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logos/pancake/pancake-logo-official.webp"
                alt="Pancake"
                width={110}
                height={32}
                className="h-7 w-auto object-contain"
              />
              <span className="text-white/30 text-sm">×</span>
              <span className="text-white/70 text-xs font-sans font-semibold tracking-wide">
                Official Partners
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green text-[10px] font-sans font-bold tracking-widest uppercase">
              <ShieldCheck className="w-3 h-3" aria-hidden />
              Certificación oficial LATAM
            </span>
          </div>

          <div className="px-6 py-6">
            <Image
              src="/brand/logos/pancake/pancake-partners-bar-1.png"
              alt="Pancake official partners: Meta, Google, TikTok y más"
              width={1200}
              height={80}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="px-6 pb-5 border-t border-white/10 pt-4">
            <p className="text-white/30 text-[11px] font-sans leading-relaxed text-center">
              LiveCake opera exclusivamente sobre la infraestructura certificada de Pancake —
              el único partner oficial de Meta, TikTok Shop y Google para live commerce en LATAM.
            </p>
          </div>
        </motion.div>

        {/* Nota de contexto */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
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
