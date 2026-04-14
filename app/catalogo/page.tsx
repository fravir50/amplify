"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Package, Search } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductoCard } from "@/components/catalogo/ProductoCard"
import { FiltroCategoria, CATEGORIAS } from "@/components/catalogo/FiltroCategoria"
import { productos } from "@/data/productos"

function CatalogoContent() {
  const searchParams = useSearchParams()
  const [categoriaActiva, setCategoriaActiva] = useState(() => {
    const cat = searchParams.get("categoria")
    return cat && (CATEGORIAS as readonly string[]).includes(cat) ? cat : "Todos"
  })
  const [query, setQuery] = useState("")

  useEffect(() => {
    const cat = searchParams.get("categoria")
    if (cat && (CATEGORIAS as readonly string[]).includes(cat)) {
      setCategoriaActiva(cat)
    }
  }, [searchParams])

  const productosFiltrados = productos.filter((p) => {
    const matchesCategoria = categoriaActiva === "Todos" || p.categoria === categoriaActiva
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q === "" ||
      p.nombre.toLowerCase().includes(q) ||
      p.marca.toLowerCase().includes(q)
    return matchesCategoria && matchesQuery
  })

  return (
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

        {/* Buscador */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nombre o marca..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-white/25"
            />
          </div>
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
            No hay productos que coincidan con tu búsqueda.
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
          <a
            href="https://wa.me/5491136228970?text=Hola%2C%20estoy%20interesado%20en%20hacer%20un%20pedido%20o%20adquirir%20un%20producto%20del%20cat%C3%A1logo%20de%20Amplify.%20%C2%BFMe%20pueden%20ayudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded-full bg-[#FF6B35] px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#FF6B35]/90 hover:scale-[1.02] text-center sm:text-left"
          >
            Hacé tu pedido
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <Suspense fallback={<div className="pt-32 pb-20 px-4 text-white/30 text-center">Cargando...</div>}>
        <CatalogoContent />
      </Suspense>
      <Footer />
    </main>
  )
}
