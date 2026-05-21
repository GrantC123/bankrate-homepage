"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { SectionShell } from "@/components/home/shared"
import { cn } from "@/lib/utils"

const RATE_TABS = [
  { id: "30yr", label: "30-yr fixed", rate: 6.85, apr: 6.92, points: 0.7 },
  { id: "15yr", label: "15-yr fixed", rate: 6.12, apr: 6.21, points: 0.5 },
  { id: "5_1arm", label: "5/1 ARM", rate: 6.45, apr: 6.61, points: 0.6 },
  { id: "va", label: "30-yr VA", rate: 6.25, apr: 6.34, points: 0.4 },
] as const

const NATIONAL_AVG_30YR = 6.85
const BANKRATE_BEST_30YR = 5.99

const LOAN_MIN = 100_000
const LOAN_MAX = 1_500_000

const SCORE_BUCKETS = [
  { id: "760", label: "760+", adjustment: -0.15 },
  { id: "720", label: "720–759", adjustment: 0 },
  { id: "680", label: "680–719", adjustment: 0.2 },
  { id: "620", label: "620–679", adjustment: 0.5 },
] as const

const usd0 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

function monthlyPayment(principal: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12
  const n = years * 12
  if (r === 0) return principal / n
  return (principal * r) / (1 - Math.pow(1 + r, -n))
}

export function RatesAndCalculator() {
  return (
    <SectionShell className="py-20">
      <header className="mx-auto max-w-[760px] text-center">
        <h2 className="font-serif text-[48px] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
          Today&apos;s rates. Not the ones your bank quoted you.
        </h2>
        <p className="mt-6 text-[18px] leading-[1.55] text-gray-900/80">
          These aren&apos;t national averages. They&apos;re real offers from lenders competing
          for your business today.
        </p>
      </header>

      <RateTable />

      <CalculatorTease />
    </SectionShell>
  )
}

