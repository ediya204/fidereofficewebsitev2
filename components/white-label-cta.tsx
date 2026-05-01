"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const content = {
  en: {
    title: "Be our partner.",
    subtitle: "Let's talk",
    cta: "Sign-up",
    feature: "Enable business agility with our flexible trust infrastructure",
    featureCta: "Learn More",
  },
  "zh-CN": {
    title: "成为我们的合作伙伴",
    subtitle: "开始对话",
    cta: "立即注册",
    feature: "通过我们灵活的信托基础设施实现业务敏捷性",
    featureCta: "了解更多",
  },
  "zh-TW": {
    title: "成為我們的合作夥伴",
    subtitle: "開始對話",
    cta: "立即註冊",
    feature: "透過我們靈活的信託基礎設施實現業務敏捷性",
    featureCta: "了解更多",
  },
}

export function WhiteLabelCTA() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content["zh-CN"]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Partner CTA */}
          <div className="bg-[#2563EB] rounded-2xl p-10 text-white">
            <p className="text-lg mb-2">{t.title}</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">{t.subtitle}</h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Feature CTA */}
          <div className="bg-[#f8f9fa] rounded-2xl p-10 flex flex-col justify-between">
            <p className="text-lg text-gray-600 mb-8">{t.feature}</p>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-[#2563EB] font-semibold hover:underline"
            >
              {t.featureCta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
