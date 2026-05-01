"use client"

import { useState } from "react"
import { Shield, Clock, Globe, Wallet, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Core Advantages",
    title: "Experience FIDERE TRUST Benefits",
    benefits: [
      {
        title: "No Capital Gains Tax in HK",
        description:
          "Maximize your investment returns in an environment with no capital gains tax, allowing profits to grow tax-free.",
      },
      {
        title: "No Lengthy Account Opening",
        description: "Start your investment journey quickly with our streamlined, hassle-free account opening process.",
      },
      {
        title: "24/7 Global Market Access",
        description: "Access global markets anytime for dynamic, round-the-clock investment opportunities.",
      },
      {
        title: "No High Minimum Requirements",
        description: "Invest without high costs or hidden fees, making participation accessible to everyone.",
      },
      {
        title: "No In-Person Visit Required",
        description: "Open your account remotely without the need to visit in person.",
      },
    ],
  },
  "zh-CN": {
    label: "核心优势",
    title: "体验 FIDERE TRUST 优势",
    benefits: [
      { title: "香港无资本利得税", description: "在无资本利得税的环境下最大化您的投资回报，让利润免税增长。" },
      { title: "无需漫长开户流程", description: "通过我们简化、无忧的开户流程快速开始投资之旅。" },
      { title: "24/7全球市场投资", description: "随时接入全球市场，实现动态、全天候的投资机会。" },
      { title: "无高额门槛要求", description: "无需高成本或隐藏费用即可投资，让所有人都能参与。" },
      { title: "无需亲临现场", description: "远程开设账户，无需亲自到访。" },
    ],
  },
  "zh-TW": {
    label: "核心優勢",
    title: "體驗 FIDERE TRUST 優勢",
    benefits: [
      { title: "香港無資本利得稅", description: "在無資本利得稅的環境下最大化您的投資回報，讓利潤免稅增長。" },
      { title: "無需漫長開戶流程", description: "通過我們簡化、無憂的開戶流程快速開始投資之旅。" },
      { title: "24/7全球市場投資", description: "隨時接入全球市場，實現動態、全天候的投資機會。" },
      { title: "無高額門檻要求", description: "無需高成本或隱藏費用即可投資，讓所有人都能參與。" },
      { title: "無需親臨現場", description: "遠程開設賬戶，無需親自到訪。" },
    ],
  },
}

const icons = [Shield, Clock, Globe, Wallet, Users]

export function WealthBenefits() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const benefits = t.benefits.map((benefit, index) => ({
    ...benefit,
    icon: icons[index],
    number: `0${index + 1}`,
  }))

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#2563EB] text-sm font-medium tracking-wider uppercase">{t.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">{t.title}</h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isActive = activeIndex === index
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                  isActive ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white hover:shadow-md"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#2563EB] rounded-t-full" />
                )}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    isActive ? "bg-[#2563EB]/10" : "bg-gray-100"
                  }`}
                >
                  <Icon className={`h-7 w-7 ${isActive ? "text-[#2563EB]" : "text-gray-400"}`} />
                </div>
                <div className="text-[#2563EB] text-sm font-bold mb-2">{benefit.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
