import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComplianceKycContent } from "@/components/compliance-kyc-content"

export default function ComplianceKycPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16 md:pt-20">
      <Header forceDarkText={true} />
      <ComplianceKycContent />
      <Footer />
    </main>
  )
}
