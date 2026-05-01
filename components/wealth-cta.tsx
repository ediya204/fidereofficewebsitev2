"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "Ready to Start Your Wealth Management Journey?",
    description:
      "Unlock the power of FIDERE TRUST today. Explore our trust platform or create an account to experience instant returns.",
    register: "Register Now",
    contact: "Contact Us",
  },
  "zh-CN": {
    title: "准备好开始您的财富管理之旅了吗？",
    description: "立即解锁 FIDERE TRUST 的信托力量。探索我们的信托平台或创建账户，开启即时回报的体验。",
    register: "立即注册",
    contact: "联系我们",
  },
  "zh-TW": {
    title: "準備好開始您的財富管理之旅了嗎？",
    description: "立即解鎖 FIDERE TRUST 的信託力量。探索我們的信託平台或創建賬戶，開啟即時回報的體驗。",
    register: "立即註冊",
    contact: "聯繫我們",
  },
}

export function WealthCTA() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://framerusercontent.com/images/NrBdfVad9h928lMhKlDrIO4pT8.jpg')` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8">{t.title}</h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl">{t.description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button className="bg-[#4357ef] hover:bg-[#3b4ee0] text-white px-8 py-6 text-base font-medium rounded-md">
              {t.register}
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-md bg-transparent"
            >
              {t.contact}
            </Button>
          </Link>
        </div>
      </div>

      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce">
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
