"use client"

import { useState } from "react"
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
              En Stock
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
        </div>
      </div>

      <Footer />
    </main>
  )
}
