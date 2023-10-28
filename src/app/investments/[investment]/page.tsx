import { Button } from "@/app/components/Button"
import Image from "next/image"
import InvestImg from "../../assets/imagem-card-investing.png"
import { ProgressBar } from "@/app/components/Progress"
import DetailedInvestiment from "./components/DetailedInvestiment"
import { ProjectedScenarios } from "./components/ProjectedScenarios"
import { BenefitsAndRisks } from "./components/BenefitsAndRisks"
import { Simulator } from "@/app/Home/components/Simulator"

export default function Investiment({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <DetailedInvestiment />
      <ProjectedScenarios />
      <BenefitsAndRisks />
    </>
  )
}
