import { Header } from "@/components/header"
import { OffshoreHero } from "@/components/offshore-hero"
import { OffshoreOverview } from "@/components/offshore-overview"
import { OffshoreBenefits } from "@/components/offshore-benefits"
import { OffshoreComparison } from "@/components/offshore-comparison"
import { OffshoreFAQ } from "@/components/offshore-faq"
import { OffshoreCTA } from "@/components/offshore-cta"
import { Footer } from "@/components/footer"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("offshoreAccounts", params)
}

export default function OffshoreAccountsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <OffshoreHero />
      <OffshoreOverview />
      <OffshoreBenefits />
      <OffshoreComparison />
      <OffshoreFAQ />
      <OffshoreCTA />
      <Footer />
    </main>
  )
}
