"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "选择兑换",
    description: "从菜单中选择兑换功能",
  },
  {
    number: "02",
    title: "选择币种或资产",
    description: "选择您想买卖的外币或数字资产",
  },
  {
    number: "03",
    title: "输入金额",
    description: "输入您想要兑换的金额",
  },
  {
    number: "04",
    title: "查看汇率",
    description: "查看实时提供的汇率",
  },
  {
    number: "05",
    title: "确认交易",
    description: "确认交易以即时执行",
  },
]

export function AssetExchangeHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563EB] font-medium tracking-wider text-sm uppercase">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">全球兑换，轻松掌握</h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-[#2563EB] to-[#2563EB]/30" />
              )}

              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                {/* Number */}
                <div className="w-16 h-16 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
