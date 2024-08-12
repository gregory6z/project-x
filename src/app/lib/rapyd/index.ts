import ky from "ky"
import crypto from "crypto"
import { GetUser } from "@/http/get-user"
import { updateUser } from "@/http/update-user"

const secretKey = process.env.RAPYD_SECRET_KEY || "" // Nunca transmita a chave secreta sozinha.
const accessKey = process.env.RAPYD_ACCESS_KEY // A chave de acesso do Client Portal.
const log = true

async function makeRequest(method: string, urlPath: string, body: any = null) {
  try {
    const httpMethod = method.toLowerCase() // get|put|post|delete - deve ser minúsculo.
    const httpBaseURL = "https://sandboxapi.rapyd.net"
    const salt = generateRandomString(8) // Gerado aleatoriamente para cada requisição.
    const idempotency = new Date().getTime().toString()
    const timestamp = Math.round(new Date().getTime() / 1000) // Tempo Unix atual (segundos).
    const signature = sign(httpMethod, urlPath, salt, timestamp, body)

    // Remove a barra inicial de urlPath se existir
    if (urlPath.startsWith("/")) {
      urlPath = urlPath.substring(1)
    }

    const options = {
      prefixUrl: httpBaseURL,
      method: httpMethod,
      headers: {
        "Content-Type": "application/json",
        salt,
        timestamp: timestamp.toString(),
        signature,
        access_key: accessKey,
        idempotency,
      },
      json: body,
    }

    const response = await ky(urlPath, options).json()
    log && console.log(`Response: ${JSON.stringify(response)}`)
    return response
  } catch (error) {
    console.error("Error generating request options", error)
    throw error
  }
}

function sign(
  method: string,
  urlPath: string,
  salt: string,
  timestamp: number,
  body: any,
) {
  try {
    let bodyString = ""
    if (body) {
      bodyString = JSON.stringify(body) // JSON stringificado sem espaços em branco.
      bodyString = bodyString === "{}" ? "" : bodyString
    }

    const toSign =
      method + urlPath + salt + timestamp + accessKey + secretKey + bodyString
    log && console.log(`toSign: ${toSign}`)

    const hash = crypto.createHmac("sha256", secretKey)
    hash.update(toSign)
    const signature = Buffer.from(hash.digest("hex")).toString("base64")
    log && console.log(`signature: ${signature}`)

    return signature
  } catch (error) {
    console.error("Error generating signature", error)
    throw error
  }
}

function generateRandomString(size: number) {
  try {
    return crypto.randomBytes(size).toString("hex")
  } catch (error) {
    console.error("Error generating salt", error)
    throw error
  }
}

async function createCustomer() {
  const { user } = await GetUser()

  if (!user.customerId) {
    const data = {
      name: user.firstName + " " + user.lastName,
      email: user.email,
    }

    try {
      const response: any = await makeRequest("post", "/v1/customers", data)
      await updateUser({ customerId: response.data.id })

      return response.data.id
    } catch (error) {}
  } else {
    return console.log("Customer already exists")
  }
}

export async function createCheckout(amount: number) {
  const { user } = await GetUser()

  let customerId = null

  if (!user.customerId) {
    customerId = await createCustomer()

    await updateUser({ customerId })
  }

  if (user.customerId) {
    const checkoutData = {
      amount,
      currency: "EUR",
      country: "SG",
      error_payment_url: "https://www.gregorypraxedes.com/",
      complete_payment_url: "http://example.com/success",
      customer: customerId,
      language: "fr",
      metadata: {
        merchant_defined: true,
      },
    }

    try {
      const response: any | string = await makeRequest(
        "post",
        "/v1/checkout",
        checkoutData,
      )

      return { url: response.data.redirect_url }
    } catch (error) {
      console.log(error)
    }
  }
}
