import { Video, Globe, Megaphone } from "lucide-react";

interface DefinicionCard {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  note?: string;
}

const CARDS: DefinicionCard[] = [
  {
    step: 1,
    icon: <Video className="w-6 h-6 text-brand-green" aria-hidden />,
    title: "Grabamos un live perfecto",
    description:
      "Un presentador profesional conduce el live en estudio. Mostramos el producto, respondemos preguntas frecuentes con timing calibrado, lanzamos CTAs en los momentos de mayor intención de compra — todo pre-diseñado para maximizar conversión.",
    note: "El video se produce una sola vez y se puede re-optimizar con A/B testing.",
  },
  {
    step: 2,
    icon: <Globe className="w-6 h-6 text-brand-green" aria-hidden />,
    title: "Corre en Pancake — embebido en tu dominio",
    description:
      "El live no se publica en TikTok Live ni en Meta Live nativos. Corre sobre Pancake, embebido directamente en el dominio del cliente vía WebCake. Eso significa que el checkout, el pixel, el CRM — todo queda bajo tu control.",
    note: "Tu audiencia ve una transmisión activa en tu propio sitio, no en una plataforma de terceros.",
  },
  {
    step: 3,
    icon: <Megaphone className="w-6 h-6 text-brand-green" aria-hidden />,
    title: "Ads en Meta + TikTok + Google llevan tráfico al live",
    description:
      "Pancake es partner oficial de las tres plataformas. Eso permite integrar Conversion API completa: los eventos de compra, inicio de checkout y vistas del live regresan correctamente a Meta, TikTok y Google para optimización automática de campañas.",
    note: "No es tráfico orgánico — es tráfico pagado con señales de conversión reales.",
  },
];

export function Definicion() {
  return (
    <section
      id="definicion"
      aria-labelledby="definicion-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            ¿Qué es exactamente?
          </span>
          <h2
            id="definicion-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            Definición técnica del falso live
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg">
            Tres componentes que trabajan en secuencia para crear una experiencia
            de compra en vivo, escalable e ininterrumpida.
          </p>
        </div>

        {/* Cards horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <article
              key={card.step}
              className="relative flex flex-col bg-white border border-brand-cream rounded-2xl p-6 hover:border-brand-green/40 hover:shadow-[0_8px_32px_rgba(0,214,79,0.10)] transition-all duration-200"
            >
              {/* Step badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  {card.icon}
                </div>
                <span className="font-display text-3xl font-bold text-brand-cream select-none">
                  0{card.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-brand-black mb-3 leading-snug">
                {card.title}
              </h3>

              <p className="text-sm text-brand-gray leading-relaxed flex-1">
                {card.description}
              </p>

              {card.note && (
                <div className="mt-5 pt-4 border-t border-brand-cream">
                  <p className="text-xs text-brand-green font-medium leading-relaxed">
                    {card.note}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
