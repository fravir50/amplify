import type { BloqueLecturaData } from "@/data/productos"
import { Check, X } from "lucide-react"

interface BloqueLecturaProps {
  lectura: BloqueLecturaData
  modelo: string
  marca: string
}

export function BloqueLectura({ lectura, modelo, marca }: BloqueLecturaProps) {
  return (
    <section
      className="rounded-2xl p-6 md:p-8"
      style={{ backgroundColor: "var(--amp-dark-bg)" }}
    >
      {/* Header */}
      <p
        className="mb-1 text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--amp-amber)" }}
      >
        Nuestra lectura
      </p>
      <h2
        className="mb-4 font-serif text-xl font-normal md:text-2xl"
        style={{ color: "var(--amp-dark-text)" }}
      >
        {marca} {modelo}
      </h2>

      {/* Veredicto */}
      <p
        className="mb-8 text-base leading-relaxed md:text-lg"
        style={{ color: "var(--amp-dark-text)", opacity: 0.9 }}
      >
        {lectura.veredicto}
      </p>

      {/* Sirve si / No sirve si */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Sirve si */}
        <div
          className="rounded-xl p-5"
          style={{ backgroundColor: "var(--amp-dark-surface)" }}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--amp-amber)" }}
          >
            Sirve si…
          </p>
          <ul className="space-y-2">
            {lectura.sirveSi.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: "var(--amp-amber)" }}
                />
                <span
                  className="text-sm leading-snug"
                  style={{ color: "var(--amp-dark-text)", opacity: 0.85 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* No sirve si */}
        <div
          className="rounded-xl p-5"
          style={{ backgroundColor: "var(--amp-dark-surface)" }}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--amp-dark-muted)" }}
          >
            No sirve si…
          </p>
          <ul className="space-y-2">
            {lectura.noSirveSi.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <X
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: "var(--amp-dark-muted)" }}
                />
                <span
                  className="text-sm leading-snug"
                  style={{ color: "var(--amp-dark-muted)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
