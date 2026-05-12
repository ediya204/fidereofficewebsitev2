import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { OffshoreOverview } from "@/components/offshore-overview"
import { SolutionsSection } from "@/components/solutions-section"
import { buildCanonicalPageMetadata, buildOrganizationJsonLd } from "@/lib/seo"

export const metadata = buildCanonicalPageMetadata("home")

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationJsonLd("en")).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <HeroSection />
      <IntroSection />
      <OffshoreOverview />
      <SolutionsSection />
      <Footer />
    </main>
  )
}
