import { Button } from "@/app/components/Button"
import { fetchInvestments } from "@/http/fetch-investments"
import { yearsToMonths } from "@/lib/utils"
import { Pin } from "lucide-react"
import Image from "next/image"

export async function HighlightedFundraising() {
  const investments = await fetchInvestments()

  const investment = investments.investments[0]

  const investmentTerm = yearsToMonths(investment.term)

  const anualProfit = investment.annualProfit * 100

  return (
    <div className="  w-full rounded-2xl border border-solid border-zinc-700 bg-zinc-800/80 p-4 lg:h-[62%] lg:w-[40%] ">
      <header className="flex items-center gap-2 text-gray-100">
        <Pin className="h-6 w-6"></Pin>
        <div className="flex w-full items-center justify-between">
          <p className="text-bold  ">Collecte en vedette</p>
          <div className="h-10 w-16 bg-gray-900">
            <Image
              src={investment.imageUrl}
              width={64}
              height={40}
              alt={"image investment"}
            ></Image>
          </div>
        </div>
      </header>
      <div className=" flex flex-col gap-2">
        <p className="text-lg font-semibold text-yellow-normal">
          {investment.name}
        </p>
        <div className=" flex flex-col gap-1">
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Prazo </p>
            <p>{investmentTerm} mois</p>
          </div>
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Rentabilidade </p>
            <p>{anualProfit} % annuelle</p>
          </div>
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Tipo </p>
            <p>{investment.investmentType}</p>
          </div>
        </div>
      </div>

      <Button className="mt-6 w-full">Investir</Button>

      {/* <Button text={"Investir"} variant="md" className="mt-6"></Button> */}
    </div>
  )
}
