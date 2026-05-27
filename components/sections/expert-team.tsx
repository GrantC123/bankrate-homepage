import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

/** Pre-composited portrait cards — order, bg colors, and scribble patterns match Figma grid (256:1333). */
type Card = { src: string; color: string; scribble: string }

const LEFT_COLUMN: Card[] = [
  { src: "/images/expert-card-1.png", color: "#a8a8e8", scribble: "/images/expert-scribble-1.svg" }, // brand purple
  { src: "/images/expert-card-3.png", color: "#7ad595", scribble: "/images/expert-scribble-2.svg" }, // brand green
  { src: "/images/expert-card-5.png", color: "#fbd772", scribble: "/images/expert-scribble-3.svg" }, // brand yellow
]

const RIGHT_COLUMN: Card[] = [
  { src: "/images/expert-card-2.png", color: "#7ad595", scribble: "/images/expert-scribble-4.svg" },
  { src: "/images/expert-card-4.png", color: "#fbd772", scribble: "/images/expert-scribble-5.svg" },
  { src: "/images/expert-card-6.png", color: "#a8a8e8", scribble: "/images/expert-scribble-6.svg" },
  { src: "/images/expert-card-2.png", color: "#7ad595", scribble: "/images/expert-scribble-7.svg" },
]

/**
 * ExpertTeam — Figma Homepage redesign node 256:1333.
 */
export function ExpertTeam() {
  return (
    <SectionShell className="py-20">
      <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-b from-[#13223b] to-[#0f1b2f] px-6 py-12 md:px-12 lg:pl-20 lg:pr-0 lg:py-0">
        {/* Sparkle — Figma 256:1454 */}
        <Image
          src="/images/expert-sparkle-r.svg"
          alt=""
          width={69}
          height={82}
          className="pointer-events-none absolute right-6 top-[28%] z-20 hidden w-[5.3%] min-w-[48px] lg:block"
          aria-hidden
        />

        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,492px)_1fr] lg:gap-28">
          {/* Copy + CTA */}
          <div className="relative z-10 flex flex-col gap-8 text-white">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-[36px] font-semibold leading-[1.2] tracking-[-2px] md:text-[42px] lg:text-[48px]">
                The people behind
                <br />
                the data
              </h2>
              <p className="text-[16px] leading-[1.4] text-white lg:text-[18px]">
                Our journalists and analysts have spent decades covering this market. They report on
                what&apos;s actually happening &mdash; including the parts banks would rather you
                didn&apos;t know.
              </p>
            </div>

            <div className="relative w-fit">
              <Button
                variant="primary"
                size="default"
                arrow
                className="h-12 rounded-[10px] px-5 text-[15px] font-semibold tracking-[-0.15px]"
              >
                Meet our editorial team
              </Button>

              {/* Curved arrow — Figma 256:1449 */}
              <Image
                src="/images/expert-arrow-curve.svg"
                alt=""
                width={179}
                height={63}
                className="pointer-events-none absolute -right-4 top-1/2 hidden w-[140px] translate-x-full -translate-y-1/2 lg:block xl:w-[179px]"
                aria-hidden
              />
            </div>
          </div>

          {/* Staggered portrait grid — Figma 256:1342 */}
          <div className="relative mx-auto w-full max-w-[548px] lg:mx-0 lg:justify-self-end">
            <div className="relative h-[520px] overflow-hidden sm:h-[640px] lg:h-[720px]">
              {/* Top fade — Figma 256:1448 */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#13223b]/80 to-transparent sm:h-12"
              />
              {/* Bottom fade — Figma 256:1447 */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-[#0f1b2f] to-transparent sm:h-12"
              />

              {/* Offsets are % of wrapper width, so the stagger scales with viewport */}
              <div className="grid grid-cols-2 gap-[14px]">
                <div className="flex flex-col gap-[14px] pt-[30%]">
                  {LEFT_COLUMN.map((card, index) => (
                    <ExpertCard key={`left-${index}`} {...card} />
                  ))}
                </div>
                <div className="-mt-[60%] flex flex-col gap-[14px]">
                  {RIGHT_COLUMN.map((card, index) => (
                    <ExpertCard key={`right-${index}`} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function ExpertCard({ src, color, scribble }: { src: string; color: string; scribble: string }) {
  return (
    <div
      className="relative aspect-[268/310] w-full overflow-hidden rounded-[13px]"
      style={{ backgroundColor: color }}
    >
      {/* Scribble pattern — oversized and rotated -165deg per Figma 256:1346+ */}
      <Image
        src={scribble}
        alt=""
        width={557}
        height={607}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[260%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[165deg]"
        aria-hidden
      />
      {/* Headshot */}
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 1024px) 268px, 45vw"
        className="z-10 object-cover"
      />
    </div>
  )
}
