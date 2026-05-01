"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "Ready to get started?",
    description: "Contact us today to learn how FIDERE can help you achieve your financial goals.",
    cta: "Contact Us",
    secondary: "Learn More",
  },
  "zh-CN": {
    title: "准备好开始了吗？",
    description: "立即联系我们，了解 FIDERE 如何帮助您实现财务目标。",
    cta: "联系我们",
    secondary: "了解更多",
  },
  "zh-TW": {
    title: "準備好開始了嗎？",
    description: "立即聯繫我們，了解 FIDERE 如何幫助您實現財務目標。",
    cta: "聯繫我們",
    secondary: "了解更多",
  },
}

export function SolutionsCTA() {
  const { language, locale } = useLanguage()
  const localePath = (path: string) => `/${locale}${path}`
  const t = translations[language] || translations.en

  return (
    <section className="py-24 bg-[#1a1a2e]">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">{t.title}</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">{t.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={localePath("/contact")}>
              <Button size="lg" className="bg-[#4357ef] hover:bg-[#3b4ee0] text-white px-8 py-6 text-lg rounded-full">
                {t.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={localePath("/about")}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                {t.secondary}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
