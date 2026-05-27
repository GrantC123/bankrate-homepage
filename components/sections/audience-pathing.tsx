"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { SectionShell } from "@/components/home/shared"
import { cn } from "@/lib/utils"

const PURCHASE_MIN = 1_000
const PURCHASE_MAX = 2_000_000
const DOWN_PAYMENT_MAX_PERCENT = 0.2

const JOURNEYS = [
  {
    id: "buying",
    label: "Buying a home",
    eyebrow: "Buying a home",
    headline: "Don't be like the 90% of buyers who overpay",
    body: "90% of buyers overpay vs. the best available rate — an average of $4,281 a year. One comparison changes that.",
    cta: "Get a better rate",
    calculatorTitle: "See how much home you can afford",
    calculator: "buying",
  },
  {
    id: "saving",
    label: "Saving for a home",
    eyebrow: "Saving for a home",
    headline: "Make your down payment grow faster",
    body: "The best savings rate right now is more than 10× what most banks pay. That gap is a down payment accelerator if you use it.",
    cta: "Find the best savings rates",
    calculatorTitle: "See how your savings could grow",
    calculator: "saving",
  },
  {
    id: "refinancing",
    label: "Refinancing a home",
    eyebrow: "Refinancing a home",
    headline: "When did you last check your rate?",
    body: "No deadline, no pressure — and yet 79% of people who refinance still pay more than the best rate available for their profile.",
    cta: "See refinance rates",
    calculatorTitle: "See what you could save by refinancing",
    calculator: "refinancing",
  },
  {
    id: "managing",
    label: "Managing what you've built",
    eyebrow: "Managing what you've built",
    headline: "Put your equity and savings to work",
    body: "Home equity, credit cards, personal loans — here's where your money works harder than it does at your current bank.",
    cta: "Explore all products",
    calculatorTitle: "Find the right product for your goals",
    calculator: null,
  },
] as const

type JourneyId = (typeof JOURNEYS)[number]["id"]

function parseMoney(value: string): number {
  const parsed = Number(value.replace(/[^\d]/g, ""))
  return Number.isFinite(parsed) ? parsed : 0
}

function formatMoneyInput(value: number): string {
  return value.toLocaleString("en-US")
}

