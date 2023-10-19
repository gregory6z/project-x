import Link from "next/link"
import Image from "next/image"

import { Button } from "../../Button"
import { TriggerButton } from "./TriggerButton"

export function HeaderContent() {
  return (
    <div className="mx-[1.25rem] flex  w-full items-center justify-between   lg:mx-auto lg:max-w-[1120px]">
      <Link href="/" className="lg:hidden">
        <Image src="logo.svg" width="180" height="60" alt="logo"></Image>
      </Link>

      <Link href="/" className="hidden lg:block">
        <Image src="logo.svg" width="240" height="80" alt="logo"></Image>
      </Link>

      <TriggerButton />

      <div className="hidden  items-center gap-8 lg:flex">
        <Link href="/how-it-works" className="text-gray-100">
          Comment ça marche
        </Link>

        <Link href={"#"} className="text-gray-100">
          Connecter
        </Link>
        <Button
          text="Devenez un investisseur"
          className="text-[13px] font-bold lg:h-[48px] lg:w-[240px]"
        />
      </div>
    </div>
  )
}
