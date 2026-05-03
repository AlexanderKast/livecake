import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { PageShell } from "@/components/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroDropshippers } from "@/components/para/dropshippers/HeroDropshippers";
import { MercadoDropshippers } from "@/components/para/dropshippers/MercadoDropshippers";
import { DoloresDropshippers } from "@/components/para/dropshippers/DoloresDropshippers";
import { SolucionDropshippers } from "@/components/para/dropshippers/SolucionDropshippers";
import { MiniStackDropshippers } from "@/components/para/dropshippers/MiniStackDropshippers";
import { CasoDropshippers } from "@/components/para/dropshippers/CasoDropshippers";
import { AvatarCTAFinal } from "@/components/para/_shared/AvatarCTAFinal";

export const metadata: Metadata = createMetadata({
  title: "Live shopping para dropshippers Colombia",
  description:
    "Live 24/7 sobre Pancake conectado a Dropi, Hoco y Gintracom. Tu producto vende mientras escalas el siguiente. Conversión 30% vs 3% de tu landing.",
  path: "/para/dropshippers",
  ogType: "article",
  keywords: [
    "live shopping dropshippers Colombia",
    "Dropi live shopping",
    "agencia live shopping Ecuador",
    "Pancake dropshipping LATAM",
    "Hoco live commerce",
    "Gintracom live shopping",
  ],
});

const PAGE_URL = "https://livecake.com/para/dropshippers";

const jsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Live shopping para dropshippers Colombia — Live Cake sobre Pancake",
    description:
      "Sistema completo de live shopping 24/7 para dropshippers: Pancake (partner oficial Meta+TikTok+Google) integrado con Dropi, Hoco y Gintracom. Conversión 30% vs 3%.",
    url: PAGE_URL,
    inLanguage: "es-CO",
    author: {
      "@type": "Organization",
      name: "Live Cake",
      url: "https://livecake.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Live Cake",
      url: "https://livecake.com",
      logo: {
        "@type": "ImageObject",
        url: "https://livecake.com/brand/logo-horizontal.png",
      },
    },
    datePublished: "2026-04-30",
    dateModified: "2026-04-30",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://livecake.com" },
      { "@type": "ListItem", position: 2, name: "Para dropshippers", item: PAGE_URL },
    ],
  },
];

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Para dropshippers", href: "/para/dropshippers" },
];

export default function ParaDropshippersPage() {
  return (
    <PageShell breadcrumbs={BREADCRUMBS}>
      {jsonLd.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <HeroDropshippers />
      <MercadoDropshippers />
      <DoloresDropshippers />
      <SolucionDropshippers />
      <MiniStackDropshippers />
      <CasoDropshippers />
      <AvatarCTAFinal />
    </PageShell>
  );
}
