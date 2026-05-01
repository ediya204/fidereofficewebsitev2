"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

const platformFeatures = [
  {
    id: 1,
    image: "/secure-vault-with-gold-bars-and-digital-interface.jpg",
    titleKey: "secureStorage",
    descKey: "secureStorageDesc",
  },
  {
    id: 2,
    image: "/global-network-connections-digital-visualization.jpg",
    titleKey: "globalAccess",
    descKey: "globalAccessDesc",
  },
  {
    id: 3,
    image: "/mobile-banking-app-interface-on-smartphone.jpg",
    titleKey: "mobileApp",
    descKey: "mobileAppDesc",
  },
  {
    id: 4,
    image: "/financial-analytics-dashboard.png",
    titleKey: "realTimeAnalytics",
    descKey: "realTimeAnalyticsDesc",
  },
  {
    id: 5,
    image: "/premium-black-credit-card-on-marble-surface.jpg",
    titleKey: "assetCard",
    descKey: "assetCardDesc",
  },
]

export function PlatformSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = getTranslation(language)

  const featureTitles: Record<string, string> = {
    secureStorage: language === "en" ? "Secure Storage" : language === "zh-CN" ? "安全存储" : "安全存儲",
    globalAccess: language === "en" ? "Global Access" : language === "zh-CN" ? "全球访问" : "全球訪問",
    mobileApp: language === "en" ? "Mobile Platform" : language === "zh-CN" ? "移动平台" : "移動平台",
    realTimeAnalytics: language === "en" ? "Real-time Analytics" : language === "zh-CN" ? "实时分析" : "實時分析",
    assetCard: language === "en" ? "Asset Link Card" : language === "zh-CN" ? "资产挂钩卡" : "資產掛鉤卡",
  }

  const featureDescs: Record<string, string> = {
    secureStorageDesc:
      language === "en"
        ? "Bank-grade security for your digital and traditional assets"
        : language === "zh-CN"
          ? "银行级安全保障您的数字和传统资产"
          : "銀行級安全保障您的數字和傳統資產",
    globalAccessDesc:
      language === "en"
        ? "Access your wealth from anywhere in the world"
        : language === "zh-CN"
          ? "随时随地访问您的财富"
          : "隨時隨地訪問您的財富",
    mobileAppDesc:
      language === "en"
        ? "Manage your portfolio on the go with our mobile app"
        : language === "zh-CN"
          ? "通过移动应用随时管理您的投资组合"
          : "通過移動應用隨時管理您的投資組合",
    realTimeAnalyticsDesc:
      language === "en"
        ? "Monitor your investments with live data and insights"
        : language === "zh-CN"
          ? "通过实时数据和洞察监控您的投资"
          : "通過實時數據和洞察監控您的投資",
    assetCardDesc:
      language === "en"
        ? "Spend against your assets with our premium card"
        : language === "zh-CN"
          ? "使用高端卡片消费您的资产"
          : "使用高端卡片消費您的資產",
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-sm font-medium text-[#5B4BA0] mb-3 block">{t.platform.label}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl">{t.platform.title}</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5B4BA0] hover:gap-3 transition-all self-start md:self-auto"
          >
            <span>{language === "en" ? "Explore Platform" : language === "zh-CN" ? "探索平台" : "探索平台"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Horizontal scrolling feature cards */}
      <div
        className="flex gap-4 overflow-x-auto pb-8 px-6 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {platformFeatures.map((feature, index) => {
          const isHovered = hoveredIndex === index
          return (
            <div
              key={feature.id}
              className={`relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isHovered ? "w-[350px]" : "w-[280px]"
              }`}
              style={{ height: "380px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={featureTitles[feature.titleKey]}
                fill
                className="object-cover"
              />

              {/* Default state */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-lg font-semibold">{featureTitles[feature.titleKey]}</h3>
                </div>
              </div>

              {/* Hover state with gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#5B4BA0] via-[#5B4BA0]/80 to-[#5B4BA0]/40 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-lg font-semibold mb-2">{featureTitles[feature.titleKey]}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{featureDescs[feature.descKey]}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
