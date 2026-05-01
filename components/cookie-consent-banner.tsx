"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const CONSENT_KEY = "fidere_cookie_consent_v1"

const copy = {
  en: {
    message:
      'By clicking "Accept All Cookies", you agree to storing cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.',
    settings: "COOKIE SETTINGS",
    accept: "ACCEPT ALL COOKIES",
  },
  "zh-CN": {
    message: "点击“接受所有 Cookie”即表示您同意我们在您的设备上存储 Cookie，用于优化站点导航、分析使用情况并支持营销活动。",
    settings: "COOKIE 设置",
    accept: "接受所有 COOKIE",
  },
  "zh-TW": {
    message: "點擊「接受所有 Cookie」即表示您同意我們在您的裝置上儲存 Cookie，以優化網站導覽、分析使用情況並支援行銷活動。",
    settings: "COOKIE 設定",
    accept: "接受所有 COOKIE",
  },
} as const

export function CookieConsentBanner() {
  const { language, locale } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const hasConsent = window.localStorage.getItem(CONSENT_KEY) === "accepted"
      setVisible(!hasConsent)
    } catch {
      setVisible(true)
    }
  }, [])

  const localePath = useMemo(() => (path: string) => `/${locale}${path}`, [locale])
  const text = copy[language] || copy.en

  const acceptCookies = () => {
    try {
      window.localStorage.setItem(CONSENT_KEY, "accepted")
    } catch {
      // Ignore localStorage failures; still hide banner for current session.
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] border-t border-[#d7dbe6] bg-white shadow-[0_-8px_28px_rgba(7,7,45,0.12)]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-xs leading-relaxed text-[#374151] md:max-w-[70%]">{text.message}</p>
        <div className="flex items-center gap-2 self-end md:self-auto">
          <Link
            href={localePath("/privacy")}
            className="rounded-sm border border-[#cfd5e3] px-4 py-2 text-[11px] font-semibold tracking-[0.08em] text-[#4357ef] transition hover:bg-[#f5f7ff]"
          >
            {text.settings}
          </Link>
          <button
            onClick={acceptCookies}
            className="rounded-sm bg-[#0b76b8] px-4 py-2 text-[11px] font-semibold tracking-[0.08em] text-white transition hover:bg-[#09659d]"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
