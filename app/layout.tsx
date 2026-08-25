import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/lifestyle/cart-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  title: "amplify — Bose, Denon Home y hi-fi en Argentina",
  description:
    "Plug-and-play en pesos: Bose, Denon Home y Sonos, con stock y cuotas. El catálogo hi-fi sigue en USD, por WhatsApp.",
  icons: {
    icon: [
      { url: "/favicon-amplify.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon-amplify.png" }],
  },
  openGraph: {
    title: "amplify",
    description:
      "Especialistas en Bose y plug-and-play, con oído hi-fi. Precios en pesos, cuotas, stock a la vista.",
    siteName: "amplify",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/apple-icon.png", width: 1200, height: 1200, alt: "amplify" }],
  },
  twitter: {
    card: "summary",
    title: "amplify",
    description: "Bose y plug-and-play en Argentina. Con oído hi-fi.",
    images: ["/apple-icon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
