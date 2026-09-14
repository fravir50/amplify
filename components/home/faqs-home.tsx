"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "¿Cómo compro?",
    a: "Todo se cierra por WhatsApp. Consultás, acordamos el producto, coordinamos el retiro (Núñez o Palermo, CABA) y pagás. Sin carrito, sin checkout.",
  },
  {
    q: "¿Cuáles son los medios de pago?",
    a: "Dólar billete, USDT o transferencia internacional. No aceptamos tarjetas ni pagos en pesos. El precio en ARS que mostramos es de referencia usando el dólar blue del día.",
  },
  {
    q: "¿Hacen envíos?",
    a: "Por ahora sólo retiro: Núñez o Palermo CABA. Coordinamos punto y horario por WhatsApp.",
  },
  {
    q: "¿Qué garantía tienen los productos?",
    a: "6 meses respaldada por Amplify. Si algo falla bajo uso normal lo resolvemos — reparación o reemplazo. No es la garantía oficial de la marca, es la nuestra.",
  },
  {
    q: "¿Los precios en ARS son exactos?",
    a: "Son de referencia, calculados con el dólar blue del momento. El precio definitivo lo confirmamos por WhatsApp al cierre.",
  },
  {
    q: "¿Tienen catálogo hi-fi (amps, DACs, tocadiscos)?",
    a: "Sí. El catálogo hi-fi (WiiM, Denon PMA, ELAC, Pro-Ject, etc.) está en /catalogo y también se cierra por WhatsApp en USD.",
  },
]

export function FaqsHome() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faqs"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: "var(--amp-sand)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-xl">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--amp-amber)" }}
          >
            Preguntas frecuentes
          </p>
          <h2
            className="font-serif font-normal"
            style={{ color: "var(--amp-ink)", fontSize: "clamp(1.7rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
          >
            Lo que nos preguntan
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="border-b"
                style={{ borderColor: "var(--amp-border-mid)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-medium"
                    style={{ color: "var(--amp-ink)" }}
                  >
                    {item.q}
                  </span>
                  {isOpen
                    ? <Minus className="h-4 w-4 shrink-0" style={{ color: "var(--amp-amber)" }} />
                    : <Plus className="h-4 w-4 shrink-0" style={{ color: "var(--amp-ink-faint)" }} />
                  }
                </button>
                {isOpen && (
                  <p
                    className="pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--amp-ink-mid)" }}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
