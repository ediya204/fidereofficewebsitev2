"use client"

import { motion } from "framer-motion"
import { Upload, FileSearch, Send, CheckCircle2, ArrowRight } from "@/components/ui/app-icon"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Invoice Payments",
    title1: "Simplify Business Payment Processes",
    title2: "Four Steps to Cross-Border Payment",
    description:
      "Say goodbye to tedious manual entry. Our smart invoice payment system automatically extracts invoice information, letting your finance team focus on more important work.",
    steps: [
      { title: "Upload Invoice", description: "Upload PDF, image, or manually enter invoice information" },
      {
        title: "Smart Recognition",
        description: "AI automatically extracts recipient, amount, currency and other key info",
      },
      { title: "Confirm Payment", description: "Initiate cross-border payment with one click after verification" },
      {
        title: "Complete Transaction",
        description: "Real-time payment tracking with instant settlement notifications",
      },
    ],
    mockup: {
      title: "Invoice Payment",
      status: "Recognized",
      fileName: "invoice_2024_001.pdf",
      uploaded: "Uploaded • 2.3 MB",
      recipient: "Recipient",
      recipientValue: "ABC Corporation Ltd.",
      bankAccount: "Bank Account",
      bankAccountValue: "****4521",
      amount: "Amount",
      amountValue: "$12,500.00 USD",
      paymentDate: "Payment Date",
      paymentDateValue: "December 20, 2024",
      confirmBtn: "Confirm Payment",
    },
  },
  "zh-CN": {
    label: "发票支付",
    title1: "简化企业付款流程",
    title2: "四步完成跨境支付",
    description: "告别繁琐的手动输入，我们的智能发票支付系统自动提取发票信息，让您的财务团队专注于更重要的工作。",
    steps: [
      { title: "上传发票", description: "上传 PDF、图片或手动输入发票信息" },
      { title: "智能识别", description: "AI 自动提取收款人、金额、货币等关键信息" },
      { title: "确认支付", description: "核对信息后一键发起跨境付款" },
      { title: "完成交易", description: "实时追踪付款状态，秒级到账通知" },
    ],
    mockup: {
      title: "发票支付",
      status: "已识别",
      fileName: "invoice_2024_001.pdf",
      uploaded: "已上传 • 2.3 MB",
      recipient: "收款人",
      recipientValue: "ABC Corporation Ltd.",
      bankAccount: "银行账号",
      bankAccountValue: "****4521",
      amount: "金额",
      amountValue: "$12,500.00 USD",
      paymentDate: "付款日期",
      paymentDateValue: "2024年12月20日",
      confirmBtn: "确认支付",
    },
  },
  "zh-TW": {
    label: "發票支付",
    title1: "簡化企業付款流程",
    title2: "四步完成跨境支付",
    description: "告別繁瑣的手動輸入，我們的智能發票支付系統自動提取發票信息，讓您的財務團隊專注於更重要的工作。",
    steps: [
      { title: "上傳發票", description: "上傳 PDF、圖片或手動輸入發票信息" },
      { title: "智能識別", description: "AI 自動提取收款人、金額、貨幣等關鍵信息" },
      { title: "確認支付", description: "核對信息後一鍵發起跨境付款" },
      { title: "完成交易", description: "實時追蹤付款狀態，秒級到賬通知" },
    ],
    mockup: {
      title: "發票支付",
      status: "已識別",
      fileName: "invoice_2024_001.pdf",
      uploaded: "已上傳 • 2.3 MB",
      recipient: "收款人",
      recipientValue: "ABC Corporation Ltd.",
      bankAccount: "銀行賬號",
      bankAccountValue: "****4521",
      amount: "金額",
      amountValue: "$12,500.00 USD",
      paymentDate: "付款日期",
      paymentDateValue: "2024年12月20日",
      confirmBtn: "確認支付",
    },
  },
}

const stepIcons = [Upload, FileSearch, Send, CheckCircle2]

export function GlobalPaymentFeatures() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  const steps = t.steps.map((step, index) => ({
    ...step,
    icon: stepIcons[index],
  }))

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-sm font-medium tracking-wider text-blue-600">{t.label}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
            >
              {t.title1}
              <br />
              <span className="text-blue-600">{t.title2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-10 text-gray-600"
            >
              {t.description}
            </motion.p>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-blue-600">STEP {index + 1}</span>
                        {index < steps.length - 1 && <ArrowRight className="h-3 w-3 text-gray-300" />}
                      </div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: Invoice UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{t.mockup.title}</h3>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  {t.mockup.status}
                </span>
              </div>

              <div className="mb-6 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Upload className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">{t.mockup.fileName}</p>
                <p className="text-xs text-gray-500">{t.mockup.uploaded}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <span className="text-sm text-gray-600">{t.mockup.recipient}</span>
                  <span className="font-medium text-gray-900">{t.mockup.recipientValue}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <span className="text-sm text-gray-600">{t.mockup.bankAccount}</span>
                  <span className="font-medium text-gray-900">{t.mockup.bankAccountValue}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <span className="text-sm text-gray-600">{t.mockup.amount}</span>
                  <span className="text-xl font-bold text-blue-600">{t.mockup.amountValue}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                  <span className="text-sm text-gray-600">{t.mockup.paymentDate}</span>
                  <span className="font-medium text-gray-900">{t.mockup.paymentDateValue}</span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl bg-[#2563EB] py-4 font-semibold text-white transition-colors hover:bg-[#1D4ED8]">
                {t.mockup.confirmBtn}
              </button>
            </div>

            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-200/50 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-200/50 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
