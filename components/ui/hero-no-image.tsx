import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface HeroNoImageProps {
  /** Main headline (RecifeText, centered) */
  headline?: string
  /** Words to decorate with the hand-drawn underline */
  underlinePhrase?: string
  description?: string
  primaryCtaLabel?: string
  secondaryCtaLabel?: string
  className?: string
}

const DEFAULTS = {
  headline: "9 out of 10 homebuyers overpay for their mortgage. Are you one of them?",
  underlinePhrase: "9 out of 10",
  description:
    "Every year, American homeowners pay an average of $3,890 more than they need to. Not because better rates don't exist — but because their bank has no reason to offer them. Bankrate runs the auction that produces your most competitive rate — and it's free to use.",
  primaryCtaLabel: "Personalize my rate",
  secondaryCtaLabel: "Just show me today's rates",
} as const

/**
 * Centered hero without lifestyle image (not wired on the live page).
 * @see https://www.figma.com/design/CJSaFmnnxffY4riyJoCQE1/Homepage-redesign?node-id=156-3124
 */
export function HeroNoImage({
  headline = DEFAULTS.headline,
  underlinePhrase = DEFAULTS.underlinePhrase,
  description = DEFAULTS.description,
  primaryCtaLabel = DEFAULTS.primaryCtaLabel,
  secondaryCtaLabel = DEFAULTS.secondaryCtaLabel,
  className,
}: HeroNoImageProps) {
  const underlineIndex = headline.indexOf(underlinePhrase)
  const hasUnderline = underlineIndex >= 0 && underlinePhrase.length > 0

  return (
    <section
      className={cn(
        "relative bg-blue-900 px-16 pb-16 pt-28",
        className
      )}
      aria-label="Hero"
      data-name="hero-no-image"
    >
      <div className="relative mx-auto flex w-full max-w-[1312px] flex-col items-center gap-8 text-center text-white">
        <div className="relative flex w-full flex-col gap-6">
          <h1 className="font-serif text-[66px] font-semibold leading-[1.1] tracking-[-2px]">
            {hasUnderline ? (
              <>
                {headline.slice(0, underlineIndex)}
                <span className="relative inline-block">
                  {underlinePhrase}
                  <Image
                    src="/images/hero-no-image-underline.svg"
                    alt=""
                    width={179}
                    height={4}
                    className="absolute -bottom-1 left-0 w-[179px]"
                    aria-hidden
                  />
                </span>
                {headline.slice(underlineIndex + underlinePhrase.length)}
              </>
            ) : (
              headline
            )}
          </h1>
          <p className="text-lg leading-[1.4] text-white/70">{description}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
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
    </section>
  )
}
