import { AvatarMercado } from "@/components/para/_shared/AvatarMercado";

const STATS = [
  {
    id: "conversion-live-vs-ecom",
    emphasis: "30% vs 3%",
    colorClass: "text-brand-green",
  },
  {
    id: "returns-reduction",
    emphasis: "-40%",
    colorClass: "text-brand-green",
  },
  {
    id: "latam-market-2024",
    emphasis: "$3.87B",
    colorClass: "text-brand-black",
  },
  {
    id: "vtex-live-uplift",
    emphasis: "+40%",
    colorClass: "text-brand-green",
  },
];

export function MercadoDropshippers() {
  return (
    <AvatarMercado
      stats={STATS}
      tituloSeccion="El mercado que ya dejó atrás las landings estáticas"
      subtituloSeccion="Estas cifras son de dropshippers y retailers que ya cambiaron el canal. Tú puedes ser el primero en tu categoría."
    />
  );
}
