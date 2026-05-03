import { AvatarMercado } from "@/components/para/_shared/AvatarMercado";

const STATS = [
  {
    id: "magalu-bf-2024",
    emphasis: "$240M+",
    colorClass: "text-brand-green",
  },
  {
    id: "conversion-live-vs-ecom",
    emphasis: "30% vs 3%",
    colorClass: "text-brand-green",
  },
  {
    id: "latam-market-2024",
    emphasis: "CAGR 27.2%",
    colorClass: "text-brand-black",
  },
  {
    id: "returns-reduction",
    emphasis: "-40%",
    colorClass: "text-brand-green",
  },
];

export function MercadoMarcas() {
  return (
    <AvatarMercado
      stats={STATS}
      tituloSeccion="Las marcas grandes ya entendieron"
      subtituloSeccion="Magalu, VTEX, retailers de cosmética — todos migrando a canal propio con live shopping. La pregunta no es si llega a tu mercado: es si tu marca lidera o sigue."
    />
  );
}
