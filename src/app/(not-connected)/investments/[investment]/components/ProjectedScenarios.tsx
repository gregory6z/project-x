import { Button } from "@/app/components/Button"
import Image from "next/image"

import imgUpp from "../../../assets/capital_accumulation-removebg-preview.png"

export function ProjectedScenarios() {
  return (
    <div className="  mb-16  flex  h-full w-full grid-cols-2 items-center rounded-xl  border-solid border-gray-700 lg:mb-32 lg:gap-12 lg:border-2  lg:bg-background-dark-900 lg:p-14">
      <div className="flex w-full  flex-col ">
        <h1 className="mb-16 text-2xl font-semibold tracking-tight text-gray-100/90 lg:text-4xl">
          Scénarios projetés{" "}
        </h1>

        <div className="flex gap-2   ">
          <Button text="Optimiste"></Button>
          <Button variant="secondary" text="Base"></Button>
          <Button variant="secondary" text="Pessimiste"></Button>
        </div>
        <div className="mt-8 flex flex-col gap-4 opacity-70  lg:text-2xl  ">
          <div className="border-custom flex justify-between text-gray-100 ">
            <p>Exposição Máxima</p>
            <p>R$ 1.000.000,00</p>
          </div>
          <div className="  border-custom flex justify-between text-gray-100">
            <p>Rentabilidade</p>
            <p>R$ 1.000.000,00</p>
          </div>
          <div className="border-custom flex justify-between text-gray-100">
            <p>Prazo</p>
            <p>R$ 1.000.000,00</p>
          </div>

          <div className="border-custom flex justify-between text-gray-100">
            <p>Múltiplo</p>
            <p>R$ 1.000.000,00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
