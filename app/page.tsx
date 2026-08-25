import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { StagingBanner } from "@/components/lifestyle/staging-banner"
import { LifestyleHero } from "@/components/lifestyle/lifestyle-hero"
import { FeaturedGrid } from "@/components/lifestyle/featured-grid"
import { Especialistas } from "@/components/lifestyle/especialistas"
import { ComoArmar } from "@/components/lifestyle/como-armar"
import { HifiBridge } from "@/components/lifestyle/hifi-bridge"
import { LifestyleFAQs } from "@/components/lifestyle/lifestyle-faqs"

export default function Home() {
  return (
    <main className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#FF6B35] focus:text-white focus:rounded-md"
      >
        Ir al contenido principal
      </a>
      <Navbar />
      <LifestyleHero />
      <div
        id="main-content"
        style={{
          background: "linear-gradient(to bottom, #000000 0%, #080808 25%, #0f0f0f 50%, #141414 75%, #181818 100%)",
        }}
      >
        <StagingBanner />
        <Especialistas />
        <FeaturedGrid />
        <ComoArmar />
        <HifiBridge />
        <LifestyleFAQs />
      </div>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
