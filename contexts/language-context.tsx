"use client"

import type React from "react"
import { createContext, useCallback, useContext, useMemo } from "react"
import { usePathname, useRouter } from "next/navigation"
import type { Language } from "@/lib/translations"

const supportedLocales = ["en", "cn", "tc"] as const

const localeToLanguage: Record<string, Language> = {
  en: "en",
  cn: "zh-CN",
  tc: "zh-TW",
}

const languageToLocale: Record<Language, string> = {
  en: "en",
  "zh-CN": "cn",
  "zh-TW": "tc",
}

type LanguageContextType = {
  language: Language
  locale: string
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const locale = useMemo(() => {
    const segments = pathname.split("/")
    const firstSegment = segments[1]
    if (supportedLocales.includes(firstSegment as (typeof supportedLocales)[number])) {
      return firstSegment
    }
    return "en"
  }, [pathname])

  const language = localeToLanguage[locale] || "en"

  const setLanguage = useCallback((lang: Language) => {
    const newLocale = languageToLocale[lang]
    const segments = pathname.split("/")

    // Replace the locale segment
    if (supportedLocales.includes(segments[1] as (typeof supportedLocales)[number])) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }

    const newPath = segments.join("/") || `/${newLocale}`

    // Set cookie for middleware
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

    router.push(newPath)
  }, [pathname, router])

  const value = useMemo(() => ({ language, locale, setLanguage }), [language, locale, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
