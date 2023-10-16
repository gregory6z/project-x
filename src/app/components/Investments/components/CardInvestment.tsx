import Image from "next/image"
import imageCard from "../../../assets/boavista.jpg"

export function CardInvestiment() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative flex h-[35%] w-full ">
        <Image src={imageCard} alt={""} className="object-cover"></Image>
        <div className="absolute left-2 top-4 z-10 rounded-md bg-yellow-normal px-2 py-1">
          <p>Oferta Aberta</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 text-gray-100">
        <div className="">
          <strong>Varandas Boas vistas</strong>
          <p className="text-sm opacity-70">Mercado imobiliario</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>
            <span className="opacity-90">Rentabilidade:</span>{" "}
            <strong>18,04% a.a.</strong>
          </p>
          <p>
            <span className="opacity-90">prazo:</span> <strong>25 meses</strong>
          </p>
          <p>
            <span className="opacity-90">Modalidade:</span>{" "}
            <strong>Bullet</strong>
          </p>
        </div>

        <div className="flex flex-col ">
          <p>
            <span className="opacity-90">Captados:</span>{" "}
            <strong className="text-yellow-normal">127.000,00 $</strong>
          </p>
          <p>
            <span className="opacity-90">investidores:</span>{" "}
            <strong>25</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
