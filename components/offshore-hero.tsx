"use client"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "@/components/ui/app-icon"

const translations = {
  en: {
    label: "OFFSHORE ACCOUNTS",
    titlePart1: "Globally Diversify",
    titleHighlight: "Your Wealth",
    subtitle: "Protect assets from freezing through multi-jurisdictional trust accounts",
    description:
      "Safeguard your assets from regional instability and political uncertainties. Hold multiple currencies with 24/7 forex management services.",
  },
  "zh-CN": {
    label: "离岸账户",
    titlePart1: "全球化分散",
    titleHighlight: "您的财富",
    subtitle: "通过多司法管辖区信托账户保护资产免遭冻结",
    description: "保护您的资产免受区域不稳定和政治不确定性的影响。持有多种货币，享受24/7外汇管理服务。",
  },
  "zh-TW": {
    label: "離岸賬戶",
    titlePart1: "全球化分散",
    titleHighlight: "您的財富",
    subtitle: "通過多司法管轄區信託賬戶保護資產免遭凍結",
    description: "保護您的資產免受區域不穩定和政治不確定性的影響。持有多種貨幣，享受24/7外匯管理服務。",
  },
}

export function OffshoreHero() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-city-skyline-with-financial-district-at-dus.jpg"
          alt="Financial district"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl animate-fade-in">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#4357ef]" />
          <span className="text-[#4357ef] text-sm tracking-widest">{t.label}</span>
        </div>

        {/* Main Headline with gold highlight */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6">
          <span className="text-white">{t.titlePart1}</span>
          <br />
          <span className="text-[#4357ef]">{t.titleHighlight}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl mb-4">{t.subtitle}</p>

        {/* Description */}
        <p className="text-white/70 text-base md:text-lg max-w-2xl">{t.description}</p>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
