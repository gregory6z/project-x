import { api } from "./api-client"

interface investment {
  id: string
  name: string
  description: string
  imageUrl: string
  investmentType: string
  annualProfit: number

  fundraisingProgress: {
    current: number
    numberOfWeeks: number
  }

  term: number
  risk: string

  createdAt: Date
  updatedAt?: Date
}

interface responseInvestments {
  investments: investment[]
}

export async function fetchInvestments() {
  const result = await api
    .get("investments", {
      cache: "force-cache",
    })
    .json<responseInvestments>()

  return result
}
