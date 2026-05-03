import { createMetadata } from "@/lib/seo/metadata";
import { getDefaultJsonLd } from "@/lib/seo/page-config";
import { SERVICIOS_FAQS } from "@/lib/data/servicios-faq";
import { PageShell } from "@/components/PageShell";
import { ServiciosHero } from "@/components/servicios/ServiciosHero";
import { ServiciosDetalle } from "@/components/servicios/ServiciosDetalle";
import { ServiciosFAQ } from "@/components/servicios/ServiciosFAQ";

export const metadata = createMetadata({
  title: "Servicios — Sistema LiveCake completo",
  description:
    "WebCake, LiveCake, Botcake, comentarios simulados, CRM, integraciones y videos para ads. Un sistema completo sobre Pancake — partner oficial Meta + TikTok + Google en LATAM. Listo en 10 días.",
  path: "/servicios",
  keywords: [
    "live shopping Colombia",
    "falso live Pancake",
    "WebCake landing live",
    "Botcake WhatsApp chatbot",
    "live commerce LATAM",
  ],
});

const jsonLd = getDefaultJsonLd("service", {
  name: "Servicios — Sistema LiveCake",
  description:
    "Sistema completo de live commerce sobre Pancake: WebCake, LiveCake, Botcake, comentarios, CRM, integraciones y videos para ads. Partner oficial Meta + TikTok + Google.",
  url: "/servicios",
  faqs: SERVICIOS_FAQS,
});

export default function ServiciosPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
      ]}
      jsonLd={jsonLd}
    >
      <ServiciosHero />
      <ServiciosDetalle />
      <ServiciosFAQ />
    </PageShell>
  );
}
