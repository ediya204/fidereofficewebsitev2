"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MapPin, Mail, Phone } from "@/components/ui/app-icon"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function Footer() {
  const { language, locale } = useLanguage()
  const pathname = usePathname()
  const t = getTranslation(language)

  const isLocalizedPath = ["en", "cn", "tc", "ar"].includes(pathname.split("/")[1] || "")
  const localizedPathMap: Record<string, string> = {
    "/services": "/solutions",
    "/compliance": "/compliance-kyc",
    "/asset-management": "/wealth-management",
  }
  const localePath = (path: string) => {
    if (path === "/login") return "/login"
    if (!isLocalizedPath) return path
    return `/${locale}${localizedPathMap[path] ?? path}`
  }

  const leftLinks = [
    { label: language === "ar" ? "الرئيسية" : language === "zh-CN" ? "首页" : language === "zh-TW" ? "首頁" : "Home", href: localePath("/") },
    { label: language === "ar" ? "من نحن" : language === "zh-CN" ? "关于我们" : language === "zh-TW" ? "關於我們" : "About", href: localePath("/about") },
    { label: t.nav.solutions, href: localePath("/services") },
    { label: language === "ar" ? "الامتثال" : language === "zh-CN" ? "合规" : language === "zh-TW" ? "合規" : "Compliance", href: localePath("/compliance") },
  ]

  const rightLinks = [
    {
      label:
        language === "ar"
          ? "إدارة الثروات"
          : language === "zh-CN"
            ? "财富管理"
            : language === "zh-TW"
              ? "財富管理"
              : "Wealth Management",
      href: localePath("/asset-management"),
    },
    {
      label: t.nav.contactUs,
      href: localePath("/contact"),
    },
    {
      label: t.nav.login,
      href: localePath("/login"),
    },
  ]

  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mb-20">
          {/* Left side - Bold headline */}
          <div className="lg:max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              FIDERE TRUST LIMITED
            </h2>
            <div className="mt-6 text-sm text-gray-600 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[#2563EB] flex-shrink-0" />
                <p>RM 32, 1/F, Kaiser Estate Phase 3, KT Hok Yuen Street, Hung Hom, Hong Kong</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#2563EB] flex-shrink-0" />
                <a href="mailto:info@fideretrust.com" className="hover:text-indigo-600 transition-colors">
                  info@fideretrust.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#2563EB] flex-shrink-0" />
                <a href="tel:+85251286593" className="hover:text-indigo-600 transition-colors">
                  +852 5128 6593
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Two columns of links */}
          <div className="flex gap-16 md:gap-24">
            {/* First column */}
            <ul className="space-y-3">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-900 underline underline-offset-4 hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Second column */}
            <ul className="space-y-3">
              {rightLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-900 underline underline-offset-4 hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 pt-8 border-t border-gray-200">
          {/* Copyright and Privacy */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <span>&copy; {new Date().getFullYear()} FIDERE TRUST LIMITED</span>
            <span>|</span>
            <Link href={localePath("/privacy")} className="text-indigo-600 hover:text-indigo-700 transition-colors">
              {language === "ar" ? "سياسة الخصوصية" : language === "zh-CN" ? "隐私政策" : language === "zh-TW" ? "隱私政策" : "Privacy Policy"}
            </Link>
            <span>|</span>
            <Link href={localePath("/disclaimer")} className="text-indigo-600 hover:text-indigo-700 transition-colors">
              {language === "ar" ? "إخلاء المسؤولية" : language === "zh-CN" ? "免责条款" : language === "zh-TW" ? "免責條款" : "Disclaimer"}
            </Link>
            <span>|</span>
            <Link href={localePath("/terms")} className="text-indigo-600 hover:text-indigo-700 transition-colors">
              {language === "ar" ? "الشروط والأحكام" : language === "zh-CN" ? "条款与细则" : language === "zh-TW" ? "條款與細則" : "Terms & Conditions"}
            </Link>
            <span>|</span>
            <Link href={localePath("/regulatory-status")} className="text-indigo-600 hover:text-indigo-700 transition-colors">
              {language === "ar" ? "الوضع التنظيمي" : language === "zh-CN" ? "监管与牌照" : language === "zh-TW" ? "監管與牌照" : "Regulatory Status"}
            </Link>
            <span>|</span>
            <Link href={localePath("/compliance-kyc")} className="text-indigo-600 hover:text-indigo-700 transition-colors">
              {language === "ar" ? "الامتثال و KYC" : language === "zh-CN" ? "合规与KYC" : language === "zh-TW" ? "合規與KYC" : "Compliance & KYC"}
            </Link>
            <span>|</span>
            <Link href={localePath("/risk-fees")} className="text-indigo-600 hover:text-indigo-700 transition-colors">
              {language === "ar" ? "المخاطر والرسوم" : language === "zh-CN" ? "风险与费用" : language === "zh-TW" ? "風險與費用" : "Risk & Fees"}
            </Link>
          </div>
        </div>


      </div>
    </footer>
  )
}
