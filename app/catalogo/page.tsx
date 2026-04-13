"use client"

import { useState } from "react"
import Link from "next/link"
import { Package } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductoCard } from "@/components/catalogo/ProductoCard"
import { FiltroCategoria } from "@/components/catalogo/FiltroCategoria"
import { productos } from "@/data/productos"

export default function CatalogoPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos")

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva)

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-10">
            <h1
              className="font-semibold text-white mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Catálogo
            </h1>
            <p className="text-white/50" style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}>
              Disponibles para entrega inmediata en CABA.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-10">
            <FiltroCategoria
              categoriaActiva={categoriaActiva}
              onChange={setCategoriaActiva}
            />
          </div>

          {/* Grid */}
          {productosFiltrados.length === 0 ? (
            <div className="py-24 text-center text-white/30">
              No hay productos en esta categoría por el momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productosFiltrados.map((producto, index) => (
                <ProductoCard
                  key={producto.id}
                  producto={producto}
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.5s ease forwards`,
                    animationDelay: `${index * 80}ms`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Banner: también traemos a pedido */}
          <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0f0f0f] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10">
                <Package className="h-5 w-5 text-[#FF6B35]" />
              </div>
              <div>
                <p className="font-semibold text-white">¿No encontrás lo que buscás?</p>
                <p className="mt-1 text-sm text-white/50">
                  Lo traemos a pedido. Consultanos y lo conseguimos — acceso a cualquier equipo del mundo.
                </p>
              </div>
            </div>
            <Link
              href="/#hace-tu-pedido"
              className="flex-shrink-0 rounded-full bg-[#FF6B35] px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#FF6B35]/90 hover:scale-[1.02] text-center sm:text-left"
            >
              Hacer un pedido
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
