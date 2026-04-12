# Catálogo "En Stock" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Agregar un catálogo de productos `/catalogo` y vista de detalle `/catalogo/[id]` a amplify-arg.com, con filtros por categoría, cards premium sin precio, y CTA vía WhatsApp.

**Architecture:** Rutas separadas con Next.js App Router (`app/catalogo/page.tsx` + `app/catalogo/[id]/page.tsx`). Datos en `data/productos.ts` como array TypeScript tipado. Componentes reutilizables en `components/catalogo/`. El Navbar recibe un nuevo link `href="/catalogo"`.

**Tech Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Geist · lucide-react · `cn()` from `lib/utils.ts`

> **Nota:** El proyecto no tiene test runner configurado. Los pasos de verificación usan `npm run build` + revisión visual en `npm run dev`.

---

## File Map

| Acción | Archivo |
|---|---|
| Crear | `data/productos.ts` |
| Crear | `components/catalogo/FiltroCategoria.tsx` |
| Crear | `components/catalogo/ProductoCard.tsx` |
| Crear | `app/catalogo/page.tsx` |
| Crear | `app/catalogo/[id]/page.tsx` |
| Modificar | `components/navbar.tsx` |

---

## Task 1: Datos de productos

**Files:**
- Create: `data/productos.ts`

- [ ] **Step 1: Crear `data/productos.ts`** con interfaz TypeScript y 4 productos de ejemplo

