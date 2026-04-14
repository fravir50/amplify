"use client"

import { MessageSquare, Clock } from "lucide-react"
import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"

const paths = [
  {
    icon: Clock,
    color: "#C9A96E",
    badge: "Entrega inmediata",
    title: "Tenemos en stock",
    description:
      "Navegás nuestro catálogo, elegís tu equipo y coordinamos la entrega en CABA el mismo día o al día siguiente.",
    cta: { label: "Ver catálogo", href: "/catalogo" },
  },
  {
    icon: MessageSquare,
    color: "#FF6B35",
    badge: "Respuesta en 48hs",
    title: "Lo traemos a pedido",
    description:
      "¿No está en el catálogo? Mandanos un mensaje por WhatsApp con la marca y modelo. Cotizamos y lo traemos en 5–15 días.",
    cta: { label: "Consultar por WhatsApp", href: "/#hace-tu-pedido" },
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2
            className="mb-12 font-normal text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            ¿Cómo funciona?
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paths.map((path, index) => {
            const Icon = path.icon
            return (
              <AnimateOnScroll key={index} delay={index * 150}>
                <div
                  className="flex flex-col rounded-2xl border bg-[#0f0f0f] p-8 h-full"
                  style={{ borderColor: `${path.color}30` }}
                >
                  {/* Badge */}
                  <div className="mb-6">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${path.color}15`,
                        color: path.color,
                      }}
                    >
                      <Icon className="w-3 h-3" />
                      {path.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: path.color }}
                    >
                      <Icon className="w-8 h-8" style={{ color: path.color }} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-semibold text-white mb-3"
                    style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)" }}
                  >
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-8" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
                    {path.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={path.cta.href}
                    className="mt-auto inline-flex items-center gap-1.5 w-fit rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      backgroundColor: path.color,
                      color: index === 0 ? "#000" : "#fff",
                    }}
                  >
                    {path.cta.label}
                  </Link>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
