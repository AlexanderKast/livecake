import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export function CTAFinalPage() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-page-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16"
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            boxShadow:
              "0 30px 80px -20px rgba(0,214,79,0.25), 0 0 0 1px rgba(0,214,79,0.15)",
          }}
        >
          {/* Glow decorativo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(0,214,79,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(0,214,79,0.08) 0%, transparent 60%)",
            }}
          />
          {/* Grid decorativo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,214,79,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,214,79,0.06) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative flex flex-col items-start gap-6 max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-xs font-semibold tracking-[0.2em] uppercase text-brand-green">
              <Clock className="w-3.5 h-3.5" aria-hidden />
              Diagnóstico gratuito
            </span>

            {/* Headline */}
            <h2
              id="cta-page-heading"
              className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.93] text-white tracking-tight"
            >
              20 minutos.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00d64f, #00f25f)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Te decimos exactamente
              </span>{" "}
              cómo se vería tu live.
            </h2>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              Sin compromiso. En 20 minutos de diagnóstico te mostramos el
              guión del live, el stack de Pancake que usarías y la proyección
              de conversión estimada para tu producto.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="/agendar"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-brand-green text-white font-semibold text-base tracking-wide min-h-[52px] hover:bg-brand-green-dark transition-all shadow-[0_0_28px_rgba(0,214,79,0.40)] hover:shadow-[0_0_40px_rgba(0,214,79,0.60)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Agendar diagnóstico gratuito de live shopping"
              >
                Agendar diagnóstico
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/diagnostico"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-white/20 text-white/80 font-semibold text-base min-h-[52px] hover:bg-white/5 hover:border-white/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Hacer diagnóstico propio de live shopping"
              >
                Diagnóstico propio →
              </Link>
            </div>

            {/* Micro trust */}
            <p className="text-xs text-white/40">
              Sin spam. Sin presión de venta. Solo claridad sobre si el sistema
              es para tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
