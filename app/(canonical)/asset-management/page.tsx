import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WealthBenefits } from "@/components/wealth-benefits"
import { WealthComparison } from "@/components/wealth-comparison"
import { WealthCTA } from "@/components/wealth-cta"
import { WealthFAQ } from "@/components/wealth-faq"
import { WealthHero } from "@/components/wealth-hero"
import { WealthOverview } from "@/components/wealth-overview"
import { buildCanonicalPageMetadata } from "@/lib/seo"

export const metadata = buildCanonicalPageMetadata("assetManagement")

export default function AssetManagementPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <WealthHero />
      <WealthOverview />
      <WealthBenefits />
      <WealthComparison />
      <WealthFAQ />
      <WealthCTA />
      <Footer />
    </main>
  )
}
