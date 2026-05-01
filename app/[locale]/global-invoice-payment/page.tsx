import { Header } from "@/components/header"
import { GlobalInvoicePaymentHero } from "@/components/global-invoice-payment-hero"
import { GlobalInvoicePayment } from "@/components/global-invoice-payment"
import { SolutionsCTA } from "@/components/solutions-cta"
import { Footer } from "@/components/footer"

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
