import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Open_Sans, Barlow_Semi_Condensed } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import "@/styles/globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-semi",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "FIDERE TRUST | Family Office, Trust & Global Wealth Solutions",
  description: "FIDERE TRUST delivers private trust, family office governance, and cross-border wealth solutions with institutional compliance, custody, and global asset execution.",
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
      <body className={`${openSans.variable} ${barlowSemiCondensed.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
