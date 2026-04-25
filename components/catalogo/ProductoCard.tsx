"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Producto } from "@/data/productos"
import { WHATSAPP_NUMBER } from "@/data/productos"

interface Props {
  producto: Producto
  style?: React.CSSProperties
}

function buildWhatsAppUrl(nombre: string): string {
  const text = encodeURIComponent(
    `Hola! Me interesa el ${nombre} que vi en la web de Amplify. ¿Podrían darme más info?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function ProductoCard({ producto, style }: Props) {
  return (
    <Link
      href={`/catalogo/${producto.id}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-white/5 bg-[#111111] overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      )}
      style={style}
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
        {/* Fallback placeholder siempre presente debajo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-sm select-none">Imagen</span>
        </div>

        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badge */}
        <div className="absolute left-3 top-3 z-10">
          <span className={cn(
            "rounded-full px-2.5 py-1 text-[11px] font-medium border",
            producto.badge === "Sold Out"
              ? "bg-red-500/10 text-red-400 border-red-500/30"
              : producto.badge === "Próximamente"
              ? "bg-amber-900/20 text-amber-700 border-amber-800/30"
              : "bg-[#C9A96E]/10 text-[#C9A96E] border-[#C9A96E]/20"
          )}>
            {producto.badge}
          </span>
        </div>

        {/* Combo ribbon */}
        {producto.categoria === "Combos" && (
          <div className="absolute right-0 top-0 z-10 overflow-hidden w-16 h-16">
            <div className="absolute right-[-20px] top-[10px] w-[80px] rotate-45 bg-[#C9A96E] py-1 text-center text-[10px] font-semibold uppercase tracking-wider text-black">
              Combo
            </div>
          </div>
        )}

      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-5">
        <span className="text-[11px] font-medium uppercase tracking-widest text-white/40">
          {producto.marca}
        </span>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight text-white">
            {producto.nombre}
          </h3>
          <span className="flex-shrink-0 text-lg font-semibold text-[#C9A96E]">
            {producto.precio}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-white/60">
          {producto.frase}
        </p>

        {/* Botón consultar — siempre visible */}
        <a
          href={buildWhatsAppUrl(producto.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-2 block rounded-full border border-white/20 py-2 text-center text-sm text-white/70 transition-colors duration-200 hover:border-[#FF6B35] hover:text-[#FF6B35]"
        >
          Consultar
        </a>
      </div>
    </Link>
  )
}
