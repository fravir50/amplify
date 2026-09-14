import { Eye, DollarSign, Shield } from "lucide-react"

const items = [
  {
    icon: Eye,
    titulo: "Criterio publicado",
    texto:
      "Cada producto tiene un veredicto honesto: para quién sirve y para quién no. No vendemos lo que no recomendaríamos.",
  },
  {
    icon: DollarSign,
    titulo: "Precio en USD, sin vueltas",
    texto:
      "Pagás en dólar billete, USDT o transferencia internacional. Sin tarjeta, sin cuotas, sin tipo de cambio trampa.",
  },
  {
    icon: Shield,
    titulo: "Garantía de 6 meses",
    texto:
      "Respaldada por Amplify, no por la marca. Si algo falla bajo uso normal, lo resolvemos — sin burocracia de service.",
  },
]

export function PorQueAmplify() {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ backgroundColor: "var(--amp-paper)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--amp-amber)" }}
          >
            Por qué Amplify
          </p>
          <h2
            className="font-serif font-normal"
            style={{ color: "var(--amp-ink)", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
          >
            Sin chamullo.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {items.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="flex flex-col gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--amp-amber-light)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--amp-amber)" }} />
              </div>
              <div>
                <h3
                  className="mb-1.5 text-base font-semibold"
                  style={{ color: "var(--amp-ink)" }}
                >
                  {titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--amp-ink-mid)" }}>
                  {texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
