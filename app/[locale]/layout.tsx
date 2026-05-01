import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "FIDERE TRUST - Financial Services",
  description: "Professional trust and custody solutions in Hong Kong",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

// Generate static params for all locales
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }, { locale: "tc" }]
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
