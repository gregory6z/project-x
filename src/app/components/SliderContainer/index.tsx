"use client"

import useEmblaCarousel from "embla-carousel-react"
import { MotionCascade } from "../Framer-motion/motion"

interface CarouselProps {
  children: React.ReactNode[]
  depositions?: boolean
}

export function SliderContainer({ children, depositions }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <div className="embla flex w-full flex-col gap-4" ref={emblaRef}>
      <MotionCascade
        delay={2}
        className="embla__container flex cursor-grab gap-4"
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`embla__slide  flex   items-center justify-center  overflow-hidden rounded-md border border-solid border-gray-800  ${
              depositions
                ? ", min-h-[296px] min-w-[296px] bg-background-dark-700 lg:min-w-[500px]"
                : "bg-background-dark-800, h-[480px] min-h-[480px] min-w-[296px]"
            }  `}
          >
            {child}
          </div>
        ))}
      </MotionCascade>
    </div>
  )
}
