import { Depositions } from "../Home/components/Depositions"
import { ButtonsSocialNetworks } from "../../components/ButtonsSocialNetworks"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export default function InvestmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="border-custom  h-full w-full bg-background-dark-800 lg:min-h-[calc(100vh-5rem)]">
        <div className="responsive-container h-full w-full flex-col  ">
          {children}
        </div>
        <Depositions />
      </div>
    </>
  )
}
