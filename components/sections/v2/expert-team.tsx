import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const EXPERTS = [
  {
    name: "Sarah Foster",
    title: "Principal Analyst",
    specialty: "Mortgage markets, Fed policy, and what rate moves actually mean for buyers",
    avatar: "/images/expert-3.png",
  },
  {
    name: "Alex Gailey",
    title: "Senior Editor",
    specialty: "Consumer banking, high-yield savings, and how to make deposits work harder",
    avatar: "/images/expert-1.png",
  },
  {
    name: "Greg McBride",
    title: "Chief Financial Analyst",
    specialty: "Macro trends, household balance sheets, and decades of independent rate research",
    avatar: "/images/expert-4.png",
  },
]

export function ExpertTeamV2() {
  return (
    <SectionShell className="py-20">
      <div className="overflow-hidden rounded-5xl bg-blue-900 px-16 py-20 text-white">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-serif text-[48px] font-semibold leading-[1.15] tracking-[-2px]">
            The people behind the data
          </h2>
          <p className="mt-6 text-[18px] leading-[1.55] text-white/80">
            Our journalists and analysts have spent decades covering this market. They report
            on what&apos;s actually happening — including the parts banks would rather you
            didn&apos;t know.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EXPERTS.map((expert) => (
            <article
              key={expert.name}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-indigo-400">
                <Image
                  src={expert.avatar}
                  alt={`${expert.name}, ${expert.title}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 280px, 100vw"
                />
              </div>
              <div>
                <p className="font-serif text-[24px] font-semibold tracking-[-0.5px]">
                  {expert.name}
                </p>
                <p className="mt-1 text-[14px] font-semibold text-blue-300">
                  {expert.title}
                </p>
                <p className="mt-3 text-[14px] leading-[1.5] text-white/70">
                  {expert.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="primary" size="default" arrow className="h-12 px-6 text-[15px]">
            Meet the full editorial team
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}
