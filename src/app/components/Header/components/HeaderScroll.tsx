"use client"

import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { DialogContent } from "./DialogContent"
import { useStore } from "../store"

export function HeaderScroll({ children }: { children: ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const Open = useStore((state) => state.Open)
  const Toggle = useStore((state) => state.toggleOpen)
  // const setOpen = useStore((state) => state.setOpen)

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

  // useEffect(() => {
  //   setOpen(false)
  // }, [pathname])

  // function closeModal() {
  //   setOpen(false)
  // }

  return (
    <DialogPrimitive.Root open={Open} onOpenChange={Toggle}>
      <DialogPrimitive.Overlay className=" fixed  z-10  h-screen w-screen transform bg-black/50 data-[state=closed]:animate-overlayFade data-[state=open]:animate-overlayShow" />

      <header
        className={` sticky left-0 top-0 z-50 flex h-[4rem]  w-full items-center  border-b border-solid border-gray-800 bg-background-dark-800  duration-700 ease-in-out   lg:h-[5rem] lg:px-16 ${
          isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {children}
      </header>
      <DialogContent />
    </DialogPrimitive.Root>
  )
}
