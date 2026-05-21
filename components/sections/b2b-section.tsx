import Image from "next/image"
import { PrimaryCta, SectionShell } from "@/components/home/shared"

const PARTNERS = [
  { src: "/images/partner-veterans.png", alt: "Veterans United Home Loans" },
  { src: "/images/partner-morty.png", alt: "Morty" },
  { src: "/images/partner-tomo.png", alt: "Tomo Mortgage" },
  { src: "/images/partner-mrcooper.png", alt: "Mr. Cooper" },
]

const BULLETS = [
  {
    label: "Qualified Reach:",
    text: "Access over 25 million high-intent monthly users.",
  },
  {
    label: "Data-Driven Matchmaking:",
    text: "Use our 50 years of market intelligence to find the right customers for your specific products.",
  },
  {
    label: "Trusted Integration:",
    text: "Join a marketplace cited by the Federal Reserve and top-tier financial media.",
  },
]

export function B2BSection() {
  return (
    <div className="bg-[var(--surface-cream)]">
      <SectionShell className="pb-8 pt-20">
        <div className="relative mb-16 text-center">
          <h2 className="relative mx-auto max-w-[742px] font-serif text-[48px] font-semibold leading-[1.2] tracking-[-2px] text-gray-900">
            Partner with the marketplace that powers homeownership.
          </h2>
          <Image
            src="/images/b2b-underline.svg"
            alt=""
            width={168}
            height={6}
            className="pointer-events-none absolute left-1/2 top-[72px] -translate-x-[120px]"
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="relative mx-auto h-[535px] w-full max-w-[588px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/b2b-bg.svg"
              alt=""
              fill
              className="object-contain object-center"
              aria-hidden
            />
            <div className="absolute left-1/2 top-1/2 grid w-[362px] -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-2">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.alt}
                  className="relative flex h-[120px] items-center justify-center overflow-hidden rounded-[21px] bg-white shadow-sm"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={126}
                    height={46}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[604px] lg:pl-10">
            <h3 className="mb-6 font-serif text-[36px] font-semibold leading-[1.21] tracking-[-1.44px] text-gray-900">
              We don&apos;t just connect people to rates; we connect them to the right institutions.
            </h3>
            <p className="mb-8 text-lg leading-[1.4] text-gray-900/80">
              Bankrate provides a high-intent, data-driven platform where the nation&apos;s top lenders
              meet qualified borrowers. Whether you are looking to scale your mortgage volume or deepen
              customer loyalty, we offer the technology and trust to help your business thrive.
            </p>
            <ul className="mb-8 space-y-4 pl-6 text-lg leading-[1.4] text-gray-900">
              {BULLETS.map((item) => (
                <li key={item.label} className="list-none">
                  <span className="font-bold">{item.label}</span> {item.text}
                </li>
              ))}
            </ul>
            <PrimaryCta>Become a Bankrate Partner</PrimaryCta>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
