"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MegaMenu, type MegaMenuData } from "@/components/sections/mega-menu"
import { cn } from "@/lib/utils"

const MORTGAGES_MENU: MegaMenuData = {
  rail: [{ label: "Apply now" }],
  primary: {
    title: "Mortgages",
    columns: [
      [
        { label: "Today's mortgage rates" },
        { label: "Refinance rates" },
        { label: "Mortgage calculator" },
      ],
      [
        { label: "FHA loans" },
        { label: "VA loans" },
        { label: "Jumbo loans" },
      ],
    ],
  },
  secondary: {
    title: "Tools & guides",
    links: [
      { label: "First-time homebuyer guide" },
      { label: "Affordability calculator" },
      { label: "Closing costs" },
      { label: "Mortgage glossary" },
    ],
  },
  features: [
    { title: "Best mortgage lenders of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to get pre-approved", subtitle: "Subtitle text or read time" },
  ],
}

const SAVINGS_MENU: MegaMenuData = {
  rail: [{ label: "Open an account" }],
  primary: {
    title: "Savings products",
    columns: [
      [
        { label: "High-yield savings" },
        { label: "CD rates" },
        { label: "Money market" },
      ],
      [
        { label: "Best savings accounts" },
        { label: "Bank reviews" },
        { label: "Compare rates" },
      ],
    ],
  },
  secondary: {
    title: "Tools & guides",
    links: [
      { label: "Savings calculator" },
      { label: "CD calculator" },
      { label: "Emergency fund guide" },
      { label: "FDIC insurance basics" },
    ],
  },
  features: [
    { title: "Best high-yield savings of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to build an emergency fund", subtitle: "Subtitle text or read time" },
  ],
}

const CREDIT_CARDS_MENU: MegaMenuData = {
  rail: [{ label: "Compare cards" }],
  primary: {
    title: "Cards by category",
    columns: [
      [
        { label: "Cash back" },
        { label: "Travel rewards" },
        { label: "Balance transfer" },
      ],
      [
        { label: "0% intro APR" },
        { label: "Business cards" },
        { label: "Student cards" },
      ],
    ],
  },
  secondary: {
    title: "Tools & guides",
    links: [
      { label: "Card matcher" },
      { label: "Pre-qualify offers" },
      { label: "Credit card calculator" },
      { label: "Building credit" },
    ],
  },
  features: [
    { title: "Best credit cards of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to pick a card", subtitle: "Subtitle text or read time" },
  ],
}

const LOANS_MENU: MegaMenuData = {
  rail: [{ label: "Apply now" }],
  primary: {
    title: "Loan types",
    columns: [
      [
        { label: "Personal loans" },
        { label: "Student loans" },
        { label: "Auto loans" },
      ],
      [
        { label: "Home equity" },
        { label: "Debt consolidation" },
        { label: "Business loans" },
      ],
    ],
  },
  secondary: {
    title: "Calculators & tools",
    links: [
      { label: "Loan calculator" },
      { label: "Refinance calculator" },
      { label: "Payment estimator" },
      { label: "Check your credit score" },
    ],
  },
  features: [
    { title: "Best personal loans of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to get approved", subtitle: "Subtitle text or read time" },
  ],
}

const WHO_WE_ARE_MENU: MegaMenuData = {
  rail: [{ label: "About us" }],
  primary: {
    title: "Our company",
    columns: [
      [
        { label: "About Bankrate" },
        { label: "Our founder" },
        { label: "Leadership" },
      ],
      [
        { label: "Contact us" },
        { label: "AI policy" },
        { label: "Legal" },
      ],
    ],
  },
  secondary: {
    title: "Careers",
    links: [
      { label: "Open positions" },
      { label: "Life at Bankrate" },
      { label: "Benefits" },
      { label: "Internships" },
    ],
  },
}

