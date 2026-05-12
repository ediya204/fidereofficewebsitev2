import { CorporateServicesSection } from "@/components/corporate-services-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { SolutionsCTA } from "@/components/solutions-cta"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsIntro } from "@/components/solutions-intro"
import { TrustCustodySolution } from "@/components/trust-custody-solution"
import { buildCanonicalPageMetadata } from "@/lib/seo"

export const metadata = buildCanonicalPageMetadata("services")

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={true} />
      <SolutionsHero />
      <SolutionsIntro />
      <TrustCustodySolution />
      <CorporateServicesSection />
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
