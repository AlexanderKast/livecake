import { AvatarCaso } from "@/components/para/_shared/AvatarCaso";
import type { CasoEstudio } from "@/components/para/_shared/types";

const CASO: CasoEstudio = {
  titulo: "Retailer de belleza Brasil — conversión en lives",
  cifra: "30%",
  contexto:
    "Un retailer brasileño de belleza migró sus lanzamientos de página estática a sesiones de live shopping y registró conversión del 30% sobre los espectadores únicos — aproximadamente 10× el desempeño de su ecommerce tradicional. El producto y el ticket no cambiaron, solo el formato.",
  angulo:
    "Si un retailer físico con margen de producto del 30–40% convierte al 30%, un curso digital con margen del 80–90% sobre el mismo formato live tiene un retorno por minuto de transmisión incomparable. La economía del infoproducto en live es brutal.",
  fuente: "yavendio (Live Commerce LATAM)",
  fuenteUrl: "https://www.yavendio.com/en/blog/live-commerce-latam-estadisticas",
};

export function CasoInfoproductores() {
  return (
    <AvatarCaso
      caso={CASO}
      tituloSeccion="Lo que ya está pasando con lives en LATAM"
    />
  );
}
