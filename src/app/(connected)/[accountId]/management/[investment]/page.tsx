import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/Card"
import { ChartInvestment } from "../chart-investment"
import { ChartInvestmentBar } from "../chart-investment-bar"

export default function InvestmentManagement() {
  return (
    <div className="mx-auto mt-[5rem] max-w-[1260px] pb-20">
      <div className="grid w-full grid-cols-6 gap-4">
        <Card className="col-span-2 row-span-2 max-w-[400px] bg-zinc-900">
          <CardContent>
            <div className=" flex flex-col">
              <CardTitle>Investment 1</CardTitle>
              <div className="mt-4 h-[140px] w-[140px] rounded-2xl bg-zinc-500"></div>

              <CardDescription className="mt-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt iure officiis veritatis. Laboriosam dolorum, incidunt,
                reprehenderit, atque cum nam fuga sequi inventore rerum nesciunt
                earum possimus sit delectus sint recusandae?
              </CardDescription>

              {/* <div className=" ml-10 mt-10">
                <p>status: Active</p>
                <p>type: fixed</p>
                <p>term: 6 months</p>
                <p>initial amount: 1000</p>
                <p>last profit amount: 100</p>
                <p>annual profit: 10%</p>
                <p>remaining days: 30</p>
                <p>total profit: 1000</p>
              </div> */}
            </div>
          </CardContent>
        </Card>
        <div className=" rounded-lg border border-zinc-800 bg-zinc-900 p-4">
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
        <div className=" rounded-lg border border-zinc-800 bg-zinc-900 p-4">
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
        <div className=" rounded-lg border border-zinc-800 bg-zinc-900 p-4">
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
        <div className=" rounded-lg border border-zinc-800 bg-zinc-900 p-4">
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
        <div className="col-span-4  rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <p>term: 6 months</p>
          <p>initial amount: 1000</p>
          <p>last profit amount: 100</p>
          <p>annual profit: 10%</p>
          <p>remaining days: 30</p>
          <p>total profit: 1000</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <ChartInvestment width={536} />
        <ChartInvestmentBar />
      </div>
    </div>
  )
}
