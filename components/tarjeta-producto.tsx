import Link from "next/link"
import Image from "next/image"
import type { Producto } from "@/data/productos"
import { Precio } from "@/components/precio"
import { CTAWhatsappProducto } from "@/components/cta-whatsapp"

interface TarjetaProductoProps {
  producto: Producto
  layout?: "grid" | "list"
}

const categoriaTags: Record<Producto["categoria"], string> = {
  soundbar: "Soundbar",
  portatil: "Portátil",
  auriculares: "Auriculares",
  multiroom: "Multiroom",
  exterior: "Exterior",
}

export function TarjetaProducto({ producto, layout = "grid" }: TarjetaProductoProps) {
  const { slug, marca, modelo, categoria, precioUSD, imagenes, resumen, destacado } = producto
  const imagen = imagenes[0] ?? "/images/placeholder.png"

  if (layout === "list") {
    return (
      <article
        className="flex gap-4 rounded-2xl p-4 transition-shadow hover:shadow-md"
        style={{ backgroundColor: "var(--amp-white)", border: "1px solid var(--amp-border)" }}
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-amp-sand">
          <Image src={imagen} alt={`${marca} ${modelo}`} fill className="object-contain p-2" sizes="96px" />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--amp-ink-faint)" }}>
              {marca}
            </p>
            <Link href={`/productos/${slug}`} className="hover:underline">
              <h3 className="font-medium" style={{ color: "var(--amp-ink)" }}>{modelo}</h3>
            </Link>
          </div>
          <Precio usd={precioUSD} showARS />
        </div>
        <CTAWhatsappProducto marca={marca} modelo={modelo} precioUSD={precioUSD} size="sm" />
      </article>
    )
  }

  // Grid layout (default)
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-lg"
      style={{ backgroundColor: "var(--amp-white)", border: "1px solid var(--amp-border)" }}
    >
      {/* Imagen */}
      <Link href={`/productos/${slug}`} className="relative block aspect-square overflow-hidden bg-amp-sand">
        <Image
          src={imagen}
          alt={`${marca} ${modelo}`}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {destacado && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: "var(--amp-amber)", color: "#fff" }}
          >
            Destacado
          </span>
        )}
        <span
          className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
          style={{ backgroundColor: "var(--amp-amber-light)", color: "var(--amp-amber)" }}
        >
          {categoriaTags[categoria]}
        </span>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--amp-ink-faint)" }}>
            {marca}
          </p>
          <Link href={`/productos/${slug}`} className="hover:underline">
            <h3 className="text-lg font-medium leading-snug" style={{ color: "var(--amp-ink)" }}>
              {modelo}
            </h3>
          </Link>
          <p className="mt-1 text-sm leading-snug" style={{ color: "var(--amp-ink-mid)" }}>
            {resumen}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <Precio usd={precioUSD} showARS />
          <CTAWhatsappProducto
            marca={marca}
            modelo={modelo}
            precioUSD={precioUSD}
            size="sm"
            className="w-full justify-center"
          />
        </div>
      </div>
    </article>
  )
}
