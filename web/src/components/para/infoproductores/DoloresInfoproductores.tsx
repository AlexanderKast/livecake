import { AvatarDolores } from "@/components/para/_shared/AvatarDolores";
import type { DolorCard } from "@/components/para/_shared/types";

const DOLORES: DolorCard[] = [
  {
    titulo: "Los webinars gratuitos ya no convierten",
    cifra: "< 5%",
    descripcion:
      "El mercado de coaches y mentores en LATAM se inundó de webinars gratuitos. La audiencia aprendió a ignorarlos. El live shopping crea un formato distinto: hay urgencia, hay producto visible, hay prueba social en tiempo real — sin que parezca una clase magistral que termina en pitch.",
    fuente: "McKinsey, vía Buywith",
    fuenteUrl:
      "https://www.buywith.com/article/rise-of-live-commerce-us-eu-vs-china-2024/",
  },
  {
    titulo: "Ingresos solo en lanzamiento — mes 2 en cero",
    cifra: "0",
    descripcion:
      "Lanzas en enero, cierras 60 inscripciones. En febrero no entra nada. El falso live rompe ese ciclo: tu presentación de ventas más efectiva corre como live 24/7 en Hotmart. Mientras das el siguiente módulo a tus estudiantes, el live capta nuevos compradores para la siguiente cohorte.",
    fuente: "Immerss",
    fuenteUrl:
      "https://www.immerss.live/content/ecommerce-conversion-retention-metrics-guide/",
  },
  {
    titulo: "La audiencia mira pero no compra — sin urgencia ni prueba social",
    cifra: "34%",
    descripcion:
      "El 34% de las compras ocurren después del live porque el formato genera intención que persiste. Sin urgencia real, sin comentarios visibles de otros compradores, sin un presentador que responda objeciones en el momento — la audiencia pospone y nunca vuelve.",
    fuente: "Immerss",
    fuenteUrl:
      "https://www.immerss.live/content/ecommerce-conversion-retention-metrics-guide/",
  },
];

export function DoloresInfoproductores() {
  return (
    <AvatarDolores
      dolores={DOLORES}
      tituloSeccion="Tres razones por las que tu modelo de lanzamiento tiene techo"
      subtituloSeccion="El infoproductor promedio en LATAM depende de un evento puntual para generar ingresos. Eso tiene solución."
    />
  );
}
