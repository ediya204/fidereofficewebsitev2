"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Plus, Minus } from "lucide-react"

const translations = {
  en: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is an offshore custodian service?",
        answer:
          "An offshore custodian service provides secure management and protection of your assets in a foreign jurisdiction. It helps diversify risk and offers enhanced privacy and security for your wealth.",
      },
      {
        question: "What are the benefits of holding money in different currencies?",
        answer:
          "Holding money in different currencies helps diversify your portfolio, reduces risk, and enhances financial security. It allows you to take advantage of favorable exchange rates and protect your wealth from regional economic fluctuations.",
      },
      {
        question: "Is there a minimum funding requirement to open an account?",
        answer:
          "No, FIDERE TRUST does not require a minimum funding amount to open an account. This flexibility allows you to start managing your wealth according to your financial needs and goals.",
      },
      {
        question: "How secure are my assets with FIDERE TRUST?",
        answer:
          "At FIDERE, earning your trust and ensuring the security of your assets are our utmost priorities. We act as trustees and custodians in legal title, with all assets held by licensed financial institutions or top-tier custodians.",
      },
    ],
  },
  "zh-CN": {
    title: "常见问题",
    faqs: [
      {
        question: "什么是离岸托管服务？",
        answer:
          "离岸托管服务在外国司法管辖区为您的资产提供安全的管理和保护。它有助于分散风险，并为您的财富提供增强的隐私和安全保障。",
      },
      {
        question: "持有不同货币有什么好处？",
        answer:
          "持有不同货币有助于分散您的投资组合，降低风险，并增强财务安全。它允许您利用有利的汇率，保护您的财富免受区域经济波动的影响。",
      },
      {
        question: "开户有最低资金要求吗？",
        answer: "没有，FIDERE TRUST开户不需要最低资金金额。这种灵活性让您可以根据自己的财务需求和目标开始管理财富。",
      },
      {
        question: "我的资产在FIDERE TRUST安全吗？",
        answer:
          "在FIDERE，赢得您的信任并确保您资产的安全是我们的首要任务。我们作为法定所有权的受托人和托管人，所有资产均由持牌金融机构或顶级托管机构持有。",
      },
    ],
  },
  "zh-TW": {
    title: "常見問題",
    faqs: [
      {
        question: "什麼是離岸托管服務？",
        answer:
          "離岸托管服務在外國司法管轄區為您的資產提供安全的管理和保護。它有助於分散風險，並為您的財富提供增強的隱私和安全保障。",
      },
      {
        question: "持有不同貨幣有什麼好處？",
        answer:
          "持有不同貨幣有助於分散您的投資組合，降低風險，並增強財務安全。它允許您利用有利的匯率，保護您的財富免受區域經濟波動的影響。",
      },
      {
        question: "開戶有最低資金要求嗎？",
        answer: "沒有，FIDERE TRUST開戶不需要最低資金金額。這種靈活性讓您可以根據自己的財務需求和目標開始管理財富。",
      },
      {
        question: "我的資產在FIDERE TRUST安全嗎？",
        answer:
          "在FIDERE，贏得您的信任並確保您資產的安全是我們的首要任務。我們作為法定所有權的受託人和托管人，所有資產均由持牌金融機構或頂級托管機構持有。",
      },
    ],
  },
}

export function OffshoreFAQ() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-12">{t.title}</h2>

        <div className="max-w-3xl space-y-4">
          {t.faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "shadow-lg" : "shadow-sm hover:shadow-md"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-[#1a1a2e] pr-4">{faq.question}</span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? "bg-[#6366F1] rotate-0" : "bg-gray-100 rotate-0"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
