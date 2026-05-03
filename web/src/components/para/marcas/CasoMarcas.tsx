import { AvatarCaso } from "@/components/para/_shared/AvatarCaso";
import type { CasoEstudio } from "@/components/para/_shared/types";

const CASO: CasoEstudio = {
  titulo: "Magalu — Black Friday 2024 (Brasil)",
  cifra: "$240M+",
  contexto:
    "Magazine Luiza (Magalu) facturó más de USD 240 millones en un solo día durante el Black Friday 2024 — apoyado en su plataforma Magalu Live, que opera lives shoppables desde 2020. El canal propio le permite capturar todo el margen sin pagar comisión a marketplaces externos.",
  angulo:
    "Si la marca más grande de retail de Brasil construye su pico de venta del año sobre live shopping en su propio dominio, el playbook está validado. El que no lo adopte en LATAM en los próximos 18 meses queda compitiendo con marcas que ya tienen 10× la conversión y 0% de comisión externa.",
  fuente: "ecommerceupdate.org",
  fuenteUrl:
    "https://www.ecommerceupdate.org/en/highlight/americanas-e-magalu-anunciam-parceria-estrategica-para-e-commerce/",
};

export function CasoMarcas() {
  return (
    <AvatarCaso
      caso={CASO}
      tituloSeccion="Las marcas grandes ya entendieron"
    />
  );
}
