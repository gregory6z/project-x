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
import { TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Pie, PieChart, ResponsiveContainer } from "recharts"

const chartData = [
  { investment: "investment1_ $ :", money: 3000, fill: "#22c55e" },
  { investment: "investment2_ $ :", money: 2000, fill: "#0ea5e9" },
]

const chartConfig = {
  investments: {
    label: "Investments",
  },
  investment1: {
    label: "investment1",
  },
  investment2: {
    label: "investment2",
    color: "#FFA726",
  },
  firefox: {
    label: "Firefox",
    color: "#8BC34A",
  },
  edge: {
    label: "Edge",
    color: "#29B6F6",
  },
  other: {
    label: "Other",
    color: "#EC407A",
  },
} satisfies ChartConfig

export function ChartInvestmentPie() {
  return (
    <Card className="flex flex-col bg-zinc-900">
      <CardHeader className=" py-[1.5rem]  ">
        <CardTitle className="">Mon portefeuille</CardTitle>
        <CardDescription>
          Le graphique en secteurs offre une vue claire et intuitive de la
          composition de la portefeuille.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="  lg:h-full   lg:min-h-[100px] lg:min-w-[400px]">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-full    pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            {" "}
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              // innerRadius={60}
              dataKey="money"
              label
              nameKey="investment"
              stroke="#c5c5c5" // Adiciona contorno branco às fatias
              strokeWidth={2}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
