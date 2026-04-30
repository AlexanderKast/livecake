import type { Config } from "tailwindcss";
import {
  brandColors,
  graysScale,
  radii,
  shadows,
} from "./src/lib/brand/tokens";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: brandColors.black,
          ink: brandColors.ink,
          graphite: brandColors.graphite,
          "gray-dark": brandColors.grayDark,
          "gray-light": brandColors.grayLight,
          gray: brandColors.grayLight,
          cream: brandColors.cream,
          white: brandColors.white,
          // Live Cake — palette semántica
          green: brandColors.green,
          "green-dark": brandColors.greenDark,
          "green-bright": brandColors.greenBright,
          "red-live": brandColors.redLive,
          // Legacy keys (retrocompat — apuntan a verde Live Cake)
          yellow: brandColors.yellow,
          "yellow-hover": brandColors.yellowHover,
          "yellow-soft": brandColors.yellowSoft,
          gold: brandColors.gold,
          "gold-dark": brandColors.goldDark,
          red: brandColors.red,
          "red-hover": brandColors.redHover,
        },
        "brand-gray": graysScale,
      },
      fontFamily: {
        display: ["var(--font-manrope)", "Manrope", "-apple-system", "sans-serif"],
        impact: ["var(--font-manrope)", "Manrope", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        none: radii.none,
        sm: radii.sm,
        base: radii.base,
        md: radii.md,
        lg: radii.lg,
        xl: radii.xl,
        "2xl": radii["2xl"],
        full: radii.full,
      },
      boxShadow: {
        "brand-xs": shadows.xs,
        "brand-sm": shadows.sm,
        "brand-base": shadows.base,
        "brand-md": shadows.md,
        "brand-lg": shadows.lg,
        "brand-xl": shadows.xl,
        // Live Cake — glows
        green: shadows.green,
        "green-sm": shadows.greenSm,
        "live-dot": shadows.liveDot,
        // Legacy (apuntan a glow verde)
        gold: shadows.gold,
        "gold-sm": shadows.goldSm,
        yellow: shadows.yellow,
        "yellow-sm": shadows.yellowSm,
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "text-reveal": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 8px 0px rgba(0,214,79,0.40)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(0,214,79,0.75)" },
        },
        "live-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.15)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "text-reveal": "text-reveal 0.7s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "live-pulse": "live-pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
