export interface Situacion {
  slug: string
  titulo: string
  subtitulo: string
  descripcion: string
  productosSlug: string[]
  emoji: string
}

export const situaciones: Situacion[] = [
  {
    slug: "la-tele-suena-mal",
    titulo: "La tele suena mal",
    subtitulo: "Soundbars para TV",
    descripcion:
      "Compraste una buena tele pero el sonido es plano. Un soundbar cambia completamente la experiencia sin cables ni amplificador.",
    productosSlug: ["denon-dht-s218"],
    emoji: "📺",
  },
  {
    slug: "musica-en-toda-la-casa",
    titulo: "Música en toda la casa",
    subtitulo: "Multiroom audio",
    descripcion:
      "Querés escuchar música pasando de cuarto en cuarto sin que se corte. Los sistemas multiroom sincronizan todo desde el teléfono.",
    productosSlug: ["denon-home-150"],
    emoji: "🏠",
  },
  {
    slug: "depto-chico-vecinos-cerca",
    titulo: "Depto chico, vecinos cerca",
    subtitulo: "Auriculares con cancelación de ruido",
    descripcion:
      "Necesitás concentrarte o disfrutar música sin molestar ni ser molestado. Los auriculares con ANC son la solución definitiva.",
    productosSlug: ["bose-quietcomfort-45", "bose-quietcomfort-ultra"],
    emoji: "🎧",
  },
  {
    slug: "auriculares-para-viajar",
    titulo: "Auriculares para viajar",
    subtitulo: "Auriculares premium portátiles",
    descripcion:
      "Muchas horas de vuelo o tren. Necesitás comodidad, batería larga y que el ruido del motor desaparezca.",
    productosSlug: ["bose-quietcomfort-ultra"],
    emoji: "✈️",
  },
  {
    slug: "sonido-en-el-patio",
    titulo: "Sonido en el patio",
    subtitulo: "Parlantes portátiles",
    descripcion:
      "Asado, pileta, salida al campo. Un parlante que aguante el ambiente exterior, con batería larga y buena potencia.",
    productosSlug: ["bose-soundlink-flex", "bose-soundlink-micro"],
    emoji: "🌿",
  },
  {
    slug: "mi-primer-equipo",
    titulo: "Mi primer equipo",
    subtitulo: "Entrada al mundo del audio",
    descripcion:
      "Salís de los auriculares de regalo y querés algo real. Buscás la mejor calidad por precio sin complicarte con cables.",
    productosSlug: ["bose-soundlink-micro", "denon-home-150"],
    emoji: "🎵",
  },
]

export function getSituacionBySlug(slug: string): Situacion | undefined {
  return situaciones.find((s) => s.slug === slug)
}
