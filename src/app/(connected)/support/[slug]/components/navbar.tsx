import { faqData } from "../../faq"
import { NavLink } from "@/app/(connected)/[accountId]/components/HeaderAccount/components/NavLink"

export function Navbar() {
  const data = faqData

  return (
    <nav className="flex h-full flex-col items-start gap-6 lg:w-[20rem] lg:text-xl">
      {data.map((item, index) => {
        return (
          <NavLink href={item.link} key={index}>
            {item.category}
          </NavLink>
        )
      })}
    </nav>
  )
}
