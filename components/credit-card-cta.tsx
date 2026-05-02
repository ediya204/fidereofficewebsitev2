"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/components/ui/app-icon"
import Link from "next/link"

export function CreditCardCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to unlock your wealth?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Apply for your FIDERE Asset Link Credit Card today and experience seamless access to your trust assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-6 text-lg rounded-full">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
