"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "Your trustworthy solution partner",
    categories: ["Trust & Custody Solutions", "Financial Solutions", "Business Solutions"],
    notice:
      "Notice: Some of our services are exclusively available to Professional Investors as defined under the Securities and Futures Ordinance (Cap. 571) of Hong Kong. If you do not qualify as a Professional Investor, please refrain from accessing restricted services.",
  },
  "zh-CN": {
    title: "您值得信赖的解决方案合作伙伴",
    categories: ["信托与托管方案", "金融解决方案", "商业解决方案"],
    notice:
      "注意：我们的部分服务仅面向香港《证券及期货条例》（第571章）所定义的专业投资者。如您不符合专业投资者资格，请勿访问受限服务。",
  },
  "zh-TW": {
    title: "您值得信賴的解決方案合作夥伴",
    categories: ["信託與託管方案", "金融解決方案", "商業解決方案"],
    notice:
      "注意：我們的部分服務僅面向香港《證券及期貨條例》（第571章）所定義的專業投資者。如您不符合專業投資者資格，請勿訪問受限服務。",
  },
}

export function SolutionsHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hong-kong-skyline-day.jpg"
          alt="Hong Kong Skyline"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl text-balance">{t.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-lg text-white/90">
            {t.categories.map((category, index) => (
              <span key={index}>
                {index > 0 && <span className="text-[#C9A961] mr-6">/</span>}
                {category}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/70 max-w-3xl">{t.notice}</p>
        </div>
      </div>
    </section>
  )
}