```ts
// data/productos.ts
// ─────────────────────────────────────────────────────────────
// CÓMO EDITAR: cada objeto en el array `productos` es un producto.
// Para agregar uno nuevo, copiá un bloque existente y cambiá los valores.
// El campo `id` debe ser único, en minúsculas, con guiones (ej: "wiim-ultra").
// El campo `imagen` apunta a un archivo en /public/images/products/.
// El campo `encajaCon` es un array de `id`s de otros productos relacionados.
// ─────────────────────────────────────────────────────────────

export interface Producto {
  id: string
  nombre: string
  marca: string
  categoria: "Amplificadores" | "DACs" | "Streamers" | "Parlantes" | "Auriculares" | "Accesorios"
  frase: string
  imagen: string
  descripcion: string
  idealPara: string[]
  specs: Record<string, string>
  encajaCon: string[]
  badge: string
}

export const WHATSAPP_NUMBER = "5491100000000"

export const productos: Producto[] = [
  {
    id: "wiim-ultra",
    nombre: "WiiM Ultra",
    marca: "WiiM",
    categoria: "Streamers",
    frase: "Streamer todo-en-uno con DAC integrado y control de sala.",
    imagen: "/images/products/streamer-wiim.jpg",
    descripcion:
      "El WiiM Ultra es el streamer más completo de la línea WiiM. Combina streaming de alta resolución, DAC integrado, preamplificador y corrección de sala en un solo equipo compacto. Una solución sin compromisos para quien quiere calidad digital sin armar un rack completo.",
    idealPara: [
      "Primer equipo de streaming Hi-Fi",
      "Escritorios con parlantes activos",
      "Usuarios que quieren una solución todo-en-uno sin complicaciones",
    ],
    specs: {
      DAC: "ESS ES9038Q2M",
      Conectividad: "Wi-Fi 6, Bluetooth 5.3, AirPlay 2, Chromecast, HDMI eARC",
      Salidas: "RCA, Óptica, Subwoofer, Auriculares 6.35mm",
      "Resolución máxima": "PCM 384kHz/32-bit, DSD256",
      "Corrección de sala": "Sí (micrófono incluido)",
      Dimensiones: "213 × 213 × 38mm",
    },
    encajaCon: ["kef-q150", "ifi-zen-dac-3"],
    badge: "Entrega inmediata",
  },
  {
    id: "kef-q150",
    nombre: "Q150",
    marca: "KEF",
    categoria: "Parlantes",
    frase: "Parlante bookshelf con tweeter concéntrico Uni-Q para una imagen sonora excepcional.",
    imagen: "/images/products/parlantes-kef.jpg",
    descripcion:
      "Los KEF Q150 son parlantes de estante que incorporan el tweeter concéntrico Uni-Q, una tecnología que coloca el tweeter en el punto acústico del woofer. El resultado es una imagen sonora amplia y coherente que trasciende el tamaño del gabinete. Son versátiles, bien construidos y suenan muy por encima de su precio.",
    idealPara: [
      "Setup de escritorio de alta calidad",
      "Living room con amplificador integrado",
      "Primer par de parlantes Hi-Fi pasivos",
    ],
    specs: {
      Configuración: "2 vías, bass-reflex",
      "Tweeter": "19mm aluminio (Uni-Q)",
      Woofer: "130mm",
      "Respuesta en frecuencia": "51Hz – 28kHz",
      Impedancia: "8 Ohm",
      Sensibilidad: "86dB",
      "Potencia recomendada": "10–100W",
    },
    encajaCon: ["wiim-ultra"],
    badge: "Entrega inmediata",
  },
  {
    id: "ifi-zen-dac-3",
    nombre: "Zen DAC 3",
    marca: "iFi Audio",
    categoria: "DACs",
    frase: "DAC/amplificador de auriculares con salida balanceada y soporte nativo para MQA.",
    imagen: "/images/products/dac-ifi.jpg",
    descripcion:
      "El iFi Zen DAC 3 es el punto de entrada perfecto al audio digital de alta resolución. Convierte la señal de tu computadora en una salida analógica de alta calidad, con soporte para archivos MQA, DSD y PCM de alta resolución. Su salida balanceada de 4.4mm es inusual en este rango de precio y marca una diferencia real.",
    idealPara: [
      "Setup de escritorio con auriculares de alta gama",
      "Mejora de calidad desde una notebook o PC",
      "Escucha nocturna con auriculares",
    ],
    specs: {
      DAC: "Burr-Brown",
      Entradas: "USB-C, Coaxial, Óptica",
      Salidas: "RCA, 6.35mm, 4.4mm balanceado",
      "Resolución máxima": "PCM 768kHz/32-bit, DSD512, MQA",
      "Potencia auriculares": "280mW @ 32Ω (balanceado)",
      Alimentación: "USB-C 5V",
    },
    encajaCon: ["focal-celestee"],
    badge: "Entrega inmediata",
  },
  {
    id: "focal-celestee",
    nombre: "Celestee",
    marca: "Focal",
    categoria: "Auriculares",
    frase: "Auricular circumaural cerrado de referencia, fabricado en Francia.",
    imagen: "/images/products/auriculares-focal.jpg",
    descripcion:
      "El Focal Celestee es un auricular cerrado de gama alta fabricado en Francia. Usa el driver de 40mm M-Shape de Focal, conocido por su respuesta de graves rápida y controlada. La construcción es premium: aluminio y cuero genuino. Ideal para quien quiere aislamiento y calidad sin abrir la billetera a los Utopia.",
    idealPara: [
      "Escucha en espacios compartidos donde el aislamiento importa",
      "Viajes o uso portátil premium",
      "Desk setup que requiere cerrado de alta calidad",
    ],
    specs: {
      Tipo: "Circumaural cerrado",
      Driver: "40mm M-Shape aluminio/magnesio",
      "Respuesta en frecuencia": "5Hz – 23kHz",
      Impedancia: "35 Ohm",
      Sensibilidad: "105dB SPL/1mW",
      "Peso (sin cable)": "410g",
      Cable: "1.2m OFC con conector 3.5mm + adaptador 6.35mm",
    },
    encajaCon: ["ifi-zen-dac-3"],
    badge: "Entrega inmediata",
  },
]
```

- [ ] **Step 2: Verificar que no hay errores de sintaxis**

```bash
cd /Users/francovirzi/Documents/Amplify && npx tsc --noEmit 2>&1 | head -20
```

Expected: sin errores relacionados a `data/productos.ts`

- [ ] **Step 3: Commit**

