"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import {
  ArrowRight,
  Compass,
  TrendingUp,
  BookOpen,
  FileText,
  Search,
  Eye,
  Film,
  BadgeCheck,
  Check,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import {
  PLAN_PRICES,
  type Currency,
} from "@/lib/pricing/currency-config";

type ServicioUnit =
  | "sesión"
  | "mes"
  | "guion"
  | "proyecto"
  | "live";

type Servicio = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  prices: Record<Currency, number>;
  unit: ServicioUnit;
};

const SERVICIOS: Servicio[] = [
  {
    id: "consultoria",
    icon: Compass,
    title: "Diagnóstico de sistema live",
    description:
      "Sesiones 1-a-1 para auditar tu stack actual y construir la hoja de ruta de live shopping para los próximos 90 días. Definimos formato Pancake, presentadores y ángulos de venta.",
    prices: { USD: 200, COP: 790_000 },
    unit: "sesión",
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Estrategia de live shopping",
    description:
      "Plan completo de live commerce: frecuencia de lives, ángulos por producto, segmentación de ads hacia Pancake y estructura de follow-up post-live con Postcake CRM.",
    prices: { USD: 325, COP: 1_290_000 },
    unit: "mes",
  },
  {
    id: "contenido",
    icon: BookOpen,
    title: "Calendario de lives y contenido",
    description:
      "Pilares editoriales para live, calendario mensual de transmisiones, ganchos de apertura y estructura de pitch de venta adaptados al formato Pancake.",
    prices: { USD: 225, COP: 890_000 },
    unit: "mes",
  },
  {
    id: "guiones",
    icon: FileText,
    title: "Guiones de live shopping",
    description:
      "Guiones conversacionales con apertura de gancho, demostración de producto y CTA de compra listos para live. Tono latino real, acento natural, probados en formato Pancake.",
    prices: { USD: 45, COP: 179_000 },
    unit: "guion",
  },
  {
    id: "research",
    icon: Search,
    title: "Investigación de audiencia live",
    description:
      "Análisis de qué productos venden mejor en live, qué dolores activan la compra impulsiva y qué horarios maximizan la retención en tu categoría LATAM.",
    prices: { USD: 225, COP: 890_000 },
    unit: "proyecto",
  },
  {
    id: "competencia",
    icon: Eye,
    title: "Auditoría de competencia en live",
    description:
      "Análisis de cómo tus competidores directos usan live commerce: frecuencia, formato, presentadores, precios y oportunidades de diferenciación en Pancake.",
    prices: { USD: 175, COP: 690_000 },
    unit: "proyecto",
  },
  {
    id: "edicion",
    icon: Film,
    title: "Producción y edición de lives",
    description:
      "Grabación, edición y optimización del live para Pancake: corrección de color, gráficos de producto animados, subtítulos y exportación lista para embeber en tu dominio.",
    prices: { USD: 33, COP: 129_000 },
    unit: "live",
  },
  {
    id: "creadores",
    icon: BadgeCheck,
    title: "Presentadores entrenados Pancake",
    description:
      "Acceso a nuestra red de +30 presentadores latinos pre-verificados entrenados en live shopping formato Pancake. Selección por nicho, audiencia y estilo de marca.",
    prices: { USD: 75, COP: 299_000 },
    unit: "live",
  },
];

/** Costo de contratar los 8 servicios separados (anchor de ahorro). */
const PACKAGE_SEPARATE_COST: Record<Currency, number> = {
  USD: 4_700,
  COP: 18_790_000,
};

const PACKAGE_INCLUDES = [
  "Diagnóstico de sistema live mensual",
  "Estrategia de live shopping completa",
  "Calendario de lives editorial",
  "Guiones de live por campaña",
  "Investigación de audiencia continua",
  "Auditoría de competencia trimestral",
  "Producción de lives ilimitada",
  "Red de presentadores verificados Pancake",
  "Asesora de cuenta dedicada",
  "Reportes semanales de conversión",
  "Setup completo suite Pancake",
  "Garantía de 7 días",
];

