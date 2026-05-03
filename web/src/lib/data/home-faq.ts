export interface FAQItem {
  question: string;
  answer: string;
}

export const HOME_FAQS: FAQItem[] = [
  {
    question: "¿Qué es exactamente un falso live?",
    answer:
      "Es un video pregrabado que transmite continuamente como si fuera en vivo, sobre la plataforma Pancake. Incluye comentarios simulados con timing exacto, botón de compra activo y chatbot de WhatsApp integrado. El cliente vive la experiencia de un live real — con prueba social, interacción y urgencia — pero el sistema corre solo, sin que estés presente.",
  },
  {
    question: "¿Esto está permitido por Meta y TikTok?",
    answer:
      "Sí. Pancake es partner oficial de Meta, TikTok y Google. Los lives de LiveCake no corren en TikTok Live ni Facebook Live nativos — corren sobre Pancake embebido en tu dominio vía WebCake. Eso es precisamente lo que permite operar 24/7 con respaldo oficial de las plataformas. Es la única vía aprobada para live commerce continuo en LATAM.",
  },
  {
    question: "¿Necesito tener cuenta de Pancake?",
    answer:
      "No. LiveCake asume el costo de la licencia Pancake hasta 4 conexiones y 1 dominio en todos los planes. Si necesitas más conexiones o dominios adicionales, esos corren por tu cuenta. Si ya tienes cuenta de Pancake, nos la proporcionas y trabajamos sobre ella.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar funcionando?",
    answer:
      "10 días hábiles desde la firma del contrato. Día 1: briefing y accesos. Días 2–6: configuración técnica completa (WebCake, Botcake, comentarios, CRM, integración de plataforma). Días 7–9: producción de videos. Día 10: QA y sistema en vivo.",
  },
  {
    question: "¿Con qué plataformas se integra?",
    answer:
      "Hotmart (infoproductos), Dropi, Hoco y Gintracom (dropshipping), WhatsApp Business (Botcake), y Conversion API de Meta, TikTok y Google para optimización de pauta. El plan Starter incluye 1 integración, Pro y Elite incluyen integraciones ilimitadas.",
  },
  {
    question: "¿Ustedes gestionan mis pedidos?",
    answer:
      "No. LiveCake configura y conecta el CRM (Postcake). La gestión operativa de los pedidos la hace tu equipo. Nosotros montamos el sistema, tú operas el día a día.",
  },
  {
    question: "¿Qué diferencia hay entre el spot genérico y el spot personalizado?",
    answer:
      "El spot base genérico está incluido en todos los planes: es el video principal del live producido con la estética de LiveCake. El spot personalizado es un add-on (desde $800 USD) donde producimos el video con tu identidad visual completa: tus colores, tu presentador específico, tu locación, tu música de marca.",
  },
  {
    question: "¿Puedo alquilar el estudio y los equipos de LiveCake?",
    answer:
      "Sí, es un add-on de $200–$500 USD/mes. Incluye acceso al espacio de grabación con equipos (cámara, iluminación, audio) con un máximo de 2 horas al día de uso activo. El set montado para tu marca queda disponible a tiempo completo — no se desmonta entre sesiones.",
  },
];
