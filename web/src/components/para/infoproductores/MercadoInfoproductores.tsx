import { AvatarMercado } from "@/components/para/_shared/AvatarMercado";

const STATS = [
  {
    id: "conversion-live-vs-ecom",
    emphasis: "30%",
    colorClass: "text-brand-green",
  },
  {
    id: "long-tail-purchases",
    emphasis: "34%",
    colorClass: "text-brand-green",
  },
  {
    id: "retention-10min",
    emphasis: "60%+",
    colorClass: "text-brand-green",
  },
  {
    id: "latam-market-2024",
    emphasis: "$3.87B",
    colorClass: "text-brand-black",
  },
];

export function MercadoInfoproductores() {
  return (
    <AvatarMercado
      stats={STATS}
      tituloSeccion="Por qué el live shopping también es para infoproductores"
      subtituloSeccion="El formato live no es solo para productos físicos. Los datos de conversión aplican igual para cursos, masterminds y membresías digitales."
    />
  );
}
