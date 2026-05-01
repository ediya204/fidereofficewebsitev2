import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DisclaimerContent } from "@/components/disclaimer-content"

export default function DisclaimerPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16 md:pt-20">
      <Header forceDarkText={true} />
      <DisclaimerContent />
      <Footer />
    </main>
  )
}
