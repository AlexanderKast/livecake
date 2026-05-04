import { Zap, Sparkles, Rocket, Crown, type LucideIcon } from "lucide-react";
import {
  computeGuaranteeForPlan,
  type PlanGuarantee,
} from "@/lib/guarantee-policy";

export type CtaType = "stripe" | "agenda";

export interface Plan {
  id: string;
  name: string;
  icon: LucideIcon;
  videos: string;
  /** Cantidad numérica de lives/mes — usada para calcular precio por live. */
  videosCount: number;
  /** Optimizaciones incluidas por live (afecta el cálculo de entregables). */
  variantsPerVideo: number;
  variants: string;
  description: string;
  /** Tagline corto del plan — mostrado en tarjeta de precios. */
  tagline?: string;
  /** Frecuencia del live en lenguaje natural (ej. "2 por semana"). */
  liveFrequency?: string;
  features: string[];
  /** Ítems que NO están incluidos en el plan — mostrados con — en la tarjeta. */
  notIncluded?: string[];
  guarantee: PlanGuarantee;
  ctaLabel: string;
  ctaType: CtaType;
  ctaHref: string;
  highlight?: boolean;
  badge?: string;
  stripePriceId?: string;
}

// ─── Constantes por plan ──────────────────────────────────────────────────────

const STARTER_LIVES = 2;
const GROWTH_LIVES = 8;
const PRO_LIVES = 16;

const STARTER_OPTS = 2;
const GROWTH_OPTS = 4;
const PRO_OPTS = 8;

const STARTER_GUARANTEE = computeGuaranteeForPlan(STARTER_LIVES);
const GROWTH_GUARANTEE = computeGuaranteeForPlan(GROWTH_LIVES);
const PRO_GUARANTEE = computeGuaranteeForPlan(PRO_LIVES);

/**
 * Planes Live Cake recurrentes — fuente de verdad compartida entre home Pricing
 * y la página dedicada /precios. Los precios nativos por moneda viven en
 * `@/lib/pricing/currency-config` (PLAN_PRICES) para permitir multi-moneda
 * con precios psicológicamente redondeados por país.
 *
 * La garantía de performance se calcula desde `@/lib/guarantee-policy`.
 * Para live shopping, "videos" equivale a lives A/B/mes y "variantes" a
 * optimizaciones/mes — misma fórmula, diferente semántica de negocio.
 */
export const PLANES_RECURRENTES: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    icon: Zap,
    videos: `${STARTER_LIVES} lives A/B`,
    videosCount: STARTER_LIVES,
    variantsPerVideo: STARTER_OPTS,
    variants: `${STARTER_OPTS} optimizaciones/mes`,
    description: "Para marcas que quieren probar el live shopping sin complicarse.",
    tagline: "Para validar el canal live",
    liveFrequency: "1 cada 2 semanas",
    features: [
      `${STARTER_LIVES} lives A/B por mes`,
      `${STARTER_OPTS} optimizaciones mensuales`,
      "6 videos para ads (listos para Meta y TikTok)",
      "2 variantes del live",
      "1 integración de plataforma (Hotmart, Dropi, Hoco o Gintracom)",
      "Sistema de comentarios simulados (hasta 30)",
      "Botcake básico: FAQ + captura de pedidos",
      "Guion y runbook de cada live",
      "Reunión estratégica cada 15 días",
      "Soporte técnico en 48h",
      "Sin comisión sobre las ventas generadas",
    ],
    notIncluded: [
      "Spot personalizado de marca (add-on desde $800 USD)",
      "Gestión de pauta publicitaria",
    ],
    guarantee: STARTER_GUARANTEE,
    ctaLabel: "Empezar con Starter",
    ctaType: "stripe",
    ctaHref: "/checkout/starter",
  },
  {
    id: "growth",
    name: "Growth",
    icon: Sparkles,
    videos: `${GROWTH_LIVES} lives A/B`,
    videosCount: GROWTH_LIVES,
    variantsPerVideo: GROWTH_OPTS,
    variants: `${GROWTH_OPTS} optimizaciones/mes`,
    description: "El más elegido: 2 lives por semana con optimización continua.",
    tagline: "Para escalar con datos reales",
    liveFrequency: "2 por semana",
    features: [
      `${GROWTH_LIVES} lives A/B por mes (2 por semana)`,
      `${GROWTH_OPTS} optimizaciones mensuales`,
      "12 videos para ads (listos para Meta y TikTok)",
      "4 variantes del live",
      "2 integraciones de plataforma",
      "Sistema de comentarios simulados con A/B testing",
      "Botcake avanzado: flujo + recuperación de pedidos",
      "Guion y runbook semanal",
      "Reunión estratégica cada 15 días",
      "Soporte técnico en 24h",
      "Sin comisión sobre las ventas generadas",
    ],
    notIncluded: [
      "Spot personalizado de marca (add-on desde $800 USD)",
      "Gestión de pauta publicitaria",
    ],
    guarantee: GROWTH_GUARANTEE,
    ctaLabel: "Empezar con Growth",
    ctaType: "stripe",
    ctaHref: "/checkout/growth",
    highlight: true,
    badge: "Más elegido",
  },
  {
    id: "pro",
    name: "Pro",
    icon: Rocket,
    videos: `${PRO_LIVES} lives A/B`,
    videosCount: PRO_LIVES,
    variantsPerVideo: PRO_OPTS,
    variants: `${PRO_OPTS} optimizaciones/mes`,
    description: "Un live día por medio: la cadencia ideal para marcas que ya venden.",
    tagline: "Para dominar la categoría",
    liveFrequency: "Día por medio",
    features: [
      `${PRO_LIVES} lives A/B por mes (día por medio)`,
      `${PRO_OPTS} optimizaciones mensuales`,
      "20 videos para ads (listos para Meta y TikTok)",
      "8 variantes del live",
      "Integraciones de plataforma ilimitadas",
      "Sistema de comentarios con A/B testing",
      "Botcake full-funnel completo",
      "Guion y runbook bi-diario",
      "Reunión estratégica cada 8 días",
      "Soporte técnico en 12h",
      "Sin comisión sobre las ventas generadas",
    ],
    notIncluded: [
      "Spot personalizado de marca (add-on desde $800 USD)",
      "Gestión de pauta publicitaria",
    ],
    guarantee: PRO_GUARANTEE,
    ctaLabel: "Empezar con Pro",
    ctaType: "stripe",
    ctaHref: "/checkout/pro",
  },
];

