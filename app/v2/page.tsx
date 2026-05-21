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
import { FooterV2 } from "@/components/sections/v2/footer"

export default function HomepageV2() {
  return (
    <>
      <div className="bg-blue-900">
        <Nav />
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

      <FooterV2 />
    </>
  )
}
