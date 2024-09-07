"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/Card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/Chart"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

// Janeiro: +20,00 euros
// Fevereiro: +15,30 euros
// Março: +31,99 euros
// Abril: -10,72 euros
// Maio: -5,32 euros
// Junho: +10,52 euros
// Julho: +5,14 euros
// Agosto: +21,34 euros
// Setembro: -5,30 euros
// Outubro: +16,82 euros
// Novembro: +22,20 euros
// Dezembro: +10,43 euros

const data = [
  { month: "inicio", desktop: 0, percentage: 0 },
  { month: "jan", desktop: 20, percentage: 0 },
  { month: "fev", desktop: 15.3, percentage: ((15.3 - 20) / 20) * 100 },
  { month: "mar", desktop: 31.99, percentage: ((31.99 - 15.3) / 15.3) * 100 },
  {
    month: "abril",
    desktop: -10.72,
    percentage: ((-10.72 - 31.99) / 31.99) * 100,
  },
  {
    month: "mai",
    desktop: -5.32,
    percentage: ((-5.32 - -10.72) / -10.72) * 100,
  },
  {
    month: "junho",
    desktop: 10.52,
    percentage: ((10.52 - -5.32) / -5.32) * 100,
  },
  {
    month: "julho",
    desktop: 21.34,
    percentage: ((21.34 - 10.52) / 10.52) * 100,
  },
  {
    month: "agosto",
    desktop: -5.3,
    percentage: ((-5.3 - 21.34) / 21.34) * 100,
  },
  { month: "set", desktop: 16.82, percentage: ((16.82 - -5.3) / -5.3) * 100 },
  { month: "out", desktop: 22.2, percentage: ((22.2 - 16.82) / 16.82) * 100 },
  { month: "nov", desktop: 10.43, percentage: ((10.43 - 22.2) / 22.2) * 100 },
  { month: "dez", desktop: 10.43, percentage: ((10.43 - 10.43) / 10.43) * 100 },
]

const data2 = [
  { month: "initial", money: 0, percentage: 0, profit: 0 },
  { month: "Janeiro", money: 1000.0, percentage: 2.0, profit: 20.0 },
  { month: "Fevereiro", money: 1020.0, percentage: 1.5, profit: 15.3 },
  { month: "Março", money: 1035.3, percentage: 3.0, profit: 31.99 },
  { month: "Abril", money: 1067.29, percentage: -1.0, profit: -10.72 },
  { month: "Maio", money: 1056.57, percentage: -0.5, profit: -5.32 },
  { month: "Junho", money: 1051.25, percentage: 1.0, profit: 10.52 },
  { month: "Julho", money: 1061.77, percentage: 0.5, profit: 5.14 },
  { month: "Agosto", money: 1066.91, percentage: 2.0, profit: 21.34 },
  { month: "Setembro", money: 1088.25, percentage: -0.5, profit: -5.3 },
  { month: "Outubro", money: 1082.95, percentage: 1.5, profit: 16.82 },
  { month: "Novembro", money: 1099.77, percentage: 2.0, profit: 22.2 },
  { month: "Dezembro", money: 1121.97, percentage: 1.0, profit: 10.43 },
]

const chartConfig = {
  desktop: {
    label: "money",
    color: "#22c55e",
  },
} satisfies ChartConfig

interface ChartInvestmentProps {
  width: number
}

export function ChartInvestment({ width }: ChartInvestmentProps) {
  return (
    <Card className="h-full w-full rounded-xl bg-zinc-900">
      <CardHeader className="py-[1.5rem]  ">
        <CardTitle>Évolution de Vos Investissements</CardTitle>
        <CardDescription>
          Suivez l'évolution de vos investissements et voyez comment votre
          patrimoine se développe au fil du temps. Chaque étape de votre
          parcours financier est un pas vers un avenir plus prospère.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-full max-h-[240px] w-full"
        >
          <AreaChart className="h-full w-full" accessibilityLayer data={data2}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillMoney" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#082a14" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area
              dataKey="profit"
              type="linear"
              fill="url(#fillMoney)"
              fillOpacity={0.4}
              stroke="#22c55e"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
