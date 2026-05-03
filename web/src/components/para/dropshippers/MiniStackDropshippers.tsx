import { AvatarMiniStack } from "@/components/para/_shared/AvatarMiniStack";
import type { ComponenteStack } from "@/components/para/_shared/types";

const COMPONENTES: ComponenteStack[] = [
  {
    name: "WebCake",
    tagline: "Tu dominio. Tu live.",
    descripcion:
      "El live embebido en tu propio dominio — no en TikTok Live ni en una landing genérica. El visitante llega desde el ad y ve una transmisión activa de tu producto. Confianza desde el primer segundo.",
  },
  {
    name: "LiveCake",
    tagline: "El loop 24/7",
    descripcion:
      "Video en bucle continuo con comentarios y CTAs orquestados por minuto. Cada vez que alguien entra, ve un live activo con espectadores y reacciones — sin que nadie esté frente a la cámara.",
  },
  {
    name: "Botcake",
    tagline: "Órdenes por WhatsApp automáticas",
    descripcion:
      "Integrado con Dropi, Hoco y Gintracom. El cliente escribe al WhatsApp del live, Botcake captura la orden, procesa el pago y confirma el despacho — sin intervención de tu equipo.",
  },
  {
    name: "Postcake CRM",
    tagline: "Pipeline de pedidos centralizado",
    descripcion:
      "Panel unificado para gestionar todas las órdenes generadas en el live. Visibilidad completa desde el clic en el ad hasta la confirmación del despacho.",
  },
  {
    name: "Conversion API",
    tagline: "Señales limpias a Meta + TikTok",
    descripcion:
      "Los eventos de compra van server-side a Meta y TikTok. Sin depender de cookies de navegador — el algoritmo optimiza con datos reales, no estimados.",
  },
];

export function MiniStackDropshippers() {
  return (
    <AvatarMiniStack
      componentes={COMPONENTES}
      tituloSeccion="El stack que hace que tu producto venda solo"
      subtituloSeccion="Cinco componentes en cadena — desde el ad hasta el pedido despachado."
      footerNote="Todo el sistema corre sobre Pancake, partner oficial de Meta, TikTok y Google. Integración directa con Dropi, Hoco y Gintracom para dropshipping en LATAM."
    />
  );
}
