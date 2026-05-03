import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { PageShell } from "@/components/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroInfoproductores } from "@/components/para/infoproductores/HeroInfoproductores";
import { MercadoInfoproductores } from "@/components/para/infoproductores/MercadoInfoproductores";
import { DoloresInfoproductores } from "@/components/para/infoproductores/DoloresInfoproductores";
import { SolucionInfoproductores } from "@/components/para/infoproductores/SolucionInfoproductores";
import { MiniStackInfoproductores } from "@/components/para/infoproductores/MiniStackInfoproductores";
import { CasoInfoproductores } from "@/components/para/infoproductores/CasoInfoproductores";
import { AvatarCTAFinal } from "@/components/para/_shared/AvatarCTAFinal";

export const metadata: Metadata = createMetadata({
  title: "Live shopping para infoproductores Hotmart",
  description:
    "Tu curso vendiendo mientras tú duermes. Live 24/7 sobre Pancake integrado a Hotmart. Tu webinar más exitoso corriendo todos los días — sin lanzamientos.",
  path: "/para/infoproductores",
  ogType: "article",
  keywords: [
    "live shopping infoproductores",
    "Hotmart live shopping",
    "webinar 24/7 cursos online",
    "Pancake Hotmart LATAM",
    "vender curso online automático",
    "agencia live shopping coaches",
  ],
});

const PAGE_URL = "https://livecake.com/para/infoproductores";

const jsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Live shopping para infoproductores Hotmart — Live Cake sobre Pancake",
    description:
      "Sistema de live shopping 24/7 para coaches y mentores con curso en Hotmart. Pancake (partner oficial Meta+TikTok+Google) corriendo tu webinar todos los días sin que tú estés.",
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
      { "@type": "ListItem", position: 2, name: "Para infoproductores", item: PAGE_URL },
    ],
  },
];

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Para infoproductores", href: "/para/infoproductores" },
];

export default function ParaInfoproductoresPage() {
  return (
    <PageShell breadcrumbs={BREADCRUMBS}>
      {jsonLd.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <HeroInfoproductores />
      <MercadoInfoproductores />
      <DoloresInfoproductores />
      <SolucionInfoproductores />
      <MiniStackInfoproductores />
      <CasoInfoproductores />
      <AvatarCTAFinal />
    </PageShell>
  );
}
