"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"
import { productos } from "@/data/productos"

const WA_URL =
  "https://wa.me/5491136228970?text=Hola%2C%20quiero%20consultar%20por%20un%20equipo%20a%20pedido."

export function TiposProductos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const itemsPerPage = isMobile ? 1 : 3

  const next = () => setCurrentIndex((prev) => (prev + 1) % productos.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + productos.length) % productos.length)

  const visible = Array.from({ length: itemsPerPage }, (_, i) => productos[(currentIndex + i) % productos.length])

  return (
    <section id="tipos-productos" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <AnimateOnScroll>
          <h2 className="text-[clamp(28px,6vw,48px)] font-normal text-white mb-8 sm:mb-10 text-center">
            Nuestros productos
          </h2>
        </AnimateOnScroll>

        {/* Banner "A pedido" */}
        <AnimateOnScroll delay={100}>
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-[#FF6B35]/15 bg-[#FF6B35]/[0.06] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10">
                <Package className="h-5 w-5 text-[#FF6B35]" />
              </div>
              <div>
                <p className="font-semibold text-white">¿No encontrás lo que buscás?</p>
                <p className="mt-1 text-sm text-white/50">
                  Lo traemos a pedido — cualquier marca, cualquier modelo.
                </p>
              </div>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 rounded-full bg-[#FF6B35] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#FF6B35]/90 hover:scale-[1.02]"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </AnimateOnScroll>

        {/* Carousel de productos reales */}
        <AnimateOnScroll delay={200}>
          <div
            className={`${
              isMobile ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            } gap-3 sm:gap-4 mb-6`}
          >
            {visible.map((producto, idx) => (
              <Link
                key={`${producto.id}-${currentIndex}-${idx}`}
                href={`/catalogo/${producto.id}`}
                className={`group cursor-pointer ${isMobile ? "w-full max-w-xs" : ""}`}
              >
                {/* Imagen */}
                <div className="overflow-hidden rounded-xl sm:rounded-2xl mb-2 sm:mb-3 relative aspect-[4/3] bg-[#1a1a1a]">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  {/* Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="rounded-full bg-[#C9A96E]/90 px-2.5 py-1 text-[11px] font-medium text-black">
                      {producto.badge}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="bg-[#1a1a1a] rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 transition-colors duration-300 group-hover:bg-[#222]">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-1">
                    {producto.marca} · {producto.categoria}
                  </p>
                  <h3 className="text-white text-base sm:text-lg font-normal mb-1">{producto.nombre}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">{producto.frase}</p>
                </div>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Navegación del carousel */}
        <AnimateOnScroll delay={300}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Producto anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#ff6b35]" />
            </button>

            <div className="flex gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-full">
              {productos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    index === currentIndex ? "bg-[#ff6b35] scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Ir al producto ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Producto siguiente"
            >
              <ChevronRight className="w-5 h-5 text-[#ff6b35]" />
            </button>
          </div>
        </AnimateOnScroll>

        {/* CTA: Ver catálogo completo */}
        <AnimateOnScroll delay={350}>
          <div className="flex justify-center">
            <Link
              href="/catalogo"
              className="rounded-full border border-[#C9A96E] text-[#C9A96E] px-8 py-3 text-sm font-medium transition-all duration-200 hover:bg-[#C9A96E] hover:text-black hover:scale-[1.02]"
            >
              Ver catálogo completo
            </Link>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
