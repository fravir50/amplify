"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Static (mobile recorte más arriba) */}
      <div
        className="
          absolute inset-0 z-0
          bg-[url('/images/image.png')]
          bg-cover bg-no-repeat
          bg-[position:50%_12%]
          md:bg-center
        "
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
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 50%, rgb(0, 0, 0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 pt-4 sm:pt-24 text-center">
        <div className="mx-auto max-w-6xl w-full">
          {/* TÍTULO */}
          <h1 className="mb-6 sm:mb-9 text-balance text-[clamp(32px,8vw,80px)] font-semibold leading-[1.1] tracking-tight text-white md:mb-12 animate-fade-in">
            El audio que querés.
            <br />
            La comunidad que lo potencia.
          </h1>

          {/* SUBTÍTULO */}
          <p className="mx-auto mb-6 sm:mb-7 max-w-4xl text-pretty text-[clamp(16px,4vw,32px)] font-normal leading-[1.3] text-white md:mb-9 animate-fade-in animation-delay-200">
            Equipos de audio Hi-Fi y Hi-End del mundo y un espacio para quienes escuchan distinto. Todo en un solo lugar.
          </p>

          {/* BOTÓN */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 pt-3 sm:pt-5 sm:flex-row animate-fade-in animation-delay-400">
            <Link
              href="/#comunidad"
              scroll={true}
              className="rounded-full border-[2px] border-white/80 bg-transparent px-6 sm:px-7 py-3 sm:py-4 min-h-[48px] text-base sm:text-lg font-normal text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105 active:scale-95 w-full sm:w-auto max-w-xs sm:max-w-none focus:outline-none"
            >
              Unite a la comunidad
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
