"use client"

import { useLanguage } from "@/contexts/language-context"

export function TrustAccountNetwork() {
  const { language } = useLanguage()

  const content = {
    en: {
      label: "Global Reach",
      title: "Your Gateway to Global Markets",
      subtitle:
        "Today, our network serves clients throughout Asia Pacific, Europe, and North America. We are committed to making wealth management more accessible and efficient for everyone, everywhere.",
      stats: [
        { value: "50+", label: "Countries Served" },
        { value: "$10B+", label: "Assets Under Trust" },
        { value: "24/7", label: "Platform Access" },
        { value: "99.9%", label: "Uptime" },
      ],
      regions: ["Asia Pacific", "Europe", "North America", "Middle East"],
    },
    "zh-CN": {
      label: "全球覆盖",
      title: "您通往全球市场的门户",
      subtitle: "如今，我们的网络服务于亚太、欧洲和北美的客户。我们致力于让财富管理对每个人都更加便捷和高效。",
      stats: [
        { value: "50+", label: "服务国家" },
        { value: "$100亿+", label: "信托资产" },
        { value: "24/7", label: "平台访问" },
        { value: "99.9%", label: "系统可用性" },
      ],
      regions: ["亚太地区", "欧洲", "北美洲", "中东地区"],
    },
    "zh-TW": {
      label: "全球覆蓋",
      title: "您通往全球市場的門戶",
      subtitle: "如今，我們的網絡服務於亞太、歐洲和北美的客戶。我們致力於讓財富管理對每個人都更加便捷和高效。",
      stats: [
        { value: "50+", label: "服務國家" },
        { value: "$100億+", label: "信託資產" },
        { value: "24/7", label: "平台訪問" },
        { value: "99.9%", label: "系統可用性" },
      ],
      regions: ["亞太地區", "歐洲", "北美洲", "中東地區"],
    },
  }

  const t = content[language] || content.en

  return (
    <section className="py-24 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-[120px]" />
      </div>

      {/* World map dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          {/* Simplified world map dots */}
          {[...Array(100)].map((_, i) => (
            <circle
              key={i}
              cx={100 + (i % 20) * 55 + Math.random() * 20}
              cy={100 + Math.floor(i / 20) * 80 + Math.random() * 30}
              r={2 + Math.random() * 2}
              fill="#2563EB"
              opacity={0.3 + Math.random() * 0.5}
            />
          ))}
          {/* Connection lines */}
          <line x1="200" y1="200" x2="600" y2="150" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
          <line x1="600" y1="150" x2="900" y2="200" stroke="#2563EB" strokeWidth="1" opacity="0.3" />
          <line x1="400" y1="300" x2="700" y2="250" stroke="#6366F1" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#60a5fa] text-sm font-medium rounded-full mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
          <p className="text-lg text-white/70">{t.subtitle}</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {t.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="flex flex-wrap justify-center gap-4">
          {t.regions.map((region, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm font-medium"
            >
              {region}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
