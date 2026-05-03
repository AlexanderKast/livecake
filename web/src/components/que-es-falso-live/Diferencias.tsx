import { X, Check } from "lucide-react";

interface DiffRow {
  label: string;
  liveReal: string;
  falseLive: string;
  falseLivePositive: boolean;
}

const ROWS: DiffRow[] = [
  {
    label: "Disponibilidad",
    liveReal: "Solo mientras el creador está en cámara",
    falseLive: "24/7 sin intervención humana",
    falseLivePositive: true,
  },
  {
    label: "Calidad del mensaje",
    liveReal: "Variable — depende del día, el humor y la improvisación",
    falseLive: "100% consistente, cada argumento de venta en su momento exacto",
    falseLivePositive: true,
  },
  {
    label: "Escalabilidad",
    liveReal: "Una sola transmisión por vez, alcance limitado a ese horario",
    falseLive: "Múltiples instancias — escala con el presupuesto de ads",
    falseLivePositive: true,
  },
  {
    label: "Optimización",
    liveReal: "No se puede editar lo que ya ocurrió en vivo",
    falseLive: "A/B testing de guión, CTAs y momentos de oferta",
    falseLivePositive: true,
  },
  {
    label: "Carga operativa",
    liveReal: "Requiere talento disponible, equipo en standby, producción en tiempo real",
    falseLive: "Se produce una vez, se ejecuta solo con monitoreo mínimo",
    falseLivePositive: true,
  },
];

export function Diferencias() {
  return (
    <section
      id="diferencias"
      aria-labelledby="diferencias-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-brand-cream"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
            Comparativa
          </span>
          <h2
            id="diferencias-heading"
            className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-tight text-brand-black"
          >
            Falso live vs live real
          </h2>
          <p className="mt-3 text-brand-gray text-base sm:text-lg">
            Cinco dimensiones clave que separan un sistema de venta continua de
            una transmisión en vivo tradicional.
          </p>
        </div>

        {/* Tabla comparativa */}
        <div className="overflow-x-auto scrollbar-hide rounded-2xl border border-brand-cream bg-white shadow-sm">
          <table className="w-full text-sm" aria-label="Comparativa live real vs falso live">
            <thead>
              <tr className="border-b border-brand-cream">
                <th
                  scope="col"
                  className="px-5 py-4 text-left text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray w-[25%]"
                >
                  Dimensión
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 text-left text-xs font-semibold tracking-[0.12em] uppercase text-brand-gray w-[37.5%]"
                >
                  <span className="inline-flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-brand-red-live" aria-hidden />
                    Live real (creador en directo)
                  </span>
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 text-left text-xs font-semibold tracking-[0.12em] uppercase text-brand-green w-[37.5%]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-brand-green" aria-hidden />
                    Falso live LiveCake
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-brand-cream last:border-0 hover:bg-brand-cream/40 transition-colors"
                >
                  <td className="px-5 py-4 font-semibold text-brand-black align-top">
                    {row.label}
                  </td>
                  <td className="px-5 py-4 text-brand-gray align-top leading-relaxed">
                    {row.liveReal}
                  </td>
                  <td className="px-5 py-4 text-brand-black align-top leading-relaxed font-medium">
                    <span className="flex items-start gap-2">
                      <Check
                        className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5"
                        aria-hidden
                      />
                      {row.falseLive}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