```bash
cd /Users/francovirzi/Documents/Amplify
git add data/productos.ts
git commit -m "feat: add product data with TypeScript interface"
```

---

## Task 2: Componente FiltroCategoria

**Files:**
- Create: `components/catalogo/FiltroCategoria.tsx`

- [ ] **Step 1: Crear directorio y componente**

```bash
mkdir -p /Users/francovirzi/Documents/Amplify/components/catalogo
```

```tsx
// components/catalogo/FiltroCategoria.tsx
"use client"

import { cn } from "@/lib/utils"

export const CATEGORIAS = [
  "Todos",
  "Amplificadores",
  "DACs",
  "Streamers",
  "Parlantes",
  "Auriculares",
  "Accesorios",
] as const

interface Props {
  categoriaActiva: string
  onChange: (cat: string) => void
}

export function FiltroCategoria({ categoriaActiva, onChange }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {CATEGORIAS.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={cn(
            "whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 focus:outline-none",
            cat === categoriaActiva
              ? "border-[#FF6B35] bg-[#FF6B35]/5 text-[#FF6B35]"
              : "border-white/20 text-white/60 hover:border-white/40 hover:text-white"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/francovirzi/Documents/Amplify
git add components/catalogo/FiltroCategoria.tsx
git commit -m "feat: add FiltroCategoria pill component"
```

---

## Task 3: Componente ProductoCard

**Files:**
- Create: `components/catalogo/ProductoCard.tsx`

- [ ] **Step 1: Crear `components/catalogo/ProductoCard.tsx`**

