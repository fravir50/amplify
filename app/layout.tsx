import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "Amplify",
  description:
    "Acceso a equipos de audio premium que no podés conseguir en Argentina. Catálogo global, valores internacionales y una comunidad apasionada por el buen sonido.",
  icons: {
    icon: [
      { url: "/favicon-amplify.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: [
      { url: "/favicon-amplify.png" },
    ],
  },
  openGraph: {
    title: "Amplify",
    description:
      "Acceso a equipos de audio premium que no podés conseguir en Argentina. Catálogo global, valores internacionales y una comunidad apasionada por el buen sonido.",
    siteName: "Amplify",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/apple-icon.png",
        width: 1200,
        height: 1200,
        alt: "Amplify",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Amplify",
    description:
      "Acceso a equipos de audio premium que no podés conseguir en Argentina.",
    images: ["/apple-icon.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
