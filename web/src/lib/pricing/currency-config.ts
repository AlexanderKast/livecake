export type Currency = "USD" | "COP";

export const SUPPORTED_CURRENCIES: readonly Currency[] = ["USD", "COP"] as const;
export const DEFAULT_CURRENCY: Currency = "USD";

export interface CurrencyMeta {
  code: Currency;
  locale: string;
  flag: string;
  name: string;
  unitLabel: string;
}

export const CURRENCY_META: Record<Currency, CurrencyMeta> = {
  USD: {
    code: "USD",
    locale: "en-US",
    flag: "US",
    name: "Dólar (USD)",
    unitLabel: "USD / mes",
  },
  COP: {
    code: "COP",
    locale: "es-CO",
    flag: "CO",
    name: "Peso colombiano (COP)",
    unitLabel: "COP / mes",
  },
};

export interface PlanPricing {
  /** Precio mensual base (sin descuento por compromiso). */
  amount: number;
  /** Precio de setup inicial (pago único, no recurrente). */
  setupAmount: number;
  /** Ahorro mensual estimado vs. contratar los componentes por separado (para copy de UX). */
  monthlySavings: number;
}

/**
 * Precios mensuales base (ciclo de 1 mes, sin descuento por compromiso).
 * Los descuentos por duración (3/6/12 meses) se aplican encima y están
 * definidos en `@/lib/stripe/plans:DURATION_DISCOUNT`.
 *
 * Planes Live Cake (live shopping):
 *   starter  → USD 599  /mes · Setup USD 1,400
 *   growth   → USD 999  /mes · Setup USD 1,800
 *   pro      → USD 1,699/mes · Setup USD 2,200
 *   elite    → USD 2,799/mes · Setup USD 3,000
 *
 * Tasas COP: USD × 4,000 (referencia al 2026-04-30), redondeadas a cifras
 * psicológicamente limpias para el mercado colombiano.
 */
export const PLAN_PRICES: Record<string, Record<Currency, PlanPricing>> = {
  starter: {
    USD: { amount: 599, setupAmount: 1_400, monthlySavings: 800 },
    COP: { amount: 2_390_000, setupAmount: 5_590_000, monthlySavings: 3_200_000 },
  },
  growth: {
    USD: { amount: 999, setupAmount: 1_800, monthlySavings: 1_500 },
    COP: { amount: 3_990_000, setupAmount: 7_190_000, monthlySavings: 6_000_000 },
  },
  pro: {
    USD: { amount: 1_699, setupAmount: 2_200, monthlySavings: 2_800 },
    COP: { amount: 6_790_000, setupAmount: 8_790_000, monthlySavings: 11_200_000 },
  },
  elite: {
    USD: { amount: 2_799, setupAmount: 3_000, monthlySavings: 5_200 },
    COP: { amount: 11_190_000, setupAmount: 11_990_000, monthlySavings: 20_800_000 },
  },
};

export interface VolumeTier {
  label: string;
  minVideos: number;
  maxVideos: number | null;
  perVideo: number;
  displayPrefix?: string;
}

export const VOLUME_TIERS: Record<Currency, VolumeTier[]> = {
  USD: [
    { label: "5–50", minVideos: 5, maxVideos: 50, perVideo: 80, displayPrefix: "Desde" },
    { label: "50–99", minVideos: 51, maxVideos: 99, perVideo: 40 },
    { label: "100–200", minVideos: 100, maxVideos: 200, perVideo: 35 },
    { label: "200+", minVideos: 201, maxVideos: null, perVideo: 29 },
  ],
  COP: [
    { label: "5–50", minVideos: 5, maxVideos: 50, perVideo: 319_000, displayPrefix: "Desde" },
    { label: "50–99", minVideos: 51, maxVideos: 99, perVideo: 159_000 },
    { label: "100–200", minVideos: 100, maxVideos: 200, perVideo: 139_000 },
    { label: "200+", minVideos: 201, maxVideos: null, perVideo: 119_000 },
  ],
};

export interface SoloRates {
  script: number;
  edit: number;
  creator: number;
  strategy: number;
}

export const SOLO_RATES: Record<Currency, SoloRates> = {
  USD: { script: 45, edit: 33, creator: 75, strategy: 225 },
  COP: { script: 179_000, edit: 129_000, creator: 299_000, strategy: 899_000 },
};

export const VOLUME_50_PRICE: Record<Currency, number> = {
  USD: 2_200,
  COP: 8_790_000,
};

/** USD a COP de referencia para convertir montos canónicos a moneda local en tracking. */
export const USD_TO_LOCAL: Record<Currency, number> = {
  USD: 1,
  COP: 4_000,
};

export function getPlanPrice(
  planId: string,
  currency: Currency,
): PlanPricing | null {
  return PLAN_PRICES[planId]?.[currency] ?? null;
}

export function priceInUSD(amount: number, currency: Currency): number {
  if (currency === "USD") return amount;
  const rate = USD_TO_LOCAL[currency];
  return rate ? Math.round(amount / rate) : amount;
}
