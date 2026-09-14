// data/lifestyle.ts
// Línea lifestyle (Bose / Denon Home / Sonos). Precios ARS de staging
// tomados del brief 2026-08-11. Stock y reviews son placeholders.

export const WHATSAPP_NUMBER = "5491136228970"
export const CUOTAS_DEFAULT = 6

export type LifestyleCategoria = "Portátiles" | "Auriculares" | "Soundbars" | "Multiroom"
export type LifestyleMarca = "Bose" | "Denon" | "Sonos"

export interface LifestyleReview {
  autor: string
  ciudad: string
  fecha: string
  rating: number
  texto: string
  verificado: boolean
}

export interface LifestyleColor {
  nombre: string
  hex: string
}

export interface LifestyleProduct {
  id: string
  nombre: string
  marca: LifestyleMarca
  categoria: LifestyleCategoria
  precioARS: number
  stock: number
  frase: string
  descripcion: string
  idealPara: string[]
  specs: Record<string, string>
  imagen: string
  colores: LifestyleColor[]
  reviews: LifestyleReview[]
  featured: boolean
  secondary?: boolean
}

export const SHIPPING = {
  retiro: {
    id: "retiro" as const,
    label: "Retiro en Núñez o Palermo",
    costo: 0,
    plazo: "Hoy o mañana, coordinamos horario",
  },
  cabaGba: {
    id: "cabaGba" as const,
    label: "Envío CABA y GBA",
    costo: 12500,
    plazo: "24–48 hs hábiles",
  },
  interior: {
    id: "interior" as const,
    label: "Envío al interior",
    costo: 18900,
    plazo: "3–7 días hábiles",
  },
}

export type ShippingId = keyof typeof SHIPPING

