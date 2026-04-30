import { createMetadata } from "@/lib/seo/metadata";
import { getDefaultJsonLd } from "@/lib/seo/page-config";
import { PRECIOS_FAQS } from "@/lib/data/precios-faq";
import { PageShell } from "@/components/PageShell";
import { PreciosHero } from "@/components/precios/PreciosHero";
import { PreciosPlans } from "@/components/precios/PreciosPlans";
import { GuaranteeSection } from "@/components/precios/GuaranteeSection";
import { PreciosComparison } from "@/components/precios/PreciosComparison";
import { PreciosCalculator } from "@/components/precios/PreciosCalculator";
import { PreciosTestimonial } from "@/components/precios/PreciosTestimonial";
import { PreciosFAQ } from "@/components/precios/PreciosFAQ";
import { PreciosCTA } from "@/components/precios/PreciosCTA";

export const metadata = createMetadata({
  title: "Precios Live Shopping — Live Cake",
  description:
    "Planes de live shopping con suite Pancake completa incluida: Starter desde $599 USD/mes, Growth $999, Pro $1,699 y Elite $2,799. Sin comision sobre ventas. Setup tecnico desde el dia uno.",
  path: "/precios",
  keywords: [
    "precios live shopping",
    "planes live commerce LATAM",
    "paquetes live shopping Colombia",
    "Pancake live shopping precios",
    "costos live commerce",
  ],
});

const jsonLd = getDefaultJsonLd("pricing", {
  name: "Precios Live Shopping — Live Cake",
  description:
    "Planes de live shopping con suite Pancake completa incluida. Sin comision sobre ventas. Garantia de performance incluida.",
  url: "/precios",
  faqs: PRECIOS_FAQS,
  products: [
    {
      name: "Live Cake Starter",
      description:
        "2 lives A/B por mes, 2 optimizaciones, suite Pancake completa, setup tecnico, reporte post-live y garantia de performance.",
      price: 599,
    },
    {
      name: "Live Cake Growth",
      description:
        "8 lives A/B por mes (2/semana), 4 optimizaciones, suite Pancake completa, host dedicado, reporte semanal y garantia de performance.",
      price: 999,
    },
    {
      name: "Live Cake Pro",
      description:
        "16 lives A/B por mes (dia por medio), 8 optimizaciones, suite Pancake completa, host senior dedicado, dashboard en tiempo real y garantia de performance.",
      price: 1699,
    },
    {
      name: "Live Cake Elite",
      description:
        "31 lives A/B por mes (1 diario), optimizaciones ilimitadas, suite Pancake completa, equipo dedicado, soporte 24/7 durante lives y garantia de performance.",
      price: 2799,
    },
  ],
});

export default function PreciosPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Precios", href: "/precios" },
      ]}
      jsonLd={jsonLd}
    >
      <PreciosHero />
      <PreciosPlans />
      <GuaranteeSection />
      <PreciosComparison />
      <PreciosCalculator />
      <PreciosTestimonial />
      <PreciosFAQ />
      <PreciosCTA />
    </PageShell>
  );
}
