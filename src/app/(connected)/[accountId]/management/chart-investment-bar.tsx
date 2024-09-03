"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts"

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

export const description = "A bar chart with negative values"

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
]

const data2 = [
  { month: "jan", money: 1000.0, percentage: 2.0, profit: 20.0 },
  { month: "fev", money: 1020.0, percentage: 1.5, profit: 15.3 },
  { month: "mar", money: 1035.3, percentage: 3.0, profit: 31.99 },
  { month: "avril", money: 1067.29, percentage: -1.0, profit: -10.72 },
  { month: "mai", money: 1056.57, percentage: -0.5, profit: -5.32 },
  { month: "jun", money: 1051.25, percentage: 1.0, profit: 10.52 },
  { month: "jul", money: 1061.77, percentage: 0.5, profit: 5.14 },
  { month: "ago", money: 1066.91, percentage: 2.0, profit: 21.34 },
  { month: "set", money: 1088.25, percentage: -0.5, profit: -5.3 },
  { month: "out", money: 1082.95, percentage: 1.5, profit: 16.82 },
  { month: "nov", money: 1099.77, percentage: 2.0, profit: 22.2 },
  { month: "dez", money: 1121.97, percentage: 1.0, profit: 10.43 },
]

const chartConfig = {
  profit: {
    label: "profit",
  },
} satisfies ChartConfig

export function ChartInvestmentBar() {
  return (
    <Card className="bg-zinc-900">
      <CardHeader>
        <CardTitle>Bar Chart - Negative</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[182px]">
          <BarChart accessibilityLayer width={536} height={182} data={data2}>
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="profit">
              <LabelList position="top" dataKey="month" fillOpacity={1} />
              {data2.map((item) => (
                <Cell
                  key={item.month}
                  fill={item.profit > 0 ? "#16a34a" : "#e11d48"}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}
