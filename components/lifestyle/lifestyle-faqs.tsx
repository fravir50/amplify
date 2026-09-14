"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const faqs = [
  {
    q: "¿Esto es lo mismo que el catálogo hi-fi?",
    a: "No. Esta tienda es la línea lifestyle: Bose, Denon Home y algo de Sonos, en pesos, con carrito. El catálogo hi-fi (Rega, KEF, Marantz, bandejas) sigue en USD y se cierra por WhatsApp. Son dos negocios, misma marca.",
  },
  {
    q: "¿Cómo pago?",
    a: "En esta versión de staging el checkout está completo pero no cobra: no hay Mercado Pago ni transferencia real. Confirmás el pedido y te lo pasamos a WhatsApp. En producción: transferencia en ARS o cuotas (hasta 6 sin interés en los SKUs de esta línea).",
  },
  {
    q: "¿Hacen envíos o es sólo retiro?",
    a: "Las dos cosas. Política única de staging: retiro sin cargo en Núñez o Palermo (CABA), envío a CABA y GBA ($12.500, 24–48 hs) y envío al interior ($18.900, 3–7 días hábiles). Ya no es “sólo retiro”. El hi-fi se coordina en la conversación de WhatsApp, con la misma lógica de entrega.",
  },
  {
    q: "¿Los precios son finales?",
    a: "Los de esta tienda son lista en ARS de referencia de mercado (agosto 2026). Son placeholders de staging: pueden moverse cuando haya costo real de importación. El stock también es de prueba, realista, no infinito.",
  },
  {
    q: "¿Tienen garantía?",
    a: "Sí. 6 meses respaldada por Amplify, igual que en hi-fi. Si algo falla bajo uso normal, lo reparamos o reemplazamos.",
  },
  {
    q: "¿Por qué no lideran con Sonos?",
    a: "Porque el precio de Sonos en Argentina lo pone Sportouch, y está ~20% abajo. Bose portátil y auriculares no tienen un especialista con stock. Ahí entramos.",
  },
]

export function LifestyleFAQs() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faqs" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <h2 className="mb-10 font-normal text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Preguntas frecuentes
          </h2>
        </AnimateOnScroll>
        <div className="mx-auto max-w-3xl">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="pr-6 text-white" style={{ fontSize: "clamp(1rem, 2.4vw, 1.2rem)" }}>
                    {item.q}
                  </span>
                  {isOpen ? <Minus className="h-5 w-5 shrink-0" /> : <Plus className="h-5 w-5 shrink-0" />}
                </button>
                {isOpen && <p className="pb-5 text-white/60 leading-relaxed">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
