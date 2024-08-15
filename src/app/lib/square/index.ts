import { createTransaction } from "@/http/create-transaction"
import { GetUser } from "@/http/get-user"
import { RegisterInvestmentPurchase } from "@/http/register-investment-purchase"
import { updateUser } from "@/http/update-user"
import { Client, Environment } from "square"

const client = new Client({
  environment: Environment.Sandbox, // Usando o ambiente Sandbox para testes
  accessToken: process.env.ACCESS_TOKEN_SQUARE, // Substitua pelo seu token de Sandbox
})

const testLocationId = "LG6AZ2R86JMWM"

const parisInvLocationId = "LQXH9YAP1M3SC"

async function createCustomer() {
  const { user } = await GetUser()

  if (!user.customerId) {
    const response = await client.customersApi.createCustomer({
      givenName: user.firstName,
      familyName: user.lastName,
      emailAddress: user.email,
      phoneNumber: user.phone,
      referenceId: user.id,
    })

    return response.result.customer?.id
  }
}

export async function createDepositCheckout(amount: number) {
  try {
    const { user, bankAccount } = await GetUser()

    let customerId = null

    if (!user.customerId) {
      customerId = await createCustomer()

      await updateUser({ customerId })
    }

    if (user.customerId) {
      const { transaction } = await createTransaction({
        amount,
        accountId: bankAccount.id,
        type: "deposit",
      })

      if (transaction.id) {
        const response = await client.checkoutApi.createPaymentLink({
          order: {
            locationId: testLocationId,
            customerId: user.customerId,
            referenceId: transaction.id,
            lineItems: [
              {
                name: "Deposit",
                quantity: "1",
                basePriceMoney: {
                  amount: BigInt(amount * 100),
                  currency: "EUR",
                },
              },
            ],
          },

          checkoutOptions: {
            redirectUrl: "http://localhost:3000/success",
            askForShippingAddress: false,

            acceptedPaymentMethods: {
              googlePay: true,
            },
          },
        })

        return { url: response.result.paymentLink?.url }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export async function createPurchaseInvestmentCheckout({
  amount,
  investmentId,
  investmentName,
}: {
  amount: number
  investmentId: string
  investmentName: string
}) {
  try {
    const { user, bankAccount } = await GetUser()

    let customerId = null

    if (!user.customerId) {
      customerId = await createCustomer()

      await updateUser({ customerId })
    }

    if (user.customerId) {
      const { investmentPurchase } = await RegisterInvestmentPurchase({
        accountId: bankAccount.id,
        investmentId,
        initialAmount: amount,
      })

      if (investmentPurchase.id) {
        const response = await client.checkoutApi.createPaymentLink({
          order: {
            locationId: testLocationId,
            customerId: user.customerId,
            referenceId: investmentPurchase.id,
            lineItems: [
              {
                uid: investmentId,
                name: investmentName,
                quantity: "1",
                basePriceMoney: {
                  amount: BigInt(amount * 100),
                  currency: "EUR",
                },
              },
            ],
          },

          checkoutOptions: {
            redirectUrl: "http://localhost:3000/success",
            askForShippingAddress: false,

            acceptedPaymentMethods: {
              googlePay: true,
              applePay: true,
            },
          },
        })

        return { url: response.result.paymentLink?.url }
      }
    }
  } catch (error) {
    console.log(error)
  }
}
