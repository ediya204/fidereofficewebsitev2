import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FamilyOfficeContent } from "@/components/family-office-content"

export default function FamilyOfficePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <FamilyOfficeContent />
      <Footer />
    </main>
  )
}
