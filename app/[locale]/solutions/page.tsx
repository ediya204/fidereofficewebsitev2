import { Header } from "@/components/header"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsIntro } from "@/components/solutions-intro"
import { TrustCustodySolution } from "@/components/trust-custody-solution"
import { CorporateServicesSection } from "@/components/corporate-services-section"
import { SolutionsCTA } from "@/components/solutions-cta"
import { Footer } from "@/components/footer"

export default function SolutionsPage() {
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
