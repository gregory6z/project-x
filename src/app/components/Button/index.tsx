import { Loader2 } from "lucide-react"
import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import Link from "next/link"
import React, { ButtonHTMLAttributes, ReactNode, Suspense } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  text: string | ReactNode
  customClassName?: string
  variant?: "lg" | "sm" | "secondary" | "md"
}

const variantClasses: Record<string, string> = {
  lg: "bg-yellow-normal text-background-dark-700 px-2  h-10 text-base lg:h-16 lg:text-xl w-full hover:bg-yellow-active hover:bg-yellow-dark   ",
  secondary:
    "bg-gray-800 text-gray-100 border-none  px-2 h-10 text-base lg:h-16 lg:text-xl w-full  hover:bg-gray-900 hover:border-yellow-normal  ",
  md: "bg-yellow-normal text-background-dark-700  h-10 text-base lg:h-12 lg:text-lg w-full hover:bg-yellow-active ",
  sm: "lg:h-[48px] lg:w-[240px]  font-bold  text-sm bg-yellow-normal hover:bg-yellow-active ",
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className,
  variant = "lg",
  ...props
}) => {
  const buttonClass = `   rounded-md font-black  gap-2 flex items-center justify-center    tracking-widest ${variantClasses[variant]}`

  return (
    <Link
      href={"/sign-up"}
      className={`    ${buttonClass} ${className}`}
      {...props}
    >
      {text}
    </Link>
  )
}
