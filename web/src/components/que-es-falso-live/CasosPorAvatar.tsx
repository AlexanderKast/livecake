import Link from "next/link";
import { Package, BookOpen, Building2, ArrowRight } from "lucide-react";

interface AvatarCard {
  href: string;
  icon: React.ReactNode;
  name: string;
  title: string;
  dolor: string;
  cta: string;
}

const AVATARES: AvatarCard[] = [
  {
    href: "/para/dropshippers",
    icon: <Package className="w-7 h-7 text-brand-green" aria-hidden />,
    name: "Dropshipper",
    title: "Para Carlos — el dropshipper que gasta en ads y convierte poco",
    dolor:
      "Carlos mueve USD 15K/mes en ads de Meta pero su landing convierte al 2.3%. Cada lead le cuesta 4× más de lo que debería.",
    cta: "Ver caso Carlos",
  },
  {
    href: "/para/infoproductores",
    icon: <BookOpen className="w-7 h-7 text-brand-green" aria-hidden />,
    name: "Infoproductor",
    title: "Para Valentina — la infoproductora que vive de lanzamientos",
    dolor:
      "Valentina lanza cada 3 meses y entre lanzamientos sus ingresos caen a cero. El falso live genera demanda constante sin depender del calendario.",
    cta: "Ver caso Valentina",
  },
  {
    href: "/para/marcas",
    icon: <Building2 className="w-7 h-7 text-brand-green" aria-hidden />,
    name: "Marca",
    title: "Para Rodrigo — la marca DTC que quiere escalar sin más creativos",
    dolor:
      "Rodrigo tiene un equipo creativo saturado. El falso live produce una sola vez y ejecuta indefinidamente, liberando recursos para otras prioridades.",
    cta: "Ver caso Rodrigo",
  },
];

export function CasosPorAvatar() {
  return (
    <section
      id="casos"
      aria-labelledby="casos-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-brand-cream"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            ¿Para quién es?
          </span>
          <h2
            id="casos-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            Tres avatares que lo usan hoy
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg">
            El falso live no es para todo el mundo. Estos tres perfiles son los
            que más se benefician del sistema.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AVATARES.map((avatar) => (
            <article
              key={avatar.href}
              className="group bg-white rounded-2xl border border-brand-cream p-6 flex flex-col hover:border-brand-green/30 hover:shadow-[0_8px_32px_rgba(0,214,79,0.10)] transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green/15 transition-colors">
                {avatar.icon}
              </div>

              {/* Avatar label */}
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-green mb-2">
                {avatar.name}
              </span>

              <h3 className="font-display text-base font-bold text-brand-black mb-4 leading-snug">
                {avatar.title}
              </h3>

              <p className="text-sm text-brand-gray leading-relaxed flex-1 mb-6">
                {avatar.dolor}
              </p>

              <Link
                href={avatar.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors group-hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 rounded-sm"
                aria-label={avatar.cta}
              >
                {avatar.cta}
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
