export type BlogCategoria =
  | "live-shopping"
  | "falsos-lives"
  | "ecommerce"
  | "dropshipping"
  | "infoproductos"
  | "mercado-latam"
  | "pancake"
  | "casos-de-exito"

export const CATEGORIA_LABELS: Record<BlogCategoria, string> = {
  "live-shopping": "Live Shopping",
  "falsos-lives": "Falsos Lives",
  "ecommerce": "Ecommerce",
  "dropshipping": "Dropshipping",
  "infoproductos": "Infoproductos",
  "mercado-latam": "Mercado LATAM",
  "pancake": "Pancake",
  "casos-de-exito": "Casos de Éxito",
}

export const TODAS_CATEGORIAS = Object.keys(CATEGORIA_LABELS) as BlogCategoria[]

export interface BlogAutor {
  nombre: string
  rol: string
  imagen?: string
}

export interface BlogPost {
  slug: string
  titulo: string
  descripcion: string
  fecha: string
  fechaActualizacion?: string
  autor: BlogAutor
  categoria: BlogCategoria
  tags: string[]
  imagen: string
  imagenAlt: string
  tiempoLectura: number
  destacado: boolean
  publicado: boolean
  contenido?: string
}
