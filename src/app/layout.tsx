import { ButtonsSocialNetworks } from "./components/ButtonsSocialNetworks"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import "./global.css"
import { Poppins, Roboto } from "next/font/google"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-background-dark-800  `}>
        <>
          <Header />
          {children}
          <Footer />
          <ButtonsSocialNetworks />
        </>
      </body>
    </html>
  )
}
