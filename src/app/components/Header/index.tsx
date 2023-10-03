"use client"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className=" flex h-[4rem] w-full items-center bg-background-dark-900 ">
      <div className="mx-[1.25rem] flex  w-full items-center justify-between">
        <Link href="/">
          <Image src="logo.svg" width="180" height="60" alt="logo"></Image>
        </Link>

        <Menu className="h-7 w-7 text-gray-100" />
      </div>
    </header>
  )
}
