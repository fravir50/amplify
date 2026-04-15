// data/productos.ts
// ─────────────────────────────────────────────────────────────
// CÓMO EDITAR: cada objeto en el array `productos` es un producto.
// Para agregar uno nuevo, copiá un bloque existente y cambiá los valores.
// El campo `id` debe ser único, en minúsculas, con guiones (ej: "wiim-ultra").
// El campo `imagen` apunta a un archivo en /public/images/products/.
// El campo `encajaCon` es un array de `id`s de otros productos relacionados.
// El campo `WHATSAPP_NUMBER` es el número de WhatsApp sin el +.
// ─────────────────────────────────────────────────────────────

export interface Producto {
  id: string
  nombre: string
  marca: string
  categoria: "Amplificadores" | "DACs" | "Streamers" | "Parlantes" | "Auriculares" | "Accesorios"
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
  {
    id: "wiim-ultra",
    nombre: "WiiM Ultra",
    marca: "WiiM",
    categoria: "Streamers",
    precio: "USD 850",
    frase: "Streamer todo-en-uno con DAC integrado y control de sala.",
    imagen: "/images/products/streamer-wiim.jpg",
    descripcion:
      "El WiiM Ultra es el streamer más completo de la línea WiiM. Combina streaming de alta resolución, DAC integrado, preamplificador y corrección de sala en un solo equipo compacto. Una solución sin compromisos para quien quiere calidad digital sin armar un rack completo.",
    idealPara: [
      "Primer equipo de streaming Hi-Fi",
      "Escritorios con parlantes activos",
      "Usuarios que quieren una solución todo-en-uno sin complicaciones",
    ],
    specs: {
      DAC: "ESS ES9038Q2M",
      Conectividad: "Wi-Fi 6, Bluetooth 5.3, AirPlay 2, Chromecast, HDMI eARC",
      Salidas: "RCA, Óptica, Subwoofer, Auriculares 6.35mm",
      "Resolución máxima": "PCM 384kHz/32-bit, DSD256",
      "Corrección de sala": "Sí (micrófono incluido)",
      Dimensiones: "213 × 213 × 38mm",
    },
    encajaCon: ["kef-q150", "ifi-zen-dac-3"],
    badge: "Entrega inmediata",
  },
  {
    id: "kef-q150",
    nombre: "Q150",
    marca: "KEF",
    categoria: "Parlantes",
    precio: "USD 420",
    frase: "Parlante bookshelf con tweeter concéntrico Uni-Q para una imagen sonora excepcional.",
    imagen: "/images/products/parlantes-kef.jpg",
    descripcion:
      "Los KEF Q150 son parlantes de estante que incorporan el tweeter concéntrico Uni-Q, una tecnología que coloca el tweeter en el punto acústico del woofer. El resultado es una imagen sonora amplia y coherente que trasciende el tamaño del gabinete. Son versátiles, bien construidos y suenan muy por encima de su precio.",
    idealPara: [
      "Setup de escritorio de alta calidad",
      "Living room con amplificador integrado",
      "Primer par de parlantes Hi-Fi pasivos",
    ],
    specs: {
      Configuración: "2 vías, bass-reflex",
      Tweeter: "19mm aluminio (Uni-Q)",
      Woofer: "130mm",
      "Respuesta en frecuencia": "51Hz – 28kHz",
      Impedancia: "8 Ohm",
      Sensibilidad: "86dB",
      "Potencia recomendada": "10–100W",
    },
    encajaCon: ["wiim-ultra"],
    badge: "Entrega inmediata",
  },
  {
    id: "ifi-zen-dac-3",
    nombre: "Zen DAC 3",
    marca: "iFi Audio",
    categoria: "DACs",
    precio: "USD 280",
    frase: "DAC/amplificador de auriculares con salida balanceada y soporte nativo para MQA.",
    imagen: "/images/products/dac-ifi.jpg",
    descripcion:
      "El iFi Zen DAC 3 es el punto de entrada perfecto al audio digital de alta resolución. Convierte la señal de tu computadora en una salida analógica de alta calidad, con soporte para archivos MQA, DSD y PCM de alta resolución. Su salida balanceada de 4.4mm es inusual en este rango de precio y marca una diferencia real.",
    idealPara: [
      "Setup de escritorio con auriculares de alta gama",
      "Mejora de calidad desde una notebook o PC",
      "Escucha nocturna con auriculares",
    ],
    specs: {
      DAC: "Burr-Brown",
      Entradas: "USB-C, Coaxial, Óptica",
      Salidas: "RCA, 6.35mm, 4.4mm balanceado",
      "Resolución máxima": "PCM 768kHz/32-bit, DSD512, MQA",
      "Potencia auriculares": "280mW @ 32Ω (balanceado)",
      Alimentación: "USB-C 5V",
    },
    encajaCon: ["focal-celestee"],
    badge: "Entrega inmediata",
  },
  {
    id: "focal-celestee",
    nombre: "Celestee",
    marca: "Focal",
    categoria: "Auriculares",
    precio: "USD 1.950",
    frase: "Auricular circumaural cerrado de referencia, fabricado en Francia.",
    imagen: "/images/products/auriculares-focal.jpg",
    descripcion:
      "El Focal Celestee es un auricular cerrado de gama alta fabricado en Francia. Usa el driver de 40mm M-Shape de Focal, conocido por su respuesta de graves rápida y controlada. La construcción es premium: aluminio y cuero genuino. Ideal para quien quiere aislamiento y calidad sin abrir la billetera a los Utopia.",
    idealPara: [
      "Escucha en espacios compartidos donde el aislamiento importa",
      "Viajes o uso portátil premium",
      "Desk setup que requiere cerrado de alta calidad",
    ],
    specs: {
      Tipo: "Circumaural cerrado",
      Driver: "40mm M-Shape aluminio/magnesio",
      "Respuesta en frecuencia": "5Hz – 23kHz",
      Impedancia: "35 Ohm",
      Sensibilidad: "105dB SPL/1mW",
      "Peso (sin cable)": "410g",
      Cable: "1.2m OFC con conector 3.5mm + adaptador 6.35mm",
    },
    encajaCon: ["ifi-zen-dac-3"],
    badge: "Entrega inmediata",
  },
]
