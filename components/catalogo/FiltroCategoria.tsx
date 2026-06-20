"use client"

import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export const CATEGORIAS = [
  "Todos",
  "Combos",
  "Tocadiscos",
  "Streamers",
  "Amplificadores",
  "DACs",
  "Parlantes",
  "Auriculares",
  "Accesorios",
] as const

export const FILTRO_DESTACADOS = "Destacados del Mes"

interface Props {
  categoriaActiva: string
  onChange: (cat: string) => void
}

export function FiltroCategoria({ categoriaActiva, onChange }: Props) {
  const isDestacados = categoriaActiva === FILTRO_DESTACADOS

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {CATEGORIAS.slice(0, 1).map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={cn(
            "whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 focus:outline-none",
            cat === categoriaActiva
              ? "border-[#C9A96E] bg-[#C9A96E]/5 text-[#C9A96E]"
              : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
          )}
        >
          {cat}
        </button>
      ))}

      {/* Destacados del Mes — filtro especial */}
      <button
        type="button"
        onClick={() => onChange(FILTRO_DESTACADOS)}
        className={cn(
          "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 focus:outline-none",
          isDestacados
            ? "border-[#C9A96E] bg-[#C9A96E]/5 text-[#C9A96E]"
            : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
        )}
      >
        <Star
          className="h-3.5 w-3.5 flex-shrink-0"
          fill={isDestacados ? "currentColor" : "none"}
        />
        {FILTRO_DESTACADOS}
      </button>

      {CATEGORIAS.slice(1).map((cat) => (
    </div>
  )
}
