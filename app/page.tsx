import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { QuienesSomos } from "@/components/quienes-somos"
import { ComoFunciona } from "@/components/como-funciona"
import { TiposProductos } from "@/components/tipos-productos"
import { Comunidad } from "@/components/comunidad"
import { FAQs } from "@/components/faqs"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Skip to content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#FF6B35] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Ir al contenido principal
      </a>
      <Navbar />
      <Hero />
      <div
        id="main-content"
        className="bg-gradient-to-b"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #080808 25%, #0f0f0f 50%, #141414 75%, #181818 100%)",
        }}
      >
        <QuienesSomos />
        <ComoFunciona />
        <TiposProductos />
        <Comunidad />
        <FAQs />
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
