"use client"

import { useLanguage } from "@/contexts/language-context"
import { Users, Shield, Key, Briefcase, Scale } from "@/components/ui/app-icon"

const content = {
  en: {
    title: "Our white-label solutions are ideal for",
    case1: {
      number: "01",
      title: "Large financial groups",
      subtitle: "Managing diverse financial assets, including traditional holdings as well as new asset types",
      benefits: [
        {
          icon: Users,
          text: "Clients benefit from access to our digital trust platform, making it simple to subscribe to your offerings while enjoying the privacy, protection, tax planning, and succession benefits of a trust.",
        },
        {
          icon: Briefcase,
          text: "This improves sales and upselling opportunities, driving larger scale and revenue for your business. Tailoring trust solutions gives you more flexibility to serve unique client needs.",
        },
        {
          icon: Key,
          text: "By having your own trust company custodying client funds, you not only gain full control over KYC processes instead of relying on outside restrictions but also have the ability to govern your treasury.",
        },
      ],
    },
    case2: {
      number: "02",
      title: "Ultra high-net-worth family businesses",
      subtitle:
        "Seeking to independently govern their treasury assets while maximizing protection through a self-controlled trust structure",
      benefits: [
        {
          icon: Shield,
          text: "Consolidate shares and other holdings under an internally managed entity. This provides best-in-class asset firewalls, privacy, tax efficiency and succession planning.",
        },
        {
          icon: Key,
          text: "Eliminating third-party involvement increases ownership and autonomy over valuable assets. Full control of assets mitigates risks from external restrictions and leakage of information.",
        },
        {
          icon: Scale,
          text: "Tailoring trust solutions to unique family needs and objectives promotes multi-generational wealth preservation. Professional administration and operation facilitate sophisticated philanthropy, ownership transfers, and legacy planning.",
        },
      ],
    },
  },
  "zh-CN": {
    title: "我们的白标解决方案适用于",
    case1: {
      number: "01",
      title: "大型金融集团",
      subtitle: "管理多元化金融资产，包括传统持有资产及新型资产类别",
      benefits: [
        {
          icon: Users,
          text: "客户可通过我们的数字信托平台轻松订阅您的产品，同时享受信托带来的隐私保护、资产保障、税务规划和传承安排等优势。",
        },
        {
          icon: Briefcase,
          text: "这将提升销售和追加销售机会，为您的业务带来更大规模和收益。定制化的信托解决方案让您能够更灵活地满足客户的独特需求。",
        },
        {
          icon: Key,
          text: "通过拥有自己的信托公司托管客户资金，您不仅可以完全掌控KYC流程，而不是依赖外部限制，还能够自主管理财务资金。",
        },
      ],
    },
    case2: {
      number: "02",
      title: "超高净值家族企业",
      subtitle: "寻求独立管理财务资产，同时通过自控信托结构最大化保护",
      benefits: [
        {
          icon: Shield,
          text: "将股份和其他持有资产整合到内部管理的实体下。这提供了一流的资产防火墙、隐私保护、税务效率和传承规划。",
        },
        {
          icon: Key,
          text: "消除第三方参与可增加对宝贵资产的所有权和自主权。完全控制资产可降低外部限制和信息泄露的风险。",
        },
        {
          icon: Scale,
          text: "根据家族独特需求和目标定制信托解决方案，促进多代财富传承。专业的管理和运营有助于复杂的慈善事业、所有权转让和遗产规划。",
        },
      ],
    },
  },
  "zh-TW": {
    title: "我們的白標解決方案適用於",
    case1: {
      number: "01",
      title: "大型金融集團",
      subtitle: "管理多元化金融資產，包括傳統持有資產及新型資產類別",
      benefits: [
        {
          icon: Users,
          text: "客戶可透過我們的數位信託平台輕鬆訂閱您的產品，同時享受信託帶來的隱私保護、資產保障、稅務規劃和傳承安排等優勢。",
        },
        {
          icon: Briefcase,
          text: "這將提升銷售和追加銷售機會，為您的業務帶來更大規模和收益。客製化的信託解決方案讓您能夠更靈活地滿足客戶的獨特需求。",
        },
        {
          icon: Key,
          text: "透過擁有自己的信託公司託管客戶資金，您不僅可以完全掌控KYC流程，而不是依賴外部限制，還能夠自主管理財務資金。",
        },
      ],
    },
    case2: {
      number: "02",
      title: "超高淨值家族企業",
      subtitle: "尋求獨立管理財務資產，同時透過自控信託結構最大化保護",
      benefits: [
        {
          icon: Shield,
          text: "將股份和其他持有資產整合到內部管理的實體下。這提供了一流的資產防火牆、隱私保護、稅務效率和傳承規劃。",
        },
        {
          icon: Key,
          text: "消除第三方參與可增加對寶貴資產的所有權和自主權。完全控制資產可降低外部限制和資訊洩露的風險。",
        },
        {
          icon: Scale,
          text: "根據家族獨特需求和目標客製信託解決方案，促進多代財富傳承。專業的管理和營運有助於複雜的慈善事業、所有權轉讓和遺產規劃。",
        },
      ],
    },
  },
}

export function WhiteLabelUseCases() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content["zh-CN"]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-16 text-center">{t.title}</h2>

        <div className="space-y-20">
          {/* Case 01 */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl md:text-7xl font-bold text-[#2563EB]/20">{t.case1.number}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">{t.case1.title}</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">{t.case1.subtitle}</p>
            </div>
            <div className="space-y-6">
              {t.case1.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Case 02 */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl md:text-7xl font-bold text-[#2563EB]/20">{t.case2.number}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">{t.case2.title}</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">{t.case2.subtitle}</p>
            </div>
            <div className="space-y-6">
              {t.case2.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
