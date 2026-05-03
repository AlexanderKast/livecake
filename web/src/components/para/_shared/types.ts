export interface AvatarConfig {
  slug: "dropshippers" | "infoproductores" | "marcas";
  nombre: string;
  avatarLabel: string;
  stackTicker: string[];
}

export interface DolorCard {
  titulo: string;
  cifra: string;
  descripcion: string;
  fuente: string;
  fuenteUrl: string;
}

export interface PasoSolucion {
  numero: number;
  titulo: string;
  descripcion: string;
}

export interface ComponenteStack {
  name: string;
  tagline: string;
  descripcion: string;
}

export interface CasoEstudio {
  titulo: string;
  cifra: string;
  contexto: string;
  fuente: string;
  fuenteUrl: string;
  angulo: string;
}
