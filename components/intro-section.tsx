"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

const businessCards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    titleKey: "highNetWorth",
    descKey: "highNetWorthDesc",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80",
    titleKey: "familyOffice",
    descKey: "familyOfficeDesc",
  },
  {
    id: 3,
    image: "/corporate-trust-meeting.jpg",
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
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    titleKey: "successionPlanning",
    descKey: "successionPlanningDesc",
  },
]

export function IntroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { language, locale } = useLanguage()
  const t = getTranslation(language)
  const localePath = (path: string) => `/${locale}${path}`

  const cardHrefMap: Record<string, string> = {
    highNetWorth: localePath("/personal-trust"),
    familyOffice: localePath("/family-office"),
    corporateTrust: localePath("/corporate-clients"),
    assetProtection: localePath("/solutions"),
    successionPlanning: localePath("/solutions"),
  }

  const cardMeta = [
    {
      gradient: "from-[#672bff]/70 via-[#4357ef]/45 to-transparent",
      ring: "border-[#672bff]",
      glow: "shadow-[0_20px_40px_-24px_rgba(103,43,255,0.7)]",
      subtitle:
        language === "en"
          ? "Private wealth architecture"
          : language === "zh-CN"
            ? "私人财富架构"
            : "私人財富架構",
      detail:
        language === "en"
          ? "Tailored structures for long-term family objectives."
          : language === "zh-CN"
            ? "围绕家族长期目标打造专属架构。"
            : "圍繞家族長期目標打造專屬架構。",
    },
    {
      gradient: "from-[#4357ef]/75 via-[#07072d]/40 to-transparent",
      ring: "border-[#4357ef]",
      glow: "shadow-[0_20px_40px_-24px_rgba(67,87,239,0.7)]",
      subtitle:
        language === "en" ? "Family governance" : language === "zh-CN" ? "家族治理中枢" : "家族治理中樞",
      detail:
        language === "en"
          ? "Coordinate treasury, trust, and reporting from one platform."
          : language === "zh-CN"
            ? "在同一平台协同资金、信托与报告流程。"
            : "在同一平台協同資金、信託與報告流程。",
    },
    {
      gradient: "from-[#ff5c50]/70 via-[#07072d]/35 to-transparent",
      ring: "border-[#ff5c50]",
      glow: "shadow-[0_20px_40px_-24px_rgba(255,92,80,0.65)]",
      subtitle:
        language === "en" ? "Enterprise mandate" : language === "zh-CN" ? "企业受托方案" : "企業受託方案",
      detail:
        language === "en"
          ? "Corporate trust capabilities aligned with compliance requirements."
          : language === "zh-CN"
            ? "面向企业合规要求的受托与结构化能力。"
            : "面向企業合規要求的受託與結構化能力。",
    },
    {
      gradient: "from-[#07072d]/75 via-[#4357ef]/35 to-transparent",
      ring: "border-[#07072d]",
      glow: "shadow-[0_20px_40px_-24px_rgba(7,7,45,0.75)]",
      subtitle:
        language === "en" ? "Risk insulation" : language === "zh-CN" ? "风险隔离机制" : "風險隔離機制",
      detail:
        language === "en"
          ? "Ring-fence strategic assets with robust legal structures."
          : language === "zh-CN"
            ? "通过稳健法律结构实现关键资产隔离。"
            : "通過穩健法律結構實現關鍵資產隔離。",
    },
    {
      gradient: "from-[#33384f]/70 via-[#4357ef]/35 to-transparent",
      ring: "border-[#33384f]",
      glow: "shadow-[0_20px_40px_-24px_rgba(51,56,79,0.75)]",
      subtitle:
        language === "en"
          ? "Intergenerational continuity"
          : language === "zh-CN"
            ? "代际传承延续"
            : "代際傳承延續",
      detail:
        language === "en"
          ? "Preserve intent and transfer value across generations."
          : language === "zh-CN"
            ? "在代际之间延续意图并稳健传递价值。"
            : "在代際之間延續意圖並穩健傳遞價值。",
    },
  ]
  const panelIndex = hoveredIndex ?? activeIndex

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
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#07072d] max-w-3xl mx-auto text-center">
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
            const isActive = activeIndex === index
            const meta = cardMeta[index]
            return (
              <Link
                href={cardHrefMap[card.titleKey] || localePath("/solutions")}
                key={card.id}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${
                  isHovered || isActive ? "w-[350px]" : "w-[280px]"
                }`}
                style={{ height: "420px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={cardTitles[card.titleKey]}
                  fill
                  className="object-cover"
                />

                {/* Default state - title at bottom */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-300 ${
                    isHovered || isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-semibold">{cardTitles[card.titleKey]}</h3>
                  </div>
                </div>

                {/* Hover/Active state - EMQ inspired colored overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${meta.gradient} transition-opacity duration-300 ${
                    isHovered || isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{cardTitles[card.titleKey]}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{cardDescs[card.descKey]}</p>
                    <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/10">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute inset-0 rounded-lg border-2 transition-opacity duration-300 ${
                    isActive ? `${meta.ring} opacity-100 ${meta.glow}` : "border-transparent opacity-0"
                  }`}
                />
              </Link>
            )
          })}
        </div>
      </div>

      {panelIndex !== null && (
        <div className="container mx-auto px-6 mt-2">
          <div className="mx-auto max-w-5xl rounded-md border border-[#e5edf5] bg-white px-5 py-4 stripe-shadow">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4357ef]">{cardMeta[panelIndex].subtitle}</p>
            <p className="mt-1 text-sm text-[#64748d]">{cardMeta[panelIndex].detail}</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 mt-5 flex justify-center">
        <div className="h-1 bg-gray-200 rounded-full max-w-2xl w-full">
          <div
            className="h-full bg-[#4357ef] rounded-full transition-all duration-150"
            style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  )
}
