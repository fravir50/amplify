"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-provider"

export function CartButton() {
  const { count } = useCart()
  return (
    <Link
      href="/carrito"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#FF6B35] hover:text-[#FF6B35]"
      aria-label={`Carrito${count ? `, ${count} productos` : ""}`}
    >
      <ShoppingBag className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF6B35] px-1 text-[10px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  )
}
