const WHATSAPP_NUMBER = "5491100000000" // TODO: reemplazar con número real de Amplify

interface WhatsAppProductoParams {
  modelo: string
  marca: string
  precioUSD: number
}

export function buildWhatsAppUrl(params: WhatsAppProductoParams): string {
  const { modelo, marca, precioUSD } = params
  const texto = `Hola, me interesa el ${marca} ${modelo} (USD ${precioUSD.toLocaleString("es-AR")}). ¿Tienen stock disponible?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
}

export function buildWhatsAppUrlGeneral(mensaje?: string): string {
  const texto = mensaje ?? "Hola, quiero consultar sobre sus productos de audio."
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
}
