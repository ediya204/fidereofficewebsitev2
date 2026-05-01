"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "Contact us to learn more about FIDERE TRUST",
    subtitle:
      "Please contact us for additional information about our services and the solutions we can deliver for you.",
  },
  "zh-CN": {
    title: "联系我们，了解更多关于 FIDERE TRUST 的信息",
    subtitle: "如需了解更多关于我们服务和解决方案的信息，请与我们联系。",
  },
  "zh-TW": {
    title: "聯繫我們，了解更多關於 FIDERE TRUST 的資訊",
    subtitle: "如需了解更多關於我們服務和解決方案的資訊，請與我們聯繫。",
  },
}

export function ContactHero() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hong-kong-bridge.jpg" alt="Hong Kong Bridge" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl text-balance">{t.title}</h1>
          <p className="text-lg text-white/80">{t.subtitle}</p>
        </div>
      </div>
    </section>
  )
}
