"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  Icon?: React.ElementType
  children: React.ReactNode
  href: string
}
export function NavLink({ Icon, children, href }: NavLinkProps) {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <Link href={href}>
      <div
        className={`flex items-center justify-center  lg:gap-2 ${
          pathname.startsWith(href)
            ? "text-yellow-500 transition-colors"
            : "text-gray-200 transition-colors hover:text-gray-300 "
        }`}
      >
        {Icon && <Icon className="h-[26px] w-[26px] lg:h-[20px] lg:w-[20px]" />}
        {/* <Icon className="h-[26px] w-[26px] lg:h-[20px] lg:w-[20px]" />{" "} */}
        <p className="hidden lg:block">{children}</p>
      </div>
    </Link>
  )
}
