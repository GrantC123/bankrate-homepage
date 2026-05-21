import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bankrate — Your bank has a mortgage rate. We have a better one.",
  description:
    "Join 25 million people who use Bankrate's 50 years of data to outsmart the big banks and find the loan they actually deserve.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="bg-[var(--surface-cream)] font-sans text-pretty text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
