import { fetchInvestments } from "@/http/fetch-investments"
import { InvestmentCard } from "./components/investmentCard"

export async function InvestmentsContainer() {
  const { investments } = await fetchInvestments()

  console.log(investments)

  const sortedInvestments = investments.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  )

  return (
    <main className="mt-8 grid h-full  w-full grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3   lg:gap-y-12 ">
      {sortedInvestments.map((investment) => {
        const currentWeeks =
          investment.fundraisingProgress.numberOfWeeks *
          investment.fundraisingProgress.current

        const totalDays = investment.fundraisingProgress.numberOfWeeks * 7
        const currentDays = currentWeeks * 7

        const remainingDays = Math.round(totalDays - currentDays)

        const anualProfitMultiplier = investment.annualProfit * 100

        return (
          <InvestmentCard
            key={investment.id}
            name={investment.name}
            term={investment.term}
            imageUrl={investment.imageUrl}
            investmentType={investment.investmentType}
            remainingDays={remainingDays}
            annualProfit={anualProfitMultiplier}
          />
        )
      })}
    </main>
  )
}
