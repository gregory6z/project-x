import { ChevronRight } from "lucide-react"
import { ButtonsScrolls } from "../ButtonsScrolls"
import { auth } from "@/auth/auth"
import { fetchInvestmentsPurchases } from "@/http/fetch-investments-purchases"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { queryClient } from "@/app/lib/react-query"

export async function AccountInformation() {
  const { bankAccount } = await auth()

  const { investments } = await fetchInvestmentsPurchases(bankAccount.id)

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("fr", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  let totalInitialAmount = 0

  let variation = 0
  let amountProfits: number[] = []

  if (investments.length >= 1) {
    totalInitialAmount = investments.reduce((acc, investment) => {
      return acc + investment.initialAmount
    }, 0)

    variation = investments.reduce((acc, investment) => {
      const sum = investment.amountProfits?.reduce((acc, profit) => {
        return acc + profit.profit
      }, 0)
      return acc + (sum || 0)
    }, 0)

    amountProfits = investments
      .map((investment) => {
        return (
          investment.amountProfits?.reduce((acc, profit) => {
            return acc + profit.profit
          }, 0) || 0
        )
      })
      .filter((value) => value !== undefined) as number[]
  }
  const formattedInitialAmount = formatCurrency(totalInitialAmount)

  const formattedBankAccountBalance = formatCurrency(bankAccount.balance)

  const formattedAmountProfits = formatCurrency(Number(amountProfits))

  return (
    <div className="flex min-h-[261px] flex-1 flex-col">
      <div className="border-1 bg-zinc-90/30 flex   h-full w-full flex-col gap-2 rounded-2xl border  border-primary p-4 tracking-wide ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-background text-gray-100">
            Compte courant
          </h1>
          <ChevronRight className="text-gray-100" />
        </div>
        <p className="text-3xl font-semibold text-primary">
          {formattedBankAccountBalance}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold  tracking-tight text-background text-gray-100">
              Mes Investissements
            </h1>

            <ChevronRight className="text-gray-100" />
          </div>
          <p className="text-xl font-semibold  text-yellow-normal">
            {formattedInitialAmount}
          </p>
          <div className="flex justify-between text-gray-100">
            <div>
              <p className="opacity-70">Variation: </p>
              <p className="text-xl font-semibold text-green-400">
                + {formattedAmountProfits}
              </p>
            </div>
            <div>
              <p className="opacity-70">Rentabilité:</p>{" "}
              <p className="text-xl font-semibold text-green-400">
                + {variation}%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ButtonsScrolls></ButtonsScrolls>
        </HydrationBoundary>
      </div>
    </div>
  )
}
