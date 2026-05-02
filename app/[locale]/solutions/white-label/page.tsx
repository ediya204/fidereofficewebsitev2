import { Header } from "@/components/header"
import { WhiteLabelHero } from "@/components/white-label-hero"
import { WhiteLabelUseCases } from "@/components/white-label-use-cases"
import { WhiteLabelHongKong } from "@/components/white-label-hong-kong"
import { WhiteLabelCTA } from "@/components/white-label-cta"
import { Footer } from "@/components/footer"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("whiteLabel", params)
}

export default function WhiteLabelPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={false} />
      <WhiteLabelHero />
      <WhiteLabelUseCases />
      <WhiteLabelHongKong />
      <WhiteLabelCTA />
      <Footer />
    </main>
  )
}
