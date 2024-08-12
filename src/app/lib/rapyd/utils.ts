import crypto from "crypto"

const accessKey = process.env.RAPYD_ACCESS_KEY || ""
const secretKey = process.env.RAPYD_SECRET_KEY || ""

export function createSignature(
  method: string,
  urlPath: string,
  salt: string,
  timestamp: number,
  body: any,
) {
  const toSign =
    method +
    urlPath +
    salt +
    timestamp +
    accessKey +
    secretKey +
    JSON.stringify(body)
  const hash = crypto
    .createHmac("sha256", secretKey)
    .update(toSign)
    .digest("hex")
  return Buffer.from(hash).toString("base64")
}
