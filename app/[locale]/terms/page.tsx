import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/terms-content"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16 md:pt-20">
      <Header forceDarkText={true} />
      <TermsContent />
      <Footer />
    </main>
  )
}
