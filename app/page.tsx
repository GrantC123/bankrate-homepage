import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/ui/hero"
import { ProofBanner } from "@/components/sections/proof-banner"
import { InteractiveJourney } from "@/components/sections/interactive-journey"
import { EditorialSection } from "@/components/sections/editorial-section"
import { ExpertTeamSection } from "@/components/sections/expert-team-section"
import { MemberAppSection } from "@/components/sections/member-app-section"
import { MissionSection } from "@/components/sections/mission-section"
import { FeatureBlocks } from "@/components/sections/feature-blocks"
import { B2BSection } from "@/components/sections/b2b-section"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="bg-blue-900">
        <Hero />
      </div>

      <div className="bg-[#F5F2EB]">
        <ProofBanner />
        <main>
          <InteractiveJourney />
          <EditorialSection />
          <ExpertTeamSection />
          <MemberAppSection />
          <MissionSection />
          <FeatureBlocks />
          <B2BSection />
        </main>
      </div>

      <Footer />
    </>
  )
}
