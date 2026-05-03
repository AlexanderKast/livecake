"use client";

import { AvatarHero } from "@/components/para/_shared/AvatarHero";

const HEADLINE = (
  <>
    Tu marca en vivo{" "}
    <span
      style={{
        background: "linear-gradient(90deg, #00d64f, #00f25f)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      sin pagar comisión
    </span>
    .
  </>
);

const STACK_TICKER = [
  "WebCake",
  "Botcake",
  "Postcake CRM",
  "Conversion API Meta + TikTok + Google",
];

export function HeroMarcas() {
  return (
    <AvatarHero
      avatarLabel="Marcas con producto propio · Colombia · México · LATAM"
      headline={HEADLINE}
      subHeadline="Live shopping 24/7 sobre Pancake en TU dominio. Sin Mercado Libre, sin Amazon, sin 15–25% de comisión que no vuelve. Tu marca controla el canal — y los datos del comprador."
      stackTicker={STACK_TICKER}
      ctaDemoLabel="Ver demo"
      mercadoAnchor="#mercado"
    />
  );
}
