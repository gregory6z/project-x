import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_PRIVATE || "", {
  apiVersion: "2024-06-20",
})

export default async function createCheckoutSession(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const { amount, email } = req.body

      if (!email) {
        return res.status(400).json({ error: "Email is required" })
      }

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
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      })

      res.status(200).json({ url: session.url })
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: (err as Error).message })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end("Method Not Allowed")
  }
}
