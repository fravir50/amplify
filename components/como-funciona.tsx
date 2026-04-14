"use client"

import { MessageSquare, Package, Truck, Clock } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function ComoFunciona() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Nos contás qué equipo querés",
      badge: "2 minutos",
      description: "Completa el formulario con el equipo que te interesa. También podés escribirnos por WhatsApp o Instagram.",
    },
    {
      icon: Package,
      title: "Cotizamos tu pedido",
      badge: "Respuesta en 48hs",
      description:
        "Analizamos tu consulta y te enviamos un presupuesto detallado en PDF con valores, condiciones y tiempos de entrega estimados.",
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
      </div>
    </section>
  )
}
