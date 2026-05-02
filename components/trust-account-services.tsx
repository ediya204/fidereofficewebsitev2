"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "@/components/ui/app-icon"
import Link from "next/link"

export function TrustAccountServices() {
  const { language, locale } = useLanguage()

  const content = {
    en: {
      label: "Account Features",
      title: "A Universe of Trust Services",
      subtitle:
        "Our comprehensive platform gives you the ability to access a full range of trust and wealth management services from a single account.",
      services: [
        {
          title: "Offshore Accounts",
          description:
            "Secure global wealth diversification with multi-jurisdictional trust structures designed for asset protection and privacy.",
          href: "/offshore-accounts",
          gradient: "from-[#2563EB] to-[#6366F1]",
        },
        {
          title: "Global Payment",
          description:
            "Seamless international transfers with competitive rates, real-time tracking and multi-currency support.",
          href: "/global-payment",
          gradient: "from-[#6366F1] to-[#8B5CF6]",
        },
        {
          title: "Wealth Management",
          description:
            "Professional investment management with access to global markets, alternative assets and personalized strategies.",
          href: "/wealth-management",
          gradient: "from-[#8B5CF6] to-[#A855F7]",
        },
        {
          title: "Asset Link Card",
          description:
            "High-end cards backed by your trust assets, enabling global spending while maintaining asset security.",
          href: "/credit-card",
          gradient: "from-[#2563EB] to-[#3B82F6]",
        },
        {
          title: "Asset Exchange",
          description:
            "Seamlessly convert between digital and traditional assets with institutional-grade security and competitive rates.",
          href: "/asset-exchange",
          gradient: "from-[#3B82F6] to-[#6366F1]",
        },
      ],
    },
    "zh-CN": {
      label: "账户功能",
      title: "全方位信托服务",
      subtitle: "我们的综合平台让您可以通过单一账户访问全系列信托和财富管理服务。",
      services: [
        {
          title: "离岸账户",
          description: "通过多司法管辖区信托结构实现安全的全球财富分散，专为资产保护和隐私设计。",
          href: "/offshore-accounts",
          gradient: "from-[#2563EB] to-[#6366F1]",
        },
        {
          title: "全球支付",
          description: "无缝的国际转账服务，具有竞争力的汇率、实时追踪和多币种支持。",
          href: "/global-payment",
          gradient: "from-[#6366F1] to-[#8B5CF6]",
        },
        {
          title: "财富管理",
          description: "专业的投资管理，可访问全球市场、另类资产和个性化策略。",
          href: "/wealth-management",
          gradient: "from-[#8B5CF6] to-[#A855F7]",
        },
        {
          title: "资产挂钩卡",
          description: "由您的信托资产支持的高端卡片，在保持资产安全的同时实现全球消费。",
          href: "/credit-card",
          gradient: "from-[#2563EB] to-[#3B82F6]",
        },
        {
          title: "资产转换",
          description: "以机构级安全性和具有竞争力的价格，无缝转换数字资产和传统资产。",
          href: "/asset-exchange",
          gradient: "from-[#3B82F6] to-[#6366F1]",
        },
      ],
    },
    "zh-TW": {
      label: "賬戶功能",
      title: "全方位信託服務",
      subtitle: "我們的綜合平台讓您可以通過單一賬戶訪問全系列信託和財富管理服務。",
      services: [
        {
          title: "離岸賬戶",
          description: "通過多司法管轄區信託結構實現安全的全球財富分散，專為資產保護和隱私設計。",
          href: "/offshore-accounts",
          gradient: "from-[#2563EB] to-[#6366F1]",
        },
        {
          title: "全球支付",
          description: "無縫的國際轉賬服務，具有競爭力的匯率、實時追蹤和多幣種支持。",
          href: "/global-payment",
          gradient: "from-[#6366F1] to-[#8B5CF6]",
        },
        {
          title: "財富管理",
          description: "專業的投資管理，可訪問全球市場、另類資產和個性化策略。",
          href: "/wealth-management",
          gradient: "from-[#8B5CF6] to-[#A855F7]",
        },
        {
          title: "資產掛鉤卡",
          description: "由您的信託資產支持的高端卡片，在保持資產安全的同時實現全球消費。",
          href: "/credit-card",
          gradient: "from-[#2563EB] to-[#3B82F6]",
        },
        {
          title: "資產轉換",
          description: "以機構級安全性和具有競爭力的價格，無縫轉換數字資產和傳統資產。",
          href: "/asset-exchange",
          gradient: "from-[#3B82F6] to-[#6366F1]",
        },
      ],
    },
  }

  const t = content[language] || content.en

  return (
    <section className="py-24 bg-[#f8f9fb]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium rounded-full mb-4">
            {t.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0a1a] mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((service, index) => (
            <Link
              key={index}
              href={`/${locale}${service.href}`}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

              <h3 className="text-xl font-bold text-[#0a0a1a] mb-4 group-hover:text-[#2563EB] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <div className="flex items-center gap-2 text-[#2563EB] font-medium">
                <span className="group-hover:underline">Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
