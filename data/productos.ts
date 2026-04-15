// data/productos.ts
// ─────────────────────────────────────────────────────────────
// CÓMO EDITAR: cada objeto en el array `productos` es un producto.
// Para agregar uno nuevo, copiá un bloque existente y cambiá los valores.
// El campo `id` debe ser único, en minúsculas, con guiones (ej: "wiim-ultra").
// El campo `imagen` apunta a un archivo en /public/images/products/.
// El campo `encajaCon` es un array de `id`s de otros productos relacionados.
// ─────────────────────────────────────────────────────────────

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
    imagen: "/images/products/auriculares-sennheiser-hd600.jpg",
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
  },
  {
    id: "sennheiser-hd-650",
    nombre: "HD 650",
    marca: "Sennheiser",
    categoria: "Auriculares",
    precio: "USD 410",
    frase: "La evolución del HD 600: más cálido, más detallado, más musical.",
    imagen: "/images/products/auriculares-sennheiser-hd650.jpg",
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
  },

  // ── DACs ─────────────────────────────────────────────────────
  {
    id: "ifi-hip-dac-3",
    nombre: "Hip-Dac 3",
    marca: "iFi",
    categoria: "DACs",
    precio: "USD 270",
    frase: "DAC/amplificador portátil con salida balanceada y soporte para alta resolución.",
    imagen: "/images/products/dac-ifi-hip-dac3.jpg",
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
  },

  // ── AMPLIFICADORES ───────────────────────────────────────────
  {
    id: "wiim-amp-ultra",
    nombre: "Amp Ultra",
    marca: "WiiM",
    categoria: "Amplificadores",
    precio: "USD 780",
    frase: "Amplificador integrado con streaming, DAC ESS y Dirac Live incorporado.",
    imagen: "/images/products/amplificador-wiim-amp-ultra.jpg",
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
  },
  {
    id: "denon-pma-600ne",
    nombre: "PMA-600NE",
    marca: "Denon",
    categoria: "Amplificadores",
    precio: "USD 800",
    frase: "Amplificador integrado con DAC incorporado y salida de auriculares dedicada.",
    imagen: "/images/products/amplificador-denon-pma-600ne.jpg",
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
  },

  // ── STREAMERS ────────────────────────────────────────────────
  {
    id: "wiim-ultra",
    nombre: "Ultra",
    marca: "WiiM",
    categoria: "Streamers",
    precio: "USD 410",
    frase: "Streamer todo-en-uno con DAC integrado y corrección de sala.",
    imagen: "/images/products/streamer-wiim-ultra.jpg",
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
  },
  {
    id: "wiim-pro-plus",
    nombre: "Pro Plus",
    marca: "WiiM",
    categoria: "Streamers",
    precio: "USD 250",
    frase: "Streamer compacto con salida balanceada XLR y alta resolución.",
    imagen: "/images/products/streamer-wiim-pro-plus.jpg",
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
    badge: "Entrega inmediata",
  },

  // ── TOCADISCOS ───────────────────────────────────────────────
  {
    id: "music-hall-mmf-1-3",
    nombre: "MMF-1.3",
    marca: "Music Hall",
    categoria: "Tocadiscos",
    precio: "USD 699",
    frase: "Tocadiscos de entrada con preamplificador phono integrado y cápsula incluida.",
    imagen: "/images/products/tocadiscos-music-hall-mmf-1-3.jpg",
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
  },

  // ── COMBOS ───────────────────────────────────────────────────
  {
    id: "combo-wiim-amp-ultra-mmf-1-3",
    nombre: "Amp Ultra + MMF-1.3",
    marca: "WiiM + Music Hall",
    categoria: "Combos",
    precio: "USD 1.349",
    frase: "Sistema completo: streaming, amplificación y vinilo en un solo combo.",
    imagen: "/images/products/combo-wiim-amp-ultra-mmf-1-3.jpg",
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
    badge: "Combo especial",
  },
  {
    id: "combo-denon-pma-600ne-mmf-1-3",
    nombre: "PMA-600NE + MMF-1.3",
    marca: "Denon + Music Hall",
    categoria: "Combos",
    precio: "USD 1.369",
    frase: "Amplificación japonesa de calidad y vinilo analógico en un combo.",
    imagen: "/images/products/combo-denon-pma-600ne-mmf-1-3.jpg",
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
    badge: "Combo especial",
  },
  {
    id: "combo-hd-650-hip-dac-3",
    nombre: "HD 650 + Hip-Dac 3",
    marca: "Sennheiser + iFi",
    categoria: "Combos",
    precio: "USD 619",
    frase: "El setup de auriculares más equilibrado para escucha crítica.",
    imagen: "/images/products/combo-hd650-hip-dac3.jpg",
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
    badge: "Combo especial",
  },
  {
    id: "combo-hd-600-hip-dac-3",
    nombre: "HD 600 + Hip-Dac 3",
    marca: "Sennheiser + iFi",
    categoria: "Combos",
    precio: "USD 529",
    frase: "Neutralidad de referencia con la fuente perfecta para auriculares de alta impedancia.",
    imagen: "/images/products/combo-hd600-hip-dac3.jpg",
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
    badge: "Combo especial",
  },
]
