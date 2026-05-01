import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { OffshoreOverview } from "@/components/offshore-overview"
import { SolutionsSection } from "@/components/solutions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <IntroSection />
      <OffshoreOverview />
      <SolutionsSection />
      <Footer />
    </main>
  )
}
