"use client"

import { useState } from "react"
import Link from "next/link"
import type { LifestyleProduct } from "@/data/lifestyle"
import { formatARS, formatCuota } from "@/lib/money"
import { useCart } from "./cart-provider"

export function AddToCart({ product }: { product: LifestyleProduct }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [msg, setMsg] = useState<string | null>(null)
  const soldOut = product.stock <= 0

  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-2xl font-semibold text-[#C9A96E]">{formatARS(product.precioARS)}</p>
        <p className="text-sm text-white/50">{formatCuota(product.precioARS)} sin interés</p>
        <p className="mt-1 text-sm text-white/40">
          {soldOut ? "Sin stock" : `${product.stock} en stock`}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <label className="text-xs uppercase tracking-widest text-white/40" htmlFor={`qty-${product.id}`}>
          Cantidad
        </label>
        <input
          id={`qty-${product.id}`}
          type="number"
          min={1}
          max={product.stock}
          value={qty}
          disabled={soldOut}
          onChange={(e) => {
            const n = Number(e.target.value)
            setQty(Math.max(1, Math.min(product.stock || 1, Number.isFinite(n) ? n : 1)))
          }}
          className="w-20 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-center text-sm text-white"
        />
      </div>
      <button
        type="button"
        disabled={soldOut}
        onClick={() => {
          const res = add(product.id, qty)
          setMsg(res.message)
        }}
        className="rounded-full bg-[#FF6B35] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[#FF6B35]/90 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
      >
        {soldOut ? "Agotado" : "Agregar al carrito"}
      </button>
      {msg && (
        <p className="text-sm text-[#C9A96E]">
          {msg}{" "}
          <Link href="/carrito" className="underline">
            Ver carrito
          </Link>
        </p>
      )}
    </div>
  )
}