const NEWSROOM_MENU: MegaMenuData = {
  rail: [{ label: "Top stories" }],
  primary: {
    title: "Newsroom",
    columns: [
      [
        { label: "Personal finance news" },
        { label: "Market news" },
        { label: "Press releases" },
      ],
      [
        { label: "Research & data" },
        { label: "Expert commentary" },
        { label: "Bankrate Data Center" },
      ],
    ],
  },
  secondary: {
    title: "Editorial",
    links: [
      { label: "Bankrate's editorial team" },
      { label: "Editorial standards" },
      { label: "Contributors" },
      { label: "Awards" },
    ],
  },
  features: [
    { title: "Hidden Homeownership Tax", subtitle: "Subtitle text or read time" },
    { title: "Featured Title", subtitle: "Subtitle text or read time" },
  ],
}

type NavLink = { label: string; megaMenu?: MegaMenuData }

const NAV_LINKS: NavLink[] = [
  { label: "Mortgages", megaMenu: MORTGAGES_MENU },
  { label: "Savings", megaMenu: SAVINGS_MENU },
  { label: "Credit cards", megaMenu: CREDIT_CARDS_MENU },
  { label: "Loans", megaMenu: LOANS_MENU },
  { label: "Who we are", megaMenu: WHO_WE_ARE_MENU },
  { label: "Newsroom", megaMenu: NEWSROOM_MENU },
]

const POPULAR_SEARCHES = ["Mortgage rates", "Balance transfer credit cards", "Car insurance quotes"]
const TOOLS = ["Mortgage calculator", "Loan calculator", "CD calculator"]

type NavVariant = "dark" | "cream"

