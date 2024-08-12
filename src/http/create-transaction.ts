import { api } from "./api-client"

interface CreateTransactionRequest {
  accountId: string
  type: "deposit" | "withdrawal"

  amount: number
}

interface CreateTransactionResponse {
  transaction: {
    id: string
    accountId: string
    type: "deposit" | "withdrawal"

    status: "pending" | "completed" | "failed"

    amount: number
    createdAt?: Date
    updatedAt: Date | null
  }
}

export async function createTransaction({
  accountId,
  type,
  amount,
}: CreateTransactionRequest) {
  const result = await api
    .post("transaction", {
      json: {
        accountId,
        type,
        amount,
      },
    })
    .json<CreateTransactionResponse>()

  return result
}
