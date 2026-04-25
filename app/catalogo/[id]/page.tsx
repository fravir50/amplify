import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { productos, WHATSAPP_NUMBER } from "@/data/productos"
import { ProductoCard } from "@/components/catalogo/ProductoCard"
import { ProductoHero } from "@/components/catalogo/ProductoHero"

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return productos.map((p) => ({ id: p.id }))
}

function buildWhatsAppUrl(nombre: string): string {
  const text = encodeURIComponent(
    `Hola! Me interesa el ${nombre} que vi en la web de Amplify. ¿Podrían darme más info?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export default async function ProductoDetallePage({ params }: Props) {
  const { id } = await params
  const producto = productos.find((p) => p.id === id)

  if (!producto) notFound()

  const relacionados = productos.filter((p) => producto.encajaCon.includes(p.id))

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <div className="mx-auto max-w-7xl">

          {/* Volver */}
          <Link
            href="/catalogo"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </Link>

          {/* Hero: imagen + datos (cliente para soportar cambio de imagen por color) */}
          <ProductoHero
            imagenBase={producto.imagen}
            nombre={producto.nombre}
            marca={producto.marca}
            precio={producto.precio}
            frase={producto.frase}
            badge={producto.badge}
            colores={producto.colores}
            whatsappUrl={buildWhatsAppUrl(producto.nombre)}
          />

          {/* Bloques de contenido */}
          <div className="mx-auto max-w-3xl space-y-14">

            {/* Qué es */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Descripción</h2>
              <p className="text-base leading-relaxed text-white/60">{producto.descripcion}</p>
            </section>

            {/* Ideal para */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Es ideal para</h2>
              <ul className="space-y-2">
                {producto.idealPara.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-white/60">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A96E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Aspectos técnicos */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Especificaciones técnicas</h2>
              <dl className="space-y-3">
                {Object.entries(producto.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col gap-0.5 border-b border-white/5 pb-3 sm:flex-row sm:gap-4"
                  >
                    <dt className="min-w-[180px] text-sm font-medium text-white/40">{key}</dt>
                    <dd className="text-sm text-white/70">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Encaja bien con */}
            {relacionados.length > 0 && (
              <section>
                <h2 className="mb-6 text-lg font-semibold text-white">Se puede combinar con</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {relacionados.map((rel) => (
                    <ProductoCard key={rel.id} producto={rel} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* CTA sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
        <a
          href={buildWhatsAppUrl(producto.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#FF6B35] py-3.5 text-center text-base font-medium text-white transition-all duration-300 hover:bg-[#FF6B35]/90 active:scale-95"
        >
          Consultar por este producto
        </a>
      </div>
    </main>
  )
}
