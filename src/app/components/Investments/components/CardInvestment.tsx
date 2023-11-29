import Image from "next/image"
import imageCard from "../../../assets/boavista.jpg"
import { Button } from "../../Button"
import { ProgressBar } from "../../Progress"
import { TrendingUp } from "lucide-react"

export function CardInvestiment() {
  return (
    <div className="flex h-full w-full flex-col ">
      <div className="relative flex h-[40%] w-full  ">
        <Image src={imageCard} alt={""} className="object-fill"></Image>
        <div className="absolute left-2 top-4 z-10 rounded-md bg-yellow-normal px-2 py-1 ">
          <p>Oferta Aberta</p>
        </div>
      </div>
      <div className="mb-2 flex flex-1  flex-col justify-between gap-4 p-5 text-sm text-gray-100/90">
        <div className=" text-xl">
          <strong>Varandas Boas vistas</strong>
        </div>

        <div className="flex flex-col gap-1">
          <p>
            <span className="">Rentabilidade:</span>{" "}
            <strong>18,04% a.a.</strong>
          </p>

          <div className="flex flex-col gap-2">
            <p>
              <span className="">prazo:</span> <strong>25 meses</strong>
            </p>
          </div>

          <div className=" flex flex-col">
            <p>
              <span className="opacity-90">Tipo:</span>{" "}
              <strong>Mercado imobiliario</strong>
            </p>
          </div>
        </div>
        <div className="mb-1 flex flex-col gap-2">
          <div className=" flex justify-between">
            <p className="text-sm">5,06% Captados</p>
            <p>$50.042,00</p>
          </div>
          <ProgressBar></ProgressBar>
        </div>
        <Button variant="md" className="   " text={` Savoir plus `}></Button>
      </div>
    </div>
  )
}
