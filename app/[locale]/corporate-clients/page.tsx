import { Header } from "@/components/header"
import { CorporateServicesSection } from "@/components/corporate-services-section"
import { SolutionsCTA } from "@/components/solutions-cta"
import { Footer } from "@/components/footer"

export default function CorporateClientsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={true} />
      <CorporateServicesSection />
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
