"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Contact Form",
    title: "Get in touch",
    subtitle: "Please fill out our form and we will get back to you as soon as possible.",
    nameLabel: "Name*",
    namePlaceholder: "Enter your name",
    emailLabel: "Email Address*",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message*",
    messagePlaceholder: "Write your message here",
    submit: "Send Message",
    success: "Thank you for contacting us! Your message has been successfully sent.",
  },
  "zh-CN": {
    label: "联系表单",
    title: "与我们联系",
    subtitle: "请填写我们的表单，我们将尽快与您联系。",
    nameLabel: "姓名*",
    namePlaceholder: "请输入您的姓名",
    emailLabel: "电子邮件*",
    emailPlaceholder: "请输入您的邮箱",
    messageLabel: "留言*",
    messagePlaceholder: "请在此处填写您的留言",
    submit: "发送消息",
    success: "感谢您的联系！您的消息已成功发送。",
  },
  "zh-TW": {
    label: "聯繫表單",
    title: "與我們聯繫",
    subtitle: "請填寫我們的表單，我們將盡快與您聯繫。",
    nameLabel: "姓名*",
    namePlaceholder: "請輸入您的姓名",
    emailLabel: "電子郵件*",
    emailPlaceholder: "請輸入您的郵箱",
    messageLabel: "留言*",
    messagePlaceholder: "請在此處填寫您的留言",
    submit: "發送消息",
    success: "感謝您的聯繫！您的消息已成功發送。",
  },
}

export function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-[#2563EB] mb-2 uppercase tracking-wider">{t.label}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              {t.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              placeholder={t.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
              placeholder={t.emailPlaceholder}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            placeholder={t.messagePlaceholder}
          />
        </div>

        <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
          {t.submit}
        </Button>

        {submitted && <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center">{t.success}</div>}
      </form>
    </div>
  )
}
