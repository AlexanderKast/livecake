import { AvatarMiniStack } from "@/components/para/_shared/AvatarMiniStack";
import type { ComponenteStack } from "@/components/para/_shared/types";

const COMPONENTES: ComponenteStack[] = [
  {
    name: "WebCake",
    tagline: "Tu dominio, tu marca, tu live",
    descripcion:
      "El live embebido en live.tumarca.com — no en una landing genérica ni en TikTok Live. Branding completo: tipografía, colores, logo. El visitante percibe tu marca al 100%.",
  },
  {
    name: "LiveCake",
    tagline: "Bucle 24/7 con producción editorial",
    descripcion:
      "Video en bucle continuo con presentadora, comentarios y CTAs orquestados. Cada vez que un comprador entra desde un ad o un link orgánico, ve un live activo de tu marca con prueba social en tiempo real.",
  },
  {
    name: "Botcake WhatsApp",
    tagline: "Atención y cierre 24/7",
    descripcion:
      "Integrado a tu pasarela (Wompi, Mercado Pago, Stripe) y a tu inventario. Captura el lead, envía link de pago, confirma despacho y notifica al equipo solo cuando hay caso especial. Soporte humano se enfoca en lo que importa.",
  },
  {
    name: "Postcake CRM",
    tagline: "Tu base de clientes — no del marketplace",
    descripcion:
      "Pipeline unificado con cada comprador, cada ticket pasado, cada interacción. Automatiza re-compra, cross-sell y recuperación de carritos. La base de clientes vive en tu CRM, no en el algoritmo de Mercado Libre.",
  },
  {
    name: "Conversion API",
    tagline: "Algoritmo a favor de tu marca",
    descripcion:
      "Eventos server-side a Meta, TikTok y Google. El algoritmo aprende de tus ventas reales — no de cookies de navegador ni de signals del marketplace. Tu CAC baja porque el pixel optimiza con datos limpios.",
  },
];

export function MiniStackMarcas() {
  return (
    <AvatarMiniStack
      componentes={COMPONENTES}
      tituloSeccion="El stack que convierte tu marca en motor de venta directa"
      subtituloSeccion="Cinco componentes en cadena — desde el ad hasta la re-compra automática."
      footerNote="Todo el sistema corre sobre Pancake, partner oficial de Meta, TikTok y Google. Integraciones nativas con pasarelas LATAM (Wompi, Mercado Pago) y Stripe internacional."
    />
  );
}