export const ENTERPRISE_FEATURES = [
  "Lives ilimitados al mes (escalable)",
  "Múltiples hosts simultáneos por canal",
  "Estrategia 360° con tu equipo de marketing",
  "Director de live shopping asignado",
  "Equipo técnico y creativo dedicado",
  "Integración directa con tu ERP y OMS",
  "Panel en tiempo real con BI personalizado",
  "Acuerdos de servicio garantizados por contrato (SLA)",
  "Onboarding ejecutivo con Alexander Cast",
  "Slack/Teams compartido con el equipo Live Cake",
  "Campañas de paid media co-gestionadas",
  "Garantía de performance personalizada por contrato",
];

export const ENTERPRISE_PLAN = {
  id: "enterprise",
  name: "A la Medida",
  icon: Crown,
  price: "A la medida",
  priceUnit: "31+ lives / mes · Escalable",
  tagline: "Para marcas con alto volumen que necesitan equipo dedicado, lives diarios y SLAs garantizados por contrato.",
};

export const PLAN_INCLUDES_ALL: string[] = [
  "Suite Pancake completa: WebCake + LiveCake + Botcake + CRM + Postcake + Conversion API",
  "Pancake hasta 4 conexiones + 1 dominio",
  "1 spot base genérico del producto",
  "Landing del falso live en tu dominio",
  "Sistema de comentarios simulados configurado",
  "Chatbot WhatsApp (Botcake) activo",
  "Conexión CRM / Postcake para órdenes",
  "Conversion API Meta + TikTok",
];

/**
 * Matriz de comparación feature-by-feature para /precios.
 * Cada fila define la feature y su valor (boolean | string) por plan.
 */
