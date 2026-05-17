import { AccountTypeSelection } from "@/components/account-type-selection"
import type { Metadata } from "next"

const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "Choose Account Type | FIDERE TRUST Client Portal",
    description: "Choose a personal or corporate account type before starting FIDERE TRUST onboarding.",
  },
  cn: {
    title: "选择账户类型 | FIDERE TRUST 客户门户",
    description: "在开始 FIDERE TRUST 开户流程前，选择个人账户或企业账户类型。",
  },
  tc: {
    title: "選擇賬戶類型 | FIDERE TRUST 客戶門戶",
    description: "在開始 FIDERE TRUST 開戶流程前，選擇個人賬戶或企業賬戶類型。",
  },
  ar: {
    title: "اختيار نوع الحساب | بوابة عملاء FIDERE TRUST",
    description: "اختر حسابا شخصيا أو حساب شركة قبل بدء إجراءات فتح الحساب لدى FIDERE TRUST.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return metadataByLocale[locale] || metadataByLocale.en
}

export default function AccountTypeSelectionPage() {
  return <AccountTypeSelection />
}
