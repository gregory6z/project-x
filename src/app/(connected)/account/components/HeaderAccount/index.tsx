"use client"

import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import {
  AreaChart,
  Eye,
  LayoutPanelLeft,
  PieChart,
  Plus,
  ShieldQuestion,
} from "lucide-react"
import Link from "next/link"

import logoImg from "../../../../../../public/logo.svg"
import { NavLink } from "./components/NavLink"

export function HeaderAccount() {
  return (
    <header className="fixed bottom-0 z-50   h-[3.5rem] w-full   bg-background-dark-700 text-gray-100/80 lg:sticky lg:top-0 lg:h-[5.5rem] lg:px-16 xl:px-0">
      <div className="mx-auto flex h-full w-full items-center justify-between lg:max-w-[1340px]">
        <Link href="/account/home" className="hidden lg:block">
          <Image src={logoImg} width="240" height="80" alt="logo"></Image>
        </Link>

        <nav className="mx-auto flex items-center  gap-10 lg:mx-0    lg:gap-6 lg:px-0">
          <Eye className="hidden opacity-60 lg:block"></Eye>
          <div className="hidden h-6 w-px bg-gray-500/50 lg:block"></div>

          <NavLink href="/account/home" Icon={LayoutPanelLeft}>
            Accueil
          </NavLink>

          <NavLink href="/account/investments" Icon={AreaChart}>
            Investir
          </NavLink>

          <NavLink href="/account/ajouter" Icon={PieChart}>
            Gestion
          </NavLink>

          <NavLink href="/support" Icon={ShieldQuestion}>
            Support
          </NavLink>

          <div className="flex items-center justify-center lg:gap-3">
            <UserButton></UserButton>

            <p className="hidden lg:block">Mon compte</p>
          </div>
        </nav>
      </div>
    </header>
  )
}
