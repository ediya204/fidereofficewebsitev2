"use client"

import { useLanguage } from "@/contexts/language-context"
import { Shield, Globe, Zap, Eye, Scale, Lock } from "lucide-react"

export function TrustAccountBenefits() {
  const { language } = useLanguage()

  const content = {
    en: {
      label: "Benefits of Our Platform",
      title: "Why Choose FIDERE Trust Account",
      subtitle:
        "Our flexible trust infrastructure delivers increased security, certainty, transparency and efficiency – vital requirements for modern wealth management.",
      benefits: [
        {
          icon: Shield,
          title: "Asset Protection",
          description:
            "Robust legal structures that safeguard your assets from potential claims and provide peace of mind.",
        },
        {
          icon: Globe,
          title: "Global Access",
          description: "Manage and access your assets from anywhere in the world with our digital-first platform.",
        },
        {
          icon: Zap,
          title: "Speed & Efficiency",
          description: "Execute transactions and manage your portfolio with unprecedented speed and simplicity.",
        },
        {
          icon: Eye,
          title: "Transparency",
          description:
            "Real-time visibility into your assets, transactions and performance through our intuitive dashboard.",
        },
        {
          icon: Scale,
          title: "Compliance",
          description: "Built with a strong foundation in regulatory compliance to meet all legal requirements.",
        },
        {
          icon: Lock,
          title: "Privacy",
          description: "Enhanced privacy features ensure your financial affairs remain confidential and secure.",
        },
      ],
    },
    "zh-CN": {
      label: "平台优势",
      title: "为什么选择 FIDERE 信托账户",
      subtitle: "我们灵活的信托基础设施提供更高的安全性、确定性、透明度和效率——这是现代财富管理的关键要求。",
      benefits: [
        {
          icon: Shield,
          title: "资产保护",
          description: "强健的法律结构保护您的资产免受潜在索赔，让您安心无忧。",
        },
        {
          icon: Globe,
          title: "全球访问",
          description: "通过我们的数字优先平台，随时随地管理和访问您的资产。",
        },
        {
          icon: Zap,
          title: "速度与效率",
          description: "以前所未有的速度和简便性执行交易并管理您的投资组合。",
        },
        {
          icon: Eye,
          title: "透明度",
          description: "通过我们直观的仪表板实时查看您的资产、交易和业绩。",
        },
        {
          icon: Scale,
          title: "合规性",
          description: "建立在强大的监管合规基础之上，满足所有法律要求。",
        },
        {
          icon: Lock,
          title: "隐私保护",
          description: "增强的隐私功能确保您的财务事务保密和安全。",
        },
      ],
    },
    "zh-TW": {
      label: "平台優勢",
      title: "為什麼選擇 FIDERE 信託賬戶",
      subtitle: "我們靈活的信託基礎設施提供更高的安全性、確定性、透明度和效率——這是現代財富管理的關鍵要求。",
      benefits: [
        {
          icon: Shield,
          title: "資產保護",
          description: "強健的法律結構保護您的資產免受潛在索賠，讓您安心無憂。",
        },
        {
          icon: Globe,
          title: "全球訪問",
          description: "通過我們的數位優先平台，隨時隨地管理和訪問您的資產。",
        },
        {
          icon: Zap,
          title: "速度與效率",
          description: "以前所未有的速度和簡便性執行交易並管理您的投資組合。",
        },
        {
          icon: Eye,
          title: "透明度",
          description: "通過我們直觀的儀表板實時查看您的資產、交易和業績。",
        },
        {
          icon: Scale,
          title: "合規性",
          description: "建立在強大的監管合規基礎之上，滿足所有法律要求。",
        },
        {
          icon: Lock,
          title: "隱私保護",
          description: "增強的隱私功能確保您的財務事務保密和安全。",
        },
      ],
    },
  }

  const t = content[language] || content.en

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0a1a] mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#2563EB]/30 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a0a1a] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
