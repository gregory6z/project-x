import ky from "ky"
import { createSignature } from "./utils"
import crypto from "crypto"

const accessKey = process.env.RAPYD_ACCESS_KEY || ""

export async function createCustomer(email: string) {
  const body = { email }
  const salt = crypto.randomBytes(12).toString("hex")
  const timestamp = Math.floor(new Date().getTime() / 1000)
  const signature = createSignature(
    "post",
    "/v1/customers",
    salt,
    timestamp,
    body,
  )

  const response = await ky
    .post("https://sandboxapi.rapyd.net/v1/customers", {
      json: body,
      headers: {
        "Content-Type": "application/json",
        access_key: accessKey,
        salt,
        timestamp: timestamp.toString(),
        signature,
      },
    })
    .json<any>()

  return response.data.id
}
