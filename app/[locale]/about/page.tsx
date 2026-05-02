import { Header } from "@/components/header"
import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutValues } from "@/components/about-values"
import { AboutExperience } from "@/components/about-experience"
import { AboutTeam } from "@/components/about-team"
import { AboutCompliance } from "@/components/about-compliance"
import { Footer } from "@/components/footer"
import { generatePageMetadata } from "@/lib/seo"

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return generatePageMetadata("about", params)
}

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
