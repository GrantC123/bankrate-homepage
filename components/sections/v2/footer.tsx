import { SectionShell } from "@/components/home/shared"

const METHODOLOGY = [
  {
    claim: "9 out of 10 / 87% of homebuyers overpay; $3,890/year average overpayment",
    source: "Bankrate Research, The Hidden Homeownership Tax, 2026 (HMDA data).",
  },
  {
    claim: "89% of purchase borrowers never compare lenders; $4,167/yr average cost",
    source: "Bankrate Research, The Hidden Homeownership Tax, 2026.",
  },
  {
    claim: "79% of refinancers pay more than the best available rate; $2,754/yr average cost",
    source: "Bankrate Research, The Hidden Homeownership Tax, 2026.",
  },
  {
    claim: "99.7% of banks beaten by Bankrate's top offers in 2025",
    source: "Bankrate internal 2025 marketplace data. See methodology page for details.",
  },
  {
    claim: "$73,000 average lifetime savings",
    source:
      "Bankrate marketplace rates compared against Freddie Mac Primary Mortgage Market Survey over a 30-year term.",
  },
  {
    claim: "10× savings rate; \"under 0.5%\" national average",
    source: "FDIC national average vs. top high-yield savings accounts tracked by Bankrate.",
  },
  {
    claim: "Rate data incorporated into FRED",
    source: "Federal Reserve Economic Data (St. Louis Fed). Verified at launch.",
  },
]

export function FooterV2() {
  return (
    <footer className="bg-blue-900 text-white">
      <SectionShell className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="font-serif text-[28px] font-semibold tracking-[-0.7px]">Bankrate</p>
            <p className="mt-4 max-w-[420px] text-[14px] leading-[1.6] text-white/70">
              Bankrate is not a lender. We&apos;re an independent platform where lenders
              compete openly for your business. We make money from advertising — never from
              the rate you choose.
            </p>
            <p className="mt-6 text-[12px] leading-[1.6] text-white/55">
              Bankrate, LLC NMLS ID# 1427381 · BR Tech Services, Inc. NMLS ID# 1743443
            </p>
          </div>

          <div id="methodology">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-300">
              Methodology &amp; Sources
            </p>
            <ul className="mt-5 space-y-4 text-[12px] leading-[1.6] text-white/70">
              {METHODOLOGY.map((entry) => (
                <li key={entry.claim}>
                  <p className="font-semibold text-white/85">{entry.claim}</p>
                  <p className="mt-1">{entry.source}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[12px] leading-[1.6] text-white/55">
              All rate figures shown on this page are illustrative for demonstration of the
              calculator and table layouts. Production deployment will replace static numbers
              with live marketplace data verified at launch.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-white/55">
          <span>© {new Date().getFullYear()} Bankrate, LLC. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#how-were-paid" className="hover:text-white">How we&apos;re paid</a>
            <a href="#accessibility" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </SectionShell>
    </footer>
  )
}
