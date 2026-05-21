import Image from "next/image"
import { PrimaryCta, SectionShell } from "@/components/home/shared"
import { cn } from "@/lib/utils"

const BLOCKS = [
  {
    title: (
      <>
        More market clarity.
        <br />
        Less guesswork.
      </>
    ),
    body: "The financial landscape is vast, and the best fit isn't always the most obvious one. We track the data across 300+ institutions to bring you a complete view of the market, giving you the information you need to choose your next move with confidence.",
    cta: "Explore the market",
    imageSide: "right" as const,
    visual: "market",
    titleSize: "large" as const,
    whiteCard: true,
  },
  {
    title: "Your goals, backed by our data.",
    body: "We believe a mortgage should fit your life, not just a spreadsheet. We provide the tools and personalized insights that put you in the driver's seat, helping you navigate the journey from first thought to final signature.",
    cta: "Start your plan",
    imageSide: "left" as const,
    visual: "calculator",
  },
  {
    title: "Finance, translated for real life.",
    body: "We break down complex terms and fine print into clear, actionable steps. By removing the noise, we help you focus on what actually matters: finding a trusted financial partner and building your future.",
    cta: "Browse guides",
    imageSide: "right" as const,
    visual: "docs",
  },
  {
    title: "Decades of data. Real-world expertise.",
    body: "Our journalists don't just report on the news; they interpret it for your wallet. With 50 years of independent analysis, we help you understand market shifts so you can make informed decisions that serve your long-term interests.",
    cta: "Read the research",
    imageSide: "left" as const,
    visual: "expert",
  },
  {
    title: "A smarter way to stay ahead.",
    body: "Markets change, and so do your needs. Our Member Experience keeps you connected to real-time opportunities and personalized context, ensuring that as the world moves, you're always moving in the right direction.",
    cta: "See member tools",
    imageSide: "right" as const,
    visual: "app",
  },
]

export function FeatureBlocks() {
  return (
    <div className="bg-[var(--surface-cream)]">
      {BLOCKS.map((block, i) => (
        <SectionShell
          key={typeof block.title === "string" ? block.title : "market-clarity"}
          className={cn(
            block.whiteCard ? "px-16 pb-0 pt-10" : "py-12",
            i === 0 && !block.whiteCard && "pt-10"
          )}
        >
          <div
            className={cn(
              block.whiteCard &&
                "rounded-t-[56px] bg-white px-20 pb-12 pt-20",
              "grid grid-cols-1 items-center gap-16 lg:grid-cols-2",
              block.imageSide === "left" && "lg:[&>div:first-child]:order-2"
            )}
          >
            <div className="max-w-[559px]">
              <h2
                className={cn(
                  "mb-6 font-serif font-semibold leading-[1.2] tracking-[-2px] text-gray-900",
                  block.titleSize === "large" ? "text-[40px]" : "text-[48px]"
                )}
              >
                {block.title}
              </h2>
              <p className="mb-8 text-lg leading-[1.4] text-gray-900/80">{block.body}</p>
              <PrimaryCta>{block.cta}</PrimaryCta>
            </div>
            <FeatureVisual type={block.visual} />
          </div>
        </SectionShell>
      ))}
    </div>
  )
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "market") {
    return (
      <div className="relative min-h-[363px] overflow-hidden rounded-[32px]">
        <Image
          src="/images/feature-market.png"
          alt="Family reviewing mortgage rates with a rate card overlay"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 529px"
        />
        <div className="absolute left-[171px] top-[88px] w-[204px] rounded-[14px] bg-white p-5 shadow-[0_4px_32px_rgba(0,0,0,0.24)]">
          <p className="text-sm font-bold text-gray-900">30-year fixed</p>
          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-gray-900">
            <span className="text-green-600">▲</span> 0.11%
          </p>
          <p className="mt-4 font-bold text-[50px] leading-none tracking-[-0.5px] text-gray-900">
            5.76%
          </p>
        </div>
      </div>
    )
  }

  const labels: Record<string, string> = {
    calculator: "Dynamic calculator",
    docs: "Plain-language guides",
    expert: "Expert analysis",
    app: "Member dashboard",
  }

  return (
    <div className="flex min-h-[363px] items-center justify-center overflow-hidden rounded-[32px] bg-[var(--brand-blue)]/10">
      <p className="font-serif text-2xl text-gray-900/30">{labels[type] ?? "Feature"}</p>
    </div>
  )
}
