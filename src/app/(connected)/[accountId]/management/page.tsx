import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/Card"
import { ChartInvestment } from "./chart-investment"
import { ChartInvestmentPie } from "./chart-investment-pie"
import { Transaction } from "../history/components/transaction"
import { ChartInvestmentBar } from "./chart-investment-bar"

export default async function Management() {
  return (
    <div className="  h-full w-full ">
      <div className="mx-auto mt-8 w-full lg:mt-20 lg:max-w-[1260px] ">
        <div className="flex flex-col gap-2 lg:mt-12 lg:flex-row lg:gap-6 ">
          <ChartInvestmentPie />
          <ChartInvestment width={672} />
        </div>

        <div className="mt-2 grid gap-2 lg:mt-8 lg:grid-cols-4 lg:gap-6 ">
          <div className=" flex flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex flex-col items-center justify-center">
              {" "}
              <p>Valor total em conta</p>
              <p className="text-2xl font-extrabold text-green-400">200$</p>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              Valor disponivel para saque
              <p className="text-2xl font-extrabold text-primary">200$</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex flex-col items-center ">
              {" "}
              <p>Valor total investido</p>
              <p className="text-2xl font-extrabold text-green-400">200$</p>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              Valor total atual
              <p className="text-2xl font-extrabold text-primary">200$</p>
            </div>
          </div>

          <div className=" col-span-2 row-span-2">
            <ChartInvestmentBar />
          </div>

          <div className=" flex flex-col  justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex justify-between">
              {" "}
              Rentabilidade mensal
              <p className="text-2xl text-green-400">1.5%</p>
            </div>
            <div className="flex justify-between">
              {" "}
              Rentabilidade total
              <p className="text-2xl text-primary">13%</p>
            </div>
          </div>
          <div className=" flex flex-col  justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <div className="flex items-center justify-between">
              {" "}
              depositos futuros
              <p className="text-2xl text-green-400">200$</p>
            </div>

            <p className="mb-4 text-right text-sm text-foreground/60">
              disponible le 26/05/2030
            </p>

            <div className="flex items-center justify-between">
              {" "}
              depositos realizados
              <p className="text-2xl text-primary">200$</p>
            </div>
          </div>
        </div>
        <div className=" mt-8 grid gap-6 pb-[5rem] lg:grid-cols-2">
          {/* <Card className="bg-zinc-900">
            <CardHeader>
              <CardTitle>Mes Investissements</CardTitle>
              <CardDescription>Todos os meus investimentos</CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="flex flex-col gap-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="h-[4rem] w-[4rem] rounded-sm bg-zinc-500"></div>

                    <p className="text-2xl">Investimento 1</p>
                  </div>
                  <p className="text-2xl text-green-400">+200$</p>
                  <div className="flex items-center gap-2">
                    <p>status:</p>
                    <p className="h-2 w-2 rounded-full bg-green-400"></p>
                    <p>Active</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="h-[4rem] w-[4rem] rounded-sm bg-zinc-500"></div>

                    <p className="text-2xl">Investimento 2</p>
                  </div>
                  <p className="text-2xl text-green-400">+200$</p>

                  <div className="flex items-center gap-2">
                    <p>status:</p>
                    <p className="h-2 w-2 rounded-full bg-green-400"></p>
                    <p>Active</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}
          {/* <Card className="bg-zinc-900">
            <CardHeader>
              <CardTitle>Mes dernières transactions</CardTitle>
              <CardDescription>Ultimas transacoes realizadas</CardDescription>
            </CardHeader>
            <CardContent className="">
              <Transaction />
              <Transaction />
              <Transaction />
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  )
}