function ServicioCard({
  servicio,
  index,
  isIntersecting,
}: {
  servicio: Servicio;
  index: number;
  isIntersecting: boolean;
}) {
  const Icon = servicio.icon;
  const { currency, format } = useCurrency();
  const priceFrom = format(servicio.prices[currency]);
  const priceUnit = `${currency} / ${servicio.unit}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: 0.06 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "group relative rounded-2xl p-5 sm:p-6 lg:p-7",
        "border border-neutral-200 bg-white",
        "hover:border-brand-green/40",
        "hover:shadow-[0_12px_40px_-12px_rgba(22,163,74,0.20)]",
        "transition-all duration-300 hover:-translate-y-1",
        "flex flex-col h-full"
      )}
    >
      {/* Gradient border on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          padding: "1px",
          background:
            "linear-gradient(135deg, rgba(22,163,74,0.5), rgba(22,163,74,0.15), transparent 60%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Icon */}
      <div className="relative w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/25 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 group-hover:border-brand-green/50 transition-colors">
        <Icon className="h-5 w-5 text-brand-green" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg sm:text-xl lg:text-2xl text-neutral-900 leading-tight mb-3">
        {servicio.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-500 leading-relaxed mb-5 flex-grow">
        {servicio.description}
      </p>

      {/* Price */}
      <div className="pt-4 border-t border-neutral-200">
        <div className="flex items-baseline justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-1">
              Desde
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl sm:text-3xl text-brand-green">
                {priceFrom}
              </span>
              <span className="text-xs text-neutral-400">{priceUnit}</span>
            </div>
          </div>
          <ArrowRight
            className="h-5 w-5 text-neutral-300 group-hover:text-brand-green group-hover:translate-x-1 transition-all flex-shrink-0"
            aria-hidden
          />
        </div>
      </div>
    </motion.article>
  );
}

export function Servicios() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.04,
  });
  const { currency, format } = useCurrency();
  const growthPrice = PLAN_PRICES.growth[currency].amount;
  const separateCost = PACKAGE_SEPARATE_COST[currency];
  const savings = separateCost - growthPrice;
  const savingsPct = Math.round((savings / separateCost) * 100);
  const unitPerMes = `${currency} / mes`;

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(22,163,74,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20 max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/10 text-brand-green border border-brand-green/30">
            8 servicios integrados
          </span>
          <h2
            id="servicios-title"
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-neutral-900 tracking-tight uppercase"
          >
            Servicios a la medida.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #15803d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              O todo el paquete.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-500 leading-relaxed">
            8 servicios independientes diseñados para marcas que quieren dominar
            su categoría con live shopping. Cada uno se cotiza por separado —{" "}
            <span className="text-neutral-900 font-semibold">
              o los combinas todos
            </span>{" "}
            en el Paquete Live Cake y ahorras hasta{" "}
            <span className="text-emerald-400 font-semibold">
              {format(savings)} {unitPerMes}
            </span>
            .
          </p>
        </motion.div>

        {/* Grid 8 servicios individuales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICIOS.map((s, i) => (
            <ServicioCard
              key={s.id}
              servicio={s}
              index={i}
              isIntersecting={isIntersecting}
            />
          ))}
        </div>


        {/* ─── Paquete Completo — el héroe ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-14 sm:mt-20 rounded-3xl overflow-hidden"
        >
          {/* Background layers */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0a0a0a 0%, #141414 40%, #1a1a1a 100%)",
            }}
          />
          {/* Imagen editorial del live */}
          <div aria-hidden className="absolute inset-0 opacity-[0.28]">
            <Image
              src="/brand/home/servicios.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/40" />
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 10% 0%, rgba(22,163,74,0.20) 0%, transparent 50%), radial-gradient(ellipse 60% 70% at 100% 100%, rgba(22,163,74,0.14) 0%, transparent 55%)",
            }}
          />

          {/* Gradient border */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "2px",
              background:
                "linear-gradient(135deg, rgba(22,163,74,0.7) 0%, rgba(22,163,74,0.35) 40%, rgba(22,163,74,0.1) 70%, transparent 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Grid pattern decorativo */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 p-6 sm:p-10 lg:p-14 xl:p-16">
            {/* Left: Paquete info */}
            <div className="lg:col-span-3 flex flex-col">
              {/* Badge */}
              <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/40 mb-6">
                <Sparkles
                  className="h-3.5 w-3.5 text-brand-green"
                  aria-hidden
                />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-green">
                  Paquete Live Cake · Más Popular
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] text-white tracking-tight uppercase mb-5">
                Sistema Live Cake.
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #22c55e, #16a34a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Todo incluido.
                </span>
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-xl leading-relaxed mb-8">
                Los 8 servicios críticos de live shopping + suite Pancake completa
                bajo un solo techo, un solo contrato, un solo equipo. Para
                marcas que valoran su tiempo y sus resultados.
              </p>

              {/* Includes grid */}
              <div className="mb-8">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-green mb-4">
                  Incluye todo lo siguiente
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {PACKAGE_INCLUDES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/90"
                    >
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/15 border border-brand-green/50 flex items-center justify-center">
                        <Check
                          className="h-3 w-3 text-brand-green"
                          strokeWidth={3}
                          aria-hidden
                        />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Price + CTA + comparison */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Price card */}
              <div className="rounded-2xl border-2 border-brand-green/60 bg-brand-green/5 p-5 sm:p-7">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-green mb-3">
                  Desde
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display text-5xl sm:text-6xl text-white">
                    {format(PLAN_PRICES.starter[currency].amount)}
                  </span>
                  <span className="text-sm text-brand-gray">{unitPerMes}</span>
                </div>
                <p className="text-sm text-brand-gray mb-6">
                  Escala desde 2 hasta 31+ lives al mes con optimización continua.
                </p>

                {/* CTA */}
                <a
                  href="#pricing"
                  className="group/cta flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-brand-green text-white font-sans font-bold text-base tracking-wide hover:bg-brand-green-dark transition-all hover:shadow-[0_10px_40px_-10px_rgba(22,163,74,0.5)] min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Ver planes
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
                    aria-hidden
                  />
                </a>

                <p className="text-[11px] text-center text-brand-gray/70 mt-4">
                  Garantía de 7 días · Sin permanencia forzada
                </p>
              </div>

              {/* Savings breakdown */}
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 sm:p-6">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-400 mb-4 flex items-center gap-2">
                  <span aria-hidden className="text-emerald-400">✓</span>
                  Tu ahorro
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/75">
                    <span>Contratando por separado</span>
                    <span className="line-through opacity-70">
                      ~{format(separateCost)}/mes
                    </span>
                  </div>
                  <div className="flex justify-between text-white font-semibold">
                    <span>Sistema Live Cake — Crecimiento</span>
                    <span>{format(growthPrice)}/mes</span>
                  </div>
                  <div className="border-t border-emerald-500/30 pt-3 mt-3 flex justify-between items-baseline">
                    <span className="text-emerald-400 font-bold">Ahorras</span>
                    <span className="font-display text-2xl text-emerald-400">
                      {format(savings)}
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400/80 text-right">
                    {unitPerMes} · {savingsPct}% menos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
