"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight, FileText, TrendingUp, Building2 } from "lucide-react"

const translations = {
  en: {
    label: "Our Solutions",
    title: "Tailored services for you",
    learnMore: "Learn more",
    solutions: [
      {
        id: "trust",
        icon: FileText,
        title: "Trust & Custody Solutions",
        description:
          "Whether your goal is wealth and succession planning, tax planning, offshore planning, family office or simply seeking higher returns, FIDERE TRUST provides...",
        link: "/solutions/trust",
      },
      {
        id: "financial",
        icon: TrendingUp,
        title: "Financial Solutions",
        description:
          "Our financial solutions enable you to privately and securely control your assets. At FIDERE TRUST, we connect...",
        link: "/solutions/financial",
      },
      {
        id: "business",
        icon: Building2,
        title: "Business Solutions",
        description:
          "FIDERE TRUST is ideal for organizations looking to maximize financial assets while simplifying management and regulatory...",
        link: "/solutions/business",
      },
    ],
  },
  "zh-CN": {
    label: "我们的解决方案",
    title: "为您量身定制的服务",
    learnMore: "了解更多",
    solutions: [
      {
        id: "trust",
        icon: FileText,
        title: "信托与托管解决方案",
        description:
          "无论您的目标是财富和继承规划、税务规划、离岸规划、家族办公室还是仅仅寻求更高的回报，FIDERE TRUST提供...",
        link: "/solutions/trust",
      },
      {
        id: "financial",
        icon: TrendingUp,
        title: "金融解决方案",
        description: "我们的金融解决方案使您能够私密安全地控制您的资产。在FIDERE TRUST，我们连接...",
        link: "/solutions/financial",
      },
      {
        id: "business",
        icon: Building2,
        title: "商业解决方案",
        description: "FIDERE TRUST非常适合希望最大化金融资产同时简化管理和监管后台流程的组织。我...",
        link: "/solutions/business",
      },
    ],
  },
  "zh-TW": {
    label: "我們的解決方案",
    title: "為您量身定制的服務",
    learnMore: "了解更多",
    solutions: [
      {
        id: "trust",
        icon: FileText,
        title: "信託與托管解決方案",
        description:
          "無論您的目標是財富和繼承規劃、稅務規劃、離岸規劃、家族辦公室還是僅僅尋求更高的回報，FIDERE TRUST提供...",
        link: "/solutions/trust",
      },
      {
        id: "financial",
        icon: TrendingUp,
        title: "金融解決方案",
        description: "我們的金融解決方案使您能夠私密安全地控制您的資產。在FIDERE TRUST，我們連接...",
        link: "/solutions/financial",
      },
      {
        id: "business",
        icon: Building2,
        title: "商業解決方案",
        description: "FIDERE TRUST非常適合希望最大化金融資產同時簡化管理和監管後台流程的組織。我...",
        link: "/solutions/business",
      },
    ],
  },
}

export function OffshoreBenefits() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[#6366F1] text-sm font-medium mb-3 block">{t.label}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">{t.title}</h2>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-[#1a1a2e] hover:border-[#6366F1] hover:text-[#6366F1] transition-colors"
          >
            {t.learnMore}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "shadow-lg" : "hover:shadow-md"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center mb-6">
                <solution.icon className="w-6 h-6 text-[#6366F1]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">{solution.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 line-clamp-4">{solution.description}</p>

              {/* Learn More Link */}
              <Link
                href={solution.link}
                className="inline-flex items-center gap-2 text-[#6366F1] font-medium hover:gap-3 transition-all"
              >
                {t.learnMore}
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Active Indicator */}
              <div
                className={`absolute bottom-0 left-8 right-8 h-1 bg-[#6366F1] rounded-t-full transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
