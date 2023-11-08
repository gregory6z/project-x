import { HeaderAccount } from "./components/HeaderAccount"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderAccount></HeaderAccount>
      <div className="h-full w-full bg-background-dark-800">{children}</div>
    </>
  )
}
