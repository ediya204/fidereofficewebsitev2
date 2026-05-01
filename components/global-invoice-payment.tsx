"use client"

import { useLanguage } from "@/contexts/language-context"
import { Upload, FileCheck, Clock, Shield, Globe, CalendarClock } from "lucide-react"

const translations = {
  en: {
    sectionLabel: "Global Invoice Payment",
    title: "Your bills, our responsibility",
    subtitle: "With a FIDERE Trust account, you can delegate the hassle of bill payments to us. Our Global Invoice Payment service acts as your personal secretary, allowing you to instruct us to pay all kinds of bills at any time.",
    howItWorks: {
      label: "How It Works",
      title: "One click, all bills paid",
      steps: [
        {
          icon: "upload",
          title: "Upload Your Invoice",
          description: "Simply take a photo or upload a scanned copy of your invoice via our platform.",
        },
        {
          icon: "fileCheck",
          title: "Provide Payment Instructions",
          description: "Enter the necessary payment details and instructions.",
        },
        {
          icon: "clock",
          title: "We Handle the Rest",
          description: "Our team will process the payment on your behalf, ensuring it is completed accurately and on time.",
        },
      ],
    },
    benefits: {
      label: "Key Benefits",
      title: "Experience the FIDERE Trust advantages",
      items: [
        {
          icon: "fileCheck",
          title: "Hassle-free",
          description: "Manage all your bills in one place, saving you time and effort.",
        },
        {
          icon: "shield",
          title: "Security",
          description: "Your financial information is safe with our robust security measures.",
        },
        {
          icon: "clock",
          title: "Reliability",
          description: "As your trustee, we have a statutory duty to handle your payments promptly and safely, always prioritizing the best interests of your beneficiaries.",
        },
        {
          icon: "upload",
          title: "Support All Types of Invoices",
          description: "From rental payments and utility bills to overseas tuition fees and insurance premiums, our service comprehensively covers all your payment needs.",
        },
        {
          icon: "globe",
          title: "Global Reach",
          description: "Pay invoices in multiple currencies and across various countries.",
        },
        {
          icon: "calendar",
          title: "Scheduled Payments",
          description: "Whether you prefer to pay your bills weekly, monthly, or annually, our platform allows you to set up automatic payments that fit your schedule.",
        },
      ],
    },
  },
  "zh-CN": {
    sectionLabel: "全球账单支付",
    title: "您的账单，我们的责任",
    subtitle: "拥有 FIDERE Trust 账户，您可以将繁琐的账单支付工作委托给我们。我们的全球账单支付服务如同您的私人秘书，让您随时可以指示我们支付各类账单。",
    howItWorks: {
      label: "服务流程",
      title: "一键支付，所有账单",
      steps: [
        {
          icon: "upload",
          title: "上传您的账单",
          description: "只需拍照或通过我们的平台上传账单的扫描件。",
        },
        {
          icon: "fileCheck",
          title: "提供支付指示",
          description: "输入必要的支付详情和指示。",
        },
        {
          icon: "clock",
          title: "我们处理其余事项",
          description: "我们的团队将代您处理支付，确保准确及时完成。",
        },
      ],
    },
    benefits: {
      label: "核心优势",
      title: "体验 FIDERE Trust 的优势",
      items: [
        {
          icon: "fileCheck",
          title: "省心省力",
          description: "在一个平台管理所有账单，节省您的时间和精力。",
        },
        {
          icon: "shield",
          title: "安全保障",
          description: "我们采用强大的安全措施保护您的财务信息。",
        },
        {
          icon: "clock",
          title: "可靠信赖",
          description: "作为您的受托人，我们有法定义务及时安全地处理您的支付，始终以受益人的最佳利益为先。",
        },
        {
          icon: "upload",
          title: "支持所有类型账单",
          description: "从租金支付、水电费到海外学费、保险费，我们的服务全面覆盖您的所有支付需求。",
        },
        {
          icon: "globe",
          title: "全球覆盖",
          description: "支持多种货币和多个国家的账单支付。",
        },
        {
          icon: "calendar",
          title: "定期支付",
          description: "无论您希望每周、每月还是每年支付账单，我们的平台都支持设置符合您计划的自动支付。",
        },
      ],
    },
  },
  "zh-TW": {
    sectionLabel: "全球帳單支付",
    title: "您的帳單，我們的責任",
    subtitle: "擁有 FIDERE Trust 帳戶，您可以將繁瑣的帳單支付工作委託給我們。我們的全球帳單支付服務如同您的私人秘書，讓您隨時可以指示我們支付各類帳單。",
    howItWorks: {
      label: "服務流程",
      title: "一鍵支付，所有帳單",
      steps: [
        {
          icon: "upload",
          title: "上傳您的帳單",
          description: "只需拍照或透過我們的平台上傳帳單的掃描件。",
        },
        {
          icon: "fileCheck",
          title: "提供支付指示",
          description: "輸入必要的支付詳情和指示。",
        },
        {
          icon: "clock",
          title: "我們處理其餘事項",
          description: "我們的團隊將代您處理支付，確保準確及時完成。",
        },
      ],
    },
    benefits: {
      label: "核心優勢",
      title: "體驗 FIDERE Trust 的優勢",
      items: [
        {
          icon: "fileCheck",
          title: "省心省力",
          description: "在一個平台管理所有帳單，節省您的時間和精力。",
        },
        {
          icon: "shield",
          title: "安全保障",
          description: "我們採用強大的安全措施保護您的財務信息。",
        },
        {
          icon: "clock",
          title: "可靠信賴",
          description: "作為您的受託人，我們有法定義務及時安全地處理您的支付，始終以受益人的最佳利益為先。",
        },
        {
          icon: "upload",
          title: "支持所有類型帳單",
          description: "從租金支付、水電費到海外學費、保險費，我們的服務全面覆蓋您的所有支付需求。",
        },
        {
          icon: "globe",
          title: "全球覆蓋",
          description: "支持多種貨幣和多個國家的帳單支付。",
        },
        {
          icon: "calendar",
          title: "定期支付",
          description: "無論您希望每週、每月還是每年支付帳單，我們的平台都支持設置符合您計劃的自動支付。",
        },
      ],
    },
  },
}

const iconMap = {
  upload: Upload,
  fileCheck: FileCheck,
  clock: Clock,
  shield: Shield,
  globe: Globe,
  calendar: CalendarClock,
}

export function GlobalInvoicePayment() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-sm font-medium mb-4">
            {t.sectionLabel}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-xs font-medium uppercase tracking-wider mb-3">
              {t.howItWorks.label}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t.howItWorks.title}
            </h3>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {t.howItWorks.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap]
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-xs font-medium uppercase tracking-wider mb-3">
              {t.benefits.label}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t.benefits.title}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.benefits.items.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2563EB]/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
