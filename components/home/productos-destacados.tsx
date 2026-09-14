import Link from "next/link"
import { productos } from "@/data/productos"
import { TarjetaProducto } from "@/components/tarjeta-producto"

export function ProductosDestacados() {
  const destacados = productos.filter((p) => p.destacado).slice(0, 3)
  if (destacados.length === 0) return null

  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      style={{ backgroundColor: "var(--amp-sand)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="max-w-xl">
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--amp-amber)" }}
            >
              Selección
            </p>
            <h2
              className="font-serif font-normal"
              style={{ color: "var(--amp-ink)", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
            >
              Los más consultados
            </h2>
          </div>
          <Link
            href="/productos"
            className="shrink-0 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--amp-amber)" }}
          >
            Ver todos →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((p) => (
            <TarjetaProducto key={p.slug} producto={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
