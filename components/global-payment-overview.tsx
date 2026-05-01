"use client"

import { motion } from "framer-motion"
import { Globe, CreditCard, Clock, FileText, ArrowRight, Building2 } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    badge: "Payment Methods",
    title1: "Diversified",
    title2: "Global Payment Channels",
    description:
      "Whether for personal remittances or corporate batch payments, FIDERE TRUST provides comprehensive payment solutions to meet all your cross-border payment needs.",
    methods: [
      {
        id: "swift",
        title: "SWIFT International Transfer",
        description: "Connected to 11,000+ banks worldwide, secure and reliable international wire transfer service",
        stats: "180+ Countries",
      },
      {
        id: "local",
        title: "Local Clearing Networks",
        description: "Access local clearing systems for faster speeds and lower fees",
        stats: "30+ Currencies",
      },
      {
        id: "invoice",
        title: "Invoice Payments",
        description: "Upload invoices with automatic information extraction, simplifying business payment processes",
        stats: "Smart Recognition",
      },
      {
        id: "scheduled",
        title: "Scheduled Payments",
        description: "Set future payment dates with automatic recurring transfers",
        stats: "Automated",
      },
      {
        id: "card",
        title: "Virtual Card Payments",
        description: "Instantly generate virtual cards for online payments and subscriptions",
        stats: "Instant Issuance",
      },
    ],
  },
  "zh-CN": {
    badge: "支付方式",
    title1: "多元化的",
    title2: "全球支付渠道",
    description: "无论是个人汇款还是企业批量付款，FIDERE TRUST 提供全方位的支付解决方案，满足您的各类跨境支付需求。",
    methods: [
      {
        id: "swift",
        title: "SWIFT 国际汇款",
        description: "连接全球 11,000+ 银行，安全可靠的国际电汇服务",
        stats: "180+ 国家",
      },
      {
        id: "local",
        title: "本地清算网络",
        description: "接入各地本地清算系统，享受更快速度和更低费率",
        stats: "30+ 货币",
      },
      { id: "invoice", title: "发票支付", description: "上传发票自动提取信息，简化企业付款流程", stats: "智能识别" },
      { id: "scheduled", title: "定时支付", description: "设置未来付款日期，自动执行定期转账", stats: "自动化" },
      { id: "card", title: "虚拟卡支付", description: "即时生成虚拟卡，用于在线支付和订阅服务", stats: "即时发卡" },
    ],
  },
  "zh-TW": {
    badge: "支付方式",
    title1: "多元化的",
    title2: "全球支付渠道",
    description: "無論是個人匯款還是企業批量付款，FIDERE TRUST 提供全方位的支付解決方案，滿足您的各類跨境支付需求。",
    methods: [
      {
        id: "swift",
        title: "SWIFT 國際匯款",
        description: "連接全球 11,000+ 銀行，安全可靠的國際電匯服務",
        stats: "180+ 國家",
      },
      {
        id: "local",
        title: "本地清算網絡",
        description: "接入各地本地清算系統，享受更快速度和更低費率",
        stats: "30+ 貨幣",
      },
      { id: "invoice", title: "發票支付", description: "上傳發票自動提取信息，簡化企業付款流程", stats: "智能識別" },
      { id: "scheduled", title: "定時支付", description: "設置未來付款日期，自動執行定期轉賬", stats: "自動化" },
      { id: "card", title: "虛擬卡支付", description: "即時生成虛擬卡，用於在線支付和訂閱服務", stats: "即時發卡" },
    ],
  },
}

const icons = [Globe, Building2, FileText, Clock, CreditCard]
const images = [
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e3858f?w=800&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
]

export function GlobalPaymentOverview() {
  const [activeMethod, setActiveMethod] = useState("swift")
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const paymentMethods = t.methods.map((method, index) => ({
    ...method,
    icon: icons[index],
    image: images[index],
  }))

  const activeItem = paymentMethods.find((m) => m.id === activeMethod)

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5"
          >
            <span className="text-sm font-medium text-blue-700">{t.badge}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl"
          >
            {t.title1}
            <span className="text-blue-600">{t.title2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-gray-600"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Interactive Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon
              const isActive = activeMethod === method.id
              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveMethod(method.id)}
                  className={`group cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
                    isActive
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : "border-gray-100 bg-white hover:border-blue-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive ? "bg-[#2563EB] text-white" : "bg-gray-100 text-gray-600 group-hover:bg-blue-100"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                        <span className={`text-sm font-medium ${isActive ? "text-blue-600" : "text-gray-400"}`}>
                          {method.stats}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{method.description}</p>
                    </div>
                    <ArrowRight
                      className={`h-5 w-5 shrink-0 transition-all ${isActive ? "translate-x-1 text-blue-600" : "text-gray-300"}`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden overflow-hidden rounded-3xl lg:block"
          >
            {activeItem && (
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-full min-h-[500px]"
              >
                <img
                  src={activeItem.image || "/placeholder.svg"}
                  alt={activeItem.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
                    <activeItem.icon className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">{activeItem.stats}</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">{activeItem.title}</h3>
                  <p className="text-white/80">{activeItem.description}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
