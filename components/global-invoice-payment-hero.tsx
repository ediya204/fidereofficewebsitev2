"use client"

import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Global Invoice Payment",
    title: "Your bills, our responsibility",
    subtitle: "Delegate the hassle of bill payments to FIDERE Trust. Our Global Invoice Payment service acts as your personal secretary, allowing you to instruct us to pay all kinds of bills at any time.",
  },
  "zh-CN": {
    label: "全球账单支付",
    title: "您的账单，我们的责任",
    subtitle: "将繁琐的账单支付工作委托给 FIDERE Trust。我们的全球账单支付服务如同您的私人秘书，让您随时可以指示我们支付各类账单。",
  },
  "zh-TW": {
    label: "全球帳單支付",
    title: "您的帳單，我們的責任",
    subtitle: "將繁瑣的帳單支付工作委託給 FIDERE Trust。我們的全球帳單支付服務如同您的私人秘書，讓您隨時可以指示我們支付各類帳單。",
  },
}

export function GlobalInvoicePaymentHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hong-kong-peak-view.jpg"
          alt="Hong Kong Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32 text-center">
        <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
          {t.label}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>
    </section>
  )
}
