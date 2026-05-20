"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TABS = [
  { id: "buy", label: "I'm preparing to buy", icon: true },
  { id: "start", label: "I'm just starting out" },
  { id: "shop", label: "I'm ready to shop" },
  { id: "manage", label: "I'm managing my home" },
] as const

const CONTENT: Record<
  (typeof TABS)[number]["id"],
  { eyebrow: string; title: string; body: string }
> = {
  buy: {
    eyebrow: "I'm preparing to buy",
    title: "Stop looking at averages. See your rate today.",
    body: 'Most sites show "national averages." We use 12 million lending records to show what you actually qualify for based on your credit and goals.',
  },
  start: {
    eyebrow: "I'm just starting out",
    title: "Start with clarity, not confusion.",
    body: "Learn what you can afford, how rates work, and what lenders look for—before you talk to a bank.",
  },
  shop: {
    eyebrow: "I'm ready to shop",
    title: "Compare real offers side by side.",
    body: "See lenders competing for your business with transparent rates, fees, and monthly payments.",
  },
  manage: {
    eyebrow: "I'm managing my home",
    title: "Know when it's time to act.",
    body: "Track your rate against the market and get alerts when refinancing could save you money.",
  },
}

export function InteractiveJourney() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("buy")
  const content = CONTENT[active]

  return (
    <section className="bg-[var(--surface-cream)] px-16 py-16" aria-label="Build your future">
      <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-10">
        <h2 className="relative max-w-[846px] text-center font-serif text-[48px] font-semibold leading-[1.2] tracking-[-2px] text-gray-900">
          Build your future on a{" "}
          <span className="relative inline-block">
            stronger
            <span
              className="pointer-events-none absolute -right-8 -top-4 h-16 w-20 rounded-full border-2 border-[var(--brand-blue)]"
              aria-hidden
            />
          </span>{" "}
          foundation.
        </h2>

        <div className="w-full rounded-[48px] bg-[#dce7fe] px-[72px] py-14">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={cn(
                  "inline-flex h-11 items-center rounded-full px-[18px] text-sm font-semibold tracking-[-0.14px] transition-colors",
                  active === tab.id
                    ? "gap-1.5 bg-[var(--brand-blue)] text-white"
                    : "bg-blue-50 text-[var(--brand-blue)] hover:bg-blue-100"
                )}
              >
                {active === tab.id && tab.id === "buy" && <span aria-hidden>🏠</span>}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-stretch gap-16 lg:flex-row lg:items-center">
            <div className="w-full max-w-[556px] shrink-0 rounded-3xl bg-white p-12 shadow-[0_4px_24px_rgba(15,27,47,0.05)]">
              <h3 className="mb-8 font-serif text-2xl font-semibold tracking-[-0.72px] text-gray-900">
                Try our dynamic calculator
              </h3>
              <div className="space-y-10">
                <SliderField
                  label="Loan Amount"
                  value="$741,000"
                  min="$40,000"
                  max="$1.25 million"
                  fill={53}
                />
                <SliderField
                  label="Estimated Credit Score"
                  value="$42,000"
                  min="$1,000"
                  max="$500,000"
                  fill={22}
                />
              </div>
              <div className="mt-8 flex gap-2">
                <div className="flex h-12 flex-1 items-center rounded-lg border border-blue-200 px-5 text-[15px] text-gray-900">
                  Zip Code
                </div>
                <Button variant="primary" size="default" arrow className="h-12 shrink-0 px-5">
                  Calculate
                </Button>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 lg:pl-4">
              <p className="text-base font-semibold tracking-[-0.32px] text-[var(--brand-blue)]">
                {content.eyebrow}
              </p>
              <h3 className="font-serif text-[40px] font-semibold leading-[1.2] tracking-[-2px] text-gray-900">
                {content.title}
              </h3>
              <p className="text-lg leading-[1.4] text-gray-900">{content.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SliderField({
  label,
  value,
  min,
  max,
  fill,
}: {
  label: string
  value: string
  min: string
  max: string
  fill: number
}) {
  return (
    <div>
      <p className="mb-1 text-sm font-semibold tracking-[-0.44px] text-[var(--brand-blue)]">{label}</p>
      <p className="mb-4 font-serif text-[32px] font-semibold tracking-[-0.64px] text-gray-900">
        {value}
      </p>
      <div className="relative h-1 rounded-full bg-gray-200">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-[var(--brand-blue)]"
          style={{ width: `${fill}%` }}
        />
        <div
          className="absolute top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-[var(--brand-blue)] ring-2 ring-white"
          style={{ left: `${fill}%`, marginLeft: -7 }}
        />
      </div>
      <div className="mt-2 flex justify-between text-sm text-[#99968e]">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
}
