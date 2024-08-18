import DetailedInvestiment from "./components/DetailedInvestiment"
import { ProjectedScenarios } from "./components/ProjectedScenarios"
import { BenefitsAndRisks } from "./components/BenefitsAndRisks"
import { fetchInvestments } from "@/http/fetch-investments"

export default async function Investment({
  searchParams,
}: {
  searchParams: { id: string; name: string }
}) {
  const { investments } = await fetchInvestments()

  console.log(searchParams.id)

  if (!investments || !searchParams.id) {
    console.error("Investments or params are undefined or null")
    return null
  }

  const investment = investments.find((item) => item.id === searchParams.id)

  console.log(investment)

  if (!investment) {
    console.error("Investment not found")
    return null
  }

  return (
    <>
      <DetailedInvestiment
        name={investment.name}
        term={investment.term}
        imageUrl={investment.imageUrl}
        investmentType={investment.investmentType}
        annualProfit={investment.annualProfit}
      />
      <ProjectedScenarios />
      <BenefitsAndRisks />
    </>
  )
}
