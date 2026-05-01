"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Wealth Management",
    headline1: "24/7 Access to",
    headline2: "Global Markets",
    subtitle: "Invest in global markets with the simplest approach",
    description:
      "Consolidate all your investments under a single trust account, protecting your assets from regional instability and political uncertainty. Achieve global diversification through multi-currency holdings with round-the-clock forex management services.",
    cta: "Get Started",
  },
  "zh-CN": {
    label: "财富管理",
    headline1: "全天候接入",
    headline2: "全球市场",
    subtitle: "以最简单的方式实现24/7全球市场投资",
    description:
      "在单一信托账户下整合您的所有投资，保护您的资产免受区域不稳定和政治不确定性的影响。通过多币种持有实现全球布局，享受全天候外汇管理服务。",
    cta: "立即开始",
  },
  "zh-TW": {
    label: "財富管理",
    headline1: "全天候接入",
    headline2: "全球市場",
    subtitle: "以最簡單的方式實現24/7全球市場投資",
    description:
      "在單一信託賬戶下整合您的所有投資，保護您的資產免受區域不穩定和政治不確定性的影響。通過多幣種持有實現全球佈局，享受全天候外匯管理服務。",
    cta: "立即開始",
  },
}

export function WealthHero() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/07bDazoMMC4hx5ASfubI384450.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16 lg:px-24">
        <div
          className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-amber-500" />
            <span className="text-amber-500 text-sm font-medium tracking-wider uppercase">{t.label}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">{t.headline1}</span>
            <br />
            <span className="text-amber-500">{t.headline2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-4 max-w-2xl">{t.subtitle}</p>

          {/* Description */}
          <p className="text-base text-white/60 mb-8 max-w-2xl leading-relaxed">{t.description}</p>

          {/* CTA Button */}
          <Link href="/contact">
            <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-6 text-base font-medium rounded-md">
              {t.cta}
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
