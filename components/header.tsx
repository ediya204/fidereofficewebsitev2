"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Search, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation, type Language } from "@/lib/translations"

interface HeaderProps {
  forceDarkText?: boolean
}

const languageOptions: { label: string; language: Language; locale: string }[] = [
  { label: "EN", language: "en", locale: "en" },
  { label: "繁體", language: "zh-TW", locale: "tc" },
  { label: "简体", language: "zh-CN", locale: "cn" },
]

export function Header({ forceDarkText = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const { language, locale, setLanguage } = useLanguage()
  const t = getTranslation(language)
  const solutionsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const useDarkText = forceDarkText || scrolled
  const headerClass = useDarkText ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
  const primaryTextClass = useDarkText ? "!text-[#1a1a2e]" : "!text-white"
  const mutedTextClass = useDarkText ? "!text-[#1a1a2e]/70 hover:!text-[#1a1a2e]" : "!text-white/70 hover:!text-white"
  const hoverTextClass = useDarkText ? "hover:!text-[#2563EB]" : "hover:!text-white/80"

  const localePath = (path: string) => `/${locale}${path}`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) {
        clearTimeout(solutionsTimeoutRef.current)
      }
    }
  }, [])

  const handleSolutionsMenuEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current)
    }
    setSolutionsMenuOpen(true)
  }

  const handleSolutionsMenuLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsMenuOpen(false)
    }, 150)
  }

  const solutionsItems = [
    {
      title: t.nav.highNetWorth || "High Net Worth Individuals",
      description: t.nav.highNetWorthDesc || "",
      href: localePath("/personal-trust"),
    },
    {
      title: t.nav.corporateClients || "Corporate Clients",
      description: t.nav.corporateTreasury || "",
      href: localePath("/corporate-clients"),
    },
    {
      title: t.nav.offshoreAccounts || "Offshore Accounts",
      description: t.nav.offshoreAccountsDesc || "",
      href: localePath("/offshore-accounts"),
    },
    {
      title: t.nav.wealthManagement || "Wealth Management",
      description: t.nav.wealthManagementDesc || "",
      href: localePath("/wealth-management"),
    },
    {
      title: t.nav.familyOffices || "Family Offices",
      description: t.nav.familyOfficesDesc || "",
      href: localePath("/family-office"),
    },
    {
      title: language === "en" ? "Global Invoice Payment" : language === "zh-CN" ? "全球账单支付" : "全球帳單支付",
      description: language === "en" ? "Professional bill payment services worldwide." : language === "zh-CN" ? "专业的全球账单支付服务。" : "專業的全球帳單支付服務。",
      href: localePath("/global-invoice-payment"),
    },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={localePath("/")} className="flex items-center">
          <span className={`text-2xl font-bold ${primaryTextClass}`}>FIDERE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Solutions Mega Menu */}
          <div className="relative" onMouseEnter={handleSolutionsMenuEnter} onMouseLeave={handleSolutionsMenuLeave}>
            <button
              className={`flex items-center gap-1 text-sm font-medium transition ${
                solutionsMenuOpen
                  ? useDarkText ? "!text-[#2563EB]" : "!text-white"
                  : `${primaryTextClass} ${hoverTextClass}`
              }`}
            >
              {t.nav.solutions}
              <ChevronDown className={`w-4 h-4 transition-transform ${solutionsMenuOpen ? "rotate-180" : ""}`} />
              {solutionsMenuOpen && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB]"></span>}
            </button>
          </div>

          <Link
            href={localePath("/about")}
            className={`text-sm font-medium transition ${primaryTextClass} ${hoverTextClass}`}
          >
            FIDERE
          </Link>
          <Link
            href={localePath("/contact")}
            className={`text-sm font-medium transition ${primaryTextClass} ${hoverTextClass}`}
          >
            {t.nav.contactUs}
          </Link>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 text-sm">
            {languageOptions.map((option, index) => (
              <div key={option.locale} className="flex items-center gap-2">
                {index > 0 && <span className={useDarkText ? "!text-[#1a1a2e]/30" : "!text-white/60"}>|</span>}
                <button
                  onClick={() => setLanguage(option.language)}
                  className={`transition ${
                    locale === option.locale ? `${primaryTextClass} font-medium` : mutedTextClass
                  }`}
                >
                  {option.label}
                </button>
              </div>
            ))}
          </div>
          <button className={`transition ${primaryTextClass} ${hoverTextClass}`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${primaryTextClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Solutions Mega Menu Dropdown */}
      {solutionsMenuOpen && (
        <div
          className="fixed top-16 left-1/2 -translate-x-1/2 w-[calc(100%-80px)] max-w-6xl bg-white shadow-xl z-50 rounded-2xl"
          onMouseEnter={handleSolutionsMenuEnter}
          onMouseLeave={handleSolutionsMenuLeave}
        >
          <div className="p-8">
            <div className="flex gap-12">
              {/* Left side - Image card */}
              <div className="w-72 flex-shrink-0">
                <p className="text-2xl font-bold text-[#1a1a2e] tracking-wide mb-2">{t.nav.solutions?.toUpperCase()}</p>
                <p className="text-sm text-gray-500 mb-4">{t.nav.solutionsOverview}</p>
                <Link href={localePath("/solutions")} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                      src="/business-solutions-consulting-professional-meeting.jpg"
                      alt="Solutions"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <p className="text-sm text-gray-600 mt-4">{t.nav.solutionsDesc}</p>
                <Link
                  href={localePath("/solutions")}
                  className="inline-flex items-center gap-1 text-[#2563EB] text-sm font-medium mt-3 hover:underline"
                >
                  {t.nav.learnMore} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right side - Menu items */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {solutionsItems.map((item) => (
                    <Link key={item.title} href={item.href} className="group">
                      <p className="text-lg font-bold text-[#1a1a2e] group-hover:text-[#2563EB] transition">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-black/95 z-40 flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4">
            <Link
              href={localePath("/")}
              className="text-2xl font-bold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              FIDERE
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-white/80 hover:text-white transition">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white/80 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 px-6 py-8 overflow-y-auto">
            <div className="flex flex-col gap-1">
              {/* Solutions Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-3 text-white font-medium text-2xl"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                >
                  {t.nav.solutions}
                  <ChevronDown
                    className={`w-5 h-5 text-white/60 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-2 mb-4">
                    {solutionsItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="py-2 text-white/70 hover:text-white text-lg transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* FIDERE Link */}
              <Link
                href={localePath("/about")}
                className="py-3 text-white font-medium text-2xl hover:text-white/80 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                FIDERE
              </Link>
            </div>
          </div>

          <div className="px-6 pb-8 pt-4 border-t border-white/10">
            {/* Language Switcher */}
            <div className="flex items-center gap-6">
              {languageOptions.map((option) => (
                <button
                  key={option.locale}
                  onClick={() => setLanguage(option.language)}
                  className={`text-base transition ${
                    locale === option.locale ? "text-white font-semibold" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
