"use client";

import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";

// ── Data ──────────────────────────────────────────────────────────────────────
interface PartnerItem {
  label: string;
  badge?: string;
  accent?: boolean; // verde (partner principal)
}

const PARTNERS: PartnerItem[] = [
  { label: "Pancake",           badge: "Partner oficial", accent: true },
  { label: "Meta",              badge: "Conversion API"               },
  { label: "TikTok",            badge: "Partner"                      },
  { label: "Google",            badge: "Partner"                      },
  { label: "Hotmart"                                                   },
  { label: "Dropi"                                                     },
  { label: "Hoko"                                                      },
  { label: "Gintracom"                                                 },
  { label: "WhatsApp Business", badge: "Business API"                 },
  { label: "Effi Commerce"                                             },
];

// Triple para buffer suficiente en el loop infinito
const LOOP = [...PARTNERS, ...PARTNERS, ...PARTNERS];

// px / ms — igual que el original
const AUTO_SPEED = 0.09;

// ── Component ─────────────────────────────────────────────────────────────────
export function Marcas() {
  const { ref: sectionRef, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.2,
    once: true,
  });

  const trackRef    = useRef<HTMLUListElement>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);

  const offsetRef          = useRef(0);
  const trackWidthRef      = useRef(0);
  const draggingRef        = useRef(false);
  const hoveringRef        = useRef(false);
  const dragStartXRef      = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastTimeRef        = useRef<number>(0);
  const rafRef             = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function measure() {
      if (!track) return;
      trackWidthRef.current = track.scrollWidth / 3;
    }
    measure();
    window.addEventListener("resize", measure);

    function tick(time: number) {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = Math.min(time - lastTimeRef.current, 64);
      lastTimeRef.current = time;

      if (!draggingRef.current && !hoveringRef.current && trackWidthRef.current > 0) {
        offsetRef.current -= AUTO_SPEED * dt;
      }

      if (trackWidthRef.current > 0) {
        while (offsetRef.current <= -trackWidthRef.current * 2) {
          offsetRef.current += trackWidthRef.current;
        }
        while (offsetRef.current >= 0) {
          offsetRef.current -= trackWidthRef.current;
        }
      }

      if (track) {
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", measure);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current + dx;
  }

  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    lastTimeRef.current = 0;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="marcas-title"
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden"
    >
      {/* Glow ambient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(22,163,74,0.06), transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Eyebrow — único título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-r from-transparent to-brand-green/60"
            />
            <h2
              id="marcas-title"
              className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-brand-green/80 font-sans"
            >
              Integrado con las plataformas que ya usas
            </h2>
            <span
              aria-hidden="true"
              className="h-px w-8 bg-gradient-to-l from-transparent to-brand-green/60"
            />
          </div>
        </motion.div>

        {/* Marquee infinito + draggable */}
        <div className="relative">
          {/* Fades laterales */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-24 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-neutral-50 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-24 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-neutral-50 to-transparent"
          />

          <div
            ref={wrapperRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onMouseEnter={() => { hoveringRef.current = true; }}
            onMouseLeave={() => { hoveringRef.current = false; lastTimeRef.current = 0; }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white py-10 sm:py-12 cursor-grab active:cursor-grabbing select-none touch-pan-x"
          >
            <ul
              ref={trackRef}
              className="flex items-center gap-12 sm:gap-20 whitespace-nowrap will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {LOOP.map((p, i) => (
                <li
                  key={`${p.label}-${i}`}
                  className="flex items-center justify-center shrink-0"
                  aria-hidden={i >= PARTNERS.length ? "true" : undefined}
                >
                  <div
                    className="group/brand inline-flex flex-col items-center gap-1.5 transition-transform duration-300 ease-out hover:scale-[1.1]"
                    title={p.label}
                  >
                    {/* Nombre de plataforma */}
                    <span className="font-sans font-semibold text-lg sm:text-xl lg:text-2xl leading-none text-neutral-300 group-hover/brand:text-neutral-800 transition-colors duration-300">
                      {p.label}
                    </span>

                    {/* Badge pill — visible solo en hover cuando no hay acento */}
                    {p.badge && (
                      <span
                        className={[
                          "text-[9px] sm:text-[10px] font-sans font-semibold uppercase tracking-wider",
                          "px-2 py-0.5 rounded-full border transition-all duration-300",
                          p.accent
                            ? [
                                "text-brand-green border-brand-green/30 bg-brand-green/5",
                                "group-hover/brand:border-brand-green/60 group-hover/brand:bg-brand-green/10",
                              ].join(" ")
                            : [
                                "text-neutral-300 border-neutral-200",
                                "group-hover/brand:text-neutral-500 group-hover/brand:border-neutral-300",
                              ].join(" "),
                        ].join(" ")}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-[11px] sm:text-xs text-neutral-400 font-sans tracking-wide">
          Ecosistema LiveCake · Partners tecnológicos y plataformas integradas
        </p>
      </div>
    </section>
  );
}
