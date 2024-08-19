"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLinkProps {
  Icon: React.ElementType
  children: React.ReactNode
  href: string
}
export function NavLink({ Icon, children, href }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link href={href}>
      <div
        className={`flex items-center justify-center  lg:gap-2 ${
          href === pathname
            ? "text-yellow-500 transition-colors"
            : "text-gray-200 transition-colors hover:text-gray-300 "
        }`}
      >
        <Icon className="h-[26px] w-[26px] lg:h-[20px] lg:w-[20px]" />{" "}
        <p className="hidden lg:block">{children}</p>
      </div>
    </Link>
  )
}
