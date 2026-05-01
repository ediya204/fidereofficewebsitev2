"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

const icons = {
  speed: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <path d="M24 4v8M24 36v8M4 24h8M36 24h8" strokeLinecap="round" />
      <path d="M10 10l6 6M32 32l6 6M10 38l6-6M32 16l6-6" strokeLinecap="round" />
      <circle cx="24" cy="24" r="8" />
    </svg>
  ),
  percent: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <circle cx="24" cy="24" r="18" />
      <circle cx="18" cy="18" r="4" />
      <circle cx="30" cy="30" r="4" />
      <path d="M32 16L16 32" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <path d="M24 4L6 12v12c0 11 8 18 18 22 10-4 18-11 18-22V12L24 4z" />
      <path d="M16 24l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 12v12l8 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <circle cx="24" cy="24" r="18" />
      <ellipse cx="24" cy="24" rx="8" ry="18" />
      <path d="M6 24h36M8 14h32M8 34h32" />
    </svg>
  ),
  device: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
      <rect x="14" y="6" width="20" height="36" rx="3" />
      <path d="M21 38h6" strokeLinecap="round" />
      <path d="M14 32h20" />
    </svg>
  ),
}

const translations = {
  en: {
    benefits: [
      {
        title: "Fast Arrival",
        points: ["Same-day local clearing", "SWIFT transfers in 1-2 business days", "Real-time transaction tracking"],
      },
      {
        title: "Ultra-low Rates",
        points: [
          "50%-80% lower than traditional banks",
          "Transparent pricing with no hidden fees",
          "Exclusive discounts for large transactions",
        ],
      },
      {
        title: "Security & Compliance",
        points: [
          "Licensed financial institution",
          "Multi-factor authentication",
          "Full fund traceability",
          "Bank-grade encryption",
        ],
      },
      {
        title: "24/7 Service",
        points: ["Round-the-clock payment system", "No timezone restrictions", "Holiday processing available"],
      },
      {
        title: "Global Coverage",
        points: ["Support for 180+ countries and regions", "30+ major currencies", "Localized clearing networks"],
      },
      {
        title: "Easy Management",
        points: ["Web and mobile access anytime", "Real-time transaction status updates", "Smart payee management"],
      },
    ],
  },
  "zh-CN": {
    benefits: [
      {
        title: "极速到账",
        points: ["本地清算当日到账", "SWIFT 汇款 1-2 个工作日", "实时交易状态追踪"],
      },
      {
        title: "超低费率",
        points: ["比传统银行低 50%-80%", "透明定价无隐藏费用", "大额交易专属优惠"],
      },
      {
        title: "安全合规",
        points: ["持牌金融机构", "多重安全验证", "资金全程可追溯", "银行级加密保护"],
      },
      {
        title: "7×24 服务",
        points: ["全天候支付系统", "不受时区限制", "节假日正常处理"],
      },
      {
        title: "全球覆盖",
        points: ["支持 180+ 国家和地区", "30+ 主流货币", "本地化清算网络"],
      },
      {
        title: "便捷管理",
        points: ["网页和移动端随时查看", "交易状态实时更新", "收款人智能管理"],
      },
    ],
  },
  "zh-TW": {
    benefits: [
      {
        title: "極速到賬",
        points: ["本地清算當日到賬", "SWIFT 匯款 1-2 個工作日", "實時交易狀態追蹤"],
      },
      {
        title: "超低費率",
        points: ["比傳統銀行低 50%-80%", "透明定價無隱藏費用", "大額交易專屬優惠"],
      },
      {
        title: "安全合規",
        points: ["持牌金融機構", "多重安全驗證", "資金全程可追溯", "銀行級加密保護"],
      },
      {
        title: "7×24 服務",
        points: ["全天候支付系統", "不受時區限制", "節假日正常處理"],
      },
      {
        title: "全球覆蓋",
        points: ["支持 180+ 國家和地區", "30+ 主流貨幣", "本地化清算網絡"],
      },
      {
        title: "便捷管理",
        points: ["網頁和移動端隨時查看", "交易狀態實時更新", "收款人智能管理"],
      },
    ],
  },
}

export function GlobalPaymentBenefits() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {t.benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center text-blue-600">
                {index === 0 && icons.speed}
                {index === 1 && icons.percent}
                {index === 2 && icons.shield}
              </div>
              <h3 className="mb-6 text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <ul className="space-y-3 text-left">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-blue-500" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid gap-12 border-t border-gray-100 pt-16 md:grid-cols-3 md:gap-8 lg:gap-16">
          {t.benefits.slice(3, 6).map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center text-blue-600">
                {index === 0 && icons.clock}
                {index === 1 && icons.globe}
                {index === 2 && icons.device}
              </div>
              <h3 className="mb-6 text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <ul className="space-y-3 text-left">
                {benefit.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-blue-500" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
