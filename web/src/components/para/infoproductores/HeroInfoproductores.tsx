"use client";

import { AvatarHero } from "@/components/para/_shared/AvatarHero";

const HEADLINE = (
  <>
    Tu curso vendiendo{" "}
    <span
      style={{
        background: "linear-gradient(90deg, #00d64f, #00f25f)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      mientras tú duermes
    </span>
    .
  </>
);

const STACK_TICKER = ["Hotmart", "WhatsApp Botcake", "CRM Postcake", "Conversion API"];

export function HeroInfoproductores() {
  return (
    <AvatarHero
      avatarLabel="Coaches · Mentores · Hotmart · LATAM"
      headline={HEADLINE}
      subHeadline="Live shopping para Hotmart sobre Pancake. Tu webinar más exitoso corriendo 24/7. Sin lanzamientos, sin agotamiento, sin depender del calendario."
      stackTicker={STACK_TICKER}
      ctaDemoLabel="Ver demo"
      mercadoAnchor="#mercado"
    />
  );
}
