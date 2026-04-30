"use client";

import { useEffect, useState } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { useCountUp } from "@/hooks/use-count-up";

interface MetricProps {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  trigger: boolean;
}

function Metric({ prefix, value, suffix, label, decimals = 0, trigger }: MetricProps) {
  const count = useCountUp({ end: value, duration: 1800, trigger, decimals });

  return (
    <div className="flex flex-col items-center gap-1.5 px-6 py-5 flex-1 min-w-0">
      <span
        className="font-display text-4xl sm:text-5xl leading-none"
        style={{
          background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        aria-label={`${prefix ?? ""}${count}${suffix ?? ""}`}
      >
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm text-brand-gray tracking-wide text-center font-sans">
        {label}
      </span>
    </div>
  );
}

interface MetricItem {
  prefix?: string;
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

const FALLBACK_METRICS: MetricItem[] = [
  { prefix: "+", value: 30, suffix: "", label: "Presentadores entrenados", decimals: 0 },
  { prefix: "", value: 60, suffix: "%+", label: "Retención a 10 min en live", decimals: 0 },
  { prefix: "", value: 27.2, suffix: "%", label: "CAGR mercado LATAM 2033", decimals: 1 },
];

const TEXT_METRICS = ["24/7"];

interface KreoonStatsDTO {
  creators_count: number;
  brands_count: number;
  campaigns_completed: number;
  videos_approved: number;
}

export function SocialProofBar() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.3,
    once: true,
  });
  const [metrics, setMetrics] = useState<MetricItem[]>(FALLBACK_METRICS);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/showcase?action=stats", { cache: "no-store" })
      .then(r => r.ok ? r.json() : null)
      .then((json: { success: boolean; data: KreoonStatsDTO | null } | null) => {
        if (cancelled || !json?.success || !json.data) return;
        const { creators_count, videos_approved, campaigns_completed } = json.data;
        const next: MetricItem[] = [
          creators_count > 0
            ? { prefix: "+", value: creators_count, label: "Presentadores entrenados" }
            : FALLBACK_METRICS[0],
          videos_approved > 0
            ? { prefix: "+", value: videos_approved, label: "Lives producidos" }
            : FALLBACK_METRICS[1],
          campaigns_completed > 0
            ? { prefix: "+", value: campaigns_completed, label: "Campañas live entregadas" }
            : FALLBACK_METRICS[2],
        ];
        setMetrics(next);
      })
      .catch(() => { /* fallback ya cargado */ });
    return () => { cancelled = true; };
  }, []);

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
          {metrics.map((m) => (
            <Metric key={m.label} {...m} trigger={isIntersecting} />
          ))}

          {/* Métrica de texto estática — live 24/7 */}
          <div className="flex flex-col items-center gap-1.5 px-6 py-5 flex-1 min-w-0">
            <span
              className="font-display text-3xl sm:text-4xl leading-none"
              style={{
                background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {TEXT_METRICS[0]}
            </span>
            <span className="text-xs sm:text-sm text-neutral-500 tracking-wide text-center font-sans">
              Marcas que ya transmiten con Live Cake
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
