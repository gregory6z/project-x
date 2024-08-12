import ky from "ky"

// Defina a interface para o tipo de resposta esperado
interface InvoiceResponse {
  status: string
  data: {
    txn_id: string
    invoice_url: string
    // Adicione outras propriedades conforme necessário
  }
}

export const createInvoice = async () => {
  try {
    const response = await ky
      .get("https://api.plisio.net/api/v1/invoices/new", {
        searchParams: {
          source_currency: "USD", // Ajustado para USD conforme exemplo
          source_amount: "10.0", // Convertendo para string
          order_number: "132123141543543542", // Convertendo para string
          currency: "BTC",
          email: "gregoryprax@gmail.com",
          order_name: "deposit",
          expire_min: "5", // Ajustado para btc1 conforme exemplo
          api_key: process.env.PLICIO_SECRET_KEY || "", // Garantindo que não seja undefined
        },
      })
      .json<InvoiceResponse>()

    console.log(response.data)
  } catch (error) {
    console.log(error.message)
  }
}
