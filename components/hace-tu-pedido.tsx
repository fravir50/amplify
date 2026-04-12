"use client"

import React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { CheckCircle, X, Loader2, MessageCircle } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

// Validation patterns
const NAME_PATTERN = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+$/
const PHONE_PATTERN = /^[\d\s\-\+\(\)]+$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const URL_PATTERN = /^https?:\/\//

// Sanitize HTML entities
function sanitizeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// Count only digits in a string
function countDigits(str: string): number {
  return (str.match(/\d/g) || []).length
}

type FormErrors = {
  nombre?: string
  apellido?: string
  telefono?: string
  email?: string
  marca?: string
  modelo?: string
  enlace?: string
  comentarios?: string
}

type FormData = {
  nombre: string
  apellido: string
  telefono: string
  email: string
  marca: string
  modelo: string
  enlace: string
  comentarios: string
}

export function HaceTuPedido() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    marca: "",
    modelo: "",
    enlace: "",
    comentarios: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [honeypot, setHoneypot] = useState("")
  const formRenderTime = useRef(Date.now())
  const formRef = useRef<HTMLFormElement>(null)

  // Rate limiting state
  const [submissionCount, setSubmissionCount] = useState(0)
  const [cooldownSeconds, setCooldownSeconds] = useState(0)
  const [rateLimitReached, setRateLimitReached] = useState(false)
  const submitTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const MAX_SUBMISSIONS = 3
  const COOLDOWN_DURATION = 60 // seconds

  // Cooldown countdown effect
  useEffect(() => {
    if (cooldownSeconds <= 0) return

    const timer = setInterval(() => {
      setCooldownSeconds((prev) => {
        if (prev <= 1) {
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldownSeconds])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current)
      }
    }
  }, [])

  // Validation functions
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    const trimmed = value.trim()

    switch (name) {
      case "nombre":
        if (!trimmed) return "Ingresá un nombre válido"
        if (trimmed.length < 2 || trimmed.length > 50) return "Ingresá un nombre válido"
        if (!NAME_PATTERN.test(trimmed)) return "Ingresá un nombre válido"
        return undefined

      case "apellido":
        if (!trimmed) return "Ingresá un apellido válido"
        if (trimmed.length < 2 || trimmed.length > 50) return "Ingresá un apellido válido"
        if (!NAME_PATTERN.test(trimmed)) return "Ingresá un apellido válido"
        return undefined

      case "telefono":
        if (!trimmed) return "Ingresá un número de teléfono válido"
        if (!PHONE_PATTERN.test(trimmed)) return "Ingresá un número de teléfono válido"
        if (countDigits(trimmed) < 8 || trimmed.length > 20) return "Ingresá un número de teléfono válido"
        return undefined

      case "email":
        if (!trimmed) return undefined // Optional field
        if (trimmed.length > 100) return "El formato del email no es válido"
        if (!EMAIL_PATTERN.test(trimmed)) return "El formato del email no es válido"
        return undefined

      case "marca":
        if (!trimmed) return "Ingresá la marca del equipo"
        if (trimmed.length < 2 || trimmed.length > 60) return "Ingresá la marca del equipo"
        return undefined

      case "modelo":
        if (!trimmed) return "Ingresá el modelo del equipo"
        if (trimmed.length < 1 || trimmed.length > 100) return "Ingresá el modelo del equipo"
        return undefined

      case "enlace":
        if (!trimmed) return undefined // Optional field
        if (trimmed.length > 500) return "El enlace debe empezar con http:// o https://"
        if (!URL_PATTERN.test(trimmed)) return "El enlace debe empezar con http:// o https://"
        return undefined

      case "comentarios":
        if (trimmed.length > 1000) return "Máximo 1000 caracteres"
        return undefined

      default:
        return undefined
    }
  }

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key as keyof FormData, value)
      if (error) {
        newErrors[key as keyof FormErrors] = error
        isValid = false
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const fieldName = name.startsWith("entry.") ? getFieldNameFromEntry(name) : name

    // For comentarios, enforce max length
    if (fieldName === "comentarios" && value.length > 1000) {
      return
    }

    setFormData((prev) => ({ ...prev, [fieldName]: value }))

    // Clear error when user starts typing
    if (errors[fieldName as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const fieldName = name.startsWith("entry.") ? getFieldNameFromEntry(name) : name

    setTouched((prev) => ({ ...prev, [fieldName]: true }))

    // Only validate on blur if field has content or is required
    if (value.trim() || ["nombre", "apellido", "telefono", "marca", "modelo"].includes(fieldName)) {
      const error = validateField(fieldName as keyof FormData, value)
      setErrors((prev) => ({ ...prev, [fieldName]: error }))
    }
  }

  // Map Google Form entry names to our field names
  const getFieldNameFromEntry = (entryName: string): string => {
    const mapping: Record<string, string> = {
      "entry.2006135034": "nombre",
      "entry.622851816": "apellido",
      "entry.854881824": "telefono",
      "entry.194088952": "email",
      "entry.430531159": "marca",
      "entry.268434124": "modelo",
      "entry.610808535": "enlace",
      "entry.864611236": "comentarios",
    }
    return mapping[entryName] || entryName
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(false)

    // Rate limiting: check if already submitting or in cooldown
    if (submitting || cooldownSeconds > 0) {
      return
    }

    // Rate limiting: check max submissions per session
    if (submissionCount >= MAX_SUBMISSIONS) {
      setRateLimitReached(true)
      return
    }

    // Anti-spam: honeypot check
    if (honeypot) {
      setSubmitted(true)
      return
    }

    // Anti-spam: timestamp check
    const timeSinceRender = Date.now() - formRenderTime.current
    if (timeSinceRender < 3000) {
      setSubmitted(true)
      return
    }

    // Validate all fields
    if (!validateAll()) {
      // Mark all fields as touched to show errors
      setTouched({
        nombre: true,
        apellido: true,
        telefono: true,
        email: true,
        marca: true,
        modelo: true,
        enlace: true,
        comentarios: true,
      })
      return
    }

    // Sanitize data
    const sanitizedData = {
      nombre: sanitizeHTML(formData.nombre.trim()),
      apellido: sanitizeHTML(formData.apellido.trim()),
      telefono: sanitizeHTML(formData.telefono.trim()),
      email: sanitizeHTML(formData.email.trim()),
      marca: sanitizeHTML(formData.marca.trim()),
      modelo: sanitizeHTML(formData.modelo.trim()),
      enlace: sanitizeHTML(formData.enlace.trim()),
      comentarios: sanitizeHTML(formData.comentarios.trim()),
    }

    // Update form data with sanitized values before submitting
    setFormData(sanitizedData)
    setSubmitting(true)

    // Set a 10 second timeout as fallback to re-enable button
    submitTimeoutRef.current = setTimeout(() => {
      setSubmitting(false)
      setSubmitError(true)
    }, 10000)

    // Submit the form programmatically after state update
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.submit()
      }
    }, 100)
  }

  const handleIframeLoad = () => {
    if (submitting) {
      // Clear the fallback timeout
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current)
        submitTimeoutRef.current = null
      }

      setSubmitting(false)
      setSubmitted(true)

      // Increment submission count and start cooldown
      const newCount = submissionCount + 1
      setSubmissionCount(newCount)

      if (newCount >= MAX_SUBMISSIONS) {
        setRateLimitReached(true)
      } else {
        setCooldownSeconds(COOLDOWN_DURATION)
      }
    }
  }

  const resetForm = () => {
    setFormData({
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      marca: "",
      modelo: "",
      enlace: "",
      comentarios: "",
    })
    setErrors({})
    setTouched({})
    setSubmitted(false)
    setSubmitError(false)
    formRenderTime.current = Date.now()
  }

  const getInputClassName = (fieldName: keyof FormErrors) => {
    const baseClass =
      "w-full rounded-3xl bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 transition min-h-[48px]"
    const normalBorder = "border border-white/10 focus:ring-white/20 focus:border-white/20"
    const errorBorder = "border border-[#EF4444] focus:ring-[#EF4444]/20 focus:border-[#EF4444]"

    return `${baseClass} ${errors[fieldName] && touched[fieldName] ? errorBorder : normalBorder}`
  }

  // 16px minimum font-size prevents iOS zoom on focus
  const inputStyle = {
    padding: "clamp(0.875rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)",
    fontSize: "16px", // Critical: prevents iOS zoom on input focus
  }

  const labelStyle = { fontSize: "clamp(1rem, 2vw, 1.125rem)" }

  // Character counter color for comentarios
  const getCharCountColor = () => {
    const len = formData.comentarios.length
    if (len >= 1000) return "text-[#EF4444]"
    if (len >= 900) return "text-[#F97316]"
    return "text-gray-500"
  }

  return (
    <section id="hace-tu-pedido" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20 scroll-mt-24">
      <div className="w-full max-w-7xl mx-auto">
        <AnimateOnScroll>
          <h2 className="font-normal text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Hacé tu pedido
          </h2>
          <p className="text-gray-200 mb-12" style={{ fontSize: "clamp(1rem, 2.2vw, 1.125rem)" }}>
            Tu experiencia con nosotros empieza acá. Consultanos por cualquier equipo que te interese y te acompañamos
            en cada paso del proceso.
          </p>
        </AnimateOnScroll>

        <iframe name="hidden_iframe" style={{ display: "none" }} onLoad={handleIframeLoad} title="Form submission" />

        <AnimateOnScroll delay={200}>
          {rateLimitReached ? (
            // Rate limit reached state
            <div
              className="flex flex-col items-center justify-center py-16 animate-in fade-in duration-300"
              style={{ minHeight: "400px" }}
            >
              <MessageCircle className="w-12 h-12 text-[#F97316] mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Ya enviaste varias consultas</h3>
              <p className="text-gray-400 text-[15px] text-center mb-6">
                Si necesitás algo urgente, escribinos directo por WhatsApp.
              </p>
              <a
                href="https://wa.me/5491168370000"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full font-medium text-white bg-[#25D366] hover:bg-[#25D366]/90 transition-all flex items-center gap-2"
                style={{
                  padding: "clamp(0.625rem, 2vw, 0.75rem) clamp(1.5rem, 4vw, 2rem)",
                  fontSize: "clamp(1rem, 2vw, 1.125rem)",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp
              </a>
            </div>
          ) : submitted ? (
            // Success state
            <div
              className="flex flex-col items-center justify-center py-16 animate-in fade-in duration-300"
              style={{ minHeight: "400px" }}
            >
              <CheckCircle className="w-12 h-12 text-[#22C55E] mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">¡Consulta enviada!</h3>
              <p className="text-gray-400 text-[15px] text-center mb-6">
                Te respondemos en menos de 48hs. Revisá tu email o WhatsApp.
              </p>
              {cooldownSeconds > 0 ? (
                <p className="text-gray-500 text-[14px]">
                  Podés enviar otra consulta en {cooldownSeconds}s...
                </p>
              ) : (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-[#FF6B35] hover:underline transition-all"
                  style={{ fontSize: "15px" }}
                >
                  Enviar otra consulta
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Indeterminate progress bar during submission */}
              {submitting && (
                <div className="relative w-full h-[2px] mb-6 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="absolute h-full w-1/3 bg-[#FF6B35] animate-progress-bar"
                    style={{
                      animation: "progressBar 1.5s ease-in-out infinite",
                      opacity: 0.6,
                    }}
                  />
                </div>
              )}

              {/* Error banner */}
              {submitError && (
                <div
                  className="mb-6 p-4 rounded-lg flex items-start justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-200"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    borderLeft: "3px solid #EF4444",
                  }}
                >
                  <p className="text-white text-sm">
                    No pudimos enviar tu consulta. Probá de nuevo o escribinos por{" "}
                    <a
                      href="https://wa.me/5491168370000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6B35] hover:underline"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitError(false)}
                    className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              <form
                ref={formRef}
                action="https://docs.google.com/forms/d/e/1FAIpQLScNaX4ybiz46JmrQvaS6pR3dZ_HD5yUnySadKzbSpP_fVPv7w/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden" }}
                >
                  <label htmlFor="company">No completar este campo</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block mb-2 text-white font-normal" style={labelStyle}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="entry.2006135034"
                      placeholder="Alan"
                      value={formData.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName("nombre")}
                      style={inputStyle}
                      readOnly={submitting}
                      aria-disabled={submitting}
                      maxLength={50}
                      aria-required="true"
                      aria-invalid={errors.nombre && touched.nombre ? "true" : undefined}
                      aria-describedby={errors.nombre && touched.nombre ? "nombre-error" : undefined}
                    />
                    {errors.nombre && touched.nombre && (
                      <p
                        id="nombre-error"
                        role="alert"
                        className="mt-1 text-[#EF4444] text-[13px] animate-in fade-in slide-in-from-top-1 duration-200"
                        style={{ marginTop: "4px" }}
                      >
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="apellido" className="block mb-2 text-white font-normal" style={labelStyle}>
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="apellido"
                      name="entry.622851816"
                      placeholder="Parsons"
                      value={formData.apellido}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName("apellido")}
                      style={inputStyle}
                      readOnly={submitting}
                      aria-disabled={submitting}
                      maxLength={50}
                      aria-required="true"
                      aria-invalid={errors.apellido && touched.apellido ? "true" : undefined}
                      aria-describedby={errors.apellido && touched.apellido ? "apellido-error" : undefined}
                    />
                    {errors.apellido && touched.apellido && (
                      <p
                        id="apellido-error"
                        role="alert"
                        className="mt-1 text-[#EF4444] text-[13px] animate-in fade-in slide-in-from-top-1 duration-200"
                        style={{ marginTop: "4px" }}
                      >
                        {errors.apellido}
                      </p>
                    )}
                  </div>
                </div>

                {/* Teléfono y Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block mb-2 text-white font-normal" style={labelStyle}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="entry.854881824"
                      placeholder="+54 9 11 1234-5678"
                      inputMode="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName("telefono")}
                      style={inputStyle}
                      readOnly={submitting}
                      aria-disabled={submitting}
                      maxLength={20}
                      aria-required="true"
                      aria-invalid={errors.telefono && touched.telefono ? "true" : undefined}
                      aria-describedby={errors.telefono && touched.telefono ? "telefono-error" : undefined}
                    />
                    {errors.telefono && touched.telefono && (
                      <p
                        id="telefono-error"
                        role="alert"
                        className="mt-1 text-[#EF4444] text-[13px] animate-in fade-in slide-in-from-top-1 duration-200"
                        style={{ marginTop: "4px" }}
                      >
                        {errors.telefono}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-white font-normal" style={labelStyle}>
                      Email (opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="entry.194088952"
                      placeholder="alanparsons_project@gmail.com"
                      inputMode="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName("email")}
                      style={inputStyle}
                      readOnly={submitting}
                      aria-disabled={submitting}
                      maxLength={100}
                    />
                    {errors.email && touched.email && (
                      <p
                        className="mt-1 text-[#EF4444] text-[13px] animate-in fade-in slide-in-from-top-1 duration-200"
                        style={{ marginTop: "4px" }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Marca + Modelo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="marca" className="block mb-2 text-white font-normal" style={labelStyle}>
                      Marca del equipo
                    </label>
                    <input
                      type="text"
                      id="marca"
                      name="entry.430531159"
                      placeholder="Ej: Chord"
                      value={formData.marca}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName("marca")}
                      style={inputStyle}
                      readOnly={submitting}
                      aria-disabled={submitting}
                      maxLength={60}
                      aria-required="true"
                      aria-invalid={errors.marca && touched.marca ? "true" : undefined}
                      aria-describedby={errors.marca && touched.marca ? "marca-error" : undefined}
                    />
                    {errors.marca && touched.marca && (
                      <p
                        id="marca-error"
                        role="alert"
                        className="mt-1 text-[#EF4444] text-[13px] animate-in fade-in slide-in-from-top-1 duration-200"
                        style={{ marginTop: "4px" }}
                      >
                        {errors.marca}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="modelo" className="block mb-2 text-white font-normal" style={labelStyle}>
                      Modelo
                    </label>
                    <input
                      type="text"
                      id="modelo"
                      name="entry.268434124"
                      placeholder="Ej: Hugo TT2"
                      value={formData.modelo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName("modelo")}
                      style={inputStyle}
                      readOnly={submitting}
                      aria-disabled={submitting}
                      maxLength={100}
                      aria-required="true"
                      aria-invalid={errors.modelo && touched.modelo ? "true" : undefined}
                      aria-describedby={errors.modelo && touched.modelo ? "modelo-error" : undefined}
                    />
                    {errors.modelo && touched.modelo && (
                      <p
                        id="modelo-error"
                        role="alert"
                        className="mt-1 text-[#EF4444] text-[13px] animate-in fade-in slide-in-from-top-1 duration-200"
                        style={{ marginTop: "4px" }}
                      >
                        {errors.modelo}
                      </p>
                    )}
                  </div>
                </div>

                {/* Enlace */}
                <div>
                  <label htmlFor="enlace" className="block mb-2 text-white font-normal" style={labelStyle}>
                    Enlace del producto (opcional)
                  </label>
                  <input
                    type="url"
                    id="enlace"
                    name="entry.610808535"
                    placeholder="https://..."
                    value={formData.enlace}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClassName("enlace")}
                    style={inputStyle}
                    readOnly={submitting}
                    aria-disabled={submitting}
                    maxLength={500}
                  />
                  {errors.enlace && touched.enlace && (
                    <p
                      className="mt-1 text-[#EF4444] text-[13px] animate-in fade-in slide-in-from-top-1 duration-200"
                      style={{ marginTop: "4px" }}
                    >
                      {errors.enlace}
                    </p>
                  )}
                </div>

                {/* Comentarios */}
                <div>
                  <label htmlFor="comentarios" className="block mb-2 text-white font-normal" style={labelStyle}>
                    Comentarios adicionales (opcional)
                  </label>
                  <textarea
                    id="comentarios"
                    name="entry.864611236"
                    placeholder="Contanos cualquier detalle..."
                    rows={5}
                    value={formData.comentarios}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${getInputClassName("comentarios")} resize-none min-h-[120px] sm:min-h-[160px]`}
                    style={{ padding: "clamp(1rem, 2.5vw, 1.5rem)", fontSize: "16px" }}
                    readOnly={submitting}
                    aria-disabled={submitting}
                    maxLength={1000}
                  />
                  <div className="flex justify-end mt-1">
                    <span className={`text-xs ${getCharCountColor()}`}>{formData.comentarios.length} / 1000</span>
                  </div>
                </div>

                <div className="flex flex-col items-stretch sm:items-start gap-3">
                  <button
                    type="submit"
                    className={`rounded-full font-medium text-white transition-all flex items-center justify-center gap-2 focus:outline-none w-full sm:w-auto min-h-[48px] ${
                      submitting || cooldownSeconds > 0
                        ? "bg-[#6B7280] cursor-not-allowed"
                        : "bg-[#FF6B35] hover:scale-105 hover:bg-[#FF6B35]/90"
                    }`}
                    style={{
                      padding: "clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem)",
                      fontSize: "16px",
                    }}
                    disabled={submitting || cooldownSeconds > 0}
                    aria-busy={submitting}
                  >
                    {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    {submitting
                      ? "Enviando..."
                      : cooldownSeconds > 0
                        ? `Podés enviar en ${cooldownSeconds}s...`
                        : "Enviar pedido"}
                  </button>
                </div>
              </form>
            </>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  )
}
