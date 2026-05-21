import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const PATHS = [
  {
    id: "A",
    title: "Buying a home",
    body:
      "The lender your agent recommended is one option. There are hundreds more. 89% of purchase borrowers never compare them — and pay an average of $4,167 a year for it.",
    cta: "Compare mortgage rates",
  },
  {
    id: "B",
    title: "Already have a mortgage",
    body:
      "No deadline, no pressure — and yet 79% of people who refinance still pay more than the best rate available for their profile. When did you last check yours?",
    cta: "See refinance rates",
  },
  {
    id: "C",
    title: "Saving for a home",
    body:
      "The best savings rate right now is more than 10× what most banks pay. That gap is a down payment accelerator if you use it.",
    cta: "Find the best savings rates",
  },
  {
    id: "D",
    title: "Managing what you've built",
    body:
      "Home equity, credit cards, personal loans — here's where your money works harder than it does at your current bank.",
    cta: "Explore all products",
  },
] as const

export function AudiencePathing() {
  return (
    <SectionShell className="py-20">
      <h2 className="font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
        Where are you right now?
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {PATHS.map((path) => (
          <article
            key={path.id}
            className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 md:p-10"
          >
            <div className="flex items-baseline gap-4">
              <h3 className="font-serif text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-gray-900">
                {path.title}
              </h3>
            </div>
            <p className="text-[17px] leading-[1.5] text-gray-900/80">{path.body}</p>
            <div className="mt-auto">
              <Button variant="primary" size="default" arrow className="h-12 px-5 text-[15px]">
                {path.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-[640px] text-center text-[14px] leading-[1.55] text-gray-900/60">
        No spam calls. Your information is never sold to lenders. You reach out when
        you&apos;re ready — not the other way around.
      </p>
    </SectionShell>
  )
}
