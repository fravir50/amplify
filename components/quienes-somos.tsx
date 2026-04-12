"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

export function QuienesSomos() {
  return (
    <section id="quienes-somos" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2 className="mb-10 font-normal text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Qué es Amplify
          </h2>
        </AnimateOnScroll>

        <div className="space-y-8">
          <AnimateOnScroll delay={100}>
            <p
              className="leading-relaxed text-white"
              style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)", lineHeight: "1.7" }}
            >
              Amplify nace con una misión simple y contundente: darte acceso a los equipos de audio que no podés
              conseguir en Argentina, o que solo se encuentran a precios imposibles. Ponemos a tu alcance un catálogo
              global y variado, con valores internacionales y opciones que antes parecían inalcanzables.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p
              className="leading-relaxed text-white"
              style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)", lineHeight: "1.7" }}
            >
              Pero Amplify es más que eso. Somos una comunidad abierta, donde conviven quienes recién empiezan en el
              mundo del audio y los audiófilos que buscan su endgame. No excluimos a nadie: invitamos a todos.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <p
              className="leading-relaxed text-white"
              style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)", lineHeight: "1.7" }}
            >
              Queremos ser tu puerta de entrada al buen sonido y el aliado confiable para quienes ya viven este mundo.
              Un lugar para descubrir, conectar y sentir el audio con otra profundidad.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
