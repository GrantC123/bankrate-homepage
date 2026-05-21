import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const FEATURES = [
  {
    title: "Rate alerts",
    body: "We'll tell you when your number hits.",
  },
  {
    title: "Saved quotes",
    body: "Your comparisons, ready when you return.",
  },
  {
    title: "Saved scenarios",
    body: "Your calculator, with your numbers already in it.",
  },
]

export function MemberExperienceV2() {
  return (
    <SectionShell className="py-20">
      <div className="overflow-hidden rounded-5xl bg-blue-900 px-6 py-12 md:px-12 md:py-20 text-white">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px]">
            Your rate doesn&apos;t have to be a one-time guess
          </h2>
          <p className="mt-6 text-[18px] leading-[1.55] text-white/80">
            Create a free Bankrate account and your mortgage search stays live. Set a rate
            alert for the number you&apos;re waiting for. Save your quotes so you&apos;re not
            starting over every time you come back. Save calculator scenarios with your actual
            numbers in them. When the market moves, you&apos;ll know.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="font-serif text-[22px] font-semibold tracking-[-0.5px] text-white">
                {feature.title}
              </p>
              <p className="mt-3 text-[15px] leading-[1.5] text-white/70">{feature.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Button variant="primary" size="default" arrow className="h-12 px-6 text-[15px]">
            Create your free account
          </Button>
          <a
            href="#sign-in"
            className="text-[14px] text-white/70 underline underline-offset-4 hover:text-white"
          >
            Already have an account? Sign in
          </a>
        </div>
      </div>
    </SectionShell>
  )
}
