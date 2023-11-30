"use client"

import useEmblaCarousel from "embla-carousel-react"
import { AreaChart, ArrowDown, History, PieChart, Plus } from "lucide-react"

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
      <div className="embla__container  my-6 flex gap-2 lg:ml-20   ">
        <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-yellow-normal">
            <Plus className="h-6 w-6"></Plus>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">
            Alimenter mon compte
          </p>
        </div>

        <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-yellow-normal">
            <AreaChart className="h-6 w-6"></AreaChart>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">Investir</p>
        </div>
        <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-solid border-gray-700 text-gray-100 ">
            <ArrowDown className="h-6 w-6"></ArrowDown>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">
            Retirer de l'argent
          </p>
        </div>
        <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full  border border-solid border-gray-700  text-gray-100">
            <History className="h-6 w-6"></History>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">Historique</p>
        </div>
        <div className="embla__slide flex min-w-[80px] flex-col items-center gap-3 overflow-hidden  text-center  ">
          <button className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-solid border-gray-700 text-gray-100 ">
            <PieChart className="h-6 w-6"></PieChart>
          </button>
          <p className="max-w-[80px] text-sm text-gray-100">Gestion</p>
        </div>
      </div>
    </div>
  )
}
