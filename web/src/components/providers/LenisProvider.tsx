"use client";

import { useEffect } from "react";
import Lenis from "lenis";

interface LenisProviderProps {
  children: React.ReactNode;
}

/**
 * Smooth scroll global con Lenis.
 *
 * - Solo se activa en desktop (>= 768px). En mobile usamos scroll nativo
 *   por performance y para no romper inputs nativos (pull-to-refresh, etc.).
 * - Respeta `prefers-reduced-motion`.
 * - NO sincroniza manualmente con Framer Motion: `useScroll()` ya escucha
 *   el scroll del documento, que Lenis actualiza nativamente. Disparar un
 *   evento `scroll` sintético en cada frame causaba jitter al competir con
 *   la interpolación de Lenis.
 * - Se pausa cuando Radix (Dialog, etc.) bloquea el scroll del body con
 *   `overflow: hidden` para evitar conflictos.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const observer = new MutationObserver(() => {
      const overflow = document.body.style.overflow;
      if (overflow === "hidden") {
        lenis.stop();
      } else {
        lenis.start();
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
