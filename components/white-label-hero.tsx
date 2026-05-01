"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

const content = {
  en: {
    title: "Trust Company White Label",
    subtitle: "A single integration for your trust business",
    description:
      "Our white-label solutions enable you to offer trust services under your own brand with our comprehensive infrastructure. This creates new opportunities to engage with your clients and allows you to get to market quickly with full functionality.",
    description2:
      "With one single integration, we offer a simple, streamlined and automated experience. We connect your business from where you are to wherever you need to be.",
    cta1: "Our solutions",
    cta2: "Contact us",
    cta3: "Let's talk",
  },
  "zh-CN": {
    title: "信托公司白标服务",
    subtitle: "一次集成，开启您的信托业务",
    description:
      "我们的白标解决方案使您能够以自己的品牌提供信托服务，同时利用我们全面的基础设施。这为您与客户互动创造了新机会，让您能够快速进入市场并拥有完整功能。",
    description2:
      "通过一次集成，我们提供简单、流畅和自动化的体验。我们将您的业务从现有位置连接到您需要到达的任何地方。",
    cta1: "我们的解决方案",
    cta2: "联系我们",
    cta3: "开始对话",
  },
  "zh-TW": {
    title: "信託公司白標服務",
    subtitle: "一次整合，開啟您的信託業務",
    description:
      "我們的白標解決方案使您能夠以自己的品牌提供信託服務，同時利用我們全面的基礎設施。這為您與客戶互動創造了新機會，讓您能夠快速進入市場並擁有完整功能。",
    description2:
      "透過一次整合，我們提供簡單、流暢和自動化的體驗。我們將您的業務從現有位置連接到您需要到達的任何地方。",
    cta1: "我們的解決方案",
    cta2: "聯繫我們",
    cta3: "開始對話",
  },
}

export function WhiteLabelHero() {
  const { language } = useLanguage()
  const t = content[language as keyof typeof content] || content["zh-CN"]

  return (
    <section className="relative bg-[#1a1a2e] text-white min-h-[80vh] flex items-center overflow-hidden">
      {/* Background code decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 overflow-hidden">
        <div className="absolute right-8 top-20 font-mono text-xs text-[#4a5568] leading-relaxed">
          <pre>{`12     output   :  "idr "
13     rate     :  "14250.000000  "  }
14
15   GET  / v3  / quotes / USD / VND
16   { " input   " : " usd ",
17     output   :  "vnd ",
18     rate     :  "23250.000000  "  }
19
20   GET  / v4  / quotes / USD / CNY
21   { " input   " : " usd ",
22     output   :  "cny ",
23     rate     :  "7.085256  "  }
24
25   GET  / v5  / quotes / USD / INR
26   { " input   " : " usd ",
27     output   :  "inr ",
28     rate     :  "75.024900  "  }
29
30   GET  / v6  / quotes / USD / JPY
31   { " input   " : " usd ",`}</pre>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{t.title}</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white/90">{t.subtitle}</h2>
        </div>

        {/* Description and image section */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-white/80 leading-relaxed">{t.description}</p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">{t.description2}</p>

            {/* CTA links */}
            <div className="flex flex-wrap gap-8 pt-8">
              <Link
                href="/solutions"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group"
              >
                <span className="w-6 h-px bg-white group-hover:bg-blue-400 transition-colors"></span>
                {t.cta1}
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group"
              >
                <span className="w-6 h-px bg-white group-hover:bg-blue-400 transition-colors"></span>
                {t.cta2}
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group"
              >
                <span className="w-6 h-px bg-white group-hover:bg-blue-400 transition-colors"></span>
                {t.cta3}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-lg overflow-hidden">
              <img src="/professional-businessman-using-laptop-technology-b.jpg" alt="White Label Services" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
