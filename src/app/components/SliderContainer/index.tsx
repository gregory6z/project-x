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
        delay={1}
        className="embla__container flex cursor-grab gap-4"
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={`embla__slide  flex  min-w-[296px] items-center justify-center  overflow-hidden rounded-md border border-solid border-gray-800  ${
              depositions
                ? "min-h-[296px] bg-background-dark-700"
                : "h-[480px] min-h-[480px] bg-background-dark-800"
            }  `}
          >
            {child}
          </div>
        ))}
      </MotionCascade>
    </div>
  )
}
