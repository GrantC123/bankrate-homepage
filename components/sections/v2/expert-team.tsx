import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const EXPERTS = [
  {
    name: "Sarah Foster",
    title: "Principal Analyst",
    specialty: "Mortgage markets, Fed policy, and what rate moves actually mean for buyers",
    bg: "/images/yellow-bg.svg",
    fg: "/images/Sarah-Foster-fg.png",
  },
  {
    name: "Alex Gailey",
    title: "Senior Editor",
    specialty: "Consumer banking, high-yield savings, and how to make deposits work harder",
    bg: "/images/green-bg.svg",
    fg: "/images/Alex-Gailey-fg.png",
  },
  {
    name: "Greg McBride",
    title: "Chief Financial Analyst",
    specialty: "Macro trends, household balance sheets, and decades of independent rate research",
    bg: "/images/purple-bg.svg",
    fg: "/images/Greg-McBride-fg.png",
  },
]

function ExpertCard({
  name,
  title,
  specialty,
  bg,
  fg,
}: {
  name: string
  title: string
  specialty: string
  bg: string
  fg: string
}) {
  return (
    <article className="flex flex-col gap-6 rounded-[18px] bg-white p-[33px]">
      <div className="@container relative h-[280px] w-full overflow-hidden rounded-[14px]">
        {/* Colored SVG background */}
        <Image
          src={bg}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
          aria-hidden
        />
        {/* Author cutout — width-relative scaling keeps person proportional at all breakpoints */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={fg}
          alt={`${name}, ${title}`}
          className="absolute bottom-0 left-1/2 w-[85cqw] min-w-[276px] max-w-[357px] h-auto -translate-x-1/2"
        />
      </div>
      <div>
        <p className="font-serif text-[24px] font-semibold tracking-[-0.5px] text-[#272625]">
          {name}
        </p>
        <p className="mt-1 text-[14px] font-semibold text-[#0157ff]">{title}</p>
        <p className="mt-3 text-[15px] leading-[1.5] text-[rgba(39,38,37,0.75)]">{specialty}</p>
      </div>
    </article>
  )
}

export function ExpertTeamV2() {
  return (
    <SectionShell className="py-20">
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px] text-[#272625]">
          The people behind the data
        </h2>
        <p className="mt-6 text-[18px] leading-[1.55] text-[#3b3b44]">
          Our journalists and analysts have spent decades covering this market. They report on
          what&apos;s actually happening — including the parts banks would rather you didn&apos;t
          know.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {EXPERTS.map((expert) => (
          <ExpertCard key={expert.name} {...expert} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="primary" size="default" arrow className="h-12 px-6 text-[15px]">
          Meet the full editorial team
        </Button>
      </div>
    </SectionShell>
  )
}
