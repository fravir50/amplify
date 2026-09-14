"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { getLifestyleById, type LifestyleProduct } from "@/data/lifestyle"

const STORAGE_KEY = "amplify-lifestyle-cart-v1"

export interface CartLine {
  productId: string
  quantity: number
}

interface CartContextValue {
  lines: CartLine[]
  items: Array<{ product: LifestyleProduct; quantity: number }>
  count: number
  subtotal: number
  add: (productId: string, quantity?: number) => { ok: boolean; message: string }
  setQuantity: (productId: string, quantity: number) => void
  remove: (productId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[]
        if (Array.isArray(parsed)) setLines(parsed.filter((l) => l.productId && l.quantity > 0))
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines, hydrated])

  const add = useCallback((productId: string, quantity = 1) => {
    const product = getLifestyleById(productId)
    if (!product) return { ok: false, message: "No encontramos ese producto." }
    if (product.stock <= 0) return { ok: false, message: "Sin stock por ahora." }

    let message = "Agregado al carrito."
    let ok = true
    setLines((prev) => {
      const current = prev.find((l) => l.productId === productId)
      const nextQty = (current?.quantity ?? 0) + quantity
      if (nextQty > product.stock) {
        ok = false
        message = `Solo hay ${product.stock} en stock.`
        if (!current) return prev
        return prev.map((l) =>
          l.productId === productId ? { ...l, quantity: product.stock } : l
        )
      }
      if (current) {
        return prev.map((l) =>
          l.productId === productId ? { ...l, quantity: nextQty } : l
        )
      }
      return [...prev, { productId, quantity }]
    })
    return { ok, message }
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const product = getLifestyleById(productId)
    if (!product) return
    setLines((prev) => {
      if (quantity <= 0) return prev.filter((l) => l.productId !== productId)
      const clamped = Math.min(quantity, product.stock)
      return prev.map((l) =>
        l.productId === productId ? { ...l, quantity: clamped } : l
      )
    })
  }, [])

  const remove = useCallback((productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const items = useMemo(() => {
    return lines
      .map((l) => {
        const product = getLifestyleById(l.productId)
        if (!product) return null
        return { product, quantity: l.quantity }
      })
      .filter((x): x is { product: LifestyleProduct; quantity: number } => x !== null)
  }, [lines])

  const count = items.reduce((acc, i) => acc + i.quantity, 0)
  const subtotal = items.reduce((acc, i) => acc + i.product.precioARS * i.quantity, 0)

  const value = useMemo(
    () => ({ lines, items, count, subtotal, add, setQuantity, remove, clear }),
    [lines, items, count, subtotal, add, setQuantity, remove, clear]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
