import { createMetadata } from "@/lib/seo/metadata";
import { getDefaultJsonLd } from "@/lib/seo/page-config";
import { HOME_FAQS } from "@/lib/data/home-faq";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/home/Hero";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { Marcas } from "@/components/home/Marcas";
import { Problema } from "@/components/home/Problema";
import { Solucion } from "@/components/home/Solucion";
import { Servicios } from "@/components/home/Servicios";
import { Casos } from "@/components/home/Casos";
import { Aliados } from "@/components/home/Aliados";
import { Pricing } from "@/components/home/Pricing";
import { VideoTestimonios } from "@/components/home/VideoTestimonios";
import { FAQ } from "@/components/home/FAQ";
import { CTAFinal } from "@/components/home/CTAFinal";

export const metadata = createMetadata({
  title: "Live shopping que vende 24/7",
  description:
    "Live shopping + falsos lives 24/7 sobre Pancake — partner oficial Meta + TikTok + Google. Llevamos tráfico de tus ads al live embebido en tu dominio. Sin comisión sobre ventas.",
  path: "/",
  keywords: [
    "live shopping Colombia",
    "falso live Pancake",
    "live commerce LATAM",
    "agencia live shopping",
  ],
});

const jsonLd = getDefaultJsonLd("home", {
  name: "Live Cake — Live shopping que vende 24/7",
  description:
    "Live shopping + falsos lives 24/7 sobre Pancake. Partner oficial Meta + TikTok + Google. Sin comisión sobre ventas.",
  url: "/",
  faqs: HOME_FAQS,
});

export default function HomePage() {
  return (
    <PageShell jsonLd={jsonLd}>
      <Hero />
      <SocialProofBar />
      <Marcas />
      <Problema />
      <Solucion />
      <Servicios />
      <Casos />
      <Aliados />
      <Pricing />
      <VideoTestimonios />
      <FAQ />
      <CTAFinal />
    </PageShell>
  );
}
