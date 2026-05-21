import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const PROOF = [
  { value: "25M+", label: "monthly users actively comparing rates" },
  { value: "50 yrs", label: "of independent rate data" },
  { value: "FRED", label: "Rate data incorporated into Federal Reserve Economic Data" },
]

export function B2BEndcap() {
  return (
    <SectionShell className="py-20">
      <div className="overflow-hidden rounded-5xl bg-white px-6 py-12 md:px-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
              Partner with the platform that powers homeownership
            </h2>
            <p className="mt-6 text-[17px] leading-[1.55] text-gray-900/80">
              25 million monthly users. 50 years of rate data. Our rate monitoring data is
              incorporated into the Federal Reserve&apos;s public economic database. If
              you&apos;re a lender looking to reach qualified borrowers, this is where they
              already are.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="default" arrow className="h-12 px-6 text-[15px]">
                Become a Bankrate partner
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {PROOF.map((point) => (
              <div
                key={point.value}
                className="flex items-baseline gap-6 rounded-2xl bg-blue-50 p-7"
              >
                <p className="font-serif text-[length:var(--text-heading-md)] font-semibold leading-none tracking-[-1.5px] text-primary">
                  {point.value}
                </p>
                <p className="text-[15px] leading-[1.4] text-gray-900/80">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
