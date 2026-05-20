import Image from "next/image"
import { SectionShell } from "@/components/home/shared"

export function MissionSection() {
  return (
    <SectionShell className="py-16">
      <div className="relative mx-auto max-w-[866px] text-center">
        <p className="mb-2 text-base font-semibold text-[var(--brand-blue)]">Our Mission</p>
        <div className="relative mx-auto mb-6 max-w-[742px]">
          <h2 className="font-serif text-[48px] font-semibold leading-[1.2] tracking-[-2px] text-gray-900">
            We connect people to trusted ways to save, borrow and thrive.
          </h2>
          <Image
            src="/figma/mission-decoration.svg"
            alt=""
            width={583}
            height={48}
            className="pointer-events-none absolute left-1/2 top-[60%] -translate-x-1/2"
            aria-hidden
          />
        </div>
        <p className="mx-auto max-w-[626px] text-lg leading-[1.4] text-gray-900/70">
          The financial system is designed to be confusing, but it doesn&apos;t have to stay that way.
          We simplify the process and hold lenders accountable so you can make your next move with
          total clarity.
        </p>
      </div>
    </SectionShell>
  )
}
