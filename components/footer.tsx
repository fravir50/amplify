import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-black to-[#0a0a0a]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Tagline */}
          <p className="text-gray-400 max-w-md leading-relaxed" style={{ fontSize: "clamp(1rem, 2.2vw, 1.125rem)" }}>
            Audio del mundo, comunidad local.
          </p>

          {/* Social Link */}
          <a
            href="https://linktr.ee/amplify.argentina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-[#ff6b35] transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-600 group-hover:border-[#ff6b35] group-hover:scale-110 flex items-center justify-center transition-all duration-300">
              <Image
                src="/images/linktree-bafynmeua3noot52xbu71.webp"
                alt="Linktree"
                width={20}
                height={20}
                className="invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                quality={80}
                loading="lazy"
              />
            </div>
            <span className="text-sm sm:text-base">Visitá nuestro Linktree</span>
          </a>

          {/* Copyright */}
          <p className="text-gray-500 text-sm pt-4">
            © {new Date().getFullYear()} Amplify. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
