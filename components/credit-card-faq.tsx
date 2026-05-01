"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Can I apply for supplementary cards for my family or friends?",
    answer:
      "Yes. You can apply for up to 5 supplementary cards. A supplementary card lets you share the benefits and convenience of your FIDERE Asset Link Credit Card with your family and friends.",
  },
  {
    question: "How do I get liquidity from my trust assets?",
    answer:
      "Simply withdraw cash from any Mastercard-accepting ATM using your FIDERE Asset Link Credit Card, available across 210 countries worldwide.",
  },
  {
    question: "When do I need to settle the outstanding balance?",
    answer:
      "If you have enabled AutoPay for automatic repayments, repayments will be made automatically. You can also disable AutoPay to regain full control over repayments.",
  },
  {
    question: "When will the outstanding balance start incurring interest?",
    answer:
      "If you have enabled AutoPay and have adequate eligible assets, you won't be charged any interest. Otherwise, interest is charged immediately for ATM transactions.",
  },
  {
    question: "How much are the monthly minimum repayments?",
    answer: "There are no minimum repayments and no fixed payment due dates. You pay at your own discretion.",
  },
]

export function CreditCardFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