export type ComparisonRow = {
  feature: string;
  category: string;
  starter: string | boolean;
  growth: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  // ── Setup e implementación ───────────────────────────────────────────────
  {
    category: "Setup e implementación",
    feature: "Setup único (pago al firmar)",
    starter: "USD 1,400",
    growth: "USD 1,800",
    pro: "USD 2,200",
    enterprise: "A la medida",
  },
  {
    category: "Setup e implementación",
    feature: "Días hasta sistema activo",
    starter: "10 días",
    growth: "10 días",
    pro: "10 días",
    enterprise: "10 días",
  },
  {
    category: "Setup e implementación",
    feature: "Landing falso live (WebCake)",
    starter: true,
    growth: true,
    pro: true,
    enterprise: true,
  },
  {
    category: "Setup e implementación",
    feature: "Spot base genérico del producto",
    starter: true,
    growth: true,
    pro: true,
    enterprise: true,
  },
  {
    category: "Setup e implementación",
    feature: "Spot personalizado de marca",
    starter: "Add-on $800+",
    growth: "Add-on $800+",
    pro: "Add-on $800+",
    enterprise: "Add-on $800+",
  },
  // ── Lives y producción ──────────────────────────────────────────────────
  {
    category: "Lives y producción",
    feature: "Lives A/B por mes",
    starter: "2",
    growth: "8 (2/sem)",
    pro: "16 (día por medio)",
    enterprise: "Ilimitados",
  },
  {
    category: "Lives y producción",
    feature: "Frecuencia",
    starter: "1 cada 2 semanas",
    growth: "2 por semana",
    pro: "Día por medio",
    enterprise: "Escalable",
  },
  {
    category: "Lives y producción",
    feature: "Optimizaciones por mes",
    starter: "2",
    growth: "4",
    pro: "8",
    enterprise: "Ilimitadas",
  },
  {
    category: "Lives y producción",
    feature: "Variantes del live",
    starter: "2",
    growth: "4",
    pro: "8",
    enterprise: "Ilimitadas",
  },
  {
    category: "Lives y producción",
    feature: "Videos para ads",
    starter: "6",
    growth: "12",
    pro: "20",
    enterprise: "A la medida",
  },
  // ── Tecnología Pancake ──────────────────────────────────────────────────
  {
    category: "Tecnología Pancake incluida",
    feature: "WebCake + LiveCake",
    starter: true,
    growth: true,
    pro: true,
    enterprise: true,
  },
  {
    category: "Tecnología Pancake incluida",
    feature: "Botcake WhatsApp",
    starter: "Básico",
    growth: "Avanzado",
    pro: "Full-funnel",
    enterprise: "Full-funnel",
  },
  {
    category: "Tecnología Pancake incluida",
    feature: "CRM + Postcake (configuración)",
    starter: true,
    growth: true,
    pro: true,
    enterprise: true,
  },
  {
    category: "Tecnología Pancake incluida",
    feature: "Conversion API Meta + TikTok",
    starter: true,
    growth: true,
    pro: true,
    enterprise: true,
  },
  {
    category: "Tecnología Pancake incluida",
    feature: "Pancake 4 conexiones + 1 dominio",
    starter: true,
    growth: true,
    pro: true,
    enterprise: true,
  },
  {
    category: "Tecnología Pancake incluida",
    feature: "Comentarios simulados",
    starter: "30 comentarios",
    growth: "A/B testing",
    pro: "A/B testing",
    enterprise: "Ilimitados",
  },
  // ── Integraciones ───────────────────────────────────────────────────────
  {
    category: "Integraciones",
    feature: "Hotmart / Dropi / Hoco / Gintracom",
    starter: "1",
    growth: "2",
    pro: "Ilimitadas",
    enterprise: "Ilimitadas",
  },
  {
    category: "Integraciones",
    feature: "Conexiones adicionales Pancake",
    starter: "Add-on",
    growth: "Add-on",
    pro: "Add-on",
    enterprise: "Add-on",
  },
  {
    category: "Integraciones",
    feature: "Shopify",
    starter: "No disponible aún",
    growth: "No disponible aún",
    pro: "No disponible aún",
    enterprise: "No disponible aún",
  },
  // ── Gestión y soporte ───────────────────────────────────────────────────
  {
    category: "Gestión y soporte",
    feature: "Reuniones estratégicas",
    starter: "c/15 días",
    growth: "c/15 días",
    pro: "c/8 días",
    enterprise: "A demanda",
  },
  {
    category: "Gestión y soporte",
    feature: "Reportes",
    starter: "Mensual",
    growth: "Quincenal",
    pro: "Semanal",
    enterprise: "BI personalizado",
  },
  {
    category: "Gestión y soporte",
    feature: "Soporte técnico",
    starter: "48h",
    growth: "24h",
    pro: "12h",
    enterprise: "SLA custom",
  },
  {
    category: "Gestión y soporte",
    feature: "Gestión de pauta publicitaria",
    starter: false,
    growth: false,
    pro: false,
    enterprise: false,
  },
  {
    category: "Gestión y soporte",
    feature: "Gestión de pedidos",
    starter: "Cliente",
    growth: "Cliente",
    pro: "Cliente",
    enterprise: "Cliente",
  },
];
