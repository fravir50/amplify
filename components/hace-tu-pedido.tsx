import { AnimateOnScroll } from "./animate-on-scroll"

const WA_URL =
  "https://wa.me/5491136228970?text=Hola%2C%20quiero%20consultar%20por%20un%20equipo%20a%20pedido."

const pills = [
  "Respuesta en 48hs",
  "Sin compromiso",
  "Envío a todo el país",
]

export function HaceTuPedido() {
  return (
    <section id="hace-tu-pedido" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2
            className="font-normal text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Hacé tu pedido
          </h2>
          <p className="text-white/50 max-w-xl mb-12" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
            ¿Tenés un equipo en mente que no está en el catálogo? Lo traemos.
            Cualquier marca, cualquier modelo, desde cualquier parte del mundo.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-8 sm:p-12 max-w-xl">

            {/* Pills informativos */}
            <div className="flex flex-wrap gap-2 mb-8">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-400"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Copy */}
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Escribinos por WhatsApp con la marca y modelo que te interesa y te
              cotizamos en menos de 48 horas. Sin formularios, sin vueltas.
            </p>

            {/* Botón WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-4 text-base transition-all duration-200 hover:scale-[1.03] active:scale-95"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Abrir WhatsApp
            </a>

            {/* Instagram */}
            <p className="mt-5 text-sm text-gray-500">
              También por Instagram:{" "}
              <a
                href="https://instagram.com/amplify.audio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A96E] hover:underline"
              >
                @amplify.audio
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
