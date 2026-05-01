"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "lucide-react"

const translations = {
  en: {
    title: "Ready to protect your wealth globally?",
    cta: "Get Started",
  },
  "zh-CN": {
    title: "准备好在全球保护您的财富了吗？",
    cta: "立即开始",
  },
  "zh-TW": {
    title: "準備好在全球保護您的財富了嗎？",
    cta: "立即開始",
  },
}

export function OffshoreCTA() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/hong-kong-victoria-harbour-skyline-at-night-with-m.jpg" alt="Hong Kong Victoria Harbour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto mb-12 text-balance">
          {t.title}
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[#6366F1] hover:bg-[#5558E3] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          {t.cta}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  )
}
