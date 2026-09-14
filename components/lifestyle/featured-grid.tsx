"use client"

import { getFeaturedLifestyle, getSecondaryLifestyle } from "@/data/lifestyle"
import { LifestyleCard } from "./lifestyle-card"

export function FeaturedGrid() {
  const featured = getFeaturedLifestyle()
  const secondary = getSecondaryLifestyle()
  return (
    <section id="tienda" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="font-normal text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Bose primero. Después, Denon Home.
          </h2>
          <p className="mt-3 max-w-2xl text-white/50">
            Stock visible, precios en pesos, cuotas. Nada de mezclar un Flex con un Rega Brio en la misma grilla.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
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

        {secondary.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-2 text-xl font-semibold text-white">También tenemos Sonos</h3>
            <p className="mb-6 max-w-2xl text-sm text-white/45">
              No es la cabeza de lanza. Si ya estás en el ecosistema, el Era 100 SL y el Roam 2 están. Si empezás de
              cero, mirá Bose o Denon Home.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {secondary.map((p) => (
                <LifestyleCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
