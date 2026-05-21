import { ReadMoreLink, SectionShell } from "@/components/home/shared"
import { Stat, type StatProps } from "@/components/ui/stat"

const STATS: StatProps[] = [
  {
    value: "99.7",
    suffix: "percent",
    label: "Of banks beaten by Bankrate's top offers in 2025",
  },
  {
    value: "600",
    suffix: "plus",
    label: "Banks and credit unions surveyed every week",
  },
  {
    value: "$73,000",
    valueSize: "sm",
    label: "Average saved by Bankrate mortgage users over 30 years",
  },
]

export function ProofBannerV2() {
  return (
    <SectionShell className="pt-20 pb-12">
      <div className="grid gap-4 md:grid-cols-3">
        {STATS.map((stat) => (
          <Stat key={stat.value} {...stat} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <ReadMoreLink href="#methodology">How we measure this</ReadMoreLink>
      </div>
    </SectionShell>
  )
}
