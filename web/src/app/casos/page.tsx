import { createMetadata } from "@/lib/seo/metadata";
import { getDefaultJsonLd } from "@/lib/seo/page-config";
import { PageShell } from "@/components/PageShell";
import { CasosHero } from "@/components/casos/CasosHero";
import { DoloresList } from "@/components/casos/DolorBlock";
import { PorEsoExistimos } from "@/components/casos/PorEsoExistimos";
import { CasosCTAFinal } from "@/components/casos/CasosCTAFinal";

export const metadata = createMetadata({
  title: "Casos — ¿Te suena familiar alguno de estos dolores?",
  description:
    "Landing que no convierte, ingresos solo en lanzamiento, comisiones del 20% al marketplace. Tres dolores reales — y cómo el live shopping sobre Pancake los resuelve.",
  path: "/casos",
  keywords: [
    "live shopping LATAM dolores",
    "dropshipping tasa conversión",
    "infoproductores live evergreen",
    "marcas canal directo sin marketplace",
    "live commerce Colombia",
  ],
});

const jsonLd = getDefaultJsonLd("cases", {
  name: "Casos LiveCake — El dolor que ya conoces",
  description:
    "Tres avatares: dropshipper con landing que no convierte, infoproductora que solo vende en lanzamiento y empresario que paga 20% al marketplace. Un sistema que los resuelve.",
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
