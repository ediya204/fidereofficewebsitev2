"use client"

import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "@/components/ui/app-icon"

const translations = {
  en: {
    label: "Global Invoice Payment",
    titlePart1: "Your Bills,",
    titleHighlight: "Our Responsibility",
    subtitle: "Delegate complex invoice payments to a trusted execution team",
    description:
      "Our Global Invoice Payment service acts as your payment secretary, helping you settle different bill types with structured workflows and cross-border readiness.",
  },
  "zh-CN": {
    label: "全球账单支付",
    titlePart1: "您的账单，",
    titleHighlight: "我们的责任",
    subtitle: "将复杂账单支付委托给专业执行团队",
    description:
      "我们的全球账单支付服务如同您的支付秘书，帮助您以结构化流程高效完成各类账单与跨境支付安排。",
  },
  "zh-TW": {
    label: "全球帳單支付",
    titlePart1: "您的帳單，",
    titleHighlight: "我們的責任",
    subtitle: "將複雜帳單支付委託給專業執行團隊",
    description:
      "我們的全球帳單支付服務如同您的支付秘書，幫助您以結構化流程高效完成各類帳單與跨境支付安排。",
  },
}

export function GlobalInvoicePaymentHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hands-holding-smartphone-and-credit-card-mobile-pa.jpg"
          alt="Hong Kong Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl animate-fade-in">
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
