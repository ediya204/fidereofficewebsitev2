import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("contact", params)
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={false} />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-16">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </main>
  )
}
