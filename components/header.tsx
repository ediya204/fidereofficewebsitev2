"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Search } from "@/components/ui/app-icon"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation, type Language } from "@/lib/translations"

interface HeaderProps {
  forceDarkText?: boolean
}

const languageOptions: { label: string; language: Language; locale: string }[] = [
  { label: "English", language: "en", locale: "en" },
  { label: "繁體", language: "zh-TW", locale: "tc" },
  { label: "简体", language: "zh-CN", locale: "cn" },
  { label: "العربية", language: "ar", locale: "ar" },
]

const languageAriaLabel: Record<Language, string> = {
  en: "Select language",
  "zh-CN": "选择语言",
  "zh-TW": "選擇語言",
  ar: "اختر اللغة",
}

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
  const headerClass = useDarkText ? "bg-white/95 backdrop-blur-md py-2 stripe-shadow" : "bg-transparent py-4"
  const primaryTextClass = useDarkText ? "!text-[#07072d]" : "!text-white"
  const hoverTextClass = useDarkText ? "hover:!text-[#4357ef]" : "hover:!text-white/80"

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
      title:
        language === "ar"
          ? "دفع الفواتير العالمية"
          : language === "zh-CN"
            ? "全球账单支付"
            : language === "zh-TW"
              ? "全球帳單支付"
              : "Global Invoice Payment",
      description:
        language === "ar"
          ? "خدمات احترافية لسداد الفواتير عالمياً."
          : language === "zh-CN"
            ? "专业的全球账单支付服务。"
            : language === "zh-TW"
              ? "專業的全球帳單支付服務。"
              : "Professional bill payment services worldwide.",
      href: localePath("/global-invoice-payment"),
    },
  ]

  const primaryNavItems = [
    {
      label: language === "ar" ? "من نحن" : language === "zh-CN" ? "关于我们" : language === "zh-TW" ? "關於我們" : "About",
      href: localePath("/about"),
    },
  ]

  const currentLanguageOption = languageOptions.find((option) => option.locale === locale) ?? languageOptions[0]

  const handleLanguageSelect = (nextLocale: string, closeMobileMenu = false) => {
    const nextLanguage = languageOptions.find((option) => option.locale === nextLocale)?.language
    if (!nextLanguage) return

    setLanguage(nextLanguage)
    if (closeMobileMenu) {
      setMobileMenuOpen(false)
    }
  }

  const renderLanguageSwitcher = (variant: "desktop" | "mobile") => {
    const isMobile = variant === "mobile"
    const triggerClass = isMobile
      ? "flex w-full items-center justify-between rounded-md border border-white/15 bg-white/5 px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
      : `flex h-9 items-center gap-2 rounded-md border px-3 text-sm font-medium transition ${
          useDarkText
            ? "border-[#07072d]/15 bg-white/80 text-[#07072d] hover:border-[#4357ef]/35 hover:text-[#4357ef]"
            : "border-white/35 bg-white/10 text-white hover:bg-white/15"
        }`

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={triggerClass} aria-label={languageAriaLabel[language]}>
            <span>{currentLanguageOption.label}</span>
            <ChevronDown className="h-4 w-4 opacity-70" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={isMobile ? "start" : "end"}
          sideOffset={8}
          className="min-w-36 rounded-md border-[#d8dde8] bg-white p-1.5 text-[#07072d] shadow-lg"
        >
          <DropdownMenuRadioGroup
            value={locale}
            onValueChange={(nextLocale) => handleLanguageSelect(nextLocale, isMobile)}
          >
            {languageOptions.map((option) => (
              <DropdownMenuRadioItem
                key={option.locale}
                value={option.locale}
                className="cursor-pointer rounded px-3 py-2 pl-8 text-sm text-[#232937] focus:bg-[#f2f5fb] focus:text-[#07072d] data-[state=checked]:font-semibold"
              >
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

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
        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary navigation">
          {/* Solutions Mega Menu */}
          <div className="relative" onMouseEnter={handleSolutionsMenuEnter} onMouseLeave={handleSolutionsMenuLeave}>
            <Link
              href={localePath("/services")}
              className={`flex items-center gap-1 text-sm font-medium transition ${
                solutionsMenuOpen
                  ? useDarkText ? "!text-[#4357ef]" : "!text-white"
                  : `${primaryTextClass} ${hoverTextClass}`
              }`}
            >
              {t.nav.solutions}
              <ChevronDown className={`w-4 h-4 transition-transform ${solutionsMenuOpen ? "rotate-180" : ""}`} />
              {solutionsMenuOpen && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4357ef]"></span>}
            </Link>
          </div>

          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${primaryTextClass} ${hoverTextClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          {renderLanguageSwitcher("desktop")}
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
          className="fixed top-16 left-1/2 -translate-x-1/2 w-[calc(100%-80px)] max-w-6xl bg-white z-50 rounded-md stripe-shadow"
          onMouseEnter={handleSolutionsMenuEnter}
          onMouseLeave={handleSolutionsMenuLeave}
        >
          <div className="p-8">
            <div className="flex gap-12">
              {/* Left side - Image card */}
              <div className="w-72 flex-shrink-0">
                <p className="text-2xl font-semibold text-[#07072d] tracking-wide mb-2">{t.nav.solutions?.toUpperCase()}</p>
                <p className="text-sm text-gray-500 mb-4">{t.nav.solutionsOverview}</p>
                <Link href={localePath("/solutions")} className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
                      alt="Family and warm lifestyle planning"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <p className="text-sm text-gray-600 mt-4">{t.nav.solutionsDesc}</p>
              </div>

              {/* Right side - Menu items */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {solutionsItems.map((item) => (
                    <Link key={item.title} href={item.href} className="group">
                      <p className="text-lg font-semibold text-[#07072d] group-hover:text-[#4357ef] transition">
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
        <div className="mobile-menu-overlay md:hidden fixed inset-y-0 left-0 right-auto top-0 z-40 flex h-screen w-screen max-w-none flex-col bg-black/95">
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

              {primaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-white font-medium text-2xl hover:text-white/80 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-6 border-t border-white/10 pt-6">
                {/* Language Switcher */}
                {renderLanguageSwitcher("mobile")}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
