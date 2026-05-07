"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, Globe, ShieldCheck, User, Users } from "@/components/ui/app-icon"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const translations = {
  en: {
    portal: "FIDERE Client Portal",
    title: "Choose your account type",
    description: "Select the account profile that best matches your onboarding needs.",
    brandTitle: "Begin your wealth management journey",
    brandDescription:
      "FIDERE Trust provides professional, secure and efficient trust asset management services for long-term wealth stewardship.",
    languageLabel: "Language",
    progress: ["Account type", "Verification", "Activation"],
    options: [
      {
        title: "Personal Account",
        description: "For individual clients seeking personal trust and asset management services.",
        details: ["Individual verification", "Personal asset management", "Streamlined onboarding"],
        href: "/personal-kyc-guide",
      },
      {
        title: "Corporate Account",
        description: "For companies, family offices and institutional structures that need organization-level access.",
        details: ["Entity verification", "Corporate asset management", "Multi-user permissions"],
        href: "/kyc-guide",
      },
    ],
    assurance: ["Regulated trust services", "Encrypted document handling", "Dedicated onboarding support"],
    footerLinks: ["Terms", "Privacy", "Risk Disclosure"],
    copyright: "2026 Fidere Trust Limited. All rights reserved.",
  },
  "zh-CN": {
    portal: "FIDERE 客户门户",
    title: "选择您的账户类型",
    description: "请选择最符合您开户与服务需求的账户类型。",
    brandTitle: "开启您的财富管理之旅",
    brandDescription: "Fidere Trust 提供专业、安全、高效的信托资产管理服务，助您实现财富的稳健增值与传承。",
    languageLabel: "语言",
    progress: ["账户类型", "身份认证", "账户激活"],
    options: [
      {
        title: "个人账户",
        description: "适合个人客户使用，提供个人信托及资产管理服务。",
        details: ["个人身份认证", "个人资产管理", "快速开户流程"],
        href: "/personal-kyc-guide",
      },
      {
        title: "企业账户",
        description: "适合企业、家族办公室及机构架构使用，提供机构级账户服务。",
        details: ["企业身份认证", "企业资产管理", "多用户权限管理"],
        href: "/kyc-guide",
      },
    ],
    assurance: ["受监管信托服务", "加密文件处理", "专属开户支持"],
    footerLinks: ["使用条款", "隐私政策", "风险披露"],
    copyright: "2026 Fidere Trust Limited. 保留所有权利。",
  },
  "zh-TW": {
    portal: "FIDERE 客戶門戶",
    title: "選擇您的賬戶類型",
    description: "請選擇最符合您開戶與服務需求的賬戶類型。",
    brandTitle: "開啟您的財富管理之旅",
    brandDescription: "Fidere Trust 提供專業、安全、高效的信託資產管理服務，助您實現財富的穩健增值與傳承。",
    languageLabel: "語言",
    progress: ["賬戶類型", "身份認證", "賬戶啟用"],
    options: [
      {
        title: "個人賬戶",
        description: "適合個人客戶使用，提供個人信託及資產管理服務。",
        details: ["個人身份認證", "個人資產管理", "快速開戶流程"],
        href: "/personal-kyc-guide",
      },
      {
        title: "企業賬戶",
        description: "適合企業、家族辦公室及機構架構使用，提供機構級賬戶服務。",
        details: ["企業身份認證", "企業資產管理", "多用戶權限管理"],
        href: "/kyc-guide",
      },
    ],
    assurance: ["受監管信託服務", "加密文件處理", "專屬開戶支持"],
    footerLinks: ["使用條款", "私隱政策", "風險披露"],
    copyright: "2026 Fidere Trust Limited. 保留所有權利。",
  },
}

const accountIcons = [User, Building2]
const languageOptions = [
  { label: "EN", language: "en" as const },
  { label: "繁", language: "zh-TW" as const },
  { label: "简", language: "zh-CN" as const },
]

