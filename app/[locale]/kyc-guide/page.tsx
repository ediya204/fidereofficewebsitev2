import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { KycGuideContent } from "@/components/kyc-guide-content"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("kycGuide", params)
}

export default function KycGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header forceDarkText={true} />
      <KycGuideContent />
      <Footer />
    </main>
  )
}
