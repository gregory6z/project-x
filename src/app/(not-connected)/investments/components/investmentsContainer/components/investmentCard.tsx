import Image from "next/image"

import ImgCard from "../../../../../assets/imagem-card-investing.png"
import { ProgressBar } from "@/app/components/Progress"
import Link from "next/link"
import { Button } from "@/app/components/Button"

export async function InvestmentCard() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

  const response = await fetch("http://api.github.com/users/gregory6z")

  const user = await response.json

  return (
    <Link href={"investments/dsladsa"}>
      <div className="flex h-full min-h-[40vh] w-full animate-overlayShow flex-col rounded-xl border border-gray-800 bg-background-dark-900 transition-colors hover:border-yellow-hover">
        <div className="h-[40%] w-full rounded-t-xl bg-black">
          <Image
            src={ImgCard}
            alt={"image-card"}
            quality={100}
            className="h-full w-full rounded-t-lg object-contain opacity-90 xl:object-fill "
          ></Image>
        </div>
        <div className="flex h-[6%] w-full items-center bg-yellow-normal p-4">
          Manque 120 jours
        </div>
        <div className="flex h-full flex-col p-6  text-gray-100">
          <header>
            <h1 className="text-lg font-bold lg:text-xl">
              Nome do investimento
            </h1>
          </header>
          <main className="mt-6 ">
            <div className="flex flex-col gap-2">
              <div className="border-custom mb-1 flex justify-between opacity-70">
                <p>Prazo</p>
                <p>18 meses</p>
              </div>
              <div className="border-custom mb-1 flex justify-between  opacity-70">
                <p>Rentabilidade</p>
                <p>28% aa</p>
              </div>

              <div className="border-custom mb-1 flex justify-between  opacity-70">
                <p>Tipo</p>
                <p>Mercado imobiliario</p>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <p className="text-sm">5,06% Captados</p>
              <p>$50.042,00</p>
            </div>
            <div className="mt-2">
              <ProgressBar />
            </div>
          </main>
          <Button
            text="Investir"
            variant="md"
            className="mt-auto  py-4  "
          ></Button>
        </div>
      </div>
    </Link>
  )
}
