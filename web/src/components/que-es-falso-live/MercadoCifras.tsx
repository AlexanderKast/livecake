import marketStats from "@/data/market-stats.json";

interface StatEntry {
  id: string;
  category: string;
  label: string;
  value: string;
  valueShort: string;
  context: string;
  year: number;
  source: string;
  sourceUrl: string;
}

const STAT_IDS = [
  "conversion-live-vs-ecom",
  "retention-10min",
  "returns-reduction",
  "latam-market-2024",
  "tiktok-shop-gmv-2025",
  "magalu-bf-2024",
] as const;

type StatId = (typeof STAT_IDS)[number];

const statsMap = Object.fromEntries(
  (marketStats.stats as StatEntry[]).map((s) => [s.id, s])
) as Record<string, StatEntry>;

const DISPLAY_STATS: Array<{
  id: StatId;
  emphasis: string;
  colorClass: string;
}> = [
  {
    id: "conversion-live-vs-ecom",
    emphasis: "30%",
    colorClass: "text-brand-green",
  },
  { id: "retention-10min", emphasis: "60%+", colorClass: "text-brand-green" },
  {
    id: "returns-reduction",
    emphasis: "-40%",
    colorClass: "text-brand-green",
  },
  {
    id: "latam-market-2024",
    emphasis: "$3.87B",
    colorClass: "text-brand-black",
  },
  {
    id: "tiktok-shop-gmv-2025",
    emphasis: "$66B",
    colorClass: "text-brand-black",
  },
  { id: "magalu-bf-2024", emphasis: "$240M", colorClass: "text-brand-black" },
];

export function MercadoCifras() {
  return (
    <section
      id="mercado"
      aria-labelledby="mercado-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-brand-cream"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            Datos de mercado
          </span>
          <h2
            id="mercado-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            El live commerce ya es una realidad en LATAM
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg max-w-2xl">
            Estas cifras no son proyecciones optimistas — son datos publicados
            por McKinsey, Grand View Research, Immerss y plataformas activas.
          </p>
        </div>

        {/* Grid de stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DISPLAY_STATS.map(({ id, emphasis, colorClass }) => {
            const stat = statsMap[id];
            if (!stat) return null;
            return (
              <article
                key={id}
                className="relative flex flex-col justify-between bg-white rounded-2xl border border-brand-cream p-6 hover:border-brand-green/30 hover:shadow-[0_4px_24px_rgba(0,214,79,0.10)] transition-all duration-200"
              >
                {/* Cifra grande */}
                <div className="mb-4">
                  <p
                    className={`font-display text-[clamp(2rem,6vw,3.5rem)] leading-none font-bold ${colorClass}`}
                    aria-label={`${stat.label}: ${stat.value}`}
                  >
                    {emphasis}
                  </p>
                  <p className="mt-2 text-sm font-medium text-brand-black leading-snug">
                    {stat.label}
                  </p>
                </div>

                {/* Context + source */}
                <div className="space-y-2">
                  <p className="text-xs text-brand-gray leading-relaxed">
                    {stat.context}
                  </p>
                  {stat.sourceUrl ? (
                    <a
                      href={stat.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[10px] text-brand-gray/60 hover:text-brand-green transition-colors underline underline-offset-2"
                      aria-label={`Fuente: ${stat.source}`}
                    >
                      Fuente: {stat.source}
                    </a>
                  ) : (
                    <p className="text-[10px] text-brand-gray/60">
                      Fuente: {stat.source}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-brand-gray/60">
          Datos actualizados a{" "}
          <time dateTime={marketStats.lastUpdated}>{marketStats.lastUpdated}</time>.{" "}
          {marketStats.currency} salvo indicación contraria.
        </p>
      </div>
    </section>
  );
}
