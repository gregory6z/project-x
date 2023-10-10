"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "../Button"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { DialogContent } from "./components/DialogContent"

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isHidden, setIsHidden] = useState(false)
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = scrollY
      setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 100)
      setPrevScrollPos(currentScrollPos)

      // if (pathname === "/make-appointment/selection-services") {
      //   setIsHidden(false)
      // }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos, pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  function closeModal() {
    setOpen(false)
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Overlay className=" fixed  z-10  h-screen w-screen transform bg-black/50 data-[state=closed]:animate-overlayFade data-[state=open]:animate-overlayShow" />

      <header
        className={` sticky top-0 z-10  flex h-[4rem]  w-full items-center  border-b border-solid border-gray-800 bg-background-dark-800  duration-700 ease-in-out   lg:h-[5rem] lg:px-16 ${
          isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-[1.25rem] flex  w-full items-center justify-between   lg:mx-auto lg:max-w-[1120px]">
          <Link href="/" className="lg:hidden">
            <Image src="logo.svg" width="180" height="60" alt="logo"></Image>
          </Link>

          <Link href="/" className="hidden lg:block">
            <Image src="logo.svg" width="240" height="80" alt="logo"></Image>
          </Link>

          {open ? (
            <DialogPrimitive.Trigger>
              <X className="lg: h-7 w-7  text-gray-100 lg:hidden" />
            </DialogPrimitive.Trigger>
          ) : (
            <DialogPrimitive.Trigger>
              <Menu className="lg: h-7 w-7  text-gray-100 lg:hidden" />
            </DialogPrimitive.Trigger>
          )}

          <div className="hidden  items-center gap-8 lg:flex">
            <Link href={"#"} className="text-gray-100">
              Connecter
            </Link>
            <Button
              text="Devenez un investisseur"
              className="text-[13px]  lg:h-[48px] lg:w-[240px]"
            />
          </div>
        </div>
      </header>
      <DialogContent />
    </DialogPrimitive.Root>
  )
}
