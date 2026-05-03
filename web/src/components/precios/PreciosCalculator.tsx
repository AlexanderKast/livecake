"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PLAN_PRICES } from "@/lib/pricing/currency-config";

type PlanSlug = "starter" | "growth" | "pro" | "elite";

const PLANS: { slug: PlanSlug; label: string; lives: number }[] = [
  { slug: "starter", label: "Starter · 2 lives/mes", lives: 2 },
  { slug: "growth", label: "Growth · 8 lives/mes", lives: 8 },
  { slug: "pro", label: "Pro · 16 lives/mes", lives: 16 },
  { slug: "elite", label: "Elite · 31 lives/mes", lives: 31 },
];

function useCountUp(target: number, duration = 600) {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const from = current;
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(from + (target - from) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return current;
}

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

export function PreciosCalculator() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });

  const [ticket, setTicket] = useState(50);
  const [visitors, setVisitors] = useState(5000);
  const [planSlug, setPlanSlug] = useState<PlanSlug>("growth");

  const {
    currentSales,
    livecakeSales,
    increment,
    monthly,
    setup,
    daysToBreakEven,
    roi12,
  } = useMemo(() => {
    const currentSales = Math.round(visitors * 0.03 * ticket);
    const livecakeSales = Math.round(visitors * 0.20 * ticket);
    const increment = Math.max(0, livecakeSales - currentSales);
    const monthly = PLAN_PRICES[planSlug].USD.amount;
    const setup = PLAN_PRICES[planSlug].USD.setupAmount;
    const dailyIncrement = increment / 30;
    const daysToBreakEven =
      dailyIncrement > 0 ? Math.round(setup / dailyIncrement) : 0;
    const roi12 = increment * 12 - monthly * 12 - setup;
    return { currentSales, livecakeSales, increment, monthly, setup, daysToBreakEven, roi12 };
  }, [ticket, visitors, planSlug]);

  const animatedIncrement = useCountUp(increment);
  const animatedRoi = useCountUp(Math.max(0, roi12));
  const animatedDays = useCountUp(daysToBreakEven, 800);

  const checkoutHref = `/checkout/${planSlug}`;

  return (
    <section
      id="calculadora"
      aria-labelledby="calculadora-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <style>{`
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #16a34a, #15803d);
          cursor: pointer; border: 3px solid #fff;
          box-shadow: 0 0 14px rgba(22,163,74,0.5);
          transition: box-shadow 0.2s;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 22px rgba(22,163,74,0.7);
        }
        .roi-slider::-moz-range-thumb {
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, #16a34a, #15803d);
          cursor: pointer; border: 3px solid #fff;
          box-shadow: 0 0 14px rgba(22,163,74,0.5);
        }
      `}</style>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(22,163,74,0.05), transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            Calculadora de ROI
          </span>
          <h2
            id="calculadora-title"
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-neutral-900 tracking-tight uppercase"
          >
            Calcula cuándo recuperas{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #15803d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              la inversión
            </span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-500 leading-relaxed">
            Ingresa los datos de tu negocio y ve en cuántos días el sistema se
            paga solo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "1.5px",
              background:
                "linear-gradient(135deg, rgba(22,163,74,0.4) 0%, rgba(22,163,74,0.15) 50%, transparent 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Izquierda: inputs */}
            <div className="flex flex-col gap-7">
              {/* Ticket promedio */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="ticket-slider"
                    className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-green/70"
                  >
                    Ticket promedio (USD)
                  </label>
                  <span className="font-display text-2xl text-neutral-900 leading-none">
                    ${ticket}
                  </span>
                </div>
                <input
                  id="ticket-slider"
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={ticket}
                  onChange={(e) => setTicket(parseInt(e.target.value, 10))}
                  className="roi-slider w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, #16a34a 0%, #15803d ${((ticket - 10) / 490) * 100}%, rgba(212,212,212,0.8) ${((ticket - 10) / 490) * 100}%, rgba(212,212,212,0.8) 100%)`,
                  }}
                />
                <div className="flex justify-between mt-1.5 text-[10px] text-neutral-400">
                  <span>$10</span>
                  <span>$500</span>
                </div>
              </div>

              {/* Visitantes mensuales */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="visitors-slider"
                    className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-green/70"
                  >
                    Visitantes/mes a tu landing
                  </label>
                  <span className="font-display text-2xl text-neutral-900 leading-none">
                    {visitors.toLocaleString()}
                  </span>
                </div>
                <input
                  id="visitors-slider"
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={visitors}
                  onChange={(e) => setVisitors(parseInt(e.target.value, 10))}
                  className="roi-slider w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, #16a34a 0%, #15803d ${((visitors - 500) / 49500) * 100}%, rgba(212,212,212,0.8) ${((visitors - 500) / 49500) * 100}%, rgba(212,212,212,0.8) 100%)`,
                  }}
                />
                <div className="flex justify-between mt-1.5 text-[10px] text-neutral-400">
                  <span>500</span>
                  <span>50,000</span>
                </div>
              </div>

              {/* Selector de plan */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-green/70 mb-3">
                  Plan que te interesa
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {PLANS.map((p) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setPlanSlug(p.slug)}
                      className={cn(
                        "px-3 py-2.5 rounded-lg border text-left transition-all",
                        planSlug === p.slug
                          ? "border-brand-green bg-brand-green/8 shadow-[0_0_16px_-6px_rgba(22,163,74,0.4)]"
                          : "border-neutral-200 hover:border-brand-green/40 bg-neutral-50",
                      )}
                    >
                      <p
                        className={cn(
                          "text-[11px] font-bold uppercase tracking-wider",
                          planSlug === p.slug
                            ? "text-brand-green"
                            : "text-neutral-700",
                        )}
                      >
                        {p.slug.charAt(0).toUpperCase() + p.slug.slice(1)}
                      </p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">
                        {p.lives} lives/mes
                      </p>
                      <p
                        className={cn(
                          "text-[11px] font-semibold mt-1",
                          planSlug === p.slug
                            ? "text-brand-green"
                            : "text-neutral-600",
                        )}
                      >
                        ${PLAN_PRICES[p.slug].USD.amount}/mes
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contexto: ventas actuales vs live */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-1">
                    Ventas actuales est.
                  </p>
                  <p className="font-display text-xl text-neutral-400 line-through decoration-neutral-300">
                    {fmt(currentSales)}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-0.5">
                    3% conversión landing
                  </p>
                </div>
                <div className="rounded-xl border-2 border-brand-green/40 bg-brand-green/5 p-3.5 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-green/70 mb-1">
                    Ventas con LiveCake est.
                  </p>
                  <p className="font-display text-xl text-neutral-900">
                    {fmt(livecakeSales)}
                  </p>
                  <p className="text-[10px] text-brand-green/60 mt-0.5">
                    20% conversión live
                  </p>
                </div>
              </div>
            </div>

            {/* Derecha: resultados */}
            <div className="flex flex-col gap-4">
              {/* Incremento mensual */}
              <div className="rounded-2xl border-2 border-brand-green bg-brand-green/5 p-6 text-center shadow-[0_0_40px_-20px_rgba(22,163,74,0.4)]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-brand-green" aria-hidden />
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-green">
                    Incremento mensual estimado
                  </p>
                </div>
                <p className="font-display text-4xl sm:text-5xl text-brand-green leading-none">
                  +{fmt(animatedIncrement)}
                </p>
                <p className="text-[11px] text-neutral-500 mt-2">
                  USD/mes adicionales vs tus ventas actuales
                </p>
              </div>

              {/* Setup y plan */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 mb-3">
                  Inversión del plan {planSlug.charAt(0).toUpperCase() + planSlug.slice(1)}
                </p>
                <div className="flex flex-col gap-1.5 text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Setup único</span>
                    <span className="font-semibold text-neutral-900">${setup.toLocaleString()} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mensualidad</span>
                    <span className="font-semibold text-neutral-900">${monthly.toLocaleString()} USD/mes</span>
                  </div>
                </div>
              </div>

              {/* Días para recuperar */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Días para recuperar setup
                  </p>
                  <p
                    className="font-display text-3xl leading-none"
                    style={{
                      background: "linear-gradient(135deg, #16a34a, #15803d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {animatedDays > 0 ? animatedDays : "—"}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-1">días</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    ROI neto a 12 meses
                  </p>
                  <p
                    className="font-display text-3xl leading-none"
                    style={{
                      background: roi12 > 0
                        ? "linear-gradient(135deg, #16a34a, #15803d)"
                        : "none",
                      WebkitBackgroundClip: roi12 > 0 ? "text" : undefined,
                      WebkitTextFillColor: roi12 > 0 ? "transparent" : undefined,
                      backgroundClip: roi12 > 0 ? "text" : undefined,
                      color: roi12 <= 0 ? "#737373" : undefined,
                    }}
                  >
                    {roi12 > 0 ? `+${fmt(animatedRoi)}` : "—"}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-1">USD netos</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={checkoutHref}
                className={cn(
                  "group/cta flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-brand-green text-white font-sans font-bold text-base tracking-wide transition-all min-h-[52px]",
                  "hover:bg-brand-green-dark hover:shadow-[0_10px_40px_-10px_rgba(22,163,74,0.55)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                )}
              >
                Empezar con este plan
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover/cta:translate-x-1"
                  aria-hidden
                />
              </a>

              <p className="flex items-center justify-center gap-1.5 text-xs text-neutral-500">
                <Calculator className="h-3 w-3" aria-hidden />
                Sin comisión sobre las ventas generadas
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-[11px] text-neutral-400 leading-relaxed">
            * Estimado basado en conversión promedio de live shopping según McKinsey. Los resultados reales varían según producto, pauta y mercado. Este cálculo es orientativo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
