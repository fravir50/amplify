"use client"

import { MessageSquare, Package, Truck, Clock } from "lucide-react"
import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"

const WA_URL =
  "https://wa.me/5491136228970?text=Hola%2C%20quiero%20consultar%20por%20un%20equipo%20a%20pedido."

export function ComoFunciona() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Nos contás qué equipo querés",
      badge: "2 minutos",
      description:
        "Escribinos por WhatsApp con la marca y modelo que te interesa. También podés elegir directamente de nuestro catálogo si el equipo ya está disponible.",
    },
    {
      icon: Package,
      title: "Cotizamos tu pedido",
      badge: "Respuesta en 48hs",
      description:
        "Analizamos tu consulta y te enviamos los valores, condiciones y tiempos de entrega estimados. Sin vueltas.",
    },
    {
      icon: Truck,
      title: "Confirmás y lo traemos para vos",
      badge: "Entrega en 5-15 días",
      description:
        "Con tu aprobación y una seña, iniciamos el proceso. Nos encargamos de todo para que el equipo llegue a tus manos sin complicaciones.",
    },
  ]

  return (
    <section id="como-funciona" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2 className="mb-20 font-normal text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            ¿Cómo funciona?
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <AnimateOnScroll key={index} delay={index * 150}>
                <div className="flex flex-col">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      {step.badge}
                    </span>
                  </div>
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#FF6B35]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-4" style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>

        {/* CTA al final */}
        <AnimateOnScroll delay={500}>
          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-[#FF6B35]/15 bg-[#FF6B35]/[0.06] p-6 sm:p-8">
            <div>
              <p className="font-semibold text-white mb-1">¿Tenés un equipo en mente?</p>
              <p className="text-sm text-white/50">
                Mandanos la marca y modelo por WhatsApp y te cotizamos en menos de 48hs.
              </p>
            </div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 rounded-full bg-[#FF6B35] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#FF6B35]/90 hover:scale-[1.02]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hacer un pedido
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
