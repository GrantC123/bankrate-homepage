import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"
import "./button.css"

const buttonVariants = cva("t-button", {
  variants: {
    variant: {
      default: "",
      destructive: "[data-color='destructive']",
      outline: "[data-variant='outline']",
      secondary: "[data-color='secondary']",
      ghost: "[data-variant='ghost']",
      link: "[data-variant='link']",
      "link-hover": "[data-variant='link-hover']",
    },
    size: {
      default: "",
      sm: "[data-size='sm']",
      lg: "[data-size='lg']",
      xs: "[data-size='xs']",
      icon: "",
      "icon-xs": "[data-size='xs']",
      "icon-sm": "[data-size='sm']",
      "icon-lg": "[data-size='lg']",
    },
    shape: {
      default: "",
      circle: "[data-shape='circle']",
      square: "[data-shape='square']",
      pill: "[data-shape='pill']",
    },
    color: {
      default: "",
      primary: "[data-color='primary']",
      white: "[data-color='white']",
      destructive: "[data-color='destructive']",
      secondary: "[data-color='secondary']",
      accent: "[data-color='accent']",
      muted: "[data-color='muted']",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    shape: "default",
    color: "default",
  },
})

// Maps CVA variant names to Treasury data-attribute values for direct DOM output.
// Classes like [data-variant='outline'] work in Tailwind but don't set the actual
// attribute — we set them explicitly so the CSS selectors match.
const VARIANT_DATA_ATTRS: Record<
  string,
  { "data-variant"?: string; "data-color"?: string }
> = {
  default: {},
  destructive: { "data-color": "destructive" },
  outline: { "data-variant": "outline", "data-color": "primary" },
  secondary: { "data-color": "secondary" },
  ghost: { "data-variant": "ghost", "data-color": "primary" },
  link: { "data-variant": "link" },
  "link-hover": { "data-variant": "link-hover" },
}

const SIZE_DATA_ATTRS: Record<string, { "data-size"?: string, "data-shape"?: string }> = {
  default: {},
  sm: { "data-size": "sm" },
  lg: { "data-size": "lg" },
  xs: { "data-size": "xs" },
  icon: { "data-shape": "circle" },
  "icon-xs": { "data-size": "xs", "data-shape": "circle" },
  "icon-sm": { "data-size": "sm", "data-shape": "circle" },
  "icon-lg": { "data-size": "lg", "data-shape": "circle" },
}

const SHAPE_DATA_ATTRS: Record<string, { "data-shape"?: string }> = {
  default: {},
  circle: { "data-shape": "circle" },
  square: { "data-shape": "square" },
  pill: { "data-shape": "pill" },
}

const COLOR_DATA_ATTRS: Record<string, { "data-color"?: string }> = {
  default: {},
  primary: { "data-color": "primary" },
  white: { "data-color": "white" },
  destructive: { "data-color": "destructive" },
  secondary: { "data-color": "secondary" },
  accent: { "data-color": "accent" },
  muted: { "data-color": "muted" },
}

function Button({
  className,
  variant = "default",
  size = "default",
  shape = "default",
  color = "default",
  arrow = false,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    arrow?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  if (process.env.NODE_ENV !== "production" && asChild && arrow) {
    console.warn("Button: `arrow` has no effect when `asChild` is true — place the arrow inside the child element instead.")
  }
  const variantAttrs = VARIANT_DATA_ATTRS[variant ?? "default"] ?? {}
  const sizeAttrs = SIZE_DATA_ATTRS[size ?? "default"] ?? {}
  const shapeAttrs = SHAPE_DATA_ATTRS[shape ?? "default"] ?? {}
  const colorAttrs = COLOR_DATA_ATTRS[color ?? "default"] ?? {}

  return (
    <Comp
      data-slot="button"
      {...variantAttrs}
      {...sizeAttrs}
      {...shapeAttrs}
      {...colorAttrs}
      className={cn(buttonVariants({ variant, size, shape, color, className }))}
      {...props}
    >
      {asChild ? children : (
        <>
          {children}
          {arrow && (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="t-button__arrow" aria-hidden="true">
              <path fill="currentColor" fillRule="evenodd" d="M7.3 14.7c-.4-.4-.4-1.05 0-1.45L12.53 8 7.3 2.75c-.4-.4-.4-1.05 0-1.45.4-.4 1.04-.4 1.44 0l5.96 5.98c.4.4.4 1.04 0 1.44L8.74 14.7c-.4.4-1.04.4-1.44 0Z" clipRule="evenodd" />
              <path className="t-button__arrow-line" fill="currentColor" d="M2.07 7C1.48 7 1 7.45 1 8s.48 1 1.07 1V7ZM14 7H2.07v2H14V7Z" />
            </svg>
          )}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
