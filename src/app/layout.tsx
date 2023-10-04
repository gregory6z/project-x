import { Header } from "./components/Header"
import "./global.css"
import { Roboto } from "next/font/google"

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
      <body className={roboto.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
