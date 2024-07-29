import { api } from "./api-client"

interface amountProfit {
  month: Date
  amount: number
  profit: number
}

interface investmentsPurchases {
  id: string

  accountId: string
  investmentId: string

  paymentType: "normal" | "subscription"
  status: "pending" | "completed" | "failed"

  initialAmount: number
  totalAmount: number
  amountProfits: amountProfit[] | null

  createdAt: Date
  updatedAt?: Date
}

interface responseInvestments {
  investments: investmentsPurchases[]
}

export async function fetchInvestmentsPurchases(accountId: string) {
  const result = await api
    .get(`investments-purchases/${accountId}`)
    .json<responseInvestments>()

  return result
}
