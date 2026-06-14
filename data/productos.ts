// data/productos.ts
// ─────────────────────────────────────────────────────────────
// CÓMO EDITAR: cada objeto en el array `productos` es un producto.
// Para agregar uno nuevo, copiá un bloque existente y cambiá los valores.
// El campo `id` debe ser único, en minúsculas, con guiones (ej: "wiim-ultra").
// El campo `imagen` apunta a un archivo en /public/images/products/.
// El campo `encajaCon` es un array de `id`s de otros productos relacionados.
// ─────────────────────────────────────────────────────────────

export interface ColorVariante {
  nombre: string
  hex: string
  imagen?: string
}

export interface Producto {
  id: string
  nombre: string
  marca: string
  categoria: "Amplificadores" | "DACs" | "Streamers" | "Parlantes" | "Auriculares" | "Tocadiscos" | "Accesorios" | "Combos"
  precio: string
  frase: string
  imagen: string
  descripcion: string
  idealPara: string[]
  specs: Record<string, string>
  encajaCon: string[]
  badge: string
  colores: ColorVariante[]
}

export const WHATSAPP_NUMBER = "5491136228970"

export const productos: Producto[] = [
  // ── AURICULARES ──────────────────────────────────────────────
  {
    id: "sennheiser-hd-600",
    nombre: "HD 600",
    marca: "Sennheiser",
    categoria: "Auriculares",
    precio: "USD 310",
    frase: "Auricular abierto de referencia, estándar de la industria desde 1997.",
    imagen: "/images/products/auriculares-sennheiser-hd600.png",
    descripcion:
      "El Sennheiser HD 600 es uno de los auriculares más respetados en la historia del audio. Su driver de aluminio de 38mm ofrece una respuesta en frecuencia lineal y natural, sin coloraciones artificiales. Es el punto de partida preferido por ingenieros de sonido y audiófilos para escucha crítica.",
    idealPara: [
      "Escucha crítica y análisis musical",
      "Usuarios que buscan neutralidad sin fatiga auditiva",
      "Primer auricular de referencia Hi-Fi",
    ],
    specs: {
      Tipo: "Circumaural abierto",
      Driver: "38mm dinámico (aluminio)",
      "Respuesta en frecuencia": "12Hz – 39kHz",
      Impedancia: "300 Ohm",
      Sensibilidad: "97dB SPL/1V",
      THD: "<0.1% (1kHz, 100dB SPL)",
    },
    encajaCon: ["ifi-hip-dac-3"],
    badge: "Entrega inmediata",
    colores: [{ nombre: "Graphite", hex: "#3D3D3D" }],
  },
  {
    id: "sennheiser-hd-650",
    nombre: "HD 650",
    marca: "Sennheiser",
    categoria: "Auriculares",
    precio: "USD 410",
    frase: "La evolución del HD 600: más cálido, más detallado, más musical.",
    imagen: "/images/products/auriculares-sennheiser-hd650.png",
    descripcion:
      "El Sennheiser HD 650 es la versión refinada del HD 600, con un sonido ligeramente más cálido y una presentación de graves más profunda. Usado durante años como referencia por músicos y productores, equilibra neutralidad y musicalidad de una manera difícil de superar en su rango de precio.",
    idealPara: [
      "Escucha prolongada sin fatiga",
      "Géneros con mucha dinámica: jazz, clásica, folk",
      "Usuarios que buscan más calidez que el HD 600",
    ],
    specs: {
      Tipo: "Circumaural abierto",
      Driver: "40mm dinámico mejorado",
      "Respuesta en frecuencia": "10Hz – 41kHz",
      Impedancia: "300 Ohm",
      Sensibilidad: "103dB SPL/1V",
      THD: "<0.05%",
    },
    encajaCon: ["ifi-hip-dac-3"],
    badge: "Entrega inmediata",
    colores: [{ nombre: "Charcoal", hex: "#2A2A2A" }],
  },

  // ── DACs ─────────────────────────────────────────────────────
  {
    id: "ifi-hip-dac-3",
    nombre: "Hip-Dac 3",
    marca: "iFi",
    categoria: "DACs",
    precio: "USD 270",
    frase: "DAC/amplificador portátil con salida balanceada y soporte para alta resolución.",
    imagen: "/images/products/dac-ifi-hip-dac3.png",
    descripcion:
      "El iFi Hip-Dac 3 es un DAC/amplificador de auriculares diseñado para usar con el celular o la computadora. Compacto pero potente: incluye salida balanceada de 4.4mm, soporte para DSD256 y MQA, y batería interna para uso portátil. La forma más efectiva de mejorar drásticamente el sonido de tus auriculares.",
    idealPara: [
      "Mejorar el sonido de auriculares de alta impedancia desde el celular",
      "Uso portátil o en escritorio",
      "Usuarios con auriculares Sennheiser HD 600/650",
    ],
    specs: {
      DAC: "Burr-Brown",
      Entradas: "USB-C",
      Salidas: "3.5mm, 4.4mm balanceado",
      "Resolución máxima": "PCM 384kHz/32-bit, DSD256, MQA",
      "Potencia": "400mW @32Ω (balanceado)",
      Batería: "Hasta 12hs",
    },
    encajaCon: ["sennheiser-hd-600", "sennheiser-hd-650"],
    badge: "Entrega inmediata",
    colores: [{ nombre: "Yellow", hex: "#C4A35A" }],
  },

  // ── AMPLIFICADORES ───────────────────────────────────────────
  {
    id: "wiim-amp-ultra",
    nombre: "Amp Ultra",
    marca: "WiiM",
    categoria: "Amplificadores",
    precio: "USD 780",
    frase: "Amplificador integrado con streaming, DAC ESS y Dirac Live incorporado.",
    imagen: "/images/products/amplificador-wiim-amp-ultra.png",
    descripcion:
      "El WiiM Amp Ultra combina amplificador de 2×120W, streamer de alta resolución, DAC ESS y corrección de sala Dirac Live en un solo equipo. Es la solución definitiva para quien quiere calidad audiófila sin armar un rack completo: conectás tus parlantes pasivos y tenés un sistema completo en minutos.",
    idealPara: [
      "Setup con parlantes pasivos y sin componentes separados",
      "Usuarios que quieren streaming + amplificación en un equipo",
      "Salas donde la corrección acústica hace diferencia",
    ],
    specs: {
      Potencia: "2×120W @4Ω",
      DAC: "ESS ES9038Q2M",
      Conectividad: "Wi-Fi 6, Bluetooth 5.3, AirPlay 2, Chromecast",
      Entradas: "RCA, Óptica, Coaxial, HDMI ARC",
      "Corrección de sala": "Dirac Live Basic (incluido)",
      Dimensiones: "216 × 216 × 58mm",
    },
    encajaCon: ["music-hall-mmf-1-3"],
    badge: "Entrega inmediata",
    colores: [{ nombre: "Space Grey", hex: "#5A5F6E" }],
  },
  {
    id: "denon-pma-600ne",
    nombre: "PMA-600NE",
    marca: "Denon",
    categoria: "Amplificadores",
    precio: "USD 800",
    frase: "Amplificador integrado con DAC incorporado y salida de auriculares dedicada.",
    imagen: "/images/products/amplificador-denon-pma-600ne.png",
    descripcion:
      "El Denon PMA-600NE es un amplificador integrado que combina calidad de construcción japonesa con funcionalidad moderna. Sus 70W por canal manejan con solvencia la mayoría de los parlantes del mercado, y su DAC incorporado permite conectar la computadora vía USB para un sonido de alta resolución.",
    idealPara: [
      "Setup de living con parlantes de estante o torre",
      "Usuarios que quieren amplificador + DAC en un solo equipo",
      "Primer sistema Hi-Fi de calidad con presupuesto definido",
    ],
    specs: {
      Potencia: "2×70W @4Ω",
      "DAC incorporado": "192kHz/32-bit",
      Entradas: "4×RCA, USB-DAC, Óptica, Coaxial",
      "Salida auriculares": "6.35mm",
      "Respuesta en frecuencia": "10Hz – 100kHz",
      Dimensiones: "434 × 130 × 372mm",
    },
    encajaCon: ["music-hall-mmf-1-3"],
    badge: "Entrega inmediata",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
  },

  // ── STREAMERS ────────────────────────────────────────────────
  {
    id: "wiim-ultra",
    nombre: "Ultra",
    marca: "WiiM",
    categoria: "Streamers",
    precio: "USD 410",
    frase: "Streamer todo-en-uno con DAC integrado y corrección de sala.",
    imagen: "/images/products/streamer-wiim-ultra.png",
    descripcion:
      "El WiiM Ultra es el streamer más completo de la línea WiiM. Combina streaming de alta resolución, DAC integrado, preamplificador y corrección de sala en un solo equipo compacto. Una solución sin compromisos para quien quiere calidad digital sin armar un rack completo.",
    idealPara: [
      "Primer equipo de streaming Hi-Fi",
      "Escritorios con parlantes activos",
      "Usuarios que quieren una solución todo-en-uno",
    ],
    specs: {
      DAC: "ESS ES9038Q2M",
      Conectividad: "Wi-Fi 6, Bluetooth 5.3, AirPlay 2, Chromecast, HDMI eARC",
      Salidas: "RCA, Óptica, Subwoofer, Auriculares 6.35mm",
      "Resolución máxima": "PCM 384kHz/32-bit, DSD256",
      "Corrección de sala": "Sí (micrófono incluido)",
      Dimensiones: "213 × 213 × 38mm",
    },
    encajaCon: ["wiim-amp-ultra", "denon-pma-600ne"],
    badge: "Entrega inmediata",
    colores: [{ nombre: "Space Grey", hex: "#5A5F6E" }],
  },
  {
    id: "wiim-pro-plus",
    nombre: "Pro Plus",
    marca: "WiiM",
    categoria: "Streamers",
    precio: "USD 250",
    frase: "Streamer compacto con salida balanceada XLR y alta resolución.",
    imagen: "/images/products/streamer-wiim-pro-plus.png",
    descripcion:
      "El WiiM Pro Plus es la versión mejorada del WiiM Pro, con salida analógica balanceada XLR para conectar a amplificadores o preamplificadores de mayor calidad. Su DAC ESS ofrece soporte para alta resolución y es compatible con todas las plataformas de streaming principales.",
    idealPara: [
      "Agregar streaming a un sistema Hi-Fi existente",
      "Usuarios con amplificador que acepte entrada balanceada",
      "Primera actualización digital a un sistema analógico",
    ],
    specs: {
      DAC: "ESS ES9038Q2M",
      Conectividad: "Wi-Fi, Bluetooth 5.0, AirPlay 2, Chromecast",
      Salidas: "RCA, XLR balanceado, Coaxial, Óptica",
      "Resolución máxima": "PCM 192kHz/24-bit",
      Dimensiones: "100 × 100 × 28mm",
    },
    encajaCon: ["wiim-amp-ultra", "denon-pma-600ne"],
    badge: "Sold Out",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
  },

  // ── TOCADISCOS ───────────────────────────────────────────────
  {
    id: "music-hall-mmf-1-3",
    nombre: "MMF-1.3",
    marca: "Music Hall",
    categoria: "Tocadiscos",
    precio: "USD 699",
    frase: "Tocadiscos de entrada con preamplificador phono integrado y cápsula incluida.",
    imagen: "/images/products/tocadiscos-music-hall-mmf-1-3.png",
    descripcion:
      "El Music Hall MMF-1.3 es un tocadiscos de entrada diseñado para sonar bien desde el primer día. Incluye preamplificador phono incorporado, cápsula Audio-Technica AT3600L y plato MDF con alfombrilla. Todo lo necesario para escuchar vinilos con buena calidad sin complicaciones.",
    idealPara: [
      "Primer tocadiscos de calidad",
      "Usuarios que quieren escuchar vinilos sin configurar nada extra",
      "Setup compacto donde el espacio importa",
    ],
    specs: {
      Motor: "DC (33/45 RPM)",
      Brazo: "Music Hall (aluminio extruido)",
      Cápsula: "Audio-Technica AT3600L (incluida)",
      Plato: "MDF con alfombrilla de goma",
      "Preamplificador phono": "Incorporado (MM)",
      Salida: "RCA",
    },
    encajaCon: ["wiim-amp-ultra", "denon-pma-600ne"],
    badge: "Entrega inmediata",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
  },

  // ── PARLANTES ────────────────────────────────────────────────
  {
    id: "kanto-yu6mb",
    nombre: "YU6",
    marca: "Kanto",
    categoria: "Parlantes",
    precio: "USD 949",
    frase: "Parlantes activos con Bluetooth, fono integrado y 200W de potencia total.",
    imagen: "/images/products/parlantes-kanto-yu6mb.png",
    descripcion:
      "Los Kanto YU6 son parlantes activos de dos vías que no necesitan amplificador externo. Con 200W totales biamplificados, Bluetooth 5.0 con aptX, preamplificador phono integrado para tocadiscos y múltiples entradas digitales y analógicas, son la solución todo-en-uno más completa del mercado para uso en escritorio o living.",
    idealPara: [
      "Setup sin amplificador: conectás directamente el streamer o el tocadiscos",
      "Escritorios donde el espacio y la simplicidad son clave",
      "Usuarios que quieren Bluetooth de alta calidad sin sacrificar sonido Hi-Fi",
    ],
    specs: {
      Tipo: "Activos biamplificados, 2 vías",
      Potencia: "200W total (100W woofer + 100W tweeter por par)",
      Drivers: "5.25\" woofer + 1\" tweeter silk dome",
      Conectividad: "Bluetooth 5.0 aptX",
      Entradas: "2× Óptica, 2× RCA, USB-C, 3.5mm AUX, Phono MM",
      Salidas: "Subwoofer RCA, auriculares 3.5mm",
    },
    encajaCon: ["wiim-pro-plus", "wiim-ultra", "music-hall-mmf-1-3"],
    badge: "Próximamente",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
  },
  {
    id: "elac-debut-3-0",
    nombre: "Debut 3.0 DB63",
    marca: "ELAC",
    categoria: "Parlantes",
    precio: "USD 849",
    frase: "Parlantes pasivos de estante diseñados por Andrew Jones, referencia en su rango de precio.",
    imagen: "/images/products/parlantes-elac-debut-3-0.png",
    descripcion:
      "Los ELAC Debut 3.0 son la última evolución de la serie que revolucionó el segmento de entrada Hi-Fi. Diseñados por Andrew Jones, exingeniero de TAD y Pioneer, combinan un woofer de fibra de aramida con un tweeter de seda para lograr un sonido coherente, detallado y sin fatiga auditiva. Requieren amplificador externo.",
    idealPara: [
      "Primer par de parlantes pasivos de calidad Hi-Fi",
      "Setup de living o escritorio con amplificador integrado",
      "Usuarios que buscan el mejor sonido en su rango de precio",
    ],
    specs: {
      Tipo: "Pasivos, 2 vías, estante",
      Drivers: "5.25\" woofer aramida + 1\" tweeter silk dome",
      "Respuesta en frecuencia": "46Hz – 35kHz",
      Sensibilidad: "87dB (2.83V/1m)",
      Impedancia: "6 Ohm nominal",
      Dimensiones: "175 × 290 × 245mm",
    },
    encajaCon: ["cambridge-audio-axa35", "wiim-amp-ultra", "denon-pma-600ne"],
    badge: "Próximamente",
    colores: [{ nombre: "Walnut", hex: "#8B5E3C" }],
  },

  {
    id: "kef-q1-meta",
    nombre: "Q1 Meta",
    marca: "KEF",
    categoria: "Parlantes",
    precio: "USD 679",
    frase: "Parlantes de estante con tecnología Uni-Q y absorción Meta de segunda generación.",
    imagen: "/images/products/parlantes-kef-q1-meta.png",
    descripcion:
      "Los KEF Q1 Meta son parlantes de estante de dos vías que incorporan el driver Uni-Q de KEF: tweeter de aluminio de 1\" ubicado en el centro exacto del woofer de 5.25\", lo que permite que ambos drivers emitan sonido desde el mismo punto en el espacio. La tecnología Meta absorbe el sonido no deseado proveniente de la parte trasera del tweeter, reduciendo la distorsión y mejorando la claridad en medios y altos. Requieren amplificador externo.",
    idealPara: [
      "Usuarios que buscan una imagen estéreo precisa y envolvente",
      "Setup de living o escritorio con amplificador integrado",
      "Quienes quieren tecnología de driver coaxial a precio accesible",
    ],
    specs: {
      Tipo: "Pasivos, 2 vías, estante",
      Driver: "Uni-Q: 1\" tweeter aluminio + 5.25\" bass/mid aluminio",
      "Tecnología": "Meta — absorción de resonancias internas del tweeter",
      "Respuesta en frecuencia": "79Hz – 28kHz",
      Sensibilidad: "86dB (2.83V/1m)",
      Impedancia: "8 Ohm nominal",
    },
    encajaCon: ["cambridge-audio-axa35", "wiim-amp-ultra", "denon-pma-600ne"],
    badge: "Próximamente",
    colores: [{ nombre: "Black", hex: "#1A1A1A" }],
  },

  // ── TOCADISCOS (nuevos) ───────────────────────────────────────
  {
    id: "fluance-rt85",
    nombre: "RT85",
    marca: "Fluance",
    categoria: "Tocadiscos",
    precio: "USD 899",
    frase: "Tocadiscos de referencia con cápsula Ortofon 2M Blue y plato acrílico.",
    imagen: "/images/products/tocadiscos-fluance-rt85.png",
    descripcion:
      "El Fluance RT85 es el tocadiscos de referencia de entrada a medio rango. Incluye la cápsula Ortofon 2M Blue, una de las más respetadas en la comunidad audiófila, montada sobre un brazo de aluminio con contrapeso ajustable. El plato de acrílico reduce las resonancias del motor y eleva notablemente la resolución del sonido. Requiere preamplificador phono externo o amplificador con entrada phono.",
    idealPara: [
      "Amantes del vinilo que quieren dar el salto a una cápsula de referencia",
      "Setup con amplificador que tenga entrada phono MM",
      "Usuarios que buscan máximo detalle y escena sonora en vinilos",
    ],
    specs: {
      Accionamiento: "Correa (belt drive)",
      Brazo: "Aluminio en S, contrapeso ajustable",
      Cápsula: "Ortofon 2M Blue (incluida)",
      Plato: "Acrílico con alfombrilla antivibración",
      Velocidades: "33 / 45 RPM",
      "Preamplificador phono": "No incluido (requiere externo o entrada phono en el amp)",
    },
    encajaCon: ["cambridge-audio-axa35", "denon-pma-600ne"],
    badge: "Próximamente",
    colores: [{ nombre: "Walnut", hex: "#8B5E3C" }],
  },
  {
    id: "pro-ject-debut-evo-2",
    nombre: "Debut EVO 2",
    marca: "Pro-Ject",
    categoria: "Tocadiscos",
    precio: "USD 1.229",
    frase: "El tocadiscos europeo de referencia, rediseñado con brazo de aluminio de 8.6\".",
    imagen: "/images/products/tocadiscos-pro-ject-debut-evo-2.png",
    descripcion:
      "El Pro-Ject Debut EVO 2 es la última versión del tocadiscos más vendido de la historia de la marca austriaca. Construido con un chasis MDF con aislamiento vibracional mejorado, brazo de aluminio de 8.6\" y control electrónico de velocidades, combina precisión de ingeniería europea con facilidad de uso. Incluye cápsula Ortofon OM10 y requiere preamplificador phono externo.",
    idealPara: [
      "Usuarios que quieren lo mejor del vinilo europeo en su rango de precio",
      "Setup con amplificador integrado con entrada phono",
      "Audiófilos que priorizan materiales y construcción de calidad",
    ],
    specs: {
      Accionamiento: "Correa (belt drive)",
      Brazo: "Aluminio 8.6\", antiskating y contrapeso ajustable",
      Cápsula: "Ortofon OM10 (incluida)",
      Plato: "MDF con alfombrilla de goma",
      Velocidades: "33 / 45 / 78 RPM (electrónico)",
      "Preamplificador phono": "No incluido",
    },
    encajaCon: ["cambridge-audio-axa35", "denon-pma-600ne"],
    badge: "Próximamente",
    colores: [
      { nombre: "Satin Black", hex: "#2D2D2D" },
      { nombre: "Satin Red", hex: "#410713", imagen: "/images/products/tocadiscos-pro-ject-debut-evo-2-red.png" },
    ],
  },

  // ── COMBOS ───────────────────────────────────────────────────
  {
    id: "combo-wiim-amp-ultra-mmf-1-3",
    nombre: "Amp Ultra + MMF-1.3",
    marca: "WiiM + Music Hall",
    categoria: "Combos",
    precio: "USD 1.349",
    frase: "Sistema completo: streaming, amplificación y vinilo en un solo combo.",
    imagen: "/images/products/amplificador-wiim-amp-ultra.png",
    descripcion:
      "El combo ideal para quien quiere un sistema Hi-Fi completo desde el día uno. El WiiM Amp Ultra maneja el streaming y la amplificación con Dirac Live, mientras el Music Hall MMF-1.3 se encarga del vinilo. Solo necesitás agregar parlantes pasivos.",
    idealPara: [
      "Sistema Hi-Fi completo sin componentes adicionales",
      "Usuarios que quieren streaming y vinilo en un solo setup",
      "Living room con parlantes pasivos existentes",
    ],
    specs: {
      Incluye: "WiiM Amp Ultra + Music Hall MMF-1.3",
      Amplificación: "2×120W @4Ω con Dirac Live",
      Streaming: "Wi-Fi 6, AirPlay 2, Chromecast, Bluetooth 5.3",
      Tocadiscos: "Motor DC, cápsula AT3600L, phono integrado",
      Ahorro: "USD 130 vs compra separada",
    },
    encajaCon: [],
    badge: "Entrega inmediata",
    colores: [],
  },
  {
    id: "combo-denon-pma-600ne-mmf-1-3",
    nombre: "PMA-600NE + MMF-1.3",
    marca: "Denon + Music Hall",
    categoria: "Combos",
    precio: "USD 1.369",
    frase: "Amplificación japonesa de calidad y vinilo analógico en un combo.",
    imagen: "/images/products/amplificador-denon-pma-600ne.png",
    descripcion:
      "El Denon PMA-600NE y el Music Hall MMF-1.3 forman un sistema analógico de referencia a precio accesible. El Denon aporta su característica calidez japonesa y 70W por canal, mientras el Music Hall se encarga de leer vinilos con precisión. Un setup clásico y confiable.",
    idealPara: [
      "Sistema analógico completo con calidad japonesa",
      "Usuarios que priorizan vinilo y sonido cálido",
      "Setup de living con amplificador dedicado",
    ],
    specs: {
      Incluye: "Denon PMA-600NE + Music Hall MMF-1.3",
      Amplificación: "2×70W @4Ω con DAC USB incorporado",
      Tocadiscos: "Motor DC, cápsula AT3600L, phono integrado",
      Ahorro: "USD 130 vs compra separada",
    },
    encajaCon: [],
    badge: "Entrega inmediata",
    colores: [],
  },
  {
    id: "combo-hd-650-hip-dac-3",
    nombre: "HD 650 + Hip-Dac 3",
    marca: "Sennheiser + iFi",
    categoria: "Combos",
    precio: "USD 619",
    frase: "El setup de auriculares más equilibrado para escucha crítica.",
    imagen: "/images/products/auriculares-sennheiser-hd650.png",
    descripcion:
      "El Sennheiser HD 650 y el iFi Hip-Dac 3 son una combinación probada en la comunidad audiófila. El Hip-Dac 3 provee la potencia y la fuente limpia que los 300 Ohm del HD 650 necesitan, mientras el auricular entrega su sonido cálido y detallado sin limitaciones.",
    idealPara: [
      "Setup de escritorio o bedroom Hi-Fi con auriculares",
      "Escucha crítica y prolongada",
      "Usuarios que quieren lo mejor de auriculares abiertos",
    ],
    specs: {
      Incluye: "Sennheiser HD 650 + iFi Hip-Dac 3",
      Auricular: "Circumaural abierto, 300 Ohm, 10Hz–41kHz",
      DAC: "Burr-Brown, salida balanceada 4.4mm, hasta DSD256",
      Ahorro: "USD 61 vs compra separada",
    },
    encajaCon: [],
    badge: "Entrega inmediata",
    colores: [],
  },
  {
    id: "combo-hd-600-hip-dac-3",
    nombre: "HD 600 + Hip-Dac 3",
    marca: "Sennheiser + iFi",
    categoria: "Combos",
    precio: "USD 529",
    frase: "Neutralidad de referencia con la fuente perfecta para auriculares de alta impedancia.",
    imagen: "/images/products/auriculares-sennheiser-hd600.png",
    descripcion:
      "El HD 600 es conocido por su respuesta lineal y su capacidad de revelar todo lo que está en la grabación. El iFi Hip-Dac 3 provee la corriente necesaria para manejar sus 300 Ohm con comodidad, y agrega resolución digital de alta calidad. Una combinación sin concesiones.",
    idealPara: [
      "Escucha neutral y analítica",
      "Ingenieros y productores musicales",
      "Primer setup audiófilo de referencia",
    ],
    specs: {
      Incluye: "Sennheiser HD 600 + iFi Hip-Dac 3",
      Auricular: "Circumaural abierto, 300 Ohm, 12Hz–39kHz",
      DAC: "Burr-Brown, salida balanceada 4.4mm, hasta DSD256",
      Ahorro: "USD 51 vs compra separada",
    },
    encajaCon: [],
    badge: "Entrega inmediata",
    colores: [],
  },

  // ── NUEVOS — AMPLIFICADORES ──────────────────────────────────
  {
    id: "rega-brio",
    nombre: "Brio",
    marca: "Rega",
    categoria: "Amplificadores",
    precio: "USD —",
    frase: "Amplificador integrado británico con etapa phono MM de alta calidad.",
    imagen: "/images/products/amplificador-rega-brio.png",
    descripcion:
      "El Rega Brio es el amplificador integrado de referencia de la marca británica. Con 50W por canal en Clase A/B y una etapa phono MM internamente célebre, es la opción natural para completar un setup con tocadiscos. Construcción compacta y sonido dinámico sin coloraciones.",
    idealPara: [
      "Setup con tocadiscos que no quieran preamplificador phono externo",
      "Usuarios que buscan amplificación británica de referencia",
      "Primer amplificador integrado de calidad Hi-Fi",
    ],
    specs: {
      Potencia: "2×50W @8Ω",
      "Etapa phono": "MM incorporada",
      Entradas: "4× RCA, phono MM",
      "Salida auriculares": "6.35mm",
      Origen: "UK",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "cambridge-audio-axa35",
    nombre: "AXA35",
    marca: "Cambridge Audio",
    categoria: "Amplificadores",
    precio: "USD —",
    frase: "Amplificador integrado compacto con phono MM y cinco entradas analógicas.",
    imagen: "/images/products/amplificador-cambridge-axa35.png",
    descripcion:
      "El Cambridge Audio AXA35 es el amplificador integrado de entrada de la serie AX. Con 35W por canal, etapa phono MM incorporada y cinco entradas analógicas, ofrece todo lo necesario para un primer sistema Hi-Fi sin complicaciones. Diseño clásico Cambridge en un formato compacto.",
    idealPara: [
      "Primer amplificador integrado con entrada para tocadiscos",
      "Setup de living o escritorio con parlantes pasivos",
      "Usuarios que buscan simplicidad y calidad British Hi-Fi",
    ],
    specs: {
      Potencia: "2×35W @8Ω",
      "Etapa phono": "MM incorporada",
      Entradas: "5× RCA analógico (incluye phono)",
      "Salida auriculares": "3.5mm",
      Dimensiones: "430 × 80 × 310mm",
    },
    encajaCon: ["elac-debut-3-0", "kef-q1-meta", "fluance-rt85", "pro-ject-debut-evo-2"],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "marantz-model-60n",
    nombre: "Model 60n",
    marca: "Marantz",
    categoria: "Amplificadores",
    precio: "USD —",
    frase: "Receiver integrado con streaming HEOS, AirPlay 2 y 60W por canal.",
    imagen: "",
    descripcion:
      "El Marantz Model 60n combina amplificación de 60W por canal con streaming integrado vía HEOS y AirPlay 2. Incluye DAC de alta resolución, bluetooth aptX HD y múltiples entradas digitales y analógicas. La solución all-in-one para quienes buscan el sonido cálido de Marantz con conectividad moderna.",
    idealPara: [
      "Setup todo-en-uno sin streamer externo",
      "Usuarios que quieren el sonido Marantz con streaming integrado",
      "Living con parlantes pasivos y uso mixto (streaming + vinilo)",
    ],
    specs: {
      Potencia: "2×60W @8Ω",
      Streaming: "HEOS, AirPlay 2, Bluetooth aptX HD",
      Entradas: "Analógicas, Óptica, Coaxial, USB, Phono MM/MC",
      DAC: "Alta resolución 384kHz/32-bit",
      Conectividad: "Wi-Fi, Ethernet",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "nad-c700-v2",
    nombre: "C 700 V2",
    marca: "NAD",
    categoria: "Amplificadores",
    precio: "USD —",
    frase: "Amplificador streaming con BluOS, Dirac Live y 80W por canal.",
    imagen: "/images/products/amplificador-nad-c700-v2.png",
    descripcion:
      "El NAD C 700 V2 es un amplificador streaming all-in-one con la plataforma BluOS integrada. Sus 80W por canal en Clase D de alta eficiencia van acompañados de Dirac Live para corrección de sala, AirPlay 2, Chromecast y soporte para alta resolución. La propuesta más completa de NAD en formato compacto.",
    idealPara: [
      "Setup moderno con parlantes pasivos y sin separados",
      "Usuarios que quieren Dirac Live sin pagar el precio del WiiM Amp Ultra",
      "Sistemas donde el espacio es limitado",
    ],
    specs: {
      Potencia: "2×80W @4Ω",
      Streaming: "BluOS, AirPlay 2, Chromecast, Bluetooth",
      "Corrección de sala": "Dirac Live (licencia incluida)",
      DAC: "384kHz/32-bit",
      Dimensiones: "217 × 217 × 57mm",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },

  // ── NUEVOS — STREAMERS / CD PLAYERS ─────────────────────────
  {
    id: "marantz-cd6007",
    nombre: "CD6007",
    marca: "Marantz",
    categoria: "Streamers",
    precio: "USD —",
    frase: "Reproductor de CD con DAC de alta resolución y salida digital.",
    imagen: "/images/products/streamer-marantz-cd6007.png",
    descripcion:
      "El Marantz CD6007 es el reproductor de CD de referencia de la línea actual de Marantz. Incluye DAC de alta resolución, salida digital coaxial y óptica, y el característico sonido cálido de la marca japonesa. Una pieza fundamental para quienes mantienen colección de CDs.",
    idealPara: [
      "Audiencias con colección de CDs que quieren extraer lo mejor del formato",
      "Setup con amplificador integrado sin DAC incorporado",
      "Usuarios que buscan la calidez analógica del sonido Marantz",
    ],
    specs: {
      Formato: "CD, CD-R/RW",
      DAC: "192kHz/24-bit",
      Salidas: "RCA analógico, Coaxial digital, Óptica digital",
      "Respuesta en frecuencia": "2Hz – 20kHz",
      "Relación señal/ruido": "115dB",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "eversolo-play-cd",
    nombre: "Play CD Edition",
    marca: "Eversolo",
    categoria: "Streamers",
    precio: "USD —",
    frase: "Streamer con lector de CD integrado, pantalla táctil y DAC ESS.",
    imagen: "/images/products/streamer-eversolo-play-cd.png",
    descripcion:
      "El Eversolo Play CD Edition combina un streamer de red completo con un lector de CD integrado. Pantalla táctil a color, DAC ESS de alta resolución, soporte para Roon, Tidal Connect, AirPlay 2 y más. El equipo más versátil para quien quiere gestionar colección física y streaming desde un solo dispositivo.",
    idealPara: [
      "Usuarios con colección de CDs y suscripción a streaming",
      "Setup donde se quiere un solo equipo fuente",
      "Audiófilos que quieren Roon Ready con reproducción física",
    ],
    specs: {
      DAC: "ESS ES9038Q2M",
      Streaming: "Roon Ready, Tidal Connect, AirPlay 2, Spotify Connect",
      Lector: "CD integrado",
      Pantalla: "Táctil a color",
      Salidas: "RCA, XLR balanceado, Coaxial, Óptica",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },

  // ── NUEVOS — PARLANTES ───────────────────────────────────────
  {
    id: "wharfedale-super-denton",
    nombre: "Super Denton",
    marca: "Wharfedale",
    categoria: "Parlantes",
    precio: "USD —",
    frase: "Parlante de estante de herencia británica con woofer de lana y tweeter de seda.",
    imagen: "/images/products/parlantes-wharfedale-super-denton.png",
    descripcion:
      "El Wharfedale Super Denton es la versión actualizada del clásico Denton, un ícono del sonido británico. Su woofer de 6.5\" con cono de lana y tweeter de cúpula de seda ofrecen un sonido cálido, detallado y envolvente. Terminación en madera con diseño retro que destaca en cualquier setup.",
    idealPara: [
      "Usuarios que buscan el sonido cálido y detallado del British Hi-Fi",
      "Setup de living con amplificador integrado",
      "Quienes valoran diseño retro y calidad de construcción",
    ],
    specs: {
      Tipo: "Pasivos, 2 vías, estante",
      Drivers: "6.5\" woofer cono de lana + 1\" tweeter seda",
      "Respuesta en frecuencia": "40Hz – 20kHz",
      Sensibilidad: "87dB (2.83V/1m)",
      Impedancia: "6 Ohm nominal",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "cambridge-audio-lrs",
    nombre: "L/R S",
    marca: "Cambridge Audio",
    categoria: "Parlantes",
    precio: "USD —",
    frase: "Parlantes de estante compactos con sonido Cambridge de referencia.",
    imagen: "/images/products/parlantes-cambridge-audio-lrs.png",
    descripcion:
      "Los Cambridge Audio L/R S son parlantes de estante compactos que combinan la filosofía de diseño de Cambridge Audio con un precio accesible. Diseñados para integrarse a amplificadores integrados de la marca o de terceros, ofrecen un balance musical preciso y sin coloraciones.",
    idealPara: [
      "Setup compacto con amplificador integrado",
      "Escritorio o living donde el tamaño importa",
      "Usuarios que buscan parlantes pasivos de calidad British",
    ],
    specs: {
      Tipo: "Pasivos, 2 vías, estante",
    },
    encajaCon: ["cambridge-audio-axa35"],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "kef-ls50-meta",
    nombre: "LS50 Meta",
    marca: "KEF",
    categoria: "Parlantes",
    precio: "USD —",
    frase: "El monitor de referencia de KEF con Uni-Q y tecnología Meta de absorción.",
    imagen: "",
    descripcion:
      "El KEF LS50 Meta es una de las referencias absolutas en parlantes de estante. El driver Uni-Q coloca el tweeter de aluminio en el centro exacto del woofer, creando una fuente de sonido puntual. La tecnología Meta absorbe el sonido trasero del tweeter con un laberinto metamaterial, reduciendo distorsión y mejorando la resolución de medios y altos de forma dramática.",
    idealPara: [
      "Escucha crítica y monitoreo en estudio o living",
      "Usuarios que buscan la imagen estéreo más precisa posible",
      "Setup con amplificador de calidad que justifique estos parlantes",
    ],
    specs: {
      Tipo: "Pasivos, 2 vías, estante",
      Driver: "Uni-Q: 1\" tweeter aluminio + 5.25\" bass/mid magnesio-aluminio",
      Tecnología: "Meta — laberinto metamaterial de absorción",
      "Respuesta en frecuencia": "79Hz – 28kHz",
      Sensibilidad: "85dB (2.83V/1m)",
      Impedancia: "8 Ohm nominal",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "kef-q3-meta",
    nombre: "Q3 Meta",
    marca: "KEF",
    categoria: "Parlantes",
    precio: "USD —",
    frase: "Parlante de estante Uni-Q con tecnología Meta: más grave y más escena que el Q1.",
    imagen: "",
    descripcion:
      "El KEF Q3 Meta es el segundo escalón de la serie Q Meta, con un woofer de 6.5\" que amplía el rango de bajos respecto al Q1 Meta. Mantiene el driver Uni-Q de aluminio y la tecnología Meta para una imagen estéreo ejemplar. Ideal para living o espacios más grandes donde el Q1 puede quedar justo.",
    idealPara: [
      "Espacios medianos donde el Q1 Meta no llega en bajos",
      "Setup con amplificador integrado de al menos 50W",
      "Usuarios que valoran escena sonora precisa y bajos más extendidos",
    ],
    specs: {
      Tipo: "Pasivos, 2 vías, estante",
      Driver: "Uni-Q: 1\" tweeter aluminio + 6.5\" bass/mid aluminio",
      Tecnología: "Meta",
      "Respuesta en frecuencia": "58Hz – 28kHz",
      Sensibilidad: "87dB (2.83V/1m)",
      Impedancia: "8 Ohm nominal",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "elac-debut-3-0-df63",
    nombre: "Debut 3.0 DF63",
    marca: "ELAC",
    categoria: "Parlantes",
    precio: "USD —",
    frase: "Torre de piso de la serie Debut 3.0: el ELAC DB63 en formato floorstanding.",
    imagen: "/images/products/parlantes-elac-debut-3-0-df63.png",
    descripcion:
      "El ELAC Debut 3.0 DF63 es la versión de pie de la serie diseñada por Andrew Jones. Tres drivers de 6.5\" de fibra de aramida y un tweeter de seda de 1\" ofrecen una respuesta en frecuencia que llega hasta los 40Hz sin subwoofer. La solución para quien quiere el sonido Debut 3.0 con presencia y cuerpo en bajos.",
    idealPara: [
      "Livinges o ambientes grandes donde los bookshelf no alcanzan",
      "Usuarios que no quieren subwoofer pero necesitan bajos profundos",
      "Setup con amplificador de al menos 80W",
    ],
    specs: {
      Tipo: "Pasivos, 3 vías, torre de piso",
      Drivers: "3× 6.5\" woofer aramida + 1\" tweeter silk dome",
      "Respuesta en frecuencia": "40Hz – 35kHz",
      Sensibilidad: "88dB (2.83V/1m)",
      Impedancia: "6 Ohm nominal",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },

  // ── NUEVOS — TOCADISCOS ──────────────────────────────────────
  {
    id: "pro-ject-t1-evo-phono",
    nombre: "T1 Evo Phono",
    marca: "Pro-Ject",
    categoria: "Tocadiscos",
    precio: "USD —",
    frase: "Tocadiscos de entrada con preamplificador phono integrado y diseño minimalista.",
    imagen: "",
    descripcion:
      "El Pro-Ject T1 Evo Phono es el punto de entrada a la línea T de Pro-Ject. Accionamiento por correa, brazo de aluminio y preamplificador phono MM incorporado para conectar directamente a cualquier amplificador. La propuesta más sencilla y confiable de la marca austriaca para empezar con el vinilo.",
    idealPara: [
      "Primer tocadiscos de calidad sin complicaciones",
      "Usuarios con amplificador sin entrada phono",
      "Setup compacto donde todo tiene que ser plug-and-play",
    ],
    specs: {
      Accionamiento: "Correa (belt drive)",
      Brazo: "Aluminio, antiskating incluido",
      Cápsula: "Ortofon OM5e (incluida)",
      Velocidades: "33 / 45 RPM",
      "Preamplificador phono": "MM incorporado",
      Salida: "RCA",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
  {
    id: "audio-technica-at-lp120xusb",
    nombre: "AT-LP120XUSB",
    marca: "Audio-Technica",
    categoria: "Tocadiscos",
    precio: "USD —",
    frase: "Tocadiscos de accionamiento directo con USB, fono incorporado y tres velocidades.",
    imagen: "/images/products/tocadiscos-audio-technica-at-lp120xusb.png",
    descripcion:
      "El Audio-Technica AT-LP120XUSB es el tocadiscos de accionamiento directo más popular del mercado. Preamplificador phono incorporado, salida USB para digitalizar discos, soporte para 33/45/78 RPM y control de velocidad manual. Viene con cápsula AT-VM95E y es una referencia en la relación calidad-precio.",
    idealPara: [
      "Usuarios que quieren digitalizar su colección de vinilos",
      "Primer tocadiscos de accionamiento directo (bajo wow & flutter)",
      "Setup donde la cápsula incluida ya es de buena calidad",
    ],
    specs: {
      Accionamiento: "Directo (direct drive)",
      Velocidades: "33 / 45 / 78 RPM",
      Cápsula: "Audio-Technica AT-VM95E (incluida)",
      "Preamplificador phono": "MM incorporado (bypasseable)",
      Salidas: "RCA, USB",
    },
    encajaCon: [],
    badge: "Próximamente",
    colores: [],
  },
]
