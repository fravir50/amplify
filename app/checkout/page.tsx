"use client"

import { useMemo, useState, type FormEvent } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StagingBanner } from "@/components/lifestyle/staging-banner"
import { useCart } from "@/components/lifestyle/cart-provider"
import { formatARS, formatCuota } from "@/lib/money"
import { SHIPPING, WHATSAPP_NUMBER, type ShippingId } from "@/data/lifestyle"

type PayMethod = "transferencia" | "cuotas" | "whatsapp"

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart()
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [tel, setTel] = useState("")
  const [shipping, setShipping] = useState<ShippingId>("retiro")
  const [pay, setPay] = useState<PayMethod>("cuotas")
  const [direccion, setDireccion] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [snapshot, setSnapshot] = useState<{
    lines: string[]
    total: number
    envio: number
    pay: PayMethod
  } | null>(null)

  const envio = SHIPPING[shipping].costo
  const total = subtotal + envio
  const needsAddress = shipping !== "retiro"

  const waText = useMemo(() => {
    if (!snapshot) return ""
    const body = [
      `Hola! Quiero confirmar el pedido sandbox ${orderId}.`,
      ...snapshot.lines,
      `Envío: ${SHIPPING[shipping].label} (${formatARS(snapshot.envio)})`,
      `Total: ${formatARS(snapshot.total)}`,
      `Pago elegido: ${snapshot.pay}`,
      `Nombre: ${nombre}`,
    ].join("\n")
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`
  }, [snapshot, orderId, shipping, nombre])

  function submit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    if (items.length === 0) {
      setError("El carrito está vacío.")
      return
    }
    if (!nombre.trim() || !email.trim() || !tel.trim()) {
      setError("Completá nombre, email y teléfono.")
      return
    }
    if (needsAddress && (!direccion.trim() || !ciudad.trim())) {
      setError("Para envío necesitamos dirección y ciudad.")
      return
    }
    const id = `AMP-${Date.now().toString(36).toUpperCase()}`
    setSnapshot({
      lines: items.map(({ product, quantity }) => `${quantity}× ${product.marca} ${product.nombre}`),
      total,
      envio,
      pay,
    })
    setOrderId(id)
    clear()
  }

  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <StagingBanner />
          <h1 className="mt-8 mb-2 font-semibold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Checkout
          </h1>
          <p className="mb-8 text-sm text-[#C9A96E]">
            Pagos en sandbox. Ningún cobro se procesa. No hay claves de Mercado Pago ni transferencias reales.
          </p>

          {orderId && snapshot ? (
            <div className="rounded-2xl border border-[#C9A96E]/30 bg-[#0f0f0f] p-8">
              <p className="mb-2 text-xs uppercase tracking-widest text-[#C9A96E]">Pedido registrado (sandbox)</p>
              <p className="mb-4 text-2xl font-semibold text-white">{orderId}</p>
              <ul className="mb-4 space-y-1 text-white/60">
                {snapshot.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <p className="mb-6 text-white">
                Total de referencia: <span className="text-[#C9A96E]">{formatARS(snapshot.total)}</span>
              </p>
              <p className="mb-6 text-sm text-white/50">
                No se debitó nada. Para hacerlo real, escribinos y lo cerramos por WhatsApp — o esperá a que el cobro
                esté conectado en producción.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={waText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#FF6B35] px-6 py-3 text-center text-sm font-medium text-white"
                >
                  Cerrar por WhatsApp
                </a>
                <Link
                  href="/tienda"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm text-white/70"
                >
                  Seguir mirando
                </Link>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="rounded-2xl border border-white/8 p-10 text-center text-white/50">
              No hay productos. <Link href="/tienda" className="text-[#FF6B35]">Volvé a la tienda</Link>.
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-8">
              <section className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-6">
                <h2 className="mb-4 font-semibold text-white">Tu pedido</h2>
                <ul className="mb-4 space-y-2 text-sm text-white/70">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex justify-between gap-4">
                      <span>
                        {quantity}× {product.marca} {product.nombre}
                      </span>
                      <span className="text-[#C9A96E]">{formatARS(product.precioARS * quantity)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/40">{formatCuota(subtotal)} sin interés sobre el subtotal</p>
              </section>

              <section className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-6 space-y-4">
                <h2 className="font-semibold text-white">Contacto</h2>
                <label className="block text-sm text-white/50">
                  Nombre
                  <input
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
                  />
                </label>
                <label className="block text-sm text-white/50">
                  Email
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
                  />
                </label>
                <label className="block text-sm text-white/50">
                  Teléfono / WhatsApp
                  <input
                    required
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
                  />
                </label>
              </section>

              <section className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-6 space-y-3">
                <h2 className="font-semibold text-white">Entrega</h2>
                <p className="text-sm text-white/45">
                  Política de staging: retiro en Núñez o Palermo, o envío a todo el país. Una sola regla, también para
                  hi-fi.
                </p>
                {(Object.keys(SHIPPING) as ShippingId[]).map((id) => {
                  const s = SHIPPING[id]
                  return (
                    <label
                      key={id}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 ${
                        shipping === id ? "border-[#FF6B35] bg-[#FF6B35]/10" : "border-white/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        checked={shipping === id}
                        onChange={() => setShipping(id)}
                        className="mt-1"
                      />
                      <span>
                        <span className="block text-white">{s.label}</span>
                        <span className="text-sm text-white/45">
                          {s.plazo} · {s.costo === 0 ? "Sin cargo" : formatARS(s.costo)}
                        </span>
                      </span>
                    </label>
                  )
                })}
                {needsAddress && (
                  <div className="grid gap-3 pt-2 sm:grid-cols-2">
                    <label className="block text-sm text-white/50 sm:col-span-2">
                      Dirección
                      <input
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
                      />
                    </label>
                    <label className="block text-sm text-white/50">
                      Ciudad / provincia
                      <input
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white"
                      />
                    </label>
                  </div>
                )}
              </section>

              <section className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-6 space-y-3">
                <h2 className="font-semibold text-white">Pago (simulado)</h2>
                {(
                  [
                    ["cuotas", "6 cuotas sin interés (sandbox)"],
                    ["transferencia", "Transferencia ARS (sandbox)"],
                    ["whatsapp", "Cerrar después por WhatsApp"],
                  ] as const
                ).map(([id, label]) => (
                  <label
                    key={id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 ${
                      pay === id ? "border-[#FF6B35] bg-[#FF6B35]/10" : "border-white/10"
                    }`}
                  >
                    <input type="radio" name="pay" checked={pay === id} onChange={() => setPay(id)} />
                    <span className="text-white">{label}</span>
                  </label>
                ))}
              </section>

              <div className="rounded-2xl border border-white/8 bg-[#111] p-6">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span>{formatARS(subtotal)}</span>
                </div>
                <div className="mt-2 flex justify-between text-white/70">
                  <span>Envío</span>
                  <span>{envio === 0 ? "Sin cargo" : formatARS(envio)}</span>
                </div>
                <div className="mt-4 flex justify-between text-lg font-semibold text-white">
                  <span>Total</span>
                  <span className="text-[#C9A96E]">{formatARS(total)}</span>
                </div>
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-full bg-[#FF6B35] py-3.5 font-medium text-white hover:bg-[#FF6B35]/90"
              >
                Confirmar pedido de prueba
              </button>
              <p className="text-center text-xs text-white/35">
                Al confirmar no se cobra. Es un checkout de staging para recorrer el flujo.
              </p>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
