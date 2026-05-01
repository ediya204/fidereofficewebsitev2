"use client"

import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Corporate Clients",
    titlePart1: "Global Corporate",
    titleHighlight: "Infrastructure",
    subtitle: "Comprehensive services for incorporation, compliance, and cross-border operations",
    description:
      "Support your business with a scalable trust and corporate framework covering administration, treasury execution, and regulatory management across jurisdictions.",
  },
  "zh-CN": {
    label: "企业客户",
    titlePart1: "全球企业",
    titleHighlight: "服务架构",
    subtitle: "覆盖公司设立、合规管理与跨境运营的一体化服务",
    description:
      "通过可扩展的信托与企业服务框架，支持您在多司法辖区实现行政管理、资金执行与监管合规。",
  },
  "zh-TW": {
    label: "企業客戶",
    titlePart1: "全球企業",
    titleHighlight: "服務架構",
    subtitle: "覆蓋公司設立、合規管理與跨境運營的一體化服務",
    description:
      "通過可擴展的信託與企業服務框架，支持您在多司法轄區實現行政管理、資金執行與監管合規。",
  },
}

export function CorporateClientsHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/business-solutions-consulting-professional-meeting.jpg"
          alt="Corporate services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl animate-fade-in">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#4357ef]" />
          <span className="text-[#4357ef] text-sm tracking-widest">{t.label}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
          <span className="text-white">{t.titlePart1}</span>
          <br />
          <span className="text-[#4357ef]">{t.titleHighlight}</span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl mb-4">{t.subtitle}</p>
        <p className="text-white/70 text-base md:text-lg max-w-2xl">{t.description}</p>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
