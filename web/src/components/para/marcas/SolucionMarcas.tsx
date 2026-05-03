import { AvatarSolucion } from "@/components/para/_shared/AvatarSolucion";
import type { PasoSolucion } from "@/components/para/_shared/types";

const PASOS: PasoSolucion[] = [
  {
    numero: 1,
    titulo: "Live profesional sobre TU dominio",
    descripcion:
      "Producimos un live editorial de tu producto: brand voice, presentadora alineada con tu identidad, set diseñado a tu paleta. Lo subimos a Pancake corriendo en bucle 24/7 embebido en tu dominio (ej: live.tumarca.com). El visitante nunca sale de tu marca — y nunca paga comisión a nadie.",
  },
  {
    numero: 2,
    titulo: "Botcake atiende todos los WhatsApp 24/7",
    descripcion:
      "Cuando el espectador escribe al WhatsApp del live, Botcake responde con tu tono de marca, califica el lead, envía el link de pago de tu pasarela (Wompi, Mercado Pago, Stripe) y registra todo en Postcake CRM. Tu equipo ve el pipeline ya cerrado, no el chat sin responder.",
  },
  {
    numero: 3,
    titulo: "Tus datos, tu CRM, tu re-compra",
    descripcion:
      "Cada comprador queda en tu CRM con teléfono, email, productos vistos y tickets pasados. Postcake automatiza la re-compra, el cross-sell y la recuperación de carritos. Conversion API envía las señales a Meta, TikTok y Google para que el algoritmo trabaje a favor de tu marca — no del marketplace.",
  },
];

export function SolucionMarcas() {
  return (
    <AvatarSolucion
      pasos={PASOS}
      tituloSeccion="Cómo Live Cake convierte tu marca en canal propio"
      subtituloSeccion="Tres pasos del sistema Pancake aplicados a marcas que quieren independencia de los marketplaces."
    />
  );
}
