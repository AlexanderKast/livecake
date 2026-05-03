import {
  Globe,
  Play,
  MessageCircle,
  ClipboardList,
  Zap,
  ChevronRight,
} from "lucide-react";
import type { ComponenteStack } from "./types";

interface AvatarMiniStackProps {
  componentes: ComponenteStack[];
  tituloSeccion?: string;
  subtituloSeccion?: string;
  footerNote?: string;
}

const ICONS: React.ReactNode[] = [
  <Globe className="w-5 h-5 text-brand-green" aria-hidden key="globe" />,
  <Play className="w-5 h-5 text-brand-green" aria-hidden key="play" />,
  <MessageCircle
    className="w-5 h-5 text-brand-green"
    aria-hidden
    key="msg"
  />,
  <ClipboardList
    className="w-5 h-5 text-brand-green"
    aria-hidden
    key="clip"
  />,
  <Zap className="w-5 h-5 text-brand-green" aria-hidden key="zap" />,
];

export function AvatarMiniStack({
  componentes,
  tituloSeccion = "El stack que trabaja por ti",
  subtituloSeccion = "Cinco componentes en cadena — desde el ad hasta el pedido confirmado.",
  footerNote = "Todo el sistema corre sobre Pancake, partner oficial de Meta, TikTok y Google.",
}: AvatarMiniStackProps) {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            Suite Pancake
          </span>
          <h2
            id="stack-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            {tituloSeccion}
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg">
            {subtituloSeccion}
          </p>
        </div>

        {/* Secuencia horizontal desktop / stack vertical mobile */}
        <div
          className="flex flex-col lg:flex-row items-stretch gap-0"
          role="list"
          aria-label="Componentes del stack Live Cake"
        >
          {componentes.map((comp, i) => (
            <div
              key={comp.name}
              className="flex flex-col lg:flex-row items-stretch flex-1 min-w-0"
              role="listitem"
            >
              <article className="flex-1 flex flex-col p-5 sm:p-6 bg-brand-cream rounded-2xl lg:rounded-none lg:first:rounded-l-2xl lg:last:rounded-r-2xl border border-brand-cream hover:bg-white hover:border-brand-green/30 hover:shadow-[0_4px_20px_rgba(0,214,79,0.10)] transition-all duration-200">
                {/* Número + icono */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white border border-brand-green/20 flex items-center justify-center shadow-sm">
                    {ICONS[i % ICONS.length]}
                  </div>
                  <span className="font-display text-4xl font-bold text-brand-cream select-none">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-brand-black mb-1">
                  {comp.name}
                </h3>
                <p className="text-xs font-semibold text-brand-green mb-3 uppercase tracking-[0.12em]">
                  {comp.tagline}
                </p>
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed flex-1">
                  {comp.descripcion}
                </p>
              </article>

              {i < componentes.length - 1 && (
                <div
                  aria-hidden
                  className="flex items-center justify-center lg:px-1 py-2 lg:py-0"
                >
                  <ChevronRight className="w-5 h-5 text-brand-green/50 rotate-90 lg:rotate-0 flex-shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 p-5 rounded-xl bg-brand-cream border border-brand-cream">
          <p className="text-xs sm:text-sm text-brand-gray text-center leading-relaxed">
            {footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
