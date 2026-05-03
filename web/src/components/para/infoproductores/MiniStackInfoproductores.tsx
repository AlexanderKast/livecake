import { AvatarMiniStack } from "@/components/para/_shared/AvatarMiniStack";
import type { ComponenteStack } from "@/components/para/_shared/types";

const COMPONENTES: ComponenteStack[] = [
  {
    name: "WebCake",
    tagline: "Tu academia. Tu live.",
    descripcion:
      "El live embebido en tu dominio propio — no en YouTube ni en Zoom. El prospecto llega desde el ad y ve una sesión activa de tu metodología. El contexto de autoridad está en tu marca, no en una plataforma de terceros.",
  },
  {
    name: "LiveCake",
    tagline: "Tu webinar más exitoso en bucle",
    descripcion:
      "El video de tu presentación de ventas más efectiva corre 24/7 con comentarios programados que refuerzan prueba social, responden objeciones y crean urgencia — exactamente en los momentos críticos de decisión.",
  },
  {
    name: "Botcake",
    tagline: "Cierra ventas por WhatsApp automáticamente",
    descripcion:
      "Integrado con Hotmart. El prospecto escribe al WhatsApp del live, Botcake responde dudas, envía el link de inscripción y hace follow-up a quienes abandonaron el carrito — sin que toques el teléfono.",
  },
  {
    name: "Postcake CRM",
    tagline: "Pipeline de prospectos centralizado",
    descripcion:
      "Visibilidad completa del proceso: quién vio el live, quién preguntó por WhatsApp, quién inició pago y quién completó la inscripción en Hotmart. Datos para mejorar cada iteración del live.",
  },
  {
    name: "Conversion API",
    tagline: "Meta + TikTok aprenden de tus mejores estudiantes",
    descripcion:
      "Las inscripciones en Hotmart se envían server-side a Meta y TikTok. El algoritmo busca más personas con el perfil de tus estudiantes que sí completan — no solo de los que dan clic.",
  },
];

export function MiniStackInfoproductores() {
  return (
    <AvatarMiniStack
      componentes={COMPONENTES}
      tituloSeccion="El stack que convierte tu conocimiento en ingresos recurrentes"
      subtituloSeccion="Cinco componentes en cadena — desde el ad hasta la inscripción confirmada en Hotmart."
      footerNote="Todo el sistema corre sobre Pancake, partner oficial de Meta, TikTok y Google. Integración directa con Hotmart para infoproductores en LATAM."
    />
  );
}
