"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"
import { productos } from "@/data/productos"

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

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % productos.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + productos.length) % productos.length)

  const visibleProducts = Array.from(
    { length: itemsPerPage },
    (_, i) => productos[(currentIndex + i) % productos.length]
  )

  return (
    <section id="tipos-productos" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Título */}
        <AnimateOnScroll>
          <h2 className="text-[clamp(28px,6vw,48px)] font-normal text-white mb-10 sm:mb-14 text-center">
            Conocé nuestro catálogo
          </h2>
        </AnimateOnScroll>

        {/* Carousel */}
        <AnimateOnScroll delay={150}>
          <div
            className={`${
              isMobile ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            } gap-4 mb-6`}
          >
            {visibleProducts.map((producto, idx) => (
              <Link
                key={`${producto.id}-${currentIndex}-${idx}`}
                href={`/catalogo/${producto.id}`}
                className={`group cursor-pointer ${isMobile ? "w-full max-w-xs" : ""}`}
              >
                {/* Imagen */}
                <div className="overflow-hidden rounded-2xl mb-3 relative aspect-[4/3] bg-[#1a1a1a]">
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
                  {/* Categoría */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="rounded-full bg-black/50 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white/70">
                      {producto.categoria}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-[#1a1a1a] rounded-2xl px-5 py-4 transition-colors duration-300 group-hover:bg-[#222]">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-1">
                    {producto.marca}
                  </p>
                  <h3 className="text-white text-lg font-normal mb-1">{producto.nombre}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{producto.frase}</p>
                </div>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Navegación */}
        <AnimateOnScroll delay={250}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Producto anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#C9A96E]" />
            </button>

            <div className="flex gap-2 bg-[#2a2a2a] px-3 py-1.5 rounded-full">
              {productos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    index === currentIndex ? "bg-[#C9A96E] scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Ir al producto ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Producto siguiente"
            >
              <ChevronRight className="w-5 h-5 text-[#C9A96E]" />
            </button>
          </div>
        </AnimateOnScroll>

        {/* CTA: Ver catálogo */}
        <AnimateOnScroll delay={300}>
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
