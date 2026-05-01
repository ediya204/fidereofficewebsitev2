"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "lucide-react"

const translations = {
  en: {
    title: "Ready to secure your wealth?",
    description: "Connect with our team to explore personalized trust and wealth management solutions tailored to your unique needs.",
    cta: "Get in Touch",
    secondaryCta: "Learn More",
  },
  "zh-CN": {
    title: "准备好保护您的财富了吗？",
    description: "联系我们的团队，探索根据您独特需求量身定制的个性化信托和财富管理解决方案。",
    cta: "联系我们",
    secondaryCta: "了解更多",
  },
  "zh-TW": {
    title: "準備好保護您的財富了嗎？",
    description: "聯繫我們的團隊，探索根據您獨特需求量身定製的個性化信託和財富管理解決方案。",
    cta: "聯繫我們",
    secondaryCta: "了解更多",
  },
}

export function PersonalTrustCTA() {
  const { language, locale } = useLanguage()
  const localePath = (path: string) => `/${locale}${path}`
  const t = translations[language] || translations.en

  return (
    <section className="py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5B4BA0]/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t.title}
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={localePath("/contact")}>
              <Button className="bg-[#C9A961] hover:bg-[#B8994F] text-white px-8 py-6 text-lg rounded-full group">
                {t.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={localePath("/solutions")}>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                {t.secondaryCta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
