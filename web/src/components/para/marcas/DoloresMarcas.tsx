import { AvatarDolores } from "@/components/para/_shared/AvatarDolores";
import type { DolorCard } from "@/components/para/_shared/types";

const DOLORES: DolorCard[] = [
  {
    titulo: "Comisiones que no vuelven a tu caja",
    cifra: "15–25%",
    descripcion:
      "Mercado Libre, Amazon y otros marketplaces se quedan con 15–25% de cada venta. Si facturas USD 30K/mes, eso son USD 4.5–7.5K/mes que pagas por estar en una vitrina que no controlas. Un sistema propio sobre tu dominio te devuelve esa comisión completa al primer mes.",
    fuente: "Tarifa estándar marketplaces LATAM 2025–2026",
    fuenteUrl: "",
  },
  {
    titulo: "Sin canal propio que escale",
    cifra: "0%",
    descripcion:
      "Vendes en marketplaces porque ahí está el tráfico — pero la base de clientes, los datos, el algoritmo y la relación pertenecen al marketplace. El día que cambien las reglas, tu negocio se tambalea. Un live propio sobre Pancake es tu canal — tus datos, tu CRM, tu lista de re-compra.",
    fuente: "Pancake (Mauricio Cuevas, CEO)",
    fuenteUrl: "",
  },
  {
    titulo: "Equipo no atiende todos los WhatsApp",
    cifra: "30–60%",
    descripcion:
      "Tu equipo responde manualmente cada WhatsApp y se pierde el 30–60% de los leads que llegan fuera de horario o cuando la conversación se enfría. Botcake captura, califica y cierra órdenes 24/7 con respuestas naturales conectadas a tu catálogo y a tu pasarela de pago.",
    fuente: "Pancake (benchmark interno LATAM)",
    fuenteUrl: "",
  },
];

export function DoloresMarcas() {
  return (
    <AvatarDolores
      dolores={DOLORES}
      tituloSeccion="Tres dolores de las marcas que dependen de marketplaces"
      subtituloSeccion="Cada uno se traduce directo en margen perdido. El canal propio sobre Pancake los arregla en orden."
    />
  );
}
