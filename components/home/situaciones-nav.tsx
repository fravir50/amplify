import Link from "next/link"
import { situaciones } from "@/data/situaciones"

export function SituacionesNav() {
  return (
    <section
      id="situaciones"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: "var(--amp-paper)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--amp-amber)" }}
          >
            Buscá por situación
          </p>
          <h2
            className="font-serif font-normal"
            style={{ color: "var(--amp-ink)", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
          >
            ¿Cuál es tu caso?
          </h2>
        </div>

        {/* Grid de situaciones */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {situaciones.map((s) => (
            <Link
              key={s.slug}
              href={`/situacion/${s.slug}`}
              className="group flex flex-col gap-3 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                backgroundColor: "var(--amp-white)",
                border: "1px solid var(--amp-border)",
              }}
            >
              <span className="text-2xl">{s.emoji}</span>
              <div>
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{ color: "var(--amp-ink)" }}
                >
                  {s.titulo}
                </p>
                <p
                  className="mt-0.5 text-xs leading-snug"
                  style={{ color: "var(--amp-ink-faint)" }}
                >
                  {s.subtitulo}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
