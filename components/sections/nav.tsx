"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  "Mortgages",
  "Investing",
  "B2B Partnerships",
  "Loans",
  "Insurance",
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-800 bg-blue-900">
      {/* Desktop */}
      <div className="mx-auto hidden h-[82px] max-w-[1312px] items-center justify-between px-16 lg:flex">
        <a href="/" className="block shrink-0" aria-label="Bankrate home">
          <Image
            src="/images/logo.svg"
            alt="Bankrate"
            width={176}
            height={28}
            className="h-[30px] w-auto"
            priority
          />
        </a>

        <ul className="flex items-center gap-8" role="list">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <a
                href="#"
                className="inline-flex items-center gap-0.5 text-[15px] font-semibold tracking-[-0.15px] text-white"
              >
                {label}
                <ChevronIcon />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="primary" size="default" className="h-12 px-5">
            Log in
          </Button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-primary transition-colors hover:bg-primary/10"
            aria-label="Search"
          >
            <Image src="/images/search.svg" alt="" width={24} height={24} aria-hidden />
          </button>
        </div>
      </div>

      {/* Mobile — Figma B2B Marketing Page node 146:4066 */}
      <div className="flex h-[72px] items-center justify-between px-5 lg:hidden">
        <a href="/" className="block shrink-0" aria-label="Bankrate home">
          <Image
            src="/images/logo.svg"
            alt="Bankrate"
            width={176}
            height={28}
            className="h-[25px] w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex size-10 items-center justify-center"
            aria-label="Search"
          >
            <Image src="/images/search.svg" alt="" width={20} height={20} aria-hidden />
          </button>
          <MobileMenuButton open={menuOpen} onClick={() => setMenuOpen((open) => !open)} />
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav-menu"
        className={cn(
          "border-t border-blue-800 bg-blue-900 lg:hidden",
          menuOpen ? "block" : "hidden"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
      >
        <ul className="flex flex-col px-5 py-6" role="list">
          {NAV_LINKS.map((label) => (
            <li key={label} className="border-b border-blue-800 last:border-b-0">
              <a
                href="#"
                className="flex items-center justify-between py-4 text-[15px] font-semibold tracking-[-0.15px] text-white"
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <ChevronIcon />
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5 pb-6">
          <Button
            variant="primary"
            size="default"
            className="h-12 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Log in
          </Button>
        </div>
      </div>
    </nav>
  )
}

function MobileMenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className="flex size-10 items-center justify-center"
      aria-expanded={open}
      aria-controls="mobile-nav-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span className="flex w-5 flex-col gap-1">
        <span
          className={cn(
            "h-0.5 w-5 bg-white transition-transform duration-200",
            open && "translate-y-[6px] rotate-45"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 bg-white transition-transform duration-200",
            open && "-translate-y-[6px] -rotate-45"
          )}
        />
      </span>
    </button>
  )
}

function ChevronIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden className="text-primary">
      <path d="M1.5 2.5L4 5L6.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
