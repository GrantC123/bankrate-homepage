import type { ComponentProps } from "react"
import { Button as LedgerButton, buttonVariants } from "./button"

type LegacyVariant = "primary" | "outline" | "ghost" | "dark"
type LegacySize = "default" | "sm" | "lg"

const legacyVariantMap: Record<
  LegacyVariant,
  Pick<ComponentProps<typeof LedgerButton>, "variant" | "color">
> = {
  primary: { variant: "default", color: "primary" },
  outline: { variant: "outline", color: "primary" },
  ghost: { variant: "ghost", color: "white" },
  dark: { variant: "default", color: "white" },
}

export interface ButtonProps extends Omit<ComponentProps<typeof LedgerButton>, "variant" | "size"> {
  variant?: LegacyVariant | ComponentProps<typeof LedgerButton>["variant"]
  size?: LegacySize | ComponentProps<typeof LedgerButton>["size"]
}

function isLegacyVariant(variant: ButtonProps["variant"]): variant is LegacyVariant {
  return variant === "primary" || variant === "outline" || variant === "ghost" || variant === "dark"
}

function Button({ variant = "primary", size = "default", ...props }: ButtonProps) {
  if (isLegacyVariant(variant)) {
    return <LedgerButton {...legacyVariantMap[variant]} size={size} {...props} />
  }

  return <LedgerButton variant={variant} size={size} {...props} />
}

export { Button, buttonVariants }
