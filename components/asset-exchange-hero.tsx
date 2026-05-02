"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/ui/app-icon"

export function AssetExchangeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/h10JXTF6EKsvcJ1VVNGKpsyHQ4.jpg?width=6000&height=4000"
          alt="Exchange background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="text-[#2563EB] font-medium">EXCHANGE</span>
            <span className="text-white/60">|</span>
            <span className="text-white/80 text-sm">一站式兑换解决方案</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            轻松兑换
            <br />
            <span className="text-[#2563EB]">数字与传统资产</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            借助 FIDERE
            平台，您可以轻松买卖外币和数字资产。我们的兑换功能旨在为您提供灵活性和便利性，高效管理您的金融交易。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-6 text-lg rounded-full">
              立即开户
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
            >
              了解更多
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
