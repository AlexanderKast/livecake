export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://livecake.co";

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-PT9JR4ZN";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "G-B24MDLL0TX";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const TIKTOK_PIXEL_ID =
  process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "D7EKKNJC77U75VFHD5E0";
export const LINKEDIN_PARTNER_ID =
  process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "";
export const BING_UET_ID = process.env.NEXT_PUBLIC_BING_UET_ID ?? "";
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID ?? "";

export const BRAND = {
  name: "Live Cake",
  url: "https://livecake.co",
  logo: "https://livecake.co/brand/logo-light-bg.png",
  description:
    "Live shopping y falsos lives 24/7 sobre Pancake. Partner oficial Meta + TikTok + Google. Sin comisión sobre ventas.",
  instagram: "https://www.instagram.com/livecake",
  tiktok: "https://www.tiktok.com/@livecake",
} as const;

export const CONSENT_STORAGE_KEY = "ugc_cookie_consent";
export const UTM_STORAGE_KEY = "ugc_utm_params";
export const UTM_EXPIRY_DAYS = 30;
