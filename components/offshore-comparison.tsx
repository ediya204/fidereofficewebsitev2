"use client"

import { useLanguage } from "@/contexts/language-context"
import { Check, X } from "lucide-react"

const translations = {
  en: {
    label: "COMPARISON",
    title: "Trust Account vs Bank Account",
    subtitle: "Discover why a Trust Account offers superior benefits for your wealth protection.",
    trustAccount: "Trust Account",
    bankAccount: "Bank Account",
    rows: [
      {
        category: "Legal Title",
        trust: "Trustee (Trust company)",
        bank: "Bank",
      },
      {
        category: "Confidentiality",
        trust: "High. Trust is a non-disclosure agreement.",
        bank: "Low. Can be accessed by judiciary.",
      },
      {
        category: "Autonomy",
        trust: "High. Only executes settlor's instructions.",
        bank: "Low. Banks can use deposits for lending.",
      },
      {
        category: "Risk Isolation",
        trust: "Cannot freeze client assets.",
        bank: "Can freeze accounts for various reasons.",
      },
      {
        category: "Sustainability",
        trust: "Eternal. Trusts can exist indefinitely.",
        bank: "Non sustainable. Frozen upon accidents.",
      },
      {
        category: "Privacy",
        trust: "High. Only high court can request access.",
        bank: "Low. Can be queried with reason.",
      },
      {
        category: "Flexibility",
        trust: "Accepts cash, properties, metals, digital assets.",
        bank: "Mainly accepts cash.",
      },
    ],
  },
  "zh-CN": {
    label: "对比",
    title: "信托账户 vs 银行账户",
    subtitle: "了解信托账户为何能为您的财富保护提供更优越的优势。",
    trustAccount: "信托账户",
    bankAccount: "银行账户",
    rows: [
      { category: "法律所有权", trust: "受托人（信托公司）", bank: "银行" },
      { category: "保密性", trust: "高。信托是保密协议。", bank: "低。可被司法机关访问。" },
      { category: "自主权", trust: "高。只执行委托人指示。", bank: "低。银行可将存款用于贷款。" },
      { category: "风险隔离", trust: "无权冻结客户资产。", bank: "可因多种原因冻结账户。" },
      { category: "可持续性", trust: "永续。信托可无限期存在。", bank: "不可持续。发生意外时被冻结。" },
      { category: "隐私性", trust: "高。只有高等法院可要求访问。", bank: "低。如有理由可被查询。" },
      { category: "灵活性", trust: "接受现金、房产、贵金属、数字资产。", bank: "主要接受现金。" },
    ],
  },
  "zh-TW": {
    label: "對比",
    title: "信託賬戶 vs 銀行賬戶",
    subtitle: "了解信託賬戶為何能為您的財富保護提供更優越的優勢。",
    trustAccount: "信託賬戶",
    bankAccount: "銀行賬戶",
    rows: [
      { category: "法律所有權", trust: "受託人（信託公司）", bank: "銀行" },
      { category: "保密性", trust: "高。信託是保密協議。", bank: "低。可被司法機關訪問。" },
      { category: "自主權", trust: "高。只執行委託人指示。", bank: "低。銀行可將存款用於貸款。" },
      { category: "風險隔離", trust: "無權凍結客戶資產。", bank: "可因多種原因凍結賬戶。" },
      { category: "可持續性", trust: "永續。信託可無限期存在。", bank: "不可持續。發生意外時被凍結。" },
      { category: "隱私性", trust: "高。只有高等法院可要求訪問。", bank: "低。如有理由可被查詢。" },
      { category: "靈活性", trust: "接受現金、房產、貴金屬、數字資產。", bank: "主要接受現金。" },
    ],
  },
}

export function OffshoreComparison() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C9A961]" />
            <span className="text-[#C9A961] text-sm font-medium tracking-widest uppercase">{t.label}</span>
            <div className="w-8 h-[1px] bg-[#C9A961]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a2e] mb-4">{t.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-gray-400 font-medium text-sm"></th>
                <th className="p-4 text-center">
                  <div className="bg-[#6366F1] text-white font-semibold py-3 px-6 rounded-t-xl">{t.trustAccount}</div>
                </th>
                <th className="p-4 text-center">
                  <div className="bg-gray-100 text-gray-500 font-semibold py-3 px-6 rounded-t-xl">{t.bankAccount}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-[#1a1a2e] text-sm">{row.category}</td>
                  <td className="p-4">
                    <div className="flex items-start gap-3 bg-[#6366F1]/5 border-l-2 border-[#6366F1] p-4 rounded-r-lg">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{row.trust}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm">{row.bank}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
