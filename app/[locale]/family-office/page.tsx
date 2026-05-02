import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FamilyOfficeContent } from "@/components/family-office-content"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("familyOffice", params)
}

export default function FamilyOfficePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={true} />
      <FamilyOfficeContent />
      <Footer />
    </main>
  )
}
