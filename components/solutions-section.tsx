"use client"

import { TrendingUp, FileText } from "@/components/ui/app-icon"
import { useLanguage } from "@/contexts/language-context"
import { getTranslation } from "@/lib/translations"

export function SolutionsSection() {
  const { language } = useLanguage()
  const t = getTranslation(language)
  const localize = (copy: { en: string; "zh-CN": string; "zh-TW": string; ar: string }) =>
    copy[language as keyof typeof copy] || copy.en
  const offshoreAccounts = [
    {
      name: localize({ en: "Hong Kong Account", "zh-CN": "香港账户", "zh-TW": "香港賬戶", ar: "حساب هونغ كونغ" }),
      id: "002-013-0567545-001",
      amount: "2,050,000 USD",
      color: "#4357ef",
    },
    {
      name: localize({ en: "US Account", "zh-CN": "美国账户", "zh-TW": "美國賬戶", ar: "حساب الولايات المتحدة" }),
      id: "002-013-0367545-002",
      amount: "275,000 USD",
      color: "#5e6ff1",
    },
    {
      name: localize({ en: "Singapore Account", "zh-CN": "新加坡账户", "zh-TW": "新加坡賬戶", ar: "حساب سنغافورة" }),
      id: "002-013-0867545-003",
      amount: "840,065 USD",
      color: "#7a88f4",
    },
    {
      name: localize({ en: "Multi-currency Reserve", "zh-CN": "多币种储备", "zh-TW": "多幣種儲備", ar: "احتياطي متعدد العملات" }),
      id: "002-013-0567545-004",
      amount: "5,994,400 USD",
      color: "#96a1f7",
    },
  ]
  const visualCopy = {
    moneyFundTitle: localize({ en: "USD Money Market Fund", "zh-CN": "美元货币基金", "zh-TW": "美元貨幣基金", ar: "صندوق سوق نقدي بالدولار" }),
    dailyLiquidity: localize({ en: "Daily Liquidity", "zh-CN": "每日流动性", "zh-TW": "每日流動性", ar: "سيولة يومية" }),
    moneyFund: localize({ en: "Money Fund", "zh-CN": "货币基金", "zh-TW": "貨幣基金", ar: "صندوق نقدي" }),
    yield: localize({ en: "Yield", "zh-CN": "收益率", "zh-TW": "收益率", ar: "العائد" }),
    access: localize({ en: "Access", "zh-CN": "申赎", "zh-TW": "申贖", ar: "الإتاحة" }),
    uploadInvoice: localize({ en: "Upload invoice", "zh-CN": "上传发票", "zh-TW": "上傳發票", ar: "رفع الفاتورة" }),
    fileRules: localize({
      en: "PNG, JPG, PDF format. Max 5 files, 5MB each.",
      "zh-CN": "支持 PNG、JPG、PDF，最多 5 个文件，每个 5MB。",
      "zh-TW": "支持 PNG、JPG、PDF，最多 5 個文件，每個 5MB。",
      ar: "يدعم PNG وJPG وPDF. حتى 5 ملفات، 5MB لكل ملف.",
    }),
    uploadCta: localize({ en: "Upload Invoice", "zh-CN": "上传发票", "zh-TW": "上傳發票", ar: "رفع الفاتورة" }),
    extracting: localize({
      en: "Extracting invoice details",
      "zh-CN": "提取发票信息",
      "zh-TW": "提取發票資訊",
      ar: "استخراج تفاصيل الفاتورة",
    }),
    buy: localize({ en: "Buy", "zh-CN": "买入", "zh-TW": "買入", ar: "شراء" }),
    sell: localize({ en: "Sell", "zh-CN": "卖出", "zh-TW": "賣出", ar: "بيع" }),
    youBuy: localize({ en: "You Buy", "zh-CN": "买入货币", "zh-TW": "買入貨幣", ar: "تشتري" }),
    youPay: localize({ en: "You Pay", "zh-CN": "支付货币", "zh-TW": "支付貨幣", ar: "تدفع" }),
    balance: localize({ en: "Balance", "zh-CN": "余额", "zh-TW": "結餘", ar: "الرصيد" }),
  }

  const rows = [
    {
      id: "offshore",
      title: localize({ en: "Offshore Accounts", "zh-CN": "离岸账户", "zh-TW": "離岸賬戶", ar: "حسابات خارجية" }),
      description: localize({
        en: "Diversify risk with a multi-jurisdiction account matrix and gain global liquidity flexibility.",
        "zh-CN": "通过多地账户矩阵分散风险，获得更高的资金调度灵活性与全球可达性。",
        "zh-TW": "透過多地賬戶矩陣分散風險，獲得更高的資金調度靈活性與全球可達性。",
        ar: "نوّع المخاطر عبر مصفوفة حسابات متعددة الولايات القضائية واحصل على مرونة سيولة عالمية.",
      }),
      highlight: localize({
        en: "Integrated asset protection, tax optimization, and privacy enhancement.",
        "zh-CN": "资产保护、税务优化与隐私强化一体化。",
        "zh-TW": "資產保護、稅務優化與隱私強化一體化。",
        ar: "حماية أصول، تحسين ضريبي وتعزيز الخصوصية ضمن إطار واحد.",
      }),
      visual: "offshore" as const,
    },
    {
      id: "yield",
      title: localize({ en: "Earnings & Yields", "zh-CN": "收益与收益率", "zh-TW": "收益與收益率", ar: "العوائد والدخل" }),
      description: localize({
        en: "Deploy structured yield strategies for short and medium-term treasury efficiency.",
        "zh-CN": "配置结构化收益方案，覆盖短中期资金安排，提升资产效率。",
        "zh-TW": "配置結構化收益方案，覆蓋短中期資金安排，提升資產效率。",
        ar: "استخدم استراتيجيات عوائد منظمة لتحسين كفاءة الخزينة قصيرة ومتوسطة الأجل.",
      }),
      highlight: localize({
        en: "Transparent tenor, clear return targets, and visible position performance.",
        "zh-CN": "透明期限、清晰收益目标、可视化持仓表现。",
        "zh-TW": "透明期限、清晰收益目標、可視化持倉表現。",
        ar: "آجال واضحة، أهداف عائد محددة، ورؤية شفافة لأداء المراكز.",
      }),
      visual: "yield" as const,
    },
    {
      id: "invoice",
      title: localize({ en: "Global Invoice Payment", "zh-CN": "全球发票支付", "zh-TW": "全球發票支付", ar: "دفع الفواتير العالمية" }),
      description: localize({
        en: "Upload invoices and delegate cross-border execution with progress visibility.",
        "zh-CN": "上传账单并下达指令，由受托团队执行跨境付款与进度跟踪。",
        "zh-TW": "上傳賬單並下達指令，由受託團隊執行跨境付款與進度追蹤。",
        ar: "ارفع الفواتير وفوّض تنفيذ المدفوعات العابرة للحدود مع رؤية واضحة للتقدم.",
      }),
      highlight: localize({
        en: "From tuition and insurance to vendor payables, all in one workflow.",
        "zh-CN": "从教育、保险到供应商应付，一站式自动化管理。",
        "zh-TW": "從教育、保險到供應商應付，一站式自動化管理。",
        ar: "من الرسوم التعليمية والتأمين إلى مستحقات الموردين، ضمن مسار عمل واحد.",
      }),
      visual: "invoice" as const,
    },
    {
      id: "exchange",
      title: localize({ en: "Currency Exchange", "zh-CN": "货币兑换", "zh-TW": "貨幣兌換", ar: "تبادل العملات" }),
      description: localize({
        en: "Convert major currencies in one place to keep treasury operations continuous.",
        "zh-CN": "在同一平台完成主要货币兑换，强化资金管理连续性。",
        "zh-TW": "在同一平台完成主要貨幣兌換，強化資金管理連續性。",
        ar: "حوّل العملات الرئيسية في مكان واحد للحفاظ على استمرارية عمليات الخزينة.",
      }),
      highlight: localize({
        en: "High-availability execution with balance linkage across multi-currency portfolios.",
        "zh-CN": "高可用执行与余额联动，支持多币种资产配置。",
        "zh-TW": "高可用執行與餘額聯動，支持多幣種資產配置。",
        ar: "تنفيذ عالي التوافر مع ربط الأرصدة عبر محافظ متعددة العملات.",
      }),
      visual: "exchange" as const,
    },
  ]

  const renderVisual = (type: (typeof rows)[number]["visual"]) => {
    if (type === "offshore") {
      return (
        <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-[0_18px_50px_rgba(67,87,239,0.12)] relative border border-[#dbe1ff] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_rgba(67,87,239,0.18)]">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-32 border-4 border-[#4357ef] border-r-0 rounded-l-full opacity-60" />
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
      )
    }

    if (type === "yield") {
      return (
        <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-[0_18px_50px_rgba(67,87,239,0.12)] border border-[#dbe1ff] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_rgba(67,87,239,0.18)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-[#4357ef]/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#4357ef]" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{visualCopy.moneyFundTitle}</p>
              <p className="text-xs text-gray-500">{visualCopy.dailyLiquidity}</p>
            </div>
            <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{visualCopy.moneyFund}</span>
          </div>
          <div className="flex justify-between border-t pt-3">
            <div>
              <p className="text-xs text-gray-500">{visualCopy.yield}</p>
              <p className="text-lg font-semibold text-[#4357ef]">4.58%</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">{visualCopy.access}</p>
              <p className="text-lg font-semibold text-gray-900">T+1</p>
            </div>
          </div>
        </div>
      )
    }

    if (type === "invoice") {
      return (
        <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-[0_18px_50px_rgba(67,87,239,0.12)] border border-[#dbe1ff] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_rgba(67,87,239,0.18)]">
          <div className="flex gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-medium text-gray-700">{visualCopy.uploadInvoice}</span>
              </div>
              <p className="text-[10px] text-gray-400 mb-3">{visualCopy.fileRules}</p>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-400">{visualCopy.uploadCta}</p>
              </div>
            </div>
            <div className="flex-1 bg-[#4357ef]/10 rounded-lg p-3">
              <p className="text-xs font-medium text-gray-700 mb-2">{visualCopy.extracting}</p>
              <div className="space-y-1">
                <div className="h-2 bg-[#4357ef]/25 rounded-full w-full" />
                <div className="h-2 bg-[#4357ef]/25 rounded-full w-3/4" />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
        <div className="bg-white/95 backdrop-blur rounded-2xl p-5 shadow-[0_18px_50px_rgba(67,87,239,0.12)] border border-[#dbe1ff] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_rgba(67,87,239,0.18)]">
        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-[#4357ef] text-white text-xs py-2 rounded-lg font-medium">{visualCopy.buy}</button>
          <button className="flex-1 bg-gray-100 text-gray-600 text-xs py-2 rounded-lg font-medium">{visualCopy.sell}</button>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">{visualCopy.youBuy}</p>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#ef4444] rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                  HK
                </div>
                <span className="text-sm font-medium">HKD</span>
              </div>
            </div>
            <span className="text-xl font-semibold text-gray-900">2</span>
          </div>
          <div className="flex justify-between items-center border-t pt-3">
            <div>
              <p className="text-xs text-gray-500">{visualCopy.youPay}</p>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                  US
                </div>
                <span className="text-sm font-medium">USD</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xl font-semibold text-gray-900">125,820</span>
              <p className="text-[10px] text-gray-400">
                {visualCopy.balance}: 1,550,380.2 USD
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden py-28 md:py-36 bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_45%,#ffffff_100%)]">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4357ef]/10 blur-3xl" />
      <div className="container mx-auto px-6">
        <div className="mb-20 md:mb-24">
          <span className="text-sm font-medium text-[#4357ef] mb-3 block">{t.homeSolutions.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-7 tracking-[-0.015em]">
            {localize({
              en: "One Platform, Multiple Solutions",
              "zh-CN": "一个平台，多种解决方案",
              "zh-TW": "一個平台，多種解決方案",
              ar: "منصة واحدة، حلول متعددة",
            })}
          </h2>
          <p className="text-gray-600 max-w-3xl leading-8">
            {localize({
              en: "Explore our comprehensive services designed to ensure your financial security and growth. From offshore accounts to asset-linked credit cards, our platform offers diverse solutions to meet your unique financial needs.",
              "zh-CN": "深入了解我们提供的全方位服务，确保您的财务安全和增长。从离岸账户到资产关联信用卡，我们的平台提供多样化的解决方案，满足您独特的财务需求。",
              "zh-TW": "深入了解我們提供的全方位服務，確保您的財務安全和增長。從離岸賬戶到資產關聯信用卡，我們的平台提供多樣化的解決方案，滿足您獨特的財務需求。",
              ar: "استكشف خدماتنا الشاملة المصممة لدعم أمنك المالي ونموك. من الحسابات الخارجية إلى البطاقات المرتبطة بالأصول، توفر منصتنا حلولاً متنوعة تناسب احتياجاتك المالية.",
            })}
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {rows.map((row, index) => {
            const isReversed = index % 2 === 1
            return (
              <div
                key={row.id}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 items-center rounded-3xl p-7 md:p-10 bg-[linear-gradient(140deg,rgba(255,255,255,0.96),rgba(246,249,255,0.98))] border border-[#e6ebff] shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(67,87,239,0.16)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(67,87,239,0.08),transparent_55%)]" />
                <div className={`${isReversed ? "lg:order-2" : ""}`}>
                  <span className="inline-flex items-center rounded-full bg-[#4357ef]/10 text-[#4357ef] text-xs font-medium px-3 py-1 mb-5">
                    {localize({
                      en: `Module ${index + 1}`,
                      "zh-CN": `模块 ${index + 1}`,
                      "zh-TW": `模組 ${index + 1}`,
                      ar: `الوحدة ${index + 1}`,
                    })}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#07072d] mb-4 tracking-[-0.01em]">{row.title}</h3>
                  <p className="text-[#232937] leading-8 mb-4">{row.description}</p>
                  <p className="text-sm text-[#6f6c90] leading-7">{row.highlight}</p>
                </div>
                <div className={`relative ${isReversed ? "lg:order-1" : ""}`}>{renderVisual(row.visual)}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
