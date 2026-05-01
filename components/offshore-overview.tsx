"use client"

import { useLanguage } from "@/contexts/language-context"
import { Building2, Bitcoin, Landmark, Building } from "lucide-react"

const translations = {
  en: {
    topBanner:
      "Borderless banking services with instant settlement. FIDERE connects institutions and individuals in the digital economy in real-time, building a digital financial ecosystem. 24/7 infrastructure support with zero-fee instant transfers between FIDERE accounts.",
    title: "A Unified Platform for All Your Asset Accounts",
    description:
      "Our comprehensive trust platform enables you to manage accounts in Hong Kong, United States, Singapore, and digital assets through a single interface, with coverage across major global financial centers.",
    accounts: [
      { id: "hk", title: "Hong Kong Account", icon: Building2 },
      { id: "us", title: "US Account", icon: Landmark },
      { id: "sg", title: "Singapore Account", icon: Building },
      { id: "digital-assets", title: "Digital Assets", icon: Bitcoin },
    ],
  },
  "zh-CN": {
    topBanner:
      "无边界银行服务，即时结算。FIDERE 实时互联数字经济中的机构与个人，构建数字金融生态。全年无休基础设施支持，FIDERE账户间即时转账零费用畅行。",
    title: "一站式资产账户管理平台",
    description:
      "我们的综合信托平台让您能够通过单一界面管理香港、美国、新加坡银行账户及数字资产，覆盖全球主要金融中心。",
    accounts: [
      { id: "hk", title: "香港账户", icon: Building2 },
      { id: "us", title: "美国账户", icon: Landmark },
      { id: "sg", title: "新加坡账户", icon: Building },
      { id: "digital-assets", title: "数字资产", icon: Bitcoin },
    ],
  },
  "zh-TW": {
    topBanner:
      "無邊界銀行服務，即時結算。FIDERE 實時互聯數字經濟中的機構與個人，構建數字金融生態。全年無休基礎設施支持，FIDERE帳戶間即時轉帳零費用暢行。",
    title: "一站式資產帳戶管理平台",
    description:
      "我們的綜合信託平台讓您能夠通過單一界面管理香港、美國、新加坡銀行帳戶及數字資產，覆蓋全球主要金融中心。",
    accounts: [
      { id: "hk", title: "香港帳戶", icon: Building2 },
      { id: "us", title: "美國帳戶", icon: Landmark },
      { id: "sg", title: "新加坡帳戶", icon: Building },
      { id: "digital-assets", title: "數字資產", icon: Bitcoin },
    ],
  },
}

export function OffshoreOverview() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="pt-12 pb-16 md:pb-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <p className="text-[#1a1a2e] text-lg md:text-xl leading-relaxed">{t.topBanner}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left Side - Title and Description */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#07072d] leading-tight mb-6">
              {t.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{t.description}</p>
          </div>

          {/* Right Side - Hub and Spoke Diagram */}
          <div className="flex-1 flex items-start justify-center pt-1">
            <div className="relative flex items-center gap-4">
              {/* Central Hub - FIDERE Logo */}
              <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#4357ef] flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl md:text-3xl font-semibold tracking-wide">FIDERE</span>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <div className="w-16 md:w-24 h-[2px] bg-gray-400"></div>
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gray-400"></div>
              </div>

              {/* Account Types List */}
              <div className="flex flex-col gap-5">
                {t.accounts.map((account) => {
                  const IconComponent = account.icon
                  return (
                    <div key={account.id} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                        <IconComponent className="w-6 h-6 text-[#1a1a2e]" strokeWidth={1.5} />
                      </div>
                      <span className="text-[#1a1a2e] text-lg md:text-xl font-semibold whitespace-nowrap">
                        {account.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
