import { SliderContainer } from "@/app/components/SliderContainer"
import { Info } from "./components/Info"
import { CardDeposition } from "./components/CardDeposition"
import { MotionElement } from "@/app/components/Framer-motion/motion"

export function Depositions() {
  return (
    <div className=" flex h-full w-full  bg-background-dark-800  px-[1.125rem] lg:py-16 xl:h-screen ">
      <div className=" flex flex-col   gap-12 overflow-hidden py-16 lg:mx-auto lg:h-full lg:max-w-[1120px] lg:justify-center lg:gap-16  lg:px-16  lg:py-16 xl:px-0 xl:py-0">
        <Info />
        <MotionElement delay={0}>
          <h1 className=" h1-custom  text-gray-100 lg:w-[80%]">
            Ce que disent les{" "}
            <span className="text-yellow-normal">investisseurs</span>
          </h1>
        </MotionElement>
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