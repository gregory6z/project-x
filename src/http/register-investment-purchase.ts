import { api } from "./api-client"

interface RegisterInvestmentPurchaseRequest {
  accountId: string
  investmentId: string
  initialAmount: number
}

interface RegisterInvestmentPurchaseResponse {
  investmentPurchase: {
    id: string
  }
}

export async function RegisterInvestmentPurchase({
  accountId,
  investmentId,
  initialAmount,
}: RegisterInvestmentPurchaseRequest) {
  const result = await api
    .post(`${accountId}/investment-purchase`, {
      json: {
        initialAmount,
        investmentId,
      },
    })
    .json<RegisterInvestmentPurchaseResponse>()

  return result
}
