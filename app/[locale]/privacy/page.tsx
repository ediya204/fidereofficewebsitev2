import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyContent } from "@/components/privacy-content"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("privacy", params)
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col pt-10 md:pt-12">
      <Header forceDarkText={true} />
      <PrivacyContent />
      <Footer />
    </main>
  )
}
