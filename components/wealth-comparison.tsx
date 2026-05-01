"use client"

import { useLanguage } from "@/contexts/language-context"

const translations = {
  en: {
    badge: "Comparison Analysis",
    title: "Trust Account Advantages: Beyond Traditional Banking",
    subtitle: "Discover why trust accounts offer superior advantages in wealth management and asset protection",
    comparisonItem: "Comparison Item",
    trustAccount: "Trust Account",
    bankAccount: "Bank Account",
    data: [
      {
        category: "Legal Ownership",
        trust: "Trustee (Trust Company)",
        bank: "Bank Account",
      },
      {
        category: "Confidentiality",
        trust: "High. Trust is a confidential agreement.",
        bank: "Low. Can be accessed by judicial authorities.",
        trustHighlight: true,
      },
      {
        category: "Autonomy",
        trust: "High. Trust company only executes settlor's instructions.",
        bank: "Low. Banks can use customer deposits for loans, with default risk if poorly managed.",
        trustHighlight: true,
      },
      {
        category: "Risk",
        trust:
          "Risk isolation. Trust cannot freeze assets in client's trust account. Unless illegal activities are involved, creditors are unlikely to claim assets in the trust.",
        bank: "No risk isolation. Banks can freeze accounts for various reasons. Creditors can also make claims, clients cannot achieve risk isolation.",
        trustHighlight: true,
      },
      {
        category: "Sustainability",
        trust:
          "Perpetual. In Hong Kong, trusts can exist indefinitely, allowing for multi-generational planning, capital protection, and longer-term strategic planning.",
        bank: "Not sustainable. If client passes away unexpectedly, bank account will be frozen until executor applies for probate. After lengthy process, executor determines asset management based on will.",
        trustHighlight: true,
      },
      {
        category: "Privacy",
        trust:
          "High. Typically, only the High Court can request access to trust account information and assets. Others, including beneficiaries, cannot access any trust asset information.",
        bank: "Low. With valid reasons, account information and asset flows will be investigated.",
        trustHighlight: true,
      },
      {
        category: "Flexibility",
        trust:
          "High. Trust accounts accept not only cash, but also overseas properties, precious metals, digital assets, etc.",
        bank: "Low. Banks primarily accept cash, very unlikely to accept digital assets.",
        trustHighlight: true,
      },
      {
        category: "Services",
        trust:
          "Diversified. Trust accounts offer more global services such as offshore accounts, global investments, global payments, global asset transfers, etc.",
        bank: "Limited. Bank accounts only provide local banking services. Investment options limited to bank's own products.",
        trustHighlight: true,
      },
    ],
  },
  "zh-CN": {
    badge: "对比分析",
    title: "信托账户优势：超越传统银行",
    subtitle: "了解为何信托账户在财富管理和资产保护方面具有卓越优势",
    comparisonItem: "比较项目",
    trustAccount: "信托账户",
    bankAccount: "银行账户",
    data: [
      {
        category: "法律所有权",
        trust: "受托人（信托公司）",
        bank: "银行账户",
      },
      {
        category: "保密性",
        trust: "高。信托是一种保密协议。",
        bank: "低。可被司法机构查阅。",
        trustHighlight: true,
      },
      {
        category: "自主权",
        trust: "高。信托公司仅执行委托人的指示。",
        bank: "低。银行有权使用客户存款进行贷款，若经营不善则存在违约风险。",
        trustHighlight: true,
      },
      {
        category: "风险",
        trust: "风险隔离。信托无权冻结客户信托账户中的资产。除非涉及违法活动，债权人不太可能有权主张信托中的资产。",
        bank: "无风险隔离。银行有权因各种原因冻结账户。债权人也有权从中主张，客户无法实现风险隔离。",
        trustHighlight: true,
      },
      {
        category: "可持续性",
        trust: "永久。在香港，信托可以无限期存在，因此可用于规划多代人的未来，保护资本并允许更长期、更具战略性的规划。",
        bank: "不可持续。若客户发生意外，银行账户将被冻结，直至遗嘱执行人向法院申请遗嘱认证。经过漫长的过程后，执行人将根据遗嘱确定如何管理银行账户中的资产。",
        trustHighlight: true,
      },
      {
        category: "隐私",
        trust:
          "高。通常情况下，只有高等法院有权要求查阅信托账户信息和资产。包括受益人在内的其他人无权查阅任何信托资产信息。",
        bank: "低。如有理由，账户信息和资产去向将被查询。",
        trustHighlight: true,
      },
      {
        category: "灵活性",
        trust: "高。信托账户不仅接受现金，还接受海外房产、贵金属、数字资产等。",
        bank: "低。银行主要接受现金，极不可能接受数字资产。",
        trustHighlight: true,
      },
      {
        category: "服务",
        trust: "多样化。信托账户可提供更多全球服务，如离岸账户、全球投资、全球支付、全球资产转移等。",
        bank: "有限。银行账户仅提供本地银行服务。投资选择仅限于银行自有产品。",
        trustHighlight: true,
      },
    ],
  },
  "zh-TW": {
    badge: "對比分析",
    title: "信託賬戶優勢：超越傳統銀行",
    subtitle: "了解為何信託賬戶在財富管理和資產保護方面具有卓越優勢",
    comparisonItem: "比較項目",
    trustAccount: "信託賬戶",
    bankAccount: "銀行賬戶",
    data: [
      {
        category: "法律所有權",
        trust: "受託人（信託公司）",
        bank: "銀行賬戶",
      },
      {
        category: "保密性",
        trust: "高。信託是一種保密協議。",
        bank: "低。可被司法機構查閱。",
        trustHighlight: true,
      },
      {
        category: "自主權",
        trust: "高。信託公司僅執行委託人的指示。",
        bank: "低。銀行有權使用客戶存款進行貸款，若經營不善則存在違約風險。",
        trustHighlight: true,
      },
      {
        category: "風險",
        trust: "風險隔離。信託無權凍結客戶信託賬戶中的資產。除非涉及違法活動，債權人不太可能有權主張信託中的資產。",
        bank: "無風險隔離。銀行有權因各種原因凍結賬戶。債權人也有權從中主張，客戶無法實現風險隔離。",
        trustHighlight: true,
      },
      {
        category: "可持續性",
        trust: "永久。在香港，信託可以無限期存在，因此可用於規劃多代人的未來，保護資本並允許更長期、更具戰略性的規劃。",
        bank: "不可持續。若客戶發生意外，銀行賬戶將被凍結，直至遺囑執行人向法院申請遺囑認證。經過漫長的過程後，執行人將根據遺囑確定如何管理銀行賬戶中的資產。",
        trustHighlight: true,
      },
      {
        category: "隱私",
        trust:
          "高。通常情況下，只有高等法院有權要求查閱信託賬戶信息和資產。包括受益人在內的其他人無權查閱任何信託資產信息。",
        bank: "低。如有理由，賬戶信息和資產去向將被查詢。",
        trustHighlight: true,
      },
      {
        category: "靈活性",
        trust: "高。信託賬戶不僅接受現金，還接受海外房產、貴金屬、數字資產等。",
        bank: "低。銀行主要接受現金，極不可能接受數字資產。",
        trustHighlight: true,
      },
      {
        category: "服務",
        trust: "多樣化。信託賬戶可提供更多全球服務，如離岸賬戶、全球投資、全球支付、全球資產轉移等。",
        bank: "有限。銀行賬戶僅提供本地銀行服務。投資選擇僅限於銀行自有產品。",
        trustHighlight: true,
      },
    ],
  },
}

export function WealthComparison() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations["en"]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#2563EB] text-sm font-medium tracking-wider uppercase">{t.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{t.comparisonItem}</div>
            <div className="text-center">
              <div className="inline-block bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold">
                {t.trustAccount}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold">
                {t.bankAccount}
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {t.data.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-5 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-gray-900">{row.category}</div>
                <div className={`text-sm leading-relaxed ${row.trustHighlight ? "text-[#2563EB]" : "text-gray-700"}`}>
                  {row.trust}
                </div>
                <div className="text-sm text-gray-500 leading-relaxed">{row.bank}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
