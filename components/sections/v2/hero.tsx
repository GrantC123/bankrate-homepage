import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const RATES = [
  { label: "National avg · 30-yr fixed", value: "6.85%", source: "Freddie Mac PMMS" },
  { label: "National avg · 15-yr fixed", value: "6.12%", source: "Freddie Mac PMMS" },
  { label: "Bankrate best offer today", value: "5.99%", source: "Bankrate marketplace", highlight: true },
]

export function HeroV2() {
  return (
    <SectionShell className="pt-8 pb-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div className="text-white">
          <h1 className="font-serif text-[64px] font-semibold leading-[1.05] tracking-[-2.5px]">
            9 out of 10 homebuyers overpay for their mortgage.{" "}
            <span className="text-blue-300">Are you one of them?</span>
          </h1>
          <p className="mt-8 max-w-[540px] text-[18px] leading-[1.55] text-white/80">
            Every year, American homeowners pay an average of{" "}
            <span className="font-semibold text-white">$3,890 more</span> than they need to. Not
            because better rates don&apos;t exist — but because their bank has no reason to offer
            them. Bankrate runs the auction that produces your most competitive rate — and it&apos;s
            free to use.
          </p>
          <div className="mt-10">
            <Button variant="primary" size="default" arrow className="h-12 px-6 text-[15px]">
              Personalize my rate
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-3">
            {RATES.map((rate) => (
              <RateTile key={rate.label} {...rate} />
            ))}
          </div>
          <p className="mt-4 px-3 pb-1 text-xs text-white/55">
            Live rates as of today. Updated daily across 600+ banks and credit unions.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

function RateTile({
  label,
  value,
  source,
  highlight,
}: {
  label: string
  value: string
  source: string
  highlight?: boolean
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-2xl bg-primary p-5 text-white"
          : "rounded-2xl bg-white/5 p-5 text-white"
      }
    >
      <p className={`text-[12px] font-semibold leading-[1.3] ${highlight ? "text-white" : "text-white/70"}`}>
        {label}
      </p>
      <p className="mt-4 font-serif text-[40px] font-semibold leading-none tracking-[-1.5px]">
        {value}
      </p>
      <p className={`mt-3 text-[11px] ${highlight ? "text-white/80" : "text-white/45"}`}>
        {source}
      </p>
    </div>
  )
}
