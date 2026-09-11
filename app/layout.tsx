import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/lifestyle/cart-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F7F4EF",
}

export const metadata: Metadata = {
  title: "Amplify — Audio para el hogar en Argentina",
  description:
    "Sonos, Bose, Denon y más. Stock real, precios en USD, criterio publicado. Retiro en Núñez o Palermo.",
  icons: {
    icon: [
      { url: "/favicon-amplify.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon-amplify.png" }],
  },
  openGraph: {
    title: "Amplify — Audio para el hogar en Argentina",
    description:
      "Sonos, Bose, Denon y más. Stock real, precios en USD, criterio publicado.",
    siteName: "Amplify",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/apple-icon.png", width: 1200, height: 1200, alt: "Amplify" }],
  },
  twitter: {
    card: "summary",
    title: "Amplify",
    description: "Audio para el hogar. Stock real, criterio publicado.",
    images: ["/apple-icon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${lora.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
