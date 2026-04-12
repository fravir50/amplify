"use client"

import { Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimateOnScroll } from "./animate-on-scroll"

const posts = [
  {
    id: 1,
    image: "/images/home-theater.jpeg",
    instagramUrl: "https://instagram.com/amplify.arg",
  },
  {
    id: 2,
    image: "/images/wiim-vs-bt.jpeg",
    instagramUrl: "https://instagram.com/amplify.arg",
  },
  {
    id: 3,
    image: "/images/comparativa-sennheiser.jpeg",
    instagramUrl: "https://instagram.com/amplify.arg",
  },
]

export function Comunidad() {
  return (
    <section
      id="comunidad"
      className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="font-normal text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Unite a nuestra comunidad
            </h2>
            <p
              className="text-gray-200 max-w-4xl mx-auto"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.125rem)" }}
            >
              Descubrí experiencias, recomendaciones y contenido creado por y
              para quienes disfrutan del buen audio.
            </p>
          </div>
        </AnimateOnScroll>

        {/* GRID DE POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimateOnScroll key={post.id} delay={index * 150}>
              <Link
                href={post.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden block focus:outline-none"
              >
                {/* IMAGEN */}
                <Image
                  src={post.image}
                  alt="Post de Amplify en Instagram"
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-[#ff6b35] font-medium">
                    <span>Ver en Instagram</span>
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* BOTÓN VER MÁS */}
        <AnimateOnScroll delay={500}>
          <div className="flex justify-center mt-12">
            <Link
              href="https://instagram.com/amplify.arg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors min-h-[48px]"
              style={{
                padding: "clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)",
                fontSize: "16px",
              }}
            >
              Ver más
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
