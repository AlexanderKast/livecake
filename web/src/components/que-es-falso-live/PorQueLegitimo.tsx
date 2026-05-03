import marketStats from "@/data/market-stats.json";
import { ShieldCheck } from "lucide-react";

interface StatEntry {
  id: string;
  label: string;
  value: string;
  context: string;
  source: string;
  sourceUrl: string;
}

const statsMap = Object.fromEntries(
  (marketStats.stats as StatEntry[]).map((s) => [s.id, s])
);

const pancakeStat = statsMap["pancake-partnerships"];
const tiktokPolicyStat = statsMap["tiktok-pre-recorded-policy"];

const PARTNER_BADGES = [
  { label: "Meta", sublabel: "Partner oficial" },
  { label: "TikTok", sublabel: "Partner oficial" },
  { label: "Google", sublabel: "Partner oficial" },
] as const;

export function PorQueLegitimo() {
  return (
    <section
      id="legitimo"
      aria-labelledby="legitimo-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            Legitimidad y compliance
          </span>
          <h2
            id="legitimo-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            ¿Por qué esto es completamente legítimo?
          </h2>
        </div>

        {/* Dark card principal */}
        <div
          className="relative overflow-hidden rounded-2xl p-7 sm:p-10 mb-10"
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            boxShadow: "0 20px 60px -10px rgba(0,214,79,0.20)",
          }}
        >
          {/* Glow decorativo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(0,214,79,0.12) 0%, transparent 60%)",
            }}
          />

          <div className="relative flex flex-col sm:flex-row items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-brand-green" aria-hidden />
            </div>

            <div>
              <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
                "Pancake es <strong className="text-brand-green">partner oficial de Meta, TikTok y Google</strong>.
                La integración pasa por Conversion API y los SDKs aprobados por las
                tres plataformas. No es ingeniería contra los TOS — es la{" "}
                <strong className="text-brand-green">
                  única vía partner-aprobada para correr live commerce 24/7
                </strong>{" "}
                en LATAM."
              </p>

              {pancakeStat && (
                <p className="mt-4 text-xs text-white/40">
                  Fuente:{" "}
                  <span className="text-white/60">{pancakeStat.source}</span>{" "}
                  —{" "}
                  <span className="text-white/60">{pancakeStat.context}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Badges de partnership */}
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          aria-label="Partnerships oficiales de Pancake"
        >
          {PARTNER_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-5 px-4 rounded-2xl border-2 border-brand-green/20 bg-brand-green/5 hover:border-brand-green/40 hover:bg-brand-green/8 transition-all"
            >
              <span className="font-display text-2xl font-bold text-brand-black">
                {badge.label}
              </span>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-green">
                {badge.sublabel}
              </span>
            </div>
          ))}
        </div>

        {/* Detalle técnico */}
        {tiktokPolicyStat && (
          <div className="mt-8 p-5 rounded-xl bg-brand-cream border border-brand-cream">
            <p className="text-sm text-brand-gray leading-relaxed">
              <strong className="text-brand-black">Nota técnica:</strong>{" "}
              {tiktokPolicyStat.context} —{" "}
              <a
                href={tiktokPolicyStat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:underline"
                aria-label={`Fuente: ${tiktokPolicyStat.source}`}
              >
                {tiktokPolicyStat.source}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
