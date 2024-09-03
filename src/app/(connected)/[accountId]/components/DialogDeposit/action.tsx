"use server"

import { createDepositCheckout } from "@/app/lib/square"
import { z } from "zod"

const DepositSchema = z.object({
  amount: z.string(),
})

export async function dialogDeposit(data: FormData) {
  const result = DepositSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { amount } = result.data

  const formattedAmount = amount.replace("€", "").trim()

  try {
    // const checkoutResponse = await createCheckout(Number(formattedAmount))

    const checkoutResponse = await createDepositCheckout(
      Number(formattedAmount),
    )

    if (checkoutResponse && checkoutResponse.url) {
      return { success: true, message: checkoutResponse.url, errors: null }
    } else {
      throw new Error("URL de checkout não encontrada.")
    }
  } catch (err) {
    if (err) {
      const { message } = err as { message: string }

      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    }
  }
}
