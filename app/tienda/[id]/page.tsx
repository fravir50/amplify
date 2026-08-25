import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { StagingBanner } from "@/components/lifestyle/staging-banner"
import { AddToCart } from "@/components/lifestyle/add-to-cart"
import { Reviews } from "@/components/lifestyle/reviews"
import { LifestyleCard } from "@/components/lifestyle/lifestyle-card"
import { StarRating } from "@/components/lifestyle/star-rating"
import {
  WHATSAPP_NUMBER,
  averageRating,
  lifestyleProducts,
} from "@/data/lifestyle"

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return lifestyleProducts.map((p) => ({ id: p.id }))
}

export default async function LifestyleProductoPage({ params }: Props) {
  const { id } = await params
  const product = lifestyleProducts.find((p) => p.id === id)
  if (!product) notFound()

  const rating = averageRating(product)
  const related = lifestyleProducts.filter(
    (p) => p.id !== product.id && (p.categoria === product.categoria || p.marca === product.marca)
  ).slice(0, 3)

  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola! Me interesa el ${product.marca} ${product.nombre} de la tienda lifestyle.`
  )}`

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <div className="mx-auto max-w-7xl">
          <StagingBanner />
          <Link
            href="/tienda"
            className="my-8 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la tienda
          </Link>

          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1a1a1a] lg:col-span-3">
              <Image
                src={product.imagen}
                alt={`${product.marca} ${product.nombre}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 lg:col-span-2">
              <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                {product.marca} · {product.categoria}
              </p>
              <h1 className="font-semibold text-white" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                {product.nombre}
              </h1>
              <div className="flex items-center gap-2">
                <StarRating value={rating} size="md" />
                <span className="text-sm text-white/45">
                  {rating} · {product.reviews.length} reseñas
                </span>
              </div>
              <p className="text-base leading-relaxed text-white/60">{product.frase}</p>
              {product.colores.length > 0 && (
                <div className="flex items-center gap-3">
                  {product.colores.map((c) => (
                    <span
                      key={c.nombre}
                      title={c.nombre}
                      className="h-7 w-7 rounded-full ring-1 ring-white/20"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                  <span className="text-sm text-white/50">{product.colores.map((c) => c.nombre).join(" / ")}</span>
                </div>
              )}
              <AddToCart product={product} />
              <a href={wa} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white">
                ¿Dudas? Escribinos por WhatsApp
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-14">
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Descripción</h2>
              <p className="text-base leading-relaxed text-white/60">{product.descripcion}</p>
            </section>
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Es ideal para</h2>
              <ul className="space-y-2">
                {product.idealPara.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white/60">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A96E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Especificaciones</h2>
              <dl className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-0.5 border-b border-white/5 pb-3 sm:flex-row sm:gap-4">
                    <dt className="min-w-[180px] text-sm font-medium text-white/40">{key}</dt>
                    <dd className="text-sm text-white/70">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <Reviews product={product} />
            {related.length > 0 && (
              <section>
                <h2 className="mb-6 text-lg font-semibold text-white">También te puede servir</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {related.map((p) => (
                    <LifestyleCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
