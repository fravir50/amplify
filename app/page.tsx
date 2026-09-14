import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroHome } from "@/components/home/hero-home"
import { SituacionesNav } from "@/components/home/situaciones-nav"
import { ProductosDestacados } from "@/components/home/productos-destacados"
import { PorQueAmplify } from "@/components/home/por-que-amplify"
import { FaqsHome } from "@/components/home/faqs-home"
import { CTAWhatsappGeneral } from "@/components/cta-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--amp-paper)" }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:text-white"
        style={{ backgroundColor: "var(--amp-amber)" }}
      >
        Ir al contenido principal
      </a>

      <Navbar />
      <HeroHome />

      <div id="main-content">
        <SituacionesNav />
        <ProductosDestacados />
        <PorQueAmplify />
        <FaqsHome />
      </div>

      {/* CTA final */}
      <section
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center"
        style={{ backgroundColor: "var(--amp-dark-bg)" }}
      >
        <div className="mx-auto max-w-xl">
          <h2
            className="mb-4 font-serif font-normal"
            style={{ color: "var(--amp-dark-text)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1.15 }}
          >
            ¿Dudás qué comprar?
          </h2>
          <p
            className="mb-8 text-base leading-relaxed"
            style={{ color: "var(--amp-dark-muted)" }}
          >
            Contanos tu situación y te recomendamos la mejor opción para tu presupuesto y espacio.
          </p>
          <CTAWhatsappGeneral
            mensaje="Hola, quiero que me ayuden a elegir un producto de audio."
            label="Hablar con un especialista"
            size="lg"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
