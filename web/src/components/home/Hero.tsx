"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useAudit } from "@/components/lead-audit/AuditContext";
import { ParticlesBg } from "@/components/home/ParticlesBg";
import { ApplicationCard } from "@/components/marketing/ApplicationCard";
import { trackOfferApply } from "@/lib/tracking/events";
import { useOfferCountdown } from "@/hooks/use-offer-countdown";
import { OPEN_SLOTS } from "@/lib/offer-config";

// ── Constants ─────────────────────────────────────────────────────────────────
const WA_LINK =
  "https://wa.me/573132947776?text=Hola%2C%20quiero%20mi%20live%20ahora%20%E2%80%94%20LiveCake";

const STAGGER_DELAY = 0.12;

const LIVE_COMMENTS = [
  "¿Cómo lo compro? 🔥",
  "Ya lo pedí, ¡gracias!",
  "¿Tienen envío a Cali?",
  "Llevo 3 pedidos este mes 💯",
  "¿Cuánto vale?",
  "Llegó rápido, excelente",
  "¿Es para hombre o mujer?",
  "El mejor que he visto",
] as const;

const AVATAR_COLORS = [
  "#16A34A", "#00d64f", "#15803D", "#22C55E",
  "#059669", "#10b981", "#047857", "#065f46",
] as const;

const AVATAR_INITIALS = ["M", "P", "C", "J", "D", "A", "S", "F"] as const;

const TICKER_ITEMS = [
  { accent: "30%",              text: "conversión live shopping (McKinsey)" },
  { accent: "Listo en 10 días", text: ""                                    },
  { accent: "Sin comisión",     text: "sobre ventas"                        },
  { accent: "Pancake",          text: "partner oficial Meta + TikTok + Google" },
  { accent: "Chatbot WhatsApp", text: "incluido"                            },
  { accent: "Falso live 24/7",  text: ""                                    },
  { accent: "−40%",             text: "devoluciones vs ecommerce tradicional" },
  { accent: "10 min",           text: "retención promedio"                  },
] as const;

// ── Motion variants ───────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  visible: () => ({ opacity: 1, transition: { duration: 0.3 } }),
};

// ── Types ─────────────────────────────────────────────────────────────────────
interface LiveComment {
  id: number;
  text: string;
  color: string;
  initial: string;
}