export function AudiencePathing() {
  const [activeId, setActiveId] = useState<JourneyId>("buying")
  const [purchasePrice, setPurchasePrice] = useState(460_000)
  const [downPayment, setDownPayment] = useState(92_000)
  const [zip, setZip] = useState("")

  const activeJourney = JOURNEYS.find((j) => j.id === activeId) ?? JOURNEYS[0]
  const downPaymentMax = useMemo(
    () => Math.round(purchasePrice * DOWN_PAYMENT_MAX_PERCENT),
    [purchasePrice]
  )

  function handlePurchaseChange(next: number) {
    const clamped = Math.min(PURCHASE_MAX, Math.max(PURCHASE_MIN, next))
    setPurchasePrice(clamped)
    setDownPayment((current) => Math.min(current, Math.round(clamped * DOWN_PAYMENT_MAX_PERCENT)))
  }

  function handleDownPaymentChange(next: number) {
    setDownPayment(Math.min(downPaymentMax, Math.max(0, next)))
  }

  return (
    <SectionShell className="py-16 md:py-20">
      <h2 className="text-center font-serif text-[32px] font-semibold leading-[1.2] tracking-[-2px] text-[#272625] md:text-[48px]">
        Where are you right now?
      </h2>

      <div className="mt-8 overflow-hidden rounded-[48px] bg-[#dce7fe] px-6 pb-12 pt-10 md:mt-10 md:px-12 md:pb-16 md:pt-12 lg:px-16">
        {/* Journey pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {JOURNEYS.map((journey) => {
            const isActive = journey.id === activeId
            return (
              <button
                key={journey.id}
                type="button"
                onClick={() => setActiveId(journey.id)}
                className={cn(
                  "inline-flex h-11 items-center rounded-full border border-[#0061fe] px-[18px] py-3.5 text-[14px] font-semibold tracking-[-0.14px] transition-colors",
                  isActive
                    ? "bg-[#0061fe] text-white"
                    : "bg-[#f2f7ff] text-[#0061fe] hover:bg-[#e8f0ff]"
                )}
              >
                {journey.label}
              </button>
            )
          })}
        </div>

        {/* Calculator + copy */}
        <div className="mt-10 flex flex-col items-stretch gap-10 lg:mt-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: calculator card */}
          <div className="w-full shrink-0 lg:max-w-[556px]">
            <div className="rounded-[24px] bg-white p-8 shadow-[0_0_4px_rgba(21,21,21,0.14),0_24px_30px_-8px_rgba(21,21,21,0.18)] md:p-12">
              <h3 className="font-serif text-[24px] font-semibold leading-[1.2] text-[#13223b] md:text-[28px]">
                {activeJourney.calculatorTitle}
              </h3>

              {activeJourney.calculator === "buying" ? (
                <BuyingHomeCalculator
                  purchasePrice={purchasePrice}
                  downPayment={downPayment}
                  downPaymentMax={downPaymentMax}
                  zip={zip}
                  onPurchaseChange={handlePurchaseChange}
                  onDownPaymentChange={handleDownPaymentChange}
                  onZipChange={setZip}
                />
              ) : activeJourney.calculator === "saving" ? (
                <SavingHomeCalculator />
              ) : (
                <p className="mt-6 text-[16px] leading-[1.7] tracking-[-0.25px] text-[#535250]">
                  {activeJourney.body}
                </p>
              )}
            </div>
          </div>

          {/* Right: marketing copy */}
          <div className="flex flex-1 flex-col gap-6 py-0 lg:py-8">
            <div className="space-y-6">
              <p className="text-[16px] font-bold tracking-[-0.25px] text-[#0061fe]">
                {activeJourney.eyebrow}
              </p>
              <h3 className="font-serif text-[28px] font-semibold leading-[1.2] text-[#272625] md:text-[36px]">
                {activeJourney.headline}
              </h3>
            </div>
            <p className="text-[16px] leading-[1.7] tracking-[-0.25px] text-[#535250]">
              {activeJourney.body}
            </p>
            <Button
              variant="primary"
              size="default"
              arrow
              className="h-12 w-fit rounded-xl px-6 text-[16px] font-semibold"
            >
              {activeJourney.cta}
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function BuyingHomeCalculator({
  purchasePrice,
  downPayment,
  downPaymentMax,
  zip,
  onPurchaseChange,
  onDownPaymentChange,
  onZipChange,
}: {
  purchasePrice: number
  downPayment: number
  downPaymentMax: number
  zip: string
  onPurchaseChange: (value: number) => void
  onDownPaymentChange: (value: number) => void
  onZipChange: (value: string) => void
}) {
  return (
    <div className="mt-8 space-y-6">
      <MoneySliderField
        label="Purchase price"
        value={purchasePrice}
        min={PURCHASE_MIN}
        max={PURCHASE_MAX}
        step={1_000}
        rangeMinLabel="$1,000"
        rangeMaxLabel="$2M+"
        onChange={onPurchaseChange}
      />
      <MoneySliderField
        label="Down payment"
        value={downPayment}
        min={0}
        max={downPaymentMax}
        step={1_000}
        rangeMinLabel="0%"
        rangeMaxLabel="20%+"
        onChange={onDownPaymentChange}
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <label className="text-[14px] font-bold leading-[1.7] text-[#272625]">ZIP code</label>
          <Input
            value={zip}
            onChange={(e) => onZipChange(e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="Enter ZIP code"
            inputMode="numeric"
            className="mt-2 h-auto rounded-lg border-[#989593] px-3 py-2.5 text-[16px] tracking-[-0.25px] text-[#3b3b39] placeholder:text-[#3b3b39]"
          />
        </div>
        <Button
          variant="primary"
          size="default"
          arrow
          className="h-12 shrink-0 rounded-xl px-6 text-[16px] font-semibold"
        >
          Calculate
        </Button>
      </div>
    </div>
  )
}

type CompoundingMethod = "daily" | "monthly"

function SavingHomeCalculator() {
  const [savingsGoal, setSavingsGoal] = useState(6_000)
  const [yearsToGoal, setYearsToGoal] = useState(2)
  const [compounding, setCompounding] = useState<CompoundingMethod>("daily")
  const [firstDepositPercent, setFirstDepositPercent] = useState(5)
  const [firstDepositDate, setFirstDepositDate] = useState("05/25/2026")

  return (
    <div className="mt-8 flex flex-col gap-6">
      <MoneyField label="Savings goal" value={savingsGoal} onChange={setSavingsGoal} />

      <TextFieldWithSuffix
        label="Years to reach goal"
        value={String(yearsToGoal)}
        suffix="years"
        inputMode="numeric"
        onChange={(raw) => {
          const parsed = Number(raw.replace(/\D/g, ""))
          if (Number.isFinite(parsed) && parsed > 0) setYearsToGoal(parsed)
          if (raw === "") setYearsToGoal(1)
        }}
      />

      <RadioFieldset
        legend="Compounding Method"
        name="savings-compounding"
        value={compounding}
        onChange={setCompounding}
        options={[
          { id: "daily", label: "Daily" },
          { id: "monthly", label: "Monthly" },
        ]}
      />

      <TextFieldWithSuffix
        label="Amount of first deposit"
        value={String(firstDepositPercent)}
        prefix="$"
        suffix="%"
        inputMode="decimal"
        onChange={(raw) => {
          const parsed = Number(raw.replace(/[^\d.]/g, ""))
          if (Number.isFinite(parsed)) setFirstDepositPercent(parsed)
        }}
      />

      <div>
        <label className="text-[14px] font-bold leading-[1.7] text-[#272625]">
          Date of first deposit
        </label>
        <Input
          value={firstDepositDate}
          onChange={(e) => setFirstDepositDate(e.target.value)}
          placeholder="MM/DD/YYYY"
          className="mt-2 h-auto rounded-lg border-[#989593] px-3 py-2.5 text-[16px] tracking-[-0.25px] text-[#272625]"
        />
      </div>

      <Button
        variant="primary"
        size="default"
        arrow
        className="h-12 w-fit rounded-xl px-6 text-[16px] font-semibold"
      >
        Calculate
      </Button>
    </div>
  )
}

type LoanAmountType = "remaining_balance" | "original_loan_amount"

function RefinanceHomeCalculator() {
  const [loanAmountType, setLoanAmountType] = useState<LoanAmountType>("remaining_balance")
  const [monthlyPayment, setMonthlyPayment] = useState(2_100)
  const [currentRate, setCurrentRate] = useState("7.00")
  const [newRate, setNewRate] = useState("6.309")
  const [fees, setFees] = useState(1_000)
  const [points, setPoints] = useState(1)
  const [cashOut, setCashOut] = useState(0)

  return (
    <div className="mt-8 flex flex-col gap-6">
      <RadioFieldset
        legend="Compounding Method"
        name="refinance-loan-amount"
        value={loanAmountType}
        onChange={setLoanAmountType}
        options={[
          { id: "remaining_balance", label: "Remaining balance" },
          { id: "original_loan_amount", label: "Original loan amount" },
        ]}
      />

      <MoneyField
        label="Current monthly payment"
        value={monthlyPayment}
        onChange={setMonthlyPayment}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextFieldWithSuffix
          label="Current interest rate"
          value={currentRate}
          suffix="%"
          inputMode="decimal"
          onChange={setCurrentRate}
        />
        <TextFieldWithSuffix
          label="New interest rate"
          value={newRate}
          suffix="%"
          inputMode="decimal"
          onChange={setNewRate}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <MoneyField label="Fees" value={fees} onChange={setFees} />
        <NumberField label="Points" value={points} onChange={setPoints} />
      </div>

      <MoneyField label="Cash-out amount" value={cashOut} onChange={setCashOut} />

      <Button
        variant="primary"
        size="default"
        arrow
        className="h-12 w-fit rounded-xl px-6 text-[16px] font-semibold"
      >
        Calculate
      </Button>
    </div>
  )
}

function RadioFieldset<T extends string>({
  legend,
  name,
  value,
  onChange,
  options,
}: {
  legend: string
  name: string
  value: T
  onChange: (value: T) => void
  options: { id: T; label: string }[]
}) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-[14px] font-bold leading-[1.7] text-[#272625]">{legend}</legend>
      <div className="space-y-2 pt-2">
        {options.map((option) => (
          <label key={option.id} className="flex cursor-pointer items-center gap-2">
            <span
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-full border-2 p-1.5",
                value === option.id ? "border-[#0061fe]" : "border-[#989593]"
              )}
            >
              {value === option.id ? (
                <span className="size-2 rounded-full bg-[#0061fe]" aria-hidden />
              ) : null}
            </span>
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="sr-only"
            />
            <span className="text-[16px] leading-[1.7] tracking-[-0.25px] text-[#272625]">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (value: number) => void
}) {
  return (
    <div>
      <label className="text-[14px] font-bold leading-[1.7] text-[#272625]">{label}</label>
      <div className="mt-2 flex items-center rounded-lg border border-[#989593] bg-white px-3 py-2.5">
        <input
          type="text"
          inputMode="numeric"
          value={String(value)}
          onChange={(e) => {
            const parsed = Number(e.target.value.replace(/\D/g, ""))
            if (Number.isFinite(parsed)) onChange(parsed)
          }}
          className="min-w-0 flex-1 bg-transparent text-[16px] tracking-[-0.25px] text-[#272625] outline-none"
          aria-label={label}
        />
      </div>
    </div>
  )
}

function MoneyField({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (value: number) => void
}) {
  return (
    <div>
      <label className="text-[14px] font-bold leading-[1.7] text-[#272625]">{label}</label>
      <div className="mt-2 flex items-center rounded-lg border border-[#989593] bg-white px-3 py-2.5">
        <span className="pr-1 text-[16px] tracking-[-0.25px] text-[#272625]">$</span>
        <input
          type="text"
          inputMode="numeric"
          value={formatMoneyInput(value)}
          onChange={(e) => onChange(parseMoney(e.target.value))}
          className="min-w-0 flex-1 bg-transparent text-[16px] tracking-[-0.25px] text-[#272625] outline-none"
          aria-label={label}
        />
      </div>
    </div>
  )
}

function TextFieldWithSuffix({
  label,
  value,
  suffix,
  prefix,
  inputMode = "text",
  onChange,
}: {
  label: string
  value: string
  suffix: string
  prefix?: string
  inputMode?: "text" | "numeric" | "decimal"
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label className="text-[14px] font-bold leading-[1.7] text-[#272625]">{label}</label>
      <div className="mt-2 flex items-center rounded-lg border border-[#989593] bg-white px-3 py-2.5">
        {prefix ? (
          <span className="pr-1 text-[16px] tracking-[-0.25px] text-[#272625]">{prefix}</span>
        ) : null}
        <input
          type="text"
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[16px] tracking-[-0.25px] text-[#272625] outline-none"
          aria-label={label}
        />
        <span className="pl-3 text-[16px] tracking-[-0.25px] text-[#272625]">{suffix}</span>
      </div>
    </div>
  )
}

function MoneySliderField({
  label,
  value,
  min,
  max,
  step,
  rangeMinLabel,
  rangeMaxLabel,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  rangeMinLabel: string
  rangeMaxLabel: string
  onChange: (value: number) => void
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-[14px] font-bold leading-[1.7] text-[#272625]">{label}</label>
        <div className="mt-2 flex items-center rounded-lg border border-[#989593] bg-white px-3 py-2.5">
          <span className="pr-1 text-[16px] tracking-[-0.25px] text-[#272625]">$</span>
          <input
            type="text"
            inputMode="numeric"
            value={formatMoneyInput(value)}
            onChange={(e) => onChange(parseMoney(e.target.value))}
            className="min-w-0 flex-1 bg-transparent text-[16px] tracking-[-0.25px] text-[#272625] outline-none"
            aria-label={label}
          />
        </div>
      </div>
      <div>
        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={(next) => onChange(next[0])}
          aria-label={`${label} slider`}
          className="[&_[data-slot=slider-track]]:h-1.5 [&_[data-slot=slider-track]]:bg-[#f5f2eb] [&_[data-slot=slider-range]]:bg-[#0157ff] [&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-thumb]]:border-[#0157ff] [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-thumb]]:shadow-[0_0_1px_rgba(21,21,21,0.1),0_2px_8px_-1px_rgba(21,21,21,0.2)]"
        />
        <div className="mt-1 flex justify-between text-[12px] leading-[1.7] text-[#3b3b39]">
          <span>{rangeMinLabel}</span>
          <span>{rangeMaxLabel}</span>
        </div>
      </div>
    </div>
  )
}
