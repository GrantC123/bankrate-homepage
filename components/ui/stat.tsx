import type { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const SUFFIX_ASSETS = {
  plus: "/images/stat-suffix-plus.svg",
  percent: "/images/stat-suffix-percent.svg",
} as const

export type StatSuffix = keyof typeof SUFFIX_ASSETS

export interface StatProps {
  /** Main numeric value, e.g. "300" or "99.7" */
  value: string
  /** Decorative suffix from Figma (plus or percent) */
  suffix?: StatSuffix
  /** Supporting copy beside the value chip */
  label: ReactNode
  /** Value typography scale — compact for short labels like "Fed" */
  valueSize?: "default" | "sm" | "lg"
  className?: string
}

/**
 * Proof-point stat card.
 * Desktop: Figma KOTA node 20395:331. Mobile: B2B Marketing Page node 82:1524.
 */
export function Stat({
  value,
  suffix,
  label,
  valueSize = "default",
  className,
}: StatProps) {
  const valueClass = cn(
    "font-serif font-semibold text-[var(--brand-blue)]",
    valueSize === "sm" && "text-2xl leading-8 tracking-[-0.6px]",
    valueSize === "lg" && "text-[40px] leading-[1.2] tracking-[-2.36px]",
    valueSize === "default" && "text-[32px] leading-8 tracking-[-1.5px] lg:text-[40px] lg:leading-[1.2] lg:tracking-[-2.36px]"
  )

  return (
    <div
      className={cn(
        "flex min-h-[120px] w-full items-center gap-[18px] rounded-[24px] bg-white p-2.5 lg:min-h-0",
        className
      )}
      data-name="Stat"
    >
      <div className="flex h-[100px] w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-[#f2f7ff] p-3 lg:h-[84px]">
        <div className="relative inline-flex items-start justify-center">
          <span className={valueClass}>{value}</span>
          {suffix && (
            <Image
              src={SUFFIX_ASSETS[suffix]}
              alt=""
              width={suffix === "plus" ? 17 : 15}
              height={17}
              className={cn(
                "shrink-0",
                valueSize === "lg" ? "ml-0.5 mt-[18px]" : "ml-0.5 mt-[14px] lg:mt-[21px]"
              )}
              aria-hidden
            />
          )}
        </div>
      </div>
      <p className="min-w-0 flex-1 text-base font-bold leading-[1.4] text-[#13223b]">{label}</p>
    </div>
  )
}
