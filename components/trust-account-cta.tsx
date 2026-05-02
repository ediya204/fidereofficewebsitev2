"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "@/components/ui/app-icon"
import Link from "next/link"

export function TrustAccountCTA() {
  const { language, locale } = useLanguage()

  const content = {
    en: {
      title: "Ready to Get Started?",
      subtitle:
        "Talk to our experts and learn how we can support your wealth management goals with our comprehensive trust solutions.",
      cta: "Schedule a Consultation",
      secondary: "Contact Us",
    },
    "zh-CN": {
      title: "准备好开始了吗？",
      subtitle: "与我们的专家交流，了解我们如何通过综合信托解决方案支持您的财富管理目标。",
      cta: "预约咨询",
      secondary: "联系我们",
    },
    "zh-TW": {
      title: "準備好開始了嗎？",
      subtitle: "與我們的專家交流，了解我們如何通過綜合信託解決方案支持您的財富管理目標。",
      cta: "預約諮詢",
      secondary: "聯繫我們",
    },
  }

  const t = content[language] || content.en

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0a1a] mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">{t.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-full font-medium hover:bg-[#1d4ed8] transition group"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition"
            >
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
