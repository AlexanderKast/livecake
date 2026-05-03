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

interface MercadoStat {
  id: string;
  emphasis: string;
  colorClass: string;
}

interface AvatarMercadoProps {
  stats: MercadoStat[];
  tituloSeccion?: string;
  subtituloSeccion?: string;
}

const statsMap = Object.fromEntries(
  (marketStats.stats as StatEntry[]).map((s) => [s.id, s])
) as Record<string, StatEntry>;

export function AvatarMercado({
  stats,
  tituloSeccion = "El mercado que no espera",
  subtituloSeccion = "Cifras publicadas por McKinsey, Grand View Research e Immerss.",
}: AvatarMercadoProps) {
  return (
    <section
      id="mercado"
      aria-labelledby="mercado-avatar-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-brand-cream"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            Datos de mercado
          </span>
          <h2
            id="mercado-avatar-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            {tituloSeccion}
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg max-w-2xl">
            {subtituloSeccion}
          </p>
        </div>

        {/* Grid stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ id, emphasis, colorClass }) => {
            const stat = statsMap[id];
            if (!stat) return null;
            return (
              <article
                key={id}
                className="relative flex flex-col justify-between bg-white rounded-2xl border border-brand-cream p-6 hover:border-brand-green/30 hover:shadow-[0_4px_24px_rgba(0,214,79,0.10)] transition-all duration-200"
              >
                <div className="mb-4">
                  <p
                    className={`font-display text-[clamp(2rem,6vw,3rem)] leading-none font-bold ${colorClass}`}
                    aria-label={`${stat.label}: ${stat.value}`}
                  >
                    {emphasis}
                  </p>
                  <p className="mt-2 text-sm font-medium text-brand-black leading-snug">
                    {stat.label}
                  </p>
                </div>
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

        <p className="mt-8 text-center text-xs text-brand-gray/60">
          Datos actualizados a{" "}
          <time dateTime={marketStats.lastUpdated}>{marketStats.lastUpdated}</time>.{" "}
          {marketStats.currency} salvo indicación contraria.
        </p>
      </div>
    </section>
  );
}
