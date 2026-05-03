import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";
import { PageShell } from "@/components/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { QeFalsoLiveHero } from "@/components/que-es-falso-live/Hero";
import { MercadoCifras } from "@/components/que-es-falso-live/MercadoCifras";
import { Definicion } from "@/components/que-es-falso-live/Definicion";
import { Diferencias } from "@/components/que-es-falso-live/Diferencias";
import { PorQueLegitimo } from "@/components/que-es-falso-live/PorQueLegitimo";
import { VsTikTokLive } from "@/components/que-es-falso-live/VsTikTokLive";
import { Anatomia } from "@/components/que-es-falso-live/Anatomia";
import { CasosPorAvatar } from "@/components/que-es-falso-live/CasosPorAvatar";
import { CTAFinalPage } from "@/components/que-es-falso-live/CTAFinalPage";

export const metadata: Metadata = createMetadata({
  title: "¿Qué es un falso live? Live shopping 24/7 con Pancake",
  description:
    "El falso live es un video pregrabado que corre como transmisión en vivo 24/7 sobre Pancake — partner oficial de Meta, TikTok y Google. Convierte al 30% vs el 3% de un ecommerce.",
  path: "/que-es-falso-live",
  ogType: "article",
  keywords: [
    "falso live",
    "live shopping Colombia",
    "agencia live shopping LATAM",
    "Pancake live commerce",
    "live commerce 24/7",
    "transmisión pregrabada live",
    "live shopping qué es",
  ],
});

const PAGE_URL = "https://livecake.com/que-es-falso-live";

const jsonLd: Record<string, unknown>[] = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es un falso live? Live shopping 24/7 con Pancake — LiveCake",
    description:
      "El falso live es un video pregrabado que corre como transmisión en vivo 24/7 sobre Pancake, el único partner oficial de Meta, TikTok y Google para live commerce en LATAM.",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    keywords:
      "falso live, live shopping Colombia, Pancake live commerce, live shopping LATAM, agencia live shopping",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un falso live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un falso live es un video pregrabado profesionalmente que corre como transmisión en vivo 24/7 sobre Pancake. El presentador, los comentarios y los CTAs están diseñados para parecer y funcionar como un live real, pero sin necesitar a nadie en cámara en tiempo real.",
        },
      },
      {
        "@type": "Question",
        name: "¿El falso live viola los términos de servicio de TikTok o Meta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Pancake es partner oficial de Meta, TikTok y Google. El live corre en Pancake — no en TikTok Live ni Meta Live nativos. Los ads sí van a TikTok y Meta. La integración pasa por Conversion API y SDKs aprobados por las plataformas.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué se diferencia de TikTok Live nativo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TikTok Live nativo requiere un creador en directo y prohíbe loops de video pre-grabado. Pancake es una plataforma partner-aprobada para marcas que quieren live commerce 24/7 sin depender de que alguien esté en cámara. Son complementarios, no sustitutos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué convierte mejor: un landing o un falso live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Según McKinsey vía Buywith, los lives convierten al 30% vs el 3% de un ecommerce tradicional — hasta 10× más. El formato live genera urgencia, reduce fricción y mantiene al visitante más tiempo en la página.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://livecake.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "¿Qué es un falso live?",
        item: PAGE_URL,
      },
    ],
  },
];

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "¿Qué es un falso live?", href: "/que-es-falso-live" },
];

export default function QueEsFalsoLivePage() {
  return (
    <PageShell breadcrumbs={BREADCRUMBS}>
      {jsonLd.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <QeFalsoLiveHero />
      <MercadoCifras />
      <Definicion />
      <Diferencias />
      <PorQueLegitimo />
      <VsTikTokLive />
      <Anatomia />
      <CasosPorAvatar />
      <CTAFinalPage />
    </PageShell>
  );
}
