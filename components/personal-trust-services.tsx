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

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm text-[#C9A961] mb-3 uppercase tracking-wider font-medium">
            {t.sectionLabel}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            {t.title}
          </h2>
        </div>

        {/* Services Grid - EMQ Style */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="group relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#5B4BA0] to-[#7B6BC0] text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B4BA0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#C9A961] to-[#5B4BA0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
