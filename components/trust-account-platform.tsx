"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function TrustAccountPlatform() {
  const { language } = useLanguage()

  const content = {
    en: {
      label: "Platform Preview",
      title: "Powerful Dashboard at Your Fingertips",
      subtitle:
        "Our intuitive platform gives you complete visibility and control over your trust assets. Monitor balances, track transactions, manage investments, and access reports - all from a single interface.",
      features: [
        { title: "Real-time Balance", desc: "Track your total assets with live updates" },
        { title: "Transaction History", desc: "Complete visibility of all movements" },
        { title: "Portfolio Analytics", desc: "Detailed performance insights" },
        { title: "Multi-currency Support", desc: "Manage assets across currencies" },
      ],
    },
    "zh-CN": {
      label: "平台预览",
      title: "强大的仪表板尽在指尖",
      subtitle:
        "我们直观的平台让您完全掌控您的信托资产。监控余额、跟踪交易、管理投资、获取报告——一切都在单一界面中完成。",
      features: [
        { title: "实时余额", desc: "通过实时更新追踪您的总资产" },
        { title: "交易历史", desc: "完整查看所有资金流动" },
        { title: "投资组合分析", desc: "详细的绩效洞察" },
        { title: "多币种支持", desc: "跨币种管理资产" },
      ],
    },
    "zh-TW": {
      label: "平台預覽",
      title: "強大的儀表板盡在指尖",
      subtitle:
        "我們直觀的平台讓您完全掌控您的信託資產。監控餘額、追蹤交易、管理投資、獲取報告——一切都在單一介面中完成。",
      features: [
        { title: "實時餘額", desc: "通過實時更新追蹤您的總資產" },
        { title: "交易歷史", desc: "完整查看所有資金流動" },
        { title: "投資組合分析", desc: "詳細的績效洞察" },
        { title: "多幣種支持", desc: "跨幣種管理資產" },
      ],
    },
  }

  const t = content[language] || content.en

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a1a] to-[#111827] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#60a5fa] text-sm font-medium rounded-full mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.title}</h2>
          <p className="text-lg text-white/70">{t.subtitle}</p>
        </div>

        {/* Dashboard Screenshot Showcase */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow effects behind the image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2563EB]/30 via-[#6366F1]/20 to-[#2563EB]/30 rounded-3xl blur-2xl" />

          {/* Browser frame */}
          <div className="relative bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f1a] border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-[#1a1a2e] rounded-md text-white/50 text-sm">app.fideretrust.com/dashboard</div>
              </div>
            </div>

            {/* Dashboard image */}
            <div className="relative">
              <Image
                src="/images/image.png"
                alt="FIDERE Dashboard"
                width={1400}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Floating feature cards */}
          <div className="absolute -left-4 lg:-left-8 top-1/4 transform -translate-y-1/2 hidden md:block">
            <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 max-w-[180px]">
              <div className="text-2xl font-bold text-[#0a0a1a]">$145,243</div>
              <div className="text-sm text-gray-500">{t.features[0].title}</div>
              <div className="mt-2 text-green-500 text-sm font-medium">+45%</div>
            </div>
          </div>

          <div className="absolute -right-4 lg:-right-8 top-1/3 hidden md:block">
            <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 max-w-[180px]">
              <div className="text-2xl font-bold text-[#0a0a1a]">24/7</div>
              <div className="text-sm text-gray-500">{t.features[1].desc}</div>
            </div>
          </div>

          <div className="absolute -right-4 lg:-right-8 bottom-1/4 hidden md:block">
            <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 max-w-[180px]">
              <div className="text-2xl font-bold text-[#2563EB]">+18.3%</div>
              <div className="text-sm text-gray-500">{t.features[2].title}</div>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-white font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
