import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RiskFeesContent } from "@/components/risk-fees-content"

export default function RiskFeesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={true} />
      <RiskFeesContent />
      <Footer />
    </main>
  )
}
