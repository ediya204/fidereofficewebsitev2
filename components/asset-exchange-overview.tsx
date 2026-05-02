"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "@/components/ui/app-icon"

export function AssetExchangeOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              全球兑换
              <br />
              <span className="text-[#2563EB]">触手可及</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              我们灵活的兑换基础设施提供更高的速度、确定性、透明度和效率——这些是数字经济时代的重要需求。我们让企业和个人能够轻松嵌入金融服务，实现全球即时覆盖。
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              如今，我们的网络覆盖亚太、非洲、欧洲和北美的数十亿用户。我们致力于让金融服务对每个人、在每个地方都更加便捷和包容。
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#how-it-works"
                className="inline-flex items-center text-[#2563EB] font-medium hover:gap-3 transition-all"
              >
                了解运作方式
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
              {/* Network Diagram */}
              <div className="flex items-center justify-center gap-8">
                {/* Your Business */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium text-sm">
                    <div className="text-center">
                      <div>您的</div>
                      <div>资产</div>
                    </div>
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex flex-col gap-4">
                  <svg className="w-16 h-8 text-[#2563EB]" viewBox="0 0 64 32">
                    <path d="M0 16 L48 16 M40 8 L48 16 L40 24" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <svg className="w-16 h-8 text-[#2563EB] rotate-180" viewBox="0 0 64 32">
                    <path d="M0 16 L48 16 M40 8 L48 16 L40 24" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>

                {/* FIDERE */}
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-2xl bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-blue-500/30">
                    FIDERE
                  </div>
                </div>

                {/* Arrows */}
                <div className="flex flex-col gap-4">
                  <svg className="w-16 h-8 text-[#2563EB]" viewBox="0 0 64 32">
                    <path d="M0 16 L48 16 M40 8 L48 16 L40 24" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <svg className="w-16 h-8 text-[#2563EB] rotate-180" viewBox="0 0 64 32">
                    <path d="M0 16 L48 16 M40 8 L48 16 L40 24" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>

                {/* Global Markets */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-slate-700 font-medium text-sm">
                    <div className="text-center">
                      <div>全球</div>
                      <div>市场</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2563EB]">30+</div>
                  <div className="text-sm text-slate-600">支持货币</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2563EB]">170+</div>
                  <div className="text-sm text-slate-600">覆盖市场</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2563EB]">24/7</div>
                  <div className="text-sm text-slate-600">全天候服务</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
