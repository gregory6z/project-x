import { HeaderAccount } from "./components/HeaderAccount"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <HeaderAccount></HeaderAccount>
      <div className="h-full w-full ">{children}</div>
    </div>
  )
}
