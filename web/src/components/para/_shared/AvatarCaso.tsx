import type { CasoEstudio } from "./types";

interface AvatarCasoProps {
  caso: CasoEstudio;
  tituloSeccion?: string;
}

export function AvatarCaso({
  caso,
  tituloSeccion = "Lo que ya está pasando en LATAM",
}: AvatarCasoProps) {
  return (
    <section
      id="caso"
      aria-labelledby="caso-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-brand-cream"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            Caso de referencia
          </span>
          <h2
            id="caso-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            {tituloSeccion}
          </h2>
        </div>

        {/* Caso card */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
          style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            boxShadow:
              "0 20px 60px -12px rgba(0,214,79,0.20), 0 0 0 1px rgba(0,214,79,0.12)",
          }}
        >
          {/* Glow decorativo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(0,214,79,0.12) 0%, transparent 60%)",
            }}
          />

          <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Cifra destacada */}
            <div className="flex-shrink-0">
              <p
                className="font-display text-[clamp(3rem,10vw,6rem)] leading-none font-bold"
                style={{
                  background: "linear-gradient(90deg, #00d64f, #00f25f)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                aria-label={`${caso.titulo}: ${caso.cifra}`}
              >
                {caso.cifra}
              </p>
              <p className="text-white/50 text-sm mt-2 font-medium">
                {caso.titulo}
              </p>
            </div>

            {/* Contexto */}
            <div className="flex flex-col gap-4">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                {caso.contexto}
              </p>

              {/* Ángulo / lección */}
              <div className="pl-4 border-l-2 border-brand-green/40">
                <p className="text-white/60 text-sm leading-relaxed italic">
                  {caso.angulo}
                </p>
              </div>

              {/* Fuente */}
              <div>
                {caso.fuenteUrl ? (
                  <a
                    href={caso.fuenteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[11px] text-white/30 hover:text-brand-green transition-colors underline underline-offset-2"
                    aria-label={`Fuente: ${caso.fuente}`}
                  >
                    Fuente: {caso.fuente}
                  </a>
                ) : (
                  <p className="text-[11px] text-white/30">
                    Fuente: {caso.fuente}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
