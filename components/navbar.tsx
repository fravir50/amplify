"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { CartButton } from "@/components/lifestyle/cart-button"

const WA =
  "https://wa.me/5491136228970?text=Hola%2C%20estoy%20interesado%20en%20hacer%20un%20pedido%20o%20adquirir%20un%20producto%20del%20cat%C3%A1logo%20de%20Amplify.%20%C2%BFMe%20pueden%20ayudar%3F"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHifi = pathname.startsWith("/catalogo")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
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

  const links = isHifi
    ? [
        { href: "/", label: "Tienda" },
        { href: "/catalogo", label: "Catálogo Hi-Fi" },
        { href: "/#faqs", label: "FAQs" },
      ]
    : [
        { href: "/tienda", label: "Tienda" },
        { href: "/#como-armar", label: "Cómo armar" },
        { href: "/catalogo", label: "Catálogo Hi-Fi" },
        { href: "/#faqs", label: "FAQs" },
      ]

  return (
    <>
      <nav className="fixed inset-x-0 top-4 sm:top-6 z-40 flex justify-center pointer-events-none px-4 sm:px-6">
        <div
          className={`w-full max-w-[95vw] lg:max-w-[1200px] xl:max-w-[1300px] rounded-full border backdrop-blur-md pointer-events-auto transition-all duration-500 ease-out ${
            scrolled
              ? "shadow-xl bg-white/5 backdrop-blur-xl border-white/20 scale-[0.98]"
              : "shadow-lg bg-white/10 backdrop-blur-lg border-white/15 scale-100"
          }`}
        >
          <div className="hidden md:flex h-14 lg:h-16 items-center justify-between px-6 lg:px-8">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center transition-transform duration-300 hover:scale-105 flex-shrink-0"
            >
              <Image
                src="/images/logo-amplify-vector.png"
                alt="amplify"
                width={24}
                height={24}
                className="h-5 lg:h-6 w-auto object-contain"
                priority
              />
            </Link>

            <div className="flex items-center gap-0.5 lg:gap-1">
              {links.map((link, i) => (
                <span key={link.href + link.label} className="flex items-center">
                  {i > 0 && <div className="h-5 w-px bg-white/30" />}
                  <Link
                    href={link.href}
                    className="px-3 lg:px-4 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <CartButton />
              {isHifi ? (
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white bg-[#FF6B35] transition-all duration-300 hover:bg-[#FF6B35]/90 hover:scale-105 flex-shrink-0"
                >
                  Hacé tu pedido
                </a>
              ) : (
                <Link
                  href="/tienda"
                  className="rounded-full px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-white bg-[#FF6B35] transition-all duration-300 hover:bg-[#FF6B35]/90 hover:scale-105 flex-shrink-0"
                >
                  Comprar
                </Link>
              )}
            </div>
          </div>

          <div className="flex h-14 items-center px-4 md:hidden">
            <div className="w-10 flex-shrink-0">
              <CartButton />
            </div>
            <Link href="/" onClick={handleLogoClick} className="flex-1 flex items-center justify-center h-full">
              <Image
                src="/images/logo-amplify-vector.png"
                alt="amplify"
                width={28}
                height={28}
                className="h-6 w-auto object-contain"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/30"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="h-0.5 w-5 rounded-full bg-white" />
                <span className="h-0.5 w-5 rounded-full bg-white" />
                <span className="h-0.5 w-5 rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/95 text-white md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
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
              alt="amplify"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="text-sm text-white/80 min-h-[44px] min-w-[44px]"
            aria-label="Cerrar menú"
          >
            Cerrar
          </button>
        </div>
        <nav className="mt-10 px-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={toggleMenu}
              className="block text-2xl font-normal hover:text-[#ff6b35] py-3 min-h-[48px]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/carrito"
            onClick={toggleMenu}
            className="block text-2xl font-normal hover:text-[#ff6b35] py-3 min-h-[48px]"
          >
            Carrito
          </Link>
        </nav>
        <div className="px-6 mt-10">
          {isHifi ? (
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="block w-full text-center rounded-full py-4 text-base font-medium text-white bg-[#FF6B35]"
            >
              Hacé tu pedido
            </a>
          ) : (
            <Link
              href="/tienda"
              onClick={toggleMenu}
              className="block w-full text-center rounded-full py-4 text-base font-medium text-white bg-[#FF6B35]"
            >
              Comprar
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
