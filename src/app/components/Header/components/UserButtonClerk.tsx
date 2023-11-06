"use client"

import Link from "next/link"
import { UserButton, useUser, useAuth, ClerkLoading } from "@clerk/nextjs"

import { Button } from "../../Button"

export function UserButtonClerk() {
  const auth = useAuth().isSignedIn

  return (
    <div>
      {auth ? (
        <>
          <UserButton
            signInUrl="/sign-in"
            afterSwitchSessionUrl="/"
            afterMultiSessionSingleSignOutUrl="/"
            afterSignOutUrl="/"
          />
        </>
      ) : (
        <div className="flex animate-animateFade items-center gap-8 transition-all duration-1000 ">
          <Link href={"/sign-in"} className="text-gray-100">
            Connecter
          </Link>
          <Button text="Devenez un investisseur" className="" variant="sm" />
        </div>
      )}
    </div>
  )
}
