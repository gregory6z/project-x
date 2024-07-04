import { Button } from "@/app/components/Button"
import { Pin } from "lucide-react"

export function HighlightedFundraising() {
  return (
    <div className="  w-full rounded-md border border-solid border-gray-700 bg-background-dark-700 p-4 lg:h-[70%] lg:w-[40%] ">
      <header className="flex items-center gap-2 text-gray-100">
        <Pin className="h-6 w-6"></Pin>
        <div className="flex w-full items-center justify-between">
          <p className="text-bold  ">Collecte en vedette</p>
          <div className="h-10 w-16 bg-gray-900"></div>
        </div>
      </header>
      <div className=" flex flex-col gap-2">
        <p className="text-lg font-semibold text-yellow-normal">
          Investissement Name
        </p>
        <div className=" flex flex-col gap-1">
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Prazo </p>
            <p>18 meses</p>
          </div>
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Rentabilidade </p>
            <p>18 meses</p>
          </div>
          <div className="border-custom flex justify-between text-white opacity-70">
            <p>Tipo </p>
            <p>18 meses</p>
          </div>
        </div>
      </div>

      {/* <Button text={"Investir"} variant="md" className="mt-6"></Button> */}
    </div>
  )
}
