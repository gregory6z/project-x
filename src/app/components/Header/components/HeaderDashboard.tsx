"use client"
import Link from "next/link"
import Image from "next/image"

import { UserButton, useAuth, useUser } from "@clerk/nextjs"

export function HeaderDashboard() {
  const auth = useAuth().isSignedIn
  const firstName = useUser().user?.firstName
  return (
    <div>
      {auth ? (
        <div className="flex">
          <div>UserButton</div>
          <div className="flex flex-col text-gray-100">
            <div className="opacity-70">Welcome back</div>
            <div>{firstName}</div>
          </div>
        </div>
      ) : (
        <Link href="/" className="hidden lg:block">
          <Image src="logo.svg" width="240" height="80" alt="logo"></Image>
        </Link>
      )}
    </div>
  )
}