export function Nav({ variant = "dark" }: { variant?: NavVariant }) {
  const isCream = variant === "cream"
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (menuOpen) {
      setMenuMounted(true)
      return
    }
    const t = setTimeout(() => setMenuMounted(false), 300)
    return () => clearTimeout(t)
  }, [menuOpen])

  const openMenu = (i: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setActiveMenu(i)
  }

  const scheduleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null)
      closeTimeout.current = null
    }, 150)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen, searchOpen])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setSearchOpen(false)
        setActiveMenu(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const activeMenuData =
    activeMenu !== null ? NAV_LINKS[activeMenu]?.megaMenu : null

  return (
    <nav
      className={cn(
        "relative w-full",
        isCream ? "bg-[#f5f2eb]" : "border-b border-blue-800 bg-blue-900"
      )}
    >
      {/* Desktop */}
      <div className="mx-auto hidden h-[72px] max-w-[1312px] items-center gap-4 px-5 md:px-6 lg:flex">
        <a href="/" className="block shrink-0" aria-label="Bankrate home">
          <Image
            src={isCream ? "/images/logo-navy.svg" : "/images/logo.svg"}
            alt="Bankrate"
            width={176}
            height={28}
            className="h-[30px] w-auto"
            priority
          />
        </a>

        <div className="flex h-full min-w-0 flex-1 items-stretch justify-between">
          <ul className="flex h-full items-stretch" role="list">
            {NAV_LINKS.map((link, i) => {
              const hasMenu = !!link.megaMenu
              return (
                <li
                  key={link.label}
                  className="flex"
                  onMouseEnter={hasMenu ? () => openMenu(i) : undefined}
                  onMouseLeave={hasMenu ? scheduleClose : undefined}
                >
                  <a
                    href="#"
                    aria-haspopup={hasMenu || undefined}
                    aria-expanded={hasMenu ? activeMenu === i : undefined}
                    className={cn(
                      "flex items-center px-6 text-sm font-semibold tracking-[-0.25px] transition-colors",
                      isCream
                        ? "text-blue-900 hover:bg-gray-200"
                        : "text-white hover:bg-blue-800"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-6">
          <Button variant="primary" size="default" className="h-12 px-6 text-[15px]">
            Log in or sign up
          </Button>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className={cn(
              "flex size-6 items-center justify-center",
              isCream ? "text-blue-900" : "text-white"
            )}
            aria-label="Search"
          >
            <SearchIcon className="size-6" />
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[72px] z-30 hidden bg-blue-900/40 transition-opacity duration-500 lg:block",
          activeMenu !== null ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setActiveMenu(null)}
        aria-hidden
      />
      {activeMenuData && (
        <div className="absolute inset-x-0 top-full z-40 hidden justify-center px-5 pt-2 lg:flex">
          <MegaMenu
            data={activeMenuData}
            onMouseEnter={() => activeMenu !== null && openMenu(activeMenu)}
            onMouseLeave={scheduleClose}
          />
        </div>
      )}

      {/* Mobile */}
      <div className="flex h-[72px] items-center justify-between px-5 lg:hidden">
        <a href="/" className="block shrink-0" aria-label="Bankrate home">
          <Image
            src={isCream ? "/images/logo-navy.svg" : "/images/logo.svg"}
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
            onClick={() => setSearchOpen(true)}
            className={cn(
              "flex size-10 items-center justify-center",
              isCream ? "text-blue-900" : "text-white"
            )}
            aria-label="Search"
          >
            <SearchIcon className="size-5" />
          </button>
          <MobileMenuButton
            open={menuOpen}
            light={isCream}
            onClick={() => setMenuOpen((open) => !open)}
          />
        </div>
      </div>

      {/* Mobile menu drawer */}
      {menuMounted && (
        <>
          <div
            className={cn(
              "fixed inset-0 z-40 bg-blue-900/40 lg:hidden",
              menuOpen
                ? "animate-in fade-in duration-300"
                : "animate-out fade-out fill-mode-forwards duration-200"
            )}
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div
            id="mobile-nav-menu"
            className={cn(
              "fixed inset-y-0 right-0 z-40 flex w-full max-w-[448px] flex-col bg-gray-50 py-6 shadow-2xl lg:hidden",
              menuOpen
                ? "animate-in slide-in-from-right duration-300 ease-out"
                : "animate-out slide-out-to-right fill-mode-forwards duration-200 ease-in"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
          <div className="flex justify-end px-6 pb-4 max-[360px]:px-4">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className={cn(
                "flex size-6 items-center justify-center text-gray-900",
                menuOpen && "animate-in fade-in zoom-in-95 duration-300 delay-150 fill-mode-backwards"
              )}
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <ul className="flex flex-col" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className="flex items-center justify-between px-6 py-4 font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.15px] text-gray-900 max-[360px]:px-4"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <CaretRight className="size-3 text-primary" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex-1" />

          <div className="px-6 pb-4 max-[360px]:px-4">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                setSearchOpen(true)
              }}
              className="flex w-full items-center gap-2 rounded border border-gray-500 bg-white px-3 py-2.5 text-left text-gray-500"
              aria-label="Open search"
            >
              <SearchIcon className="size-4" />
              <span className="text-[16px] tracking-[-0.25px]">Search...</span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 px-6 max-[360px]:px-4">
            <Image
              src="/images/logo-navy.svg"
              alt="Bankrate"
              width={120}
              height={20}
              className="h-[22px] w-auto"
            />
            <Button
              variant="primary"
              size="default"
              className="rounded px-4 py-3 text-sm font-bold tracking-[-0.25px]"
              onClick={() => setMenuOpen(false)}
            >
              Log in or sign up
            </Button>
          </div>
          </div>
        </>
      )}
      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-blue-900/40k pt-[72px] px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-[760px] overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-4">
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search..."
                className="flex-1 text-[18px] text-gray-900 placeholder:text-gray-400 outline-none"
              />
              <SearchIcon className="size-[22px] shrink-0 text-primary" />
            </div>

            {/* Popular searches */}
            <div className="px-6 py-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-gray-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 12h4l3-9 4 18 3-9h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Popular searches
              </p>
              <ul>
                {POPULAR_SEARCHES.map((item) => (
                  <li key={item}>
                    <a href="#" className="block py-2.5 text-[16px] font-semibold text-gray-900 hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="border-t border-gray-100 px-6 py-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-gray-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                  <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                  <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                  <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
                Tools
              </p>
              <ul>
                {TOOLS.map((item) => (
                  <li key={item}>
                    <a href="#" className="block py-2.5 text-[16px] font-semibold text-gray-900 hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function MobileMenuButton({
  open,
  light,
  onClick,
}: {
  open: boolean
  light?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex size-10 items-center justify-center",
        light ? "text-blue-900" : "text-white"
      )}
      aria-expanded={open}
      aria-controls="mobile-nav-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <MenuIcon className="size-6" />
    </button>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.81818 6.68177H16.0909C16.5409 6.68177 16.9091 6.31359 16.9091 5.86359C16.9091 5.41359 16.5409 5.04541 16.0909 5.04541H3.81818C3.36818 5.04541 3 5.41359 3 5.86359C3 6.31359 3.36818 6.68177 3.81818 6.68177ZM20.1818 12.8181H3.81818C3.36818 12.8181 3 12.45 3 12C3 11.55 3.36818 11.1818 3.81818 11.1818H20.1818C20.6318 11.1818 21 11.55 21 12C21 12.45 20.6318 12.8181 20.1818 12.8181ZM12 18.9545H3.81818C3.36818 18.9545 3 18.5863 3 18.1363C3 17.6863 3.36818 17.3182 3.81818 17.3182H12C12.45 17.3182 12.8182 17.6863 12.8182 18.1363C12.8182 18.5863 12.45 18.9545 12 18.9545Z"
      />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3116 1.5C5.70287 1.5 2 5.28 2 10C2 14.72 5.70287 18.5 10.3116 18.5C12.0336 18.5 13.6362 17.97 14.9601 17.06L19.9072 22.17C20.3352 22.61 21.032 22.61 21.46 22.17L21.679 21.95C22.107 21.57 22.107 20.85 21.679 20.41L16.7617 15.38C17.9263 13.92 18.6231 12.04 18.6231 10C18.6231 5.28 14.8705 1.5 10.3116 1.5ZM10.3116 3.69C13.686 3.69 16.4731 6.54 16.4731 10C16.4731 13.46 13.686 16.31 10.3116 16.31C6.93717 16.31 4.15006 13.46 4.15006 10C4.15006 6.54 6.8874 3.69 10.3116 3.69Z"
      />
    </svg>
  )
}

function CaretRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M8.16765 21C7.83868 21 7.49326 20.8683 7.23008 20.6213C6.72018 20.1109 6.72018 19.2712 7.23008 18.7608L13.974 12.0103L7.23008 5.24331C6.72018 4.73291 6.72018 3.89321 7.23008 3.3828C7.73999 2.8724 8.57886 2.8724 9.08877 3.3828L16.7702 11.0718C17.2801 11.5822 17.2801 12.4219 16.7702 12.9323L9.08877 20.6213C8.82559 20.8847 8.49662 21 8.1512 21H8.16765Z" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={className}
    >
      <path d="M18.8806 3.2806C19.3882 2.77292 20.2114 2.77292 20.719 3.2806C21.2267 3.78828 21.2267 4.6114 20.719 5.11908L13.8384 11.9998L20.7196 18.881C21.2273 19.3887 21.2273 20.2118 20.7196 20.7194C20.2119 21.2271 19.3888 21.2271 18.8811 20.7194L11.9999 13.8382L5.11865 20.7194C4.61097 21.2271 3.78786 21.2271 3.28017 20.7194C2.77249 20.2118 2.77249 19.3887 3.28017 18.881L10.1614 11.9998L3.28072 5.11908C2.77304 4.6114 2.77304 3.78828 3.28072 3.2806C3.7884 2.77292 4.61152 2.77292 5.1192 3.2806L11.9999 10.1613L18.8806 3.2806Z" />
    </svg>
  )
}
