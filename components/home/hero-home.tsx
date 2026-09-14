import Link from "next/link"

export function HeroHome() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Foto de fondo */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/image.png')] bg-cover bg-no-repeat"
        style={{ backgroundPosition: "50% 15%" }}
      >
        {/* Overlay oscuro arriba, desvanece a paper abajo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,10,0,0.72) 0%, rgba(20,10,0,0.60) 55%, rgba(247,244,239,1) 100%)",
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-5 sm:px-8 pt-24 pb-40 text-center">
        <p
          className="mb-4 text-xs font-semibold uppercase tracking-[0.28em]"
          style={{ color: "var(--amp-amber)" }}
        >
          Bose · Denon · Klipsch · Polk
        </p>

        <h1
          className="mb-5 max-w-4xl font-serif font-normal text-white text-balance"
          style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)", lineHeight: 1.08, letterSpacing: "-0.01em" }}
        >
          Sonido que se siente,
          <br />
          no que se explica.
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl text-pretty leading-relaxed text-white/80"
          style={{ fontSize: "clamp(1rem, 2.8vw, 1.35rem)" }}
        >
          Vendemos audio para el hogar con criterio publicado y precio en USD.
          Retiro en Núñez o Palermo. Sin carrito, sin sorpresas.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/productos"
            className="rounded-full px-8 py-3.5 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--amp-amber)", color: "#fff" }}
          >
            Ver productos
          </Link>
          <Link
            href="#situaciones"
            className="rounded-full border-2 border-white/70 px-8 py-3.5 text-base text-white transition-all hover:bg-white/10"
          >
            ¿Qué necesitás?
          </Link>
        </div>
      </div>
    </section>
  )
}
