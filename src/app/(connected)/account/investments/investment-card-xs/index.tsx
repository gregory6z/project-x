import { Button } from "@/app/components/Button"
import { Card, CardContent, CardFooter, CardHeader } from "./components/card"

export function InvestmentCardXs() {
  return (
    <Card className=" bg-background-dark-700 ">
      <CardHeader>
        <div className="mx-auto h-[120px] w-full bg-black"></div>
      </CardHeader>
      <CardContent>
        <h1 className=" mb-2 text-lg font-semibold tracking-wide">
          Investimento 5{" "}
        </h1>
        <div className=" flex flex-col gap-1">
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Prazo </p>
            <p>2 mois</p>
          </div>
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Rentabilidade </p>
            <p>10 % annuelle</p>
          </div>
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Tipo </p>
            <p>empresa</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Savoir Plus</Button>
      </CardFooter>
    </Card>
  )
}
