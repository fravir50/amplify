const FALLBACK_RATE = 1280 // tasa de respaldo — actualizar mensualmente
const CACHE_TTL_MS = 60 * 60 * 1000 // 1 hora

let cached: { rate: number; at: number } | null = null

export async function getDolarRate(): Promise<number> {
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return cached.rate
  }

  try {
    const res = await fetch("https://dolarapi.com/v1/dolares/blue", {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error(`dolarapi status ${res.status}`)
    const data = await res.json()
    const rate = Number(data.venta)
    if (!Number.isFinite(rate) || rate < 100) throw new Error("tasa inválida")
    cached = { rate, at: Date.now() }
    return rate
  } catch {
    return FALLBACK_RATE
  }
}

export function usdToArs(usd: number, rate: number): number {
  return Math.round(usd * rate)
}

export function formatARS(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount)
}
