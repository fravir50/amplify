import Link from "next/link"

export function HifiBridge() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl border border-white/8 bg-[#0f0f0f] p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">¿Buscás separados, bandejas, KEF o Rega?</p>
          <p className="mt-1 text-sm text-white/50">
            Eso vive en el catálogo hi-fi — precios en USD, te asesoramos por WhatsApp. No se mezcla con esta tienda.
          </p>
        </div>
        <Link
          href="/catalogo"
          className="flex-shrink-0 rounded-full border border-white/20 px-6 py-2.5 text-center text-sm text-white/80 transition hover:border-[#C9A96E] hover:text-[#C9A96E]"
        >
          Ir al catálogo hi-fi
        </Link>
      </div>
    </section>
  )
}
