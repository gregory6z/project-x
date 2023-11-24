import { Depositions } from "./(Home)/components/Depositions"
import { ButtonsSocialNetworks } from "../components/ButtonsSocialNetworks"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export default function NotConnectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer />
      <ButtonsSocialNetworks />
    </>
  )
}
