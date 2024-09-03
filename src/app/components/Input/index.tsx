import * as React from "react"

import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ElementType
  faq?: boolean
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, faq, type, ...props }, ref) => {
    return (
      <div
        className={`relative flex h-full w-full  items-center ${
          faq && "lg:max-w-[40rem]"
        }  `}
      >
        <input
          type={type}
          className={cn(
            "flex h-10 w-full  rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            Icon ? "pr-10" : "", // Adiciona padding à direita se houver um ícone
            className,
          )}
          ref={ref}
          {...props}
        />
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        )}
      </div>
    )
  },
)
Input.displayName = "Input"

export { Input }
