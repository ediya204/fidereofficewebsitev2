import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/terms-content"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("terms", params)
}

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-10 md:pt-12">
      <Header forceDarkText={true} />
      <TermsContent />
      <Footer />
    </main>
  )
}
