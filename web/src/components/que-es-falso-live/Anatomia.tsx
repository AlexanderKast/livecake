import {
  Globe,
  Play,
  MessageCircle,
  ClipboardList,
  Zap,
  ChevronRight,
} from "lucide-react";

interface ComponenteItem {
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const COMPONENTES: ComponenteItem[] = [
  {
    name: "WebCake",
    tagline: "Tu dominio. Tu live.",
    description:
      "Landing page del cliente con el live embebido. El visitante llega desde el ad y ve una transmisión activa directamente en el dominio de la marca, no en una plataforma externa.",
    icon: <Globe className="w-5 h-5 text-brand-green" aria-hidden />,
  },
  {
    name: "LiveCake",
    tagline: "El video en bucle 24/7",
    description:
      "El video pre-grabado que corre en loop continuo con timing preciso de comentarios, reacciones y CTAs. Cada minuto del live está orquestado para máxima conversión.",
    icon: <Play className="w-5 h-5 text-brand-green" aria-hidden />,
  },
  {
    name: "Botcake",
    tagline: "Chatbot WhatsApp para órdenes",
    description:
      "Bot de WhatsApp que captura y procesa las órdenes de los clientes en tiempo real durante el live. Integración directa con el checkout para no perder ninguna intención de compra.",
    icon: (
      <MessageCircle className="w-5 h-5 text-brand-green" aria-hidden />
    ),
  },
  {
    name: "Postcake / CRM",
    tagline: "Pipeline de pedidos centralizado",
    description:
      "Panel de gestión de pedidos y CRM integrado. Visibilidad completa del pipeline: desde el primer clic en el ad hasta la confirmación del despacho.",
    icon: <ClipboardList className="w-5 h-5 text-brand-green" aria-hidden />,
  },
  {
    name: "Conversion API",
    tagline: "Señales a Meta + TikTok + Google",
    description:
      "Los eventos de conversión — compras, inicios de checkout, vistas del live — se envían vía server-side a las tres plataformas. Optimización automática de campañas sin depender de cookies de navegador.",
    icon: <Zap className="w-5 h-5 text-brand-green" aria-hidden />,
  },
];

export function Anatomia() {
  return (
    <section
      id="anatomia"
      aria-labelledby="anatomia-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            El sistema completo
          </span>
          <h2
            id="anatomia-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            Anatomía de un falso live LiveCake
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg">
            Cinco componentes que trabajan en cadena. Desde el ad hasta el pedido
            confirmado.
          </p>
        </div>

        {/* Secuencia horizontal — desktop — y stack vertical — mobile */}
        <div
          className="flex flex-col lg:flex-row items-stretch gap-0"
          role="list"
          aria-label="Componentes del sistema falso live"
        >
          {COMPONENTES.map((comp, i) => (
            <div
              key={comp.name}
              className="flex flex-col lg:flex-row items-stretch flex-1 min-w-0"
              role="listitem"
            >
              {/* Card */}
              <article
                className="flex-1 flex flex-col p-5 sm:p-6 bg-brand-cream rounded-2xl lg:rounded-none lg:first:rounded-l-2xl lg:last:rounded-r-2xl border border-brand-cream hover:bg-white hover:border-brand-green/30 hover:shadow-[0_4px_20px_rgba(0,214,79,0.10)] transition-all duration-200"
              >
                {/* Número + icono */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white border border-brand-green/20 flex items-center justify-center shadow-sm">
                    {comp.icon}
                  </div>
                  <span className="font-display text-4xl font-bold text-brand-cream select-none">
                    {i + 1}
                  </span>
                </div>

                {/* Nombre del componente */}
                <h3 className="font-display text-base font-bold text-brand-black mb-1">
                  {comp.name}
                </h3>
                <p className="text-xs font-semibold text-brand-green mb-3 uppercase tracking-[0.12em]">
                  {comp.tagline}
                </p>
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed flex-1">
                  {comp.description}
                </p>
              </article>

              {/* Flecha separadora — solo entre items, no al final */}
              {i < COMPONENTES.length - 1 && (
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
            Todo el sistema corre sobre <strong className="text-brand-black">Pancake</strong>,
            partner oficial de Meta, TikTok y Google. La Conversion API
            garantiza que cada evento de compra regrese correctamente a las
            plataformas de ads para optimización continua.
          </p>
        </div>
      </div>
    </section>
  );
}
