"use client"

import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "Ready to Start Global Payments?",
    description: "Open an account now and enjoy faster, cheaper, and more convenient cross-border payment services",
    cta: "Get Started",
  },
  "zh-CN": {
    title: "准备好开启全球支付了吗？",
    description: "立即开户，享受更快、更便宜、更便捷的跨境支付服务",
    cta: "立即开始",
  },
  "zh-TW": {
    title: "準備好開啟全球支付了嗎？",
    description: "立即開戶，享受更快、更便宜、更便捷的跨境支付服務",
    cta: "立即開始",
  },
}

export function GlobalPaymentCTA() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 max-w-xl text-lg text-white/80"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all hover:bg-blue-50 hover:shadow-lg"
          >
            {t.cta}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <ChevronDown className="h-8 w-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
