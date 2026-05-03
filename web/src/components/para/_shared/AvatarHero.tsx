import Link from "next/link";
import { ArrowRight, Radio } from "lucide-react";

interface AvatarHeroProps {
  avatarLabel: string;
  headline: React.ReactNode;
  subHeadline: string;
  stackTicker: string[];
  ctaDemoLabel?: string;
  mercadoAnchor?: string;
}

export function AvatarHero({
  avatarLabel,
  headline,
  subHeadline,
  stackTicker,
  ctaDemoLabel = "Ver demo →",
  mercadoAnchor = "#mercado",
}: AvatarHeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="avatar-hero-heading"
      className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      {/* Grid decorativo de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,214,79,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,214,79,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,214,79,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Pill avatar + LIVE 24/7 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red-live/30 bg-brand-red-live/5 mb-4">
          <span
            aria-hidden
            className="w-2.5 h-2.5 rounded-full bg-brand-red-live animate-live-pulse flex-shrink-0"
          />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-red-live">
            LIVE 24/7
          </span>
          <Radio className="w-3.5 h-3.5 text-brand-red-live" aria-hidden />
        </div>

        {/* Avatar tag */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-xs font-semibold tracking-[0.15em] uppercase text-brand-green">
            {avatarLabel}
          </span>
        </div>

        {/* Headline */}
        <h1
          id="avatar-hero-heading"
          className="font-display text-[clamp(1.9rem,6vw,5rem)] leading-[0.93] tracking-tight text-brand-black mb-6"
        >
          {headline}
        </h1>

        {/* Subhead */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-gray leading-relaxed mb-8">
          {subHeadline}
        </p>

        {/* Stack ticker */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          aria-label="Integraciones soportadas"
        >
          {stackTicker.map((item) => (
            <span
              key={item}
              className="px-3 py-1 rounded-md bg-brand-cream border border-brand-black/8 text-xs font-medium text-brand-gray"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/agendar"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 rounded-xl bg-brand-green text-white font-semibold text-base tracking-wide min-h-[52px] hover:bg-brand-green-dark transition-all shadow-[0_0_28px_rgba(0,214,79,0.35)] hover:shadow-[0_0_40px_rgba(0,214,79,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
            aria-label={ctaDemoLabel}
          >
            {ctaDemoLabel}
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
          <a
            href={mercadoAnchor}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-xl border border-brand-black/20 text-brand-black font-semibold text-base min-h-[52px] hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
            aria-label="Ver mercado en cifras"
          >
            Ver mercado ↓
          </a>
        </div>

        {/* Pancake badge */}
        <p className="mt-8 text-xs text-brand-gray/60">
          Sistema montado sobre{" "}
          <strong className="text-brand-black/70">Pancake</strong> — partner
          oficial de Meta + TikTok + Google en LATAM.
        </p>
      </div>
    </section>
  );
}
