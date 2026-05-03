import type { DolorCard } from "./types";

interface AvatarDoloresProps {
  dolores: DolorCard[];
  tituloSeccion?: string;
  subtituloSeccion?: string;
}

export function AvatarDolores({
  dolores,
  tituloSeccion = "Tres dolores que te cuestan dinero hoy",
  subtituloSeccion = "Cada uno tiene una cifra real. No es opinión — es mercado.",
}: AvatarDoloresProps) {
  return (
    <section
      id="dolores"
      aria-labelledby="dolores-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-red-live mb-3">
            Dolores cuantificados
          </span>
          <h2
            id="dolores-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            {tituloSeccion}
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg">
            {subtituloSeccion}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dolores.map((dolor, i) => (
            <article
              key={i}
              className="relative flex flex-col bg-white rounded-2xl border border-brand-cream p-6 hover:border-brand-red-live/20 hover:shadow-[0_4px_24px_rgba(255,45,45,0.08)] transition-all duration-200"
            >
              {/* Número */}
              <span
                aria-hidden
                className="font-display text-[5rem] leading-none font-bold text-brand-cream select-none absolute top-4 right-5"
              >
                {i + 1}
              </span>

              {/* Cifra grande */}
              <div className="mb-4 relative">
                <p
                  className="font-display text-[clamp(2.2rem,6vw,3.5rem)] leading-none font-bold text-brand-red-live"
                  aria-label={`${dolor.titulo}: ${dolor.cifra}`}
                >
                  {dolor.cifra}
                </p>
              </div>

              {/* Título dolor */}
              <h3 className="font-semibold text-base text-brand-black mb-3 leading-snug relative">
                {dolor.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-brand-gray leading-relaxed flex-1 mb-4 relative">
                {dolor.descripcion}
              </p>

              {/* Fuente */}
              <div className="relative">
                {dolor.fuenteUrl ? (
                  <a
                    href={dolor.fuenteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] text-brand-gray/50 hover:text-brand-green transition-colors underline underline-offset-2"
                    aria-label={`Fuente: ${dolor.fuente}`}
                  >
                    Fuente: {dolor.fuente}
                  </a>
                ) : (
                  <p className="text-[10px] text-brand-gray/50">
                    Fuente: {dolor.fuente}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
