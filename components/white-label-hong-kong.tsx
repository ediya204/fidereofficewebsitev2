"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe, Shield, Landmark, Scale, FileCheck, Building2 } from "@/components/ui/app-icon"

const content = {
  en: {
    title: "Why setting up a trust company in Hong Kong?",
    subtitle: "Hong Kong is the ideal location to set up a trust company",
    features: [
      {
        icon: Globe,
        title: "Reach Asia",
        description:
          "As one of the world's leading financial centers, Hong Kong provides a strategically advantageous base to expand your business reach across the Asia-Pacific region and beyond. It serves as a gateway to many high-growth markets.",
      },
      {
        icon: Shield,
        title: "Secure Funds",
        description:
          "Hong Kong maintains a robust and politically stable financial infrastructure. As a leading global hub, funds are securely managed under strict regulatory oversight and world-class banking systems.",
      },
      {
        icon: Landmark,
        title: "Common Law System",
        description:
          "Hong Kong's legal framework is based on English common law, providing a familiar and trusted environment for international businesses with strong property rights protection.",
      },
      {
        icon: Scale,
        title: "Tax Efficiency",
        description:
          "Hong Kong offers a competitive tax regime with no capital gains tax, no withholding tax on dividends, and territorial taxation system that benefits international structures.",
      },
      {
        icon: FileCheck,
        title: "Regulatory Excellence",
        description:
          "The Trust Companies Ordinance provides a clear regulatory framework while the TCSP licensing regime ensures high professional standards and client protection.",
      },
      {
        icon: Building2,
        title: "World-Class Infrastructure",
        description:
          "Access to leading global banks, professional service providers, and sophisticated financial infrastructure supports complex trust operations efficiently.",
      },
    ],
  },
  "zh-CN": {
    title: "为什么在香港设立信托公司？",
    subtitle: "香港是设立信托公司的理想之地",
    features: [
      {
        icon: Globe,
        title: "辐射亚洲",
        description:
          "作为全球领先的金融中心之一，香港为您提供战略优势基地，将业务拓展至亚太地区及更远地方。它是通往众多高增长市场的门户。",
      },
      {
        icon: Shield,
        title: "资金安全",
        description:
          "香港拥有稳健且政治稳定的金融基础设施。作为全球领先的枢纽，资金在严格的监管和世界级银行系统下得到安全管理。",
      },
      {
        icon: Landmark,
        title: "普通法体系",
        description: "香港的法律框架基于英国普通法，为国际企业提供熟悉且值得信赖的环境，并具有强有力的产权保护。",
      },
      {
        icon: Scale,
        title: "税务效率",
        description: "香港提供具有竞争力的税制，无资本利得税、无股息预扣税，以及有利于国际结构的地域来源征税制度。",
      },
      {
        icon: FileCheck,
        title: "监管卓越",
        description: "《信托公司条例》提供清晰的监管框架，而TCSP牌照制度确保高专业标准和客户保护。",
      },
      {
        icon: Building2,
        title: "世界级基础设施",
        description: "可接入全球领先银行、专业服务提供商和先进的金融基础设施，高效支持复杂的信托运营。",
      },
    ],
  },
  "zh-TW": {
    title: "為什麼在香港設立信託公司？",
    subtitle: "香港是設立信託公司的理想之地",
    features: [
      {
        icon: Globe,
        title: "輻射亞洲",
        description:
          "作為全球領先的金融中心之一，香港為您提供戰略優勢基地，將業務拓展至亞太地區及更遠地方。它是通往眾多高增長市場的門戶。",
      },
      {
        icon: Shield,
        title: "資金安全",
        description:
          "香港擁有穩健且政治穩定的金融基礎設施。作為全球領先的樞紐，資金在嚴格的監管和世界級銀行系統下得到安全管理。",
      },
      {
        icon: Landmark,
        title: "普通法體系",
        description: "香港的法律框架基於英國普通法，為國際企業提供熟悉且值得信賴的環境，並具有強有力的產權保護。",
      },
      {
        icon: Scale,
        title: "稅務效率",
        description: "香港提供具有競爭力的稅制，無資本利得稅、無股息預扣稅，以及有利於國際結構的地域來源徵稅制度。",
      },
      {
        icon: FileCheck,
        title: "監管卓越",
        description: "《信託公司條例》提供清晰的監管框架，而TCSP牌照制度確保高專業標準和客戶保護。",
      },
      {
        icon: Building2,
        title: "世界級基礎設施",
        description: "可接入全球領先銀行、專業服務提供商和先進的金融基礎設施，高效支持複雜的信託營運。",
      },
    ],
  },
}

export function WhiteLabelHongKong() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content["zh-CN"]

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Feature grid - EMQ style with icons and descriptions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#1a1a2e]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
