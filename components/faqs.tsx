"use client"

import { useState, useRef, useEffect } from "react"
import { Plus, Minus } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

interface FAQ {
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  questions: FAQ[]
}

const faqData: FAQCategory[] = [
  {
    category: "Cómo funciona",
    questions: [
      {
        question: "¿Cómo hago un pedido?",
        answer:
          "Completa el formulario con el equipo que te interesa. También podés escribirnos por WhatsApp o Instagram. Analizamos tu consulta y te enviamos una cotización clara y personalizada. Si te sirve, avanzamos con la seña y ponemos en marcha el proceso.",
      },
      {
        question: "¿Tengo que saber exactamente qué modelo quiero?",
        answer:
          "No. Si estás empezando o necesitás ayuda, te guiamos según tu setup, tu presupuesto y lo que querés lograr. También podemos proponerte alternativas equivalentes o superiores.",
      },
      {
        question: "¿Cuánto tarda en llegar la cotización?",
        answer:
          "Generalmente 48hs, depende según el producto. Si necesitamos más tiempo para confirmar disponibilidad, te avisamos.",
      },
      {
        question: "¿La cotización tiene costo?",
        answer: "No. Todas las consultas y cotizaciones son totalmente gratuitas y sin compromiso.",
      },
    ],
  },
  {
    category: "Productos y marcas",
    questions: [
      {
        question: "¿Qué marcas trabajan?",
        answer:
          "Prácticamente cualquier marca del mundo, desde Hi-Fi accesible hasta Hi-End. Operamos bajo pedido para conseguir exactamente el modelo que querés.",
      },
      {
        question: "¿Tienen catálogo propio?",
        answer:
          "Estamos trabajando en construir un stock para poder ofrecer aún mejores precios, mayor disponibilidad y entrega inmediata.",
      },
      {
        question: "¿Puedo pedir un modelo exclusivo o recién lanzado?",
        answer: "Sí. Si ya se vende en el mercado internacional, te lo conseguimos.",
      },
      {
        question: "¿Pueden conseguir vinilos importados?",
        answer: "Sí. Podemos buscar y traer vinilos comunes y versiones coleccionables.",
      },
    ],
  },
  {
    category: "Pagos y señas",
    questions: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Los pagos se realizan en dólares, ya que trabajamos directamente con proveedores internacionales. Aceptamos Dólar billete, USDT y transferencias internacionales. Si tenés dudas sobre cómo funciona, escribinos y te explicamos todo el proceso.",
      },
      {
        question: "¿Qué porcentaje es la seña?",
        answer:
          "La seña suele ser entre el 30% y 50% del valor del pedido, según el producto. Con esa confirmación iniciamos el proceso.",
      },
      {
        question: "¿Puedo cancelar un pedido después de señarlo?",
        answer:
          "La seña confirma tu pedido y nos permite iniciarlo, por lo que no es reembolsable. Pero quedate tranquilo: antes de pedirte la seña, nos aseguramos de que tengas toda la información para decidir con confianza.",
      },
    ],
  },
  {
    category: "Envíos y tiempos",
    questions: [
      {
        question: "¿Cuánto tarda en llegar un producto?",
        answer:
          "Depende del origen, la disponibilidad y el proveedor. En tu cotización vas a recibir un estimado realista para tu caso puntual. Por lo general, entre 5 y 15 días, tenés el producto en tus manos.",
      },
      {
        question: "¿Hacen envíos?",
        answer: "Por el momento no realizamos envíos. Solo ofrecemos retiros en Nuñez o Palermo, CABA.",
      },
    ],
  },
  {
    category: "Garantía y soporte",
    questions: [
      {
        question: "¿Los productos tienen garantía?",
        answer:
          "Sí. Todos los equipos que vendemos cuentan con 6 meses de garantía respaldada por Amplify. Si algo falla bajo uso normal, lo reparamos o reemplazamos sin costo.",
      },
      {
        question: "¿Qué hago si tengo un problema con mi equipo?",
        answer:
          "Nos escribís directamente por WhatsApp. Primero te ayudamos a diagnosticar el problema (muchas veces se resuelve con una simple configuración). Si necesita reparación, nos encargamos de todo: retiro, reparación y devolución.",
      },
      {
        question: "¿Qué cubre la garantía?",
        answer:
          "Defectos de fabricación y fallas de componentes bajo uso normal. No cubre daños por golpes, líquidos, conexión a voltaje incorrecto, o modificaciones del equipo.",
      },
      {
        question: "¿La garantía es transferible?",
        answer:
          "Sí. Si vendés tu equipo, la garantía se transfiere al nuevo dueño dentro del plazo original. Protegemos el valor de tu inversión.",
      },

    ],
  },
  {
    category: "Comunidad",
    questions: [
      {
        question: "¿Qué es la comunidad de Amplify?",
        answer:
          "Es un espacio donde compartimos setups, vinilos, recomendaciones y experiencias reales. Es abierta, inclusiva y siempre activa.",
      },
      {
        question: "¿Cómo puedo participar?",
        answer:
          "Podés seguirnos en Instagram, comentar, mandar tu setup o consultarnos lo que quieras. La comunidad crece con cada persona que se suma.",
      },
      {
        question: "¿Hacen eventos o encuentros?",
        answer:
          "Sí. Organizamos escuchas, demos y reuniones para conectar a quienes disfrutan del audio. Los anunciamos siempre en nuestras redes.",
      },
    ],
  },
]

export function FAQs() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (key: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key)
    } else {
      newOpenItems.add(key)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faqs" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <AnimateOnScroll>
          <h2 className="mb-16 font-normal text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Preguntas frecuentes
          </h2>
        </AnimateOnScroll>

        {/* Contenido de FAQs */}
        <div className="space-y-16">
          {faqData.map((category, categoryIndex) => (
            <AnimateOnScroll key={categoryIndex} delay={categoryIndex * 100}>
              <div className="grid gap-10 lg:grid-cols-[minmax(200px,260px)_1fr]">
                {/* Columna izquierda: título de categoría */}
                <div>
                  <h3 className="font-normal text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)" }}>
                    {category.category}
                  </h3>
                </div>

                {/* Columna derecha: acordeones */}
                <div className="space-y-0">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`
                    const isOpen = openItems.has(key)
                    const isFirst = questionIndex === 0

                    return (
                      <AccordionItem
                        key={key}
                        faq={faq}
                        isOpen={isOpen}
                        onToggle={() => toggleItem(key)}
                        isFirst={isFirst}
                      />
                    )
                  })}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  isFirst,
}: {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
  isFirst: boolean
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  return (
    <div className={`border-b border-white/10 ${!isFirst ? "border-t border-t-white/10" : ""}`}>
      <h4>
        <button
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              onToggle()
            }
          }}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.question.slice(0, 20).replace(/\s/g, "-")}`}
          className="flex w-full items-center justify-between py-4 sm:py-6 min-h-[56px] text-left transition-opacity hover:opacity-80 focus:outline-none"
        >
          <span className="pr-8 text-white" style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
            {faq.question}
          </span>
          <span className="transition-transform duration-300 ease-in-out" aria-hidden="true">
            {isOpen ? <Minus className="h-6 w-6 flex-shrink-0" /> : <Plus className="h-6 w-6 flex-shrink-0" />}
          </span>
        </button>
      </h4>

      <div
        id={`faq-answer-${faq.question.slice(0, 20).replace(/\s/g, "-")}`}
        role="region"
        aria-hidden={!isOpen}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="pb-6 pl-1 sm:pl-2">
          <p className="text-gray-300" style={{ fontSize: "clamp(1rem, 2.2vw, 1.125rem)" }}>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}
