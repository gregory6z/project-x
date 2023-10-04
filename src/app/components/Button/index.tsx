import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  customClassName?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className,
  ...props
}) => {
  return (
    <button
      className={`w-full rounded-md bg-yellow-normal py-3 font-extrabold tracking-widest text-background-dark-500 transition-all hover:bg-yellow-active ${className}`}
      {...props}
    >
      {text}
    </button>
  )
}
