"use client"

import { ArrowRight, CheckCircle2, ChevronDown, Globe2, Layers, ShieldCheck, Workflow } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    heroLabel: "Family Office",
    heroTitlePart1: "A Dedicated Platform",
    heroTitleHighlight: "For Family Office Governance",
    heroSubtitle: "A coordinated model for multi-generational wealth operations",
    heroDescription:
      "Integrate trust structuring, custody, payments, and reporting into one coordinated operating model designed for multi-generational families.",
    capabilitiesTitle: "Core Family Office Capabilities",
    capabilitiesSubtitle:
      "We provide an execution framework that combines institutional controls with flexible family governance.",
    capabilities: [
      {
        title: "Structuring & Succession",
        description: "Design trust and holding structures for wealth transfer, continuity, and long-term control.",
      },
      {
        title: "Consolidated Oversight",
        description: "Unify bankable, private, and operating assets under consistent governance and reporting.",
      },
      {
        title: "Global Treasury",
        description: "Coordinate cross-border payment, liquidity, and multi-currency planning from one platform.",
      },
      {
        title: "Risk & Compliance",
        description: "Apply disciplined KYC, documentation, and control workflows to preserve resilience.",
      },
    ],
    approachTitle: "How We Work With Family Offices",
    approachItems: [
      "Initial architecture review covering entities, beneficiaries, and reporting requirements.",
      "Policy setup for governance, approval matrix, and operational responsibilities.",
      "Execution support for custody, treasury workflows, and lifecycle maintenance.",
      "Periodic reviews to align structure and risk controls with family objectives.",
    ],
    ctaTitle: "Build a resilient family office structure",
    ctaDescription: "Speak with our advisory team to design a scalable framework tailored to your family profile.",
    ctaButton: "Book a Consultation",
  },
  "zh-CN": {
    heroLabel: "家族办公室",
    heroTitlePart1: "为家族办公室打造",
    heroTitleHighlight: "一体化治理平台",
    heroSubtitle: "面向多代财富运营的协同管理模式",
    heroDescription:
      "将信托架构、资产托管、支付执行与报告管理整合为一个协同运作体系，服务于多代家族财富目标。",
    capabilitiesTitle: "家族办公室核心能力",
    capabilitiesSubtitle: "我们提供兼具机构级控制力与家族治理灵活性的执行框架。",
    capabilities: [
      {
        title: "架构与传承规划",
        description: "围绕财富传承、持续经营与长期控制目标设计信托及持股架构。",
      },
      {
        title: "统一资产视图",
        description: "将可投资资产、私募资产与经营性资产纳入一致的治理与报告体系。",
      },
      {
        title: "全球资金管理",
        description: "在同一平台协调跨境支付、流动性安排与多币种资金规划。",
      },
      {
        title: "风险与合规控制",
        description: "通过标准化 KYC、文档与控制流程，提升家族资产运营韧性。",
      },
    ],
    approachTitle: "我们如何服务家族办公室",
    approachItems: [
      "开展初始架构评估，明确实体关系、受益安排与报告需求。",
      "建立治理政策、审批矩阵与运营职责分工。",
      "支持托管落地、资金流程执行与生命周期维护。",
      "定期复盘架构与风险控制，确保持续匹配家族目标。",
    ],
    ctaTitle: "构建具备长期韧性的家族办公室体系",
    ctaDescription: "与我们的顾问团队沟通，为您的家族画像设计可扩展的治理框架。",
    ctaButton: "预约咨询",
  },
  "zh-TW": {
    heroLabel: "家族辦公室",
    heroTitlePart1: "為家族辦公室打造",
    heroTitleHighlight: "一體化治理平台",
    heroSubtitle: "面向多代財富運營的協同管理模式",
    heroDescription:
      "將信託架構、資產託管、支付執行與報告管理整合為一個協同運作體系，服務於多代家族財富目標。",
    capabilitiesTitle: "家族辦公室核心能力",
    capabilitiesSubtitle: "我們提供兼具機構級控制力與家族治理靈活性的執行框架。",
    capabilities: [
      {
        title: "架構與傳承規劃",
        description: "圍繞財富傳承、持續經營與長期控制目標設計信託及持股架構。",
      },
      {
        title: "統一資產視圖",
        description: "將可投資資產、私募資產與經營性資產納入一致的治理與報告體系。",
      },
      {
        title: "全球資金管理",
        description: "在同一平台協調跨境支付、流動性安排與多幣種資金規劃。",
      },
      {
        title: "風險與合規控制",
        description: "通過標準化 KYC、文檔與控制流程，提升家族資產運營韌性。",
      },
    ],
    approachTitle: "我們如何服務家族辦公室",
    approachItems: [
      "開展初始架構評估，明確實體關係、受益安排與報告需求。",
      "建立治理政策、審批矩陣與運營職責分工。",
      "支持託管落地、資金流程執行與生命週期維護。",
      "定期復盤架構與風險控制，確保持續匹配家族目標。",
    ],
    ctaTitle: "構建具備長期韌性的家族辦公室體系",
    ctaDescription: "與我們的顧問團隊溝通，為您的家族畫像設計可擴展的治理框架。",
    ctaButton: "預約諮詢",
  },
}

const capabilityIcons = [Layers, Globe2, Workflow, ShieldCheck]

export function FamilyOfficeContent() {
  const { language, locale } = useLanguage()
  const t = translations[language] || translations.en
  const localePath = (path: string) => `/${locale}${path}`
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden bg-[#0f172a] pt-28 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/young-woman-in-yellow-sweater-using-tablet-device.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/0" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#4357ef]" />
            <span className="text-[#4357ef] text-sm tracking-widest">{t.heroLabel}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
            <span className="text-white">{t.heroTitlePart1}</span>
            <br />
            <span className="text-[#4357ef]">{t.heroTitleHighlight}</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-4">{t.heroSubtitle}</p>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">{t.heroDescription}</p>
        </div>
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#07072d]">{t.capabilitiesTitle}</h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">{t.capabilitiesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.capabilities.map((item, index) => {
              const Icon = capabilityIcons[index]
              return (
                <div key={item.title} className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-[#4357ef]/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-[#4357ef]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a2e]">{item.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#07072d] mb-8">{t.approachTitle}</h2>
            <div className="space-y-5">
              {t.approachItems.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#4357ef] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111827]">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#672bff] to-[#4357ef] p-10 md:p-14 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl">{t.ctaTitle}</h2>
            <p className="mt-4 text-white/85 max-w-2xl text-lg">{t.ctaDescription}</p>
            <Link href={localePath("/contact")}>
              <Button className="mt-8 bg-white text-[#1d4ed8] hover:bg-blue-50 px-8 py-6 text-base font-semibold rounded-full">
                {t.ctaButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
