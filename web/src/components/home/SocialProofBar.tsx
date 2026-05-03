"use client";

import { useIntersection } from "@/hooks/use-intersection";
import { useCountUp } from "@/hooks/use-count-up";

// ── Data ──────────────────────────────────────────────────────────────────────
interface StatItem {
  value: number;
  suffix: string;
  label: string;
  source: string;
  decimals?: number;
}

const STATS: StatItem[] = [
  {
    value: 30,
    suffix: "%",
    label: "Conversión promedio en live shopping",
    source: "Fuente: McKinsey",
  },
  {
    value: 3,
    suffix: "×",
    label: "Más ventas vs. landing page tradicional",
    source: "Datos: Immerss + Coresight",
  },
  {
    value: 10,
    suffix: " días",
    label: "De contrato a sistema funcionando en vivo",
    source: "Proceso LiveCake",
  },
];

const TEXT_STAT = {
  display: "24/7",
  label: "Tu live corriendo solo, sin intervención",
  source: "Powered by Pancake",
};

// ── Shared style ──────────────────────────────────────────────────────────────
const greenGradient: React.CSSProperties = {
  background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// ── Stat sub-component ────────────────────────────────────────────────────────
interface StatProps extends StatItem {
  trigger: boolean;
}

function Stat({ value, suffix, label, source, decimals = 0, trigger }: StatProps) {
  const count = useCountUp({ end: value, duration: 1500, trigger, decimals });

  return (
    <div className="flex flex-col items-center gap-1 px-6 py-5 flex-1 min-w-0">
      <span
        className="font-display text-4xl sm:text-5xl leading-none"
        style={greenGradient}
        aria-label={`${count}${suffix}`}
      >
        {count}{suffix}
      </span>
      <span className="text-xs sm:text-sm text-brand-gray tracking-wide text-center font-sans mt-0.5">
        {label}
      </span>
      <span className="text-[10px] text-brand-gray tracking-wide text-center font-sans opacity-60">
        {source}
      </span>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function SocialProofBar() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.3,
    once: true,
  });

  return (
    <section
      ref={ref}
      aria-label="Métricas clave de live shopping"
      className="relative border-y border-neutral-200 bg-neutral-50 overflow-hidden"
    >
      {/* Glow line top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent"
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">

          {STATS.map((s) => (
            <Stat key={s.label} {...s} trigger={isIntersecting} />
          ))}

          {/* Stat 4: "24/7" — valor mixto, sin animación de conteo */}
          <div className="flex flex-col items-center gap-1 px-6 py-5 flex-1 min-w-0">
            <span
              className="font-display text-4xl sm:text-5xl leading-none"
              style={greenGradient}
              aria-label={TEXT_STAT.display}
            >
              {TEXT_STAT.display}
            </span>
            <span className="text-xs sm:text-sm text-brand-gray tracking-wide text-center font-sans mt-0.5">
              {TEXT_STAT.label}
            </span>
            <span className="text-[10px] text-brand-gray tracking-wide text-center font-sans opacity-60">
              {TEXT_STAT.source}
            </span>
          </div>

        </div>
      </div>

      {/* Glow line bottom */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent"
      />
    </section>
  );
}
