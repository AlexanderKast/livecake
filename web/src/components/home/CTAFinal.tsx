"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

const WA_NUMBER = "573113842399";
const WA_MESSAGE = encodeURIComponent(
  "Hola, quiero información sobre LiveCake y agendar un diagnóstico gratuito."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const REASSURANCE = [
  "Sin compromiso de compra",
  "Te mostramos el sistema funcionando en vivo",
  "Respuesta en menos de 24 horas",
];

export function CTAFinal() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Imagen de fondo */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/brand/home/cta-final-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Overlay oscuro — mantiene paleta del sistema */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.80) 50%, rgba(10,10,10,0.88) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(22,163,74,0.22) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 80% 80%, rgba(22,163,74,0.14) 0%, transparent 55%)",
          }}
        />

        {/* Gradient border */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            padding: "2px",
            background:
              "linear-gradient(135deg, rgba(22,163,74,0.7), rgba(22,163,74,0.4) 40%, rgba(22,163,74,0.15) 70%, transparent 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Noise grid pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative px-6 sm:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 lg:py-28">
          <div className="flex flex-col items-start gap-7 max-w-4xl">
            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-xs font-semibold text-brand-green tracking-[0.2em] uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              Diagnóstico gratuito · 20 minutos
            </motion.span>

            {/* Headline */}
            <motion.h2
              id="cta-heading"
              className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] text-white tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              ¿Cuántas ventas estás{" "}
              <span className="text-brand-green">dejando ir hoy?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="max-w-2xl text-base sm:text-lg lg:text-xl text-brand-gray leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Agenda un diagnóstico gratuito de 20 minutos. Te mostramos
              exactamente cómo quedaría el sistema de live para tu negocio
              antes de que tomes cualquier decisión.
            </motion.p>

            {/* Reassurance items */}
            <motion.ul
              className="flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              {REASSURANCE.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-sm sm:text-base text-white/85">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* CTA primario */}
              <a
                href="/diagnostico"
                className="group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 sm:py-5 rounded-xl bg-brand-green text-white font-semibold text-base sm:text-lg tracking-wide overflow-hidden min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-green transition-all duration-200 hover:bg-brand-green-dark"
                style={{
                  boxShadow:
                    "0 10px 40px -10px rgba(22,163,74,0.5), 0 0 80px -20px rgba(22,163,74,0.35)",
                }}
              >
                <span className="relative z-10">Agendar diagnóstico gratuito</span>
                <ArrowRight
                  className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
                {/* Shine effect */}
                <span
                  aria-hidden
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  }}
                />
              </a>

              {/* CTA secundario — WhatsApp */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-brand-green hover:text-white border border-brand-green/30 hover:border-brand-green/60 hover:bg-brand-green/10 transition-all duration-200 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" aria-hidden />
                O escríbenos directo por WhatsApp
              </a>
            </motion.div>

            {/* Avatar stack — social proof */}
            <motion.div
              className="flex flex-col items-start gap-3 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex items-center -space-x-2.5">
                {[
                  { name: "Shop Tokio", logo: "https://shoptokio.co/cdn/shop/files/gempages_513541607190955198-297e6fa2-f0e0-455a-bdf4-12a9388c792d.webp?v=1728089603&width=260" },
                  { name: "Altevo", logo: "https://altevo.com.co/cdn/shop/files/Altevo_Logo.png?v=1758591345&width=150" },
                  { name: "Vitalcom", logo: "/brand/logos/vitalcom.png" },
                  { name: "Bioboosters", logo: "https://bioboosters.co/cdn/shop/files/Logo_Blanco.png?v=1758762956&width=290" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-green/20 to-brand-green-dark/10 border-2 border-white/20 flex items-center justify-center overflow-hidden"
                    title={c.name}
                  >
                    <img
                      src={c.logo}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-contain p-1.5 brightness-0 invert opacity-80"
                    />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-brand-green/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-brand-green/60 font-sans">+</span>
                </div>
              </div>
              <p className="text-xs text-brand-gray">
                Marcas en Colombia y LATAM ya transmiten con Live Cake
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
