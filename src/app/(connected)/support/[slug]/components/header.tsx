import { Input } from "@/app/components/Input"
import { Search } from "lucide-react"
import Link from "next/link"

export function FaqHeader() {
  return (
    <header className="h-[5rem] w-full bg-zinc-800">
      <div className="mx-auto flex h-full  w-full items-center gap-14 px-[1.5rem] lg:max-w-[1260px] lg:px-10 xl:px-0 ">
        <Link
          href="/support"
          className="hidden h-full  items-center text-lg font-semibold tracking-widest text-primary lg:flex"
        >
          FOIRE AUX QUESTIONS (FAQ)
        </Link>
        <Input
          icon={Search}
          placeholder="Décrive votre problème"
          faq
          className="h-[48px]   "
        ></Input>
      </div>
    </header>
  )
}
