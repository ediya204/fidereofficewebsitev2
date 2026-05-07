"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "@/components/ui/app-icon"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

const HERO_BG_IMAGES = [
  "https://www.agoda.com/wp-content/uploads/2018/06/experience_hongkong_hongkong_skyline.jpg",
  "/hong-kong-peak-view.jpg",
]

const HERO_SLOGANS = {
  en: [
    "We protect family wealth through Hong Kong trust structures and support long-term cross-border asset management.",
    "We bring regulated custody, digital assets and global allocation into one professional trust platform.",
  ],
  "zh-CN": [
    "我们以香港信托架构守护家族财富，并支持跨境资产的长期管理。",
    "我们将合规托管、数字资产与全球配置能力整合于同一专业信托平台。",
  ],
  "zh-TW": [
    "我們以香港信託架構守護家族財富，並支持跨境資產的長期管理。",
    "我們將合規託管、數字資產與全球配置能力整合於同一專業信託平台。",
  ],
} as const

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { language } = useLanguage()
  const t = getTranslation(language)
  const slides = t.hero.slides.slice(0, HERO_BG_IMAGES.length)
  const slogans = HERO_SLOGANS[language] || HERO_SLOGANS.en

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-[100dvh] min-h-[100svh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {HERO_BG_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Hong Kong Skyline"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-tight max-w-5xl mx-auto animate-fadeIn"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {slogans[currentSlide] || slogans[0]}
          </h1>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/80 hover:text-white transition-all animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </button>

      {/* Slide indicators - subtle dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
