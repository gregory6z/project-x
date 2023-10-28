import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  customClassName?: string
  variant?: "lg" | "sm" | "secondary" | "md"
}

const variantClasses: Record<string, string> = {
  lg: "bg-yellow-normal text-background-dark-700 px-2  h-10 text-base lg:h-16 lg:text-xl w-full hover:bg-yellow-active hover:bg-yellow-dark   ",
  secondary:
    "bg-gray-800 text-gray-100 border-none  px-2 h-10 text-base lg:h-16 lg:text-xl w-full  hover:bg-gray-900 hover:border-yellow-normal  ",
  md: "bg-yellow-normal text-background-dark-700  h-8 text-base lg:h-12 lg:text-lg w-full hover:bg-yellow-active ",
  sm: "lg:h-[48px] lg:w-[240px]  font-bold  text-sm bg-yellow-normal hover:bg-yellow-active ",
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className,
  variant = "lg",
  ...props
}) => {
  const buttonClass = ` transition-all  rounded-md font-black  flex items-center justify-center  tracking-widest ${variantClasses[variant]}`

  return (
    <button className={`    ${buttonClass} ${className}`} {...props}>
      {text}
    </button>
  )
}
