import ky from "ky"
import crypto from "crypto"
import { createSignature } from "./utils"

const accessKey = process.env.RAPYD_ACCESS_KEY || ""

export async function createCheckoutSession(amount: number) {
  const body = {
    amount: amount * 100,
    currency: "eur",
    complete_checkout_url: "https://your-website.com/complete",
    error_checkout_url: "https://your-website.com/error",
  }
  const salt = crypto.randomBytes(12).toString("hex")
  const timestamp = Math.floor(new Date().getTime() / 1000)
  const signature = createSignature(
    "post",
    "/v1/checkout",
    salt,
    timestamp,
    body,
  )

  try {
    const response = await ky
      .post("https://sandboxapi.rapyd.net/v1/checkout", {
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

    return response.data
  } catch (error: any) {
    throw new Error(`Failed to create checkout session: ${error.message}`)
  }
}
