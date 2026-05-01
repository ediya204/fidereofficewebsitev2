"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Personal Trust",
    titlePart1: "Tailored Wealth Solutions",
    titleHighlight: "For High Net Worth Individuals",
    subtitle: "Sophisticated structures for succession, governance, and asset protection",
    description:
      "Sophisticated succession, family governance and asset protection services, providing transaction support and wealth structuring solutions.",
  },
  "zh-CN": {
    label: "个人信托",
    titlePart1: "量身打造的财富方案",
    titleHighlight: "服务高净值人士",
    subtitle: "聚焦传承、治理与资产保护的专业架构服务",
    description:
      "提供精密的继承规划、家族治理和资产保护服务，以及交易支持和财富架构解决方案。",
  },
  "zh-TW": {
    label: "個人信託",
    titlePart1: "量身打造的財富方案",
    titleHighlight: "服務高淨值人士",
    subtitle: "聚焦傳承、治理與資產保護的專業架構服務",
    description:
      "提供精密的繼承規劃、家族治理和資產保護服務，以及交易支持和財富架構解決方案。",
  },
}

export function PersonalTrustHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center overflow-hidden">
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
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#4357ef]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#672bff]/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#4357ef]" />
            <span className="text-[#4357ef] text-sm tracking-widest">{t.label}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
            <span className="text-white">{t.titlePart1}</span>
            <br />
            <span className="text-[#4357ef]">{t.titleHighlight}</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-4">{t.subtitle}</p>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">{t.description}</p>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
