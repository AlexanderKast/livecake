import type { PasoSolucion } from "./types";

interface AvatarSolucionProps {
  pasos: PasoSolucion[];
  tituloSeccion?: string;
  subtituloSeccion?: string;
}

export function AvatarSolucion({
  pasos,
  tituloSeccion = "Cómo Live Cake lo resuelve",
  subtituloSeccion = "Tres pasos del sistema Pancake aplicados a tu caso.",
}: AvatarSolucionProps) {
  return (
    <section
      id="solucion"
      aria-labelledby="solucion-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-brand-cream"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            La solución
          </span>
          <h2
            id="solucion-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            {tituloSeccion}
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg">
            {subtituloSeccion}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Línea conectora — solo desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-10 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-brand-green/20 via-brand-green/40 to-brand-green/20"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pasos.map((paso) => (
              <article
                key={paso.numero}
                className="flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                {/* Número con círculo */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-green/30 flex items-center justify-center shadow-[0_0_24px_rgba(0,214,79,0.12)]">
                    <span className="font-display text-3xl font-bold text-brand-green">
                      {paso.numero}
                    </span>
                  </div>
                </div>

                {/* Título */}
                <h3 className="font-display text-lg font-bold text-brand-black mb-3 leading-snug">
                  {paso.titulo}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-brand-gray leading-relaxed">
                  {paso.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
