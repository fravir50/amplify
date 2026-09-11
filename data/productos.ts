// data/productos.ts
// ─────────────────────────────────────────────────────────────────────
// Catálogo lifestyle: Bose, Denon Home, Polk, Klipsch, Sonos, etc.
// Reglas de build:
//   - publicado: false → excluido silenciosamente
//   - lectura ausente → excluido con console.warn (producto incompleto)
//   - precioUSD es siempre number (nunca string)
// ─────────────────────────────────────────────────────────────────────

export type Marca =
  | "Bose"
  | "Denon"
  | "Sonos"
  | "Polk Audio"
  | "Klipsch"
  | "Bowers & Wilkins"
  | "Marantz"

export type Categoria =
  | "soundbar"
  | "portatil"
  | "auriculares"
  | "multiroom"
  | "exterior"

export type Situacion =
  | "la-tele-suena-mal"
  | "musica-en-toda-la-casa"
  | "depto-chico-vecinos-cerca"
  | "auriculares-para-viajar"
  | "sonido-en-el-patio"
  | "mi-primer-equipo"

export interface Spec {
  clave: string
  valor: string
}

export interface BloqueLecturaData {
  veredicto: string           // 2-3 oraciones con opinión editorial
  sirveSi: string[]           // ≤5 bullets: quién se beneficia
  noSirveSi: string[]         // ≤4 bullets: quién no debería comprarlo
}

export interface Producto {
  slug: string
  marca: Marca
  modelo: string
  categoria: Categoria
  situaciones: Situacion[]
  precioUSD: number
  imagenes: string[]          // primera = imagen principal
  resumen: string             // 1-2 oraciones descriptivas (sin marketing)
  lectura: BloqueLecturaData
  specs: Spec[]
  alternativas: string[]      // slugs de productos alternativos
  destacado?: boolean
  publicado: boolean
}

// ─────────────────────────────────────────────────────────────────────
// Filtrado de build: excluye no publicados y los que no tienen lectura
// ─────────────────────────────────────────────────────────────────────
function filtrarParaBuild(lista: Producto[]): Producto[] {
  return lista.filter((p) => {
    if (!p.publicado) return false
    if (!p.lectura) {
      console.warn(`[amplify] Producto sin lectura excluido del build: ${p.slug}`)
      return false
    }
    return true
  })
}

