// import Link from "next/link"
// import React, { ButtonHTMLAttributes, ReactNode } from "react"

// interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
//   text: string | ReactNode
//   customClassName?: string
//   variant?: "lg" | "sm" | "secondary" | "md"
// }

// const variantClasses: Record<string, string> = {
//   lg: "bg-yellow-normal text-background-dark-700 px-2  h-10 text-base lg:h-16 lg:text-xl w-full hover:bg-yellow-active hover:bg-yellow-dark   ",
//   secondary:
//     "bg-gray-800 text-gray-100 border-none  px-2 h-10 text-base lg:h-16 lg:text-xl w-full  hover:bg-gray-900 hover:border-yellow-normal  ",
//   md: "bg-yellow-normal/90 text-background-dark-700  h-10 text-base lg:h-12 lg:text-lg w-full hover:bg-yellow-active ",
//   sm: "lg:h-[48px] lg:w-[240px]  font-bold  text-sm bg-yellow-normal hover:bg-yellow-active ",
// }

// export const Button: React.FC<ButtonProps> = ({
//   text,
//   className,
//   variant = "lg",
//   ...props
// }) => {
//   const buttonClass = `   rounded-md font-black  gap-2 flex items-center justify-center    tracking-widest ${variantClasses[variant]}`

//   return (
//     <Link
//       href={"/sign-up"}
//       className={`    ${buttonClass} ${className}`}
//       {...props}
//     >
//       {text}
//     </Link>
//   )
// }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-yellow-normal/70 ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-[48px] rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
