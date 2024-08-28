import { Input } from "@/app/components/Input"
import { Search } from "lucide-react"
import Link from "next/link"

export function FaqHeader() {
  return (
    <header className="h-[5rem] w-full bg-zinc-800">
      <div className="mx-auto flex h-full items-center gap-14 lg:max-w-[1260px]">
        <Link
          href="/support"
          className="flex h-full items-center text-lg font-semibold tracking-widest text-primary"
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
