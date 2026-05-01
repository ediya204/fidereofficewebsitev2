import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { KycGuideContent } from "@/components/kyc-guide-content"

export default function KycGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header forceDarkText={true} />
      <KycGuideContent />
      <Footer />
    </main>
  )
}
