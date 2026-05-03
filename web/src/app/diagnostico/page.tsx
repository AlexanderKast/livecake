import type { Metadata } from "next";
import { DiagnosticoClient } from "./DiagnosticoClient";

export const metadata: Metadata = {
  title: "Diagnóstico Gratis con IA — Live Cake",
  description:
    "Descubre si el live shopping es el canal que le falta a tu negocio. Diagnóstico gratis con IA en 5 minutos. Después agenda una llamada sin costo con nuestro equipo.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://livecake.com/diagnostico",
  },
};

export default function DiagnosticoPage() {
  return <DiagnosticoClient />;
}
