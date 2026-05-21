import { Nav } from "@/components/sections/nav"
import { HeroV2 } from "@/components/sections/v2/hero"
import { ProofBannerV2 } from "@/components/sections/v2/proof-banner"
import { IdentityStatement } from "@/components/sections/v2/identity-statement"
import { AudiencePathing } from "@/components/sections/v2/audience-pathing"
import { MemberExperienceV2 } from "@/components/sections/v2/member-experience"
import { RatesAndCalculator } from "@/components/sections/v2/rates-calculator"
import { EditorialResearch } from "@/components/sections/v2/editorial-research"
import { ExpertTeamV2 } from "@/components/sections/v2/expert-team"
import { ProductsV2 } from "@/components/sections/v2/products"
import { B2BEndcap } from "@/components/sections/v2/b2b-endcap"
import { Footer } from "@/components/sections/footer"

export default function HomepageV2() {
  return (
    <>
      <div className="bg-[#f5f2eb]">
        <Nav variant="cream" />
        <HeroV2 />
      </div>

      <main className="bg-[var(--surface-cream)]">
        <ProofBannerV2 />
        <IdentityStatement />
        <AudiencePathing />
        <MemberExperienceV2 />
        <RatesAndCalculator />
        <EditorialResearch />
        <ExpertTeamV2 />
        <ProductsV2 />
        <B2BEndcap />
      </main>

      <Footer />
    </>
  )
}
