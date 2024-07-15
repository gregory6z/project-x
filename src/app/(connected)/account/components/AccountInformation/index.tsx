import { ChevronRight } from "lucide-react"
import { ButtonsScrolls } from "../ButtonsScrolls"
import { auth } from "@/auth/auth"

export async function AccountInformation() {
  const { bankAccount } = await auth()

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("fr", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  const formattedBankAccountBalance = formatCurrency(bankAccount.balance)

  return (
    <div className="flex flex-1 flex-col ">
      <div className="flex h-full w-full   flex-col gap-2 rounded-xl border-2 border-solid border-yellow-normal bg-yellow-normal/30 p-4 tracking-wide ">
        <div className="flex items-center justify-between">
          <p className="text-lg  font-bold text-gray-100">Compte courant</p>
          <ChevronRight className="text-gray-100" />
        </div>
        <p className="text-3xl font-semibold text-yellow-normal">
          € {formattedBankAccountBalance}
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-lg  font-bold text-gray-100">
              Mes Investissements
            </p>

            <ChevronRight className="text-gray-100" />
          </div>
          <p className="text-xl font-semibold  text-yellow-normal">
            € 23.000,00
          </p>
          <div className="flex justify-between text-gray-100">
            <div>
              <p className="opacity-70">Variation: </p>
              <p className="text-xl font-semibold text-green-400">+ € 520,00</p>
            </div>
            <div>
              <p className="opacity-70">Rentabilité:</p>{" "}
              <p className="text-xl font-semibold text-green-400">+ 2,32%</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ButtonsScrolls></ButtonsScrolls>
      </div>
    </div>
  )
}
