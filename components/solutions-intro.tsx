"use client"

import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "We're proficient at solving problems, rather than selling financial products.",
    description:
      "For too long, individuals and corporates have seen asset optimization and wealth protection strategies denied by complex and murky regulations around the world. That's why we're building and executing global solutions without borders.",
  },
  "zh-CN": {
    title: "我们擅长解决问题，而非销售金融产品。",
    description:
      "长期以来，个人和企业的资产优化与财富保护策略一直受到全球复杂且不透明法规的阻碍。因此，我们正在构建并执行无国界的全球解决方案。",
  },
  "zh-TW": {
    title: "我們擅長解決問題，而非銷售金融產品。",
    description:
      "長期以來，個人和企業的資產優化與財富保護策略一直受到全球複雜且不透明法規的阻礙。因此，我們正在構建並執行無國界的全球解決方案。",
  },
}

export function SolutionsIntro() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">{t.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t.description}</p>
        </div>
      </div>
    </section>
  )
}
