import Link from "next/link"

export function LifestyleHero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-[url('/images/image.png')] bg-cover bg-no-repeat bg-[position:50%_12%] md:bg-center"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(42, 21, 8, 0.55) 0%, rgba(26, 10, 0, 0.90) 70%, rgba(0, 0, 0, 1) 100%)",
          }}
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[5]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 50%, rgb(0, 0, 0) 100%)",
        }}
      />
      <div className="relative z-10 flex min-h-[88vh] flex-col items-center justify-center px-4 sm:px-6 pt-20 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A96E]">
          Bose · Denon Home · plug-and-play
        </p>
        <h1 className="mb-6 max-w-5xl text-balance text-[clamp(32px,8vw,76px)] font-semibold leading-[1.1] tracking-tight text-white">
          Escuchá ya.
          <br />
          Sin rack, sin vueltas.
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-pretty text-[clamp(16px,3.4vw,28px)] font-normal leading-[1.35] text-white/85">
          Especialistas en Bose y plug-and-play, con oído hi-fi. Precios en pesos, cuotas, stock a la vista.
        </p>
        <div className="flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Link
            href="/tienda"
            className="w-full rounded-full bg-[#FF6B35] px-7 py-3.5 text-center text-base font-medium text-white transition-all hover:bg-[#FF6B35]/90 hover:scale-[1.02] sm:w-auto"
          >
            Comprar
          </Link>
          <Link
            href="#como-armar"
            className="w-full rounded-full border-2 border-white/80 px-7 py-3.5 text-center text-base text-white transition-all hover:bg-white/10 sm:w-auto"
          >
            Cómo armar tu sistema
          </Link>
        </div>
      </div>
    </section>
  )
}
