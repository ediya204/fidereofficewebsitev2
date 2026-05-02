import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PersonalKycGuideContent } from "@/components/personal-kyc-guide-content"
import { generatePageMetadata } from "@/lib/seo"

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateMetadata({ params }: PageProps) {
  return generatePageMetadata("personalKycGuide", params)
}

export default async function PersonalKycGuidePage({ params }: PageProps) {
  const { locale } = await params
  return (
    <>
      <Header forceDarkText={true} />
      <PersonalKycGuideContent locale={locale} />
      <Footer />
    </>
  )
}
