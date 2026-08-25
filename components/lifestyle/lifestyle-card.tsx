"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { formatARS, formatCuota } from "@/lib/money"
import { averageRating, type LifestyleProduct } from "@/data/lifestyle"
import { StarRating } from "./star-rating"
import { useCart } from "./cart-provider"
import { useState } from "react"

export function LifestyleCard({
  product,
  style,
}: {
  product: LifestyleProduct
  style?: React.CSSProperties
}) {
  const { add } = useCart()
  const [msg, setMsg] = useState<string | null>(null)
  const rating = averageRating(product)
  const soldOut = product.stock <= 0

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-white/5 bg-[#111111] overflow-hidden",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      )}
      style={style}
    >
      <Link href={`/tienda/${product.id}`} className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
        <Image
          src={product.imagen}
          alt={`${product.marca} ${product.nombre}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.stock <= 2 && product.stock > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] text-[#C9A96E]">
            Últimas {product.stock} unidades
          </span>
        )}
        {soldOut && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500/20 px-2.5 py-1 text-[11px] text-red-300">
            Sin stock
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[11px] font-medium uppercase tracking-widest text-white/40">
          {product.marca} · {product.categoria}
        </span>
        <Link href={`/tienda/${product.id}`}>
          <h3 className="text-lg font-semibold leading-tight text-white">{product.nombre}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <StarRating value={rating} />
          <span className="text-xs text-white/40">
            {rating} · {product.reviews.length} reseñas
          </span>
        </div>
        <p className="text-sm leading-relaxed text-white/60">{product.frase}</p>
        <div className="mt-auto pt-2">
          <p className="text-lg font-semibold text-[#C9A96E]">{formatARS(product.precioARS)}</p>
          <p className="text-xs text-white/40">{formatCuota(product.precioARS)} sin interés</p>
          <p className="mt-1 text-xs text-white/35">{product.stock} en stock</p>
        </div>
        <div className="mt-2 flex gap-2">
          <Link
            href={`/tienda/${product.id}`}
            className="flex-1 rounded-full border border-white/20 py-2 text-center text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            Ver
          </Link>
          <button
            type="button"
            disabled={soldOut}
            onClick={() => {
              const res = add(product.id)
              setMsg(res.message)
              window.setTimeout(() => setMsg(null), 1800)
            }}
            className="flex-1 rounded-full bg-[#FF6B35] py-2 text-sm font-medium text-white transition-all hover:bg-[#FF6B35]/90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {soldOut ? "Agotado" : "Comprar"}
          </button>
        </div>
        {msg && <p className="text-center text-xs text-[#C9A96E]">{msg}</p>}
      </div>
    </article>
  )
}