```tsx
// components/catalogo/ProductoCard.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Producto } from "@/data/productos"
import { WHATSAPP_NUMBER } from "@/data/productos"

interface Props {
  producto: Producto
  style?: React.CSSProperties
}

function buildWhatsAppUrl(nombre: string): string {
  const text = encodeURIComponent(
    `Hola! Me interesa el ${nombre} que vi en la web de Amplify. ¿Podrían darme más info?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function ProductoCard({ producto, style }: Props) {
  return (
    <Link
      href={`/catalogo/${producto.id}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-white/5 bg-[#111111] overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      )}
      style={style}
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => {}} // imagen placeholder via CSS si falla
        />

        {/* Fallback placeholder cuando no hay imagen */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-sm select-none">Imagen</span>
        </div>

        {/* Badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-[#C9A96E]/10 px-2.5 py-1 text-[11px] font-medium text-[#C9A96E] border border-[#C9A96E]/20">
            {producto.badge}
          </span>
        </div>

        {/* Overlay hover desktop (oculto en mobile) */}
        <div
          className={cn(
            "absolute inset-0 hidden md:flex items-center justify-center",
            "bg-black/50 backdrop-blur-[2px]",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
        >
          <a
            href={buildWhatsAppUrl(producto.nombre)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="rounded-full bg-[#FF6B35] px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#FF6B35]/90 hover:scale-105 active:scale-95"
          >
            Consultar
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-5">
        <span className="text-[11px] font-medium uppercase tracking-widest text-white/40">
          {producto.marca}
        </span>
        <h3 className="text-lg font-semibold leading-tight text-white">
          {producto.nombre}
        </h3>
        <p className="text-sm leading-relaxed text-white/60">
          {producto.frase}
        </p>

        {/* Botón consultar mobile (siempre visible) */}
        <a
          href={buildWhatsAppUrl(producto.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-2 block rounded-full border border-white/20 py-2 text-center text-sm text-white/70 transition-colors duration-200 hover:border-[#FF6B35] hover:text-[#FF6B35] md:hidden"
        >
          Consultar
        </a>
      </div>
    </Link>
  )
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/francovirzi/Documents/Amplify
git add components/catalogo/ProductoCard.tsx
git commit -m "feat: add ProductoCard component with WhatsApp CTA"
```

---

## Task 4: Página de catálogo `/catalogo`

**Files:**
- Create: `app/catalogo/page.tsx`

- [ ] **Step 1: Crear `app/catalogo/page.tsx`**

```tsx
// app/catalogo/page.tsx
"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductoCard } from "@/components/catalogo/ProductoCard"
import { FiltroCategoria } from "@/components/catalogo/FiltroCategoria"
import { productos } from "@/data/productos"

export default function CatalogoPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos")

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva)

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-10">
            <h1
              className="font-semibold text-white mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              En Stock
            </h1>
            <p className="text-white/50" style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}>
              Disponibles para entrega inmediata en CABA.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-10">
            <FiltroCategoria
              categoriaActiva={categoriaActiva}
              onChange={setCategoriaActiva}
            />
          </div>

          {/* Grid */}
          {productosFiltrados.length === 0 ? (
            <div className="py-24 text-center text-white/30">
              No hay productos en esta categoría por el momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productosFiltrados.map((producto, index) => (
                <ProductoCard
                  key={producto.id}
                  producto={producto}
                  style={{
                    opacity: 0,
                    animation: `fadeInUp 0.5s ease forwards`,
                    animationDelay: `${index * 80}ms`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Agregar la animación `fadeInUp` al CSS global**

Abrir `app/globals.css` y agregar al final:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

- [ ] **Step 3: Verificar que la página compila**

```bash
cd /Users/francovirzi/Documents/Amplify && npm run build 2>&1 | tail -20
```

Expected: build exitoso, ruta `/catalogo` listada en el output.

- [ ] **Step 4: Commit**

```bash
cd /Users/francovirzi/Documents/Amplify
git add app/catalogo/page.tsx app/globals.css
git commit -m "feat: add /catalogo page with filter and product grid"
```

---

## Task 5: Página de detalle `/catalogo/[id]`

**Files:**
- Create: `app/catalogo/[id]/page.tsx`

- [ ] **Step 1: Crear `app/catalogo/[id]/page.tsx`**

```tsx
// app/catalogo/[id]/page.tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { productos, WHATSAPP_NUMBER } from "@/data/productos"
import { ProductoCard } from "@/components/catalogo/ProductoCard"

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return productos.map((p) => ({ id: p.id }))
}

function buildWhatsAppUrl(nombre: string): string {
  const text = encodeURIComponent(
    `Hola! Me interesa el ${nombre} que vi en la web de Amplify. ¿Podrían darme más info?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export default async function ProductoDetallePage({ params }: Props) {
  const { id } = await params
  const producto = productos.find((p) => p.id === id)

  if (!producto) notFound()

  const relacionados = productos.filter((p) => producto.encajaCon.includes(p.id))

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <div className="mx-auto max-w-7xl">

          {/* Volver */}
          <Link
            href="/catalogo"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </Link>

          {/* Hero: imagen + datos */}
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Imagen */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1a1a1a] lg:col-span-3">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-sm select-none">Imagen</span>
              </div>
            </div>

            {/* Datos */}
            <div className="flex flex-col justify-center gap-4 lg:col-span-2">
              <span className="inline-block w-fit rounded-full bg-[#C9A96E]/10 px-3 py-1 text-xs font-medium text-[#C9A96E] border border-[#C9A96E]/20">
                {producto.badge}
              </span>
              <div>
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/40">
                  {producto.marca}
                </p>
                <h1
                  className="font-semibold text-white"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                >
                  {producto.nombre}
                </h1>
              </div>
              <p className="text-base leading-relaxed text-white/60">
                {producto.frase}
              </p>

              {/* CTA desktop */}
              <a
                href={buildWhatsAppUrl(producto.nombre)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 hidden rounded-full bg-[#FF6B35] px-6 py-3 text-center text-base font-medium text-white transition-all duration-300 hover:bg-[#FF6B35]/90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] active:scale-95 lg:block"
              >
                Consultar por este producto
              </a>
            </div>
          </div>

          {/* Bloques de contenido */}
          <div className="mx-auto max-w-3xl space-y-14">

            {/* Qué es */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Qué es</h2>
              <p className="text-base leading-relaxed text-white/60">{producto.descripcion}</p>
            </section>

            {/* Ideal para */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Ideal para</h2>
              <ul className="space-y-2">
                {producto.idealPara.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-white/60">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF6B35]" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Aspectos técnicos */}
            <section>
              <h2 className="mb-4 text-lg font-semibold text-white">Aspectos técnicos</h2>
              <dl className="space-y-3">
                {Object.entries(producto.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col gap-0.5 border-b border-white/5 pb-3 sm:flex-row sm:gap-4">
                    <dt className="min-w-[180px] text-sm font-medium text-white/40">{key}</dt>
                    <dd className="text-sm text-white/70">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Encaja bien con */}
            {relacionados.length > 0 && (
              <section>
                <h2 className="mb-6 text-lg font-semibold text-white">Encaja bien con</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {relacionados.map((rel) => (
                    <ProductoCard key={rel.id} producto={rel} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* CTA sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/95 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
        <a
          href={buildWhatsAppUrl(producto.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#FF6B35] py-3.5 text-center text-base font-medium text-white transition-all duration-300 hover:bg-[#FF6B35]/90 active:scale-95"
        >
          Consultar por este producto
        </a>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Verificar build**

```bash
cd /Users/francovirzi/Documents/Amplify && npm run build 2>&1 | tail -20
```

Expected: build exitoso, ruta `/catalogo/[id]` listada. Sin errores críticos.

- [ ] **Step 3: Commit**

```bash
cd /Users/francovirzi/Documents/Amplify
git add app/catalogo/
git commit -m "feat: add /catalogo/[id] product detail page with sticky WhatsApp CTA"
```

---

## Task 6: Actualizar el Navbar

**Files:**
- Modify: `components/navbar.tsx`

> El navbar tiene dos zonas que actualizar: desktop links (hacia la mitad del archivo) y mobile overlay links. Hay que insertar "En Stock" con su separador en ambos lugares, y ajustar los `transitionDelay` de los links que vienen después en mobile.

- [ ] **Step 1: Agregar link desktop**

En `components/navbar.tsx`, localizar el bloque desktop de links. Después del separador y link "Cómo funciona" y ANTES del separador y link "Comunidad", agregar:

```tsx
<div className="h-5 w-px bg-white/30" />
<Link
  href="/catalogo"
  className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none"
>
  En Stock
</Link>
```

El bloque desktop completo debe quedar así:
```tsx
<div className="flex items-center gap-0.5 lg:gap-1">
  <Link href="#quienes-somos" className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none">
    Quiénes somos
  </Link>
  <div className="h-5 w-px bg-white/30" />
  <Link href="#como-funciona" className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none">
    Cómo funciona
  </Link>
  <div className="h-5 w-px bg-white/30" />
  <Link href="/catalogo" className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none">
    En Stock
  </Link>
  <div className="h-5 w-px bg-white/30" />
  <Link href="#comunidad" className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none">
    Comunidad
  </Link>
  <div className="h-5 w-px bg-white/30" />
  <Link href="#faqs" className="px-3 lg:px-5 text-sm lg:text-base font-normal text-white transition-all duration-300 hover:text-[#ff6b35] focus:outline-none">
    FAQs
  </Link>
</div>
```

- [ ] **Step 2: Agregar link mobile**

En el bloque de `nav` del menú mobile, después del link "Cómo funciona" y antes de "Comunidad", insertar:

```tsx
<Link
  href="/catalogo"
  onClick={toggleMenu}
  className={`block text-2xl font-normal transition-all duration-500 hover:text-[#ff6b35] py-3 min-h-[48px] ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
  style={{ transitionDelay: menuOpen ? "200ms" : "0ms" }}
>
  En Stock
</Link>
```

Luego actualizar los delays de los links que siguen:
- "Comunidad": `250ms` (antes era `200ms`)
- "FAQs": `300ms` (antes era `250ms`)
- El botón "Hacé tu pedido" al final: `350ms` (antes era `300ms`)

- [ ] **Step 3: Verificar build y comportamiento**

```bash
cd /Users/francovirzi/Documents/Amplify && npm run build 2>&1 | tail -10
```

Luego abrir `npm run dev` y verificar:
1. Desktop: "En Stock" aparece entre "Cómo funciona" y "Comunidad"
2. Mobile: el menú hamburguesa muestra "En Stock" en el orden correcto con animación escalonada
3. Click en "En Stock" navega a `/catalogo`

- [ ] **Step 4: Commit**

```bash
cd /Users/francovirzi/Documents/Amplify
git add components/navbar.tsx
git commit -m "feat: add En Stock nav link pointing to /catalogo"
```

---

## Task 7: Branch staging + PR a main

- [ ] **Step 1: Crear branch `staging` y pushear**

```bash
cd /Users/francovirzi/Documents/Amplify
git checkout -b staging
git push -u origin staging
```

- [ ] **Step 2: Crear branch de feature para el PR**

El trabajo está en `main` local (el catálogo). Para crear un PR sin mergear a producción, la estrategia es:
- `main` en GitHub = producción
- `staging` = entorno de staging
- El trabajo actual va en un PR de `main` → `staging` para preview

```bash
# Volver a main y crear PR hacia staging
git checkout main
gh pr create \
  --title "feat: catálogo En Stock" \
  --body "Agrega sección /catalogo con grid de productos filtrable, vista de detalle, y CTA vía WhatsApp." \
  --base staging \
  --head main
```

- [ ] **Step 3: Configurar Vercel staging (manual — instrucciones)**

En Vercel dashboard del proyecto `v0-website-hero-build`:

1. **Settings → Git → Ignored Build Step** — asegurarse de que `staging` no esté ignorado
2. **Settings → Domains** → agregar `staging.amplify-arg.com` y en la config de ese dominio seleccionar **branch: `staging`**

Esto hace que cada push a `staging` deployée automáticamente en `staging.amplify-arg.com`.

El PR creado en el step anterior va a generar también una **preview URL automática** de Vercel para revisar antes de mergear.

---

## Self-Review

**Spec coverage:**
- ✅ Nav "En Stock" antes de "Comunidad" — Task 6
- ✅ Sección `/catalogo` con título, subtítulo, filtros, grid — Task 4
- ✅ Grid 3/2/1 columnas — Task 4 (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- ✅ Cards con badge, marca, nombre, frase, sin precio — Task 3
- ✅ Hover overlay con "Consultar" desktop — Task 3
- ✅ Botón "Consultar" siempre visible mobile — Task 3
- ✅ Click card → `/catalogo/[id]` — Task 3
- ✅ WhatsApp CTA con mensaje pre-armado — Tasks 3 y 5
- ✅ Vista de detalle con hero, Qué es, Ideal para, Specs, Encaja bien con — Task 5
- ✅ CTA sticky mobile en detalle — Task 5
- ✅ "← Volver al catálogo" — Task 5
- ✅ Datos en archivo editable `data/productos.ts` — Task 1
- ✅ 4 productos de ejemplo — Task 1
- ✅ Animación escalonada en grid — Task 4 (`animationDelay: index * 80ms`)
- ✅ `loading="lazy"` en imágenes — Tasks 3 y 5
- ✅ `generateStaticParams` — Task 5
- ✅ Branch staging + PR — Task 7
- ✅ Diseño oscuro consistente con el site — todos los tasks usan `#000000`, `#111111`, `#FF6B35`, `#C9A96E`

**Placeholders:** Número de WhatsApp `5491100000000` explícitamente marcado como placeholder en `data/productos.ts` ✅

**Type consistency:** `Producto` definida en `data/productos.ts` Task 1, importada en Tasks 3 y 5 con `import type { Producto } from "@/data/productos"` ✅. `WHATSAPP_NUMBER` exportado en Task 1, importado en Tasks 3 y 5 ✅. `buildWhatsAppUrl()` definida localmente en Tasks 3 y 5 — misma firma ✅.
