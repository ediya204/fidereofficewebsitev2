import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { Barlow_Semi_Condensed, Open_Sans } from "next/font/google"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { LanguageProvider } from "@/contexts/language-context"

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

export default function CanonicalLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className={`${openSans.variable} ${barlowSemiCondensed.variable} font-sans antialiased`}>
        {children}
        <CookieConsentBanner />
      </div>
      <Analytics />
    </LanguageProvider>
  )
}
