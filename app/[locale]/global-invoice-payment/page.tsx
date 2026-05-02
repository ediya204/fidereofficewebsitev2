import { Header } from "@/components/header"
import { GlobalInvoicePaymentHero } from "@/components/global-invoice-payment-hero"
import { GlobalInvoicePayment } from "@/components/global-invoice-payment"
import { SolutionsCTA } from "@/components/solutions-cta"
import { Footer } from "@/components/footer"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("globalInvoicePayment", params)
}

export default function GlobalInvoicePaymentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <GlobalInvoicePaymentHero />
      <GlobalInvoicePayment />
      <SolutionsCTA />
      <Footer />
    </main>
  )
}
