"use client"

import { useLanguage } from "@/contexts/language-context"
import { Building2, FileText, Users, Calculator, Scale, Briefcase } from "lucide-react"

const translations = {
  en: {
    sectionLabel: "Corporate Clients",
    title: "Services We Provide",
    subtitle: "Comprehensive corporate solutions tailored for international businesses",
    services: [
      {
        icon: "building",
        title: "Company Formation",
        description: "We support international companies with incorporation and management, offering top-tier global jurisdictions and seamless corporate migration services.",
      },
      {
        icon: "fileText",
        title: "Transaction Support",
        description: "We manage complex cross-border transactions and serve as your payment secretary, ensuring smooth bill payment and management processes.",
      },
      {
        icon: "users",
        title: "Trustee & Directors",
        description: "We provide comprehensive administrative support including corporate directors, company secretarial services, nominee structures, bank signatory roles, and liaison with local authorities.",
      },
      {
        icon: "calculator",
        title: "Tax Compliance",
        description: "Our team provides accounting and tax compliance services for international businesses, including annual accounts, audits, filings, and tax authority support.",
      },
      {
        icon: "scale",
        title: "Regulatory Compliance",
        description: "We offer comprehensive legal and compliance solutions, guiding clients through global regulatory requirements with full cross-jurisdictional legal and compliance support.",
      },
      {
        icon: "briefcase",
        title: "Equity Custody Services",
        description: "We provide secure custody, management, and settlement support for clients' equity investments across global markets.",
      },
    ],
  },
  "zh-CN": {
    sectionLabel: "企业客户",
    title: "我们提供的服务",
    subtitle: "为国际企业量身定制的综合解决方案",
    services: [
      {
        icon: "building",
        title: "公司成立",
        description: "我们为国际企业提供公司设立和管理方面的支持，提供全球顶级注册地选择和无缝企业迁移服务。",
      },
      {
        icon: "fileText",
        title: "交易支持",
        description: "我们负责管理复杂的跨境交易，并担任您的支付秘书，确保账单支付和管理顺利进行。",
      },
      {
        icon: "users",
        title: "受托人与董事",
        description: "我们提供全面的行政支持，包括公司董事、公司秘书服务、代理人架构、银行签字人角色以及与地方当局的联络。",
      },
      {
        icon: "calculator",
        title: "税务合规",
        description: "我们的团队为国际企业提供会计和税务合规服务，包括年度账目、审计、申报和税务机关支援。",
      },
      {
        icon: "scale",
        title: "监管合规",
        description: "我们提供全面的法律和合规解决方案，通过跨司法管辖区的全面法律和合规性支持，指导客户应对全球监管要求。",
      },
      {
        icon: "briefcase",
        title: "股票托管服务",
        description: "我们为客户在全球市场的股权投资提供安全的托管、管理和结算支援。",
      },
    ],
  },
  "zh-TW": {
    sectionLabel: "企業客戶",
    title: "我們提供的服務",
    subtitle: "為國際企業量身定制的綜合解決方案",
    services: [
      {
        icon: "building",
        title: "公司成立",
        description: "我們為國際企業提供公司設立和管理方面的支持，提供全球頂級註冊地選擇和無縫企業遷移服務。",
      },
      {
        icon: "fileText",
        title: "交易支持",
        description: "我們負責管理複雜的跨境交易，並擔任您的支付秘書，確保帳單支付和管理順利進行。",
      },
      {
        icon: "users",
        title: "受託人與董事",
        description: "我們提供全面的行政支持，包括公司董事、公司秘書服務、代理人架構、銀行簽字人角色以及與地方當局的聯絡。",
      },
      {
        icon: "calculator",
        title: "稅務合規",
        description: "我們的團隊為國際企業提供會計和稅務合規服務，包括年度帳目、審計、申報和稅務機關支援。",
      },
      {
        icon: "scale",
        title: "監理合規",
        description: "我們提供全面的法律和合規解決方案，透過跨司法管轄區的全面法律和合規性支持，指導客戶應對全球監管要求。",
      },
      {
        icon: "briefcase",
        title: "股票託管服務",
        description: "我們為客戶在全球市場的股權投資提供安全的託管、管理和結算支援。",
      },
    ],
  },
}

const iconMap = {
  building: Building2,
  fileText: FileText,
  users: Users,
  calculator: Calculator,
  scale: Scale,
  briefcase: Briefcase,
}

export function CorporateServicesSection() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#5B4BA0]/10 rounded-full text-[#5B4BA0] text-sm font-medium mb-4">
            {t.sectionLabel}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#5B4BA0]/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5B4BA0] to-[#7B6BC0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B4BA0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-[#5B4BA0] to-[#C9A961] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
