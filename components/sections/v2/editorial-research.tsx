import Image from "next/image"
import { ReadMoreLink, SectionShell } from "@/components/home/shared"

const LEAD = {
  tag: "BANKRATE RESEARCH · 2026",
  title: "The hidden homeownership tax",
  body:
    "89% of borrowers in 2024 paid more than the most competitive rate available for their profile. We measured 2.8 million mortgages to find out why — and what it costs.",
  author: "Matt Fellowes, CEO",
  cta: "Read the full research",
  href: "#research-paper",
}

const SECONDARIES = [
  {
    tag: "DATA DROP",
    title: "The borrowers most likely to overpay aren't who you'd think.",
    body:
      "Upper-income households carry the highest mortgage overpayment rate of any income group — 93%. Better credit makes it worse, not better.",
    author: "Sarah Foster",
    avatar: "/images/expert-1.png",
    href: "#data-drop",
  },
  {
    tag: "MARKET SURVEY",
    title: "600+ banks, surveyed this week. Here's where mortgage rates actually moved.",
    body: "",
    author: "Alex Gailey",
    avatar: "/images/expert-3.png",
    href: "#weekly-rate-survey",
  },
  {
    tag: "RATE WATCH",
    title: "Your savings account is probably paying you less than 1%.",
    body: "Here's what the market is actually offering right now.",
    author: "Greg McBride",
    avatar: "/images/expert-4.png",
    href: "#best-savings-rates",
  },
]

export function EditorialResearch() {
  return (
    <SectionShell className="py-20">
      <h2 className="max-w-[860px] font-serif text-[48px] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
        What the market looks like when someone&apos;s actually been watching it.
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <article className="flex flex-col gap-8 rounded-3xl bg-blue-900 p-12 text-white">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-300">
            {LEAD.tag}
          </p>
          <h3 className="font-serif text-[40px] font-semibold leading-[1.15] tracking-[-1.5px]">
            {LEAD.title}
          </h3>
          <p className="text-[18px] leading-[1.5] text-white/80">{LEAD.body}</p>
          <p className="text-[14px] text-white/60">{LEAD.author}</p>
          <div className="relative mt-auto overflow-hidden rounded-2xl">
            <Image
              src="/images/Homes-Hidden-Costs-of-Homeownership-Data-Study.webp"
              alt="Key with house-shaped keychain made from a dollar bill"
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
          <a
            href={LEAD.href}
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue-300 hover:text-white"
          >
            {LEAD.cta} →
          </a>
        </article>

        <div className="flex flex-col gap-5">
          {SECONDARIES.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {card.tag}
              </p>
              <h4 className="font-serif text-[20px] font-semibold leading-[1.25] tracking-[-0.5px] text-gray-900">
                {card.title}
              </h4>
              {card.body && (
                <p className="text-[14px] leading-[1.5] text-gray-900/70">{card.body}</p>
              )}
              <div className="mt-1 flex items-center gap-3">
                <Image
                  src={card.avatar}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-full object-cover"
                />
                <span className="text-[13px] font-semibold text-gray-900">{card.author}</span>
                <a
                  href={card.href}
                  className="ml-auto text-[13px] font-semibold text-primary hover:underline"
                >
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <ReadMoreLink href="#editorial-hub">See all expert insights</ReadMoreLink>
      </div>
    </SectionShell>
  )
}
