import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { Open_Sans, Barlow_Semi_Condensed } from "next/font/google"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { LanguageProvider } from "@/contexts/language-context"
import { buildOrganizationJsonLd } from "@/lib/seo"

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

// Generate static params for all locales
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }, { locale: "tc" }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationJsonLd(locale)).replace(/</g, "\\u003c"),
        }}
      />
      <div className={`${openSans.variable} ${barlowSemiCondensed.variable} font-sans antialiased`}>
        {children}
        <CookieConsentBanner />
      </div>
      <Analytics />
    </LanguageProvider>
  )
}
