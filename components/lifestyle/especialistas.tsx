import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function Especialistas() {
  return (
    <section id="especialistas" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <h2 className="mb-8 font-normal text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Los que saben de audio, ahora también en plug-and-play.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p
            className="max-w-4xl leading-relaxed text-white/80"
            style={{ fontSize: "clamp(1.05rem, 2.3vw, 1.25rem)", lineHeight: "1.7" }}
          >
            Vendemos Rega, KEF y Marantz a audiófilos. Por eso no te vamos a vender un parlante Bluetooth como si fuera
            un milagro. Te vamos a decir para qué sirve, y para qué no. Bose y Denon Home primero — porque es donde el
            mercado argentino no tiene un especialista. Sonos, si ya estás en ese mundo.
          </p>
        </AnimateOnScroll>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              t: "Bose, con stock",
              d: "Portátiles y auriculares que hoy se venden bajo pedido. Acá se ven las unidades.",
            },
            {
              t: "Pesos y cuotas",
              d: "Lista en ARS. Seis cuotas a la vista. Sin cotización de 48 horas para un Flex.",
            },
            {
              t: "Oído hi-fi",
              d: "La misma gente que arma sistemas con separados te dice cuándo alcanza un soundbar.",
            },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
              <h3 className="mb-2 text-lg font-semibold text-[#C9A96E]">{item.t}</h3>
              <p className="text-sm leading-relaxed text-white/60">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
