import { ChevronRight } from "lucide-react"
import { ReactElement } from "react"

interface MenuItemProps {
  children: React.ReactNode
  Icon: React.ElementType
}

export default function MenuItem({ children, Icon }: MenuItemProps) {
  return (
    <div className="flex w-full items-center justify-between rounded-t-lg border-b px-6 hover:cursor-pointer hover:bg-zinc-900">
      <div className="flex h-[4.5rem] items-center gap-6  ">
        {" "}
        <Icon />
        <p>{children}</p>
      </div>
      <ChevronRight />
    </div>
  )
}
