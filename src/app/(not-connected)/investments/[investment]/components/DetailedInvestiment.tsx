import Image from "next/image"
import { ProgressBar } from "@/app/components/Progress"
import { Button } from "@/app/components/Button"
import { DialogInvestmentPurchase } from "@/app/(connected)/account/components/DialogInvestmentPurchase"

interface Investment {
  name: string
  term: number
  imageUrl: string
  investmentType: string
  annualProfit: number
}

export default async function DetailedInvestment({
  name,
  term,
  imageUrl,
  investmentType,
  annualProfit,
}: Investment) {
  return (
    <div className="flex h-full w-full animate-animateOnOpen  flex-col lg:h-[calc(100vh-5rem)]">
      <div className="mx-auto mb-16 grid h-full grid-cols-1 items-center  gap-8 md:grid-cols-2 lg:flex  lg:gap-16  ">
        <div className="flex flex-col gap-8">
          <h1 className="mt-8 text-2xl text-gray-100 md:mt-0 md:hidden lg:text-5xl">
            {name}
          </h1>
          <div className="h-[40vh] w-[30rem] rounded-xl bg-slate-500 lg:h-[50vh]">
            <Image
              src={imageUrl}
              alt={""}
              height={500}
              width={700}
              className="h-full w-full rounded-xl border-2 border-gray-700 object-fill "
            ></Image>
          </div>

          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Button
              className="w-full    text-zinc-300"
              size="lg"
              variant="secondary"
            >
              Lamine tecniche
            </Button>
            <DialogInvestmentPurchase />
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 lg:min-w-[500px]">
          <div>
            <h1 className="mt-8 hidden text-2xl  text-gray-100 md:mt-0 md:block lg:text-5xl">
              {name}
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-gray-100 opacity-70">
              <p>Captados 5.05%</p>
              <p>faltam 130 dias</p>
            </div>
            <ProgressBar />
          </div>
          <div className="flex flex-col gap-2 text-gray-100 lg:text-xl">
            <div className="border-custom mb-1 flex justify-between ">
              <p className="opacity-70">Rentabilidade</p>
              <p className="text-yellow-normal">{annualProfit * 100}% aa</p>
            </div>
            <div className="border-custom mb-1 flex justify-between  opacity-70">
              <p>Prazo</p>
              <p>{term * 12} meses</p>
            </div>

            <div className="border-custom mb-1 flex justify-between  opacity-70">
              <p>Tipo</p>
              <p>{investmentType}</p>
            </div>
            <div className="border-custom mb-1 flex justify-between  opacity-70">
              <p>Risco</p>
              <p>Baixo</p>
            </div>
            <div className="border-custom mb-1 flex justify-between  opacity-70">
              <p>Data</p>
              <p>10/10/2023 ate 10/10/2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
