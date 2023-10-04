"use client"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "../Button"

export function Header() {
  return (
    <header className=" sticky  right-0 top-0 z-10 flex h-[4rem] w-full items-center bg-background-dark-900  lg:h-[5rem] lg:px-16 ">
      <div className="mx-[1.25rem] flex  w-full items-center justify-between   lg:mx-auto lg:max-w-[1120px]">
        <Link href="/" className="lg:hidden">
          <Image src="logo.svg" width="180" height="60" alt="logo"></Image>
        </Link>

        <Link href="/" className="hidden lg:block">
          <Image src="logo.svg" width="240" height="80" alt="logo"></Image>
        </Link>

        <Menu className="lg: h-7 w-7  text-gray-100 lg:hidden" />
        <div className="hidden  items-center gap-8 lg:flex">
          <Link href={"#"} className="text-gray-100">
            Connecter
          </Link>
          <Button
            text="Devenez un investisseur"
            className="lg:h-[48px] lg:w-[268px] "
          />
        </div>
      </div>
    </header>
  )
}
