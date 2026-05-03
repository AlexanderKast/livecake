"use client";

import { motion } from "motion/react";
import { Check, Info, Plus } from "lucide-react";

interface PlanNote {
  plan: string;
  detail: string;
}

interface Addon {
  name: string;
  description: string;
  price: string;
}

interface ServiceItem {
  id: string;
  number: string;
  subtitle: string;
  name: string;
  description: string;
  includes: string[];
  planAvailability: string;
  planNotes?: PlanNote[];
  importantNote?: string;
  addons?: Addon[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "webcake",
    number: "01",
    subtitle: "WebCake",
    name: "Landing del falso live",
    description:
      "Tu live no corre en TikTok ni en Facebook — corre en tu propio dominio, bajo tu marca, sobre Pancake. Eso te da control total del tráfico, los datos y la experiencia de compra.",
    includes: [
      "Configuración completa de WebCake en tu dominio",
      "Certificado SSL y hosting de banda ancha incluido",
      "Landing optimizada para conversión con el live embebido",
      "Botón de compra configurable con timing estratégico",
      "100% responsive — mobile first",
      "Pixel de Meta, TikTok y Google Ads conectado",
    ],
    planAvailability: "Todos los planes",
  },
  {
    id: "livecake",
    number: "02",
    subtitle: "LiveCake",
    name: "Live 24/7 sobre Pancake",
    description:
      "Un video pregrabado que transmite continuamente como si fuera en vivo. El cliente vive la experiencia completa — movimiento, comentarios, urgencia — sin que estés presente. Esto es posible porque Pancake es partner oficial de las plataformas.",
    includes: [
      "Video subido a YouTube como oculto + conectado a LiveCake",
      "Duración calibrada según ticket: 8–12 min bajo ticket, 8–16 min medio, 30+ min high ticket",
      "Bucle infinito 24/7 sin intervención",
      "Múltiples variantes A/B según el plan contratado",
      "Optimización continua basada en métricas reales",
    ],
    planAvailability: "Todos los planes",
    planNotes: [
      { plan: "Starter", detail: "2 lives/mes" },
      { plan: "Growth", detail: "8 lives/mes" },
      { plan: "Pro", detail: "16 lives/mes" },
      { plan: "Elite", detail: "31 lives/mes" },
    ],
  },
  {
    id: "botcake",
    number: "03",
    subtitle: "Botcake",
    name: "Chatbot WhatsApp automático",
    description:
      "El cliente ve el live, hace clic en el botón de WhatsApp y el bot lo recibe, responde sus preguntas, captura sus datos y confirma el pedido. Todo automático. Sin que intervenga nadie de tu equipo.",
    includes: [
      "Configuración completa de Botcake en tu WhatsApp Business",
      "Flujos de bienvenida, FAQ del producto y captura de orden",
      "Confirmación automática del pedido",
      "Seguimiento postventa automatizado",
      "Script de respuestas basado en el briefing de tu negocio",
      "Test end-to-end antes de activación",
    ],
    planAvailability: "Todos los planes",
    planNotes: [
      { plan: "Starter", detail: "Flujo básico (FAQ + captura)" },
      {
        plan: "Growth en adelante",
        detail:
          "Flujo avanzado con calificación, seguimiento y recuperación de pedidos abandonados",
      },
    ],
  },
  {
    id: "comentarios",
    number: "04",
    subtitle: "Prueba social en tiempo real",
    name: "Sistema de comentarios simulados",
    description:
      "La prueba social en tiempo real es lo que convierte al espectador en comprador. Configuramos comentarios estratégicos que aparecen en momentos exactos del live — creando el efecto de un live con audiencia activa.",
    includes: [
      "Relleno: actividad de base (“Hola desde Medellín”)",
      "Testimoniales: confianza (“Ya lo compré, excelente”)",
      "Interés: impulso de compra (“¿Cómo lo pido?”)",
      "Preguntas frecuentes: resolución de objeciones",
      "Timing exacto por minuto configurado vía Google Sheets",
      "Fotos de perfil individuales por comentario",
      "Actualización mensual según métricas de engagement",
    ],
    planAvailability: "Todos los planes",
    planNotes: [
      { plan: "Starter", detail: "Hasta 30 comentarios" },
      { plan: "Elite", detail: "Ilimitados" },
    ],
  },
  {
    id: "postcake",
    number: "05",
    subtitle: "Postcake",
    name: "CRM y gestión de órdenes",
    description:
      "Todas las órdenes que genera el live centralizadas en un solo lugar. Nosotros configuramos y conectamos el sistema — tú y tu equipo gestionan el día a día operativo.",
    includes: [
      "Configuración completa de Postcake",
      "Pipeline de seguimiento de pedidos",
      "Conexión con Conversion API de Meta y TikTok",
      "Integración con tu plataforma de dropshipping o infoproductos",
      "Entrega del sistema funcionando — operación es del cliente",
    ],
    planAvailability: "Todos los planes",
    importantNote: "LiveCake configura. El cliente gestiona.",
  },
  {
    id: "integraciones",
    number: "06",
    subtitle: "Conexión nativa",
    name: "Integración con tu plataforma",
    description:
      "Conectamos LiveCake con la plataforma que ya usas para que el flujo de orden sea completamente automático — desde el live hasta el proveedor.",
    includes: [
      "Hotmart (infoproductos y cursos online)",
      "Dropi (dropshipping Colombia y LATAM)",
      "Hoco (dropshipping LATAM)",
      "Gintracom (Guatemala, Ecuador, República Dominicana)",
      "WhatsApp Business API",
    ],
    planAvailability: "Todos los planes",
    planNotes: [
      { plan: "Starter", detail: "1 integración incluida" },
      { plan: "Growth", detail: "2 integraciones incluidas" },
      { plan: "Pro y Elite", detail: "Integraciones ilimitadas" },
    ],
    importantNote: "Shopify: en fase de testeo — no disponible aún.",
  },
  {
    id: "videos-ads",
    number: "07",
    subtitle: "Tráfico al live",
    name: "Videos para ads del falso live",
    description:
      "Los videos que llevan tráfico al live. Grabados y editados usando el falso live como base, con variaciones de gancho distintas para testear qué ángulo convierte mejor con tu audiencia.",
    includes: [
      "Guion de cada variante de gancho",
      "Grabación y edición profesional",
      "Subtítulos y cortes rápidos para retención",
      "Formato 9:16 listo para Meta y TikTok",
      "Entrega en carpeta Drive compartida",
      "Ganchos: precio directo · urgencia de stock · beneficio principal · testimonio social · comparación · historia de transformación",
    ],
    planAvailability: "Todos los planes",
    planNotes: [
      { plan: "Starter", detail: "6 videos" },
      { plan: "Growth", detail: "12 videos" },
      { plan: "Pro", detail: "20 videos" },
      { plan: "Elite", detail: "30+ videos" },
    ],
  },
  {
    id: "spot",
    number: "08",
    subtitle: "El núcleo del live",
    name: "Spot base genérico del producto",
    description:
      "El video principal del live — el que corre en bucle 24/7. Producido con la estética de LiveCake, presenta tu producto, sus beneficios, prueba social y CTA. Es el núcleo de todo el sistema.",
    includes: [
      "Guion basado en el briefing de tu negocio",
      "Grabación y edición del spot principal",
      "Subida a YouTube como oculto + conexión a LiveCake",
      "Duración calibrada según tu ticket promedio",
    ],
    planAvailability: "Todos los planes (1 spot genérico incluido)",
    addons: [
      {
        name: "Spot personalizado de marca",
        description:
          "Tu identidad visual completa: colores, presentador específico, locación, música de marca y color grading propio.",
        price: "Desde $800 USD · cotización según complejidad",
      },
      {
        name: "Arriendo de espacio + equipos",
        description:
          "Espacio de grabación de LiveCake con cámara, iluminación y audio. Máximo 2 h/día de uso activo. El set queda disponible a tiempo completo.",
        price: "$200–$500 USD/mes",
      },
    ],
  },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.06, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-brand-green/40 transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 sm:p-8 border-b border-neutral-100">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-neutral-300 font-bold tracking-widest flex-shrink-0">
            {service.number}
          </span>
          <div>
            <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-brand-green mb-0.5">
              {service.subtitle}
            </p>
            <h3 className="font-display text-xl sm:text-2xl text-neutral-900 leading-tight">
              {service.name}
            </h3>
          </div>
        </div>
        <span className="self-start sm:self-auto flex-shrink-0 text-[11px] font-sans font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20">
          {service.planAvailability}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Izquierda: descripción + notas */}
        <div>
          <p className="text-neutral-600 text-base leading-relaxed">
            {service.description}
          </p>

          {service.planNotes && (
            <div className="mt-6 grid grid-cols-2 gap-2">
              {service.planNotes.map((note) => (
                <div
                  key={note.plan}
                  className="bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100"
                >
                  <p className="text-xs font-bold text-neutral-900 font-sans">
                    {note.plan}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-snug">
                    {note.detail}
                  </p>
                </div>
              ))}
            </div>
          )}

          {service.importantNote && (
            <div className="mt-5 flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50 border border-amber-200">
              <Info
                className="h-4 w-4 text-amber-600 flex-shrink-0 mt-px"
                aria-hidden
              />
              <p className="text-sm text-amber-800 font-sans leading-snug">
                {service.importantNote}
              </p>
            </div>
          )}
        </div>

        {/* Derecha: lista de incluidos */}
        <div>
          <p className="text-[11px] font-bold font-sans uppercase tracking-widest text-neutral-400 mb-4">
            Incluye
          </p>
          <ul className="space-y-3">
            {service.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check
                  className="h-4 w-4 text-brand-green flex-shrink-0 mt-0.5"
                  aria-hidden
                />
                <span className="text-sm text-neutral-700 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Add-ons */}
      {service.addons && (
        <div className="border-t border-neutral-100 px-6 sm:px-8 py-6">
          <p className="flex items-center gap-1.5 text-[11px] font-bold font-sans uppercase tracking-widest text-neutral-400 mb-4">
            <Plus className="h-3.5 w-3.5" aria-hidden />
            Add-ons disponibles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-neutral-50 rounded-xl p-5 border border-neutral-200"
              >
                <p className="text-sm font-bold text-neutral-900 font-sans mb-1.5">
                  {addon.name}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                  {addon.description}
                </p>
                <p className="text-sm font-semibold text-brand-green">
                  {addon.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ServiciosDetalle() {
  return (
    <section
      id="servicios-detalle"
      aria-labelledby="servicios-detalle-heading"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-widest uppercase mb-6 bg-brand-green/15 text-brand-green border border-brand-green/40">
            Sistema completo
          </span>
          <h2
            id="servicios-detalle-heading"
            className="font-display text-neutral-900 text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight mb-5"
          >
            El sistema completo de LiveCake
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-500 text-base sm:text-lg leading-relaxed">
            No vendemos piezas sueltas. Montamos el ecosistema completo para
            que funcione como un todo desde el día 10.
          </p>
        </motion.div>

        {/* Cards de servicios */}
        <div className="flex flex-col gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
