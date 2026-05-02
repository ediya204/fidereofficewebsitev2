import { Header } from "@/components/header"
import { CorporateClientsHero } from "@/components/corporate-clients-hero"
import { CorporateServicesSection } from "@/components/corporate-services-section"
import { SolutionsCTA } from "@/components/solutions-cta"
import { Footer } from "@/components/footer"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("corporateClients", params)
}

export default function CorporateClientsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={true} />
      <CorporateClientsHero />
      <CorporateServicesSection />
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
