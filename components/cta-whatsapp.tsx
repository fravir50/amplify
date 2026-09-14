import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { buildWhatsAppUrl, buildWhatsAppUrlGeneral } from "@/lib/whatsapp"

interface CTAWhatsappProductoProps {
  marca: string
  modelo: string
  precioUSD: number
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "ghost"
}

interface CTAWhatsappGeneralProps {
  mensaje?: string
  label?: string
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "ghost"
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const variantStyles = {
  primary: {
    backgroundColor: "var(--amp-amber)",
    color: "#ffffff",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--amp-amber)",
    border: "1.5px solid var(--amp-amber)",
  },
}

function CTABase({
  href,
  label,
  size = "md",
  variant = "primary",
  className = "",
}: {
  href: string
  label: string
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "ghost"
  className?: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full font-medium transition-opacity hover:opacity-90 ${sizeClasses[size]} ${className}`}
      style={variantStyles[variant]}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      {label}
    </Link>
  )
}

export function CTAWhatsappProducto({
  marca,
  modelo,
  precioUSD,
  size,
  variant,
  className,
}: CTAWhatsappProductoProps) {
  const href = buildWhatsAppUrl({ marca, modelo, precioUSD })
  return (
    <CTABase
      href={href}
      label="Consultar por WhatsApp"
      size={size}
      variant={variant}
      className={className}
    />
  )
}

export function CTAWhatsappGeneral({
  mensaje,
  label = "Consultar por WhatsApp",
  size,
  variant,
  className,
}: CTAWhatsappGeneralProps) {
  const href = buildWhatsAppUrlGeneral(mensaje)
  return (
    <CTABase
      href={href}
      label={label}
      size={size}
      variant={variant}
      className={className}
    />
  )
}
