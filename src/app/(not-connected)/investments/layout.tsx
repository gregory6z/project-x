import { Depositions } from "../(Home)/components/Depositions"
import { Header } from "@/app/components/Header"

export default function InvestmentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header></Header>
      <div className="border-custom  h-full w-full bg-background-dark-800 lg:min-h-[calc(100vh-5rem)]">
        <div
          className=" mx-[1.25rem]
         flex h-full w-full  flex-col md:mx-10 lg:mx-16  lg:max-w-[1120px] xl:mx-auto xl:max-w-[1220px]  "
        >
          {children}
        </div>
        <Depositions />
      </div>
    </>
  )
}
