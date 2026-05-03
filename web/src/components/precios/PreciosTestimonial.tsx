"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useIntersection } from "@/hooks/use-intersection";
import { Quote, Volume2, VolumeX, BadgeCheck } from "lucide-react";

export function PreciosTestimonial() {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold: 0.2,
    once: true,
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section
      ref={ref}
      id="testimonio-pricing"
      aria-labelledby="testimonio-pricing-title"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden"
    >
      {/* Imagen editorial de fondo */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image
          src="/brand/precios/testimonial.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-18"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-neutral-50/70 to-neutral-50" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(22,163,74,0.06), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-5 bg-brand-green/15 text-brand-green border border-brand-green/40">
            Validado por referentes
          </span>
          <h2
            id="testimonio-pricing-title"
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] text-neutral-900 tracking-tight uppercase"
          >
            Lo que dice{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #16a34a, #15803d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Michel Edery
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-xl mx-auto">
            CEO de smartBeemo, la plataforma de e-commerce mas grande de LATAM
            con +60K estudiantes y +$18M invertidos en pauta digital.
          </p>
        </motion.div>

        {/* Testimonial card premium */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 32 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center rounded-3xl overflow-hidden"
        >
          {/* Background premium — light */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #f9fafb 0%, #f0fdf4 40%, #f7fef9 100%)",
            }}
          />
          {/* Gradient border verde */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              padding: "1.5px",
              background:
                "linear-gradient(135deg, rgba(22,163,74,0.7) 0%, rgba(22,163,74,0.4) 30%, rgba(22,163,74,0.15) 60%, transparent 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          {/* Glow corner */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 100% 0%, rgba(22,163,74,0.08), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 0% 100%, rgba(22,163,74,0.05), transparent 65%)",
            }}
          />

          {/* Video vertical */}
          <div className="relative lg:col-span-2 p-6 sm:p-8 lg:p-10 lg:pr-0">
            <div className="mx-auto w-full max-w-[280px] lg:max-w-none">
              <div
                className="relative rounded-2xl overflow-hidden border-2 border-brand-green/40 shadow-[0_0_60px_-15px_rgba(22,163,74,0.4)]"
                style={{ aspectRatio: "9 / 16" }}
              >
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/testimonios/testimonio-3.mp4"
                  poster="/videos/testimonios/testimonio-3.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Testimonio de Michel Edery, CEO de smartBeemo"
                />
                {/* Gradient overlay sobre video — conservar */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 55%, rgba(0,0,0,0.85) 100%)",
                  }}
                />
                {/* Mute toggle — sobre video, conservar bg-black */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "Activar sonido" : "Silenciar"}
                  aria-pressed={!muted}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-green/20 hover:border-brand-green/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                >
                  {muted ? (
                    <VolumeX className="h-4 w-4" aria-hidden />
                  ) : (
                    <Volume2 className="h-4 w-4" aria-hidden />
                  )}
                </button>
                {/* Name bottom — sobre video, conservar text-white */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-sm font-bold drop-shadow-lg">
                      Michel Edery
                    </p>
                    <BadgeCheck
                      className="h-4 w-4 text-brand-green drop-shadow-lg"
                      aria-label="Verificado"
                    />
                  </div>
                  <p className="text-[11px] text-white/80 drop-shadow-lg">
                    CEO · smartBeemo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote + credenciales */}
          <div className="relative lg:col-span-3 p-6 sm:p-8 lg:p-10 lg:pl-0">
            {/* Quote icon */}
            <Quote
              className="h-12 w-12 text-brand-green/20 mb-4"
              aria-hidden
            />

            {/* Cita principal */}
            <p className="font-display text-xl sm:text-2xl lg:text-[1.75rem] xl:text-3xl text-neutral-900 leading-snug italic mb-8">
              &ldquo;Con mas de 18 millones de dolares invertidos en pauta,{" "}
              <span
                className="not-italic"
                style={{
                  background:
                    "linear-gradient(90deg, #16a34a 0%, #15803d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                garantizamos el trabajo de Live Cake.
              </span>{" "}
              Son muy rapidos, super creativos y su live shopping esta
              completamente enfocado hacia la venta.&rdquo;
            </p>

            {/* Autor con credenciales */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-brand-green/15">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-green/50 shadow-[0_0_24px_rgba(22,163,74,0.4)] flex-shrink-0">
                <Image
                  src="/brand/precios/michel-edery.png"
                  alt="Michel Edery"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-base font-bold text-neutral-900">
                    Michel Edery
                  </p>
                  <BadgeCheck
                    className="h-4 w-4 text-brand-green"
                    aria-hidden
                  />
                </div>
                <p className="text-sm text-neutral-500">
                  CEO & Co-Founder · smartBeemo
                </p>
                <p className="text-xs text-brand-green/60 mt-0.5">
                  CommerceTech LATAM · +60K estudiantes · +$18M en pauta
                </p>
              </div>
            </div>

            {/* Credenciales en grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "+$18M", label: "Invertidos en pauta" },
                { value: "+60K", label: "Estudiantes LATAM" },
                { value: "#1", label: "CommerceTech LATAM" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-brand-green/25 bg-brand-green/[0.03] p-3 sm:p-4 text-center"
                >
                  <p
                    className="font-display text-xl sm:text-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 tracking-wide">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
