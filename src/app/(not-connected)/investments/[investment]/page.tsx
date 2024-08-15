import DetailedInvestiment from "./components/DetailedInvestiment"
import { ProjectedScenarios } from "./components/ProjectedScenarios"
import { BenefitsAndRisks } from "./components/BenefitsAndRisks"
import { fetchInvestments } from "@/http/fetch-investments"

export default async function Investment({
  params,
}: {
  params: { investment: string }
}) {
  const { investments } = await fetchInvestments()

  console.log("investments asdasda", params)

  console.log(params.investment)

  if (!investments || !params) {
    console.error("Investments or params are undefined or null")
    return null
  }

  const investment = investments.find((item) => item.id === params.investment)

  console.log(investment)

  if (!investment) {
    console.error("Investment not found")
    return null
  }

  return (
    <>
      <DetailedInvestiment
        id={investment.id}
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
