import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { productos, WHATSAPP_NUMBER } from "@/data/productos"
import { ProductoCard } from "@/components/catalogo/ProductoCard"

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

          {/* Hero: imagen + datos */}
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Imagen */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1a1a1a] lg:col-span-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-sm select-none">Imagen</span>
              </div>
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Datos */}
            <div className="flex flex-col justify-center gap-4 lg:col-span-2">
              <span className="inline-block w-fit rounded-full bg-[#C9A96E]/10 px-3 py-1 text-xs font-medium text-[#C9A96E] border border-[#C9A96E]/20">
                {producto.badge}
              </span>
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">
                  {producto.marca}
                </p>
                <h1
                  className="font-semibold text-white"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                >
                  {producto.nombre}
                </h1>
              </div>
              <p className="text-base leading-relaxed text-white/60">
                {producto.frase}
              </p>

              {/* CTA desktop */}
              <a
                href={buildWhatsAppUrl(producto.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 hidden rounded-full bg-[#FF6B35] px-6 py-3 text-center text-base font-medium text-white transition-all duration-300 hover:bg-[#FF6B35]/90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] active:scale-95 lg:block"
              >
                Consultar por este producto
              </a>
            </div>
          </div>

          {/* Bloques de contenido */}
          <div className="mx-auto max-w-3xl space-y-14">

            {/* Qué es */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Qué es</h2>
              <p className="text-base leading-relaxed text-white/60">{producto.descripcion}</p>
            </section>

            {/* Ideal para */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Ideal para</h2>
              <ul className="space-y-2">
                {producto.idealPara.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-white/60">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF6B35]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Aspectos técnicos */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Aspectos técnicos</h2>
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
                <h2 className="mb-6 text-lg font-semibold text-white">Encaja bien con</h2>
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
