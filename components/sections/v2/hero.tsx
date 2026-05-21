import Image from "next/image"
import { Button } from "@/components/ui/button"

const RATES = [
  { label: "National avg · 30-yr fixed", value: "6.85%", source: "Freddie Mac PMMS" },
  { label: "National avg · 15-yr fixed", value: "6.12%", source: "Freddie Mac PMMS" },
  {
    label: "Bankrate best offer today",
    value: "5.99%",
    source: "Bankrate marketplace",
    highlight: true,
  },
] as const

/**
 * Hero — Figma Homepage redesign node 192:1278 (Bankrate_Hero_2.17).
 */
export function HeroV2() {
  return (
    <section
      className="flex min-h-[min(810px,100dvh)] items-center justify-center bg-[#f5f2eb] px-6 pb-10 pt-6 md:px-12 lg:px-12"
      aria-label="Hero"
    >
      <div className="relative flex w-full max-w-[1312px] flex-col gap-10 overflow-hidden rounded-[32px] bg-[#13223b] p-8 lg:min-h-[626px] lg:flex-row lg:items-center lg:gap-16 lg:rounded-[56px] lg:px-16 lg:py-[72px]">
        <div className="relative z-10 flex max-w-[777px] flex-col gap-8 pb-6 lg:flex-1 lg:pb-0">
          <div className="flex flex-col gap-6 text-[#f5f2eb] lg:gap-8">
            <h1 className="font-serif text-[36px] font-semibold leading-[1.05] tracking-[-2px] md:text-[52px] lg:text-[length:var(--text-display)] lg:tracking-[-2px]">
              9 out of 10 homebuyers overpay for their mortgage.{" "}
              <span className="text-blue-300">Are you one of them?</span>
            </h1>
            <p className="max-w-[540px] text-[16px] leading-[1.55] text-white/80 lg:text-[18px]">
              Every year, American homeowners pay an average of{" "}
              <span className="font-semibold text-white">$3,890 more</span> than they need to. Not
              because better rates don&apos;t exist — but because their bank has no reason to offer
              them. Bankrate runs the auction that produces your most competitive rate — and it&apos;s
              free to use.
            </p>
          </div>
          <Button
            variant="primary"
            size="default"
            arrow
            className="h-12 w-full max-w-[240px] px-5 text-[15px]"
          >
            Personalize my rate
          </Button>
        </div>

        <div className="relative z-10 w-full shrink-0 lg:w-[359px]">
          <Image
            src="/images/hero-v2-sparkle.svg"
            alt=""
            width={66}
            height={79}
            className="pointer-events-none absolute -top-2 right-0 hidden lg:block"
            aria-hidden
          />
          <div className="rounded-[17.6px] border border-white/10 bg-white/[0.04] p-4">
            <div className="flex flex-col gap-3">
              {RATES.map((rate) => (
                <RateTile key={rate.label} {...rate} />
              ))}
            </div>
            <p className="mt-4 text-[12px] leading-[1.7] text-white/55">
              Live rates as of today. Updated daily across 600+ banks and credit unions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function RateTile({
  label,
  value,
  source,
  highlight = false,
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
          ? "rounded-[14.4px] bg-[#0061fe] p-5"
          : "rounded-[14.4px] bg-white/[0.05] p-5"
      }
    >
      <p
        className={`text-[12px] font-semibold leading-[1.3] ${
          highlight ? "text-white" : "text-white/70"
        }`}
      >
        {label}
      </p>
      <p className="mt-4 font-serif text-[40px] font-semibold leading-none tracking-[-1.5px] text-white">
        {value}
      </p>
      <p className={`mt-3 text-[11px] leading-[1.5] ${highlight ? "text-white/80" : "text-white/45"}`}>
        {source}
      </p>
    </div>
  )
}
