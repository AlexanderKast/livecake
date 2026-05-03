import { AvatarSolucion } from "@/components/para/_shared/AvatarSolucion";
import type { PasoSolucion } from "@/components/para/_shared/types";

const PASOS: PasoSolucion[] = [
  {
    numero: 1,
    titulo: "Live pregrabado conectado a tu catálogo",
    descripcion:
      "Grabamos un live profesional mostrando tu producto en uso real: unboxing, comparativa de tallas, demostración de uso. Subimos el video a Pancake y lo corremos en bucle 24/7 embebido en tu dominio. Tus ads de Meta y TikTok llevan tráfico directo al live — no a una landing estática.",
  },
  {
    numero: 2,
    titulo: "Botcake capta órdenes sin que toques el teléfono",
    descripcion:
      "Cuando el espectador escribe al WhatsApp que aparece en el live, Botcake responde automáticamente: envía el link de pago, confirma el pedido y lo registra en Postcake CRM. Sin chat manual. Sin perder órdenes porque estabas dormido.",
  },
  {
    numero: 3,
    titulo: "Conversion API optimiza tus ads en tiempo real",
    descripcion:
      "Cada compra, cada inicio de checkout y cada visita al live se envía vía server-side a Meta y TikTok. El algoritmo aprende de cada venta real — no de clics. Tu ROAS sube porque el pixel recibe señales limpias, no estimadas por cookies.",
  },
];

export function SolucionDropshippers() {
  return (
    <AvatarSolucion
      pasos={PASOS}
      tituloSeccion="Cómo Live Cake convierte tu ad en pedido"
      subtituloSeccion="Tres pasos del sistema Pancake aplicados al dropshipping en LATAM."
    />
  );
}