// ─────────────────────────────────────────────────────────────────────
// CATÁLOGO
// ─────────────────────────────────────────────────────────────────────
const _todos: Producto[] = [

  // ── BOSE PARLANTES PORTÁTILES ─────────────────────────────────────

  {
    slug: "bose-soundlink-flex",
    marca: "Bose",
    modelo: "SoundLink Flex",
    categoria: "portatil",
    situaciones: ["sonido-en-el-patio", "mi-primer-equipo"],
    precioUSD: 149,
    imagenes: ["/images/products/bose-soundlink-flex.png"],
    resumen:
      "Parlante portátil Bluetooth resistente al agua (IP67), con 12 horas de batería y sonido omnidireccional optimizado para exteriores.",
    lectura: {
      veredicto:
        "El SoundLink Flex es el parlante portátil mejor ejecutado en este rango de precio. Bose calibró el driver específicamente para uso al aire libre: la respuesta de bajos no se cae cuando el volumen sube, algo que raramente se logra en un formato tan compacto. Si el asado o la pileta son el destino, es difícil encontrar algo mejor.",
      sirveSi: [
        "Querés llevarlo al campo, la pileta o la playa sin preocuparte por salpicaduras",
        "Buscás calidad de sonido real —no de 'portátil barato'— en un objeto chico",
        "Necesitás batería para una tarde larga (12 hs es real en volumen medio)",
        "Usás Apple o Android indistintamente (funciona con ambos via BT)",
      ],
      noSirveSi: [
        "Querés graves profundos para un espacio grande: no está diseñado para eso",
        "Buscás multiroom: no se integra con otros parlantes Bose",
        "El precio de USD 149 te parece alto para algo 'que sólo reproduce música'",
      ],
    },
    specs: [
      { clave: "Resistencia", valor: "IP67 (polvo + agua)" },
      { clave: "Batería", valor: "12 horas" },
      { clave: "Conectividad", valor: "Bluetooth 4.2" },
      { clave: "Peso", valor: "590 g" },
      { clave: "Dimensiones", valor: "200 × 87 × 74 mm" },
    ],
    alternativas: ["bose-soundlink-micro"],
    destacado: true,
    publicado: true,
  },

  {
    slug: "bose-soundlink-micro",
    marca: "Bose",
    modelo: "SoundLink Micro",
    categoria: "portatil",
    situaciones: ["sonido-en-el-patio", "mi-primer-equipo"],
    precioUSD: 99,
    imagenes: ["/images/products/bose-soundlink-micro.png"],
    resumen:
      "El parlante portátil más compacto de Bose: 290 gramos, IP67, clip incluido para colgar en mochila o bicicleta.",
    lectura: {
      veredicto:
        "El Micro es el punto de entrada más honesto al sonido Bose portátil. Con sólo 290 gramos y clip incluido, está diseñado para ir donde el Flex no cabe: en la muñeca del ciclista, colgado de la mochila de trekking, en el baño. No tiene el volumen ni los bajos del Flex, pero dentro de su escala hace lo que promete.",
      sirveSi: [
        "El tamaño importa más que la potencia (mochila, bici, running)",
        "Querés la calidad de ingeniería Bose en el formato más chico posible",
        "Tenés un presupuesto ajustado y querés el mejor USD 99 del mercado",
        "Lo vas a usar solo o con dos personas a lo sumo",
      ],
      noSirveSi: [
        "Querés que llene un espacio grande o exteriores abiertos",
        "Necesitás más de 6 horas seguidas de batería",
        "Buscás graves marcados: es chico, físicamente no puede darlos",
      ],
    },
    specs: [
      { clave: "Resistencia", valor: "IP67 (polvo + agua)" },
      { clave: "Batería", valor: "6 horas" },
      { clave: "Conectividad", valor: "Bluetooth 4.2" },
      { clave: "Peso", valor: "290 g" },
      { clave: "Accesorio incluido", valor: "Clip de silicona" },
    ],
    alternativas: ["bose-soundlink-flex"],
    publicado: true,
  },

  // ── BOSE AURICULARES ──────────────────────────────────────────────

  {
    slug: "bose-quietcomfort-45",
    marca: "Bose",
    modelo: "QuietComfort 45",
    categoria: "auriculares",
    situaciones: ["depto-chico-vecinos-cerca", "auriculares-para-viajar"],
    precioUSD: 249,
    imagenes: ["/images/products/bose-quietcomfort-45.png"],
    resumen:
      "Auriculares over-ear con cancelación activa de ruido, 24 horas de batería y el confort característico de Bose para uso prolongado.",
    lectura: {
      veredicto:
        "El QC45 es la opción de referencia si la prioridad es la cancelación de ruido y el confort antes que el detalle audiófilo. Bose tiene décadas perfeccionando el ANC y se nota: en avión o subte, aisla mejor que casi cualquier alternativa en este rango. El sonido es cálido y musical, no analítico — ideal para escucha placentera de largas jornadas.",
      sirveSi: [
        "Viajás seguido y los vuelos largos son tu principal caso de uso",
        "Usás auriculares 4-6 horas seguidas y el confort es prioritario",
        "Querés cancelación de ruido probada, no promesas de marketing",
        "Trabajás desde casa y querés aislarte del entorno sin distorsión",
      ],
      noSirveSi: [
        "Sos audiófilo y buscás detalle, escena y separación de instrumentos: mirá los Ultra",
        "Querés algo más compacto para el bolso: estos son over-ear, ocupan espacio",
        "Usás Android exclusivamente y querés ajuste fino via app (funciona mejor con iOS)",
      ],
    },
    specs: [
      { clave: "Tipo", valor: "Over-ear, circumaural" },
      { clave: "Cancelación de ruido", valor: "ANC adaptativo" },
      { clave: "Batería", valor: "24 horas (ANC activo)" },
      { clave: "Conectividad", valor: "Bluetooth 5.1 + cable 3.5mm" },
      { clave: "Modos", valor: "Quiet / Aware (transparencia)" },
    ],
    alternativas: ["bose-quietcomfort-ultra"],
    destacado: false,
    publicado: true,
  },

  {
    slug: "bose-quietcomfort-ultra",
    marca: "Bose",
    modelo: "QuietComfort Ultra",
    categoria: "auriculares",
    situaciones: ["depto-chico-vecinos-cerca", "auriculares-para-viajar"],
    precioUSD: 379,
    imagenes: ["/images/products/bose-quietcomfort-ultra.png"],
    resumen:
      "El modelo top de Bose: ANC de primera clase, modo Immersive Audio para sonido espacial y 24 horas de batería con diseño rediseñado respecto al QC45.",
    lectura: {
      veredicto:
        "El QuietComfort Ultra es el mejor auricular que hizo Bose. Toma todo lo que funcionaba en el QC45 —ANC de primera clase, confort excepcional— y agrega el modo Immersive Audio que genera una escena sonora envolvente que los QC45 no tienen. Para vuelos de más de 6 horas o trabajo concentrado en entornos ruidosos, es difícil justificar gastar más.",
      sirveSi: [
        "Querés lo mejor que existe en ANC + confort sin excepciones",
        "El sonido espacial (Immersive Audio) te interesa para series o música",
        "Viajás frecuentemente en business o economy con ruido de motor constante",
        "Tu presupuesto llega a USD 379 y querés los mejores auriculares posibles",
      ],
      noSirveSi: [
        "Ya tenés los QC45 y el salto de precio no justifica el upgrade para vos",
        "Querés auriculares principalmente para gimnasio o deporte",
        "El modo Immersive Audio no te interesa y el ANC del QC45 te alcanza",
      ],
    },
    specs: [
      { clave: "Tipo", valor: "Over-ear, circumaural" },
      { clave: "Cancelación de ruido", valor: "ANC adaptativo (mejor gen que QC45)" },
      { clave: "Batería", valor: "24 horas (ANC activo)" },
      { clave: "Conectividad", valor: "Bluetooth 5.3 + cable USB-C" },
      { clave: "Modos", valor: "Quiet / Aware / Immersive Audio" },
    ],
    alternativas: ["bose-quietcomfort-45"],
    destacado: true,
    publicado: true,
  },

  // ── DENON ─────────────────────────────────────────────────────────

  {
    slug: "denon-dht-s218",
    marca: "Denon",
    modelo: "DHT-S218",
    categoria: "soundbar",
    situaciones: ["la-tele-suena-mal", "mi-primer-equipo"],
    precioUSD: 249,
    imagenes: ["/images/products/denon-dht-s218.png"],
    resumen:
      "Soundbar de 2.1 canales con subwoofer integrado, HDMI ARC, Bluetooth y Dolby Audio. Pensado para televisores de 40 a 65 pulgadas.",
    lectura: {
      veredicto:
        "El DHT-S218 es la solución más directa para mejorar el audio de un televisor sin armar un sistema completo. El subwoofer integrado —no separado— le da profundidad real a las explosiones y música sin ocupar espacio extra. No es un sistema audiófilo, pero para cine en casa y series es infinitamente mejor que los parlantes del televisor.",
      sirveSi: [
        "Tu TV suena plano y querés mejorar el audio con una sola conexión (HDMI ARC)",
        "El living no tiene espacio para un subwoofer separado",
        "Ves principalmente series, películas y escuchás algo de música",
        "Querés plug-and-play sin configuración: conectás y listo",
      ],
      noSirveSi: [
        "Buscás audio multiroom o conectividad Wi-Fi: este modelo es sólo BT + HDMI",
        "Querés compatibilidad con Dolby Atmos o sonido envolvente real",
        "Tu presupuesto se estira y preferís algo con streaming integrado",
      ],
    },
    specs: [
      { clave: "Canales", valor: "2.1 (subwoofer integrado)" },
      { clave: "Conectividad", valor: "HDMI ARC, Bluetooth, Óptica" },
      { clave: "Decodificación", valor: "Dolby Audio, DTS" },
      { clave: "Potencia", valor: "120W total" },
      { clave: "Dimensiones", valor: "900 × 58 × 105 mm" },
    ],
    alternativas: ["denon-home-150"],
    publicado: true,
  },

  {
    slug: "denon-home-150",
    marca: "Denon",
    modelo: "Home 150",
    categoria: "multiroom",
    situaciones: ["musica-en-toda-la-casa", "mi-primer-equipo"],
    precioUSD: 199,
    imagenes: ["/images/products/denon-home-150.png"],
    resumen:
      "Parlante Wi-Fi multiroom compacto con HEOS integrado, AirPlay 2, Bluetooth y soporte para Spotify Connect, Tidal y Amazon Music.",
    lectura: {
      veredicto:
        "El Home 150 es el punto de entrada más sensato al audio multiroom. La integración con HEOS y AirPlay 2 permite sincronizarlo con otros parlantes Denon o con el Apple TV sin latencia audible. Para un departamento de dos cuartos, dos unidades cubren todo. El sonido es sólido para su tamaño y precio, sin pretensiones audiófilis pero con criterio.",
      sirveSi: [
        "Querés música en más de un cuarto sin mover un parlante Bluetooth",
        "Usás Spotify, Tidal o Apple Music y querés control desde el teléfono",
        "Empezás con uno y sabés que podés agregar más adelante",
        "El living o el escritorio son el destino principal",
      ],
      noSirveSi: [
        "Esperás bajos profundos de un parlante tan compacto",
        "Querés conectividad HDMI para la TV: este no tiene",
        "Tu ecosistema es Google / Chromecast exclusivamente (HEOS es de Denon/Marantz)",
      ],
    },
    specs: [
      { clave: "Conectividad", valor: "Wi-Fi, Bluetooth, AirPlay 2" },
      { clave: "Plataformas", valor: "HEOS, Spotify Connect, Tidal, Amazon Music" },
      { clave: "Potencia", valor: "40W" },
      { clave: "Dimensiones", valor: "120 × 167 × 120 mm" },
    ],
    alternativas: ["denon-dht-s218"],
    publicado: true,
  },
]

// Exportación filtrada (usada en páginas y build)
export const productos: Producto[] = filtrarParaBuild(_todos)

// Helper para página de detalle
export function getProductoBySlug(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug)
}

// Helper para catálogo por categoría
export function getProductosByCategoria(categoria: Categoria): Producto[] {
  return productos.filter((p) => p.categoria === categoria)
}

// Helper para situación
export function getProductosBySituacion(situacion: Situacion): Producto[] {
  return productos.filter((p) => p.situaciones.includes(situacion))
}
