# Catálogo "En Stock" — Design Spec
**Date:** 2026-04-12  
**Project:** amplify-arg.com  
**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Geist font

---

## 1. Objetivo

Agregar un catálogo de productos en stock a la web de Amplify. El catálogo debe sentirse como una selección cuidada, no como una tienda. Sin precios, sin lenguaje de e-commerce. El foco es contexto, curación y consulta vía WhatsApp.

---

## 2. Arquitectura

### Rutas nuevas (Next.js App Router)
```
app/
  catalogo/
    page.tsx          — página de catálogo (filtros + grid)
    [id]/
      page.tsx        — página de detalle de producto
```

### Nuevos componentes
```
components/
  catalogo/
    ProductoCard.tsx      — card individual con hover overlay
    FiltroCategoria.tsx   — tabs/pills horizontales de categoría
```

### Datos
```
data/
  productos.ts    — interfaz TypeScript Producto + array de productos exportado
```

---

## 3. Datos: `data/productos.ts`

### Interfaz TypeScript
```ts
interface Producto {
  id: string
  nombre: string
  marca: string
  categoria: "Amplificadores" | "DACs" | "Streamers" | "Parlantes" | "Auriculares" | "Accesorios"
  frase: string
  imagen: string
  descripcion: string
  idealPara: string[]
  specs: Record<string, string>
  encajaCon: string[]   // array de ids de otros productos
  badge: string
}
```

### 4 productos de ejemplo
1. **WiiM Ultra** — Streamer
2. **KEF Q150** — Parlantes
3. **iFi Zen DAC 3** — DAC
4. **Focal Celestee** — Auriculares

---

## 4. Cambios al Navbar

### Desktop
Agregar entre "Cómo funciona" y "Comunidad":
```tsx
<div className="h-5 w-px bg-white/30" />
<Link href="/catalogo" className="...">En Stock</Link>
```
Usa `href="/catalogo"` (ruta real, no hash). Mismo estilo que los otros links.

### Mobile (menú overlay)
Agregar link "En Stock" entre "Cómo funciona" y "Comunidad" con el mismo patrón de animación escalonada. `transitionDelay` ajustado para mantener el stagger correcto en todos los links siguientes.

---

## 5. Página de catálogo: `/catalogo`

### Layout
- Mismo fondo oscuro que el resto del site (`bg-[#000000]` o gradiente existente)
- Padding top: suficiente para compensar el navbar fijo (`pt-28` o similar)
- Título: "En Stock" (mismo `clamp` que usan las otras secciones)
- Subtítulo: "Disponibles para entrega inmediata en CABA." (texto gris claro)
- `FiltroCategoria` debajo del subtítulo
- Grid de productos con animación escalonada

### Grid
- Desktop: 3 columnas (`grid-cols-3`)
- Tablet: 2 columnas (`grid-cols-2`)
- Mobile: 1 columna (`grid-cols-1`)
- Gap generoso (`gap-6` o `gap-8`)

### Animación de entrada
Cards con fade-in + `translateY(20px → 0)` escalonado: cada card tiene `delay = index * 80ms`.
Usar el hook `useScrollAnimation` existente o `AnimateOnScroll` existente.

### Filtro de categoría
- Estado local `categoriaActiva` en la página
- Al cambiar categoría: filtrar el array de productos
- Categorías: Todos | Amplificadores | DACs | Streamers | Parlantes | Auriculares | Accesorios
- Pill activa: `border-[#FF6B35] text-[#FF6B35]`
- Pills inactivas: `border-white/20 text-white/60 hover:text-white`

---

## 6. Componente `ProductoCard`

### Visual
- Fondo: `bg-[#111111]` o `bg-[#0f0f0f]` (ligeramente más claro que el background)
- Sin border, o border muy sutil `border border-white/5`
- Border-radius consistente con el resto del site
- Padding interno generoso

### Estructura interna
```
[Imagen placeholder: div bg-[#1a1a1a] con aspect-ratio 4/3, texto "Imagen" centrado en gris]
[Badge "Entrega inmediata" — top-left sobre la imagen, color #C9A96E bg #C9A96E/10]
[Marca — text-xs text-white/40 uppercase tracking-wider]
[Nombre — text-xl font-semibold text-white]
[Frase — text-sm text-white/60 leading-relaxed]
[Botón "Consultar" — ver comportamiento abajo]
```

