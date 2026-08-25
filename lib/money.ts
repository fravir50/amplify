export const CUOTAS_DEFAULT = 6

export function formatARS(value: number): string {
  const rounded = Math.round(value)
  return (
    "$" +
    rounded.toLocaleString("es-AR", {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    })
  )
}

export function cuotaValor(precioARS: number, cuotas = CUOTAS_DEFAULT): number {
  return Math.round(precioARS / cuotas)
}

export function formatCuota(precioARS: number, cuotas = CUOTAS_DEFAULT): string {
  return `${formatARS(cuotaValor(precioARS, cuotas))} × ${cuotas}`
}
