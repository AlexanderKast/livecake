import { AvatarCaso } from "@/components/para/_shared/AvatarCaso";
import type { CasoEstudio } from "@/components/para/_shared/types";

const CASO: CasoEstudio = {
  titulo: "VTEX clientes LATAM — aumento de órdenes en lives",
  cifra: "+40%",
  contexto:
    "Clientes de VTEX en LATAM reportaron un incremento del 40% en órdenes completadas durante eventos de live commerce versus sus canales ecommerce habituales. El mismo producto, el mismo precio — diferente formato de venta.",
  angulo:
    "Si los retailers de VTEX ya están usando live commerce para incrementar órdenes en un 40%, los dropshippers que adopten primero en sus categorías capturan esa ventaja antes de que el mercado se sature.",
  fuente: "VTEX / yavendio",
  fuenteUrl: "https://www.yavendio.com/en/blog/live-commerce-latam-estadisticas",
};

export function CasoDropshippers() {
  return (
    <AvatarCaso
      caso={CASO}
      tituloSeccion="Lo que ya está pasando con los dropshippers en LATAM"
    />
  );
}
