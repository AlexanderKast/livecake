import { createMetadata } from "@/lib/seo/metadata";
import { getDefaultJsonLd } from "@/lib/seo/page-config";
import { PageShell } from "@/components/PageShell";
import { CasosHero } from "@/components/casos/CasosHero";
import { DoloresList } from "@/components/casos/DolorBlock";
import { PorEsoExistimos } from "@/components/casos/PorEsoExistimos";
import { CasosCTAFinal } from "@/components/casos/CasosCTAFinal";

export const metadata = createMetadata({
  title: "Casos — Por que el live shopping cambia el juego",
  description:
    "Carlos pierde el 22% en devoluciones. Valentina solo vende en lanzamiento. Rodrigo le paga el 20% al marketplace. Tres casos reales de por que el live shopping es el canal que le faltaba a tu negocio.",
  path: "/casos",
  keywords: [
    "casos live shopping LATAM",
    "live commerce Colombia",
    "devoluciones ecommerce live",
    "live shopping vs marketplace",
    "infoproductos live shopping",
  ],
});

const jsonLd = getDefaultJsonLd("cases", {
  name: "Casos Live Shopping — Live Cake",
  description:
    "Tres avatares reales que muestran por que el live shopping resuelve devoluciones altas, ingresos estacionales y comisiones de marketplace.",
  url: "/casos",
});

export default function CasosPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Casos", href: "/casos" },
      ]}
      jsonLd={jsonLd}
    >
      <CasosHero />
      <DoloresList />
      <PorEsoExistimos />
      <CasosCTAFinal />
    </PageShell>
  );
}
