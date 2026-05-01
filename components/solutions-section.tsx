"use client"

import { TrendingUp, FileText } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

const offshoreAccounts = [
  { name: "Hong Kong Account", id: "002-013-0567545-001", amount: "2,050,000 USD", color: "#2563EB" },
  { name: "US Account", id: "002-013-0367545-002", amount: "275,000 USD", color: "#3B82F6" },
  { name: "Singapore Account", id: "002-013-0867545-003", amount: "840,065 USD", color: "#60A5FA" },
  { name: "Digital Wallet", id: "002-013-0567545-004", amount: "5,994,400 USD", color: "#93C5FD" },
]

export function SolutionsSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-[#2563EB] mb-3 block">{t.homeSolutions.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {language === "zh-CN"
              ? "一个平台，多种解决方案"
              : language === "zh-TW"
                ? "一個平台，多種解決方案"
                : "One Platform, Multiple Solutions"}
          </h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            {language === "zh-CN"
              ? "深入了解我们提供的全方位服务，确保您的财务安全和增长。从离岸账户到资产关联信用卡，我们的平台提供多样化的解决方案，满足您独特的财务需求。"
              : language === "zh-TW"
                ? "深入了解我們提供的全方位服務，確保您的財務安全和增長。從離岸賬戶到資產關聯信用卡，我們的平台提供多樣化的解決方案，滿足您獨特的財務需求。"
                : "Explore our comprehensive services designed to ensure your financial security and growth. From offshore accounts to asset-linked credit cards, our platform offers diverse solutions to meet your unique financial needs."}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Offshore Accounts Card */}
          <div className="bg-gray-50 rounded-3xl p-8 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              {language === "zh-CN" ? "离岸账户" : language === "zh-TW" ? "離岸賬戶" : "Offshore Accounts"}
            </h3>
            <p className="text-gray-600 text-sm text-center mb-8 max-w-md mx-auto">
              {language === "zh-CN"
                ? "利用我们的离岸账户，安全分散您的财富，这些账户旨在提供财务灵活性和全球准入。享受资产保护、税务优化和更高级别的隐私保护等优势。"
                : language === "zh-TW"
                  ? "利用我們的離岸賬戶，安全分散您的財富，這些賬戶旨在提供財務靈活性和全球准入。享受資產保護、稅務優化和更高級別的隱私保護等優勢。"
                  : "Securely diversify your wealth with our offshore accounts, designed to provide financial flexibility and global access."}
            </p>

            {/* Account List UI Mockup */}
            <div className="bg-white rounded-2xl p-6 shadow-sm relative">
              {/* Decorative blue arc */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-32 border-4 border-[#2563EB] border-r-0 rounded-l-full opacity-60" />

              <div className="space-y-4">
                {offshoreAccounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: account.color }} />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{account.name}</p>
                        <p className="text-xs text-gray-400">{account.id}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{account.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - 3 Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Earnings & Yields */}
          <div className="bg-gray-50 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              {language === "zh-CN" ? "收益与收益率" : language === "zh-TW" ? "收益與收益率" : "Earnings & Yields"}
            </h3>
            <p className="text-gray-600 text-xs text-center mb-6">
              {language === "zh-CN"
                ? "利用我们量身定制的投资方案，实现您的财务增长最大化。"
                : language === "zh-TW"
                  ? "利用我們量身定制的投資方案，實現您的財務增長最大化。"
                  : "Maximize your financial growth with our tailored investment solutions."}
            </p>

            {/* Lending UI Mockup */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">GALAXY</p>
                  <p className="text-xs text-gray-500">ETH Lending</p>
                </div>
                <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Lending</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <div>
                  <p className="text-xs text-gray-500">APY</p>
                  <p className="text-lg font-bold text-[#2563EB]">4.58%</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Tenor</p>
                  <p className="text-lg font-bold text-gray-900">90 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Invoice Payment */}
          <div className="bg-gray-50 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              {language === "zh-CN" ? "全球发票支付" : language === "zh-TW" ? "全球發票支付" : "Global Invoice Payment"}
            </h3>
            <p className="text-gray-600 text-xs text-center mb-6">
              {language === "zh-CN"
                ? "使用我们的全球发票支付服务，简化您的财务管理。"
                : language === "zh-TW"
                  ? "使用我們的全球發票支付服務，簡化您的財務管理。"
                  : "Simplify your financial management with our global invoice payment service."}
            </p>

            {/* Invoice Upload UI Mockup */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-medium text-gray-700">Upload invoice</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-3">PNG, JPG, PDF format. Max 5 files, 5MB each.</p>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-400">Upload Invoice</p>
                  </div>
                </div>
                <div className="flex-1 bg-blue-50 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-700 mb-2">Extracting invoice details</p>
                  <div className="space-y-1">
                    <div className="h-2 bg-blue-200 rounded-full w-full" />
                    <div className="h-2 bg-blue-200 rounded-full w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Exchange */}
          <div className="bg-gray-50 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              {language === "zh-CN" ? "资产交换" : language === "zh-TW" ? "資產交換" : "Asset Exchange"}
            </h3>
            <p className="text-gray-600 text-xs text-center mb-6">
              {language === "zh-CN"
                ? "借助我们安全的平台，轻松交换和管理您的数字和传统资产。"
                : language === "zh-TW"
                  ? "借助我們安全的平台，輕鬆交換和管理您的數字和傳統資產。"
                  : "Easily exchange and manage your digital and traditional assets on our secure platform."}
            </p>

            {/* Exchange UI Mockup */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-2 mb-4">
                <button className="flex-1 bg-[#2563EB] text-white text-xs py-2 rounded-lg font-medium">Buy</button>
                <button className="flex-1 bg-gray-100 text-gray-600 text-xs py-2 rounded-lg font-medium">Sell</button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">You Buy</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                        B
                      </div>
                      <span className="text-sm font-medium">BTC</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-gray-900">2</span>
                </div>
                <div className="flex justify-between items-center border-t pt-3">
                  <div>
                    <p className="text-xs text-gray-500">You Pay</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                        $
                      </div>
                      <span className="text-sm font-medium">USD</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-gray-900">125,820</span>
                    <p className="text-[10px] text-gray-400">Balance: 1,550,380.2 USD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
