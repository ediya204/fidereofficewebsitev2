import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyContent } from "@/components/privacy-content"

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16 md:pt-20">
      <Header forceDarkText={true} />
      <PrivacyContent />
      <Footer />
    </main>
  )
}
