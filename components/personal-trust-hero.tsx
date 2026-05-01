"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Personal Trust",
    title: "Tailored wealth solutions for high net worth individuals",
    description:
      "Sophisticated succession, family governance and asset protection services, providing transaction support and wealth structuring solutions.",
  },
  "zh-CN": {
    label: "个人信托",
    title: "为高净值人士量身定制的财富解决方案",
    description:
      "提供精密的继承规划、家族治理和资产保护服务，以及交易支持和财富架构解决方案。",
  },
  "zh-TW": {
    label: "個人信託",
    title: "為高淨值人士量身定製的財富解決方案",
    description:
      "提供精密的繼承規劃、家族治理和資產保護服務，以及交易支持和財富架構解決方案。",
  },
}

export function PersonalTrustHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hong-kong-skyline-day.jpg"
          alt="Hong Kong Skyline"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#C9A961]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#5B4BA0]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-[#C9A961]/20 border border-[#C9A961]/30 rounded-full mb-6">
            <span className="text-[#C9A961] text-sm font-medium tracking-wider uppercase">{t.label}</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight text-balance">
            {t.title}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  )
}
