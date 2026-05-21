import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const TILES = [
  {
    title: "Savings & CDs",
    body:
      "Most banks pay under 0.5%. The best ones pay more than 10× that. We track which is which, every week.",
    cta: "See today's rates",
    accent: "bg-yellow-200",
  },
  {
    title: "Credit cards",
    body:
      "The most valuable cards on the market, ranked by what they actually pay you — not by who pays us to rank them.",
    cta: "Compare cards",
    accent: "bg-green-300",
  },
  {
    title: "Home equity",
    body: "What your home is worth now — and how to put it to work.",
    cta: "Explore options",
    accent: "bg-indigo-400",
  },
  {
    title: "Personal loans",
    body: "Rates from lenders who've earned a place in this comparison.",
    cta: "See rates",
    accent: "bg-blue-200",
  },
]

export function ProductsV2() {
  return (
    <SectionShell className="py-20">
      <h2 className="max-w-[760px] font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
        Build your home on a stronger financial foundation
      </h2>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {TILES.map((tile) => (
          <article
            key={tile.title}
            className="flex h-full flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-8"
          >
            <div className={`h-32 w-full rounded-2xl ${tile.accent}`} aria-hidden />
            <h3 className="font-serif text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-gray-900">
              {tile.title}
            </h3>
            <p className="text-[15px] leading-[1.5] text-gray-900/75">{tile.body}</p>
            <div className="mt-auto">
              <Button variant="primary" size="default" arrow className="h-11 px-5 text-[14px]">
                {tile.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
