"use client"

import { useState } from "react"
import Image from "next/image"
import type { ColorVariante } from "@/data/productos"

interface Props {
  imagenBase: string
  nombre: string
  colores: ColorVariante[]
}

export function ProductoColorSection({ imagenBase, nombre, colores }: Props) {
  const [selected, setSelected] = useState(0)

  const imagenActual = colores[selected]?.imagen ?? imagenBase

  return (
    <>
      {/* Imagen — cambia según color seleccionado */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1a1a1a] lg:col-span-3">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-sm select-none">Imagen</span>
        </div>
        <Image
          key={imagenActual}
          src={imagenActual}
          alt={nombre}
          fill
          className="object-cover transition-opacity duration-300"
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* Color selector — solo si hay colores */}
      {colores && colores.length > 0 && (
        <div className="flex flex-col gap-2 lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:self-end lg:pb-1">
          {/* Este div es invisible en desktop, el selector se renderiza dentro del panel de datos */}
        </div>
      )}
    </>
  )
}

export function ColorSelectorConImagen({
  colores,
  imagenBase,
  onColorChange,
}: {
  colores: ColorVariante[]
  imagenBase: string
  onColorChange?: (imagen: string) => void
}) {
  const [selected, setSelected] = useState(0)

  if (!colores || colores.length === 0) return null

  const handleSelect = (i: number) => {
    setSelected(i)
    onColorChange?.(colores[i]?.imagen ?? imagenBase)
  }

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
            onClick={() => handleSelect(i)}
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
