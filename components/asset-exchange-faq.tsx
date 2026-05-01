"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "可以全天候交易货币和数字资产吗？",
    answer: "是的，FIDERE 应用提供全天候访问，让您可以随时随地交易货币和数字资产。",
  },
  {
    question: "如何追踪兑换状态？",
    answer: "您可以通过 FIDERE 应用实时追踪兑换状态，获取交易的最新信息。",
  },
  {
    question: "可以设置自动兑换吗？",
    answer: "目前，FIDERE 应用支持手动兑换。但我们正在持续增强功能，未来可能会推出自动兑换服务。",
  },
  {
    question: "我的资产在 FIDERE 信托安全吗？",
    answer:
      "在 FIDERE，赢得您的信任和确保资产安全是我们的首要任务。我们以法定所有权身份担任受托人和托管人，所有资产均由持牌金融机构或顶级托管人持有。这种结构为您的财富提供了强有力的安全保障。",
  },
  {
    question: "支持哪些货币和数字资产？",
    answer:
      "我们支持 30+ 种主流货币以及主要的数字资产，包括 BTC、ETH、USDT 等。具体支持的币种列表请查看应用内的兑换页面。",
  },
]

export function AssetExchangeFAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563EB] font-medium tracking-wider text-sm uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">常见问题</h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border-none shadow-sm px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-[#2563EB] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
