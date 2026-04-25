"use client"

import { useState } from "react"
import Image from "next/image"
import type { ColorVariante } from "@/data/productos"

interface Props {
  imagenBase: string
  nombre: string
  marca: string
  precio: string
  frase: string
  badge: string
  colores: ColorVariante[]
  whatsappUrl: string
}

function badgeClasses(badge: string) {
  if (badge === "Sold Out") return "bg-red-500/10 text-red-400 border-red-500/30"
  if (badge === "Próximamente") return "bg-[#3D2010]/40 text-[#C4783A] border-[#7A3D18]/40"
  return "bg-[#C9A96E]/10 text-[#C9A96E] border-[#C9A96E]/20"
}

export function ProductoHero({
  imagenBase, nombre, marca, precio, frase, badge, colores, whatsappUrl,
}: Props) {
  const [selected, setSelected] = useState(0)

  const imagenActual = colores[selected]?.imagen ?? imagenBase

  return (
    <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
      {/* Imagen — reactiva al color seleccionado */}
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

      {/* Datos */}
      <div className="flex flex-col justify-center gap-4 lg:col-span-2">
        <span className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-medium border ${badgeClasses(badge)}`}>
          {badge}
        </span>
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">
            {marca}
          </p>
          <h1
            className="font-semibold text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            {nombre}
          </h1>
          <p className="mt-1 text-xl font-semibold text-[#C9A96E]">{precio}</p>
        </div>
        <p className="text-base leading-relaxed text-white/60">{frase}</p>

        {/* Selector de color */}
        {colores.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-white/40">Color</span>
            <div className="flex items-center gap-3">
              {colores.map((color, i) => (
                <button
                  key={color.nombre}
                  type="button"
                  onClick={() => setSelected(i)}
                  title={color.nombre}
                  className={`h-7 w-7 rounded-full transition-all duration-200 ${
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
        )}

        {/* CTA desktop */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 hidden rounded-full bg-[#FF6B35] px-6 py-3 text-center text-base font-medium text-white transition-all duration-300 hover:bg-[#FF6B35]/90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] active:scale-95 lg:block"
        >
          Consultar por este producto
        </a>
      </div>
    </div>
  )
}
