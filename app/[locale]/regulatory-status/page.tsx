import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegulatoryStatusContent } from "@/components/regulatory-status-content"

export default function RegulatoryStatusPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={true} />
      <RegulatoryStatusContent />
      <Footer />
    </main>
  )
}
