import { api } from "./api-client"

interface SignOutRequest {
  firstName: string
  lastName: string
  address: string
  phone: string
  birthDate: Date
  email: string
  password: string
}

export async function signOut({
  firstName,
  lastName,
  address,
  phone,
  birthDate,
  email,
  password,
}: SignOutRequest) {
  const result = await api
    .post("accounts", {
      json: {
        email,
        password,
        firstName,
        lastName,
        address,
        phone,
        birthDate,
      },
    })
    .json()

  return result
}
