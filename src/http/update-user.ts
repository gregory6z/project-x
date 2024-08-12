import { api } from "./api-client"

interface UpdateUserRequest {
  address?: string
  phone?: string
  customerId?: string
}

interface responseUpdateUser {
  message: string
}

export async function updateUser({
  address,
  phone,
  customerId,
}: UpdateUserRequest) {
  const result = await api
    .put(`user/contact-info`, {
      json: {
        address,
        phone,
        customerId,
      },
    })
    .json<responseUpdateUser>()

  return result
}
