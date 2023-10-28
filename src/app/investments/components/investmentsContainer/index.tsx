import { InvestmentCard } from "./components/investmentCard"

export function InvestmentsContainer() {
  return (
    <main className="mt-8 grid h-full  w-full grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3   lg:gap-y-12 ">
      <InvestmentCard />
      <InvestmentCard />
      <InvestmentCard />

      <InvestmentCard />
      <InvestmentCard />
      <InvestmentCard />
    </main>
  )
}
