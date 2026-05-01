"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Global Payments",
    headline1: "Cross-Border Payments",
    headline2: "Made Simple",
    subtitle: "Multi-currency accounts, global invoice payments, scheduled transfers",
    description:
      "Easily manage cross-border transactions through FIDERE TRUST's global payment network. Supporting 180+ countries and 30+ currencies with low fees and instant settlement.",
  },
  "zh-CN": {
    label: "全球支付",
    headline1: "跨境支付",
    headline2: "从未如此简单",
    subtitle: "多币种账户，全球发票支付，定时转账",
    description:
      "通过 FIDERE TRUST 的全球支付网络，轻松管理跨境交易。支持 180+ 国家，30+ 货币，享受低费率和即时到账服务。",
  },
  "zh-TW": {
    label: "全球支付",
    headline1: "跨境支付",
    headline2: "從未如此簡單",
    subtitle: "多幣種賬戶，全球發票支付，定時轉賬",
    description:
      "通過 FIDERE TRUST 的全球支付網絡，輕鬆管理跨境交易。支持 180+ 國家，30+ 貨幣，享受低費率和即時到賬服務。",
  },
}

export function GlobalPaymentHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-sm font-medium tracking-wider text-blue-400">{t.label}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            <span className="text-white">{t.headline1}</span>
            <br />
            <span className="text-amber-400">{t.headline2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 text-lg font-medium text-white/90 md:text-xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl text-base text-white/70 md:text-lg"
          >
            {t.description}
          </motion.p>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-white/60 transition-colors hover:text-white"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  )
}
