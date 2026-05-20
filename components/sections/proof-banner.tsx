import { ReadMoreLink } from "@/components/home/shared"
import { Stat } from "@/components/ui/stat"

const HEADLINE = "The proof is in the $73,000 you keep."

const STATS = [
  {
    value: "300",
    suffix: "plus" as const,
    label: "Banks and credit unions surveyed weekly.",
    valueSize: "lg" as const,
  },
  {
    value: "99.7",
    suffix: "percent" as const,
    label: "Of banks beaten by Bankrate top offers.",
    valueSize: "lg" as const,
  },
]

/**
 * Proof stats under the hero.
 * Mobile layout: Figma B2B Marketing Page node 85:526.
 * Desktop layout: Figma KOTA Proof Banner node 20395:316.
 */
export function ProofBanner() {
  return (
    <section className="bg-[#F5F2EB]" aria-label="Proof points">
      {/* Mobile — stacked cards, same content as desktop */}
      <div className="flex flex-col gap-10 px-8 pb-12 pt-16 lg:hidden">
        <h2 className="font-serif text-[32px] font-semibold leading-[1.25] tracking-[-2px] text-[#13223b]">
          {HEADLINE}
        </h2>

        <div className="flex flex-col gap-9">
          {STATS.map((stat) => (
            <Stat key={stat.value} {...stat} />
          ))}
        </div>

        <ReadMoreLink className="text-sm">
          More about Bankrate&apos;s Home Lending Advantage
        </ReadMoreLink>
      </div>

      {/* Desktop */}
      <div className="hidden px-[175px] pb-12 pt-16 lg:block">
        <div className="mx-auto flex max-w-[1090px] items-start gap-9">
          <h2 className="w-[306px] shrink-0 font-serif text-[32px] font-semibold leading-[1.25] tracking-[-2px] text-gray-900">
            {HEADLINE}
          </h2>

          <div className="flex min-w-0 flex-1 flex-col items-center gap-8">
            <div className="flex w-full max-w-[745px] gap-4">
              {STATS.map((stat) => (
                <Stat key={stat.value} className="min-w-0 flex-1" {...stat} />
              ))}
            </div>

            <ReadMoreLink className="text-sm">
              More about Bankrate&apos;s Home Lending Advantage
            </ReadMoreLink>
          </div>
        </div>
      </div>
    </section>
  )
}
