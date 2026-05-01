"use client"

import { motion } from "framer-motion"

const benefits = [
  {
    number: "01",
    title: "多币种支持",
    description: "支持多种外币交易，轻松管理国际交易和投资。",
  },
  {
    number: "02",
    title: "安全可靠",
    description: "采用强大的安全措施，确保您的财务信息安全。",
  },
  {
    number: "03",
    title: "即时交易",
    description: "快速安全地执行交易，即时处理确保交易及时完成。",
  },
  {
    number: "04",
    title: "界面友好",
    description: "直观的平台设计，轻松导航并完成兑换操作。",
  },
  {
    number: "05",
    title: "全天候服务",
    description: "随时随地进行货币和数字资产交易，24/7 全天候访问平台。",
  },
]

export function AssetExchangeBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563EB] font-medium tracking-wider text-sm uppercase">Key Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">体验 FIDERE 优势</h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-slate-50 rounded-2xl p-8 h-full hover:bg-[#2563EB] transition-colors duration-300">
                {/* Number */}
                <span className="text-6xl font-bold text-[#2563EB]/10 group-hover:text-white/20 transition-colors absolute top-4 right-6">
                  {benefit.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-white/80 transition-colors leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
