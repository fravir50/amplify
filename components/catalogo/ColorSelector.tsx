"use client"

import { useState } from "react"
import type { ColorVariante } from "@/data/productos"

interface Props {
  colores: ColorVariante[]
}

export function ColorSelector({ colores }: Props) {
  const [selected, setSelected] = useState(0)

  if (!colores || colores.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-widest text-white/40">
        Color
      </span>
      <div className="flex items-center gap-3">
        {colores.map((color, i) => (
          <button
            key={color.nombre}
            type="button"
            onClick={() => setSelected(i)}
            title={color.nombre}
            className={`relative h-7 w-7 rounded-full transition-all duration-200 ${
              selected === i
                ? "ring-2 ring-white/70 ring-offset-2 ring-offset-black scale-110"
                : "ring-1 ring-white/20 hover:ring-white/40"
            }`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
        <span className="text-sm text-white/60">{colores[selected].nombre}</span>
      </div>
    </div>
  )
}
