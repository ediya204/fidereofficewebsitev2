"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  TrendingUp,
  Building2,
  FileText,
  Layers,
  Rocket,
  Wallet,
  Coins,
  Lock,
  ArrowUpRight,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    badge: "Diversified Portfolio",
    title1: "One Account,",
    title2: "Unlimited Possibilities",
    description:
      "Build your diversified investment portfolio with ease through FIDERE TRUST, accessing premium global assets.",
    cta: "Start Your Investment Journey",
    investmentTypes: [
      { title: "Stocks", description: "US, HK, and Chinese stocks - premium equities worldwide", stats: "30+ Markets" },
      { title: "Funds", description: "Diversified mutual funds and ETF products", stats: "5000+ Products" },
      { title: "Bonds", description: "Government and corporate bonds", stats: "AAA Rated" },
      { title: "Options", description: "Flexible investment strategy options", stats: "T+0 Trading" },
      {
        title: "IPO",
        description: "Initial public offerings and international stock subscriptions",
        stats: "Priority Allocation",
      },
      {
        title: "Structured Products",
        description: "Customized solutions for professional investors",
        stats: "Customized",
      },
      { title: "Fixed Deposits", description: "Stable and secure investment options", stats: "4.5%+ APY" },
      { title: "Staking", description: "Earn yields by supporting blockchain networks", stats: "Flexible Redemption" },
    ],
  },
  "zh-CN": {
    badge: "多元化投资组合",
    title1: "一个账户，",
    title2: "无限可能",
    description: "通过 FIDERE TRUST 信托账户，轻松配置全球优质资产，构建属于您的多元化投资组合",
    cta: "开始投资之旅",
    investmentTypes: [
      { title: "股票", description: "美股、港股、中概股等全球优质股票", stats: "覆盖30+市场" },
      { title: "基金", description: "多元化的共同基金和ETF产品", stats: "5000+产品" },
      { title: "债券", description: "政府债券和企业债券", stats: "AAA级可选" },
      { title: "期权", description: "灵活的投资策略选择", stats: "T+0交易" },
      { title: "IPO", description: "首次公开发行和国际股票认购", stats: "优先配售" },
      { title: "结构性产品", description: "为专业投资者量身定制的解决方案", stats: "定制化" },
      { title: "定期存款", description: "稳定安全的投资选择", stats: "年化4.5%+" },
      { title: "质押理财", description: "通过支持区块链网络获得收益", stats: "灵活赎回" },
    ],
  },
  "zh-TW": {
    badge: "多元化投資組合",
    title1: "一個賬戶，",
    title2: "無限可能",
    description: "通過 FIDERE TRUST 信託賬戶，輕鬆配置全球優質資產，構建屬於您的多元化投資組合",
    cta: "開始投資之旅",
    investmentTypes: [
      { title: "股票", description: "美股、港股、中概股等全球優質股票", stats: "覆蓋30+市場" },
      { title: "基金", description: "多元化的共同基金和ETF產品", stats: "5000+產品" },
      { title: "債券", description: "政府債券和企業債券", stats: "AAA級可選" },
      { title: "期權", description: "靈活的投資策略選擇", stats: "T+0交易" },
      { title: "IPO", description: "首次公開發行和國際股票認購", stats: "優先配售" },
      { title: "結構性產品", description: "為專業投資者量身定制的解決方案", stats: "定制化" },
      { title: "定期存款", description: "穩定安全的投資選擇", stats: "年化4.5%+" },
      { title: "質押理財", description: "通過支持區塊鏈網絡獲得收益", stats: "靈活贖回" },
    ],
  },
}

const icons = [TrendingUp, Building2, FileText, Layers, Rocket, Wallet, Lock, Coins]
const images = [
  "https://365financialanalyst.com/wp-content/uploads/2020/11/What-are-the-most-common-hedge-fund-strategies-thumb.jpg",
  "/images/image.jpeg",
  "",
  "",
  "/images/image.png",
  "",
  "",
  "",
]
const featuredIndexes = [0, 1, 4]

export function WealthOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const investmentTypes = t.investmentTypes.map((item, index) => ({
    ...item,
    icon: icons[index],
    featured: featuredIndexes.includes(index),
    image: images[index] || "",
  }))

  const featuredItems = investmentTypes.filter((item) => item.featured)
  const regularItems = investmentTypes.filter((item) => !item.featured)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full mb-6">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t.title1}
            <span className="text-[#2563EB]">{t.title2}</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{t.description}</p>
        </div>

        {/* Featured Cards - Large Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featuredItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl min-h-[320px] cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85 group-hover:via-black/50 transition-all duration-500" />
                <div
                  className={`absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500 ${
                    index === 0 ? "bg-blue-600/30" : index === 1 ? "bg-violet-600/30" : "bg-amber-500/30"
                  }`}
                />
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{item.title}</h3>
                    <p className="text-white/90 text-base leading-relaxed drop-shadow-md">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-white/70 text-sm font-medium backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full">
                      {item.stats}
                    </span>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 border border-white/20">
                      <ArrowUpRight className="h-5 w-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Regular Cards - Smaller Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {regularItems.map((item, index) => {
            const Icon = item.icon
            const isHovered = hoveredIndex === index + featuredItems.length
            return (
              <div
                key={item.title}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-lg hover:-translate-y-1 ${
                  isHovered ? "border-[#2563EB] shadow-xl" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index + featuredItems.length)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isHovered ? "bg-[#2563EB] scale-110" : "bg-gray-100 group-hover:bg-[#2563EB]/10"
                  }`}
                >
                  <Icon className={`h-5 w-5 transition-colors ${isHovered ? "text-white" : "text-[#2563EB]"}`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.stats}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isHovered ? "max-h-20 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link href="/contact">
            <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-[#2563EB]/25 hover:shadow-xl hover:shadow-[#2563EB]/30 transition-all">
              {t.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