export function AccountTypeSelection() {
  const { language, locale, setLanguage } = useLanguage()
  const t = translations[language] || translations.en
  const localePath = (path: string) => `/${locale}${path}`

  return (
    <main className="min-h-screen bg-white text-[#121826] lg:grid lg:grid-cols-[minmax(420px,1fr)_minmax(560px,1fr)]">
      <section className="relative min-h-[42vh] overflow-hidden bg-[#111827] lg:min-h-screen">
        <Image
          src="/hong-kong-peak-view.jpg"
          alt="Hong Kong skyline"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#07111f]/58" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.08)_0%,rgba(7,17,31,0.24)_42%,rgba(7,17,31,0.82)_100%)]" />

        <div className="relative z-10 flex min-h-[42vh] flex-col justify-end px-6 py-10 sm:px-10 lg:min-h-screen lg:px-12 lg:py-16">
          <div className="mb-7 h-1 w-14 rounded-full bg-[#18a0fb]" />
          <h1 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t.brandTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/82 sm:text-lg">{t.brandDescription}</p>
        </div>
      </section>

      <section className="flex min-h-screen flex-col bg-white">
        <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <Link href={localePath("/")} className="text-2xl font-bold tracking-tight text-[#121826]">
            FIDERE
          </Link>

          <div className="flex items-center gap-2 rounded-full border border-[#e4e9f2] bg-white px-2 py-1 shadow-[0_10px_30px_rgba(17,24,39,0.06)]">
            <Globe className="h-4 w-4 text-[#41516a]" weight="regular" />
            <span className="sr-only">{t.languageLabel}</span>
            {languageOptions.map((option) => (
              <button
                key={option.language}
                type="button"
                onClick={() => setLanguage(option.language)}
                className={cn(
                  "h-7 rounded-full px-2.5 text-xs font-semibold transition-colors",
                  language === option.language ? "bg-[#121826] text-white" : "text-[#64748d] hover:bg-[#f4f7fb]",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-1 items-center px-6 py-8 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-[640px]">
            <div className="mb-8 flex items-center gap-3">
              {t.progress.map((item, index) => (
                <div key={item} className="flex min-w-0 flex-1 items-center gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                      index === 0
                        ? "border-[#4357ef] bg-[#4357ef] text-white"
                        : "border-[#d8e0ec] bg-white text-[#8795aa]",
                    )}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={cn(
                      "hidden truncate text-sm font-semibold sm:block",
                      index === 0 ? "text-[#121826]" : "text-[#8795aa]",
                    )}
                  >
                    {item}
                  </span>
                  {index < t.progress.length - 1 && <div className="h-px flex-1 bg-[#e8edf5]" />}
                </div>
              ))}
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#18a0fb]">{t.portal}</p>
            <h2 className="text-4xl font-semibold leading-tight text-[#121826] sm:text-5xl">{t.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#64748d]">{t.description}</p>

            <div className="mt-8 space-y-4">
              {t.options.map((option, index) => {
                const Icon = accountIcons[index]

                return (
                  <Link
                    key={option.title}
                    href={localePath(option.href)}
                    className="group block rounded-[8px] border border-[#dce4ef] bg-white p-5 shadow-[0_16px_48px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4357ef] hover:shadow-[0_24px_70px_rgba(67,87,239,0.14)]"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] border border-[#d7e7ff] bg-[#f6fbff] text-[#1297ff] transition-colors group-hover:border-[#4357ef]/30 group-hover:bg-[#4357ef] group-hover:text-white">
                        <Icon className="h-7 w-7" weight="duotone" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold text-[#121826]">{option.title}</h3>
                          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4f7fb] text-[#4357ef] transition-colors group-hover:bg-[#4357ef] group-hover:text-white">
                            <ArrowRight className="h-4 w-4" weight="bold" />
                          </div>
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-[#64748d]">{option.description}</p>
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                          {option.details.map((detail) => (
                            <span key={detail} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#41516a]">
                              <CheckCircle2 className="h-4 w-4 text-[#19a973]" weight="fill" />
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.assurance.map((item, index) => {
                const Icon = [ShieldCheck, Users, CheckCircle2][index]

                return (
                  <div key={item} className="flex items-center gap-3 rounded-[8px] border border-[#eef2f7] bg-[#fbfcfe] px-4 py-3">
                    <Icon className="h-5 w-5 text-[#4357ef]" weight="duotone" />
                    <span className="text-sm font-semibold leading-5 text-[#41516a]">{item}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <footer className="px-6 pb-8 text-center text-xs text-[#738198] sm:px-10 lg:px-12">
          <div className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href={localePath("/terms")} className="text-[#738198] hover:text-[#4357ef]">
              {t.footerLinks[0]}
            </Link>
            <Link href={localePath("/privacy")} className="text-[#738198] hover:text-[#4357ef]">
              {t.footerLinks[1]}
            </Link>
            <Link href={localePath("/risk-fees")} className="text-[#738198] hover:text-[#4357ef]">
              {t.footerLinks[2]}
            </Link>
          </div>
          <p>© {t.copyright}</p>
        </footer>
      </section>
    </main>
  )
}
