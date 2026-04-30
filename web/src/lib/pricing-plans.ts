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
  features: string[];
  guarantee: PlanGuarantee;
  ctaLabel: string;
  ctaType: CtaType;
  ctaHref: string;
  highlight?: boolean;
  badge?: string;
  /**
   * Stripe Price ID por environment. Se asigna desde variables de entorno.
   * Dejar undefined hasta que los price IDs de Stripe sean creados para live shopping.
   */
  stripePriceId?: string;
}

// ─── Constantes por plan ──────────────────────────────────────────────────────

const STARTER_LIVES = 2;
const GROWTH_LIVES = 8;
const PRO_LIVES = 16;
const ELITE_LIVES = 31;

const STARTER_OPTS = 2;
const GROWTH_OPTS = 4;
const PRO_OPTS = 8;
// Elite: optimizaciones ilimitadas — usamos 99 como proxy numérico para la garantía
const ELITE_OPTS = 99;

const STARTER_GUARANTEE = computeGuaranteeForPlan(STARTER_LIVES);
const GROWTH_GUARANTEE = computeGuaranteeForPlan(GROWTH_LIVES);
const PRO_GUARANTEE = computeGuaranteeForPlan(PRO_LIVES);
const ELITE_GUARANTEE = computeGuaranteeForPlan(ELITE_LIVES);

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
    features: [
      `${STARTER_LIVES} lives A/B por mes (producción + transmisión)`,
      "Suite Pancake completa: WebCake + LiveCake + Botcake + CRM + Postcake",
      "Conversion API nativa (Meta + TikTok + Google)",
      `${STARTER_OPTS} optimizaciones de live por mes`,
      "Guion y estructura de cada live escritos por nuestro equipo",
      "Presentador/host entrenado en live shopping LATAM",
      "Setup técnico inicial y prueba de transmisión",
      "Reporte de performance post-live (retención, CVR, AOV)",
      `Garantía de performance: ${STARTER_GUARANTEE.shortLabel}`,
      "Sin comisión sobre las ventas generadas",
    ],
    guarantee: STARTER_GUARANTEE,
    ctaLabel: "Empezar ahora",
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
    features: [
      `${GROWTH_LIVES} lives A/B por mes (2 por semana)`,
      "Suite Pancake completa: WebCake + LiveCake + Botcake + CRM + Postcake",
      "Conversion API nativa (Meta + TikTok + Google)",
      `${GROWTH_OPTS} optimizaciones de live por mes`,
      "Estrategia de producto y oferta para cada live",
      "Guion, estructura y runbook semanal",
      "Presentador/host dedicado a tu marca",
      "Segmentación de audiencia y retargeting post-live",
      "Reporte semanal con KPIs (viewers, retención, CVR, ROAS)",
      "Integración con tu WhatsApp Business (Botcake flows)",
      `Garantía de performance: ${GROWTH_GUARANTEE.shortLabel}`,
      "Sin comisión sobre las ventas generadas",
    ],
    guarantee: GROWTH_GUARANTEE,
    ctaLabel: "Quiero crecer",
    ctaType: "stripe",
    ctaHref: "/checkout/growth",
    highlight: true,
    badge: "Mas elegido",
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
    features: [
      `${PRO_LIVES} lives A/B por mes (día por medio)`,
      "Suite Pancake completa: WebCake + LiveCake + Botcake + CRM + Postcake",
      "Conversion API nativa (Meta + TikTok + Google)",
      `${PRO_OPTS} optimizaciones de live por mes`,
      "Estrategia de catálogo rotativo por live",
      "Guion, estructura y runbook bi-diario",
      "Presentador/host senior dedicado",
      "Setup de campañas de paid media pre y post live",
      "Segmentación avanzada + lookalike audiences",
      "Dashboard en tiempo real con métricas de cada live",
      "Reunión estratégica quincenal con el equipo",
      "Soporte prioritario por WhatsApp (respuesta < 2 h)",
      `Garantía de performance: ${PRO_GUARANTEE.shortLabel}`,
      "Sin comisión sobre las ventas generadas",
    ],
    guarantee: PRO_GUARANTEE,
    ctaLabel: "Quiero escalar",
    ctaType: "stripe",
    ctaHref: "/checkout/pro",
  },
  {
    id: "elite",
    name: "Elite",
    icon: Crown,
    videos: `${ELITE_LIVES} lives A/B`,
    videosCount: ELITE_LIVES,
    variantsPerVideo: ELITE_OPTS,
    variants: "Optimizaciones ilimitadas",
    description: "Un live diario: máxima frecuencia y revenue predecible cada mes.",
    features: [
      `${ELITE_LIVES} lives A/B por mes (1 diario, 7 días/semana)`,
      "Suite Pancake completa: WebCake + LiveCake + Botcake + CRM + Postcake",
      "Conversion API nativa (Meta + TikTok + Google)",
      "Optimizaciones ilimitadas de live por mes",
      "Equipo dedicado: estratega, host, editor y account manager",
      "Planificación mensual de catálogo, ofertas y lanzamientos",
      "Campañas de paid media gestionadas por el equipo Live Cake",
      "Automatización CRM + Botcake post-live (flujos de recuperación)",
      "Integración con tu ERP / plataforma de e-commerce",
      "Dashboard ejecutivo en tiempo real + reporte mensual ejecutivo",
      "Reunión semanal con el account manager",
      "Soporte de emergencia 24/7 durante transmisiones",
      `Garantía de performance: ${ELITE_GUARANTEE.shortLabel}`,
      "Sin comisión sobre las ventas generadas",
    ],
    guarantee: ELITE_GUARANTEE,
    ctaLabel: "Quiero el Elite",
    ctaType: "stripe",
    ctaHref: "/checkout/elite",
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
  elite: string | boolean;
  enterprise: string | boolean;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    category: "Lives",
    feature: "Lives A/B por mes",
    starter: "2",
    growth: "8 (2/sem)",
    pro: "16 (día por medio)",
    elite: "31 (1 diario)",
    enterprise: "Ilimitados",
  },
  {
    category: "Lives",
    feature: "Optimizaciones por mes",
    starter: "2",
    growth: "4",
    pro: "8",
    elite: "Ilimitadas",
    enterprise: "Ilimitadas",
  },
  {
    category: "Lives",
    feature: "Setup técnico inicial",
    starter: true,
    growth: true,
    pro: true,
    elite: true,
    enterprise: true,
  },
  {
    category: "Suite Pancake",
    feature: "WebCake (tienda live)",
    starter: true,
    growth: true,
    pro: true,
    elite: true,
    enterprise: true,
  },
  {
    category: "Suite Pancake",
    feature: "LiveCake (motor de transmisión)",
    starter: true,
    growth: true,
    pro: true,
    elite: true,
    enterprise: true,
  },
  {
    category: "Suite Pancake",
    feature: "Botcake (WhatsApp automation)",
    starter: true,
    growth: true,
    pro: true,
    elite: true,
    enterprise: true,
  },
  {
    category: "Suite Pancake",
    feature: "CRM + Postcake",
    starter: true,
    growth: true,
    pro: true,
    elite: true,
    enterprise: true,
  },
  {
    category: "Suite Pancake",
    feature: "Conversion API (Meta + TikTok + Google)",
    starter: true,
    growth: true,
    pro: true,
    elite: true,
    enterprise: true,
  },
  {
    category: "Producción & Estrategia",
    feature: "Guion y runbook por live",
    starter: true,
    growth: true,
    pro: true,
    elite: true,
    enterprise: true,
  },
  {
    category: "Producción & Estrategia",
    feature: "Host / presentador",
    starter: "Compartido",
    growth: "Dedicado",
    pro: "Senior dedicado",
    elite: "Equipo dedicado",
    enterprise: "Equipo dedicado",
  },
  {
    category: "Producción & Estrategia",
    feature: "Estrategia de catálogo y oferta",
    starter: "Básica",
    growth: "Semanal",
    pro: "Bi-diaria",
    elite: "Diaria",
    enterprise: "Director dedicado",
  },
  {
    category: "Producción & Estrategia",
    feature: "Campañas de paid media pre/post live",
    starter: false,
    growth: "Segmentación básica",
    pro: "Setup completo",
    elite: "Gestionadas por el equipo",
    enterprise: "Co-gestionadas",
  },
  {
    category: "Reportes & Cuenta",
    feature: "Reporte de performance post-live",
    starter: "Por live",
    growth: "Semanal",
    pro: "Dashboard en tiempo real",
    elite: "Dashboard + reporte mensual ejecutivo",
    enterprise: "BI personalizado",
  },
  {
    category: "Reportes & Cuenta",
    feature: "Reunión estratégica",
    starter: false,
    growth: false,
    pro: "Quincenal",
    elite: "Semanal",
    enterprise: "A demanda",
  },
  {
    category: "Reportes & Cuenta",
    feature: "Account manager",
    starter: false,
    growth: "Compartido",
    pro: "Dedicado",
    elite: "Senior dedicado",
    enterprise: "Equipo dedicado",
  },
  {
    category: "Soporte",
    feature: "Soporte por WhatsApp",
    starter: "Horario hábil",
    growth: "Horario hábil",
    pro: "Prioritario < 2 h",
    elite: "24/7 durante lives",
    enterprise: "SLA custom",
  },
  {
    category: "Soporte",
    feature: "SLA garantizado por contrato",
    starter: false,
    growth: false,
    pro: false,
    elite: false,
    enterprise: true,
  },
  {
    category: "Garantía",
    feature: "Lives reemplazables si no rinden",
    starter: STARTER_GUARANTEE.shortLabel,
    growth: GROWTH_GUARANTEE.shortLabel,
    pro: PRO_GUARANTEE.shortLabel,
    elite: ELITE_GUARANTEE.shortLabel,
    enterprise: "Personalizada",
  },
  {
    category: "Garantía",
    feature: "Umbral CTR mínimo",
    starter: "≥ 1.5%",
    growth: "≥ 1.5%",
    pro: "≥ 1.5%",
    elite: "≥ 1.5%",
    enterprise: "Negociable",
  },
  {
    category: "Garantía",
    feature: "Umbral retención mínima",
    starter: "≥ 25%",
    growth: "≥ 25%",
    pro: "≥ 25%",
    elite: "≥ 25%",
    enterprise: "Negociable",
  },
  {
    category: "Comercial",
    feature: "Comisión sobre ventas",
    starter: "Sin comisión",
    growth: "Sin comisión",
    pro: "Sin comisión",
    elite: "Sin comisión",
    enterprise: "Sin comisión",
  },
  {
    category: "Comercial",
    feature: "Setup inicial (pago único)",
    starter: "USD 1,400",
    growth: "USD 1,800",
    pro: "USD 2,200",
    elite: "USD 3,000",
    enterprise: "A la medida",
  },
];
