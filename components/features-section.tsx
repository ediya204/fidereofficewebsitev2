"use client"

import { ArrowUpRight, Clock, Link2, Shield, UserPlus } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const features = [
  {
    icon: ArrowUpRight,
    titleKey: "globalBanking",
    descKey: "globalBankingDesc",
  },
  {
    icon: Clock,
    titleKey: "allHours",
    descKey: "allHoursDesc",
  },
  {
    icon: Link2,
    titleKey: "connected",
    descKey: "connectedDesc",
  },
  {
    icon: Shield,
    titleKey: "protected",
    descKey: "protectedDesc",
  },
  {
    icon: UserPlus,
    titleKey: "onboarding",
    descKey: "onboardingDesc",
  },
]

const featureContent = {
  en: {
    globalBanking: "Global Trust Services",
    globalBankingDesc:
      "Trust services should be accessible. FIDERE bridges traditional finance, making global trust services open to all.",
    allHours: "24/7 Access",
    allHoursDesc: "Manage your trust assets in real-time, seizing opportunities as they arise - around the clock.",
    connected: "Connected Assets",
    connectedDesc:
      "Built to bridge all asset classes. FIDERE connects you to the world's leading financial institutions—effortlessly.",
    protected: "Protected Assets",
    protectedDesc: "Trust, redefined for the modern economy. With advanced security and highest regulatory standards.",
    onboarding: "Onboarding from anywhere",
    onboardingDesc:
      "Open your account securely from wherever you are. Enjoy fast, hassle-free onboarding with instant access.",
  },
  "zh-CN": {
    globalBanking: "全球信托服务",
    globalBankingDesc: "信托服务应该触手可及。FIDERE连接传统金融，让全球信托服务向所有人开放。",
    allHours: "全天候访问",
    allHoursDesc: "实时管理您的信托资产，随时把握机遇——全天候无间断。",
    connected: "资产互联",
    connectedDesc: "为连接所有资产类别而生。FIDERE让您轻松接入世界领先的金融机构。",
    protected: "资产保护",
    protectedDesc: "为现代经济重新定义信托。采用先进的安全技术和最高监管标准。",
    onboarding: "随地开户",
    onboardingDesc: "无论身在何处，都可安全开户。享受快速、无忧的开户体验，即时获得访问权限。",
  },
  "zh-TW": {
    globalBanking: "全球信託服務",
    globalBankingDesc: "信託服務應該觸手可及。FIDERE連接傳統金融，讓全球信託服務向所有人開放。",
    allHours: "全天候訪問",
    allHoursDesc: "實時管理您的信託資產，隨時把握機遇——全天候無間斷。",
    connected: "資產互聯",
    connectedDesc: "為連接所有資產類別而生。FIDERE讓您輕鬆接入世界領先的金融機構。",
    protected: "資產保護",
    protectedDesc: "為現代經濟重新定義信託。採用先進的安全技術和最高監管標準。",
    onboarding: "隨地開戶",
    onboardingDesc: "無論身在何處，都可安全開戶。享受快速、無憂的開戶體驗，即時獲得訪問權限。",
  },
}

export function FeaturesSection() {
  const { language } = useLanguage()
  const content = featureContent[language] || featureContent.en

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <Icon className="w-8 h-8 text-[#5B4BA0] mb-4 stroke-[1.5]" />
                <h3 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">
                  {content[feature.titleKey as keyof typeof content]}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {content[feature.descKey as keyof typeof content]}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
