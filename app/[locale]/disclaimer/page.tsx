import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisclaimerContent } from "@/components/disclaimer-content"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("disclaimer", params)
}

export default function DisclaimerPage() {
  return (
    <main className="flex min-h-screen flex-col pt-10 md:pt-12">
      <Header forceDarkText={true} />
      <DisclaimerContent />
      <Footer />
    </main>
  )
}
