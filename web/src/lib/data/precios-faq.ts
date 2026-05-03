import type { FAQItem } from "./home-faq";
import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  Clock,
  ArrowUpDown,
  Puzzle,
  Image,
  MapPin,
  Megaphone,
  DollarSign,
} from "lucide-react";

export interface PreciosFAQItem extends FAQItem {
  icon: LucideIcon;
}

export const PRECIOS_FAQS: PreciosFAQItem[] = [
  {
    question: "¿El setup es un pago adicional o está incluido en el mensual?",
    answer:
      "Son dos cobros separados. El setup único se paga al firmar el contrato y cubre la implementación completa del sistema en 10 días: WebCake, Botcake, comentarios, CRM, integración de plataforma, videos para ads y spot base. La recurrencia mensual empieza a correr desde que el sistema está activo.",
    icon: CreditCard,
  },
  {
    question: "¿Hay permanencia mínima o contrato de largo plazo?",
    answer:
      "No. No hay permanencia mínima. Si en el primer mes el sistema no es lo que esperabas, cancelas antes del siguiente ciclo y no se cobra la recurrencia. El único costo que no se devuelve es el setup, porque cubre el trabajo de implementación ya realizado.",
    icon: Clock,
  },
  {
    question: "¿Puedo cambiar de plan después de empezar?",
    answer:
      "Sí. El upgrade es inmediato — se cobra la diferencia del setup adicional y el nuevo valor mensual desde el siguiente ciclo. La mayoría de clientes empieza en Starter para validar el canal y sube a Growth en el mes 2 cuando ve los primeros resultados. El downgrade también es posible pero no recomendable porque se pierde la producción adicional ya configurada.",
    icon: ArrowUpDown,
  },
  {
    question: "¿Qué pasa si necesito más de 4 conexiones de Pancake?",
    answer:
      "Todos los planes incluyen hasta 4 conexiones de Pancake y 1 dominio. Cada conexión adicional (Instagram extra, TikTok adicional, WhatsApp extra) tiene un costo de $25–$40 USD/mes y corre por tu cuenta directamente con Pancake. Si ya tienes cuenta propia de Pancake, nos la proporcionas y trabajamos sobre ella sin costo adicional de licencia.",
    icon: Puzzle,
  },
  {
    question: "¿El spot personalizado de marca está incluido en algún plan?",
    answer:
      "No. En ningún plan. El spot incluido en todos los planes es el spot base genérico — producido con la estética de LiveCake, presenta tu producto y sus beneficios. El spot personalizado, con tu identidad visual completa, tu presentador específico y tu música de marca, es siempre un add-on desde $800 USD según complejidad.",
    icon: Image,
  },
  {
    question: "¿Puedo contratar el arriendo del espacio de grabación?",
    answer:
      "Sí, es un add-on disponible para cualquier plan. $200–$500 USD/mes según el espacio. Incluye equipos (cámara, iluminación, audio) con un máximo de 2 horas al día de uso activo. El set montado para tu marca queda disponible a tiempo completo — no se desmonta entre sesiones.",
    icon: MapPin,
  },
  {
    question: "¿La gestión de mi pauta publicitaria está incluida?",
    answer:
      "No, en ningún plan. LiveCake produce el sistema y los videos listos para correr en pauta. La inversión y gestión de campañas en Meta, TikTok o Google las maneja tu equipo o tu agencia de medios. Podemos recomendarte la estructura de campaña, pero la ejecución y el presupuesto son del cliente.",
    icon: Megaphone,
  },
  {
    question: "¿Cómo se cobra — en pesos colombianos o en dólares?",
    answer:
      "Los precios están en USD. El cobro se realiza vía Stripe. Si el sistema de multi-moneda del proyecto detecta tu país por geolocalización, puede mostrarte la equivalencia en tu moneda local — pero la facturación siempre es en USD.",
    icon: DollarSign,
  },
];
