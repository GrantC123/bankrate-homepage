import Image from "next/image"
import { Eyebrow, PrimaryCta, SectionShell } from "@/components/home/shared"

export function MemberAppSection() {
  return (
    <SectionShell className="py-20">
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
        <div className="relative h-[616px] overflow-hidden rounded-[32px] bg-[var(--brand-blue)]">
          <Image
            src="/images/member-phone.png"
            alt="Bankrate member app showing today's top mortgage rates"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 588px"
          />
        </div>

        <div className="max-w-[604px] lg:pl-10">
          <Eyebrow>Backed by Bankrate</Eyebrow>
          <h2 className="mb-6 mt-4 font-serif text-[48px] font-semibold leading-[1.2] tracking-[-2px] text-gray-900">
            Confidence shouldn&apos;t be a feeling. It should be a calculation.
          </h2>
          <p className="mb-8 text-lg leading-[1.4] text-gray-900/80">
            Our Bankrate member experience is the next evolution of financial tooling. We take our
            50 years of data and apply it directly to your specific financial profile to build a
            roadmap for your home journey.
          </p>
          <PrimaryCta>Sign up / Log in</PrimaryCta>
        </div>
      </div>
    </SectionShell>
  )
}
