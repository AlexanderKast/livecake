"use client";

import Image from "next/image";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { SiTiktok } from "@/components/home/icons";
import { trackSocialClick, trackWhatsappClick } from "@/lib/tracking/events";

const NAV_LINKS = {
  agencia: [
    { label: "Servicios", href: "#servicios" },
    { label: "Casos", href: "#casos" },
    { label: "Precios", href: "#pricing" },
    { label: "Sobre nosotros", href: "/sobre-nosotros" },
    { label: "Blog", href: "/blog" },
  ],
  recursos: [
    { label: "Live shopping playbook", href: "/recursos/live-shopping-playbook" },
    { label: "Preguntas frecuentes", href: "#faq" },
    { label: "Llamada inicial", href: "#diagnostico" },
    { label: "Contacto", href: "#diagnostico" },
  ],
  legal: [
    { label: "Política de privacidad", href: "/legal/privacidad" },
    { label: "Términos y condiciones", href: "/legal/terminos" },
    { label: "Cookies", href: "/legal/cookies" },
  ],
};

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/livecake",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@livecake",
    icon: SiTiktok,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/livecake",
    icon: Linkedin,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/573001234567",
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer
      className="relative border-t border-neutral-200 bg-neutral-50 text-brand-black"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            <a
              href="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-sm"
              aria-label="Live Cake - Inicio"
            >
              <Image
                src="/brand/logo-light-bg.png"
                alt="Live Cake"
                width={180}
                height={52}
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-6 text-sm text-neutral-500 max-w-xs leading-relaxed">
              Live shopping + falsos lives 24/7 sobre Pancake. Partner oficial
              Meta + TikTok + Google. Sin comisión sobre ventas.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                const network = s.name.toLowerCase();
                const handleClick = () => {
                  if (network === "whatsapp") {
                    trackWhatsappClick("footer");
                  } else if (
                    network === "instagram" ||
                    network === "tiktok" ||
                    network === "linkedin"
                  ) {
                    trackSocialClick(network, "footer");
                  }
                };
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    onClick={handleClick}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-neutral-200 text-neutral-500 hover:text-brand-green hover:border-brand-green/40 hover:bg-brand-green/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                  >
                    <Icon className="w-5 h-5" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-bold text-neutral-900 tracking-[0.2em] uppercase mb-5">
                Agencia
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.agencia.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-neutral-500 hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-sm"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-neutral-900 tracking-[0.2em] uppercase mb-5">
                Recursos
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.recursos.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-neutral-500 hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-sm"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-neutral-900 tracking-[0.2em] uppercase mb-5">
                Legal
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.legal.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-neutral-500 hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-sm"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © 2026 Live Cake · Todos los derechos reservados.
          </p>
          <p className="text-xs text-neutral-400">
            Hecho con{" "}
            <span className="text-brand-green" aria-hidden>
              ★
            </span>{" "}
            en Medellín, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
