import { MotionElement } from "@/app/components/Framer-motion/motion"
import { ReactNode } from "react"

interface BenefitsCardProps {
  title: string
  children: ReactNode
}

export function BenefitsCard({ children, title }: BenefitsCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border-2 border-solid border-gray-700 bg-background-dark-900 p-7">
      <h1 className=" text-2xl font-bold text-yellow-normal lg:min-h-[30%]">
        {title}
      </h1>
      <p className="opacity-70 lg:text-lg">{children}</p>
    </div>
  )
}
