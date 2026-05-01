"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    sectionLabel: "Solutions 01",
    title: "Trust & custody solutions",
    learnMore: "Learn more about Trust →",
    paragraph1:
      'Pursuant to the Recognition of Trusts Ordinance (Cap 76), Article 2 of the Schedule, the term "trust" refers to the legal relationship created—inter vivos or on death—by a person, the settlor, when assets have been placed under the control of a trustee for the benefit of a beneficiary or for a specified purpose.',
    paragraph2:
      "Whether your objective is for wealth and succession planning, tax benefits, asset accumulation, family office or simply greater discretion, our team can advise on the best trust structure to cater for your needs.",
    services: [
      {
        title: "Global Private Trust Services",
        description: "Comprehensive trust solutions for wealth protection and inheritance planning.",
      },
      {
        title: "Investment Optimization",
        description: "Access global opportunities beyond traditional investment channels.",
      },
      {
        title: "Succession Planning",
        description: "Protect and transfer your legacy across generations smoothly.",
      },
      {
        title: "Family Office Services",
        description: "Bespoke services for ultra-high net worth families.",
      },
    ],
  },
  "zh-CN": {
    sectionLabel: "解决方案 01",
    title: "信托与托管方案",
    learnMore: "了解更多关于信托 →",
    paragraph1:
      "根据《信托法律承认条例》（第76章）附表第2条，信托是指委托人在生前或去世时，将资产置于受托人控制之下，以使受益人获益或达到特定目的而创设的法律关系。",
    paragraph2:
      "无论您的目标是财富与继承规划、税务优惠、资产积累、家族办公室，还是仅仅为了更大的自主权，我们的团队都可以为您提供最佳信托架构的建议，以满足您的需求。",
    services: [
      {
        title: "全球私人信托服务",
        description: "提供全面的信托解决方案，用于财富保护和遗产规划。",
      },
      {
        title: "投资优化",
        description: "获取超越传统投资渠道的全球机会。",
      },
      {
        title: "继承规划",
        description: "顺利保护和转移您的财富遗产至下一代。",
      },
      {
        title: "家族办公室服务",
        description: "为超高净值家庭提供定制化服务。",
      },
    ],
  },
  "zh-TW": {
    sectionLabel: "解決方案 01",
    title: "信託與託管方案",
    learnMore: "了解更多關於信託 →",
    paragraph1:
      "根據《信託法律承認條例》（第76章）附表第2條，信託是指委託人在生前或去世時，將資產置於受託人控制之下，以使受益人獲益或達到特定目的而創設的法律關係。",
    paragraph2:
      "無論您的目標是財富與繼承規劃、稅務優惠、資產積累、家族辦公室，還是僅僅為了更大的自主權，我們的團隊都可以為您提供最佳信託架構的建議，以滿足您的需求。",
    services: [
      {
        title: "全球私人信託服務",
        description: "提供全面的信託解決方案，用於財富保護和遺產規劃。",
      },
      {
        title: "投資優化",
        description: "獲取超越傳統投資渠道的全球機會。",
      },
      {
        title: "繼承規劃",
        description: "順利保護和轉移您的財富遺產至下一代。",
      },
      {
        title: "家族辦公室服務",
        description: "為超高淨值家庭提供定制化服務。",
      },
    ],
  },
}

export function TrustCustodySolution() {
  const { language, locale } = useLanguage()
  const localePath = (path: string) => `/${locale}${path}`
  const t = translations[language] || translations.en

  return (
    <section id="trust-custody" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-sm text-[#4357ef] mb-2 uppercase tracking-wider">{t.sectionLabel}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <Link href={localePath("/trust-account")}>
            <Button variant="link" className="text-[#4357ef] p-0">
              {t.learnMore}
            </Button>
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-1 mb-16">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{t.paragraph1}</p>
            <p className="text-gray-700 leading-relaxed">{t.paragraph2}</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
