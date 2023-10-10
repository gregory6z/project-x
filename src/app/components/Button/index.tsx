import { Poppins } from "next/font/google"
import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  customClassName?: string
}
const poppins = Poppins({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export const Button: React.FC<ButtonProps> = ({
  text,
  className,
  ...props
}) => {
  return (
    <button
      className={`w-full  ${poppins.className} text-bold rounded-md bg-yellow-normal font-[roboto]  font-bold  tracking-widest    text-background-dark-700 transition-all hover:bg-yellow-active hover:font-bold ${className}`}
      {...props}
    >
      {text}
    </button>
  )
}
