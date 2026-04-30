import {
  ShoppingCart,
  TrendingDown,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export type Dolor = { titulo: string; descripcion: string };

export type Metrica = {
  label: string;
  value: string;
  desc: string;
};

export type DolorBlock = {
  id: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  /** Nombre del avatar (persona real ficticia que representa el segmento). */
  avatar?: string;
  /** Rol o descripcion del avatar. */
  avatarRole?: string;
  /** Frase gancho que abre la narrativa del avatar. */
  hook?: string;
  titulo: string;
  subtitulo: string;
  dolores: Dolor[];
  solucion: string;
  metricas: Metrica[];
  servicioId: string;
  servicioLabel: string;
};

/**
 * Tres avatares LATAM de live shopping:
 *  - Carlos   → dropshipper con devoluciones altas y ROAS en caida
 *  - Valentina → infoproductora cuyo modelo de lanzamiento ya no escala
 *  - Rodrigo  → empresario de marca propia ahogado por comisiones de marketplaces
 */
export const DOLOR_BLOCKS: DolorBlock[] = [
  {
    id: "carlos-dropshipper",
    icon: ShoppingCart,
    image: "/brand/casos-page/creacion-contenido.png",
    imageAlt: "Pantalla con dashboard de anuncios y ROAS en caida",
    avatar: "Carlos",
    avatarRole: "Dropshipper, Bogota",
    hook: "Vende $25K al mes pero el 22% se le va en devoluciones — y cada mes necesita un producto nuevo.",
    titulo: "Cada mes un producto nuevo. Y las devoluciones no bajan del 20%.",
    subtitulo:
      "Carlos lleva 3 anos en dropshipping. Cada vez que encuentra un ganador lo escala con Meta Ads, pero en 6-8 semanas la frecuencia sube, el ROAS cae a 1.5x y tiene que buscar otro producto. Encima, el 20-25% de los pedidos vuelven porque el cliente no vio bien el producto antes de comprar.",
    dolores: [
      {
        titulo: "ROAS de 1.5x que no cubre los costos",
        descripcion:
          "Con un ROAS de 1.5x en Meta solo cubre el costo del producto y la pauta. El margen real desaparece cuando suma devoluciones, fulfillment y servicio al cliente.",
      },
      {
        titulo: "Devoluciones entre el 15% y el 30%",
        descripcion:
          "Los compradores no ven el producto en uso antes de comprarlo. El live shopping reduce las devoluciones a 10-15% porque el cliente ya lo vio funcionando en tiempo real. Eso es hasta un 40% menos de returns.",
      },
      {
        titulo: "Fatiga de creativo cada 6-8 semanas",
        descripcion:
          "El video UGC se quema rapido. Sin un canal de venta en vivo que rote formatos y ofertas, queda atrapado en el ciclo de producir, escalar, quemar y reemplazar.",
      },
      {
        titulo: "WhatsApp de servicio al cliente sin escalar",
        descripcion:
          "Dos personas respondiendo cientos de mensajes al dia sobre estado del pedido, cambios y devoluciones. Cada cliente insatisfecho es potencialmente una resena negativa.",
      },
    ],
    solucion:
      "Con live shopping los clientes ven el producto en uso, hacen preguntas en tiempo real y compran con mucha mas confianza — lo que reduce devoluciones al 10-15% (vs. 20-30% del ecom tradicional). El Botcake de Pancake automatiza el seguimiento de pedidos por WhatsApp sin contratar mas gente. Y el live en si es el contenido que alimenta los anuncios de la semana siguiente.",
    metricas: [
      { label: "ROAS", value: "3-5x", desc: "Objetivo live shopping" },
      { label: "DEVOLUC.", value: "-40%", desc: "Live vs ecom tradicional" },
      { label: "RESP.", value: "<2 min", desc: "Botcake WhatsApp auto" },
    ],
    servicioId: "live-shopping",
    servicioLabel: "Ver planes de Live Shopping",
  },
  {
    id: "valentina-infoproductora",
    icon: TrendingDown,
    image: "/brand/casos-page/fatiga-creativa.png",
    imageAlt: "Pantalla con embudo de lanzamiento y metricas en bajada",
    avatar: "Valentina",
    avatarRole: "Infoproductora, Ciudad de Mexico",
    hook: "Sus webinars ya no llenan como antes — y sus ingresos solo existen en los 10 dias de lanzamiento.",
    titulo: "La audiencia mira pero no compra. Y solo vendes en el lanzamiento.",
    subtitulo:
      "Valentina tiene 80K seguidores en Instagram, un curso de $497 USD y un perfil fuerte. Pero sus webinars ya no convierten como antes — la audiencia esta saturada del formato. El 90% de sus ingresos llega en ventanas de 10 dias, y los 20 dias siguientes son silencio total.",
    dolores: [
      {
        titulo: "Webinars con menos del 30% de asistencia real",
        descripcion:
          "Se registran 500 personas, asisten 140, compran 8. El embudo de webinar esta agotado para audiencias que llevan anos viendo el mismo formato de 'te regalo valor y al final vendo'.",
      },
      {
        titulo: "Ingresos solo en ventana de lanzamiento",
        descripcion:
          "Enero: $18K USD. Febrero: $900 USD. Marzo: $16K. El modelo de lanzamiento crea picos impredecibles imposibles de planear financieramente. El live shopping permite ventas predecibles cada semana.",
      },
      {
        titulo: "La audiencia ve pero no compra",
        descripcion:
          "Los Reels y Stories generan muchos views pero pocos clics a la pagina de ventas. Sin interaccion en tiempo real, no hay urgencia ni conexion emocional suficiente para romper la inercia.",
      },
      {
        titulo: "Sin canal de ventas evergreen entre lanzamientos",
        descripcion:
          "Entre lanzamientos solo hay contenido de valor sin CTA claro. Eso es contenido que educa pero no convierte — y que le esta regalando atencion a la competencia.",
      },
    ],
    solucion:
      "El live shopping convierte mejor que un webinar grabado porque la interaccion es real: preguntas en directo, respuestas inmediatas, ofertas con tiempo limitado. Con 2-4 lives A/B a la semana Valentina puede vender su curso o sus servicios de forma predecible — sin depender del gran lanzamiento trimestral. La retension a los 10 minutos supera el 60% cuando el live esta bien producido.",
    metricas: [
      { label: "RETEN.", value: "60%+", desc: "En live a los 10 minutos" },
      { label: "CVR", value: "30%", desc: "Viewer a comprador en live" },
      { label: "INGRES.", value: "Semanal", desc: "Ventas predecibles" },
    ],
    servicioId: "live-shopping",
    servicioLabel: "Ver planes de Live Shopping",
  },
  {
    id: "rodrigo-marca-propia",
    icon: MessageCircle,
    image: "/brand/casos-page/contratar-creadores.png",
    imageAlt: "Pantalla de panel de marketplace con comisiones acumuladas",
    avatar: "Rodrigo",
    avatarRole: "Empresario marca propia, Medellin",
    hook: "El marketplace se lleva el 22% de cada venta — y su equipo no alcanza a responder todos los WhatsApps.",
    titulo: "El marketplace se queda con tu margen. Y no tienes canal propio.",
    subtitulo:
      "Rodrigo vende $60K USD al mes en Mercado Libre y Falabella, pero entre comisiones (15-25%), logistica y publicidad dentro del marketplace, el margen real cae por debajo del 12%. No tiene relacion directa con sus clientes, no puede hacer retargeting y si el marketplace cambia el algoritmo, sus ventas se desploman de la noche a la manana.",
    dolores: [
      {
        titulo: "Comisiones de 15% a 25% sobre cada venta",
        descripcion:
          "Mercado Libre cobra entre el 11% y el 23% de comision mas IVA sobre la misma. Con logistica Fulfil y publicidad interna, el costo real por venta supera el 25% del precio final.",
      },
      {
        titulo: "Cero relacion con el comprador",
        descripcion:
          "El marketplace es el dueno del cliente. Rodrigo no tiene el email ni el numero de telefono de ninguno de sus compradores — y no puede hacerles retargeting ni ofrecerles recompra directa.",
      },
      {
        titulo: "Equipo desbordado con WhatsApps de soporte",
        descripcion:
          "Recibe 200-400 mensajes diarios entre preguntas de producto, seguimiento de pedido y quejas. Con 2 personas atendiendo, los tiempos de respuesta superan las 4 horas y los clientes se van con la competencia.",
      },
      {
        titulo: "Sin canal de venta propio si el marketplace cambia",
        descripcion:
          "Una actualizacion del algoritmo, un cambio de politica o un competidor con mas presupuesto puede hundir las ventas de un dia para otro. Sin canal propio no hay red de seguridad.",
      },
    ],
    solucion:
      "El live shopping es el canal propio que le falta a Rodrigo. Con WebCake tiene su tienda de live integrada, con Botcake automatiza el seguimiento por WhatsApp y con LiveCake transmite con su marca — sin pagar comision a ningun marketplace. Un live bien ejecutado puede generar el equivalente a 3-5 dias de ventas en el marketplace en una sola hora.",
    metricas: [
      { label: "COMIS.", value: "0%", desc: "Live Cake no cobra por venta" },
      { label: "RESP.", value: "<2 min", desc: "Botcake WhatsApp auto" },
      { label: "AOV", value: "+10-30%", desc: "Ticket promedio en live" },
    ],
    servicioId: "live-shopping",
    servicioLabel: "Ver planes de Live Shopping",
  },
];
