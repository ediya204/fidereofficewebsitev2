"use client"

import { useLanguage } from "@/contexts/language-context"
import { Shield, Globe, Home, TrendingUp, Landmark, Bitcoin } from "lucide-react"

const translations = {
  en: {
    sectionLabel: "What We Offer",
    title: "Comprehensive services for your wealth journey",
    services: [
      {
        icon: "Shield",
        title: "Trust Services",
        description: "We structure and administer trusts with expert, long-term support from our globally experienced team.",
      },
      {
        icon: "Globe",
        title: "Transaction Support",
        description: "We navigate international payment procedures, compliance verification and due diligence assistance.",
      },
      {
        icon: "Home",
        title: "Residency & Citizenship",
        description: "We guide clients' relocation with applications for all kinds of residency and citizenship programmes, such as the Hong Kong CIES program.",
      },
      {
        icon: "TrendingUp",
        title: "Investment Access",
        description: "We connect clients to trusted brokerage and asset management platforms for equity, bond, and multi-asset investment opportunities.",
      },
      {
        icon: "Landmark",
        title: "Real Asset Administration",
        description: "We manage global holding structures for real assets such as real estate, art, private jet and others.",
      },
      {
        icon: "Bitcoin",
        title: "Digital Asset Custody",
        description: "We provide secure administration and oversight of clients' digital and Web3 asset holdings.",
      },
    ],
  },
  "zh-CN": {
    sectionLabel: "我们提供的服务",
    title: "为您的财富之旅提供全面服务",
    services: [
      {
        icon: "Shield",
        title: "信托服务",
        description: "我们在全球经验丰富的团队的长期专业支持下，架构和管理信托。",
      },
      {
        icon: "Globe",
        title: "交易支持",
        description: "我们协助处理国际支付程序、合规验证和尽职调查。",
      },
      {
        icon: "Home",
        title: "居留与公民身份",
        description: "我们指导客户申请各类居留和公民身份计划，如香港资本投资者入境计划（CIES）。",
      },
      {
        icon: "TrendingUp",
        title: "投资渠道",
        description: "我们为客户对接值得信赖的经纪和资产管理平台，提供股票、债券和多资产投资机会。",
      },
      {
        icon: "Landmark",
        title: "实物资产管理",
        description: "我们管理房地产、艺术品、私人飞机等实物资产的全球持有结构。",
      },
      {
        icon: "Bitcoin",
        title: "数字资产托管",
        description: "我们为客户的数字资产和Web3资产提供安全的管理和监督服务。",
      },
    ],
  },
  "zh-TW": {
    sectionLabel: "我們提供的服務",
    title: "為您的財富之旅提供全面服務",
    services: [
      {
        icon: "Shield",
        title: "信託服務",
        description: "我們在全球經驗豐富的團隊的長期專業支持下，架構和管理信託。",
      },
      {
        icon: "Globe",
        title: "交易支持",
        description: "我們協助處理國際支付程序、合規驗證和盡職調查。",
      },
      {
        icon: "Home",
        title: "居留與公民身份",
        description: "我們指導客戶申請各類居留和公民身份計劃，如香港資本投資者入境計劃（CIES）。",
      },
      {
        icon: "TrendingUp",
        title: "投資渠道",
        description: "我們為客戶對接值得信賴的經紀和資產管理平台，提供股票、債券和多資產投資機會。",
      },
      {
        icon: "Landmark",
        title: "實物資產管理",
        description: "我們管理房地產、藝術品、私人飛機等實物資產的全球持有結構。",
      },
      {
        icon: "Bitcoin",
        title: "數字資產託管",
        description: "我們為客戶的數字資產和Web3資產提供安全的管理和監督服務。",
      },
    ],
  },
}

const iconMap = {
  Shield,
  Globe,
  Home,
  TrendingUp,
  Landmark,
  Bitcoin,
}

export function PersonalTrustServices() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const moduleStyles = [
    { color: "#4357ef", softBg: "bg-[#eef1ff]", border: "group-hover:border-[#4357ef]/40" },
    { color: "#672bff", softBg: "bg-[#f2eaff]", border: "group-hover:border-[#672bff]/40" },
    { color: "#ff5c50", softBg: "bg-[#fff0ee]", border: "group-hover:border-[#ff5c50]/40" },
    { color: "#07072d", softBg: "bg-[#eff0f6]", border: "group-hover:border-[#07072d]/30" },
    { color: "#33384f", softBg: "bg-[#f2f4f8]", border: "group-hover:border-[#33384f]/35" },
    { color: "#4357ef", softBg: "bg-[#edf3ff]", border: "group-hover:border-[#4357ef]/40" },
  ]

  return (
    <section className="py-24 bg-[#f6f9fc]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-sm text-[#4357ef] mb-3 uppercase tracking-[0.18em] font-semibold">
            {t.sectionLabel}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#07072d] text-balance">
            {t.title}
          </h2>
        </div>

        {/* Services Grid - EMQ-inspired module cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const style = moduleStyles[index % moduleStyles.length]
            const moduleLabel =
              language === "en"
                ? `Module ${String(index + 1).padStart(2, "0")}`
                : language === "zh-CN"
                  ? `模块 ${String(index + 1).padStart(2, "0")}`
                  : `模組 ${String(index + 1).padStart(2, "0")}`
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg border border-[#e5edf5] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-24px_rgba(7,7,45,0.28)] ${style.border}`}
              >
                {/* Accent strip */}
                <div className="absolute left-0 right-0 top-0 h-1" style={{ backgroundColor: style.color }} />
                {/* Ambient accent blob */}
                <div
                  className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full opacity-30 blur-2xl"
                  style={{ backgroundColor: style.color }}
                />

                {/* Icon */}
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-md ${style.softBg}`}>
                  <IconComponent className="w-7 h-7" style={{ color: style.color }} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-semibold text-[#07072d] transition-colors" style={{ color: "#07072d" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed text-[#64748d]">
                  {service.description}
                </p>

                {/* Footer tag */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.16em] text-[#64748d]">{moduleLabel}</span>
                  <span className="h-[2px] w-10 rounded-full" style={{ backgroundColor: style.color }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
