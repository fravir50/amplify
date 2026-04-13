"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Package, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"

const products = [
  {
    id: 1,
    title: "Auriculares",
    description: "Definición y comodidad para escuchar con máxima fidelidad.",
    image: "/images/focal-202.png",
  },
  {
    id: 2,
    title: "Parlantes",
    description: "Desde monitores de escritorio hasta home theaters.",
    image: "/images/parlantes.png",
  },
  {
    id: 3,
    title: "Streamers",
    description: "La mejor forma de usar aplicaciones digitales manteniendo la calidad del audio.",
    image: "/images/streamer.png",
  },
  {
    id: 4,
    title: "Tocadiscos",
    description: "Disfrutá de todos tus vinilos con calidad y presencia.",
    image: "/images/bandeja.png",
  },
  {
    id: 5,
    title: "Vinilos",
    description: "Discos nuevos y usados, clásicos y ediciones especiales.",
    image: "/images/vinilo.png",
  },
  {
    id: 6,
    title: "DACs",
    description: "Conversión digital para un sonido más puro y equilibrado.",
    image: "/images/dac.png",
  },
  {
    id: 7,
    title: "Amplificadores",
    description: "Potencia, control y carácter para cualquier tipo de setup.",
    image: "/images/ampli.png",
  },
]

export function TiposProductos() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const itemsPerPage = isMobile ? 1 : 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const getVisibleProducts = () => {
    const visible = []
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % products.length
      visible.push(products[index])
    }
    return visible
  }

  const visibleProducts = getVisibleProducts()

  return (
    <section id="tipos-productos" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="text-[clamp(28px,6vw,48px)] lg:text-5xl font-normal text-white mb-3 sm:mb-4">
            Tipos de productos
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto">
            Los tenemos en stock o los traemos a pedido. Vos elegís.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div
            className={`${
              isMobile ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            } gap-4 sm:gap-6 mb-8 sm:mb-12`}
          >
            {visibleProducts.map((product, idx) => (
              <div
                key={`${product.id}-${currentIndex}-${idx}`}
                className={`group cursor-pointer hover-lift ${isMobile ? "w-full max-w-sm" : ""}`}
              >
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl mb-3 sm:mb-4 relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.title} - ${product.description}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 bg-background text-background"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-gray-700/12 to-[#ff6b35]/10 pointer-events-none" />
                  <div className="absolute inset-0 border border-white/5 rounded-2xl sm:rounded-3xl pointer-events-none" />
                </div>
                <div className="bg-[#1a1a1a] rounded-2xl sm:rounded-3xl p-4 sm:p-6 min-h-[140px] sm:min-h-[160px] flex flex-col justify-center transition-colors duration-300 group-hover:bg-[#222]">
                  <h3 className="text-white text-xl sm:text-2xl font-normal mb-1 sm:mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Carousel navigation */}
        <AnimateOnScroll delay={300}>
          <div className="flex items-center justify-center gap-4 mb-14 sm:mb-16">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Producto anterior"
            >
              <ChevronLeft className="w-6 h-6 text-[#ff6b35]" />
            </button>

            <div className="flex gap-2 bg-[#2a2a2a] px-4 py-2 rounded-full">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    index === currentIndex ? "bg-[#ff6b35] scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Ir al producto ${index + 1}: ${products[index].title}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Producto siguiente"
            >
              <ChevronRight className="w-6 h-6 text-[#ff6b35]" />
            </button>
          </div>
        </AnimateOnScroll>

        {/* Dual-path CTAs */}
        <AnimateOnScroll delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {/* En Stock */}
            <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0f0f0f] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10">
                  <Clock className="h-5 w-5 text-[#C9A96E]" />
                </div>
                <h3 className="text-base font-semibold text-white">Tenemos en stock</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                Entrega inmediata en CABA. Productos seleccionados y disponibles ahora.
              </p>
              <Link
                href="/catalogo"
                className="mt-auto inline-flex items-center gap-1.5 rounded-full border border-[#C9A96E]/40 px-5 py-2 text-sm font-medium text-[#C9A96E] transition-all duration-200 hover:bg-[#C9A96E]/10 hover:border-[#C9A96E] w-fit"
              >
                Ver catálogo
              </Link>
            </div>

            {/* A pedido */}
            <div className="flex flex-col gap-4 rounded-2xl border border-[#FF6B35]/10 bg-[#0f0f0f] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10">
                  <Package className="h-5 w-5 text-[#FF6B35]" />
                </div>
                <h3 className="text-base font-semibold text-white">Lo traemos a pedido</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                ¿No está en el catálogo? Consultanos y lo conseguimos. Acceso a cualquier equipo del mundo.
              </p>
              <Link
                href="#hace-tu-pedido"
                className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-[#FF6B35] px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[#FF6B35]/90 hover:scale-[1.02] w-fit"
              >
                Hacer un pedido
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
