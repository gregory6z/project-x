import { ButtonsSocialNetworks } from "./components/ButtonsSocialNetworks"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { frFR } from "@clerk/localizations"

import "./global.css"
import { Roboto } from "next/font/google"
import { dark } from "@clerk/themes"

import { ClerkProvider } from "@clerk/nextjs"
import { Suspense } from "react"
import { twMerge } from "tailwind-merge"

import Loading from "./loading"
import ScrollToTopOnMount from "./components/ScrollTop"
import { toast, Toaster } from "sonner"
import { isAuthenticated } from "@/auth/auth"

export const metadata = {
  title: "PARIS INVEST | HOME",
  description: "HOME PAGE",
}

const roboto = Roboto({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

export  default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr">
      <body className={`${roboto.className} dark bg-background-dark-800  `}>
        <ClerkProvider
          localization={frFR}
          appearance={{
            baseTheme: dark,
            elements: {
              card: twMerge(
                "shadow-none border-none  flex  bg-transparent lg:bg-background-dark-900  lg:border  lg:border-solid  border border-gray-700 border-solid ",
              ),
              rootBox: "   transparent  ",

              headerTitle: "text-3xl lg:text-5xl ",

              formFieldInput:
                "bg-background-dark-800 rounded-lg focus:outline-none focus:ring-2 focus:border-none focus:ring-yellow-normal h-12 border ",
              formButtonPrimary:
                "bg-yellow-normal text-gray-900 hover:bg-yellow-dark h-12 text-lg capitalize",
              formFieldAction:
                "text-yellow-normal hover:text-yellow-dark lg:text-lg",
              footerActionLink: "text-yellow-normal hover:text-yellow-dark ",
              socialButtonsIconButton: "bg-background-dark-800",
              formFieldLabel: "lg:text-lg",
              identityPreviewEditButton: "text-yellow-normal",
              formResendCodeLink: "text-yellow-normal",
              userButtonPopoverCard: twMerge(" absolute  "),
              badge: "text-yellow-normal bg-background-dark-900",
              userProfileSelectButton: "text-yellow-normal ",
              profileSectionPrimaryButton:
                "text-yellow-normal hover:bg-gray-900",
              accordionTriggerButton: "",
              navbarButton:
                "rounded-lg  focus:ring-2 focus:ring-yellow-normal  focus:border-none   ",
              // avatarBox:
              //   "w-[2.5rem] h-[2.5rem] focus:ring-2 focus:ring-yellow-normal  ",
              userButtonAvatarBox__open:
                " border border-yellow-normal border-solid  ",
            },
          }}
        >
          <ScrollToTopOnMount>
            <Toaster richColors className="mb-10 lg:mb-10" duration={1500} />

            <Suspense fallback={<Loading />}>{children}</Suspense>
          </ScrollToTopOnMount>
        </ClerkProvider>
      </body>
    </html>
  )
}
