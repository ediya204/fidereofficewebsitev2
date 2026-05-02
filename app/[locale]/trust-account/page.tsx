import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustAccountHero } from "@/components/trust-account-hero"
import { TrustAccountBenefits } from "@/components/trust-account-benefits"
import { TrustAccountPlatform } from "@/components/trust-account-platform"
import { TrustAccountTechnology } from "@/components/trust-account-technology"
import { TrustAccountServices } from "@/components/trust-account-services"
import { TrustAccountNetwork } from "@/components/trust-account-network"
import { TrustAccountCTA } from "@/components/trust-account-cta"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("trustAccount", params)
}

export default function TrustAccountPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TrustAccountHero />
      <TrustAccountBenefits />
      <TrustAccountPlatform />
      <TrustAccountTechnology />
      <TrustAccountServices />
      <TrustAccountNetwork />
      <TrustAccountCTA />
      <Footer />
    </main>
  )
}