// ── Component ─────────────────────────────────────────────────────────────────
export function Hero() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { openAudit } = useAudit();
  const countdown = useOfferCountdown();

  // Live module state
  const [viewerCount, setViewerCount]     = useState(1024);
  const [liveComments, setLiveComments]   = useState<LiveComment[]>([]);
  const commentKeyRef                      = useRef(0);
  const commentIndexRef                    = useRef(0);

  // Counter animation state
  const [count3,  setCount3]  = useState(0);
  const [count30, setCount30] = useState(0);
  const headlineRef    = useRef<HTMLHeadingElement>(null);
  const counterStarted = useRef(false);

  const handleApply = (source: string) => {
    trackOfferApply(source, { hoursLeft: countdown.hoursLeft, slotsLeft: OPEN_SLOTS });
    openAudit(source);
  };

  useEffect(() => setMounted(true), []);

  // Counter: fire on IntersectionObserver, skip animation for reduced motion
  useEffect(() => {
    if (!mounted) return;

    if (shouldReduceMotion) {
      setCount3(3);
      setCount30(30);
      return;
    }

    const el = headlineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || counterStarted.current) return;
        counterStarted.current = true;
        observer.disconnect();

        const start  = performance.now();
        const dur3   = 1000;
        const dur30  = 1600;
        const ease   = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = (now: number) => {
          const elapsed = now - start;
          const p3  = Math.min(elapsed / dur3,  1);
          const p30 = Math.min(elapsed / dur30, 1);
          setCount3(Math.round(3   * ease(p3)));
          setCount30(Math.round(30 * ease(p30)));
          if (p30 < 1) requestAnimationFrame(tick);
          else { setCount3(3); setCount30(30); }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted, shouldReduceMotion]);

  // Viewer count: fluctuate between 847 and 1,203 every 4 s
  useEffect(() => {
    if (!mounted) return;
    const id = setInterval(
      () => setViewerCount(Math.floor(Math.random() * (1203 - 847 + 1)) + 847),
      4000,
    );
    return () => clearInterval(id);
  }, [mounted]);

  // Live comments: add one every 2.5 s, keep max 3 visible
  useEffect(() => {
    if (!mounted) return;

    const add = () => {
      const idx   = commentIndexRef.current % LIVE_COMMENTS.length;
      const cIdx  = commentIndexRef.current % AVATAR_COLORS.length;
      commentIndexRef.current++;

      const next: LiveComment = {
        id:      commentKeyRef.current++,
        text:    LIVE_COMMENTS[idx],
        color:   AVATAR_COLORS[cIdx],
        initial: AVATAR_INITIALS[cIdx],
      };

      setLiveComments(prev => [...prev, next].slice(-3));
    };

    const t  = setTimeout(add, 600);
    const iv = setInterval(add, 2500);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, [mounted]);

  const variants = shouldReduceMotion ? fadeUpReduced : fadeUp;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero — Live Cake"
      className="relative min-h-[90vh] lg:min-h-[820px] flex flex-col justify-center overflow-hidden bg-white pt-16 pb-10"
    >
      {/* Imagen editorial de fondo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/brand/home/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <ParticlesBg />

      {/* Grid SVG pattern con radial mask */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,214,79,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,214,79,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Radial glow central */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,214,79,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        {mounted && (
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── LEFT: Copy ──────────────────────────────────────────── */}
            <div className="flex flex-col gap-6">

              <motion.div custom={0} variants={variants} initial="hidden" animate="visible">
                <ApplicationCard source="hero_home_apply" />
              </motion.div>

              {/* Headline con counter animation */}
              <motion.h1
                ref={headlineRef}
                custom={1}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="font-display leading-none"
              >
                <span className="block text-brand-black text-[clamp(1.4rem,3.2vw,3rem)] leading-[1.15] font-bold">
                  Las landing pages convierten al{" "}
                  <span aria-label="3 por ciento">{count3}%</span>.
                </span>
                <span
                  className="block text-[clamp(2rem,5vw,5.2rem)] leading-[0.95] mt-2 font-black"
                  style={{
                    background:
                      "linear-gradient(90deg, #00d64f 0%, #00a83d 50%, #00d64f 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Los lives convierten al{" "}
                  <span aria-label="30 por ciento">{count30}%</span>.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                custom={2}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="text-brand-graphite text-base sm:text-lg leading-relaxed"
              >
                Nosotros te montamos el live — y lo dejamos corriendo solo, 24/7.
              </motion.p>

              {/* Descriptor */}
              <motion.p
                custom={2.4}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="text-brand-gray text-sm sm:text-base -mt-3"
              >
                Sin que estés presente. Sin comisión sobre tus ventas. Listo en 10 días.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto text-sm sm:text-base font-bold tracking-wide min-h-[52px] shadow-[0_0_28px_rgba(0,214,79,0.35)] hover:shadow-[0_0_40px_rgba(0,214,79,0.55)] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label="Quiero mi live ahora — abre WhatsApp"
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    💬 Quiero mi live ahora
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollTo("problema")}
                  className="w-full sm:w-auto text-sm sm:text-base min-h-[52px] focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Ver cómo funciona ↓
                </Button>
              </motion.div>

              {/* Trust bar */}
              <motion.p
                custom={4}
                variants={variants}
                initial="hidden"
                animate="visible"
                className="text-xs text-brand-gray tracking-wide flex flex-wrap gap-x-2 gap-y-1 items-center"
              >
                <span>Pancake — Partner oficial Meta + TikTok + Google</span>
                <span className="text-brand-green font-bold" aria-hidden>·</span>
                <span>Mercado LATAM crece 27% anual</span>
                <span className="text-brand-green font-bold" aria-hidden>·</span>
                <span>Listo en 10 días</span>
              </motion.p>

            </div>

            {/* ── RIGHT: Módulo falso live ─────────────────────────────── */}
            <motion.div
              custom={2}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:justify-self-end"
            >
              {/* Glow detrás de la card */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-3xl blur-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(0,214,79,0.28) 0%, transparent 70%)",
                }}
              />

              <div
                className="rounded-2xl overflow-hidden border border-brand-green/20"
                style={{
                  boxShadow:
                    "0 24px 72px rgba(0,0,0,0.13), 0 0 0 1px rgba(22,163,74,0.07)",
                }}
              >
                {/* ── Stream viewport ── */}
                <div className="relative overflow-hidden" style={{ height: 280 }}>

                  {/* Fondo oscuro */}
                  <div className="absolute inset-0 bg-brand-black" />

                  {/* Ambient glow verde */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 35% 45%, rgba(0,214,79,0.1) 0%, transparent 55%)",
                    }}
                  />

                  {/* Scan lines */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.14) 2px, rgba(0,0,0,0.14) 4px)",
                    }}
                  />

                  {/* Silueta abstracta de presenter */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full opacity-[0.18]"
                    style={{
                      width: 88,
                      height: 160,
                      background:
                        "linear-gradient(180deg, rgba(0,214,79,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                    }}
                  />
                  <div
                    className="absolute rounded-full opacity-[0.18]"
                    style={{
                      width: 42,
                      height: 42,
                      bottom: 140,
                      left: "calc(50% - 21px)",
                      background: "rgba(0,214,79,0.3)",
                    }}
                  />

                  {/* Vignette inferior */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 25%, transparent 45%, rgba(0,0,0,0.72) 78%, rgba(0,0,0,0.97) 100%)",
                    }}
                  />

                  {/* EN VIVO badge */}
                  <div
                    className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                    style={{ background: "#FF0033" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white animate-live-pulse"
                      aria-hidden
                    />
                    <span className="text-white font-sans text-[11px] font-bold tracking-[0.14em]">
                      EN VIVO
                    </span>
                  </div>

                  {/* Contador de espectadores */}
                  <div
                    className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(0,0,0,0.68)" }}
                  >
                    <span className="text-[11px]" aria-hidden>👁</span>
                    <span className="text-white font-sans text-xs font-bold tabular-nums">
                      {viewerCount.toLocaleString("es-CO")}
                    </span>
                  </div>

                  {/* Feed de comentarios */}
                  <div
                    className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-1.5 max-h-32 overflow-hidden"
                    aria-live="polite"
                    aria-label="Comentarios del live"
                  >
                    {liveComments.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-start gap-1.5 px-2.5 py-1.5 rounded-lg animate-slide-up"
                        style={{
                          background: "rgba(0,0,0,0.78)",
                          borderLeft: "2px solid rgba(22,163,74,0.5)",
                        }}
                      >
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full font-sans text-white text-[10px] font-bold flex items-center justify-center"
                          style={{ background: c.color }}
                          aria-hidden
                        >
                          {c.initial}
                        </span>
                        <span className="font-sans text-[11px] text-white/80 leading-tight">
                          {c.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Platform chips ── */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white border-t border-brand-green/10 flex-wrap">
                  {(["📘 Meta", "🎵 TikTok", "💬 WhatsApp Bot"] as const).map(
                    (label) => (
                      <span
                        key={label}
                        className="inline-flex items-center px-2 py-0.5 rounded-full font-sans text-[10px] text-brand-graphite border border-brand-green/20 bg-brand-green/5"
                      >
                        {label}
                      </span>
                    ),
                  )}
                  <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full font-sans text-[10px] font-semibold text-brand-green border border-brand-green/25 bg-brand-green/5">
                    🥞 Pancake
                  </span>
                </div>

                {/* ── Barra de producto ── */}
                <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-brand-green/10 gap-3">
                  <div>
                    <p className="font-sans text-[11px] text-brand-gray">
                      Producto en live
                    </p>
                    <p className="font-display font-bold text-brand-black text-lg">
                      $89.900 COP
                    </p>
                  </div>
                  <button
                    type="button"
                    tabIndex={-1}
                    aria-label="Ejemplo de botón de compra en live"
                    className="px-4 py-2 rounded-lg bg-brand-green text-white font-sans text-xs font-bold tracking-wide animate-glow-pulse hover:bg-brand-green-dark transition-colors"
                  >
                    ¡Lo quiero! →
                  </button>
                </div>

                {/* ── Nota de pie ── */}
                <div className="px-4 py-2 border-t border-brand-green/10 bg-brand-green/5">
                  <p className="font-sans text-[10px] text-brand-green/70 text-center">
                    Transmisión 24/7 · Automatizado con IA · Sin presencia del vendedor
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </div>

      {/* ── Ticker horizontal ────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden border-t border-brand-green/10 bg-white/90 backdrop-blur-sm flex items-center z-10"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 border-r border-brand-green/10"
            >
              <span className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0" />
              <span className="font-sans text-xs font-bold text-brand-green">
                {item.accent}
              </span>
              {item.text && (
                <span className="font-sans text-xs text-brand-graphite">
                  {item.text}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Fade degradado sobre el ticker */}
      <div
        aria-hidden
        className="absolute bottom-10 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))",
        }}
      />
    </section>
  );
}
