import { MotionElement } from "../Framer-motion/motion"
import { SliderContainer } from "../SliderContainer"
import { CardInvestiment } from "./components/CardInvestment"

export function LastInvestments() {
  return (
    <div className=" flex w-full border-b  border-solid border-gray-800 bg-background-dark-900  px-[1.125rem]  lg:items-center lg:py-16 xl:py-0 ">
      <div className=" flex flex-col   gap-4 overflow-hidden py-16 lg:mx-auto  lg:h-screen lg:max-w-[1120px] lg:justify-center   lg:gap-16  lg:px-16  lg:py-16  xl:px-0 ">
        <MotionElement delay={0}>
          <h1 className=" w-[80%] text-2xl text-gray-100 lg:text-6xl">
            Consultez les dernières{" "}
            <span className="text-yellow-normal">offres</span> publiées
          </h1>
        </MotionElement>

        <SliderContainer>
          <CardInvestiment></CardInvestiment>
          <CardInvestiment></CardInvestiment>
          <CardInvestiment></CardInvestiment>
          <CardInvestiment></CardInvestiment>
          <CardInvestiment></CardInvestiment>
          <CardInvestiment></CardInvestiment>
          <CardInvestiment></CardInvestiment>
          <CardInvestiment></CardInvestiment>
        </SliderContainer>
      </div>
    </div>
  )
}
