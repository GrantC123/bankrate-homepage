import Image from "next/image"
import { PrimaryCta, SectionShell } from "@/components/home/shared"

const PURPLE = "#a8a8e8"
const GREEN = "#7ad595"
const YELLOW = "#fbd772"

type ExpertCardSpec = {
  photo: string
  bg: string
  alt: string
}

const LEFT_COLUMN: ExpertCardSpec[] = [
  { photo: "/figma/expert-1.png", bg: PURPLE, alt: "" },
  { photo: "/figma/expert-3.png", bg: GREEN, alt: "" },
  { photo: "/figma/expert-2.png", bg: YELLOW, alt: "" },
]

const RIGHT_COLUMN: ExpertCardSpec[] = [
  { photo: "/figma/expert-3.png", bg: GREEN, alt: "" },
  { photo: "/figma/expert-1.png", bg: YELLOW, alt: "" },
  { photo: "/figma/expert-4.png", bg: PURPLE, alt: "" },
  { photo: "/figma/expert-2.png", bg: GREEN, alt: "" },
]

export function ExpertTeamSection() {
  return (
    <SectionShell className="py-4">
      <div className="relative h-[665px] overflow-hidden rounded-[48px] bg-blue-900 px-20">
        <div className="flex h-full items-center gap-[112px]">
          <div className="relative z-10 flex w-[492px] shrink-0 flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-[48px] font-semibold leading-[1.2] tracking-[-2px] text-white">
                Advice from people, not just algorithms.
              </h2>
              <p className="text-[18px] leading-[1.4] text-white">
                Our journalists use 50 years of data to hold the industry accountable. We find the
                fine print so you don&apos;t have to.
              </p>
            </div>
            <PrimaryCta>Meet our editorial team</PrimaryCta>

            <Image
              src="/figma/expert-arrow.svg"
              alt=""
              width={179}
              height={63}
              className="pointer-events-none absolute -bottom-12 left-[260px] hidden lg:block"
              aria-hidden
            />
          </div>

          <div className="relative h-full flex-1">
            <div className="absolute left-1/2 top-1/2 h-[896px] w-[548px] -translate-x-1/2 -translate-y-1/2">
              <ExpertColumn cards={LEFT_COLUMN} className="left-0 top-[97px]" />
              <ExpertColumn cards={RIGHT_COLUMN} className="left-[280px] -top-[108px]" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-blue-900 via-blue-900/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent" />
            </div>
          </div>
        </div>

        <Image
          src="/figma/expert-sparkle.svg"
          alt=""
          width={69}
          height={82}
          className="pointer-events-none absolute right-[88px] top-[280px] hidden lg:block"
          aria-hidden
        />
      </div>
    </SectionShell>
  )
}

function ExpertColumn({ cards, className }: { cards: ExpertCardSpec[]; className: string }) {
  return (
    <div className={`absolute flex w-[268px] flex-col gap-[14px] ${className}`}>
      {cards.map((card, i) => (
        <ExpertCard key={`${card.photo}-${i}`} {...card} />
      ))}
    </div>
  )
}

function ExpertCard({ photo, bg, alt }: ExpertCardSpec) {
  return (
    <div
      className="relative h-[310px] w-[268px] shrink-0 overflow-hidden rounded-[17px]"
      style={{ backgroundColor: bg }}
    >
      <Image
        src={photo}
        alt={alt}
        fill
        sizes="268px"
        className="object-cover object-top"
      />
    </div>
  )
}
