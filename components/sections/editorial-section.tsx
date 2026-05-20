import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eyebrow, ReadMoreLink, SectionShell, SectionTitle } from "@/components/home/shared"

export function EditorialSection() {
  return (
    <SectionShell className="bg-[var(--surface-cream)] py-12 pb-16">
      <SectionTitle className="mb-10">Expert clarity for an unclear market</SectionTitle>

      <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[523px_1fr]">
        <Card className="gap-7 overflow-hidden rounded-[34px] border-0 py-8 shadow-none">
          <CardContent className="flex flex-col gap-7 px-4">
            <div className="flex min-h-[158px] flex-col justify-between gap-6 px-4">
              <Eyebrow>News</Eyebrow>
              <h3 className="font-serif text-[22px] font-semibold leading-[1.3] tracking-[-0.66px] text-gray-900">
                2026 Housing Sentiment: Why banks are tightening their grip—and how to find the
                loopholes.
              </h3>
              <ReadMoreLink />
            </div>
            <div className="relative mx-4 aspect-[491/294] overflow-hidden rounded-3xl">
              <Image
                src="/figma/editorial-news.png"
                alt="Woman working on a laptop"
                fill
                className="object-cover"
                sizes="523px"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card className="flex-row gap-0 overflow-hidden rounded-[34px] border-0 p-0 shadow-none">
            <div className="relative h-[259px] w-[239px] shrink-0 overflow-hidden rounded-3xl m-4">
              <Image
                src="/figma/editorial-expert.png"
                alt="Sarah Foster, Principal Analyst"
                fill
                className="object-cover"
                sizes="239px"
              />
              <span className="absolute bottom-5 left-5 rounded-full bg-green-100 px-4 py-2.5 text-xs font-semibold tracking-[-0.12px] text-green-700">
                Sarah Foster, Principal Analyst
              </span>
            </div>
            <CardContent className="flex flex-col justify-between gap-8 py-8 pr-8">
              <Eyebrow>The Expert Breakdown</Eyebrow>
              <p className="font-serif text-[22px] leading-[1.4] tracking-[-0.66px] text-gray-900">
                &ldquo;The Fed is shifting. If you&apos;re waiting for a &apos;perfect&apos; rate,
                you might be missing the best window for equity. Here is what I&apos;m watching this
                week.&rdquo;
              </p>
              <ReadMoreLink />
            </CardContent>
          </Card>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            <EditorialTile
              tag="Market Survey"
              title="We polled 2,000 lenders. Here are the 5 most transparent ones"
            />
            <EditorialTile tag="Data Drop" title="35% of buyers are overpaying on fees." />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button variant="primary" size="default" arrow className="h-12 px-5">
          Explore all expert insights
        </Button>
      </div>
    </SectionShell>
  )
}

function EditorialTile({ tag, title }: { tag: string; title: string }) {
  return (
    <Card className="h-full rounded-3xl border-0 p-6 shadow-none">
      <CardContent className="flex h-full flex-col justify-between gap-8 p-0">
        <Eyebrow>{tag}</Eyebrow>
        <h3 className="font-serif text-[22px] font-semibold leading-[1.3] tracking-[-0.66px] text-gray-900">
          {title}
        </h3>
        <ReadMoreLink />
      </CardContent>
    </Card>
  )
}
