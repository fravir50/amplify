"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  return (
    <>
      {/* CONTENEDOR PRINCIPAL NAV */}
      <nav className="fixed inset-x-0 top-4 sm:top-6 z-40 flex justify-center pointer-events-none px-4 sm:px-6">
        <div
          className={`w-full max-w-[95vw] lg:max-w-[1200px] xl:max-w-[1300px] rounded-full border backdrop-blur-md pointer-events-auto transition-all duration-500 ease-out ${
            scrolled
              ? "shadow-xl bg-white/5 backdrop-blur-xl border-white/20 scale-[0.98]"
              : "shadow-lg bg-white/10 backdrop-blur-lg border-white/15 scale-100"
          }`}
        >
          {/* DESKTOP NAVBAR */}
          <div className="hidden md:flex h-14 lg:h-16 items-center justify-between px-8">
            {/* Logo izquierda */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center transition-transform duration-300 hover:scale-105 flex-shrink-0"
            >
              <Image
                src="/images/logo-amplify-vector.png"
                alt="Amplify - Audio Hi-Fi y Hi-End en Argentina"
                width={24}
                height={24}
                className="h-5 lg:h-6 w-auto object-contain"
                priority
              />
            </Link>

            {/* Links centro */}
            <div className="flex items-center gap-0.5 lg:gap-1">
              <Link
                href="/#quienes-somos"
                className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none"
              >
                Quiénes somos
              </Link>
              <div className="h-5 w-px bg-white/30" />
              <Link
                href="/#como-funciona"
                className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none"
              >
                Cómo funciona
              </Link>
              <div className="h-5 w-px bg-white/30" />
              <Link
                href="/catalogo"
                className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none"
              >
                Catálogo
              </Link>
              <div className="h-5 w-px bg-white/30" />
              <Link
                href="/#comunidad"
                className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none"
              >
                Comunidad
              </Link>
              <div className="h-5 w-px bg-white/30" />
              <Link
                href="/#faqs"
                className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none"
              >
                FAQs
              </Link>
            </div>

            <Link
              href="/#hace-tu-pedido"
              className="rounded-full px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white bg-[#FF6B35] transition-all duration-300 hover:bg-[#FF6B35]/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] active:scale-95 flex-shrink-0 -mr-4"
            >
              Hacé tu pedido
            </Link>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="flex h-14 items-center px-4 md:hidden">
            {/* Espaciador izquierdo para centrar logo */}
            <div className="w-10 flex-shrink-0" />

            <Link href="/" onClick={handleLogoClick} className="flex-1 flex items-center justify-center h-full">
              <Image
                src="/images/logo-amplify-vector.png"
                alt="Amplify - Audio Hi-Fi y Hi-End en Argentina"
                width={28}
                height={28}
                className="h-6 w-auto object-contain"
                priority
              />
            </Link>

            {/* Botón MENÚ HAMBURGUESA a la derecha */}
            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/30 transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95 focus:outline-none"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="h-0.5 w-5 rounded-full bg-white transition-all duration-300" />
                <span className="h-0.5 w-5 rounded-full bg-white transition-all duration-300" />
                <span className="h-0.5 w-5 rounded-full bg-white transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY DE MENÚ MOBILE con animación */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 text-white md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header del menú */}
        <div className="flex items-center justify-between px-6 pt-6">
          <Link
            href="/"
            onClick={(e) => {
              handleLogoClick(e)
              toggleMenu()
            }}
          >
            <Image
              src="/images/logo-amplify-vector.png"
              alt="Amplify - Audio Hi-Fi y Hi-End en Argentina"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="text-sm font-normal text-white/80 transition-colors hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
            aria-label="Cerrar menú"
          >
            Cerrar
          </button>
        </div>

        {/* Links con animación escalonada */}
        <nav className="mt-10 px-6 space-y-2">
          <Link
            href="/#quienes-somos"
            onClick={toggleMenu}
            className={`block text-2xl font-normal transition-all duration-500 hover:text-[#ff6b35] py-3 min-h-[48px] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            style={{ transitionDelay: menuOpen ? "100ms" : "0ms" }}
          >
            Quiénes somos
          </Link>
          <Link
            href="/#como-funciona"
            onClick={toggleMenu}
            className={`block text-2xl font-normal transition-all duration-500 hover:text-[#ff6b35] py-3 min-h-[48px] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            style={{ transitionDelay: menuOpen ? "150ms" : "0ms" }}
          >
            Cómo funciona
          </Link>
          <Link
            href="/catalogo"
            onClick={toggleMenu}
            className={`block text-2xl font-normal transition-all duration-500 hover:text-[#ff6b35] py-3 min-h-[48px] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            style={{ transitionDelay: menuOpen ? "200ms" : "0ms" }}
          >
            Catálogo
          </Link>
          <Link
            href="/#comunidad"
            onClick={toggleMenu}
            className={`block text-2xl font-normal transition-all duration-500 hover:text-[#ff6b35] py-3 min-h-[48px] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            style={{ transitionDelay: menuOpen ? "250ms" : "0ms" }}
          >
            Comunidad
          </Link>
          <Link
            href="/#faqs"
            onClick={toggleMenu}
            className={`block text-2xl font-normal transition-all duration-500 hover:text-[#ff6b35] py-3 min-h-[48px] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
          >
            FAQs
          </Link>
        </nav>

        <div
          className={`px-6 mt-10 transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: menuOpen ? "350ms" : "0ms" }}
        >
          <Link
            href="/#hace-tu-pedido"
            onClick={toggleMenu}
            className="block w-full text-center rounded-full py-4 min-h-[48px] text-base font-medium text-white bg-[#FF6B35] transition-all duration-300 hover:bg-[#FF6B35]/90 active:scale-95 focus:outline-none"
          >
            Hacé tu pedido
          </Link>
        </div>
      </div>
    </>
  )
}
