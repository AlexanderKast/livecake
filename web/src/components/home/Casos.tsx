"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type AvatarCard = {
  id: string;
  badge: string;
  image: string;
  imageAlt: string;
  dolorTitulo: string;
  descripcion: string;
  promesa: string;
  ctaLabel: string;
  ctaHref: string;
};

const AVATARES: AvatarCard[] = [
  {
    id: "dropshipper",
    badge: "Dropshipping · Ecommerce",
    image: "/brand/casos/avatar-dropshipper.png",
    imageAlt: "Carlos — dropshipper con ecommerce en LATAM",
    dolorTitulo: "Tu ROAS está en 1.5x y las devoluciones te comen el margen",
    descripcion:
      "Tienes el producto. Tienes la pauta. Pero la landing no convierte y el cliente compra sin certeza y devuelve.",
    promesa:
      "Un live 24/7 integrado con Dropi, Hoco o Gintracom. WhatsApp automatizado. Sin tocar nada.",
    ctaLabel: "Ver solución para dropshippers",
    ctaHref: "/para/dropshippers",
  },
  {
    id: "infoproductora",
    badge: "Cursos · Mentorías · Coaches",
    image: "/brand/casos/avatar-infoproductora.png",
    imageAlt: "Valentina — infoproductora y coach digital",
    dolorTitulo: "Solo vendes cuando lanzas. Entre lanzamientos, silencio.",
    descripcion:
      "Tus webinars ya no convierten como antes. El mercado se saturó de gratuitos. Necesitas un canal que venda todos los días.",
    promesa:
      "Tu webinar convertido en live evergreen. Integrado con Hotmart. Corriendo solo mientras creas tu próximo contenido.",
    ctaLabel: "Ver solución para infoproductores",
    ctaHref: "/para/infoproductores",
  },
  {
    id: "marca",
    badge: "Marcas · Retail · Producto propio",
    image: "/brand/casos/avatar-marca.png",
    imageAlt: "Rodrigo — empresario con marca propia",
    dolorTitulo: "Mercado Libre se queda con el 20% de cada venta tuya",
    descripcion:
      "Tienes marca, tienes producto, tienes clientes. Pero dependes de un marketplace que te cobra, te compite y te controla.",
    promesa:
      "Canal de venta directa 24/7. Sin comisión. Sin intermediarios. Tu marca en vivo en tu propio dominio.",
    ctaLabel: "Ver solución para marcas",
    ctaHref: "/para/marcas",
  },
];

export function Casos() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <section
      id="casos"
      aria-labelledby="casos-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20 sm:scroll-mt-24 overflow-hidden"
    >
      {/* Glow ambiental */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 35% at 50% 0%, rgba(22,163,74,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-5"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/10 text-brand-green border border-brand-green/30">
            Tu perfil
          </span>
          <h2
            id="casos-title"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-neutral-900 tracking-tight"
          >
            ¿Para quién es LiveCake?
          </h2>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-neutral-500 text-sm sm:text-base font-sans max-w-xl mx-auto mb-12 sm:mb-16 leading-relaxed"
        >
          Tres tipos de negocio. Tres dolores distintos. Un mismo sistema.
        </motion.p>

        {/* Grid 3 avatar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
          {AVATARES.map((avatar, i) => (
            <motion.article
              key={avatar.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-2xl border border-neutral-200 bg-white overflow-hidden flex flex-col transition-all duration-300 hover:border-brand-green/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(22,163,74,0.20)]"
            >
              {/* Gradient border on hover */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, rgba(22,163,74,0.5), rgba(22,163,74,0.15), transparent 60%)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />

              {/* Imagen avatar */}
              <div className="relative h-52 sm:h-56 bg-neutral-100 overflow-hidden flex-shrink-0">
                <Image
                  src={avatar.image}
                  alt={avatar.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Fade al contenido */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                {/* Badge flotante */}
                <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-sans font-bold tracking-widest uppercase bg-brand-green text-white shadow-sm">
                  {avatar.badge}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Dolor */}
                <h3 className="font-display text-lg sm:text-xl text-neutral-900 leading-tight mb-3">
                  {avatar.dolorTitulo}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-grow">
                  {avatar.descripcion}
                </p>

                {/* Promesa */}
                <div className="flex items-start gap-2.5 mb-6 p-3.5 rounded-xl bg-brand-green/5 border border-brand-green/15">
                  <CheckCircle2
                    className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0"
                    aria-hidden
                  />
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {avatar.promesa}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={avatar.ctaHref}
                  className="group/cta inline-flex items-center justify-between gap-2 w-full px-4 py-3 rounded-xl border border-brand-green/30 text-brand-green text-sm font-sans font-semibold hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                >
                  <span>{avatar.ctaLabel}</span>
                  <ArrowRight
                    className="h-4 w-4 flex-shrink-0 transition-transform group-hover/cta:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
