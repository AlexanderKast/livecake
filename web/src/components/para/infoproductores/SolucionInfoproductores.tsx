import { AvatarSolucion } from "@/components/para/_shared/AvatarSolucion";
import type { PasoSolucion } from "@/components/para/_shared/types";

const PASOS: PasoSolucion[] = [
  {
    numero: 1,
    titulo: "Tu presentación de ventas más efectiva como live 24/7",
    descripcion:
      "Tomamos tu webinar de mayor conversión — o grabamos uno nuevo — y lo convertimos en un falso live que corre en bucle sobre Pancake. Comentarios programados, objeciones respondidas en el momento exacto y CTAs de Hotmart que aparecen cuando el espectador está listo para comprar.",
  },
  {
    numero: 2,
    titulo: "Botcake cierra ventas mientras tú das clases",
    descripcion:
      "Cuando un prospecto escribe al WhatsApp que aparece en el live, Botcake responde dudas frecuentes, envía el link de Hotmart y hace seguimiento automático a quienes no completaron el pago. Sin gestión manual de DMs ni perder leads a medianoche.",
  },
  {
    numero: 3,
    titulo: "Ads en Meta y TikTok que llevan tráfico al live — no al perfil",
    descripcion:
      "El live corre en tu dominio, no en una plataforma externa. Los ads llevan directamente a la experiencia de compra. La Conversion API envía cada compra de Hotmart a Meta y TikTok para que el algoritmo encuentre más compradores como tus mejores estudiantes.",
  },
];

export function SolucionInfoproductores() {
  return (
    <AvatarSolucion
      pasos={PASOS}
      tituloSeccion="Cómo Live Cake convierte tu expertise en ingresos constantes"
      subtituloSeccion="Tres pasos para pasar del modelo lanzamiento al modelo live permanente."
    />
  );
}
