"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "FAQ",
    title: "Everything You Need to Know",
    faqs: [
      {
        question: "How do I start using FIDERE TRUST's wealth management platform?",
        answer:
          "Create a FIDERE TRUST account by submitting your ID, proof of address, and a selfie to begin your investment journey. Once approved within a few business days, you can fund your account and start trading.",
      },
      {
        question: "Is there a minimum investment requirement?",
        answer:
          "No, FIDERE TRUST does not set high thresholds or minimum investment requirements, allowing all investors to participate.",
      },
      {
        question: "How do I manage my investments through FIDERE TRUST?",
        answer:
          "Our platform provides 24/7 global market access, allowing you to manage and optimize your investment portfolio anytime, anywhere.",
      },
      {
        question: "Are my assets safe with FIDERE TRUST?",
        answer:
          "At FIDERE TRUST, earning your trust and ensuring the safety of your assets is our top priority. As trustees and custodians of legal ownership, all assets are held by licensed financial institutions or top-tier custodians. This structure provides strong security for your wealth.",
      },
      {
        question: "What specific legal obligations govern FIDERE TRUST's operations?",
        answer:
          "The Trustee Ordinance (Cap. 29) Section 3A requires trustees to exercise reasonable care and skill as circumstances require. Section 97 further stipulates that employees of trust corporations are personally accountable to the court.",
      },
    ],
  },
  "zh-CN": {
    label: "常见问题",
    title: "您需要了解的一切",
    faqs: [
      {
        question: "如何开始使用 FIDERE TRUST 的财富管理平台？",
        answer:
          "创建 FIDERE TRUST 信托账户，提交您的身份证明、地址证明和自拍照即可开始您的投资之旅。在几个工作日内获得批准后，您可以为账户注资并开始交易。",
      },
      {
        question: "是否有最低投资要求？",
        answer: "没有，FIDERE TRUST 不设置高昂的门槛或最低投资金额要求，让所有投资者都能参与。",
      },
      {
        question: "如何通过 FIDERE TRUST 管理我的投资？",
        answer: "我们的平台提供24/7全球市场接入，让您可以随时随地管理和优化您的投资组合。",
      },
      {
        question: "我的资产在 FIDERE TRUST 是否安全？",
        answer:
          "在 FIDERE TRUST，赢得您的信任和确保您资产的安全是我们的首要任务。我们作为法律所有权的受托人和托管人，所有资产由持牌金融机构或顶级托管人持有。这种结构为您的财富提供了强有力的安全保障。",
      },
      {
        question: "哪些具体法律义务规范 FIDERE TRUST 的运营？",
        answer:
          "《受托人条例》(第29章)第3A条规定，受托人必须根据情况行使合理的谨慎和技能。第97条进一步规定，信托法团的雇员须亲自对法院负责。",
      },
    ],
  },
  "zh-TW": {
    label: "常見問題",
    title: "您需要了解的一切",
    faqs: [
      {
        question: "如何開始使用 FIDERE TRUST 的財富管理平台？",
        answer:
          "創建 FIDERE TRUST 信託賬戶，提交您的身份證明、地址證明和自拍照即可開始您的投資之旅。在幾個工作日內獲得批准後，您可以為賬戶注資並開始交易。",
      },
      {
        question: "是否有最低投資要求？",
        answer: "沒有，FIDERE TRUST 不設置高昂的門檻或最低投資金額要求，讓所有投資者都能參與。",
      },
      {
        question: "如何通過 FIDERE TRUST 管理我的投資？",
        answer: "我們的平台提供24/7全球市場接入，讓您可以隨時隨地管理和優化您的投資組合。",
      },
      {
        question: "我的資產在 FIDERE TRUST 是否安全？",
        answer:
          "在 FIDERE TRUST，贏得您的信任和確保您資產的安全是我們的首要任務。我們作為法律所有權的受託人和托管人，所有資產由持牌金融機構或頂級托管人持有。這種結構為您的財富提供了強有力的安全保障。",
      },
      {
        question: "哪些具體法律義務規範 FIDERE TRUST 的運營？",
        answer:
          "《受託人條例》(第29章)第3A條規定，受託人必須根據情況行使合理的謹慎和技能。第97條進一步規定，信託法團的僱員須親自對法院負責。",
      },
    ],
  },
}

export function WealthFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#2563EB] text-sm font-medium tracking-wider uppercase">{t.label}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">{t.title}</h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {t.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "shadow-lg" : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className={`font-semibold pr-4 ${isOpen ? "text-[#2563EB]" : "text-gray-900"}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`flex-shrink-0 h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#2563EB]" : "text-gray-400"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
