import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComplianceKycContent } from "@/components/compliance-kyc-content"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("complianceKyc", params)
}

export default function ComplianceKycPage() {
  return (
    <main className="flex min-h-screen flex-col pt-10 md:pt-12">
      <Header forceDarkText={true} />
      <ComplianceKycContent />
      <Footer />
    </main>
  )
}
