import { AboutCompliance } from "@/components/about-compliance"
import { AboutExperience } from "@/components/about-experience"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutTeam } from "@/components/about-team"
import { AboutValues } from "@/components/about-values"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { buildCanonicalPageMetadata } from "@/lib/seo"

export const metadata = buildCanonicalPageMetadata("about")

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header forceDarkText={false} />
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutExperience />
      <AboutTeam />
      <AboutCompliance />
      <Footer />
    </main>
  )
}
