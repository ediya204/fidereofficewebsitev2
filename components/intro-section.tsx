"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

const businessCards = [
  {
    id: 1,
    image: "/professional-woman-analyzing-financial-data-on-scr.jpg",
    titleKey: "highNetWorth",
    descKey: "highNetWorthDesc",
  },
  {
    id: 2,
    image: "/hands-holding-smartphone-and-credit-card-mobile-pa.jpg",
    titleKey: "familyOffice",
    descKey: "familyOfficeDesc",
  },
  {
    id: 3,
    image: "/two-business-people-discussing-on-sofa-with-tablet.jpg",
    titleKey: "corporateTrust",
    descKey: "corporateTrustDesc",
  },
  {
    id: 4,
    image: "/woman-looking-at-computer-screen-with-financial-ch.jpg",
    titleKey: "assetProtection",
    descKey: "assetProtectionDesc",
  },
  {
    id: 5,
    image: "/young-woman-in-yellow-sweater-using-tablet-device.jpg",
    titleKey: "successionPlanning",
    descKey: "successionPlanningDesc",
  },
]

export function IntroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = getTranslation(language)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container
      const progress = scrollLeft / (scrollWidth - clientWidth)
      setScrollProgress(progress)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const cardTitles: Record<string, string> = {
    highNetWorth: language === "en" ? "High Net Worth" : language === "zh-CN" ? "高净值人士" : "高淨值人士",
    familyOffice: language === "en" ? "Family Office" : language === "zh-CN" ? "家族办公室" : "家族辦公室",
    corporateTrust: language === "en" ? "Corporate Trust" : language === "zh-CN" ? "企业信托" : "企業信託",
    assetProtection: language === "en" ? "Asset Protection" : language === "zh-CN" ? "资产保护" : "資產保護",
    successionPlanning: language === "en" ? "Succession Planning" : language === "zh-CN" ? "传承规划" : "傳承規劃",
  }

  const cardDescs: Record<string, string> = {
    highNetWorthDesc:
      language === "en"
        ? "Tailored wealth management solutions for discerning individuals"
        : language === "zh-CN"
          ? "为高端客户量身定制的财富管理方案"
          : "為高端客戶量身定制的財富管理方案",
    familyOfficeDesc:
      language === "en"
        ? "Comprehensive family wealth governance and administration"
        : language === "zh-CN"
          ? "全面的家族财富治理与管理服务"
          : "全面的家族財富治理與管理服務",
    corporateTrustDesc:
      language === "en"
        ? "Professional trust services for corporate entities"
        : language === "zh-CN"
          ? "为企业提供专业信托服务"
          : "為企業提供專業信託服務",
    assetProtectionDesc:
      language === "en"
        ? "Safeguard your wealth with robust protection structures"
        : language === "zh-CN"
          ? "通过稳健的保护架构守护您的财富"
          : "通過穩健的保護架構守護您的財富",
    successionPlanningDesc:
      language === "en"
        ? "Seamless wealth transfer across generations"
        : language === "zh-CN"
          ? "实现财富的代际无缝传承"
          : "實現財富的代際無縫傳承",
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-3xl mx-auto text-center">
          {language === "en"
            ? "Flexible and scalable solutions built for your wealth"
            : language === "zh-CN"
              ? "为您的财富量身打造灵活可扩展的解决方案"
              : "為您的財富量身打造靈活可擴展的解決方案"}
        </h2>
      </div>

      <div className="container mx-auto px-6">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-8 justify-center scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {businessCards.map((card, index) => {
            const isHovered = hoveredIndex === index
            return (
              <Link
                href="/solutions"
                key={card.id}
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isHovered ? "w-[350px]" : "w-[280px]"
                }`}
                style={{ height: "420px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={cardTitles[card.titleKey]}
                  fill
                  className="object-cover"
                />

                {/* Default state - title at bottom */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-semibold">{cardTitles[card.titleKey]}</h3>
                  </div>
                </div>

                {/* Hover state - purple gradient with description */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#5B4BA0] via-[#5B4BA0]/80 to-[#5B4BA0]/40 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{cardTitles[card.titleKey]}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{cardDescs[card.descKey]}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-4 flex justify-center">
        <div className="h-1 bg-gray-200 rounded-full max-w-2xl w-full">
          <div
            className="h-full bg-[#5B4BA0] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  )
}
