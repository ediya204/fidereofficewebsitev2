"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "@/components/ui/app-icon"
import Link from "next/link"

export function TrustAccountHero() {
  const { language, locale } = useLanguage()

  const content = {
    en: {
      label: "Trust Account",
      title: "Global Trust Asset Management Simplified",
      subtitle:
        "Our comprehensive trust platform removes the friction in wealth management and makes it easy for you to manage assets globally with greater security, transparency and compliance – all with a single account.",
      cta1: "Get Started",
      cta2: "Contact Us",
    },
    "zh-CN": {
      label: "信托账户",
      title: "全球信托资产管理简化",
      subtitle:
        "我们的综合信托平台消除了财富管理中的摩擦，使您能够轻松地在全球范围内管理资产，同时确保更高的安全性、透明度和合规性——只需一个账户。",
      cta1: "立即开始",
      cta2: "联系我们",
    },
    "zh-TW": {
      label: "信託賬戶",
      title: "全球信託資產管理簡化",
      subtitle:
        "我們的綜合信託平台消除了財富管理中的摩擦，使您能夠輕鬆地在全球範圍內管理資產，同時確保更高的安全性、透明度和合規性——只需一個賬戶。",
      cta1: "立即開始",
      cta2: "聯繫我們",
    },
  }

  const t = content[language] || content.en

  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#0a0a1a] overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6366F1]/15 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#60a5fa] text-sm font-medium rounded-full mb-6">
            {t.label}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">{t.title}</h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">{t.subtitle}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1d4ed8] transition group"
            >
              {t.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition"
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
