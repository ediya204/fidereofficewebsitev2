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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const lang = {
    en: "en",
    cn: "zh-CN",
    tc: "zh-Hant",
  }[(await params).locale] ?? "en"

  return (
    <html lang={lang}>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
