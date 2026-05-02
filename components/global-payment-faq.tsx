"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "@/components/ui/app-icon"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    title: "FAQ",
    subtitle: "Common questions about global payment services",
    faqs: [
      {
        question: "Which currencies and countries are supported?",
        answer:
          "We support cross-border remittances to 180+ countries and regions, including USD, EUR, GBP, JPY, HKD, SGD and 30+ major currencies. Covering North America, Europe, Asia Pacific, Middle East and other major economies.",
      },
      {
        question: "How long does it take for transfers to arrive?",
        answer:
          "Arrival time depends on destination and payment method. Local clearing usually arrives same day, SWIFT international transfers typically take 1-2 business days. We clearly show estimated arrival time before payment.",
      },
      {
        question: "What are the transfer fees?",
        answer:
          "Our rates are 50%-80% lower than traditional banks. Specific fees depend on transfer amount, currency, and destination. Before confirming payment, you can clearly see all fee breakdowns with no hidden charges.",
      },
      {
        question: "How do I use the invoice payment feature?",
        answer:
          "Simply upload the invoice file (PDF or image), and our AI system will automatically recognize and extract key information like recipient, amount, and account number. You can initiate payment with one click after verification, greatly simplifying corporate finance processes.",
      },
      {
        question: "How do I set up scheduled payments?",
        answer:
          "When creating a payment, select the 'Scheduled Payment' option and set the payment date. You can also set recurring payments, such as automatic payments on fixed dates each month. All scheduled tasks can be viewed and modified at any time.",
      },
      {
        question: "How is fund security guaranteed?",
        answer:
          "We are a licensed financial institution under strict regulation. Customer funds are kept in segregated custodial accounts, completely separate from company operating funds. We also use bank-grade encryption and multi-factor authentication to ensure every transaction is secure and reliable.",
      },
    ],
  },
  "zh-CN": {
    title: "常见问题",
    subtitle: "关于全球支付服务的常见疑问解答",
    faqs: [
      {
        question: "支持哪些货币和国家？",
        answer:
          "我们支持 180+ 国家和地区的跨境汇款，包括美元、欧元、英镑、日元、港币、新加坡元等 30+ 主流货币。覆盖北美、欧洲、亚太、中东等主要经济体。",
      },
      {
        question: "汇款需要多长时间到账？",
        answer:
          "到账时间取决于目的地和支付方式。本地清算通常当日到账，SWIFT 国际汇款一般 1-2 个工作日。我们会在付款前明确显示预计到账时间。",
      },
      {
        question: "汇款费用是多少？",
        answer:
          "我们的费率比传统银行低 50%-80%。具体费用取决于汇款金额、货币和目的地。在确认支付前，您可以清楚看到所有费用明细，没有任何隐藏费用。",
      },
      {
        question: "发票支付功能如何使用？",
        answer:
          "只需上传发票文件（PDF 或图片），我们的 AI 系统会自动识别并提取收款人、金额、账号等关键信息。您核对后即可一键发起付款，大大简化企业财务流程。",
      },
      {
        question: "如何设置定时支付？",
        answer:
          "在创建付款时，选择「定时支付」选项，设置付款日期即可。您也可以设置周期性付款，如每月固定日期自动支付。所有定时任务都可以随时查看和修改。",
      },
      {
        question: "资金安全如何保障？",
        answer:
          "我们是持牌金融机构，受严格监管。客户资金存放在独立托管账户，与公司运营资金完全隔离。同时采用银行级加密技术和多重身份验证，确保每笔交易安全可靠。",
      },
    ],
  },
  "zh-TW": {
    title: "常見問題",
    subtitle: "關於全球支付服務的常見疑問解答",
    faqs: [
      {
        question: "支持哪些貨幣和國家？",
        answer:
          "我們支持 180+ 國家和地區的跨境匯款，包括美元、歐元、英鎊、日元、港幣、新加坡元等 30+ 主流貨幣。覆蓋北美、歐洲、亞太、中東等主要經濟體。",
      },
      {
        question: "匯款需要多長時間到賬？",
        answer:
          "到賬時間取決於目的地和支付方式。本地清算通常當日到賬，SWIFT 國際匯款一般 1-2 個工作日。我們會在付款前明確顯示預計到賬時間。",
      },
      {
        question: "匯款費用是多少？",
        answer:
          "我們的費率比傳統銀行低 50%-80%。具體費用取決於匯款金額、貨幣和目的地。在確認支付前，您可以清楚看到所有費用明細，沒有任何隱藏費用。",
      },
      {
        question: "發票支付功能如何使用？",
        answer:
          "只需上傳發票文件（PDF 或圖片），我們的 AI 系統會自動識別並提取收款人、金額、賬號等關鍵信息。您核對後即可一鍵發起付款，大大簡化企業財務流程。",
      },
      {
        question: "如何設置定時支付？",
        answer:
          "在創建付款時，選擇「定時支付」選項，設置付款日期即可。您也可以設置週期性付款，如每月固定日期自動支付。所有定時任務都可以隨時查看和修改。",
      },
      {
        question: "資金安全如何保障？",
        answer:
          "我們是持牌金融機構，受嚴格監管。客戶資金存放在獨立托管賬戶，與公司運營資金完全隔離。同時採用銀行級加密技術和多重身份驗證，確保每筆交易安全可靠。",
      },
    ],
  },
}

export function GlobalPaymentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="bg-gray-50 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="pr-4 text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-[#2563EB] text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                        <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
