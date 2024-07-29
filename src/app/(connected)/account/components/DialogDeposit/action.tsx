"use server"

import { GetUser } from "@/http/get-user"
import { redirect } from "next/navigation"
import Stripe from "stripe"

export async function actionCheckout(amount: number) {
  const { user } = await GetUser()

  const stripe = new Stripe(process.env.STRIPE_PRIVATE || "", {
    apiVersion: "2024-06-20",
  })

  const email = user?.email

  const customers = await stripe.customers.list({
    email,
    limit: 1,
  })

  let customerId

  if (customers.data.length === 0) {
    const newCustomer = await stripe.customers.create({
      email,
    })
    customerId = newCustomer.id
  } else {
    customerId = customers.data[0].id
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Deposit",
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer: customerId,
    success_url: `/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `/cancel`,
  })

  if (session.url) {
    redirect(session.url)
  }
}