function RateTable() {
  const [active, setActive] = useState<(typeof RATE_TABS)[number]["id"]>("30yr")
  const current = RATE_TABS.find((t) => t.id === active) ?? RATE_TABS[0]

  return (
    <div className="mt-12 overflow-hidden rounded-3xl bg-white">
      <div className="flex flex-wrap border-b border-gray-200">
        {RATE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex-1 px-6 py-5 text-[15px] font-semibold tracking-[-0.2px] transition-colors",
              active === tab.id
                ? "border-b-2 border-primary text-primary"
                : "border-b-2 border-transparent text-gray-900/60 hover:text-gray-900"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 p-10 md:grid-cols-3">
        <Cell label="Bankrate best rate" value={`${(current.rate - 0.86).toFixed(2)}%`} highlight />
        <Cell label="National average" value={`${current.rate.toFixed(2)}%`} />
        <Cell label="Points" value={current.points.toFixed(1)} />
      </div>

      <div className="border-t border-gray-200 p-6 text-center">
        <a
          href="#mortgage-rates"
          className="text-[14px] font-semibold text-primary underline-offset-4 hover:underline"
        >
          See all mortgage rates →
        </a>
      </div>
    </div>
  )
}

function Cell({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className={cn("text-[12px] font-semibold uppercase tracking-[0.15em]", highlight ? "text-primary" : "text-gray-900/55")}>
        {label}
      </p>
      <p
        className={cn(
          "mt-2 font-serif text-[44px] font-semibold leading-none tracking-[-1.5px]",
          highlight ? "text-primary" : "text-gray-900"
        )}
      >
        {value}
      </p>
    </div>
  )
}

function CalculatorTease() {
  const [loan, setLoan] = useState(450_000)
  const [scoreBucket, setScoreBucket] = useState<(typeof SCORE_BUCKETS)[number]["id"]>("720")
  const [loanType, setLoanType] = useState<(typeof RATE_TABS)[number]["id"]>("30yr")

  const result = useMemo(() => {
    const tab = RATE_TABS.find((t) => t.id === loanType) ?? RATE_TABS[0]
    const bucket =
      SCORE_BUCKETS.find((b) => b.id === scoreBucket) ?? SCORE_BUCKETS[1]
    const years = tab.id === "15yr" ? 15 : 30
    const bestRate = BANKRATE_BEST_30YR + (tab.rate - NATIONAL_AVG_30YR) + bucket.adjustment
    const avgRate = tab.rate + bucket.adjustment
    const bestMonthly = monthlyPayment(loan, bestRate, years)
    const avgMonthly = monthlyPayment(loan, avgRate, years)
    const monthlySavings = avgMonthly - bestMonthly
    return {
      bestRate: bestRate.toFixed(2),
      avgRate: avgRate.toFixed(2),
      bestMonthly: usd0.format(Math.round(bestMonthly)),
      yearlySavings: usd0.format(Math.round(monthlySavings * 12)),
      lifetimeSavings: usd0.format(Math.round(monthlySavings * 12 * years)),
    }
  }, [loan, loanType, scoreBucket])

  return (
    <div className="mt-12 grid gap-10 rounded-3xl bg-white p-12 md:grid-cols-[1.05fr_1fr]">
      <div>
        <h3 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[-1px] text-gray-900">
          What does your rate actually cost you?
        </h3>
        <p className="mt-4 text-[16px] leading-[1.55] text-gray-900/75">
          Enter your loan amount and we&apos;ll show you what a better rate puts back in your
          pocket — per month, and over the life of the loan.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-[13px] font-semibold tracking-[-0.2px] text-primary">
                Loan amount
              </span>
              <span className="font-serif text-[28px] font-semibold tracking-[-0.7px] text-gray-900">
                {usd0.format(loan)}
              </span>
            </div>
            <Slider
              className="mt-3"
              value={[loan]}
              min={LOAN_MIN}
              max={LOAN_MAX}
              step={5000}
              onValueChange={(v) => setLoan(v[0])}
              aria-label="Loan amount"
            />
            <div className="mt-2 flex justify-between text-[12px] text-gray-900/55">
              <span>{usd0.format(LOAN_MIN)}</span>
              <span>$1.5 million</span>
            </div>
          </div>

          <div>
            <span className="text-[13px] font-semibold tracking-[-0.2px] text-primary">Loan type</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {RATE_TABS.map((tab) => (
                <Pill
                  key={tab.id}
                  active={loanType === tab.id}
                  onClick={() => setLoanType(tab.id)}
                >
                  {tab.label}
                </Pill>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[13px] font-semibold tracking-[-0.2px] text-primary">Credit score range</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {SCORE_BUCKETS.map((bucket) => (
                <Pill
                  key={bucket.id}
                  active={scoreBucket === bucket.id}
                  onClick={() => setScoreBucket(bucket.id)}
                >
                  {bucket.label}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-8 rounded-2xl bg-blue-50 p-10">
        <p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-primary">
          Your personalized estimate
        </p>
        <p className="font-serif text-[26px] leading-[1.3] tracking-[-0.6px] text-gray-900">
          At today&apos;s best Bankrate rate of{" "}
          <span className="text-primary">{result.bestRate}%</span>, you&apos;d pay{" "}
          <span className="text-primary">{result.bestMonthly}/month</span> — that&apos;s{" "}
          <span className="text-primary">{result.yearlySavings} less per year</span> than the
          national average for the same loan.
        </p>
        <div className="rounded-xl bg-white p-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-900/55">
            Estimated lifetime savings
          </p>
          <p className="mt-2 font-serif text-[44px] font-semibold leading-none tracking-[-1.5px] text-primary">
            {result.lifetimeSavings}
          </p>
        </div>
        <Button variant="primary" size="default" arrow className="h-12 px-6 text-[15px]">
          Get my personalized rate
        </Button>
      </div>
    </div>
  )
}

function Pill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-10 items-center rounded-full px-4 text-[14px] font-semibold transition-colors",
        active
          ? "bg-primary text-white"
          : "bg-blue-50 text-primary hover:bg-blue-100"
      )}
    >
      {children}
    </button>
  )
}
