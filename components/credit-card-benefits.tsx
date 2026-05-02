"use client"

import { motion } from "framer-motion"
import { CreditCard, Shield, Globe, Zap } from "@/components/ui/app-icon"

const benefits = [
  {
    icon: CreditCard,
    title: "Asset-Backed Credit",
    description:
      "Access liquidity without selling your trust assets. Your investments continue to grow while you spend.",
  },
  {
    icon: Shield,
    title: "Premium Security",
    description: "Bank-grade encryption and fraud protection ensure your transactions are always secure.",
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description: "Use your card at over 40 million merchants and ATMs in 210+ countries worldwide.",
  },
  {
    icon: Zap,
    title: "Instant Approval",
    description: "Get approved in minutes with our streamlined digital application process.",
  },
]

export function CreditCardBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Card Benefits</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of asset-backed credit with exclusive benefits designed for modern wealth management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
