import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface HeroProps {
  /** First line of the headline, e.g. "Your bank has a" */
  headlineLine1?: string
  /** Highlighted word with underline decoration */
  headlineHighlight?: string
  /** Text after the highlight, e.g. "one." */
  headlineLine2Suffix?: string
  /** Lead paragraph below the headline */
  description?: string
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  /** Shown in the payment callout card */
  estimatedPayment?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

const DEFAULTS = {
  headlineLine1: "Your bank has a",
  headlineHighlight: "better",
  headlineLine2Suffix: "one.",
  description:
    "The market moves fast—don't get left behind. Join 25 million people who use Bankrate's 50 years of data to outsmart the big banks and find the loan they actually deserve.",
  primaryCtaLabel: "Unlock my personal dashboard",
  secondaryCtaLabel: "Just show me today's rates",
  estimatedPayment: "$358",
  imageSrc: "/figma/hero-photo.png",
  imageAlt: "Couple reviewing mortgage rates on a laptop",
} as const

/**
 * Homepage hero from Figma node 20395:282.
 * @see https://www.figma.com/design/dY5ZGMWm6eIPv9uPYJjhbe/KOTA---Web-Designs-Client-File--Copy-?node-id=20395-282
 */
export function Hero({
  headlineLine1 = DEFAULTS.headlineLine1,
  headlineHighlight = DEFAULTS.headlineHighlight,
  headlineLine2Suffix = DEFAULTS.headlineLine2Suffix,
  description = DEFAULTS.description,
  primaryCtaLabel = DEFAULTS.primaryCtaLabel,
  secondaryCtaLabel = DEFAULTS.secondaryCtaLabel,
  estimatedPayment = DEFAULTS.estimatedPayment,
  imageSrc = DEFAULTS.imageSrc,
  imageAlt = DEFAULTS.imageAlt,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[810px] items-center gap-8 overflow-hidden bg-blue-900 px-16 pb-16",
        className
      )}
      aria-label="Hero"
      data-name="Hero"
    >
      <div className="relative z-10 flex w-[646px] shrink-0 flex-col gap-8">
        <div className="flex flex-col gap-6 text-white">
          <h1 className="font-serif text-[66px] font-semibold leading-[1.1] tracking-[-2px]">
            <span className="block">{headlineLine1}</span>
            <span className="block">
              mortgage rate. We have a{" "}
              <span className="relative inline-block">
                {headlineHighlight}
                <Image
                  src="/figma/hero-underline.svg"
                  alt=""
                  width={179}
                  height={4}
                  className="absolute -bottom-1 left-0 w-[179px]"
                  aria-hidden
                />
              </span>{" "}
              {headlineLine2Suffix}
            </span>
          </h1>
          <p className="max-w-[534px] text-lg leading-[1.4] text-white/70">{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="default" arrow className="h-12 px-5">
            {primaryCtaLabel}
          </Button>
          <Button
            variant="outline"
            size="default"
            arrow
            className="h-12 min-w-[254px] border-primary bg-transparent px-5 text-white hover:bg-primary/10"
          >
            {secondaryCtaLabel}
          </Button>
        </div>
      </div>

      <div className="relative ml-auto h-[634px] min-h-[634px] flex-1">
        <div className="absolute -right-16 top-[-43px] h-[974px] w-[767px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="767px"
          />
        </div>
        <HeroPaymentCallout amount={estimatedPayment} />
      </div>
    </section>
  )
}

export function HeroPaymentCallout({ amount }: { amount: string }) {
  return (
    <div className="absolute left-8 top-[252px] z-10" data-name="PaymentCallout">
      <div className="relative">
        <div className="absolute left-[26px] top-[38px] h-[43px] w-[215px] rounded-[9px] bg-white shadow-[0_3px_21px_rgba(0,0,0,0.24)]" />
        <div className="absolute left-[13px] top-[21px] h-[46px] w-[241px] rounded-[11px] bg-white shadow-[0_3px_24px_rgba(0,0,0,0.24)]" />
        <div className="relative flex h-[54px] w-[268px] items-center rounded-[12px] bg-white px-5 shadow-[0_3px_27px_rgba(0,0,0,0.24)]">
          <p className="text-sm font-bold tracking-[-0.14px] text-gray-900">
            Est. monthly payment <span className="text-[var(--brand-blue)]">{amount}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
