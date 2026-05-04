"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate as motionAnimate,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

// ─── Easings (cubic bezier) ─────────────────────────────────────────────────
// `EASE_OUT_QUAD` es más natural y menos dramático que el ease-out-expo
// anterior; reduce el "snap" final que se percibía como jitter al hacer scroll.
const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const;
const EASE_OUT_QUART = [0.22, 1, 0.36, 1] as const;

// ─── Tipos comunes ──────────────────────────────────────────────────────────
type Direction = "left" | "right" | "up" | "down";
type AsTag = "div" | "section" | "span" | "article" | "header" | "footer" | "li" | "ul";

interface BaseProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: AsTag;
}

// ─── FadeUp ─────────────────────────────────────────────────────────────────
interface FadeUpProps extends BaseProps {
  distance?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  distance = 20,
  as = "div",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: distance }}
      animate={
        inView
          ? reduce
            ? { opacity: 1 }
            : { opacity: 1, y: 0 }
          : undefined
      }
      transition={{ duration, delay, ease: EASE_OUT_QUAD }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ─── FadeIn ─────────────────────────────────────────────────────────────────
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  as = "div",
}: BaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : undefined}
      transition={{ duration, delay, ease: EASE_OUT_QUAD }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ─── SlideIn ────────────────────────────────────────────────────────────────
interface SlideInProps extends BaseProps {
  direction?: Direction;
  distance?: number;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.5,
  once = true,
  className,
  distance = 30,
  as = "div",
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();

  const offsetMap = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
  } as const;
  const offset = offsetMap[direction];

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, ...offset }}
      animate={
        inView
          ? reduce
            ? { opacity: 1 }
            : { opacity: 1, x: 0, y: 0 }
          : undefined
      }
      transition={{ duration, delay, ease: EASE_OUT_QUAD }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ─── StaggerChildren ────────────────────────────────────────────────────────
interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  once?: boolean;
  distance?: number;
  as?: AsTag;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.07,
  initialDelay = 0,
  className,
  once = true,
  distance = 20,
  as = "div",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: distance },
    visible: reduce
      ? { opacity: 1, transition: { duration: 0.3 } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_OUT_QUAD },
        },
  };

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {Children.map(children, (child, idx) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div key={idx} variants={itemVariants} className="contents">
            {child}
          </motion.div>
        );
      })}
    </Component>
  );
}

// ─── CountUp ────────────────────────────────────────────────────────────────
interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  once?: boolean;
}

export function CountUp({
  from = 0,
  to,
  duration = 1.5,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  once = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<string>(() =>
    decimals > 0 ? from.toFixed(decimals) : String(Math.round(from))
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(decimals > 0 ? to.toFixed(decimals) : String(Math.round(to)));
      return;
    }
    const controls = motionAnimate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(
          decimals > 0 ? latest.toFixed(decimals) : String(Math.round(latest))
        );
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, decimals, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// ─── ParallaxSection ────────────────────────────────────────────────────────
interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  /** Si true, deshabilita en mobile (recomendado para performance) */
  desktopOnly?: boolean;
}

export function ParallaxSection({
  children,
  speed = 0.3,
  className,
  desktopOnly = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (!desktopOnly) return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [desktopOnly]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  if (reduce || !enabled) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

// ─── RevealText ─────────────────────────────────────────────────────────────
interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function RevealText({
  children,
  className,
  delay = 0,
  wordDelay = 0.05,
  as = "span",
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();

  if (typeof children !== "string") {
    // RevealText solo soporta strings — si no, render plano.
    return <span ref={ref} className={className}>{children as ReactNode}</span>;
  }

  const words = children.split(" ");

  const Wrapper = motion[as] as typeof motion.span;

  if (reduce) {
    return (
      <Wrapper
        ref={ref as never}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.4, delay }}
        className={className}
      >
        {children}
      </Wrapper>
    );
  }

  return (
    <Wrapper ref={ref as never} className={className} aria-label={children}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: "0.4em" }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.5,
            delay: delay + i * wordDelay,
            ease: EASE_OUT_QUART,
          }}
          aria-hidden
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Wrapper>
  );
}

// ─── ScaleOnScroll ──────────────────────────────────────────────────────────
interface ScaleOnScrollProps {
  children: ReactNode;
  scaleFrom?: number;
  scaleTo?: number;
  className?: string;
  once?: boolean;
}

export function ScaleOnScroll({
  children,
  scaleFrom = 0.95,
  scaleTo = 1,
  className,
  once = true,
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: scaleFrom }}
      animate={
        inView
          ? reduce
            ? { opacity: 1 }
            : { opacity: 1, scale: scaleTo }
          : undefined
      }
      transition={{ duration: 0.55, ease: EASE_OUT_QUAD }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StickyScroll ───────────────────────────────────────────────────────────
interface StickyScrollProps {
  panels: ReactNode[];
  className?: string;
  /** Altura total de scroll para recorrer todos los paneles (en vh por panel) */
  vhPerPanel?: number;
}

export function StickyScroll({
  panels,
  className,
  vhPerPanel = 80,
}: StickyScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Fallback mobile: paneles apilados con FadeUp simple.
  if (!enabled || reduce) {
    return (
      <div className={cn("flex flex-col gap-12", className)}>
        {panels.map((panel, i) => (
          <FadeUp key={i} delay={i * 0.05}>
            {panel}
          </FadeUp>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ height: `${vhPerPanel * panels.length}vh` }}
    >
      <div className="sticky top-[15vh] h-[70vh] flex items-center">
        <div className="relative w-full">
          {panels.map((panel, i) => (
            <StickyPanel
              key={i}
              index={i}
              total={panels.length}
              progress={scrollYProgress}
            >
              {panel}
            </StickyPanel>
          ))}
        </div>
      </div>
    </div>
  );
}

function StickyPanel({
  children,
  index,
  total,
  progress,
}: {
  children: ReactNode;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const peak = (index + 0.5) / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, peak, end],
    [index === 0 ? 1 : 0, 1, index === total - 1 ? 1 : 0]
  );
  const scale = useTransform(
    progress,
    [start, peak, end],
    [0.9, 1, 0.9]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 will-change-transform"
    >
      {children}
    </motion.div>
  );
}

// ─── MagneticButton wrapper ─────────────────────────────────────────────────
interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Distancia de activación en px */
  range?: number;
  /** Intensidad del desplazamiento en px */
  strength?: number;
}

export function Magnetic({
  children,
  className,
  range = 60,
  strength = 8,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduce || !enabled) {
    return <div className={className}>{children}</div>;
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const distance = Math.hypot(dx, dy);
    if (distance > range) {
      x.set(0);
      y.set(0);
      return;
    }
    const ratio = 1 - distance / range;
    x.set((dx / range) * strength * ratio * 1.6);
    y.set((dy / range) * strength * ratio * 1.6);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
