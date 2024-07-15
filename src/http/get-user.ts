import { api } from "./api-client"

interface User {
  id: string
  firstName: string
  lastName: string
  address: string
  isAdmin: boolean
  birthDate: Date
  email: string
  phone: string
}

interface BankAccount {
  id: string
  userId: string
  accountNumber: string
  balance: number
  availableWithdrawal: number
  createdAt: Date
  updatedAt: Date | null
}

interface GetUserResponse {
  user: User
  bankAccount: BankAccount
}

export async function GetUser() {
  const result = await api.get("get-user").json<GetUserResponse>()

  return result
}
