import { ReadMoreLink, SectionShell } from "@/components/home/shared"

export function IdentityStatement() {
  return (
    <SectionShell className="py-20">
      <div className="mx-auto max-w-[860px] text-center">
        <h2 className="font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
          Why Bankrate can offer what your bank won&apos;t
        </h2>
        <p className="mt-8 text-[18px] leading-[1.55] text-gray-900/80">
          Your bank is a lender. It has a rate to protect and no reason to beat it. Bankrate
          isn&apos;t a bank, isn&apos;t a lender, and doesn&apos;t make money on the rate you
          choose. We&apos;re an independent platform where lenders have to compete openly for
          your business — and because we have no stake in which one wins, neither do our
          recommendations. The better rate exists. It just requires a place where lenders
          can&apos;t avoid offering it.
        </p>
        <div className="mt-8 flex justify-center">
          <ReadMoreLink href="#how-were-paid">How we&apos;re paid — and why that matters</ReadMoreLink>
        </div>
      </div>
    </SectionShell>
  )
}