export const lifestyleProducts: LifestyleProduct[] = [
  {
    id: "bose-soundlink-flex",
    nombre: "SoundLink Flex",
    marca: "Bose",
    categoria: "Portátiles",
    precioARS: 535999,
    stock: 6,
    featured: true,
    frase: "El parlante que se va con vos. IP67, grave que no parece de este tamaño.",
    descripcion:
      "El SoundLink Flex es el parlante Bluetooth que más sentido tiene si lo vas a usar de verdad: balcón, asado, viaje. Es chico, aguanta agua y polvo (IP67) y Bose le metió un grave que no corresponde al tamaño. No es un hi-fi de living — y no pretende serlo. Es el que prende en diez segundos y se escucha limpio. Lo traemos con stock, no bajo pedido.",
    idealPara: [
      "Llevar a la terraza, al río o de viaje",
      "Quien quiere un Bose que se escuche bien sin armar un sistema",
      "Regalo que no requiere explicación",
    ],
    specs: {
      Tipo: "Parlante Bluetooth portátil",
      Resistencia: "IP67 (agua y polvo)",
      Batería: "Hasta 12 hs",
      Conectividad: "Bluetooth 4.2",
      "Manos libres": "Micrófono incorporado",
      Peso: "590 g",
    },
    imagen: "/images/lifestyle/bose-soundlink-flex.svg",
    colores: [
      { nombre: "Black", hex: "#1A1A1A" },
      { nombre: "White Smoke", hex: "#E8E6E1" },
      { nombre: "Cypress Green", hex: "#3D4A3A" },
    ],
    reviews: [
      {
        autor: "Martín K.",
        ciudad: "Palermo",
        fecha: "2026-07-12",
        rating: 5,
        verificado: true,
        texto:
          "Lo uso en el balcón y se viene al auto el finde. Batería de sobra. El grave no es un sub, pero para el tamaño está muy bien. Lo compré acá porque en otro lado estaba bajo pedido.",
      },
      {
        autor: "Lucía F.",
        ciudad: "Núñez",
        fecha: "2026-06-28",
        rating: 4,
        verificado: true,
        texto:
          "Para llevar al río es ideal. No esperes un hi-fi: esperá un parlante que se escucha limpio y no se muere a la primera. El retiro en Núñez fue al toque.",
      },
      {
        autor: "Diego R.",
        ciudad: "Vicente López",
        fecha: "2026-05-19",
        rating: 5,
        verificado: true,
        texto:
          "Se lo regalamos a mi viejo y lo conectó solo. Eso ya vale el precio. Suena más grande de lo que es.",
      },
    ],
  },
  {
    id: "bose-soundlink-micro",
    nombre: "SoundLink Micro",
    marca: "Bose",
    categoria: "Portátiles",
    precioARS: 432399,
    stock: 8,
    featured: true,
    frase: "El Bose más chico. Entra en la mochila y se escucha más de lo que promete.",
    descripcion:
      "El Micro es la puerta de entrada a Bose: el ticket más bajo del portfolio y el que más se mueve. Correa de silicona, IP67, se engancha a la bici o a la mochila. Para un depto chico o para llevar, alcanza. Si buscás llenar un living, andá al Flex o al Denon Home 150.",
    idealPara: [
      "Primer parlante Bluetooth decente",
      "Mochila, bici, ducha (sí, IP67)",
      "Presupuesto más ajustado sin salir de Bose",
    ],
    specs: {
      Tipo: "Parlante Bluetooth ultra-portátil",
      Resistencia: "IP67",
      Batería: "Hasta 6 hs",
      Conectividad: "Bluetooth",
      Peso: "290 g",
      Extra: "Correa de silicona",
    },
    imagen: "/images/lifestyle/bose-soundlink-micro.svg",
    colores: [
      { nombre: "Black", hex: "#1A1A1A" },
      { nombre: "Stone Blue", hex: "#4A5C6A" },
    ],
    reviews: [
      {
        autor: "Sofía P.",
        ciudad: "Caballito",
        fecha: "2026-07-02",
        rating: 5,
        verificado: true,
        texto:
          "Entra en cualquier lado. Lo uso en la cocina y en el baño. Para el precio, no hay queja. Bose se nota.",
      },
      {
        autor: "Nico A.",
        ciudad: "La Plata",
        fecha: "2026-06-11",
        rating: 4,
        verificado: true,
        texto:
          "Es chiquito: no va a llenar un quincho. Para el depto y para viajar, perfecto. El envío al interior tardó 4 días.",
      },
    ],
  },
  {
    id: "bose-quietcomfort",
    nombre: "QuietComfort",
    marca: "Bose",
    categoria: "Auriculares",
    precioARS: 573999,
    stock: 4,
    featured: true,
    frase: "Cancelación de ruido que banca el subte y el avión. El QC de siempre, actualizado.",
    descripcion:
      "Los QuietComfort son el auricular over-ear que la gente pide cuando dice “quiero Bose”. ANC de verdad, comodidad para usar horas, y un perfil de sonido que no fatiga. Si venís del hi-fi, no son un HD 600: son para callar el mundo y escuchar bien. Si querés un paso más de resolución y ANC, el Ultra.",
    idealPara: [
      "Viaje, home office, subte",
      "Quien prioriza comodidad y cancelación",
      "Uso diario, no sesión crítica de mezcla",
    ],
    specs: {
      Tipo: "Over-ear inalámbricos",
      ANC: "Cancelación de ruido Bose",
      Batería: "Hasta 24 hs",
      Conectividad: "Bluetooth, jack 2.5 mm",
      Micrófonos: "Llamadas con ANC",
      Peso: "240 g aprox.",
    },
    imagen: "/images/lifestyle/bose-quietcomfort.svg",
    colores: [
      { nombre: "Black", hex: "#1A1A1A" },
      { nombre: "White Smoke", hex: "#E8E6E1" },
    ],
    reviews: [
      {
        autor: "Valentina M.",
        ciudad: "Recoleta",
        fecha: "2026-07-21",
        rating: 5,
        verificado: true,
        texto:
          "Viajo CABA–Ezeiza todas las semanas. El ANC banca el avión. Un toque de calor en la diadema a las 3 horas, nada grave.",
      },
      {
        autor: "Agustín T.",
        ciudad: "Belgrano",
        fecha: "2026-06-04",
        rating: 4,
        verificado: true,
        texto:
          "Para laburar en un depto con vecinos ruidosos es un gol. El sonido es cómodo, no analítico. Justo lo que quería.",
      },
      {
        autor: "Camila S.",
        ciudad: "Rosario",
        fecha: "2026-05-27",
        rating: 5,
        verificado: true,
        texto:
          "Los comparé con unos Sony de un amigo. Prefiero estos para usar todo el día. Llegaron al interior sin drama.",
      },
    ],
  },
  {
    id: "bose-quietcomfort-ultra",
    nombre: "QuietComfort Ultra",
    marca: "Bose",
    categoria: "Auriculares",
    precioARS: 772797,
    stock: 3,
    featured: true,
    frase: "El tope de Bose en la cabeza. Más resolución, inmersivo, el ANC más serio de la línea.",
    descripcion:
      "El Ultra es el QuietComfort cuando querés el modelo de arriba. Mejor escena, modo inmersivo y una cancelación un escalón más convincente. Vale la diferencia si los vas a usar muchas horas por semana. Si es para el avión dos veces al año, el QC alcanza y te sobra plata.",
    idealPara: [
      "Uso intensivo (oficina + viaje + diario)",
      "Quien ya tuvo QC y quiere el salto",
      "Quien escucha playlists y podcasts a volumen bajo, con ANC fuerte",
    ],
    specs: {
      Tipo: "Over-ear inalámbricos (tope de gama)",
      ANC: "Cancelación de ruido + modo inmersivo",
      Batería: "Hasta 24 hs",
      Conectividad: "Bluetooth 5.3, USB-C",
      Extra: "Bose Immersive Audio",
      Peso: "250 g aprox.",
    },
    imagen: "/images/lifestyle/bose-quietcomfort-ultra.svg",
    colores: [
      { nombre: "Black", hex: "#1A1A1A" },
      { nombre: "Lunar Blue", hex: "#2C3A4A" },
    ],
    reviews: [
      {
        autor: "Federico L.",
        ciudad: "Puerto Madero",
        fecha: "2026-07-08",
        rating: 5,
        verificado: true,
        texto:
          "Vengo de unos QC 45. El Ultra se siente más “grande” en la escena. Caro, sí. Si los usás todos los días, se justifica.",
      },
      {
        autor: "Inés G.",
        ciudad: "Córdoba",
        fecha: "2026-06-16",
        rating: 4,
        verificado: true,
        texto:
          "El ANC es bestial. El modo inmersivo es un gusto adquirido: a veces lo apago. La compra fue clara, cuotas a la vista.",
      },
    ],
  },
  {
    id: "bose-smart-soundbar",
    nombre: "Smart Soundbar",
    marca: "Bose",
    categoria: "Soundbars",
    precioARS: 1670000,
    stock: 2,
    featured: true,
    frase: "Una barra para la tele que se entiende sola. HDMI, voces claras, camino a un 5.1 después.",
    descripcion:
      "Acá sí entramos al living. La Smart Soundbar de Bose es para quien quiere que la tele suene como tele, no como parlantito delgado. Voces al frente, grave razonable sin sub (y se le puede agregar después). Es el ticket más alto de este arranque: si tu prioridad es un parlante para Spotify, no empieces por acá.",
    idealPara: [
      "Living con tele y ganas de dejar de usar los parlantes del TV",
      "Quien después puede sumar bass module / surrounds",
      "Setup simple: un cable HDMI y listo",
    ],
    specs: {
      Tipo: "Soundbar inteligente",
      Conectividad: "HDMI eARC, Bluetooth, Wi-Fi",
      Asistentes: "Alexa / Google (según versión)",
      Expansión: "Bass module y surrounds Bose",
      Audio: "Diálogos Bose + upmixing",
    },
    imagen: "/images/lifestyle/bose-smart-soundbar.svg",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
    reviews: [
      {
        autor: "Pablo H.",
        ciudad: "Olivos",
        fecha: "2026-07-30",
        rating: 5,
        verificado: true,
        texto:
          "Las voces de las series se entienden. Antes subía el volumen y molestaba a todo el depto. Un HDMI y funciona. Stock real, eso pesó.",
      },
      {
        autor: "Mariana V.",
        ciudad: "Palermo",
        fecha: "2026-04-22",
        rating: 4,
        verificado: true,
        texto:
          "Para películas está muy bien. Para música llena el living, pero si escuchás vinilo todos los días, el catálogo hi-fi de ellos es otra conversación — me lo dijeron ellos mismos.",
      },
    ],
  },
  {
    id: "denon-home-150",
    nombre: "Home 150",
    marca: "Denon",
    categoria: "Multiroom",
    precioARS: 555390,
    stock: 5,
    featured: true,
    frase: "Parlante de mesa con app HEOS. El hueco que nadie está cubriendo bien en Argentina.",
    descripcion:
      "El Home 150 es el parlante que se queda en un ambiente y lo hace bien: Wi-Fi, AirPlay 2, HEOS, Bluetooth de respaldo. Amplify ya trae Denon en hi-fi (PMA-600NE); esta es la línea plug-and-play de la misma casa. Si más adelante querés otro en el dormitorio, se agrupan. Hay pocos en el mercado y casi ninguno con stock visible.",
    idealPara: [
      "Un ambiente (living o escritorio) con Wi-Fi estable",
      "Quien ya usa AirPlay o quiere HEOS",
      "Empezar un sistema multiroom sin casarse con Sonos",
    ],
    specs: {
      Tipo: "Parlante wireless de mesa",
      App: "HEOS",
      Conectividad: "Wi-Fi, AirPlay 2, Bluetooth, Ethernet",
      Audio: "Tweeter + woofers, DSP Denon",
      Extra: "Agrupable con otros Denon Home",
    },
    imagen: "/images/lifestyle/denon-home-150.svg",
    colores: [
      { nombre: "Black", hex: "#1A1A1A" },
      { nombre: "White", hex: "#F2F0EA" },
    ],
    reviews: [
      {
        autor: "Javier M.",
        ciudad: "Núñez",
        fecha: "2026-07-14",
        rating: 5,
        verificado: true,
        texto:
          "Lo puse en el escritorio. AirPlay desde el iPhone y listo. Suena más “hi-fi” que un Bluetooth común, que es lo que quería.",
      },
      {
        autor: "Florencia B.",
        ciudad: "San Isidro",
        fecha: "2026-06-20",
        rating: 4,
        verificado: true,
        texto:
          "La app HEOS pide un minuto de paciencia la primera vez. Después no la tocás. Buen volumen para un living chico.",
      },
    ],
  },
  {
    id: "denon-dht-s218",
    nombre: "DHT-S218",
    marca: "Denon",
    categoria: "Soundbars",
    precioARS: 599825,
    stock: 4,
    featured: true,
    frase: "Soundbar de entrada Denon. DTS Virtual:X, HDMI, un precio que no está inflado.",
    descripcion:
      "La DHT-S218 es la barra para quien quiere mejorar la tele sin gastar lo de la Smart Soundbar Bose. DTS Virtual:X, Bluetooth y HDMI. En el mercado argentino el mismo modelo aparece con dispersión enorme de precio; acá lo publicamos claro, en pesos, con stock. No es cine 5.1. Es la tele, bien.",
    idealPara: [
      "Primer upgrade de audio de la tele",
      "Depto donde un subwoofer aparte no entra",
      "Presupuesto de soundbar de entrada",
    ],
    specs: {
      Tipo: "Soundbar 2.1 virtual",
      Audio: "DTS Virtual:X, Dolby Digital",
      Conectividad: "HDMI ARC, Bluetooth, óptica",
      Subwoofer: "Integrado (down-firing)",
      Ancho: "89 cm aprox.",
    },
    imagen: "/images/lifestyle/denon-dht-s218.svg",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
    reviews: [
      {
        autor: "Hernán C.",
        ciudad: "Almagro",
        fecha: "2026-07-05",
        rating: 4,
        verificado: true,
        texto:
          "Para series, un salto enorme contra la tele. Pelis de acción piden un sub aparte, pero a este precio no me quejo.",
      },
      {
        autor: "Laura D.",
        ciudad: "Mendoza",
        fecha: "2026-05-30",
        rating: 5,
        verificado: true,
        texto:
          "La instaló mi hermano en diez minutos. Voces claras. El envío al interior llegó en una semana.",
      },
    ],
  },
  {
    id: "sonos-era-100-sl",
    nombre: "Era 100 SL",
    marca: "Sonos",
    categoria: "Multiroom",
    precioARS: 555999,
    stock: 3,
    featured: false,
    secondary: true,
    frase: "El Sonos de volumen, sin micrófono. Para quien ya está en el ecosistema o quiere entrar barato.",
    descripcion:
      "No es nuestra cabeza de lanza — Bose y Denon Home lo son — pero el Era 100 SL es el Sonos que más se mueve. Sin micrófono, stereo real, app Sonos. Lo tenemos porque hay gente que ya vive en ese mundo. Si estás empezando de cero y no tenés otros Sonos, mirá primero el Denon Home 150 o el Flex.",
    idealPara: [
      "Quien ya tiene Sonos en casa",
      "Un ambiente sin ganas de Alexa escuchando",
      "Pareja de parlantes (dos SL) más adelante",
    ],
    specs: {
      Tipo: "Parlante wireless",
      App: "Sonos",
      Conectividad: "Wi-Fi, Bluetooth, AirPlay 2",
      Micrófono: "No (versión SL)",
      Audio: "Tweeter + woofers, stereo",
    },
    imagen: "/images/lifestyle/sonos-era-100-sl.svg",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
    reviews: [
      {
        autor: "Tomás E.",
        ciudad: "Palermo",
        fecha: "2026-06-22",
        rating: 4,
        verificado: true,
        texto:
          "Ya tenía un Ray. Sumé el SL al dormitorio. La app es la de siempre. Precio en cuotas, sin sorpresa.",
      },
    ],
  },
  {
    id: "sonos-roam-2",
    nombre: "Roam 2",
    marca: "Sonos",
    categoria: "Portátiles",
    precioARS: 520000,
    stock: 4,
    featured: false,
    secondary: true,
    frase: "El Sonos de mochila. Si ya usás la app, es el que se va de viaje.",
    descripcion:
      "Roam 2 es el portátil de Sonos. IP67, carga inalámbrica, Sound Swap con otros Sonos. Lo listamos porque se busca. Si no estás en Sonos, el SoundLink Micro o el Flex te van a resultar más directos — y son donde ponemos el foco.",
    idealPara: [
      "Usuarios Sonos que quieren uno para llevar",
      "Viaje + living (vuelve a la red Wi-Fi en casa)",
    ],
    specs: {
      Tipo: "Parlante Bluetooth / Wi-Fi portátil",
      Resistencia: "IP67",
      Batería: "Hasta 10 hs",
      Conectividad: "Wi-Fi, Bluetooth, AirPlay 2",
      Carga: "USB-C y Qi",
    },
    imagen: "/images/lifestyle/sonos-roam-2.svg",
    colores: [
      { nombre: "Black", hex: "#1A1A1A" },
      { nombre: "White", hex: "#F2F0EA" },
    ],
    reviews: [
      {
        autor: "Elena Q.",
        ciudad: "Colegiales",
        fecha: "2026-07-01",
        rating: 4,
        verificado: true,
        texto:
          "Lo llevé a Uruguay un finde. Bluetooth afuera, Wi-Fi en casa. Para el tamaño está bien. Si no tenés Sonos, el Flex me pareció más parlante.",
      },
    ],
  },
]

export const CATEGORIAS_LIFESTYLE: Array<"Todos" | LifestyleCategoria> = [
  "Todos",
  "Portátiles",
  "Auriculares",
  "Soundbars",
  "Multiroom",
]

export function getLifestyleById(id: string): LifestyleProduct | undefined {
  return lifestyleProducts.find((p) => p.id === id)
}

export function getFeaturedLifestyle(): LifestyleProduct[] {
  return lifestyleProducts.filter((p) => p.featured)
}

export function getSecondaryLifestyle(): LifestyleProduct[] {
  return lifestyleProducts.filter((p) => p.secondary)
}

export function averageRating(product: LifestyleProduct): number {
  if (product.reviews.length === 0) return 0
  const sum = product.reviews.reduce((acc, r) => acc + r.rating, 0)
  return Math.round((sum / product.reviews.length) * 10) / 10
}
