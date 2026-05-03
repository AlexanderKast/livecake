import { createMetadata } from "@/lib/seo/metadata";
import { getDefaultJsonLd } from "@/lib/seo/page-config";
import { SITE_URL, BRAND } from "@/lib/tracking/constants";
import { PageShell } from "@/components/PageShell";
import { SobreHero } from "@/components/sobre-nosotros/SobreHero";
import { SobreHistoria } from "@/components/sobre-nosotros/SobreHistoria";
import { SobreFundadores } from "@/components/sobre-nosotros/SobreFundadores";
import { SobrePancake } from "@/components/sobre-nosotros/SobrePancake";
import { SobreNumeros } from "@/components/sobre-nosotros/SobreNumeros";
import { SobreMision } from "@/components/sobre-nosotros/SobreMision";
import { SobreCTA } from "@/components/sobre-nosotros/SobreCTA";

export const metadata = createMetadata({
  title: "Sobre Nosotros — Primera agencia de live shopping en Colombia",
  description:
    "LiveCake es la primera agencia de live shopping en Colombia, construida sobre Pancake — partner oficial de Meta, TikTok y Google. Conoce a los tres fundadores: Mauricio Cuevas (CEO Pancake), Lucas Spot y Alexander Cast.",
  path: "/sobre-nosotros",
  keywords: [
    "sobre LiveCake",
    "agencia live shopping Colombia",
    "Pancake live commerce LATAM",
    "fundadores LiveCake",
    "Mauricio Cuevas Pancake",
    "live shopping Medellín",
  ],
});

const organizationWithFounders = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: `${SITE_URL}/sobre-nosotros`,
  foundingDate: "2026",
  description:
    "La primera agencia de live shopping en Colombia, construida sobre Pancake — partner oficial de Meta, TikTok y Google para live commerce en LATAM.",
  founders: [
    {
      "@type": "Person",
      name: "Mauricio Cuevas",
      jobTitle: "Co-fundador · CEO de Pancake",
    },
    {
      "@type": "Person",
      name: "Lucas Spot",
      jobTitle: "Co-fundador · Director Creativo",
    },
    {
      "@type": "Person",
      name: "Alexander Cast",
      jobTitle: "Co-fundador · Director de Estrategia y Operaciones",
    },
  ],
  sameAs: [BRAND.instagram, BRAND.tiktok],
};

const jsonLd = [
  ...getDefaultJsonLd("generic", {
    name: "Sobre Nosotros — LiveCake",
    description:
      "La primera agencia de live shopping en Colombia. Tres fundadores, tecnología Pancake y sistema listo en 10 días.",
    url: "/sobre-nosotros",
  }),
  organizationWithFounders,
];

export default function SobreNosotrosPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Sobre nosotros", href: "/sobre-nosotros" },
      ]}
      jsonLd={jsonLd}
    >
      <SobreHero />
      <SobreHistoria />
      <SobreFundadores />
      <SobrePancake />
      <SobreNumeros />
      <SobreMision />
      <SobreCTA />
    </PageShell>
  );
}
