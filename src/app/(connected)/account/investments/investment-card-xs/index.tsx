import { Button } from "@/app/components/Button"
import { Card, CardContent, CardFooter, CardHeader } from "./components/card"
import Image from "next/image"

interface InvestmentCardXsProps {
  name: string
  term: number
  imageUrl: string
  investmentType: string
  annualProfit: number
  lastProfitAmount?: number
  remainingDays?: number
  initialAmount?: number
}

export function InvestmentCardXs({
  name,
  term,
  lastProfitAmount,
  initialAmount,
  imageUrl,
  investmentType,
  annualProfit,
  remainingDays,
}: InvestmentCardXsProps) {
  return (
    <Card className=" bg-background-dark-700 ">
      <CardHeader>
        <div className="mx-auto flex h-[120px] w-full items-center justify-center rounded-sm bg-black">
          <Image
            src={imageUrl}
            className="h-full w-full rounded-sm object-fill "
            height={100}
            width={200}
            alt={""}
          ></Image>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className=" mb-2 text-lg font-semibold tracking-wide">{name}</h1>
        <div className=" flex flex-col gap-1">
          {initialAmount && (
            <div className="border-custom flex justify-between text-white ">
              <p className="opacity-70">Dinheiro investido </p>
              <p className="font-semibold text-primary opacity-100">
                {initialAmount}
              </p>
            </div>
          )}

          {lastProfitAmount && (
            <div className="border-custom flex justify-between text-white opacity-70">
              <p>Ultimo lucro </p>
              <p>+ {lastProfitAmount}</p>
            </div>
          )}

          {remainingDays && (
            <div className="border-custom flex justify-between text-white opacity-70">
              <p>Prazo restante </p>
              <p>{remainingDays}</p>
            </div>
          )}

          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Terme </p>
            <p>{term} mois</p>
          </div>

          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Rentabilidade </p>
            <p>{annualProfit * 100} % annuelle</p>
          </div>
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Tipo </p>
            <p>{investmentType}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Savoir Plus</Button>
      </CardFooter>
    </Card>
  )
}
