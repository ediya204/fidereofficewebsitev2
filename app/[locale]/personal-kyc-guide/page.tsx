import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PersonalKycGuideContent } from "@/components/personal-kyc-guide-content"

interface PageProps {
  params: Promise<{ locale: string }>
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
