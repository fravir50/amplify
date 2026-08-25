"use client"

import { Suspense, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { StagingBanner } from "@/components/lifestyle/staging-banner"
import { LifestyleCard } from "@/components/lifestyle/lifestyle-card"
import { HifiBridge } from "@/components/lifestyle/hifi-bridge"
import {
  CATEGORIAS_LIFESTYLE,
  lifestyleProducts,
  type LifestyleCategoria,
} from "@/data/lifestyle"

function TiendaContent() {
  const searchParams = useSearchParams()
  const initial = searchParams.get("categoria")
  const [categoria, setCategoria] = useState<"Todos" | LifestyleCategoria>(() => {
    if (initial && CATEGORIAS_LIFESTYLE.includes(initial as LifestyleCategoria)) {
      return initial as LifestyleCategoria
    }
    return "Todos"
  })
  const [query, setQuery] = useState("")
  const [marca, setMarca] = useState<"Todas" | "Bose" | "Denon" | "Sonos">("Todas")

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase()
    return lifestyleProducts.filter((p) => {
      const catOk = categoria === "Todos" ? true : p.categoria === categoria
      const marcaOk = marca === "Todas" ? true : p.marca === marca
      const qOk =
        q === "" ||
        p.nombre.toLowerCase().includes(q) ||
        p.marca.toLowerCase().includes(q)
      return catOk && marcaOk && qOk
    })
  }, [categoria, marca, query])

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-semibold text-white mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Tienda
        </h1>
        <p className="mb-8 text-white/50">
          Bose, Denon Home y Sonos. Precios en pesos, cuotas, stock a la vista. El hi-fi está en el otro catálogo.
        </p>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre o marca..."
            className="max-w-md rounded-full border border-white/10 bg-white/5 py-2.5 px-4 text-sm text-white placeholder-white/30 outline-none focus:border-white/25"
          />
          <div className="flex flex-wrap gap-2">
            {(["Todas", "Bose", "Denon", "Sonos"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMarca(m)}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  marca === m ? "bg-[#FF6B35] text-white" : "border border-white/15 text-white/60"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIAS_LIFESTYLE.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategoria(c)}
              className={`rounded-full px-4 py-2 text-sm ${
                categoria === c ? "bg-white text-black" : "border border-white/15 text-white/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtrados.length === 0 ? (
          <p className="py-20 text-center text-white/30">No hay productos que coincidan.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((p, i) => (
              <LifestyleCard
                key={p.id}
                product={p}
                style={{
                  opacity: 0,
                  animation: "fadeInUp 0.5s ease forwards",
                  animationDelay: `${i * 70}ms`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <div className="pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
          <StagingBanner />
        </div>
      </div>
      <Suspense fallback={<div className="pt-32 pb-20 px-4 text-white/30 text-center">Cargando...</div>}>
        <TiendaContent />
      </Suspense>
      <HifiBridge />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
