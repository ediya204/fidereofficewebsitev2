import type { Metadata } from "next"

export const locales = ["en", "cn", "tc"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"
export const siteUrl = "https://www.fideretrust.com"
export const siteName = "FIDERE TRUST"

export const localeLanguages: Record<Locale, string> = {
  en: "en",
  cn: "zh-CN",
  tc: "zh-Hant",
}

export const localizedLocaleNames: Record<Locale, string> = {
  en: "en_US",
  cn: "zh_CN",
  tc: "zh_HK",
}

const routePaths = {
  home: "",
  about: "/about",
  solutions: "/solutions",
  whiteLabel: "/solutions/white-label",
  trustAccount: "/trust-account",
  personalTrust: "/personal-trust",
  wealthManagement: "/wealth-management",
  familyOffice: "/family-office",
  offshoreAccounts: "/offshore-accounts",
  corporateClients: "/corporate-clients",
  globalInvoicePayment: "/global-invoice-payment",
  contact: "/contact",
  complianceKyc: "/compliance-kyc",
  regulatoryStatus: "/regulatory-status",
  riskFees: "/risk-fees",
  kycGuide: "/kyc-guide",
  personalKycGuide: "/personal-kyc-guide",
  privacy: "/privacy",
  terms: "/terms",
  disclaimer: "/disclaimer",
} as const

export type PageKey = keyof typeof routePaths

type SeoEntry = {
  title: string
  description: string
  keywords: string[]
}

const coreKeywords = {
  en: ["trust", "Hong Kong trust", "asset management", "family trust"],
  cn: ["信托", "香港信托", "资产管理", "家族信托"],
  tc: ["信託", "香港信託", "資產管理", "家族信託"],
} as const satisfies Record<Locale, readonly string[]>

const keywordGroups = {
  en: {
    brand: [
      "FIDERE TRUST",
      "FIDERE TRUST Limited",
      "Hong Kong licensed trust company",
      "licensed trustee",
      "TCSP trust company",
    ],
    trust: [
      "trust services",
      "trust company",
      "private trust",
      "trustee services",
      "trust structuring",
      "trust account",
      "trust custody",
      "asset protection trust",
      "wealth protection trust",
      "succession planning trust",
    ],
    hongKongTrust: [
      "Hong Kong trust services",
      "Hong Kong trustee",
      "Hong Kong trust account",
      "Hong Kong private trust",
      "Hong Kong family trust",
      "Hong Kong trust company",
      "Hong Kong fiduciary services",
    ],
    assetManagement: [
      "asset management services",
      "trust-based asset management",
      "wealth management",
      "global asset allocation",
      "multi-currency portfolio",
      "investment execution",
      "asset custody",
      "offshore asset management",
    ],
    familyTrust: [
      "family trust services",
      "family office services",
      "family wealth planning",
      "family governance",
      "wealth succession",
      "inheritance planning",
      "intergenerational wealth transfer",
      "high net worth trust",
    ],
    corporateTrust: [
      "corporate trust services",
      "escrow services",
      "corporate trustee",
      "fiduciary services",
      "SPV administration",
      "corporate treasury",
      "cross-border corporate services",
    ],
    payments: [
      "trust account payments",
      "global invoice payment",
      "cross-border payments",
      "international bill payment",
      "payment execution",
      "multi-currency payments",
    ],
    compliance: [
      "trust compliance",
      "KYC onboarding",
      "KYB onboarding",
      "AML compliance",
      "trust account documentation",
      "professional investor onboarding",
      "TCSP license",
    ],
    offshore: [
      "offshore trust account",
      "offshore account",
      "offshore asset protection",
      "multi-jurisdiction trust",
      "global custody",
      "international trust planning",
    ],
  },
  cn: {
    brand: ["FIDERE TRUST", "FIDERE TRUST Limited", "香港持牌信托公司", "持牌受托人", "TCSP 信托公司"],
    trust: [
      "信托服务",
      "信托公司",
      "私人信托",
      "受托人服务",
      "信托架构",
      "信托账户",
      "信托托管",
      "资产保护信托",
      "财富保护信托",
      "传承规划信托",
    ],
    hongKongTrust: [
      "香港信托服务",
      "香港受托人",
      "香港信托账户",
      "香港私人信托",
      "香港家族信托",
      "香港信托公司",
      "香港受托服务",
    ],
    assetManagement: [
      "资产管理服务",
      "信托资产管理",
      "财富管理",
      "全球资产配置",
      "多币种投资组合",
      "投资执行",
      "资产托管",
      "离岸资产管理",
    ],
    familyTrust: [
      "家族信托服务",
      "家族办公室服务",
      "家族财富规划",
      "家族治理",
      "财富传承",
      "继承规划",
      "跨代财富传承",
      "高净值信托",
    ],
    corporateTrust: [
      "企业信托服务",
      "托管服务",
      "企业受托人",
      "受托服务",
      "SPV 管理",
      "企业资金管理",
      "跨境企业服务",
    ],
    payments: [
      "信托账户支付",
      "全球账单支付",
      "跨境支付",
      "国际账单支付",
      "付款执行",
      "多币种支付",
    ],
    compliance: [
      "信托合规",
      "KYC 开户",
      "KYB 开户",
      "反洗钱合规",
      "信托账户资料",
      "专业投资者开户",
      "TCSP 牌照",
    ],
    offshore: ["离岸信托账户", "离岸账户", "离岸资产保护", "多司法管辖区信托", "全球托管", "国际信托规划"],
  },
  tc: {
    brand: ["FIDERE TRUST", "FIDERE TRUST Limited", "香港持牌信託公司", "持牌受託人", "TCSP 信託公司"],
    trust: [
      "信託服務",
      "信託公司",
      "私人信託",
      "受託人服務",
      "信託架構",
      "信託賬戶",
      "信託託管",
      "資產保護信託",
      "財富保護信託",
      "傳承規劃信託",
    ],
    hongKongTrust: [
      "香港信託服務",
      "香港受託人",
      "香港信託賬戶",
      "香港私人信託",
      "香港家族信託",
      "香港信託公司",
      "香港受託服務",
    ],
    assetManagement: [
      "資產管理服務",
      "信託資產管理",
      "財富管理",
      "全球資產配置",
      "多幣種投資組合",
      "投資執行",
      "資產託管",
      "離岸資產管理",
    ],
    familyTrust: [
      "家族信託服務",
      "家族辦公室服務",
      "家族財富規劃",
      "家族治理",
      "財富傳承",
      "繼承規劃",
      "跨代財富傳承",
      "高淨值信託",
    ],
    corporateTrust: [
      "企業信託服務",
      "託管服務",
      "企業受託人",
      "受託服務",
      "SPV 管理",
      "企業資金管理",
      "跨境企業服務",
    ],
    payments: [
      "信託賬戶支付",
      "全球賬單支付",
      "跨境支付",
      "國際賬單支付",
      "付款執行",
      "多幣種支付",
    ],
    compliance: [
      "信託合規",
      "KYC 開戶",
      "KYB 開戶",
      "反洗錢合規",
      "信託賬戶資料",
      "專業投資者開戶",
      "TCSP 牌照",
    ],
    offshore: ["離岸信託賬戶", "離岸賬戶", "離岸資產保護", "多司法管轄區信託", "全球託管", "國際信託規劃"],
  },
} as const satisfies Record<Locale, Record<string, readonly string[]>>

type KeywordGroup = keyof typeof keywordGroups.en

const pageKeywordGroups: Record<PageKey, KeywordGroup[]> = {
  home: ["brand", "trust", "hongKongTrust", "assetManagement", "familyTrust"],
  about: ["brand", "trust", "hongKongTrust", "assetManagement", "compliance"],
  solutions: ["trust", "hongKongTrust", "assetManagement", "familyTrust", "corporateTrust"],
  whiteLabel: ["brand", "trust", "hongKongTrust", "corporateTrust", "compliance"],
  trustAccount: ["trust", "hongKongTrust", "assetManagement", "payments", "offshore"],
  personalTrust: ["trust", "hongKongTrust", "familyTrust", "assetManagement", "offshore"],
  wealthManagement: ["assetManagement", "trust", "hongKongTrust", "familyTrust"],
  familyOffice: ["familyTrust", "assetManagement", "trust", "hongKongTrust", "compliance"],
  offshoreAccounts: ["offshore", "trust", "hongKongTrust", "assetManagement"],
  corporateClients: ["corporateTrust", "trust", "hongKongTrust", "assetManagement", "payments", "compliance"],
  globalInvoicePayment: ["payments", "trust", "hongKongTrust", "corporateTrust", "compliance"],
  contact: ["brand", "trust", "hongKongTrust", "assetManagement", "familyTrust"],
  complianceKyc: ["compliance", "trust", "hongKongTrust", "corporateTrust"],
  regulatoryStatus: ["compliance", "brand", "trust", "hongKongTrust"],
  riskFees: ["compliance", "trust", "assetManagement", "payments"],
  kycGuide: ["compliance", "corporateTrust", "trust", "hongKongTrust", "payments"],
  personalKycGuide: ["compliance", "familyTrust", "trust", "hongKongTrust"],
  privacy: ["brand", "trust", "hongKongTrust"],
  terms: ["brand", "trust", "hongKongTrust", "assetManagement"],
  disclaimer: ["brand", "trust", "hongKongTrust", "assetManagement"],
}

export const seo: Record<Locale, Record<PageKey, SeoEntry>> = {
  en: {
    home: {
      title: "Hong Kong Trust & Family Trust Asset Management",
      description:
        "FIDERE TRUST provides Hong Kong trust, family trust and asset management solutions for global families, professional investors and enterprises.",
      keywords: ["licensed trust company", "private trust", "wealth succession"],
    },
    about: {
      title: "About FIDERE TRUST | Licensed Hong Kong Trust Company",
      description:
        "Learn about FIDERE TRUST, a Hong Kong licensed trust company focused on trust structuring, family governance and global asset management.",
      keywords: ["licensed Hong Kong trust company", "trustee services"],
    },
    solutions: {
      title: "Trust Solutions | Hong Kong Trust & Asset Management",
      description:
        "Explore trust, custody and asset management solutions for private clients, family trusts, family offices and corporate clients.",
      keywords: ["trust solutions", "trust custody", "asset protection"],
    },
    whiteLabel: {
      title: "White Label Trust Platform | Hong Kong Trust Infrastructure",
      description:
        "Launch branded Hong Kong trust services with FIDERE TRUST infrastructure for onboarding, custody, compliance, payments and asset management workflows.",
      keywords: ["white label trust", "trust platform"],
    },
    trustAccount: {
      title: "Trust Account | Hong Kong Trust Account",
      description:
        "Open a Hong Kong trust account designed for asset protection, multi-currency custody, payments and global asset management.",
      keywords: ["trust account", "Hong Kong trust account"],
    },
    personalTrust: {
      title: "Family Trust & Personal Trust Services in Hong Kong",
      description:
        "Build a family trust or personal trust structure in Hong Kong for succession planning, asset protection, privacy and long-term asset management.",
      keywords: ["personal trust", "family trust services", "succession planning"],
    },
    wealthManagement: {
      title: "Asset Management | Trust-Based Wealth Management",
      description:
        "FIDERE TRUST supports trust-based asset management, global allocation and multi-currency portfolio administration.",
      keywords: ["wealth management", "global asset allocation"],
    },
    familyOffice: {
      title: "Family Office & Family Trust Services in Hong Kong",
      description:
        "Coordinate family office governance, family trust structures, reporting, succession and asset management through a Hong Kong trust platform.",
      keywords: ["family office", "family governance"],
    },
    offshoreAccounts: {
      title: "Offshore Trust Accounts | Hong Kong Trust Asset Protection",
      description:
        "Use offshore trust accounts to support asset protection, multi-currency custody and global asset management under a trust structure.",
      keywords: ["offshore trust account", "asset protection"],
    },
    corporateClients: {
      title: "Corporate Trust Services | Hong Kong Trustee Solutions",
      description:
        "Corporate trust, trustee, escrow, custody, payment and asset management solutions for international companies and professional investors.",
      keywords: ["corporate trust", "trustee services"],
    },
    globalInvoicePayment: {
      title: "Global Invoice Payment | Trust Account Payment Services",
      description:
        "Manage international invoices and cross-border payments from a trust account with compliance, tracking and delegated execution support.",
      keywords: ["global payments", "trust account payments"],
    },
    contact: {
      title: "Contact FIDERE TRUST | Hong Kong Trust Consultation",
      description:
        "Contact FIDERE TRUST for Hong Kong trust, family trust and asset management consultation.",
      keywords: ["trust consultation", "Hong Kong trustee"],
    },
    complianceKyc: {
      title: "Compliance & KYC | Hong Kong Trust Onboarding",
      description:
        "Review FIDERE TRUST onboarding, KYC, KYB, AML and compliance standards for trust and asset management services.",
      keywords: ["trust compliance", "KYC", "KYB"],
    },
    regulatoryStatus: {
      title: "Regulatory Status | Hong Kong Trust License Information",
      description:
        "Review FIDERE TRUST regulatory status, license information and governance standards for Hong Kong trust and asset management services.",
      keywords: ["trust license", "TCSP"],
    },
    riskFees: {
      title: "Risk & Fees | Trust and Asset Management Costs",
      description:
        "Understand risk disclosures and fee considerations for trust accounts, custody, payments and asset management services.",
      keywords: ["trust fees", "asset management fees"],
    },
    kycGuide: {
      title: "Corporate KYC Guide | Hong Kong Trust Account Documentation",
      description:
        "Corporate KYC and KYB guide for Hong Kong trust accounts, trustee services, payments, custody and asset management onboarding.",
      keywords: ["corporate KYC", "trust account documentation"],
    },
    personalKycGuide: {
      title: "Personal KYC Guide | Family Trust Account Documentation",
      description:
        "Personal KYC guide for family trust, Hong Kong trust account and asset management onboarding.",
      keywords: ["personal KYC", "family trust documentation"],
    },
    privacy: {
      title: "Privacy Policy | FIDERE TRUST",
      description:
        "Read the FIDERE TRUST privacy policy for trust account, family trust and asset management services.",
      keywords: ["privacy policy"],
    },
    terms: {
      title: "Terms & Conditions | FIDERE TRUST",
      description:
        "Review FIDERE TRUST terms and conditions for Hong Kong trust, custody and asset management services.",
      keywords: ["terms and conditions"],
    },
    disclaimer: {
      title: "Disclaimer | FIDERE TRUST",
      description:
        "Review important disclaimers for FIDERE TRUST Hong Kong trust, custody and asset management information.",
      keywords: ["trust disclaimer"],
    },
  },
  cn: {
    home: {
      title: "香港信托与家族信托资产管理",
      description:
        "FIDERE TRUST 提供香港信托、家族信托与资产管理方案，服务全球家族、专业投资者与企业客户。",
      keywords: ["持牌信托公司", "私人信托", "财富传承"],
    },
    about: {
      title: "关于 FIDERE TRUST | 香港持牌信托公司",
      description:
        "了解 FIDERE TRUST 香港持牌信托公司，专注信托架构、家族治理与全球资产管理。",
      keywords: ["香港持牌信托公司", "受托人服务"],
    },
    solutions: {
      title: "信托解决方案 | 香港信托与资产管理",
      description:
        "探索面向私人客户、家族信托、家族办公室与企业客户的信托、托管与资产管理方案。",
      keywords: ["信托解决方案", "信托托管", "资产保护"],
    },
    whiteLabel: {
      title: "白标信托平台 | 香港信托基础设施",
      description:
        "基于 FIDERE TRUST 基础设施推出品牌化香港信托服务，覆盖开户、托管、合规、支付与资产管理流程。",
      keywords: ["白标信托", "信托平台"],
    },
    trustAccount: {
      title: "信托账户 | 香港信托账户",
      description:
        "设立香港信托账户，支持资产保护、多币种托管、跨境支付与全球资产管理。",
      keywords: ["信托账户", "香港信托账户"],
    },
    personalTrust: {
      title: "家族信托与私人信托服务 | 香港信托",
      description:
        "在香港建立家族信托或私人信托架构，支持财富传承、资产保护、隐私安排与长期资产管理。",
      keywords: ["私人信托", "家族信托服务", "传承规划"],
    },
    wealthManagement: {
      title: "资产管理 | 信托架构下的财富管理",
      description:
        "FIDERE TRUST 支持信托架构下的资产管理、全球配置与多币种投资组合管理。",
      keywords: ["财富管理", "全球资产配置"],
    },
    familyOffice: {
      title: "家族办公室与家族信托服务 | 香港信托",
      description:
        "通过香港信托平台协同家族办公室治理、家族信托架构、报告、传承与资产管理。",
      keywords: ["家族办公室", "家族治理"],
    },
    offshoreAccounts: {
      title: "离岸信托账户 | 香港信托资产保护",
      description:
        "使用离岸信托账户支持资产保护、多币种托管与信托架构下的全球资产管理。",
      keywords: ["离岸信托账户", "资产保护"],
    },
    corporateClients: {
      title: "企业信托服务 | 香港受托解决方案",
      description:
        "为国际企业与专业投资者提供企业信托、受托人、托管、支付与资产管理解决方案。",
      keywords: ["企业信托", "受托人服务"],
    },
    globalInvoicePayment: {
      title: "全球账单支付 | 信托账户支付服务",
      description:
        "通过信托账户管理国际账单与跨境付款，获得合规、进度追踪与受托执行支持。",
      keywords: ["全球支付", "信托账户支付"],
    },
    contact: {
      title: "联系 FIDERE TRUST | 香港信托咨询",
      description:
        "联系 FIDERE TRUST，咨询香港信托、家族信托与资产管理服务。",
      keywords: ["信托咨询", "香港受托人"],
    },
    complianceKyc: {
      title: "合规与 KYC | 香港信托开户",
      description:
        "了解 FIDERE TRUST 针对信托与资产管理服务的 KYC、KYB、反洗钱与合规标准。",
      keywords: ["信托合规", "KYC", "KYB"],
    },
    regulatoryStatus: {
      title: "监管与牌照 | 香港信托牌照信息",
      description:
        "查看 FIDERE TRUST 香港信托与资产管理服务的监管状态、牌照信息与治理标准。",
      keywords: ["信托牌照", "TCSP"],
    },
    riskFees: {
      title: "风险与费用 | 信托与资产管理成本",
      description:
        "了解信托账户、托管、支付与资产管理服务相关的风险披露与费用说明。",
      keywords: ["信托费用", "资产管理费用"],
    },
    kycGuide: {
      title: "企业 KYC 指南 | 香港信托账户资料",
      description:
        "企业 KYC 与 KYB 指南，适用于香港信托账户、受托服务、支付、托管与资产管理开户。",
      keywords: ["企业 KYC", "信托账户资料"],
    },
    personalKycGuide: {
      title: "个人 KYC 指南 | 家族信托账户资料",
      description:
        "个人 KYC 指南，适用于家族信托、香港信托账户与资产管理开户。",
      keywords: ["个人 KYC", "家族信托资料"],
    },
    privacy: {
      title: "隐私政策 | FIDERE TRUST",
      description: "阅读 FIDERE TRUST 关于信托账户、家族信托与资产管理服务的隐私政策。",
      keywords: ["隐私政策"],
    },
    terms: {
      title: "条款与细则 | FIDERE TRUST",
      description: "查看 FIDERE TRUST 香港信托、托管与资产管理服务的条款与细则。",
      keywords: ["条款与细则"],
    },
    disclaimer: {
      title: "免责声明 | FIDERE TRUST",
      description: "查看 FIDERE TRUST 香港信托、托管与资产管理信息相关的重要免责声明。",
      keywords: ["信托免责声明"],
    },
  },
  tc: {
    home: {
      title: "香港信託與家族信託資產管理",
      description:
        "FIDERE TRUST 提供香港信託、家族信託與資產管理方案，服務全球家族、專業投資者與企業客戶。",
      keywords: ["持牌信託公司", "私人信託", "財富傳承"],
    },
    about: {
      title: "關於 FIDERE TRUST | 香港持牌信託公司",
      description:
        "了解 FIDERE TRUST 香港持牌信託公司，專注信託架構、家族治理與全球資產管理。",
      keywords: ["香港持牌信託公司", "受託人服務"],
    },
    solutions: {
      title: "信託解決方案 | 香港信託與資產管理",
      description:
        "探索面向私人客戶、家族信託、家族辦公室與企業客戶的信託、託管與資產管理方案。",
      keywords: ["信託解決方案", "信託託管", "資產保護"],
    },
    whiteLabel: {
      title: "白標信託平台 | 香港信託基礎設施",
      description:
        "基於 FIDERE TRUST 基礎設施推出品牌化香港信託服務，覆蓋開戶、託管、合規、支付與資產管理流程。",
      keywords: ["白標信託", "信託平台"],
    },
    trustAccount: {
      title: "信託賬戶 | 香港信託賬戶",
      description:
        "設立香港信託賬戶，支持資產保護、多幣種託管、跨境支付與全球資產管理。",
      keywords: ["信託賬戶", "香港信託賬戶"],
    },
    personalTrust: {
      title: "家族信託與私人信託服務 | 香港信託",
      description:
        "在香港建立家族信託或私人信託架構，支持財富傳承、資產保護、私隱安排與長期資產管理。",
      keywords: ["私人信託", "家族信託服務", "傳承規劃"],
    },
    wealthManagement: {
      title: "資產管理 | 信託架構下的財富管理",
      description:
        "FIDERE TRUST 支持信託架構下的資產管理、全球配置與多幣種投資組合管理。",
      keywords: ["財富管理", "全球資產配置"],
    },
    familyOffice: {
      title: "家族辦公室與家族信託服務 | 香港信託",
      description:
        "通過香港信託平台協同家族辦公室治理、家族信託架構、報告、傳承與資產管理。",
      keywords: ["家族辦公室", "家族治理"],
    },
    offshoreAccounts: {
      title: "離岸信託賬戶 | 香港信託資產保護",
      description:
        "使用離岸信託賬戶支持資產保護、多幣種託管與信託架構下的全球資產管理。",
      keywords: ["離岸信託賬戶", "資產保護"],
    },
    corporateClients: {
      title: "企業信託服務 | 香港受託解決方案",
      description: "為國際企業與專業投資者提供企業信託、受託人、託管、支付與資產管理解決方案。",
      keywords: ["企業信託", "受託人服務"],
    },
    globalInvoicePayment: {
      title: "全球賬單支付 | 信託賬戶支付服務",
      description: "通過信託賬戶管理國際賬單與跨境付款，獲得合規、進度追蹤與受託執行支持。",
      keywords: ["全球支付", "信託賬戶支付"],
    },
    contact: {
      title: "聯絡 FIDERE TRUST | 香港信託諮詢",
      description: "聯絡 FIDERE TRUST，諮詢香港信託、家族信託與資產管理服務。",
      keywords: ["信託諮詢", "香港受託人"],
    },
    complianceKyc: {
      title: "合規與 KYC | 香港信託開戶",
      description:
        "了解 FIDERE TRUST 針對信託與資產管理服務的 KYC、KYB、反洗錢與合規標準。",
      keywords: ["信託合規", "KYC", "KYB"],
    },
    regulatoryStatus: {
      title: "監管與牌照 | 香港信託牌照資訊",
      description: "查看 FIDERE TRUST 香港信託與資產管理服務的監管狀態、牌照資訊與治理標準。",
      keywords: ["信託牌照", "TCSP"],
    },
    riskFees: {
      title: "風險與費用 | 信託與資產管理成本",
      description: "了解信託賬戶、託管、支付與資產管理服務相關的風險披露與費用說明。",
      keywords: ["信託費用", "資產管理費用"],
    },
    kycGuide: {
      title: "企業 KYC 指南 | 香港信託賬戶資料",
      description: "企業 KYC 與 KYB 指南，適用於香港信託賬戶、受託服務、支付、託管與資產管理開戶。",
      keywords: ["企業 KYC", "信託賬戶資料"],
    },
    personalKycGuide: {
      title: "個人 KYC 指南 | 家族信託賬戶資料",
      description: "個人 KYC 指南，適用於家族信託、香港信託賬戶與資產管理開戶。",
      keywords: ["個人 KYC", "家族信託資料"],
    },
    privacy: {
      title: "私隱政策 | FIDERE TRUST",
      description: "閱讀 FIDERE TRUST 關於信託賬戶、家族信託與資產管理服務的私隱政策。",
      keywords: ["私隱政策"],
    },
    terms: {
      title: "條款與細則 | FIDERE TRUST",
      description: "查看 FIDERE TRUST 香港信託、託管與資產管理服務的條款與細則。",
      keywords: ["條款與細則"],
    },
    disclaimer: {
      title: "免責聲明 | FIDERE TRUST",
      description: "查看 FIDERE TRUST 香港信託、託管與資產管理資訊相關的重要免責聲明。",
      keywords: ["信託免責聲明"],
    },
  },
}

export function normalizeLocale(locale?: string): Locale {
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale
}

export function getLocalizedPath(pageKey: PageKey, locale: Locale) {
  return `/${locale}${routePaths[pageKey]}`
}

export function getAbsoluteUrl(pageKey: PageKey, locale: Locale) {
  return new URL(getLocalizedPath(pageKey, locale), siteUrl).toString()
}

export function getAlternates(pageKey: PageKey, locale: Locale) {
  return {
    canonical: getAbsoluteUrl(pageKey, locale),
    languages: {
      en: getAbsoluteUrl(pageKey, "en"),
      "zh-CN": getAbsoluteUrl(pageKey, "cn"),
      "zh-Hant": getAbsoluteUrl(pageKey, "tc"),
      "x-default": getAbsoluteUrl(pageKey, defaultLocale),
    },
  }
}

function uniqueKeywords(keywords: readonly string[]) {
  return Array.from(new Set(keywords))
}

export function buildPageMetadata(pageKey: PageKey, locale?: string): Metadata {
  const normalizedLocale = normalizeLocale(locale)
  const entry = seo[normalizedLocale][pageKey]
  const groupedKeywords = pageKeywordGroups[pageKey].flatMap((group) => keywordGroups[normalizedLocale][group])
  const keywords = uniqueKeywords([...coreKeywords[normalizedLocale], ...groupedKeywords, ...entry.keywords])
  const url = getAbsoluteUrl(pageKey, normalizedLocale)

  return {
    title: entry.title,
    description: entry.description,
    keywords,
    alternates: getAlternates(pageKey, normalizedLocale),
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      siteName,
      locale: localizedLocaleNames[normalizedLocale],
      type: "website",
      images: [
        {
          url: "/hong-kong-financial-district.jpg",
          width: 1200,
          height: 630,
          alt: "FIDERE TRUST Hong Kong trust and asset management services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: ["/hong-kong-financial-district.jpg"],
    },
  }
}

export async function generatePageMetadata(
  pageKey: PageKey,
  params: Promise<{ locale: string }> | { locale: string },
) {
  const resolvedParams = await params
  return buildPageMetadata(pageKey, resolvedParams.locale)
}

export function getAllLocalizedRoutes() {
  return locales.flatMap((locale) =>
    (Object.keys(routePaths) as PageKey[]).map((pageKey) => ({
      pageKey,
      locale,
      path: getLocalizedPath(pageKey, locale),
      url: getAbsoluteUrl(pageKey, locale),
    })),
  )
}

export function buildOrganizationJsonLd(locale?: string) {
  const normalizedLocale = normalizeLocale(locale)
  const homeUrl = getAbsoluteUrl("home", normalizedLocale)
  const groupedKeywords = Object.values(keywordGroups[normalizedLocale]).flat()
  const keywords = uniqueKeywords([...coreKeywords[normalizedLocale], ...groupedKeywords])
  const serviceTypes = uniqueKeywords([
    "Trust services",
    "Hong Kong trust",
    "Asset management",
    "Family trust",
    "信托服务",
    "香港信托",
    "资产管理",
    "家族信托",
  ])

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "FinancialService"],
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        legalName: "FIDERE TRUST Limited",
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
        image: `${siteUrl}/hong-kong-financial-district.jpg`,
        email: "info@fideretrust.com",
        telephone: "+85251286593",
        address: {
          "@type": "PostalAddress",
          streetAddress: "RM 32, 1/F, Kaiser Estate Phase 3, KT Hok Yuen Street, Hung Hom",
          addressLocality: "Hong Kong",
          addressCountry: "HK",
        },
        areaServed: ["Hong Kong", "Singapore", "Global"],
        serviceType: serviceTypes,
        knowsAbout: keywords,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: homeUrl,
        name: siteName,
        inLanguage: localeLanguages[normalizedLocale],
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        keywords: keywords.join(", "),
      },
    ],
  }
}
