"use client"

import React from "react"
import { Button } from "@/app/components/Button"

interface ButtonScrollProps {
  children: React.ReactNode
  Icon: React.ElementType
  black?: boolean
}

export function ButtonScroll({ children, Icon, black }: ButtonScrollProps) {
  const buttonBaseClass =
    "flex h-[56px] w-[56px] items-center justify-center rounded-full lg:h-16 lg:w-16"
  const buttonClass = `${buttonBaseClass} ${
    black
      ? "bg-background border border-gray-700 hover:bg-zinc-700 "
      : "bg-yellow-normal"
  }`

  const iconColorClass = black ? "text-gray-100 " : "text-background "

  return (
    <div className=" flex min-w-[80px] flex-col items-center gap-3 overflow-hidden text-center lg:min-w-[100px]">
      <Button className={buttonClass}>
        <Icon className={`h-full w-full lg:h-8 lg:w-8 ${iconColorClass}`} />
      </Button>
      <p className="max-w-[80px] text-sm text-gray-100">{children}</p>
    </div>
  )
}
