import Link from "next/link";
import { ArrowRight, Radio } from "lucide-react";

export function QeFalsoLiveHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
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
      {/* Radial glow sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,214,79,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Pill LIVE 24/7 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red-live/30 bg-brand-red-live/5 mb-8">
          <span
            aria-hidden
            className="w-2.5 h-2.5 rounded-full bg-brand-red-live animate-live-pulse flex-shrink-0"
          />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-red-live">
            LIVE 24/7
          </span>
          <Radio className="w-3.5 h-3.5 text-brand-red-live" aria-hidden />
        </div>

        {/* Headline principal */}
        <h1
          id="hero-heading"
          className="font-display text-[clamp(2rem,6.5vw,5.5rem)] leading-[0.92] tracking-tight text-brand-black mb-6"
        >
          Tu landing convierte al{" "}
          <span className="text-brand-gray line-through decoration-brand-red-live/60">
            3%
          </span>
          .<br />
          Un live convierte al{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00d64f, #00f25f)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            30%
          </span>
          .<br />
          <span className="text-brand-black">
            ¿Y si tu live nunca parara?
          </span>
        </h1>

        {/* Subhead */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-gray leading-relaxed mb-10">
          El <strong className="text-brand-black">falso live</strong> es un
          video pregrabado que corre como transmisión en vivo, 24 horas al día,
          7 días a la semana — sobre{" "}
          <strong className="text-brand-black">Pancake</strong>, el único
          partner oficial de Meta, TikTok y Google para live commerce en LATAM.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/agendar"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 rounded-xl bg-brand-green text-white font-semibold text-base tracking-wide min-h-[52px] hover:bg-brand-green-dark transition-all shadow-[0_0_28px_rgba(0,214,79,0.35)] hover:shadow-[0_0_40px_rgba(0,214,79,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
            aria-label="Ver demo del falso live"
          >
            Ver demo
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
          <a
            href="#mercado"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-xl border border-brand-black/20 text-brand-black font-semibold text-base min-h-[52px] hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2"
            aria-label="Ver mercado LATAM en cifras"
          >
            Ver mercado LATAM ↓
          </a>
        </div>
      </div>
    </section>
  );
}
