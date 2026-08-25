"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StagingBanner } from "@/components/lifestyle/staging-banner"
import { useCart } from "@/components/lifestyle/cart-provider"
import { formatARS, formatCuota } from "@/lib/money"

export default function CarritoPage() {
  const { items, subtotal, setQuantity, remove } = useCart()

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <StagingBanner />
          <h1 className="mt-8 mb-8 font-semibold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Carrito
          </h1>
          {items.length === 0 ? (
            <div className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-10 text-center">
              <p className="mb-4 text-white/50">Todavía no hay nada. La tienda está un click allá.</p>
              <Link href="/tienda" className="inline-block rounded-full bg-[#FF6B35] px-6 py-2.5 text-sm text-white">
                Ir a la tienda
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 rounded-2xl border border-white/8 bg-[#111] p-4"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-[#1a1a1a]">
                    <Image src={product.imagen} alt={product.nombre} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-xs uppercase tracking-widest text-white/40">{product.marca}</p>
                    <Link href={`/tienda/${product.id}`} className="font-semibold text-white">
                      {product.nombre}
                    </Link>
                    <p className="text-sm text-[#C9A96E]">{formatARS(product.precioARS)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <input
                        type="number"
                        min={1}
                        max={product.stock}
                        value={quantity}
                        onChange={(e) => setQuantity(product.id, Number(e.target.value))}
                        className="w-16 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-center text-sm text-white"
                      />
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        className="text-xs text-white/40 hover:text-red-400"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-6">
                <div className="mb-2 flex justify-between text-white">
                  <span>Subtotal</span>
                  <span className="text-[#C9A96E]">{formatARS(subtotal)}</span>
                </div>
                <p className="mb-6 text-sm text-white/40">
                  {formatCuota(subtotal)} sin interés · envío se elige en el checkout
                </p>
                <Link
                  href="/checkout"
                  className="block rounded-full bg-[#FF6B35] py-3 text-center font-medium text-white hover:bg-[#FF6B35]/90"
                >
                  Ir al checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
