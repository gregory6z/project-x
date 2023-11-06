import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import {
  AreaChart,
  Eye,
  LayoutPanelLeft,
  LineChart,
  Plus,
  ShieldQuestion,
} from "lucide-react"
import Link from "next/link"

import logoImg from "../../../../../../public/logo.svg"

export function HeaderAccount() {
  return (
    <header className="fixed bottom-0 z-10   h-[3.5rem] w-full   bg-background-dark-700 text-gray-100/80 lg:sticky lg:top-0 lg:h-[5.5rem] lg:px-16 xl:px-0">
      <div className="mx-auto flex h-full w-full items-center justify-between lg:max-w-[1340px]">
        <Link href="/" className="hidden lg:block">
          <Image src={logoImg} width="240" height="80" alt="logo"></Image>
        </Link>

        <nav className="mx-auto flex items-center  gap-10 lg:mx-0    lg:gap-8 lg:px-0">
          <Eye className="hidden opacity-60 lg:block"></Eye>
          <div className="hidden h-6 w-px bg-gray-500/50 lg:block"></div>

          <div className="flex items-center justify-center text-yellow-500 lg:gap-3">
            <LayoutPanelLeft className="h-[26px] w-[26px] lg:h-[20px] lg:w-[20px]" />{" "}
            <p className="hidden lg:block">Accueil</p>
          </div>
          <div className="flex items-start justify-center lg:gap-3">
            <AreaChart className="h-[26px] w-[26px] lg:h-[24px] lg:w-[24px]" />{" "}
            <p className="hidden lg:block">Investir</p>
          </div>
          <div className="flex items-start justify-center lg:gap-3">
            <Plus className="h-[26px] w-[26px] lg:h-[24px] lg:w-[24px]" />{" "}
            <p className="hidden lg:block">Ajouter de l'argent</p>
          </div>
          <div className="flex items-start justify-center lg:gap-3">
            <ShieldQuestion className="h-[26px] w-[26px] lg:h-[26px] lg:w-[26px]"></ShieldQuestion>
            <p className="hidden lg:block">Support</p>
          </div>
          <div className="flex items-center justify-center lg:gap-3">
            <UserButton></UserButton>
            <p className="hidden lg:block">Mon compte</p>
          </div>
        </nav>
      </div>
    </header>
  )
}
