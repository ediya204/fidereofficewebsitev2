import { ComplianceKycContent } from "@/components/compliance-kyc-content"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { buildCanonicalPageMetadata } from "@/lib/seo"

export const metadata = buildCanonicalPageMetadata("compliance")

export default function CompliancePage() {
  return (
    <main className="flex min-h-screen flex-col pt-10 md:pt-12">
      <Header forceDarkText={true} />
      <ComplianceKycContent />
      <Footer />
    </main>
  )
}
