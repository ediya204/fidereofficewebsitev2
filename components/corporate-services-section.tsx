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
  const moduleStyles = [
    { color: "#4357ef", softBg: "bg-[#eef1ff]", border: "group-hover:border-[#4357ef]/40" },
    { color: "#672bff", softBg: "bg-[#f2eaff]", border: "group-hover:border-[#672bff]/40" },
    { color: "#ff5c50", softBg: "bg-[#fff0ee]", border: "group-hover:border-[#ff5c50]/40" },
    { color: "#07072d", softBg: "bg-[#eff0f6]", border: "group-hover:border-[#07072d]/30" },
    { color: "#33384f", softBg: "bg-[#f2f4f8]", border: "group-hover:border-[#33384f]/35" },
    { color: "#4357ef", softBg: "bg-[#edf3ff]", border: "group-hover:border-[#4357ef]/40" },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#f6f9fc]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-[#eef1ff] rounded-md text-[#4357ef] text-sm font-semibold mb-4 tracking-[0.08em] uppercase">
            {t.sectionLabel}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#07072d] mb-4">
            {t.title}
          </h2>
          <p className="text-[#64748d] text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                {/* Top accent */}
                <div className="absolute left-0 right-0 top-0 h-1" style={{ backgroundColor: style.color }} />
                {/* Ambient accent glow */}
                <div
                  className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full opacity-30 blur-2xl"
                  style={{ backgroundColor: style.color }}
                />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-md ${style.softBg} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-7 h-7" style={{ color: style.color }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#07072d] mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#64748d] leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Footer label */}
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