### Hover (desktop)
- `transform: translateY(-4px)` + `box-shadow` sutil
- Overlay semitransparente sobre la imagen con botón "Consultar" centrado
- Transición `300ms ease`
- Implementado con Tailwind `group` + `group-hover:opacity-100`

### Mobile
- Botón "Consultar" siempre visible (no depende de hover)
- Detectado con breakpoint Tailwind: `md:hidden` para botón siempre visible, `hidden md:block` para el overlay

### Click en card
- Navega a `/catalogo/[id]` (usando `next/link` o `router.push`)
- Click en botón "Consultar": `e.stopPropagation()` + abre WhatsApp

### WhatsApp CTA
```
https://wa.me/5491100000000?text=Hola!+Me+interesa+el+[nombre]+que+vi+en+la+web+de+Amplify.+¿Podrían+darme+más+info?
```
`encodeURIComponent` para el texto. Se abre en nueva pestaña.

---

## 7. Componente `FiltroCategoria`

```tsx
interface Props {
  categoriaActiva: string
  onChange: (cat: string) => void
}
```

- Contenedor: `flex gap-2 overflow-x-auto pb-2` (scroll horizontal en mobile, no wrap)
- Cada pill: `px-4 py-1.5 rounded-full border text-sm transition-colors whitespace-nowrap`
- Activa: `border-[#FF6B35] text-[#FF6B35] bg-[#FF6B35]/5`
- Inactiva: `border-white/20 text-white/60 hover:border-white/40 hover:text-white`
- Sin scrollbar visible: `scrollbar-hide` (o `-ms-overflow-style: none`)

---

## 8. Página de detalle: `/catalogo/[id]`

### Generación de rutas
```ts
export function generateStaticParams() {
  return productos.map(p => ({ id: p.id }))
}
```

### Layout

**Top:** `← Volver al catálogo` — link a `/catalogo`, `text-white/50 hover:text-white`

**Hero (mitad superior):**
- Desktop: 2 columnas — imagen izquierda (60%), datos derecha (40%)
- Mobile: imagen arriba, datos abajo
- Imagen: `<Image>` con `fill` o fixed size, `loading="lazy"`, placeholder `bg-[#1a1a1a]`
- Datos: Badge "Entrega inmediata" · Marca (small, gris) · Nombre (grande) · Frase (gris claro)

**Bloques de contenido (scroll continuo, sin tabs):**

1. **"Qué es"** — párrafo `descripcion` del producto
2. **"Ideal para"** — lista de bullets (`idealPara[]`)
3. **"Aspectos técnicos"** — lista limpia de key-value de `specs`
4. **"Encaja bien con"** — grid mini de cards de productos relacionados (lookup por `encajaCon[]`). Si no hay, no renderizar esta sección.

**CTA sticky (mobile) / visible en desktop:**
- Botón `"Consultar por este producto"` — mismo estilo que el CTA principal del site (`bg-[#FF6B35]`)
- En mobile: `fixed bottom-0` con `safe-area-inset-bottom`
- En desktop: visible inline al final del contenido o en sidebar derecha
- Abre WhatsApp con mensaje: `"Hola! Me interesa el [nombre] que vi en la web de Amplify. ¿Podrían darme más info?"`

---

## 9. Staging environment

### Git
```bash
git checkout -b staging
git push -u origin staging
```

### Vercel
1. Settings → Git → Add branch: `staging` → asignar dominio `staging.amplify-arg.com`
2. O crear un nuevo Environment en Settings → Environments llamado "Staging" apuntando al branch `staging`

### Flujo de trabajo
```
feature branch → PR a staging → review en staging.amplify-arg.com → merge a main → producción
```

---

## 10. Restricciones

- No romper ninguna sección existente
- No agregar nuevas fuentes
- No mostrar precios en ningún lugar
- No usar lenguaje de e-commerce
- Imágenes con `loading="lazy"` en el grid
- El Navbar existente no debe refactorizarse — solo agregar el nuevo link
- WhatsApp number: placeholder `5491100000000` (fácil de reemplazar en `data/productos.ts` o constante)
