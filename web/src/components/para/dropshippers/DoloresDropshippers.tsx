import { AvatarDolores } from "@/components/para/_shared/AvatarDolores";
import type { DolorCard } from "@/components/para/_shared/types";

const DOLORES: DolorCard[] = [
  {
    titulo: "Devoluciones que destruyen tu margen",
    cifra: "15–30%",
    descripcion:
      "Tu cliente compra impulsado por el ad pero nunca vio el producto en acción. Cuando llega, la expectativa no coincide con la realidad — y devuelve. El live reduce devoluciones porque el comprador ya vio el producto usado, comparado y explicado antes de dar clic.",
    fuente: "Coresight + Immerss",
    fuenteUrl:
      "https://www.immerss.live/content/ecommerce-conversion-retention-metrics-guide/",
  },
  {
    titulo: "ROAS 1.5× porque la landing no convierte",
    cifra: "3% vs 30%",
    descripcion:
      "Gastas en ads para llevar tráfico a una landing que convierte al 3%. El live convierte al 30% — 10× más. El mismo presupuesto de ads produce 10× más órdenes cuando el destino del tráfico es un live en lugar de una landing estática.",
    fuente: "McKinsey, vía Buywith",
    fuenteUrl: "https://www.buywith.com/article/rise-of-live-commerce-us-eu-vs-china-2024/",
  },
  {
    titulo: "WhatsApp manual: 6–10 horas al día respondiendo lo mismo",
    cifra: "6–10 h",
    descripcion:
      "Tu equipo responde manualmente: ¿tienen talla M?, ¿cuánto demora?, ¿cómo pago? — una y otra vez. Botcake automatiza esas respuestas en WhatsApp durante el live: captura la orden, envía el link de pago y confirma el despacho sin intervención humana.",
    fuente: "Pancake (Mauricio Cuevas, CEO)",
    fuenteUrl: "",
  },
];

export function DoloresDropshippers() {
  return (
    <AvatarDolores
      dolores={DOLORES}
      tituloSeccion="Tres dolores que se comen tu margen hoy"
      subtituloSeccion="Cada uno tiene una cifra real. No es opinión — es ecommerce en LATAM."
    />
  );
}
