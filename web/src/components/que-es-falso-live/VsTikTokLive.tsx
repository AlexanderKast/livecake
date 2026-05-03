import marketStats from "@/data/market-stats.json";

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

const tiktokPolicyStat = statsMap["tiktok-pre-recorded-policy"];

interface CompareColumn {
  title: string;
  badge: string;
  badgeColor: string;
  points: string[];
  footer: string;
}

const COLUMNS: CompareColumn[] = [
  {
    title: "TikTok Live nativo",
    badge: "Para creadores en directo",
    badgeColor: "bg-brand-red-live/10 text-brand-red-live border-brand-red-live/30",
    points: [
      "Requiere que el creador esté presente y transmitiendo en tiempo real",
      "Depende del horario — cuando termina el live, termina la venta",
      "Prohibido reproducir video pre-grabado en bucle según TikTok Community Guidelines",
      "Audiencia limitada a quienes están conectados en ese momento",
      "No se puede optimizar ni hacer A/B testing del contenido",
    ],
    footer:
      "Ideal para: comunidades de creadores, streaming en tiempo real, IRL content.",
  },
  {
    title: "Pancake + LiveCake",
    badge: "Para marcas con conversión continua",
    badgeColor: "bg-brand-green/10 text-brand-green border-brand-green/30",
    points: [
      "El live corre 24/7 sin ningún humano en cámara en tiempo real",
      "Los ads de TikTok llevan tráfico al live de Pancake — no a TikTok Live nativo",
      "Pancake es partner oficial de TikTok: la integración es aprobada por la plataforma",
      "La audiencia crece con el presupuesto de ads, no con el horario del creador",
      "A/B testing de guión, timing de CTAs y momentos de oferta a voluntad",
    ],
    footer:
      "Ideal para: e-commerce, dropshippers, infoproductores, marcas DTC que quieren vender sin interrupciones.",
  },
];

export function VsTikTokLive() {
  return (
    <section
      id="vs-tiktok-live"
      aria-labelledby="vs-tiktok-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-brand-cream"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            Aclaración importante
          </span>
          <h2
            id="vs-tiktok-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            Diferencia con TikTok Live nativo
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg max-w-2xl">
            No son lo mismo — y entender la diferencia es fundamental para
            saber por qué el modelo de Pancake existe.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLUMNS.map((col) => (
            <article
              key={col.title}
              className="bg-white rounded-2xl border border-brand-cream p-6 sm:p-8 flex flex-col"
            >
              {/* Badge */}
              <span
                className={`self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-5 ${col.badgeColor}`}
              >
                {col.badge}
              </span>

              <h3 className="font-display text-xl font-bold text-brand-black mb-5">
                {col.title}
              </h3>

              <ul className="space-y-3 flex-1" role="list">
                {col.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-gray leading-relaxed">
                    <span
                      aria-hidden
                      className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-brand-gray/40"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-brand-cream">
                <p className="text-xs text-brand-black font-medium leading-relaxed">
                  {col.footer}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Son complementarios — callout */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-brand-green/20">
          <p className="text-sm sm:text-base text-brand-black leading-relaxed text-center font-medium">
            Son <strong className="text-brand-green">complementarios</strong>,
            no sustitutos. Una marca puede usar TikTok Live para community
            building con su creador estrella y a la vez correr un falso live en
            Pancake 24/7 para conversión continua.
          </p>
          {tiktokPolicyStat && (
            <p className="mt-3 text-center text-xs text-brand-gray/60">
              Política de TikTok Live referenciada en:{" "}
              <a
                href={tiktokPolicyStat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:underline"
                aria-label="TikTok LIVE Community Guidelines"
              >
                {tiktokPolicyStat.source}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
