import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const recifeText = localFont({
  src: "../public/fonts/RecifeText-SemiBold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bankrate — Your bank has a mortgage rate. We have a better one.",
  description:
    "Join 25 million people who use Bankrate's 50 years of data to outsmart the big banks and find the loan they actually deserve.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${recifeText.variable}`}>
      <body className="bg-[var(--surface-cream)] font-sans text-gray-900 antialiased">{children}</body>
    </html>
  )
}
