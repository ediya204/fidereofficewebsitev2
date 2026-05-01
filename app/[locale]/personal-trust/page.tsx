import { Header } from "@/components/header"
import { PersonalTrustHero } from "@/components/personal-trust-hero"
import { PersonalTrustServices } from "@/components/personal-trust-services"
import { PersonalTrustCTA } from "@/components/personal-trust-cta"
import { Footer } from "@/components/footer"

export default function PersonalTrustPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <PersonalTrustHero />
      <PersonalTrustServices />
      <PersonalTrustCTA />
      <Footer />
    </main>
  )
}
