import type { LifestyleProduct } from "@/data/lifestyle"
import { averageRating } from "@/data/lifestyle"
import { StarRating } from "./star-rating"

export function Reviews({ product }: { product: LifestyleProduct }) {
  const avg = averageRating(product)
  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold text-white">Reseñas de quienes ya lo tienen</h2>
      <div className="mb-8 flex items-center gap-3">
        <StarRating value={avg} size="md" />
        <span className="text-white/70">
          {avg} / 5 · {product.reviews.length} reseñas verificadas
        </span>
      </div>
      <ul className="space-y-6">
        {product.reviews.map((r) => (
          <li key={`${r.autor}-${r.fecha}`} className="border-b border-white/5 pb-6">
            <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-medium text-white">{r.autor}</span>
              <span className="text-xs text-white/40">
                {r.ciudad} · {r.fecha}
              </span>
              {r.verificado && (
                <span className="rounded-full border border-[#C9A96E]/30 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#C9A96E]">
                  Compra verificada
                </span>
              )}
            </div>
            <StarRating value={r.rating} />
            <p className="mt-3 text-sm leading-relaxed text-white/60">{r.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
