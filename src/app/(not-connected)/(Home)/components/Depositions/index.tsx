import { SliderContainer } from "@/app/components/SliderContainer"
import { Info } from "./components/Info"
import { CardDeposition } from "./components/CardDeposition"
import { MotionElement } from "@/app/components/Framer-motion/motion"

export function Depositions() {
  return (
    <div className=" flex h-[calc(100vh+5rem)] w-full  bg-background-dark-800  px-[1.125rem] lg:py-16  ">
      <div className=" flex flex-col   gap-16 overflow-hidden  lg:mx-auto lg:h-full lg:max-w-[1225px] lg:justify-center   xl:px-0 xl:py-0">
        <div className="flex flex-col gap-4">
          <MotionElement>
            <h1 className="    w-[100%] break-words text-4xl   	font-semibold  tracking-tight text-gray-100/90   lg:w-[60%]   ">
              Voyons de plus près les opinions passionnantes des investisseurs.
            </h1>
          </MotionElement>
          <MotionElement delay={0.25}>
            <p className="text-gray-100/60 lg:w-[60%] lg:text-xl ">
              Faites comme eux et atteignez le succès financier en rejoignant
              les investisseurs prospères. Découvrez des opportunités lucratives
              et une croissance solide dès maintenant!
            </p>
          </MotionElement>
        </div>

        <SliderContainer depositions>
          <CardDeposition />
          <CardDeposition />
          <CardDeposition />
          <CardDeposition />
          <CardDeposition />
          <CardDeposition />
          <CardDeposition />
          <CardDeposition />
          <CardDeposition />
        </SliderContainer>
      </div>
    </div>
  )
}
