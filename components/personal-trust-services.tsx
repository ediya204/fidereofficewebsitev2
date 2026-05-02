"use client"

import { useLanguage } from "@/contexts/language-context"
import { Shield, Globe, Home, TrendingUp, Landmark, Bitcoin } from "@/components/ui/app-icon"

const translations = {
  en: {
    sectionLabel: "What We Offer",
    title: "Comprehensive services for your wealth journey",
    eyebrow: "Private trust capabilities",
    summary:
      "A coordinated service layer for families who need trust structuring, cross-border execution, asset oversight, and long-term governance from one accountable team.",
    proofPoints: ["Trust structuring", "Global execution", "Asset oversight"],
    moduleLabel: "Service module",
    serviceTags: ["Trust", "Execution", "Mobility", "Markets", "Real assets", "Web3"],
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
    eyebrow: "私人信托能力",
    summary: "为需要信托架构、跨境执行、资产监督和长期治理的家族，提供由同一专业团队协调的综合服务层。",
    proofPoints: ["信托架构", "全球执行", "资产监督"],
    moduleLabel: "服务模块",
    serviceTags: ["信托", "执行", "身份规划", "市场", "实物资产", "Web3"],
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
    eyebrow: "私人信託能力",
    summary: "為需要信託架構、跨境執行、資產監督和長期治理的家族，提供由同一專業團隊協調的綜合服務層。",
    proofPoints: ["信託架構", "全球執行", "資產監督"],
    moduleLabel: "服務模組",
    serviceTags: ["信託", "執行", "身份規劃", "市場", "實物資產", "Web3"],
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
    { color: "var(--emq-primary)", softBg: "bg-[#eef1ff]", border: "group-hover:border-[#4357ef]/45" },
    { color: "var(--emq-primary-strong)", softBg: "bg-[#f2eaff]", border: "group-hover:border-[#672bff]/40" },
    { color: "var(--emq-danger)", softBg: "bg-[#fff0ee]", border: "group-hover:border-[#ff5c50]/45" },
    { color: "var(--emq-ink-strong)", softBg: "bg-[#eff0f6]", border: "group-hover:border-[#07072d]/35" },
    { color: "var(--emq-ink)", softBg: "bg-[#f2f4f8]", border: "group-hover:border-[#232937]/35" },
    { color: "var(--emq-primary)", softBg: "bg-[#eef1ff]", border: "group-hover:border-[#4357ef]/45" },
  ]

  return (
    <section className="bg-[var(--emq-muted-surface)] py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 border-b border-[var(--emq-border)] pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--emq-primary)]">
              <span className="h-px w-10 bg-[var(--emq-primary)]" />
              {t.sectionLabel}
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.1] text-[var(--emq-ink-strong)] md:text-[42px]">
              {t.title}
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--emq-text-muted)]">{t.eyebrow}</p>
            <p className="max-w-2xl text-base leading-7 text-[var(--emq-ink)]">{t.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.proofPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-[4px] border border-[var(--emq-border-strong)] bg-white px-4 py-2 text-sm font-medium text-[var(--emq-ink)]"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const style = moduleStyles[index % moduleStyles.length]
            return (
              <div
                key={index}
                className={`group relative min-h-[250px] overflow-hidden rounded-md border border-[var(--emq-border)] bg-white p-7 transition-all duration-200 hover:shadow-[rgba(7,7,45,0.14)_0_15px_35px_0,rgba(0,0,0,0.08)_0_8px_24px_-8px] ${style.border}`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[3px] transition-all duration-200 group-hover:h-1"
                  style={{ backgroundColor: style.color }}
                />
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-[4px] ${style.softBg}`}>
                    <IconComponent className="h-6 w-6" style={{ color: style.color }} />
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--emq-text-muted)]">
                      {t.moduleLabel}
                    </p>
                    <p className="mt-1 text-2xl font-semibold tabular-nums text-[var(--emq-ink-strong)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8" style={{ backgroundColor: style.color }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--emq-text-muted)]">
                    {t.serviceTags[index]}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold leading-[1.15] tracking-normal text-[var(--emq-ink-strong)]">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-7 text-[var(--emq-text-muted)]">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
