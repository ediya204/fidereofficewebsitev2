"use client"

import {
  ChevronDown,
} from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    heroLabel: "Family Office",
    heroTitlePart1: "A Dedicated Platform",
    heroTitleHighlight: "For Family Office Governance",
    heroSubtitle: "A coordinated model for multi-generational wealth operations",
    heroDescription:
      "Integrate trust structuring, custody, payments, and reporting into one coordinated operating model designed for multi-generational families.",
    subNav: ["Our Services", "Advantages", "Contact Us"],
    sectionLead:
      "We are committed to helping your family wealth stand the test of time. Our advisory team supports cross-generational planning with structured and executable strategies.",
    serviceTitle: "Our Family Advisory Services",
    serviceSubtitle: "A structured method from advisory to implementation.",
    serviceItems: [
      {
        title: "Family Governance",
        description:
          "Develop family charter, council design, and decision governance forums to establish clear cross-generation alignment. We facilitate structured family meetings, define communication protocols, and translate values into practical governance rules for long-term execution.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Family Office Architecture",
        description:
          "Support setup and review of single-family office models across strategy, service scope, location, cost, staffing, and governance. We provide comparative structuring options and phased implementation recommendations tailored to your family's complexity and jurisdiction footprint.",
        image:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Next Generation Enablement",
        description:
          "Equip next-generation members through education programs and guided dialogue on leadership, financial confidence, and responsible stewardship. Our curriculum combines scenario workshops, governance participation pathways, and milestone-based readiness planning.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    advantageTitle: "Advantages of Our Family Advisory",
    advantageItems: [
      {
        title: "Dedicated Specialists",
        description:
          "A cross-functional advisory team covering governance, fiduciary structuring, and multi-jurisdiction implementation.",
      },
      {
        title: "Facilitated Dialogue",
        description: "Neutral, structured workshops to align family members around values, objectives, and execution priorities.",
      },
      {
        title: "Unbiased Review",
        description: "Independent review of existing structures and governance models to identify practical optimization pathways.",
      },
      {
        title: "Actionable Insights",
        description:
          "Convert strategic recommendations into implementation plans with clear responsibilities and operating milestones.",
      },
    ],
    ciesTitle: "New Capital Investment Entrant Scheme (CIES)",
    ciesDescription: "Learn how our CIES support services can address your family planning and residency needs.",
    ciesButton: "Learn More",
    contactTitle: "Contact Us",
    contactDescription: "We work with you to achieve your family goals.",
    contactPrimary: "Contact Us",
    contactSecondary: "Arrange a callback",
    disclaimerTitle: "You may be interested",
    disclaimerText:
      "Your capital may be at risk. The value of investments can go down as well as up, and you may not recover the original amount invested.",
  },
  "zh-CN": {
    heroLabel: "家族办公室",
    heroTitlePart1: "为家族办公室打造",
    heroTitleHighlight: "一体化治理平台",
    heroSubtitle: "面向多代财富运营的协同管理模式",
    heroDescription:
      "将信托架构、资产托管、支付执行与报告管理整合为一个协同运作体系，服务于多代家族财富目标。",
    subNav: ["我们的服务", "优势", "联系我们"],
    sectionLead: "我们希望您珍贵的家族财富经得起时间考验，并通过结构化方法协助您制定与落实跨代传承策略。",
    serviceTitle: "我们的家族咨询服务",
    serviceSubtitle: "我们通过结构化方法，提供从咨询到执行的服务。",
    serviceItems: [
      {
        title: "家族治理",
        description:
          "协助制定家族宪章、家族理事会及关键决策机制，形成可执行的跨代治理框架。我们会组织结构化家族会议，明确沟通机制与授权边界，将家族价值观转化为可长期执行的治理规则。",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "家族办公室架构",
        description:
          "围绕战略、服务范围、地点、成本、组织与治理，设计或优化家办运营模型。结合您的资产复杂度与司法辖区分布，我们提供可比较的架构方案与分阶段落地建议。",
        image:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "下一代赋能",
        description:
          "通过教育、领导力与沟通机制建设，培养具备责任感与判断力的未来家族管理者。课程覆盖财务素养、治理参与、价值传承与情境演练，帮助下一代逐步完成角色转换。",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    advantageTitle: "我们的服务优势",
    advantageItems: [
      {
        title: "专职顾问团队",
        description: "覆盖治理、受托架构、跨境执行等关键能力，形成一体化专业支持。",
      },
      {
        title: "促进家族沟通",
        description: "以中立方式组织家族会议与专题研讨，推动代际共识与计划落地。",
      },
      {
        title: "独立客观评估",
        description: "对现有治理与架构进行不偏不倚检视，识别差距并提出优化方案。",
      },
      {
        title: "可执行洞见",
        description: "将咨询建议转化为实施路线图，明确阶段目标、角色分工与里程碑。",
      },
    ],
    ciesTitle: "新资本投资者入境计划（CIES）",
    ciesDescription: "了解我们与 CIES 相关的服务如何满足您的家族规划与身份配置需求。",
    ciesButton: "了解更多",
    contactTitle: "联系我们",
    contactDescription: "我们将与您携手实现家族长期目标。",
    contactPrimary: "联系我们",
    contactSecondary: "安排回电",
    disclaimerTitle: "您可能会感兴趣",
    disclaimerText: "您的资金可能面临风险。投资价值可升可跌，您可能无法取回原始金额。",
  },
  "zh-TW": {
    heroLabel: "家族辦公室",
    heroTitlePart1: "為家族辦公室打造",
    heroTitleHighlight: "一體化治理平台",
    heroSubtitle: "面向多代財富運營的協同管理模式",
    heroDescription:
      "將信託架構、資產託管、支付執行與報告管理整合為一個協同運作體系，服務於多代家族財富目標。",
    subNav: ["我們的服務", "優勢", "聯繫我們"],
    sectionLead: "我們希望您珍貴的家族財富經得起時間考驗，並通過結構化方法協助您制定與落實跨代傳承策略。",
    serviceTitle: "我們的家族諮詢服務",
    serviceSubtitle: "我們通過結構化方法，提供從諮詢到執行的服務。",
    serviceItems: [
      {
        title: "家族治理",
        description:
          "協助制定家族憲章、家族理事會及關鍵決策機制，形成可執行的跨代治理框架。我們會組織結構化家族會議，明確溝通機制與授權邊界，將家族價值觀轉化為可長期執行的治理規則。",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "家族辦公室架構",
        description:
          "圍繞策略、服務範圍、地點、成本、組織與治理，設計或優化家辦運營模型。結合您的資產複雜度與司法轄區分佈，我們提供可比較的架構方案與分階段落地建議。",
        image:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "下一代賦能",
        description:
          "通過教育、領導力與溝通機制建設，培養具備責任感與判斷力的未來家族管理者。課程覆蓋財務素養、治理參與、價值傳承與情境演練，幫助下一代逐步完成角色轉換。",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    advantageTitle: "我們的服務優勢",
    advantageItems: [
      {
        title: "專職顧問團隊",
        description: "覆蓋治理、受託架構、跨境執行等關鍵能力，形成一體化專業支持。",
      },
      {
        title: "促進家族溝通",
        description: "以中立方式組織家族會議與專題研討，推動代際共識與計劃落地。",
      },
      {
        title: "獨立客觀評估",
        description: "對現有治理與架構進行不偏不倚檢視，識別差距並提出優化方案。",
      },
      {
        title: "可執行洞見",
        description: "將諮詢建議轉化為實施路線圖，明確階段目標、角色分工與里程碑。",
      },
    ],
    ciesTitle: "新資本投資者入境計劃（CIES）",
    ciesDescription: "了解我們與 CIES 相關的服務如何滿足您的家族規劃與身份配置需求。",
    ciesButton: "了解更多",
    contactTitle: "聯繫我們",
    contactDescription: "我們將與您攜手實現家族長期目標。",
    contactPrimary: "聯繫我們",
    contactSecondary: "安排回電",
    disclaimerTitle: "您可能會感興趣",
    disclaimerText: "您的資金可能面臨風險。投資價值可升可跌，您可能無法取回原始金額。",
  },
}

export function FamilyOfficeContent() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const [openIndex, setOpenIndex] = useState(0)
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

      <section id="our-services" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="max-w-[980px] text-[18px] md:text-[20px] leading-[1.45] text-[#232937] mb-12">{t.sectionLead}</p>
          <div className="max-w-[760px] mb-8">
            <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#111827]">{t.serviceTitle}</h2>
            <div className="mt-4 h-[3px] w-[58px] bg-[#cf1124]" />
            <p className="mt-6 text-[#374151] text-[16px] md:text-[18px] leading-[1.4]">{t.serviceSubtitle}</p>
          </div>

          <div className="flex items-center gap-8 text-[14px] md:text-[16px] text-[#374151] border-b border-[#d1d5db] pb-4">
            {t.serviceItems.map((item, index) => {
              const isActive = openIndex === index
              return (
                <button
                  key={item.title}
                  onClick={() => setOpenIndex(index)}
                  className={`relative pb-2 transition-colors ${isActive ? "text-[#111827]" : "text-[#6b7280] hover:text-[#374151]"}`}
                >
                  {item.title}
                  {isActive ? <span className="absolute left-0 right-0 -bottom-[17px] h-[2px] bg-[#111827]" /> : null}
                </button>
              )
            })}
          </div>

          <div className="grid md:grid-cols-[1.45fr_0.95fr] gap-10 pt-10 items-start">
            <div>
              <p className="text-[16px] md:text-[18px] leading-[1.45] text-[#1f2937]">{t.serviceItems[openIndex]?.description}</p>
            </div>
            <div className="h-[220px] md:h-[310px] bg-[#f3f4f6] overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${t.serviceItems[openIndex]?.image}')` }}
                aria-label={t.serviceItems[openIndex]?.title}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="max-w-[760px] mb-10">
            <h2 className="text-[32px] md:text-[40px] leading-tight font-semibold text-[#111827]">{t.advantageTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.advantageItems.map((item, index) => {
              return (
                <div key={item.title} className="bg-white">
                  <div className="mb-4 h-10 w-10 rounded-full border border-[#d1d5db] flex items-center justify-center text-[13px] text-[#6b7280]">
                    {index + 1}
                  </div>
                  <h3 className="text-[20px] md:text-[22px] leading-tight font-semibold text-[#111827]">{item.title}</h3>
                  <p className="mt-3 text-[#4b5563] leading-[1.4] text-[16px]">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
