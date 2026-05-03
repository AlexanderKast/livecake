import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { PageShell } from "@/components/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroMarcas } from "@/components/para/marcas/HeroMarcas";
import { MercadoMarcas } from "@/components/para/marcas/MercadoMarcas";
import { DoloresMarcas } from "@/components/para/marcas/DoloresMarcas";
import { SolucionMarcas } from "@/components/para/marcas/SolucionMarcas";
import { MiniStackMarcas } from "@/components/para/marcas/MiniStackMarcas";
import { CasoMarcas } from "@/components/para/marcas/CasoMarcas";
import { AvatarCTAFinal } from "@/components/para/_shared/AvatarCTAFinal";

export const metadata: Metadata = createMetadata({
  title: "Live shopping para marcas con producto propio",
  description:
    "Tu marca en vivo 24/7 sobre Pancake en TU dominio. Sin Mercado Libre, sin Amazon, sin 15–25% de comisión. Canal propio que escala. Conversión 30% vs 3%.",
  path: "/para/marcas",
  ogType: "article",
  keywords: [
    "live shopping marcas Colombia",
    "canal propio sin marketplace",
    "Pancake marcas LATAM",
    "live commerce marca propia",
    "vender directo al consumidor LATAM",
    "agencia live shopping marcas",
  ],
});

const PAGE_URL = "https://livecake.com/para/marcas";

const jsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Live shopping para marcas con producto propio — Live Cake sobre Pancake",
    description:
      "Sistema de live shopping 24/7 para marcas que quieren independencia de marketplaces. Pancake (partner oficial Meta+TikTok+Google) en tu dominio. Sin comisión, con CRM propio.",
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
      { "@type": "ListItem", position: 2, name: "Para marcas", item: PAGE_URL },
    ],
  },
];

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Para marcas", href: "/para/marcas" },
];

export default function ParaMarcasPage() {
  return (
    <PageShell breadcrumbs={BREADCRUMBS}>
      {jsonLd.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <HeroMarcas />
      <MercadoMarcas />
      <DoloresMarcas />
      <SolucionMarcas />
      <MiniStackMarcas />
      <CasoMarcas />
      <AvatarCTAFinal />
    </PageShell>
  );
}
