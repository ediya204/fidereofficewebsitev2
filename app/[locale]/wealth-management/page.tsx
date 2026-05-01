import { Header } from "@/components/header"
import { WealthHero } from "@/components/wealth-hero"
import { WealthOverview } from "@/components/wealth-overview"
import { WealthBenefits } from "@/components/wealth-benefits"
import { WealthComparison } from "@/components/wealth-comparison"
import { WealthFAQ } from "@/components/wealth-faq"
import { WealthCTA } from "@/components/wealth-cta"
import { Footer } from "@/components/footer"

export default function WealthManagementPage() {
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
