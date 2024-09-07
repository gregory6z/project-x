import { FaqHeader } from "./components/header"
import { Navbar } from "./components/navbar"

export default function TopicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <FaqHeader></FaqHeader>
      <div className="mx-auto flex h-full  lg:max-w-[1260px] lg:px-8 lg:pt-[5rem] xl:px-0   ">
        <Navbar></Navbar>
        {children}
      </div>
    </div>
  )
}
