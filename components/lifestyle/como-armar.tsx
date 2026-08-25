import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const caminos = [
  {
    title: "Llevar a todos lados",
    text: "Mochila, balcón, río. Empieza por el SoundLink Micro; si querés más grave, el Flex.",
    href: "/tienda?categoria=Portátiles",
    cta: "Ver portátiles",
  },
  {
    title: "Callar el mundo",
    text: "Subte, avión, home office. QuietComfort. Si los vas a usar todos los días, el Ultra.",
    href: "/tienda?categoria=Auriculares",
    cta: "Ver auriculares",
  },
  {
    title: "La tele, bien",
    text: "Un HDMI. Denon DHT-S218 para entrar; Bose Smart Soundbar si el living es el centro.",
    href: "/tienda?categoria=Soundbars",
    cta: "Ver soundbars",
  },
  {
    title: "Un ambiente que se queda",
    text: "Wi-Fi, app, AirPlay. Denon Home 150. Sonos Era 100 SL si ya vivís en ese ecosistema.",
    href: "/tienda?categoria=Multiroom",
    cta: "Ver multiroom",
  },
]

export function ComoArmar() {
  return (
    <section id="como-armar" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <h2 className="mb-4 font-normal text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Cómo armar tu sistema
          </h2>
          <p className="mb-12 max-w-2xl text-white/50">
            Cuatro caminos. Sin racks, sin 40 SKUs. Si después querés separados, está el catálogo hi-fi.
          </p>
        </AnimateOnScroll>
        <div className="grid gap-6 sm:grid-cols-2">
          {caminos.map((c, i) => (
            <AnimateOnScroll key={c.title} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-[#0f0f0f] p-7">
                <h3 className="mb-3 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mb-6 flex-1 text-white/55">{c.text}</p>
                <Link href={c.href} className="text-sm text-[#FF6B35] hover:underline">
                  {c.cta} →
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
