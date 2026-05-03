"use client";

import { AvatarHero } from "@/components/para/_shared/AvatarHero";

const HEADLINE = (
  <>
    Tu landing convierte al{" "}
    <span
      className="line-through decoration-brand-red-live/60"
      style={{ color: "#9ca3af" }}
    >
      3%
    </span>
    .<br />
    Un live al{" "}
    <span
      style={{
        background: "linear-gradient(90deg, #00d64f, #00f25f)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      30%
    </span>
    .<br />
    <span style={{ color: "#0a0a0a" }}>
      ¿Cuántas ventas pierdes al día?
    </span>
  </>
);

const STACK_TICKER = ["Dropi", "Hoco", "Gintracom", "Aliclic (próx)"];

export function HeroDropshippers() {
  return (
    <AvatarHero
      avatarLabel="Dropshippers · Colombia · Ecuador · RD"
      headline={HEADLINE}
      subHeadline="Live shopping 24/7 sobre Pancake conectado a Dropi, Hoco y Gintracom. Tu producto vende mientras tú escalas el siguiente."
      stackTicker={STACK_TICKER}
      ctaDemoLabel="Ver demo"
      mercadoAnchor="#mercado"
    />
  );
}
