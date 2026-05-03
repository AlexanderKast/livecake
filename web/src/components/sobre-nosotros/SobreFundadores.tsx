"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Star } from "lucide-react";

interface Founder {
  name: string;
  initials: string;
  role: string;
  participation: string;
  description: string;
  contributions: string[];
  credential: string;
  imageSrc: string;
}

const FOUNDERS: Founder[] = [
  {
    name: "Mauricio Cuevas",
    initials: "MC",
    role: "Co-fundador · CEO de Pancake",
    participation: "50%",
    description:
      "Mauricio es el CEO de Pancake — la plataforma de live commerce con derechos exclusivos para América y Europa, y partner oficial de Meta, TikTok y Google. Lleva años recorriendo los mercados más avanzados en live shopping del mundo: Vietnam, Dubái, Holanda y Brasil, entendiendo cómo funciona el live commerce a escala antes de traerlo a LATAM.",
    contributions: [
      "Tecnología Pancake completa",
      "Red de partners LATAM",
      "Experiencia internacional validada",
      "Relaciones oficiales Meta, TikTok y Google",
      "Apertura de puertas con marcas grandes",
    ],
    credential:
      "Pancake — Plataforma #1 en facturación Meta para live commerce · Partner oficial Meta + TikTok + Google",
    imageSrc: "/brand/sobre-nosotros/mauricio-cuevas.webp",
  },
  {
    name: "Lucas Spot",
    initials: "LS",
    role: "Co-fundador · Director Creativo",
    participation: "25%",
    description:
      "Lucas es productor audiovisual con experiencia construyendo contenido de alto impacto para marcas y emprendedores en Colombia. Co-fundador de Los Reyes del Contenido — la comunidad de educación en creación de contenido, UGC y marketing que alimenta el pipeline de creadores de LiveCake.",
    contributions: [
      "Estrategia creativa",
      "Producción de lives y spots",
      "Pipeline de creadores capacitados",
      "Posicionamiento de marca",
      "Presencia estratégica con clientes grandes",
    ],
    credential:
      "Co-fundador Los Reyes del Contenido · Productor audiovisual con expertise en contenido para conversión",
    imageSrc: "/brand/sobre-nosotros/lucas-spot.webp",
  },
  {
    name: "Alexander Cast",
    initials: "AC",
    role: "Co-fundador · Director de Estrategia y Operaciones",
    participation: "25%",
    description:
      "Alexander tiene más de 10 años en marketing digital, Meta Ads y ecommerce en LATAM. Construyó SICOMMER — uno de los proveedores de dropshipping más grandes de Colombia — y ha operado negocios digitales en Colombia, Ecuador, Guatemala, Costa Rica y República Dominicana. Hoy lidera la estrategia comercial, las operaciones y la red de clientes de LiveCake.",
    contributions: [
      "Ejecución operativa completa",
      "Red de dropshippers y marcas en LATAM",
      "Estrategia de tráfico y pauta",
      "Gestión comercial",
      "Relaciones con Dropi, Hoco, Gintracom y Hotmart",
    ],
    credential:
      "10+ años en Meta Ads · Fundador SICOMMER · Estratega digital y experto en ecommerce LATAM · Docente de IA en Universidad Remington",
    imageSrc: "/brand/sobre-nosotros/alexander-cast.webp",
  },
];

function FounderAvatar({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-brand-green/15 flex items-center justify-center flex-shrink-0">
      <span className="text-brand-green font-bold text-2xl font-display select-none">
        {initials}
      </span>
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top absolute inset-0"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

export function SobreFundadores() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.05,
  });

  return (
    <section
      id="fundadores"
      aria-labelledby="fundadores-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(22,163,74,0.04), transparent 60%)",
        }}
      />

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            El equipo
          </span>
          <h2
            id="fundadores-title"
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-neutral-900 tracking-tight uppercase mb-4"
          >
            Los tres{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #15803d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              fundadores
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-500 leading-relaxed">
            Tecnología, estrategia y ejecución. Cada fundador aporta lo que el
            sistema necesita para funcionar.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {FOUNDERS.map((founder, i) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label={`Fundador: ${founder.name}`}
              className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all duration-300"
            >
              {/* Header de tarjeta */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start mb-6">
                <FounderAvatar
                  src={founder.imageSrc}
                  alt={founder.name}
                  initials={founder.initials}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display text-[clamp(1.4rem,3vw,1.8rem)] leading-none text-neutral-900">
                      {founder.name}
                    </h3>
                    <span className="flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-sans font-bold tracking-widest uppercase bg-neutral-100 text-neutral-500 border border-neutral-200">
                      {founder.participation}
                    </span>
                  </div>
                  <p className="text-sm font-sans font-semibold text-brand-green">
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                {founder.description}
              </p>

              {/* Aportes */}
              <div className="mb-5">
                <p className="text-[11px] font-sans font-bold tracking-widest uppercase text-neutral-400 mb-3">
                  Aporte a LiveCake
                </p>
                <div className="flex flex-wrap gap-2">
                  {founder.contributions.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-medium bg-brand-green/[0.08] text-brand-green border border-brand-green/20"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credencial */}
              <div className="flex items-start gap-2.5 rounded-xl bg-neutral-50 border border-neutral-100 px-4 py-3">
                <Star
                  className="h-4 w-4 text-brand-green flex-shrink-0 mt-0.5"
                  aria-hidden
                />
                <p className="text-xs sm:text-sm text-neutral-600 leading-snug">
                  {founder.credential}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Nota de fotos */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-[11px] text-neutral-400 text-center"
        >
          Las fotos de los fundadores se actualizarán con imágenes reales próximamente.
        </motion.p>
      </div>
    </section>
  );
}
