"use client"

import useEmblaCarousel from "embla-carousel-react"
import { AreaChart, History, PieChart } from "lucide-react"
import { ButtonScroll } from "./components/buttonScroll"
import { DialogDeposit } from "../DialogDeposit"
import { DialogRetrait } from "../DialogRetrait"
import Link from "next/link"

interface CarouselProps {
  children: React.ReactNode[]
  depositions?: boolean
}

export function ButtonsScrolls() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <div className="embla w-full " ref={emblaRef}>
      <div className="embla__container  my-6 flex gap-2 lg:ml-20     ">
        {/* <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-yellow-normal">
            <Plus className="h-6 w-6 text-background"></Plus>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">
            Alimenter mon compte
          </p>
        </div> */}

        {/* <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-yellow-normal lg:h-16 lg:w-16">
            <AreaChart className="h-6 w-6 text-background"></AreaChart>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">Investir</p>
        </div> */}
        <div className="embla__slide">
          <DialogDeposit />
        </div>

        <div className="embla__slide">
          <Link href="/account/investments">
            <ButtonScroll Icon={AreaChart}> Investir</ButtonScroll>
          </Link>
        </div>

        <div className="embla__slide">
          <DialogRetrait />
        </div>

        <div className="embla__slide">
          <Link href="/account/history">
            <ButtonScroll black Icon={History}>
              {" "}
              Historique
            </ButtonScroll>
          </Link>
        </div>
        <div className="embla__slide"></div>
        <ButtonScroll black Icon={PieChart}>
          {" "}
          Gestion
        </ButtonScroll>

        {/* <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-solid border-gray-700 text-gray-100  ">
            <ArrowDown className="h-6 w-6"></ArrowDown>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">
            Retirer de l'argent
          </p>
        </div> */}
        {/* <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full  border border-solid border-gray-700  text-gray-100">
            <History className="h-6 w-6"></History>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">Historique</p>
        </div> */}
        {/* <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center  ">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-solid border-gray-700 text-gray-100 ">
            <PieChart className="h-6 w-6"></PieChart>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">Gestion</p>
        </div> */}
      </div>
    </div>
  )
}
