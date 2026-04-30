import type { FAQItem } from "./home-faq";
import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  Clock,
  ArrowUpDown,
  XCircle,
  ShieldCheck,
  DollarSign,
  Plus,
  FileText,
  TrendingUp,
  Crown,
} from "lucide-react";

export interface PreciosFAQItem extends FAQItem {
  icon: LucideIcon;
}

export const PRECIOS_FAQS: PreciosFAQItem[] = [
  {
    question: "¿Cuál es el modelo de pago?",
    answer:
      "Todos los planes tienen dos componentes: (1) setup inicial (pago único al arranque: $1,400–$3,000 USD según el plan) que cubre la configuración de Pancake, las pruebas técnicas y el onboarding; y (2) mensualidad recurrente cobrada al inicio de cada periodo via Stripe. Aceptamos tarjeta internacional, transferencia USD/COP y facturación electrónica LATAM.",
    icon: CreditCard,
  },
  {
    question: "¿Hay permanencia mínima?",
    answer:
      "Mínimo 3 meses en todos los planes recurrentes. Después queda mes a mes, cancelable con 30 días de aviso. Si te comprometes a un contrato de 6 o 12 meses, aplicamos descuento adicional del 10% al 15% sobre la mensualidad. Lo conversamos en la llamada inicial.",
    icon: Clock,
  },
  {
    question: "¿Puedo cambiar de plan durante el contrato?",
    answer:
      "Sí. Si subes de plan (por ejemplo de Starter a Growth), el cambio aplica al siguiente ciclo y pagas la diferencia del setup entre planes. Si bajas de plan, el cambio aplica al siguiente ciclo también. Sin penalidades por cambio de plan.",
    icon: ArrowUpDown,
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, con 30 días de aviso y cumpliendo el mínimo de 3 meses. Al cancelar conservas el acceso a Pancake hasta el fin del periodo pagado y todos los recordings de lives producidos. El setup inicial no es reembolsable.",
    icon: XCircle,
  },
  {
    question: "¿Ofrecen garantía de devolución?",
    answer:
      "Sí. Tienes 7 días de garantía desde el primer pago de la mensualidad. Si durante la primera semana consideras que no encajamos con tu negocio, te devolvemos el 100% de la mensualidad (el setup inicial no se incluye en la devolución). Pasada esa ventana puedes cancelar al siguiente ciclo sin penalidad.",
    icon: ShieldCheck,
  },
  {
    question: "¿En qué moneda se factura?",
    answer:
      "La página detecta tu país y muestra los precios en USD (default) o COP en Colombia. Puedes cambiar la moneda desde el selector del menú. Para marcas fuera de Colombia facturamos en USD. Para marcas colombianas facturamos en COP a la TRM del día o USD a tu elección, con factura electrónica DIAN.",
    icon: DollarSign,
  },
  {
    question: "¿Qué pasa si necesito más lives un mes específico?",
    answer:
      "Puedes comprar lives adicionales fuera del plan a tarifa unitaria proporcional al plan contratado. Si el volumen extra es recurrente, conviene subir de nivel. También evaluamos el plan A la Medida si necesitas frecuencia diaria con equipo completamente dedicado.",
    icon: Plus,
  },
  {
    question: "¿La suite Pancake queda en mi cuenta o en la de Live Cake?",
    answer:
      "La instancia de Pancake se configura bajo tu marca y dominio. Tienes acceso al panel de control, los datos de tus clientes (historial de compras en live, segmentos CRM, flows de Botcake) y los recordings son tuyos. Si decides salir, Live Cake no retiene ningún dato de tus compradores.",
    icon: FileText,
  },
  {
    question: "¿Puedo empezar con Starter y escalar después?",
    answer:
      "Sí — de hecho es el camino más común. La mayoría de marcas arranca con Starter o Growth por 1 a 3 meses para validar la dinámica del live con su audiencia y sus productos, luego sube de plan. El setup técnico, los runbooks y el aprendizaje del host quedan listos para la transición.",
    icon: TrendingUp,
  },
  {
    question: "¿Qué hace diferente al plan A la Medida?",
    answer:
      "Equipo completamente dedicado (estratega, host senior, editor, account manager), lives ilimitados, integración con tu ERP/OMS, acuerdos de servicio garantizados por contrato (SLA), BI personalizado en tiempo real y onboarding ejecutivo con Alexander Cast. Es para marcas con volumen de ventas alto que necesitan operar live shopping todos los días del mes.",
    icon: Crown,
  },
];
