"use client"

import { MapPin, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    label: "Information",
    title: "Where & how to find us",
    officeTitle: "FIDERE TRUST LIMITED",
    address: "RM 32, 1/F, Kaiser Estate Phase 3, KT Hok Yuen Street, Hung Hom, Hong Kong",
  },
  "zh-CN": {
    label: "联系信息",
    title: "如何找到我们",
    officeTitle: "FIDERE TRUST LIMITED",
    address: "香港红磡鹤园街凯旋工商中心第三期1楼32室",
  },
  "zh-TW": {
    label: "聯繫資訊",
    title: "如何找到我們",
    officeTitle: "FIDERE TRUST LIMITED",
    address: "香港紅磡鶴園街凱旋工商中心第三期1樓32室",
  },
}

export function ContactInfo() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <div>
      <div className="mb-8">
        <div className="text-sm text-[#2563EB] mb-2 uppercase tracking-wider">{t.label}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.title}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-gray-900 mb-2">{t.officeTitle}</h3>
          <div className="flex items-start gap-3 text-gray-600">
            <MapPin className="h-5 w-5 mt-1 text-[#2563EB]" />
            <p>{t.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-[#2563EB]" />
          <a href="mailto:info@fideretrust.com" className="text-gray-600 hover:text-[#2563EB]">
            info@fideretrust.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-[#2563EB]" />
          <a href="tel:+85251286593" className="text-gray-600 hover:text-[#2563EB]">
            +852 5128 6593
          </a>
        </div>
      </div>
    </div>
  )
}
