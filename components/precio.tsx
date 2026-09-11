import { getDolarRate, formatUSD, formatARS, usdToArs } from "@/lib/dolar"

interface PrecioProps {
  usd: number
  className?: string
  showARS?: boolean
}

export async function Precio({ usd, className, showARS = true }: PrecioProps) {
  const rate = showARS ? await getDolarRate() : 0
  const ars = showARS ? usdToArs(usd, rate) : 0

  return (
    <span className={className}>
      <span className="font-semibold text-amp-ink">{formatUSD(usd)}</span>
      {showARS && (
        <span className="ml-2 text-sm text-amp-ink-faint">
          ≈ {formatARS(ars)}
        </span>
      )}
    </span>
  )
}
