"use client"

import { cn } from "@/lib/utils"

export const CATEGORIAS = [
  "Todos",
  "Amplificadores",
  "DACs",
  "Streamers",
  "Parlantes",
  "Auriculares",
  "Accesorios",
] as const

interface Props {
  categoriaActiva: string
  onChange: (cat: string) => void
}

export function FiltroCategoria({ categoriaActiva, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {CATEGORIAS.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={cn(
            "whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 focus:outline-none",
            cat === categoriaActiva
              ? "border-[#FF6B35] bg-[#FF6B35]/5 text-[#FF6B35]"
              : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
